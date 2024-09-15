"use client"

import { useEffect, useState } from "react";
import { Columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";
import { CourseWithLessonsWithAttachments, getCoursesOfInstructor } from "@/actions/get-courses";
import { useRouter } from "next/navigation";

const CoursesPage = () => {

    const router = useRouter();

    //TODO: get courses by user for instructor
    const [courses, setCourses] = useState<CourseWithLessonsWithAttachments[]>([]);

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const data = await getCoursesOfInstructor();
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
                <DataTable columns={Columns} data={courses} />
            </div>
        </>
    );
}

export default CoursesPage;