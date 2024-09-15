"use client";

import { useEffect, useState } from "react";
import { columns } from "./_components/columns-instructor";
import { DataTable } from "./_components/data-table-instructor";
import { useRouter } from "next/navigation";
import { getAllInstructorWithCourse } from "@/actions/edit-instructor";
import { Instructor } from "@/types/Instructor";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";

const breadcrumbItems = [
  { title: "Dashboard", link: "/admin/dashboard" },
  { title: "Instructor Management", link: "/admin/instructor" },
];

const StudentManagementPage = () => {
  const router = useRouter();

  const [instructors, setInstructors] = useState<Instructor[]>([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const data = await getAllInstructorWithCourse();
        setInstructors(data);
      } catch (error) {
        console.error("Error fetching instructor:", error);
        router.push("/");
      }
    };

    fetchStudents();
  }, [router]);

  return (
    <>
      <div className="p-6">
        <Breadcrumbs items={breadcrumbItems} />
        <Heading
          title={`Instructors (${instructors.length})`}
          description="Manage instructors (Server side table functionalities.)"
        />
        <Separator />
        <DataTable columns={columns} data={instructors} />
      </div>
    </>
  );
};

export default StudentManagementPage;
