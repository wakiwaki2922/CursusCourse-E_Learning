"use client";

import { useEffect, useState } from "react";
import { Columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";
import { useRouter } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { CourseWithLessonsWithAttachments, getAllCourses } from "@/actions/get-courses";

const breadcrumbItems = [
  { title: "Dashboard", link: "/admin/dashboard" },
  { title: "Course Management", link: "/admin/course" },
];

const CourseManagementPage = () => {
  const router = useRouter();

  const [courses, setCourses] = useState<CourseWithLessonsWithAttachments[]>([]);

  useEffect(() => {
      const fetchCourse = async () => {
          try {
              const data = await getAllCourses();
              setCourses(data);
          } catch (error) {
              console.error('Error fetching course:', error);
              router.push('/');
          }
      };

      fetchCourse();
  }, [router]);

  return (
    <>
      <div className="p-6">
        <Breadcrumbs items={breadcrumbItems} />
        <Heading
          title={`Courses (${courses.length})`}
          description="Manage courses (Server side table functionalities.)"
        />
        <Separator />
        <DataTable columns={Columns} data={courses} />
      </div>
    </>
  );
};

export default CourseManagementPage;
