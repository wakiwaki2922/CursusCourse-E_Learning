import api from "@/lib/axios";

const getProgressCount = async (courseId: string) => {
  try {
    const endpoint = `/api/lessonProgress/auth/getProgressCount/${courseId}`;
    const response = await api.get(endpoint);
    return response.data;
  } catch (error: any) {
    console.log("[ACTIONS_GET_PROGRESS_COUNT]", error);
    return 0;
  }
};

const completedLesson = async (courseId: string, lessonId: string) => {
  try {
    const endpoint = `/api/lessonProgress/auth/course/${courseId}/lesson/${lessonId}/completed`;
    const response = await api.post(endpoint);
    console.log("[ACTIONS_COMPLETED_LESSON]", response.data);
    return response.data;
  } catch (error: any) {
    console.log("[ACTIONS_COMPLETED_LESSON]", error);
    if (error.response && error.response.data) {
      throw new Error(
        error.response.data.message ||
          "Something went wrong! Completed lesson failed"
      );
    } else {
      throw new Error(
        error.message || "Something went wrong! Completed lesson failed"
      );
    }
  }
};

const unCompleteLesson = async (courseId: string, lessonId: string) => {
  try {
    const endpoint = `/api/lessonProgress/auth/course/${courseId}/lesson/${lessonId}/uncompleted`;
    const response = await api.patch(endpoint);
    console.log("[ACTIONS_UNCOMPLETED_LESSON]", response.data);
    return response.data;
  } catch (error: any) {
    console.log("[ACTIONS_UNCOMPLETED_LESSON]", error);
    if (error.response && error.response.data) {
      throw new Error(
        error.response.data.message ||
          "Something went wrong! Uncompleted lesson failed"
      );
    } else {
      throw new Error(
        error.message || "Something went wrong! Uncompleted lesson failed"
      );
    }
  }
};

const generateCertificate = async (
  courseId: string
): Promise<string | null> => {
  try {
    const endpoint = `/api/enrollment/auth/generateCertificate/course/${courseId}`;
    const response = await api.get(endpoint, {
      responseType: "blob", // Ensure the response is treated as a Blob
      headers: {
        "Content-Type": "application/pdf",
      },
    });

    const blob = response.data;
    const url = URL.createObjectURL(blob);
    return url;
  } catch (error: any) {
    console.error("Error generating certificate:", error);
    if (error.response && error.response.data) {
      throw new Error(
        error.response.data.message ||
          "Something went wrong! Uncompleted course to get certificate"
      );
    } else {
      throw new Error(
        error.message || "Something went wrong! Uncompleted course to get certificate"
      );
    }
  }
};

export {
  getProgressCount,
  completedLesson,
  unCompleteLesson,
  generateCertificate,
};
