"use client";

import { useEffect, useState } from "react";
import { columns } from "./_components/columns-student";
import { DataTable } from "./_components/data-table-student";
import { useRouter } from "next/navigation";
import { Student } from "@/types/Student";
import { getAllStudentWithEnrollment } from "@/actions/edit-student";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";

const breadcrumbItems = [
  { title: "Dashboard", link: "/admin/dashboard" },
  { title: "Student Management", link: "/admin/student" },
];

const StudentManagementPage = () => {
  const router = useRouter();

  //TODO: get courses by user for instructor
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const data = await getAllStudentWithEnrollment();
        setStudents(data);
      } catch (error) {
        console.error("Error fetching students:", error);
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
          title={`Students (${students.length})`}
          description="Manage students (Server side table functionalities.)"
        />
        <Separator />
        <DataTable columns={columns} data={students} />
      </div>
    </>
  );
};

export default StudentManagementPage;
