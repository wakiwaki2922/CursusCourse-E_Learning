import api from "@/lib/axios";
import { Category } from "@/types/Category";

interface CategoryPayload {
  categoryName: string;
  categoryIcon: string;
}

const getCategoryWithCourse = async () => {
  try {
    const response = await api.get("/api/category/getAllWithCourses");
    const categories: Category[] = response.data;
    return categories;
  } catch (error) {
    console.log("[ACTIONS_GET_CATEGORY_WITH_COURSE]", error);
    return [];
  }
};

const getCategoryResponseById = async (categoryId: string) => {
  try {
    const endpoint = `/api/category/getCategoryWithCourseById/${categoryId}`;
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    console.log("[ACTIONS_GET_CATEGORY_RESONSE_BY_ID]", error);
    return [];
  }
};

const createCategory = async (
  payLoad: CategoryPayload
): Promise<Category> => {
  try {
    const response = await api.post<Category>(
      "/api/category/auth/createCategory",
      payLoad
    );
    console.log("Create category response", response.data);
    return response.data;
  } catch (error: any) {
    console.log("[ACTIONS_CREATE_CATEGORY]", error);
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || "Something went wrong!");
    } else {
      throw new Error(error.message || "Something went wrong!");
    }
  }
};

const updateCategory = async (
  categoryId: string,
  payLoad: CategoryPayload
): Promise<Category> => {
  try {
    const endpoint = `/api/category/auth/updateCategory/${categoryId}`;
    const response = await api.put<Category>(endpoint, payLoad);
    console.log("Update category response", response.data);
    return response.data;
  } catch (error: any) {
    console.log("[ACTIONS_UPDATE_CATEGORY]", error);
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || "Something went wrong!");
    } else {
      throw new Error(error.message || "Something went wrong!");
    }
  }
};

const deleteCategory = async (categoryId: string) => {
  try {
    const endpoint = `/api/category/auth/${categoryId}`;
    const response = await api.delete(endpoint);
    console.log("Delete category response", response.data);
    return response.data;
  } catch (error: any) {
    console.log("[ACTIONS_DELETE_CATEGORY]", error);
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || "Something went wrong!");
    } else {
      throw new Error(error.message || "Something went wrong!");
    }
  }
};

export {
  createCategory,
  getCategoryWithCourse,
  updateCategory,
  deleteCategory,
  getCategoryResponseById,
};
