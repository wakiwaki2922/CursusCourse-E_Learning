import api from "@/lib/axios";
import { Course } from "@/types/Course";
import { Purchase } from "@/types/Purchase";

type PurchaseWithCourse = Purchase & {
  course: Course;
};

export const getAnalytics = async (
  userId: string,
  revenueQuarter: number,
  totalSalesQuarter: number
) => {
  try {
    const pieChartData: Array<{ name: string; total: number }> =
      await getPieCharts(userId);
    const composedChartData = await getComposedChartData(userId);
    const totalSales: number = await getTotalSales(userId, totalSalesQuarter);
    const totalRevenue: number = await getTotalRevenue(userId, revenueQuarter);

    return {
      pieChartData,
      composedChartData,
      totalRevenue,
      totalSales,
    };
  } catch (error) {
    console.log("[ACTION_GET_ANALYTICS]", error);
    return {
      pieChartData: [],
      composedChartData: [],
      totalRevenue: 0,
      totalSales: 0,
    };
  }
};

const getTotalRevenue = async (
  userId: string,
  quarter: number
): Promise<number> => {
  try {
    const endpoint = `/api/instructor/statistic/quarterlyRevenue`;
    const response = await api.get(endpoint, { params: { userId, quarter } });
    return response.data;
  } catch (error: any) {
    console.error("[ACTIONS_GET_TOTAL_REVENUE]", error);
    return 0;
  }
};

const getTotalSales = async (
  userId: string,
  quarter: number
): Promise<number> => {
  try {
    const endpoint = `/api/instructor/statistic/quarterlyEnrollment`;
    const response = await api.get(endpoint, { params: { userId, quarter } });
    return response.data;
  } catch (error: any) {
    console.error("[ACTIONS_GET_TOTAL_SALES]", error);
    return 0;
  }
};

const getPieCharts = async (
  userId: string
): Promise<Array<{ name: string; total: number }>> => {
  try {
    const endpoint = `/api/instructor/statistic/revenueOfEachCourse`;
    const response = await api.get(endpoint, { params: { userId } });
    const data: { [course: string]: number } = response.data;

    return Object.entries(data).map(([course, total]) => ({
      name: course,
      total: total as number,
    }));
  } catch (error: any) {
    console.error("[ACTIONS_GET_CHARTS]", error);
    return [];
  }
};

const getComposedChartData = async (userId: string): Promise<Array<any>> => {
  try {
    const endpoint = `/api/instructor/statistic/analysis`;
    const response = await api.get(endpoint, { params: { userId } });
    return response.data;
  } catch (error) {
    console.error("[ACTIONS_GET_COMPOSED_CHART]", error);
    return [];
  }
};
