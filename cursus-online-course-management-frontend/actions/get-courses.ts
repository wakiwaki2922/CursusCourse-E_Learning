import api from "@/lib/axios";
import { Attachment } from "@/types/Attachment";
import { Category } from "@/types/Category";
import { Course } from "@/types/Course";
import { UserProgress } from "@/types/UserProgress";

export type CourseWithLessonsWithAttachments = Course & {
  lessons: { id: string; attachments: Attachment[] }[];
};

type CourseWithLessonsWithUserProgress = Course & {
  lessons: { id: string; userProgress: UserProgress |null }[];
};

const getCoursesOfInstructor = async () => {
  try {
    const response = await api.get("/api/courses/auth/getCoursesOfInstructor");
    const courses: CourseWithLessonsWithAttachments[] = response.data;
    return courses;
  } catch (error) {
    console.log("[ACTIONS_GET_COURSES_OF_INSTRUCTOR]", error);
    return [];
  }
};

const getCoursesOfInstructorById = async (userId: string) => {
  try {
    const response = await api.get("/api/courses/auth/getCoursesOfInstructorById", {params: {userId}});
    const courses: CourseWithLessonsWithAttachments[] = response.data;
    return courses;
  } catch (error) {
    console.log("[ACTIONS_GET_COURSES_OF_INSTRUCTOR]", error);
    return [];
  }
};

const getAllCourses = async () => {
  try {
    const response = await api.get("/api/courses/getAllCourses");
    const courses: CourseWithLessonsWithAttachments[] = response.data;
    return courses;
  } catch (error) {
    console.log("[ACTIONS_GET_ALL_COURSES]", error);
    return [];
  }
};

const searchCourses = async (
  title: string,
  categoryId: string
): Promise<Course[]> => {
  try {
    const response = await api.get("/api/courses/searchCourses", {
      params: {
        title,
        categoryId,
      },
    });
    return response.data;
  } catch (error) {
    console.log("[ACTIONS_SEARCH_COURSES]", error);
    return [];
  }
};

const getAllPublishCourses = async (): Promise<Course[]> => {
  try {
    const response = await api.get(`/api/courses/getPublishedCourses`);
    const courses: Course[] = response.data;
    return courses;
  } catch (error) {
    console.log("[ACTIONS_GET_ALL_COURSES]", error);
    return [];
  }
};

const getCourseById = async (courseId: string): Promise<Course> => {
  try {
    const endpoint = `/api/courses/getCourseById/${courseId}`;
    const response = await api.get(endpoint);
    console.log("Get course by id response", response.data);
    return response.data;
  } catch (error: any) {
    console.log("[ACTIONS_GET_COURSE_BY_ID]", error);
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || "Something went wrong!");
    } else {
      throw new Error(error.message || "Something went wrong!");
    }
  }
};

const getCourseByIdByUser = async (courseId: string): Promise<Course> => {
  try {
    const endpoint = `/api/courses/getCourseByIdByUser/${courseId}`;
    const responseCourseData = (await api.get(endpoint)).data;
    console.log("Get course by id response", responseCourseData);
    return responseCourseData;
  } catch (error: any) {
    console.log("[ACTIONS_GET_COURSE_BY_ID]", error);
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || "Something went wrong!");
    } else {
      throw new Error(error.message || "Something went wrong!");
    }
  }
};

const getAllCategories = async (): Promise<Category[]> => {
  try {
    const response = await api.get("/api/category/getAll");
    return response.data;
  } catch (error) {
    console.log("[ACTIONS_GET_ALL_CATEGORIES]", error);
    return [];
  }
};

const getStudentOwnedCourses = async () => {
  try {
    const response = await api.get("/api/courses/auth/getStudentOwnedCourses");
    return response.data;
  } catch (error) {
    console.log("[ACTIONS_GET_STUDENT_OWN_COURSES]", error);
    return [];
  }
};

const getStudentOwnedCourseById = async (courseId: string) => {
  try {
    const response = await api.get(`/api/courses/auth/getStudentOwnedCourseWithLessonsAndProgressById/${courseId}`);
    return response.data;
  } catch (error) {
    console.log("[ACTIONS_GET_STUDENT_OWN_COURSE_BY_ID]", error);
    return null;
  }
};

export {
  getCoursesOfInstructor,
  getAllCourses,
  searchCourses,
  getAllPublishCourses,
  getCourseById,
  getAllCategories,
  getStudentOwnedCourses,
  getCourseByIdByUser,
  getStudentOwnedCourseById,
  getCoursesOfInstructorById,
};
