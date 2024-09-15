import api from "@/lib/axios";

interface registerPayload {
  email: string;
  password: string;
  phone: string;
  fullName: string;
}

const register = async (payLoad: registerPayload) => {
  try {
    const response = await api.post("/api/user/authenticate/signup", payLoad);
    return response;
  } catch (error: any) {
    console.log("[ACTIONS_REGISTER]", error);
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || "Something went wrong!");
    } else {
      throw new Error(error.message || "Something went wrong!");
    }
  }
};

const verifyEmailByToken = async (token: string) => {
  try {
    const endpoint = `/api/verifyEmailByToken/${token}`;
    const response = await api.get(endpoint);
    return response;
  } catch (error: any) {
    console.log("[ACTIONS_VERIFY_EMAIL]", error);
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || "Something went wrong!");
    } else {
      throw new Error(error.message || "Something went wrong!");
    }
  }
};

const login = async (payLoad: { email: string; password: string }) => {
  try {
    const endpoint = `/api/auth/login`;
    const response = await api.post(endpoint, payLoad);
    return response.data;
  } catch (error: any) {
    console.log("[ACTIONS_LOGIN]", error);
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || "Something went wrong!");
    } else {
      throw new Error(error.message || "Something went wrong!");
    }
  }
};

const loginWithGoogle = async (token: string) => {
  try {
    const endpoint = `/api/auth/loginWithGoogle`;
    console.log("Token: ", token);
    const response = await api.post(endpoint, { access_token: token });
    console.log("Backend response:", response.data);
    return response.data;
  } catch (error: any) {
    console.log("[ACTIONS_LOGIN_WITH_GOOGLE]", error);
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || "Login with Google fail!");
    } else {
      throw new Error(error.message || "Login with Google fail!");
    }
  }
};

const signUp = async (values: any) => {
  try {
    const endpoint = `/api/auth/register`;
    const response = await api.post(endpoint, values);
    return response;
  } catch (error: any) {
    console.log("API_USER_AUTHENTICATE_SIGN_UP", error);
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || "Signup fail!");
    } else {
      throw new Error(error.message || "Signup fail!");
    }
  }
};

const forgotPassword = async (email: string) => {
  try {
      const endpoint = `/api/auth/forgotPassword/${email}`;
      const response = await api.get(endpoint);
      return response.data;
  } catch (error) {
      console.error("[ACTIONS_FORGOT_PASSWORD]", error);
      return null;
  }
};

const resetPassword = async (data: { password: string, verificationToken: string }) => {
  try {
      const endpoint = `/api/auth/resetPassword`;
      const response = await api.post(endpoint, data);
      return response.data;
  } catch (error) {
      console.error("[ACTIONS_RESET_PASSWORD]", error);
      return null;
  }
}

export { verifyEmailByToken, register, login, loginWithGoogle, signUp, forgotPassword, resetPassword };
