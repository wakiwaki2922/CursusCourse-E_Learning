import api from "@/lib/axios";
import { Course } from "@/types/Course";

const createEnrollPayment = async (price: number, course: Course) => {
  try {
    const BASE_FE_URL = process.env.BASE_API_URL_FE;
    const endpoint = `/api/payment/auth/createEnrollRequestPayment`;
    const response = await api.post(endpoint, {
      amount: price,
      currency: "USD",
      description: `Course enrollment for course title ${course.courseTitle}`,
      method: "paypal",
      cancelUrl: `${BASE_FE_URL}/course/${course.courseId}/lesson`,
      returnUrl: `${BASE_FE_URL}/course/${course.courseId}/lesson/payment-success`,
      payeeId: "sb-w3nfo30755669@gmail.com",
    });
    console.log(
      "[ACTIONS_ENROLL_PAYMENT] createEnrollPayment response: ",
      response.data
    );
    return response.data;
  } catch (error: any) {
    console.error("[ACTIONS_ENROLL_PAYMENT]", error);
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || "Something went wrong!");
    } else {
      throw new Error(error.message || "Something went wrong!");
    }
  }
};

const executeEnrollPayment = async (paymentId: string, payerId: string, courseId: string) => {
  try {
    console.log(
      "[ACTIONS_ENROLL_PAYMENT] executeEnrollPayment: ",
      paymentId,
      payerId
    );
    const endpoint = `/api/payment/auth/executeEnrollRequestPayment`;
    const response = await api.post(endpoint, {
      paymentId: paymentId,
      payerId: payerId,
      courseId: courseId,
    });
    console.log(
      "[ACTIONS_ENROLL_PAYMENT] executeEnrollPayment response: ",
      response.data
    );
    return response.data;
  } catch (error: any) {
    console.error("[ACTIONS_ENROLL_PAYMENT]", error);
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || "Something went wrong!");
    } else {
      throw new Error(error.message || "Something went wrong!");
    }
  }
};

export { createEnrollPayment, executeEnrollPayment };
