import api from "@/lib/axios";

const paymentRequest = async (values: {
  paypalPaymentId: string;
  amount: number;
}) => {
  try {
    const endpoint = `/api/paymentRequest/auth/createPaymentRequest`;
    const response = await api.post(endpoint, {
      receivePaypalId: values.paypalPaymentId,
      paypalPaymentId: values.paypalPaymentId,
      amount: values.amount,
    });
    console.log("Payment request response", response.data);
    return response.data;
  } catch (error: any) {
    console.error("[ACTIONS_PAYMENT_REQUEST]", error);
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || "Something went wrong!");
    } else {
      throw new Error(error.message || "Something went wrong!");
    }
  }
};

const getInstructorEarnings = async () => {
  try {
    const endpoint = `/api/instructor/statistic/auth/get_balance`;
    const response = await api.get(endpoint);
    return response.data;
  } catch (error: any) {
    console.error("[ACTIONS_GET_INSTRUCTOR_EARNINGS]", error);
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || "Something went wrong!");
    } else {
      throw new Error(error.message || "Something went wrong!");
    }
  }
};

const getIsNotDonePaymentRequest = async () => {
  try {
    const endpoint = `/api/paymentRequest/getAllIsNotDonePaymentRequest`;
    const response = await api.get(endpoint);
    return response.data;
  } catch (error: any) {
    console.error("[ACTIONS_GET_IS_NOT_PAYMENT_REQUEST]", error);
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || "Something went wrong!");
    } else {
      throw new Error(error.message || "Something went wrong!");
    }
  }
};

const getIsDonePaymentRequest = async () => {
  try {
    const endpoint = `/api/paymentRequest/getAllIsDonePaymentRequest`;
    const response = await api.get(endpoint);
    return response.data;
  } catch (error: any) {
    console.error("[ACTIONS_GET_IS_PAYMENT_REQUEST]", error);
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || "Something went wrong!");
    } else {
      throw new Error(error.message || "Something went wrong!");
    }
  }
};

const getPaymentRequestIsNotDoneById = async (paymentRequestId: string) => {
  try {
    const endpoint = `/api/paymentRequest/getPaymentRequestIsNotDoneById/${paymentRequestId}`;
    const response = await api.get(endpoint);
    return response.data;
  } catch (error: any) {
    console.error("[ACTIONS_GET_IS_NOT_PAYMENT_REQUEST]", error);
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || "Something went wrong!");
    } else {
      throw new Error(error.message || "Something went wrong!");
    }
  }
};

const createInstructorRefundPayment = async (
  paymentRequestId: string,
  returnUrl: string,
  cancelUrl: string
) => {
  try {
    const endpoint = `/api/payment/auth/createInstructorRefundPayment/${paymentRequestId}`;
    const response = await api.post(endpoint, {
      returnUrl: returnUrl,
      cancelUrl: cancelUrl,
    });
    console.log("Create Instructor Refund Payment Response", response.data);
    return response.data;
  } catch (error: any) {
    console.error("[ACTIONS_CREATE_PAYOUT_PAYMENT]", error);
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || "Something went wrong!");
    } else {
      throw new Error(error.message || "Something went wrong!");
    }
  }
};

const changeStatusForRequest = async (paymentRequestId: string) => {
  try {
    const endpoint = `/api/paymentRequest/changeStatusForRequest/${paymentRequestId}`;
    const response = await api.put(endpoint);
    console.log("Change Status For Payment Response", response.data);
    return response.data;
  } catch (error: any) {
    console.error("[ACTIONS_CHANGE_STATUS_PAYMENT_RESPONSE]", error);
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || "Something went wrong!");
    } else {
      throw new Error(error.message || "Something went wrong!");
    }
  }
};

const executeInstructorRefundPayment = async (paymentId: string, payerId: string, paymentRequestId: string) => {
  try {
    console.log(
      "[ACTIONS_EXECUTE_PAYOUT] executeInstructorRefundPayment: ",
      paymentId,
      payerId
    );
    const endpoint = `/api/payment/auth/executeInstructorRefundPayment`;
    const response = await api.post(endpoint, {
      paymentId: paymentId,
      payerId: payerId,
      paymentRequestId: paymentRequestId,
    });
    console.log(
      "[ACTIONS_EXECUTE_PAYOUT] executeInstructorRefundPayment response: ",
      response.data
    );
    return response.data;
  } catch (error: any) {
    console.error("[ACTIONS_EXECUTE_PAYOUT]", error);
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || "Something went wrong!");
    } else {
      throw new Error(error.message || "Something went wrong!");
    }
  }
};

export {
  paymentRequest,
  getInstructorEarnings,
  getIsNotDonePaymentRequest,
  getIsDonePaymentRequest,
  getPaymentRequestIsNotDoneById,
  createInstructorRefundPayment,
  changeStatusForRequest,
  executeInstructorRefundPayment,
};
