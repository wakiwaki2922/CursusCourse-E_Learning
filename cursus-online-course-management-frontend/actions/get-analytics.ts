import api from "@/lib/axios";
import { Course } from "@/types/Course";
import { Purchase } from "@/types/Purchase";

type PurchaseWithCourse = Purchase & {
    course: Course;
};

const groupByCourse = (purchases: PurchaseWithCourse[]) => {
    const grouped: { [courseTitle: string]: number } = {};

    purchases.forEach((purchase) => {
        const courseTitle = purchase.course.courseTitle;

        if (!grouped[courseTitle]) {
            grouped[courseTitle] = 0;
        }
        grouped[courseTitle] += purchase.course.price!;
    });
    return grouped;
};

export const getAnalytics = async (revenueQuarter: number, totalSalesQuarter: number) => {
    try {

        // const purchases: PurchaseWithCourse[] = await axios.get(`/api/courses/purchases/${userId}`);
        // const purchases: PurchaseWithCourse[] = [];

        // const groupEarnings = groupByCourse(purchases);
        // const data = Object.entries(groupEarnings).map(([courseTitle, total]) => ({
        //     name: courseTitle,
        //     total: total
        // }));
        const pieChartData: Array<{ name: string; total: number }> = await getPieCharts();

        const composedChartData = await getComposedChartData();

        const totalSales: number = await getTotalSales(totalSalesQuarter);

        const totalRevenue: number = await getTotalRevenue(revenueQuarter);

        return {
            pieChartData,
            composedChartData,
            totalRevenue,
            totalSales
        }
    } catch (error) {
        console.log("[ACTION_GET_ANALYTICS]", error);
        return {
            pieChartData: [],
            composedChartData: [],
            totalRevenue: 0,
            totalSales: 0
        }
    }
}

const getTotalRevenue = async (quarter: number): Promise<number> => {
    try {
        const endpoint = `/api/instructor/statistic/auth/quarterly_revenue/${quarter}`;
        const response = await api.get(endpoint);
        return response.data;
    } catch (error: any) {
        console.error("[ACTIONS_GET_TOTAL_REVENUE]", error);
        return 0;
    }
};

const getTotalSales = async (quarter: number): Promise<number> => {
    try {
        const endpoint = `/api/instructor/statistic/auth/quarterly_number_of_enrollment/${quarter}`;
        console.log("[ENDPOINT]", endpoint);
        const response = await api.get(endpoint);
        return response.data;
    } catch (error: any) {
        console.error("[ACTIONS_GET_TOTAL_SALES]", error);
        return 0;
    }
};

const getPieCharts = async (): Promise<Array<{ name: string; total: number }>> => {
    try {
        const endpoint = `/api/instructor/statistic/auth/revenue_of_each_course`;
        const response = await api.get(endpoint);
        const data: { [month: string]: number } = response.data;
        
        return Object.entries(data).map(([month, total]) => ({
            name: month,
            total: total as number
        }));
    } catch (error: any) {
        console.error("[ACTIONS_GET_CHARTS]", error);
        return [];
    }
};

const getComposedChartData = async (): Promise<Array<any>> => {
    try {
        const endpoint = `/api/instructor/statistic/auth/compose_analysis`;
        const response = await api.get(endpoint);
        return response.data;
    } catch (error) {
        console.error("[ACTIONS_GET_COMPOSED_CHART]", error);
        return [];
    }
};