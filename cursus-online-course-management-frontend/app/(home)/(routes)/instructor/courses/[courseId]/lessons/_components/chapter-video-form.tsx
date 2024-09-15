"use client";

import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Pencil, PlusCircle, VideoIcon } from "lucide-react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Lesson } from "@/types/Lesson";
import UploadFile from "@/components/file-upload";
import { uploadLessonVideo } from "@/actions/edit-lesson";
import Loader from "@/app/components/Loader";

interface ChapterVideoFormProps {
  initialData: Lesson;
  courseId: string;
  lessonId: string;
  onLessonUpdated: () => void;
}

const formSchema = z.object({
  videoUrl: z.string().min(1),
});

const ChapterVideoForm = ({
  initialData,
  courseId,
  lessonId,
  onLessonUpdated,
}: ChapterVideoFormProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleEdit = () => setIsEditing((current) => !current);

  const router = useRouter();

  const uploadVideo = async (lessonId: string, file: File) => {
    try {
      console.log("Uploading video lesson", courseId, file);
      const uploadResponse = await uploadLessonVideo(lessonId, file);
      toast.success("Video uploaded successfully");
      toggleEdit();
      onLessonUpdated();
      setLoading(true);
    } catch (error: any) {
      toast.error(error.message || "Failed to upload video");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  return (
    <>
      <Toaster />
      <div className="mt-6 border bg-slate-100 rounded-md p-4">
        <div className="font-medium flex items-center justify-between">
          Chapter Video
          <Button onClick={toggleEdit} variant="ghost">
            {isEditing && <>Cancel</>}
            {!isEditing && !initialData.videoUrl && (
              <>
                <PlusCircle className="h-4 w-4 mr-2" />
                Add video
              </>
            )}
            {!isEditing && initialData.videoUrl && (
              <>
                <Pencil className="h-4 w-4 mr-2" />
                Edit video
              </>
            )}
          </Button>
        </div>
        {!isEditing &&
          (!initialData.videoUrl ? (
            <div className="flex items-center justify-center h-60 bg-slate-200 rounded-md">
              <VideoIcon className="h-10 w-10 text-slate-500" />
            </div>
          ) : (
            <div className="relative aspect-video mt-2">
              <video
                src={initialData.videoUrl}
                className="rounded-md"
                controls
              />
            </div>
          ))}
        {isEditing && (
          <div>
            <UploadFile
              className="p-10 my-4 border border-muted-foreground rounded-md"
              id={lessonId}
              onUpload={uploadVideo}
            />
            <div className="text-xs text-muted-foreground mt-4">
              Upload chapter&apos;s video
            </div>
          </div>
        )}
        {initialData.videoUrl && !isEditing && (
          <div className="text-xs text-muted-foreground mt-2">
            Videos can take a few minutes to process!
          </div>
        )}
      </div>
    </>
  );
};

export default ChapterVideoForm;
