"use client";

import { Category } from "@/types/Category";
import { Course } from "@/types/Course";
import CourseCard from "./course-card";
import { useEffect, useState } from "react";
import { getStudentOwnedCourses } from "@/actions/get-courses";
import Cookies from "js-cookie";

export type CourseWithCategory = Course & {
  category: Category | null;
  lessons: { id: string }[];
};

interface CoursesListProps {
  // items: CourseWithCategory[];
  items: Course[];
}

const CoursesList = ({ items }: CoursesListProps) => {

  const [ownedCourses, setOwnedCourses] = useState<(Course & { userCourseProgress: number | null; })[]>([]);

  useEffect(() => {
    if (Cookies.get("jwtToken")) {
      const fetchOwnedCourses = async () => {
        const response = await getStudentOwnedCourses();
        console.log("Owned courses", response);
        setOwnedCourses(response);
      };
      fetchOwnedCourses();
    }
  }, [items]);
  

  return (
    <div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
        {items.map((item) => (
          <CourseCard
            key={item.courseId}
            id={item.courseId}
            title={item.courseTitle}
            imageUrl={item.thumbnailUrl!}
            chaptersLength={item.lessons?.filter(lesson => lesson.isPublished).length}
            price={item.price!}
            category={item?.category?.categoryName!}
            progress={ownedCourses.find(course => course.courseId === item.courseId)?.userCourseProgress ?? null}
          />
        ))}
      </div>
      {items.length === 0 && (
        <div className="text-center text-sm text-muted-foreground mt-10">
          No course found!
        </div>
      )}
    </div>
  );
};

export default CoursesList;
