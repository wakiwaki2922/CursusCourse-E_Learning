"use client";

import { deleteLesson, editLesson } from "@/actions/edit-lesson";
import ConfirmModal from "@/components/modals/confirm-modal";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

interface ChapterActionsProps {
  disabled: boolean;
  courseId: string;
  lessonId: string;
  isPublished: boolean;
  onLessonUpdated: () => void;
}

const ChapterActions = ({
  disabled,
  courseId,
  lessonId,
  isPublished,
  onLessonUpdated,
}: ChapterActionsProps) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const onClickPublish = async () => {
    try {
      setIsLoading(true);
      // if (isPublished) {
      //     // await axios.patch(`/api/courses/${courseId}/chapters/${chapterId}/unpublish`);
      //     toast.success("Chapter unpublished");
      // } else {
      //     // await axios.patch(`/api/courses/${courseId}/chapters/${chapterId}/publish`);
      //     toast.success("Chapter published");
      // }

      await editLesson(lessonId, { isPublished: !isPublished });
      toast.success("Chapter updated");
      onLessonUpdated();
      router.refresh();
    } catch (error: any) {
        toast.error(error.message || "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  const onDelete = async () => {
    try {
      setIsLoading(true);
      // await axios.delete(`/api/courses/${courseId}/chapters/${chapterId}`);
      const response = await deleteLesson(lessonId);
      console.log("Delete lesson response", response);
      toast.success("Chapter deleted");
      router.refresh();
      router.push(`/instructor/courses/${courseId}`);
    } catch (error: any) {
      toast.error(error.message || "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-x-2">
      <Button
        onClick={onClickPublish}
        disabled={disabled || isLoading}
        variant="outline"
        size="sm"
      >
        {isPublished ? "Unpublish" : "Publish"}
      </Button>
      <ConfirmModal onConfirm={onDelete}>
        <Button disabled={isLoading} size="sm">
          <Trash />
        </Button>
      </ConfirmModal>
    </div>
  );
};

export default ChapterActions;
