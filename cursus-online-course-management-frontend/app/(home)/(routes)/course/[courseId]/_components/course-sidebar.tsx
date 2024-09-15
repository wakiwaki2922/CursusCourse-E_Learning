import { getEnrollmentOfUser } from "@/actions/get-user-course-lesson";
import CourseProgress from "@/components/course-progress";
import { Course } from "@/types/Course";
import { Lesson } from "@/types/Lesson";
import { UserProgress } from "@/types/UserProgress";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import CourseSidebarItem from "./course-sidebar-item";
import CourseEnrollButton from "./course-enroll-button";
import CertificateSidebarItem from "./certificate-sidebar-item";
import { getProgressCount } from "@/actions/get-progress";

interface CourseSidebarProps {
  course: Course;
  progressCount: number;
}

const CourseSidebar = ({ course, progressCount }: CourseSidebarProps) => {
  const [purchase, setPurchase] = useState<Boolean>(false);
  const [courseCompleted, setCourseCompleted] = useState<Boolean>(false);
  const [progress, setProgress] = useState<UserProgress[]>([]);

  useEffect(() => {
    const fetchEnrollment = async () => {
      try {
        const response = await getEnrollmentOfUser(course.courseId);
        if (response && response.lessonProgressList) {
          setProgress(response.lessonProgressList);
          setPurchase(true);
        } else {
          setProgress([]);
          setPurchase(false);
        }
      } catch (error) {
        console.error("Error fetching enrollment:", error);
        setProgress([]);
        setPurchase(false);
      }
    };
    fetchEnrollment();
  }, [course]);
  
  useEffect(() => {
    const fetchProgressCount = async () => {
      const progressCount = await getProgressCount(course.courseId);
      setCourseCompleted(progressCount === 100);
    };
    fetchProgressCount();
  }, [course.courseId]);

  return (
    <div className="h-full border-r flex flex-col overflow-y-auto shadow-sm">
      <div className="p-4 flex flex-col border-b">
        <h1 className="font-semibold">{course.courseTitle}</h1>
        {/* Check purchase and add progress */}
        {purchase && (
          <div className="mt-10">
            <CourseProgress variant="success" value={progressCount || 0} />
          </div>
        )}
        {!purchase && (
          <div className="mt-10">
            {/* <CourseProgress variant="success" value={progressCount || 0} /> */}
            {/* <CourseProgress variant="warning" value={0} /> */}
            <CourseEnrollButton
              course={course}
              price={course.price!}
            />
          </div>
        )}
      </div>
      {courseCompleted && <CertificateSidebarItem />}
      <div className="flex flex-col w-full">
        {course.lessons
          .sort((a, b) => a.position - b.position)
          .map((lesson) => (
            <CourseSidebarItem
              key={lesson.lessonId}
              id={lesson.lessonId}
              label={lesson.lessonTitle}
              // isCompleted={Boolean(course.lessons.find(c => c.lessonId === lesson.lessonId)?.lessonProgressList.find(p => p.lessonStatus.toLowerCase() === "completed"))}
              isCompleted={progress?.find((p) => p.lessonId === lesson.lessonId)?.lessonStatus.toLowerCase() === "completed"}
              courseId={course.courseId}
              isLocked={lesson.isFree || purchase.valueOf()}
            />
          ))}
      </div>
    </div>
  );
};

export default CourseSidebar;
