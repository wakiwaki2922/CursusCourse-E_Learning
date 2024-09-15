import api from "@/lib/axios";
import { getCourseByIdByUser } from "./get-courses";
import { getLesson } from "./edit-lesson";
import { Course } from "@/types/Course";
import { Lesson } from "@/types/Lesson";

// const getCourseLessonToPlay = async (courseId: string, lessonId: string) => {
//   try {
//     // const endpoint = `/api/lessons/auth/getCourseLessonToPlay/${courseId}/${lessonId}`;
//     const endpoint = `/api/courses/getCourseById/${courseId}`;
//     const response = await api.get(endpoint);
//     console.log("Get course lesson to play response", response.data);
//     return response.data;
//   } catch (error: any) {
//     console.error("[ACTIONS_GET_COURSE_LESSON_TO_PLAY]", error);
//     if (error.response && error.response.data) {
//       throw new Error(error.response.data.message || "Something went wrong!");
//     } else {
//       throw new Error(error.message || "Something went wrong!");
//     }
//   }
// };

// export { getCourseLessonToPlay };

interface GetCourseLessonProps {
  courseId: string;
  lessonId: string;
}

const getCourseLessonToPlay = async ({ courseId, lessonId }: GetCourseLessonProps) => {
  try {
    const enrollment = await getEnrollmentOfUser(courseId);
    const course = await getCourseByIdByUser(courseId);
    const lesson: Lesson = await getLesson(lessonId);
    const nextChapter = course.lessons.at(lesson.position);
    const userProgress: Boolean = (await api.get(`/api/lessons/auth/userIsCompletedLesson/${lessonId}`)).data;
    console.log("User progress: ", userProgress);
    return {
      enrollment,
      course,
      lesson,
      nextChapter,
      userProgress
    }

  } catch (error: any) {
    console.error("[ACTIONS_GET_COURSE_LESSON_TO_PLAY]", error);
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || "Something went wrong!");
    } else {
      throw new Error(error.message || "Something went wrong!");
    }
  }
};

const getEnrollmentOfUser = async (courseId: string) => {
  try {
    const endpoint = `/api/enrollment/auth/course/${courseId}/getEnrollmentOfUser`;
    const response = await api.get(endpoint);
    console.log("Get enrollment of user response", response.data);
    return response.data;
  } catch (error: any) {
    // console.error("[ACTIONS_GET_ENROLLMENT_OF_USER]", error);
    // if (error.response && error.response.data) {
    //   throw new Error(error.response.data.message || "Something went wrong!");
    // } else {
    //   throw new Error(error.message || "Something went wrong!");
    // }
    return null;
  }
};

export { getCourseLessonToPlay, getEnrollmentOfUser };