"use client";

import {
  getCourseByIdByUser,
  getStudentOwnedCourseById,
} from "@/actions/get-courses";
import { getProgressCount } from "@/actions/get-progress";
import { getEnrollmentOfUser } from "@/actions/get-user-course-lesson";
import Loader from "@/app/components/Loader";
import { Course } from "@/types/Course";
import { UserProgress } from "@/types/UserProgress";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

const CourseIdPage = ({ params }: { params: { courseId: string } }) => {
  const [course, setCourse] = useState<Course>();
  const [progressCount, setProgressCount] = useState<number>(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [progress, setProgress] = useState();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUserData = localStorage.getItem("userData");
      if (storedUserData) {
        setIsLoggedIn(true);
      }
    }
  }, []);

  useEffect(() => {
    async function fetchProgressCount() {
      const progress = await getProgressCount(params.courseId);
      setProgressCount(progress || 0);
      setProgress(progress);
    }
    async function fetchCourseData() {
      try {
        if (isLoggedIn && !progress) {
          const data = await getStudentOwnedCourseById(params.courseId);
          setCourse(data);
        } else {
          const data = await getCourseByIdByUser(params.courseId);
          setCourse(data);
        }
      } catch (error) {
        console.error("Error fetching course:", error);
      }
    }
    async function fetchData() {
      await fetchProgressCount();
      await fetchCourseData();
    }
  
    fetchData();
  }, [params, isLoggedIn, progress]);

  if (!course) {
    return (
      <>
        <div className="flex flex-col items-center justify-center h-screen">
          <Loader />
        </div>
      </>
    );
  }

  // if (course && course.lessons && course.lessons.length > 0) {

  //   if (progressCount === 100) {
  //     return redirect(`/course/${course.courseId}/lesson/courseCertificate`);
  //   }

  //   if (!progress || progress.length === 0) {
  //     return redirect(`/course/${course.courseId}/lesson/${course.lessons[0].lessonId}`);
  //   }

  //   const lessonId = progress.find(p => p.lessonStatus.toLowerCase() !== "completed")?.lessonId;

  //   if (lessonId) {
  //     return redirect(`/course/${course.courseId}/lesson/${lessonId}`);
  //   } else {
  //     return redirect(`/course/${course.courseId}/lesson/${course.lessons[0].lessonId}`);
  //   }
  // }

  if (course && course.lessons && course.lessons.length > 0) {
    const lesson = course.lessons.find((lesson) => {
      const lessonNotCompleted = lesson.lessonProgressList.find(
        (progress: UserProgress) =>
          progress.lessonStatus.toLowerCase() !== "completed"
      );
      return lessonNotCompleted;
    });

    if (lesson) {
      return redirect(`/course/${course.courseId}/lesson/${lesson.lessonId}`);
    } else if (progressCount === 100) {
      return redirect(`/course/${course.courseId}/lesson/courseCertificate`);
    } else {
      return redirect(
        `/course/${course.courseId}/lesson/${course.lessons[0].lessonId}`
      );
    }
  }

  // Handle the case when course or lessons are undefined or empty
  console.error("Invalid course or lessons data:", course);
  return null;
};

export default CourseIdPage;
