"use client";

import { Banner } from "@/components/banner";
import { Separator } from "@/components/ui/separator";
import { Preview } from "@/components/preview";
import { ArrowLeft, File, Star } from "lucide-react";
import VideoPlayer from "./_components/video-player";
import CourseProgressButton from "./_components/course-progress-button";
import { Attachment } from "@/types/Attachment";
import { useEffect, useState } from "react";
import { Lesson } from "@/types/Lesson";
import { Course } from "@/types/Course";
import { getCourseLessonToPlay } from "@/actions/get-user-course-lesson";
import Link from "next/link";
import InstructorCard from "../_components/instructor-card";
import CourseRatingFeedback from "../_components/course-rating-feedback";
import Loader from "@/app/components/Loader";

const ChapterIdPage = ({
  params,
}: {
  params: {
    courseId: string;
    lessonId: string;
  };
}) => {
  const [lesson, setLesson] = useState<Lesson>();
  const [course, setCourse] = useState<Course>();
  const [attachments, setAttachments] = useState<Attachment[]>([]);
  const [nextChapter, setNextChapter] = useState<Lesson>();
  const [userProgress, setUserProgress] = useState<Boolean>();
  const [purchase, setPurchase] = useState<boolean>();

  useEffect(() => {
    async function fetchData() {
      try {
        const lessonData = await getCourseLessonToPlay({
          lessonId: params.lessonId,
          courseId: params.courseId,
        });
        console.log("Lesson Data: ", lessonData);
        setLesson(lessonData.lesson);
        setCourse(lessonData.course);
        // setAttachments(lessonData.attachments);
        setNextChapter(lessonData.nextChapter);
        setUserProgress(lessonData.userProgress);
        setPurchase(lessonData.enrollment != null);
      } catch (error) {
        console.error("Error fetching lesson:", error);
      }
    }
    fetchData();
  }, [params]);

  if (!lesson || !course) {
    // return redirect("/search");
    return (
      <>
        <div className="flex flex-col items-center justify-center h-screen">
          <Loader />
        </div>
      </>
    );
  }

  const isLocked = !lesson.isFree && !purchase;
  const completeOnEnd = !!purchase && !userProgress;
  console.log("Lesson completed: ", !!userProgress);

  return (
    <>
      <div>
        {userProgress && <Banner variant="success" label="Completed." />}
        {isLocked && (
          <Banner
            variant="warning"
            label="Need purchase this course to watch."
          />
        )}
        <div className="flex flex-col max-w-4xl mx-auto pb-20">
          <div className="pt-4">
            <Link
              href={`/`}
              className="flex items-center text-sm hover:opacity-75 transition mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to home page
            </Link>
          </div>
          <div className="px-4">
            <VideoPlayer
              courseId={params.courseId}
              lesson={lesson}
              nextChapterId={nextChapter?.lessonId || ""}
              isLocked={isLocked}
            />
          </div>
          <div className="p-4 flex flex-col md:flex-row justify-between">
            <h2 className="text-2xl font-semibold mb-2">
              {lesson.lessonTitle}
            </h2>
            {/* {purchase ? (
              <CourseProgressButton
                chapterId={lesson.lessonId}
                courseId={params.courseId}
                nextChapterId={nextChapter?.lessonId}
                isCompleted={!!userProgress}
              />
            ) : (
              <CourseEnrollButton
                courseId={params.courseId}
                price={course.price!}
              />
            )} */}
            {purchase && (
              <CourseProgressButton
                chapterId={lesson.lessonId}
                courseId={params.courseId}
                nextChapterId={nextChapter?.lessonId}
                isCompleted={!!userProgress}
              />
            )}
          </div>
          <Separator />
          <div>
            <Preview value={lesson.lessonDescription!} />
          </div>
          {!!attachments.length && (
            <>
              <Separator />
              <div className="p-4">
                {attachments.map((attachment: Attachment) => (
                  <a
                    href={attachment.url}
                    target="_blank"
                    key={attachment.id}
                    className="flex items-center p-3 w-full bg-sky-200 border text-sky-700 rounded-md hover:underline"
                  >
                    <File />
                    <p className="line-clamp-1">{attachment.name}</p>
                  </a>
                ))}
              </div>
            </>
          )}
          <Separator />
          <div className="p-4">
            <InstructorCard instructorId={course.userId} />
          </div>
          <Separator />
          <div className="p-4">
            <CourseRatingFeedback courseId={course.courseId} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChapterIdPage;
