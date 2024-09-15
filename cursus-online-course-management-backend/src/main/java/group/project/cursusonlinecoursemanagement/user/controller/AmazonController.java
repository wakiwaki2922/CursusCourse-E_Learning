package group.project.cursusonlinecoursemanagement.user.controller;

import group.project.cursusonlinecoursemanagement.shared.domain.FileMetadata;
import group.project.cursusonlinecoursemanagement.shared.service.S3Service;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.net.URL;
import java.util.List;

@Tag(
        name = "Amazon Service S3 for Upload Files"
)
@RestController
@Validated
@RequestMapping("/api/amazon/")
public class AmazonController {

    public S3Service s3Service;

    public AmazonController(S3Service s3Service) {
        this.s3Service = s3Service;
    }

    @Operation(
            summary = "Upload an object",
            description = "Upload an object to S3 storage"
    )
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "File uploaded successfully",
                    content = @Content(mediaType = "application/json",
                            schema = @Schema(implementation = FileMetadata.class))),
            @ApiResponse(responseCode = "400", description = "Invalid input",
                    content = @Content),
            @ApiResponse(responseCode = "500", description = "Internal server error",
                    content = @Content)
    })
    @SecurityRequirement(
            name = "Bear Authentication"
    )
    @PostMapping(value = "/auth/{fileName}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<FileMetadata> uploadAttachment(@PathVariable(name = "fileName")
                                                         @Pattern(regexp = "[a-zA-Z0-9_\\s]*", message = "Key name must not contain Vietnamese characters")
                                                         @Size(max = 50, message = "Key name must not exceed 50 characters")
                                                         String keyName,
                                                         @RequestPart(value = "file")
                                                         MultipartFile file
    ) {
        return new ResponseEntity<>(s3Service.uploadAttachment(file, keyName), HttpStatus.OK);
    }

    @Operation(
            summary = "List all objects in S3 bucket",
            description = "Fetches a list of all objects stored in the specified S3 bucket"
    )
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully retrieved list of objects"),
            @ApiResponse(responseCode = "500", description = "Internal server error")
    })
    @SecurityRequirement(
            name = "Bear Authentication"
    )
    @GetMapping("/auth/")
    public ResponseEntity<List<FileMetadata>> viewObjects() {
        return new ResponseEntity<>(s3Service.listObjects(), HttpStatus.OK);
    }

    @Operation(
            summary = "Delete an object from S3",
            description = "Deletes an object from the specified S3 bucket using the provided key"
    )
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204", description = "Object successfully deleted"),
            @ApiResponse(responseCode = "404", description = "Object not found"),
            @ApiResponse(responseCode = "500", description = "Internal server error")
    })
    @SecurityRequirement(
            name = "Bear Authentication"
    )
    @DeleteMapping("/auth/{key}")
    public ResponseEntity<String> deleteObject(@PathVariable String key) {
        return new ResponseEntity<>(s3Service.deleteObject(key), HttpStatus.OK);
    }

    @Operation(
            summary = "Get signed URL for a file",
            description = "Returns a signed URL for a file in Amazon S3, valid for 60 minutes."
    )
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully generated the signed URL."),
            @ApiResponse(responseCode = "400", description = "Bad Request if the file name is invalid."),
            @ApiResponse(responseCode = "500", description = "Internal Server Error.")
    })
    @SecurityRequirement(
            name = "Bear Authentication"
    )
    @GetMapping("/auth/signUrl")
    public ResponseEntity<String> getSignUrl(@RequestParam("fileName") String fileName) {
            URL url = s3Service.generatePresignedUrl24Hours(fileName); // 60 minutes
            return new ResponseEntity<>(url.toString(), HttpStatus.OK);
    }
}
