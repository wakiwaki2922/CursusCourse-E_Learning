import api from "@/lib/axios";

const addFeedback = async (
  courseId: string,
  { rating, feedback }: { rating: number; feedback: string }
) => {
  try {
    const endpoint = `/api/feedbacks/auth/addFeedback/${courseId}`;
    console.log("Add feedback endpoint", endpoint, rating, feedback);
    const response = await api.post(endpoint, {
      rating: rating,
      feedback: feedback,
    });
    console.log("Add feedback response", response.data);
    return response.data;
  } catch (error: any) {
    console.error("[ACTIONS_ADD_FEEDBACK]", error);
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || "Something went wrong!");
    } else {
      throw new Error(error.message || "Something went wrong!");
    }
  }
};

const getFeedbacksOfCourse = async (courseId: string) => {
  try {
    const endpoint = `/api/feedbacks/getFeedbacks/${courseId}`;
    const response = await api.get(endpoint);
    console.log("Get feedbacks response", response.data);
    return response.data;
  } catch (error: any) {
    console.error("[ACTIONS_GET_FEEDBACKS]", error);
    return [];
  }
};

export { addFeedback, getFeedbacksOfCourse };
