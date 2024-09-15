import api from "@/lib/axios";
import { Student } from "@/types/Student";

const getAllStudentWithEnrollment = async () => {
  try {
    const response = await api.get("/api/admin/auth/getAllStudent");
    const students: Student[] = response.data;
    return students;
  } catch (error) {
    console.log("[ACTIONS_GET_STUDENT_WITH_ENROLLMENT]", error);
    return [];
  }
};

const uploadAvatar = async (file: File) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    const endpoint = `/api/user/auth/uploadAvatar`;
    const response = await api.put(endpoint, formData);
    console.log("Upload response", response.data);
    return response.data;
  } catch (error: any) {
    console.error("[ACTIONS_UPLOAD_AVATAR]", error);
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || "Something went wrong!");
    } else {
      throw new Error(error.message || "Something went wrong!");
    }
  }
};

const getStudentOwnedCoursesById = async (userId: string) => {
  try {
    const response = await api.get(
      "/api/courses/auth/getStudentOwnedCoursesById",
      {
        params: { userId },
      }
    );
    return response.data;
  } catch (error) {
    console.log("[ACTIONS_GET_STUDENT_OWN_COURSES]", error);
    return [];
  }
};

const getUserById = async (userId: string) => {
  try {
    const endpoint = `/api/user/auth/getUserById`;
    const response = await api.get(endpoint, { params: { userId } });
    return response.data;
  } catch (error) {
    console.error("[ACTIONS_GET_USER]", error);
    return null;
  }
};

const updateStatusUser = async (userId: string, newStatus: String) => {
  try {
    const endpoint = `/api/admin/auth/updateStatusUser/${userId}`;
    const response = await api.put(endpoint, null, {
      params: { newStatus },
    });
    return response.data;
  } catch (error: any) {
    console.error("[ACTIONS_GET_USER]", error);
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || "Something went wrong!");
    } else {
      throw new Error(error.message || "Something went wrong!");
    }
  }
};

const verifyEmail = async (email: string) => {
  try {
    const response = await api.get(`/api/auth/sendVerifyEmail/${email}`);
    return response.data;
  } catch (error: any) {
    console.error("[ACTIONS_VERIFY_EMAIL]", error);
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || "Something went wrong!");
    } else {
      throw new Error(error.message || "Something went wrong!");
    }
  }
};

export {
  getAllStudentWithEnrollment,
  uploadAvatar,
  getStudentOwnedCoursesById,
  getUserById,
  updateStatusUser,
  verifyEmail,
};
