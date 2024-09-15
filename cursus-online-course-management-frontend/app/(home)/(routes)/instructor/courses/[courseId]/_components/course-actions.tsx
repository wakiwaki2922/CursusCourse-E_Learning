"use client";

import { deleteCourse, editCourse } from "@/actions/edit-course";
import ConfirmModal from "@/components/modals/confirm-modal";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";
import { on } from "events";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

interface CourseActionsProps {
  disabled: boolean;
  courseId: string;
  courseStatus: boolean;
  onCourseUpdated: () => void;
}

const CourseActions = ({
  disabled,
  courseId,
  courseStatus,
  onCourseUpdated,
}: CourseActionsProps) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const onClickPublish = async () => {
    try {
      setIsLoading(true);
      await editCourse(courseId, { courseStatus: !courseStatus });
      onCourseUpdated();
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
      // await axios.delete(`/api/courses/${courseId}`);
      await deleteCourse(courseId);
      toast.success("Course deleted");
      router.refresh();
      router.push(`/instructor/courses`);
    } catch (error: any) {
      toast.error(error.message || "Fail to delete course");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Toaster />
      <div className="flex items-center gap-x-2">
        <Button
          onClick={onClickPublish}
          disabled={disabled || isLoading}
          variant="outline"
          size="sm"
        >
          {courseStatus ? "Unpublish" : "Publish"}
        </Button>
        <ConfirmModal onConfirm={onDelete}>
          <Button disabled={isLoading} size="sm">
            <Trash />
          </Button>
        </ConfirmModal>
      </div>
    </>
  );
};

export default CourseActions;
