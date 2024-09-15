"use client"

import { completedLesson, unCompleteLesson } from "@/actions/get-progress";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

interface CourseProgressButtonProps {
    chapterId: string;
    courseId: string;
    isCompleted?: boolean;
    nextChapterId?: string;
};

const CourseProgressButton = ({
    chapterId,
    courseId,
    isCompleted,
    nextChapterId
}: CourseProgressButtonProps) => {

    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const onClick = async () => {
        try {
            setIsLoading(true);

            let response;
            if (isCompleted) {
                response = await unCompleteLesson(courseId, chapterId);
            } else {
                response = await completedLesson(courseId, chapterId);
            }

            if (response) {
                isCompleted = !isCompleted;
            }

            if (isCompleted != false && nextChapterId) {
                router.push(`/course/${courseId}/lesson/${nextChapterId}`);
            } else if (isCompleted != false && !nextChapterId) {
                router.push(`/course/${courseId}/lesson/courseCertificate`);
            }

            toast.success("Progress updated");
            router.refresh();

        } catch (error: any) {
            console.error("[COURSE_PROGRESS_BUTTON]", error);
            toast.error(error.message || "Something went wrong!");
        } finally {
            setIsLoading(false);
        }
    };

    const Icon = isCompleted ? XCircle : CheckCircle

    return (
        <>
        <Toaster />
        <Button
            onClick={onClick}
            disabled={isLoading}
            type="button"
            variant={isCompleted ? "outline" : "success"}
            className="w-full md:w-auto"
        >
            {isCompleted ? "Uncompleted" : "Mark as completed"}
            <Icon className="h-4 w-4 ml-2" />
        </Button>
        </>
    );
}

export default CourseProgressButton;