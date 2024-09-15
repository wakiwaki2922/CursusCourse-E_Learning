package group.project.cursusonlinecoursemanagement.shared.service;

import com.amazonaws.AmazonServiceException;
import com.amazonaws.SdkClientException;
import com.amazonaws.services.neptunedata.model.S3Exception;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.*;
import group.project.cursusonlinecoursemanagement.shared.domain.FileMetadata;
import jakarta.validation.ConstraintViolationException;
import org.apache.tika.Tika;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.util.Date;
import java.util.List;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;

@Component
public class S3Service {

    private final Tika tika = new Tika();
    
    private final AmazonS3 s3Client;
    @Value("${amazonProperties.bucketName}")
    private String bucketName;
    
    public S3Service(AmazonS3 s3Client) {
        this.s3Client = s3Client;
    }
    
    public FileMetadata uploadAttachment(MultipartFile file, String keyName) {
        return put(bucketName, keyName, file);
    }

    public FileMetadata put(String bucket, String keyName, MultipartFile file) {
        String key = generateFileName(keyName, file);
        FileMetadata metadata = FileMetadata.builder()
                .bucket(bucket)
                .key(key)
                .extension(StringUtils.getFilenameExtension(file.getOriginalFilename()))
                .mime(tika.detect(file.getOriginalFilename()))
                .size(file.getSize())
                .build();

        ObjectMetadata objectMetadata = new ObjectMetadata();
        objectMetadata.setContentLength(metadata.getSize());
        objectMetadata.setContentType(metadata.getMime());

        try {
            validateFile(file);
            InputStream stream = file.getInputStream();
            PutObjectRequest putObjectRequest = new PutObjectRequest(bucket, key, stream, objectMetadata);
            PutObjectResult putObjectResult = s3Client.putObject(putObjectRequest);
            metadata.setUrl(s3Client.getUrl(bucket, key).toString());
        } catch (AmazonServiceException e) {
            throw new RuntimeException("Failed to put object from S3. Service error: " + e.getErrorMessage(), e);
        } catch (SdkClientException e) {
            throw new RuntimeException("Failed to put object from S3. SDK error: " + e.getMessage(), e);
        } catch (ConstraintViolationException e) {
            throw new RuntimeException("Failed to put object from S3. Invalid file: " + e.getMessage(), e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        return metadata;
    }

    private String generateFileName(String keyName, MultipartFile file) {
        String fileName = file.getOriginalFilename();
        int lastDotIndex = fileName != null ? fileName.lastIndexOf('.') : 0;
        String extension = fileName != null ? fileName.substring(lastDotIndex + 1) : null;
        return keyName + "." + extension;
    }

    public List<FileMetadata> listObjects() {
        try {
            ObjectListing objectListing = s3Client.listObjects(bucketName);
            List<S3ObjectSummary> listObjects = objectListing.getObjectSummaries();
            return listObjects.stream()
                    .map(summary -> FileMetadata.builder()
                            .bucket(bucketName)
                            .key(summary.getKey())
                            .mime(s3Client.getObjectMetadata(bucketName, summary.getKey()).getContentType())
                            .size(summary.getSize())
                            .extension(StringUtils.getFilenameExtension(summary.getKey()))
                            .url(s3Client.getUrl(bucketName, summary.getKey()).toString())
                            .build())
                    .collect(Collectors.toList());
        } catch (AmazonServiceException e) {
            throw new RuntimeException("Failed to get list objects from S3. Service error: " + e.getErrorMessage(), e);
        } catch (SdkClientException e) {
            throw new RuntimeException("Failed to get list objects from S3. SDK error: " + e.getMessage(), e);
        }
    }

//    public FileMetadata renameObject(String bucketName, String oldKeyName,String oldTitle, String newTitle) {
//        try {
//            //Generate new key name
//            String newKeyName = replacePartInFileName(oldKeyName, oldTitle, newTitle);
//            // Copy the object to a new key
//            CopyObjectRequest copyObjectRequest = new CopyObjectRequest(bucketName, oldKeyName, bucketName, newKeyName);
//            s3Client.copyObject(copyObjectRequest);
//            // Delete the old object
//            s3Client.deleteObject(bucketName, oldKeyName);
//            return FileMetadata.builder()
//                    .bucket(bucketName)
//                    .key(newKeyName)
//                    .build();
//        } catch (AmazonServiceException e) {
//            throw new RuntimeException("Failed to rename object from S3. Service error: " + e.getErrorMessage(), e);
//        } catch (SdkClientException e) {
//            throw new RuntimeException("Failed to rename object from S3. SDK error: " + e.getMessage(), e);
//        }
//    }

    public String deleteObject(String key) {
        try {
            s3Client.deleteObject(bucketName, key);
            return "Success to delete object from S3";
        } catch (AmazonServiceException e) {
            throw new RuntimeException("Failed to delete object from S3. Service error: " + e.getErrorMessage(), e);
        } catch (SdkClientException e) {
            throw new RuntimeException("Failed to delete object from S3. SDK error: " + e.getMessage(), e);
        }
    }

    public URL generatePresignedUrl24Hours(String fileName) {
        try {
            Date expiration = new Date();
            long expTimeMillis = expiration.getTime() + TimeUnit.HOURS.toMillis(24);
            expiration.setTime(expTimeMillis);
            GeneratePresignedUrlRequest generatePresignedUrlRequest =
                    new GeneratePresignedUrlRequest(bucketName, fileName)
                            .withMethod(com.amazonaws.HttpMethod.GET)
                            .withExpiration(expiration);

            return s3Client.generatePresignedUrl(generatePresignedUrlRequest);
        } catch (S3Exception e) {
            throw new RuntimeException("Error generating signed URL on S3Exception: " + e.getMessage(), e);
        } catch (Exception e) {
            throw new RuntimeException("Error generating signed URL: " + e.getMessage(), e);
        }
    }

//    private String generateFileName(String keyName, MultipartFile file) {
//        LocalDateTime now = LocalDateTime.now();
//        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HHmmss_ddMMyyyy");
//        String formattedDate = now.format(formatter);
//        String fileName = file.getOriginalFilename();
//        int lastDotIndex = fileName != null ? fileName.lastIndexOf('.') : 0;
//        String extension = fileName != null ? fileName.substring(lastDotIndex + 1) : null;
//        return formattedDate + "_" + toCamelCase(keyName) + "." + extension;
//    }

//    public static String replacePartInFileName(String fileName, String oldPart, String newPart) {
//        if (fileName == null || oldPart == null || newPart == null) {
//            throw new RuntimeException("Các tham số không được null");
//        }
//        String[] parts = fileName.split(oldPart);
//        // Kiểm tra nếu oldPart không tồn tại trong fileName
//        if (parts.length < 2) {
//            throw new RuntimeException("Phần cần thay thế không tồn tại trong tên tệp.");
//        }
//        // Xây dựng lại chuỗi với phần mới
//        return parts[0] + newPart + parts[1];
//    }
//
//
//    private String toCamelCase(String input) {
//        // Tách chuỗi thành các từ
//        String[] parts = input.split(" ");
//
//        // Xây dựng chuỗi camelCase
//        StringBuilder camelCaseString = new StringBuilder();
//
//        for (int i = 0; i < parts.length; i++) {
//            String part = parts[i];
//            if (i == 0) {
//                // Chữ đầu tiên viết thường
//                camelCaseString.append(part.toLowerCase());
//            } else {
//                // Chữ cái đầu tiên của từ sau viết hoa, các chữ còn lại viết thường
//                camelCaseString.append(part.substring(0, 1).toUpperCase());
//                camelCaseString.append(part.substring(1).toLowerCase());
//            }
//        }
//
//        return camelCaseString.toString();
//    }

    private void validateFile(MultipartFile file) {
        long fileSize = file.getSize();
        String fileName = file.getOriginalFilename();
        String fileExtension = null;
        if (fileName != null) {
            fileExtension = getFileExtension(fileName);
        }
        if (!List.of("jpg", "jpeg", "png", "pdf").contains(fileExtension != null ? fileExtension.toLowerCase() : null)) {
            throw new ConstraintViolationException("File type not allowed", null);
        } else if (List.of("jpg", "jpeg", "png", "pdf").contains(fileExtension != null ? fileExtension.toLowerCase() : null) && fileSize > 10 * 1024 * 1024) {
            throw new ConstraintViolationException("File size must not exceed 10MB", null);
        }
    }

    private String getFileExtension(String fileName) {
        int lastDotIndex = fileName.lastIndexOf('.');
        if (lastDotIndex != -1) {
            return fileName.substring(lastDotIndex + 1);
        }
        return "";
    }
}
