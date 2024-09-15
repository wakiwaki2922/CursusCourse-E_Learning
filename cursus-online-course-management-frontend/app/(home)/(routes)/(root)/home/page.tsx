"use client";

import Categories from "../_components/category";
import { Suspense, useEffect, useState } from "react";
import { Category } from "@/types/Category";
import CoursesList from "@/components/course-list";
import {
  getAllCategories,
  getAllPublishCourses,
  searchCourses,
} from "@/actions/get-courses";
import { Course } from "@/types/Course";
import { shuffleData } from "@/lib/shuffle-data";
import Cookies from "js-cookie";
import { isLoggedIn } from "@/lib/login-check";
import SearchInput from "@/components/search-input";
import { usePathname, useSearchParams } from "next/navigation";
import Loader from "@/app/components/Loader";

interface HomePageProps {
  searchParams: {
    title: string;
    categoryId: string;
  };
}

// const Home = ({
//   searchParams
// }: HomePageProps) => {
const Home = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const token = Cookies.get("jwtToken");
  const searchParams = useSearchParams();

  const categoryId = searchParams.get("categoryId") ?? "";
  const title = searchParams.get("title") || "";

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // const { data } = await axios.get<Category[]>('/api/courses/categories');
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
  }, []);

  useEffect(() => {
    const fetchCourses = async () => {
      let coursesData;
      // if (searchParams.title || searchParams.categoryId) {
      //   coursesData = await searchCourses(
      //     searchParams.title,
      //     searchParams.categoryId
      //   );
      if (title || categoryId) {
        coursesData = await searchCourses(title, categoryId);
        setCourses(coursesData);
      } else {
        coursesData = await getAllPublishCourses();
        coursesData = shuffleData(coursesData);
        setCourses(coursesData);
      }
    };

    fetchCourses();
  }, [categoryId, searchParams, title]);

  if (token) {
    isLoggedIn();
  }

  return (
    <>
      <div className="px-6 pt-6 md:hidden md:mb-0 block">
        <SearchInput />
      </div>
      <div className="p-6 space-y-4">
        <Categories items={categories} />
        <CoursesList items={courses} />
      </div>
    </>
  );
};

const HomePage = () => (
  <Suspense
    fallback={
      <div className="flex flex-col items-center justify-center h-screen">
        <Loader />
      </div>
    }
  >
    <Home />
  </Suspense>
);

export default HomePage;
