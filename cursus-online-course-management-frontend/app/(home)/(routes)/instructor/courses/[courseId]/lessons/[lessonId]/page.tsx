"use client";

import { getLesson } from "@/actions/edit-lesson";
import { Banner } from "@/components/banner";
import { isInstructor } from "@/lib/instructor";
import { Lesson } from "@/types/Lesson";
import { ArrowLeft, Eye, LayoutDashboard, Video } from "lucide-react";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import ChapterActions from "../_components/chapter-actions";
import { IconBagde } from "@/components/icon-badge";
import ChapterTitleForm from "../_components/chapter-title-form";
import ChapterDescriptionForm from "../_components/chapter-description-form";
import ChapterAccessForm from "../_components/chapter-access-form";
import ChapterVideoForm from "../_components/chapter-video-form";
import Loader from "@/app/components/Loader";

const ChapterIdPage = ({
  params,
}: {
  params: {
    courseId: string;
    lessonId: string;
  };
}) => {
  const router = useRouter();
  const [lesson, setLesson] = useState<Lesson>();

  useEffect(() => {
    if (!isInstructor) {
      return redirect("/");
    }
  }, [router]);

  const fetchLesson = useCallback(async () => {
    try {
      const data = await getLesson(params.lessonId);
      console.log("Chapter data", data);
      setLesson(data);
    } catch (error) {
      console.error("Error fetching chapter:", error);
    }
  }, [params.lessonId]);

  useEffect(() => {
    fetchLesson();
  }, [params, router, fetchLesson]);

  if (!lesson) {
    return (
      <>
        <div className="flex flex-col items-center justify-center h-screen">
          <Loader />
        </div>
      </>
    );
  }

  const requiredFields = [
    lesson.lessonTitle,
    lesson.lessonDescription,
    lesson.videoUrl,
  ];

  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(Boolean).length;
  const completionText = `(${completedFields}/${totalFields})`;
  const isComplete = requiredFields.every(Boolean);

  return (
    <>
      {!lesson.isPublished && (
        <Banner
          variant="warning"
          label="This chapter is unpublished. It will not visible in your course!"
        />
      )}
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="w-full">
            <Link
              href={`/instructor/courses/${params.courseId}`}
              className="flex items-center text-sm hover:opacity-75 transition mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to course setup
            </Link>
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col gap-y-2">
                <h1 className="text-xl font-medium">Chapter Creation</h1>
                <span className="text-sm text-slate-700">
                  Complete all fields {completionText}
                </span>
              </div>
              <ChapterActions
                disabled={!isComplete}
                courseId={params.courseId}
                lessonId={params.lessonId}
                isPublished={lesson.isPublished}
                onLessonUpdated={fetchLesson}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-x-2">
                <IconBagde icon={LayoutDashboard} />
                <h2 className="text-base">Customise your chapter</h2>
              </div>
              <ChapterTitleForm
                initialData={lesson}
                courseId={params.courseId}
                lessonId={params.lessonId}
                onLessonUpdated={fetchLesson}
              />
              <ChapterDescriptionForm
                initialData={lesson}
                courseId={params.courseId}
                lessonId={params.lessonId}
                onLessonUpdated={fetchLesson}
              />
            </div>
            <div>
              <div className="flex items-center gap-x-2">
                <IconBagde icon={Eye} />
                <h2 className="text-base">Access Settings</h2>
              </div>
              <ChapterAccessForm
                initialData={lesson}
                courseId={params.courseId}
                lessonId={params.lessonId}
                onLessonUpdated={fetchLesson}
              />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-x-2">
              <IconBagde icon={Video} />
              <h2>Add a video</h2>
            </div>
            <ChapterVideoForm
              initialData={lesson}
              courseId={params.courseId}
              lessonId={params.lessonId}
              onLessonUpdated={fetchLesson}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChapterIdPage;
