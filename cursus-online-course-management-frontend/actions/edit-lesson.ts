import { isInstructorBlocked } from "@/lib/account-block";
import api from "@/lib/axios";

const createLesson = async (courseId: string, title: string) => {
  if (isInstructorBlocked()) {
    throw new Error("You are not allowed to create lesson");
  }
  try {
    const endpoint = `/api/lessons/auth/createLesson/${courseId}`;
    const response = await api.post(endpoint, { title: title });
    console.log("Create lesson response", response.data);
    return response.data;
  } catch (error: any) {
    console.error("[ACTIONS_CREATE_LESSON]", error);
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || "Something went wrong!");
    } else {
      throw new Error(error.message || "Something went wrong!");
    }
  }
};

const getLesson = async (lessonId: string) => {
  try {
    const endpoint = `/api/lessons/auth/getLessonById/${lessonId}`;
    const response = await api.get(endpoint);
    console.log("Get lesson response", response.data);
    return response.data;
  } catch (error: any) {
    console.error("[ACTIONS_GET_LESSON]", error);
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || "Something went wrong!");
    } else {
      throw new Error(error.message || "Something went wrong!");
    }
  }
};

const editLesson = async (lessonId: string, values: any) => {
  if (isInstructorBlocked()) {
    throw new Error("You are not allowed to edit lesson");
  }
  try {
    console.log("Edit lesson values", values);
    const endpoint = `/api/lessons/auth/updateLesson/${lessonId}`;
    const response = await api.put(endpoint, values);
    console.log("Update lesson response", response.data);
    return response.data;
  } catch (error: any) {
    console.log("[ACTIONS_EDIT_LESSON]", error);
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || "Something went wrong!");
    } else {
      throw new Error(error.message || "Something went wrong!");
    }
  }
};

const uploadLessonVideo = async (lessonId: string, file: File) => {
  if (isInstructorBlocked()) {
    throw new Error("You are not allowed to upload lesson video");
  }
  try {
    const formData = new FormData();
    formData.append("file", file);
    const endpoint = `/api/lessons/auth/uploadVideo/${lessonId}`;
    const response = await api.put(endpoint, formData);
    console.log("Upload video response", response.data);
    return response.data;
  } catch (error: any) {
    console.error("[ACTIONS_UPLOAD_LESSON_VIDEO]", error);
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || "Something went wrong!");
    } else {
      throw new Error(error.message || "Something went wrong!");
    }
  }
};

const reOrderLessons = async (courseId: string, updateData: any) => {
  if (isInstructorBlocked()) {
    throw new Error("You are not allowed to edit this lesson");
  }
  try {
    const endpoint = `/api/lessons/auth/course/${courseId}/reorderLesson`;
    console.log("Reorder lesson updateData", endpoint, updateData);
    const response = await api.patch(endpoint, updateData);
    console.log("Reorder lesson response", response.data);
    return response.data;
  } catch (error: any) {
    console.error("[ACTIONS_REORDER_LESSON]", error);
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || "Something went wrong!");
    } else {
      throw new Error(error.message || "Something went wrong!");
    }
  }
};

const deleteLesson = async (lessonId: string) => {
  if (isInstructorBlocked()) {
    throw new Error("You are not allowed to delete lesson");
  }
  try {
    const endpoint = `/api/lessons/auth/deleteLessonAndReorder/${lessonId}`;
    const response = await api.delete(endpoint);
    console.log("Delete lesson response", response.data);
    return response.data;
  } catch (error: any) {
    console.error("[ACTIONS_DELETE_LESSON]", error);
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || "Something went wrong!");
    } else {
      throw new Error(error.message || "Something went wrong!");
    }
  }
};

export { createLesson, getLesson, editLesson, uploadLessonVideo, reOrderLessons, deleteLesson };
