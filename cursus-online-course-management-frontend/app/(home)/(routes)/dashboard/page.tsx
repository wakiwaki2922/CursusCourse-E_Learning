"use client";

import React, { useEffect, useState } from "react";
import { DataTable } from "./_components/data-table";
import { Columns } from "./_components/column";
import { getStudentOwnedCourses } from "@/actions/get-courses";
import { isLoggedIn } from "@/lib/login-check";

export type UserOwnedCourse = {
  courseId: string;
  courseTitle: string;
  userCourseProgress: number;
  enrolledDate: string;
  courseEnrolledPrice: number;
};

const DashboardPage = () => {
  isLoggedIn();
  const [courses, setCourses] = useState<UserOwnedCourse[]>([]);

  useEffect(() => {
    const fetchCourse = async () => {
      const data = await getStudentOwnedCourses();
      setCourses(data);
    };

    fetchCourse();
  }, []);

  return (
    <>
      <div className="p-6">
        <h1 className="font-semibold text-slate-700">My Purchased&rsquo;s Course</h1>
        <DataTable columns={Columns} data={courses} />
      </div>
    </>
  );
};

export default DashboardPage;
