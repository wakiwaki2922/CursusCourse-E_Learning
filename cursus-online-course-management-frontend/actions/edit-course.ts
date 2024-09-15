import { isInstructorBlocked } from "@/lib/account-block";
import api from "@/lib/axios";

const createCourse = async (values: any) => {
  if (isInstructorBlocked()) {
    throw new Error("You are not allowed to create course");
  }
  try {
    const endpoint = "/api/courses/auth/createCourse";
    const response = await api.post(endpoint, values);
    console.log("Create course response", response.data);
    return response.data;
  } catch (error: any) {
    console.error("[ACTIONS_CREATE_COURSE]", error);
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || "Fail to create course");
    } else {
      throw new Error(error.message || "Fail to create course");
    }
  }
};

const getCourseByIdByInstructor = async (courseId: string) => {
  try {
    const endpoint = `/api/courses/getCourseById/${courseId}`;
    const response = await api.get(endpoint);
    console.log("Get course by id response", response.data);
    return response.data;
  } catch (error: any) {
    console.error("[ACTIONS_GET_COURSE_BY_ID]", error);
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || "Something went wrong!");
    } else {
      throw new Error(error.message || "Something went wrong!");
    }
  }
};

const editCourse = async (courseId: string, values: any) => {
  if (isInstructorBlocked()) {
    throw new Error("You are not allowed to edit course");
  }
  try {
    const endpoint = `/api/courses/auth/updateCourse/${courseId}`;
    const response = await api.put(endpoint, values);
    console.log("Update response", response.data);
    return response.data;
  } catch (error: any) {
    console.error("[ACTIONS_EDIT_COURSE]", error);
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || "Something went wrong!");
    } else {
      throw new Error(error.message || "Something went wrong!");
    }
  }
};

const uploadThumbnail = async (courseId: string, file: File) => {
  if (isInstructorBlocked()) {
    throw new Error("You are not allowed to upload course thumbnail");
  }
  try {
    const formData = new FormData();
    formData.append("file", file); // Changed key to "file" to match the Spring Boot controller
    const endpoint = `/api/courses/auth/uploadThumbnail/${courseId}`;
    const response = await api.put(endpoint, formData);
    console.log("Upload response", response.data);
    return response.data;
  } catch (error: any) {
    console.error("[ACTIONS_UPLOAD_THUMBNAIL]", error);
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || "Something went wrong!");
    } else {
      throw new Error(error.message || "Something went wrong!");
    }
  }
};

const deleteCourse = async (courseId: string) => {
  if (isInstructorBlocked()) {
    throw new Error("You are not allowed to delete course");
  }
  try {
    const endpoint = `/api/courses/auth/deleteCourse/${courseId}`;
    const response = await api.delete(endpoint);
    console.log("Delete response", response.data);
    return response.data;
  } catch (error: any) {
    console.error("[ACTIONS_DELETE_COURSE]", error);
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || "Fail to delete course");
    } else {
      throw new Error(error.message || "Fail to delete course");
    }
  }
};

export { createCourse, getCourseByIdByInstructor, editCourse, uploadThumbnail, deleteCourse };
