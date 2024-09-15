"use client";

import { Banner } from "@/components/banner";
import { Category } from "@/types/Category";
import {
  ArrowLeft,
  CircleDollarSign,
  File,
  LayoutDashboard,
  ListChecks,
} from "lucide-react";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import CourseActions from "./_components/course-actions";
import TitleForm from "./_components/title-form";
import DescriptionForm from "./_components/description-form";
import ImageForm from "./_components/image-form";
import CategoryForm from "./_components/category-form";
import ChapterForm from "./_components/chapter-form";
import PriceForm from "./_components/price-form";
import { IconBagde } from "@/components/icon-badge";
import {
  CourseWithLessonsWithAttachments,
  getAllCategories,
} from "@/actions/get-courses";
import { isInstructor } from "@/lib/instructor";
import { getCourseByIdByInstructor } from "@/actions/edit-course";
import Loader from "@/app/components/Loader";

const CourseIdPage = ({ params }: { params: { courseId: string } }) => {
  const [course, setCourse] = useState<CourseWithLessonsWithAttachments>();
  const [categories, setCategories] = useState<Category[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (!isInstructor) {
      return redirect("/");
    }
  }, [router]);

  const fetchCourse = useCallback(async () => {
    try {
      console.log(params.courseId);
      // const { data } = await axios.get<CourseWithLessonsWithAttachments>(
      //   `/api/courses/${params.courseId}`
      // );
      const data = await getCourseByIdByInstructor(params.courseId);
      setCourse(data);
    } catch (error) {
      console.error("Error fetching course:", error);
      router.push("/instructor/courses");
    }
  }, [params.courseId, router]);

  useEffect(() => {
    fetchCourse();

    const fetchCategories = async () => {
      try {
        const data = await getAllCategories();
        // Convert categoryId to string for each category
        const categoriesWithIdAsString = data.map((category) => ({
          ...category,
          categoryId: category.categoryId.toString(),
        }));
        setCategories(categoriesWithIdAsString);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, [fetchCourse]);

  if (!course) {
    return (
      <>
        <div className="flex flex-col items-center justify-center h-screen">
          <Loader />
        </div>
      </>
    );
  }

  const requiredFields = [
    course.courseTitle,
    course.description,
    course.thumbnailUrl,
    course.price,
    course.categories,
    course.lessons
      ? course.lessons.some((lesson) => lesson.isPublished)
      : false,
  ];

  console.log("Required fields: ", requiredFields);

  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(Boolean).length;
  const completionText = `(${completedFields}/${totalFields})`;

  const isComplete = requiredFields.every(Boolean);

  return (
    <>
      {!course.courseStatus && (
        <Banner label="This course is unpublished. It will not visible to others." />
      )}
      <div className="p-6">
        <Link
          href={`/instructor/courses`}
          className="flex items-center text-sm hover:opacity-75 transition mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to courses
        </Link>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-2">
            <h1 className="text-2xl font-medium">Course Setup</h1>
            <span className="text-sm text-slate-700">
              Complete all fields {completionText}
            </span>
          </div>
          <CourseActions
            disabled={!isComplete}
            courseId={params.courseId}
            courseStatus={course.courseStatus}
            onCourseUpdated={fetchCourse}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          <div>
            <div className="flex items-center gap-x-2">
              <IconBagde icon={LayoutDashboard} />
              <h2 className="text-xl">Customise your course</h2>
            </div>
            <TitleForm
              initialData={course}
              courseId={course.courseId}
              onCourseUpdated={fetchCourse}
            />
            <DescriptionForm
              initialData={course}
              courseId={course.courseId}
              onCourseUpdated={fetchCourse}
            />
            <ImageForm
              initialData={course}
              courseId={course.courseId}
              onCourseUpdated={fetchCourse}
            />
            <CategoryForm
              initialData={course}
              courseId={course.courseId}
              options={categories.map((category) => ({
                label: category.categoryName,
                value: category.categoryId,
              }))}
              onCourseUpdated={fetchCourse}
            />
          </div>
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-x-2">
                <IconBagde icon={ListChecks} />
                <h2 className="text-xl">Course Chapter</h2>
              </div>
              <ChapterForm
                initialData={course}
                courseId={course.courseId}
                onCourseUpdated={fetchCourse}
              />
            </div>
            <div>
              <div className="flex items-center gap-x-2">
                <IconBagde icon={CircleDollarSign} />
                <h2 className="text-xl">Sell my course</h2>
              </div>
              <PriceForm
                initialData={course}
                courseId={course.courseId}
                onCourseUpdated={fetchCourse}
              />
            </div>
            <div>
              <div className="flex items-center gap-x-2">
                <IconBagde icon={File} />
                <h2 className="text-xl">Resources and Attachments</h2>
              </div>
              {/* <AttachementForm initialData={course} courseId={course.courseId} onCourseUpdate={fetchCourse} /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseIdPage;
