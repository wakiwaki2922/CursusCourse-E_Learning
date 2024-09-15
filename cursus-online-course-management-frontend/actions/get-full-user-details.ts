import api from "@/lib/axios";

const getFullUserDetails = async () => {
  try {
    const endpoint = `/api/user/auth/getFullUserDetails`;
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    console.error("[ACTIONS_GET_FULL_USER_DETAILS]", error);
    return null;
  }
};

export default getFullUserDetails;

const getUser = async () => {
  try {
    const endpoint = `/api/user/auth/getUser`;
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    console.error("[ACTIONS_GET_USER]", error);
    return null;
  }
};

const updateUser = async (body: any) => {
  try {
    const endpoint = `/api/user/auth/updateUser`;
    const response = await api.put(endpoint, body);
    return response.data;
  } catch (error: any) {
    console.error("[ACTIONS_UPDATE_USER]", error);
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || "Something went wrong!");
    } else {
      throw new Error(error.message || "Something went wrong!");
    }
  }
};

const changePassword = async (body: any) => {
    try {
        const endpoint = `/api/user/auth/changePassword`;
        const response = await api.patch(endpoint, body);
        return response.data;
    } catch (error: any) {
        console.error("[ACTIONS_CHANGE_PASSWORD]", error);
        if (error.response && error.response.data) {
        throw new Error(error.response.data.message || "Something went wrong!");
        } else {
        throw new Error(error.message || "Something went wrong!");
        }
    }
};

const registerBecomeInstructor = async (data: any) => {
  try {
    const endpoint = `/api/user/auth/registerBecomeInstructor`;
    const response = await api.put(endpoint, data);
    return response.data;
  } catch (error: any) {
    console.error("[ACTIONS_REGISTER_BECOME_INSTRUCTOR]", error);
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || "Something went wrong!");
    } else {
      throw new Error(error.message || "Something went wrong!");
    }
  }
};

export { getUser, updateUser, changePassword, registerBecomeInstructor };
