"use client";

import { getCourseById } from "@/actions/get-courses";
import { getProgressCount } from "@/actions/get-progress";
import { Course, Lesson } from "@/types/Course";
import { useCallback, useEffect, useState } from "react";
import CourseNavbar from "./_components/course-navbar";
import CourseSidebar from "./_components/course-sidebar";
import { UserProgress } from "@/types/UserProgress";
import Loader from "@/app/components/Loader";

const CourseLayout = ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { courseId: string };
}) => {
  const [course, setCourse] = useState<Course & { lessons: (Lesson & { userProgress: UserProgress[] | null })[] }>();
  const [progressCount, setProgressCount] = useState<number>(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUserData = localStorage.getItem("userData");
      if (storedUserData) {
        setIsLoggedIn(true);
      }
    }
  }, []);

  const fetchCourse = useCallback(async () => {
    try {
      const data = await getCourseById(params.courseId);
      setCourse({
        ...data,
        lessons: data.lessons
          .filter((lesson) => lesson.isPublished === true)
          .map((lesson) => ({
            ...lesson,
            userProgress: lesson.lessonProgressList || null,
          })),
      });
    } catch (error) {
      console.error("Error fetching course:", error);
    }
  }, [params]);

  useEffect(() => {
    fetchCourse();
    const progressCount = async () => {
      if (!isLoggedIn) {
        setProgressCount(0);
      } else {
        const progress = await getProgressCount(params.courseId);
        setProgressCount(progress || 0);
      }
    };
    progressCount();
  }, [params, fetchCourse, isLoggedIn]);

  if (!course) {
    return (
      <>
        <div className="flex flex-col items-center justify-center h-screen">
          <Loader />
        </div>
      </>
    );
  }

  return (
    <>
      <div className="h-full">
        <div className="h-[80px] md:pl-80 fixed top-0 left-0 right-0 z-50">
          <CourseNavbar course={course} progressCount={progressCount} />
        </div>
        <div className="hidden md:flex h-full w-80 flex-col fixed inset-y-0 z-50">
          <CourseSidebar course={course} progressCount={progressCount} />
        </div>
        {/* <main className="md:pl-80 pt-[80px] h-full">{children}</main> */}
        <main className="md:pl-80 h-full">{children}</main>
      </div>
    </>
  );
};

export default CourseLayout;
