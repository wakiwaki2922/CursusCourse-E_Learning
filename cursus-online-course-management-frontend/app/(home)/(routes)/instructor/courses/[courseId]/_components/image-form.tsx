"use client";

import * as z from "zod";
import { Button } from "@/components/ui/button";
import { ImageIcon, Pencil, PlusCircle } from "lucide-react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Course } from "@/types/Course";
import FileUpload from "@/components/file-upload";
import { uploadThumbnail } from "@/actions/edit-course";

interface ImageFormProps {
  initialData: Course;
  courseId: string;
  onCourseUpdated: () => void;
}

const ImageForm = ({
  initialData,
  courseId,
  onCourseUpdated,
}: ImageFormProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((current) => !current);

  const uploadImage = async (courseId: string, file: File) => {
    try {
      console.log("Uploading image", courseId, file);
      const uploadResponse = await uploadThumbnail(courseId, file);
      toast.success("Image uploaded successfully");
      toggleEdit();
      onCourseUpdated();
    } catch (error: any) {
      toast.error(error.message || "Failed to upload image");
    }
  };

  return (
    <>
      <Toaster />
      <div className="mt-6 border bg-slate-100 rounded-md p-4">
        <div className="font-medium flex items-center justify-between">
          Course Image
          <Button onClick={toggleEdit} variant="ghost">
            {isEditing && <>Cancel</>}
            {!isEditing && !initialData.thumbnailUrl && (
              <>
                <PlusCircle className="h-4 w-4 mr-2" />
                Add image
              </>
            )}
            {!isEditing && initialData.thumbnailUrl && (
              <>
                <Pencil className="h-4 w-4 mr-2" />
                Edit image
              </>
            )}
          </Button>
        </div>
        {!isEditing &&
          (!initialData.thumbnailUrl ? (
            <div className="flex items-center justify-center h-60 bg-slate-200 rounded-md">
              <ImageIcon className="h-10 w-10 text-slate-500" />
            </div>
          ) : (
            <div className="relative aspect-video mt-2">
              <Image
                alt="Upload"
                fill
                className="object-cover rounded-md"
                src={initialData.thumbnailUrl}
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          ))}
        {isEditing && (
          <div>
            <FileUpload
              className="p-10 my-4 border border-muted-foreground rounded-md"
              id={courseId}
              onUpload={uploadImage}
            />
            <div className="text-xs text-muted-foreground mt-4">
              16:9 aspect ratio recommended
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ImageForm;
