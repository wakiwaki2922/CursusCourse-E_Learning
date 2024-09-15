import api from "@/lib/axios";
import { Enrollment } from "@/types/Enrollment";

interface StatisticalAdminResponse {
  thisMonthRevenue: number;
  totalRevenue: number;
  percentageRevenueOfThisMonthAndLastMonth: number;

  thisMonthCourses: number;
  totalCourse: number;
  percentageCoursesOfThisMonthAndLastMonth: number;

  thisMonthEnrollments: number;
  totalEnrollment: number;
  percentageEnrollmentsOfThisMonthAndLastMonth: number;

  thisMonthUsers: number;
  totalUsers: number;
  percentageUsersOfThisMonthAndLastMonth: number;
}

interface DataChartCountUser {
  month: string;
  numberStudent: number;
  numberInstructor: number;
}

type EnrollmentResponse = {
  enrollmentId: number;
  enrollmentDate: string;
  userName: string;
  courseName: string;
  enrollmentPrice: number;
  lessonProgressList: any;
};

type CourseAndEnrollmentCountResponse = {
  date: string; 
  courseCount: number;
  enrollmentCount: number;
};


const getStatisticalAdmin = async () => {
  try {
    const response = await api.get("/api/admin/auth/statisticalAdmin");
    const instructor: StatisticalAdminResponse = response.data;
    return instructor;
  } catch (error) {
    console.log("[ACTIONS_GET_STATISTICAL_ADMIN]", error);
    return [];
  }
};

const getChartCountUser = async () => {
  try {
    const response = await api.get("/api/admin/auth/getChartCountUser");
    const instructor: DataChartCountUser[] = response.data;
    return instructor;
  } catch (error) {
    console.log("[ACTIONS_GET_DATA_CHART_COUNT_USER_ADMIN]", error);
    return [];
  }
};

const getFiveNewEnrollments = async () => {
  try {
    const response = await api.get("/api/enrollment/auth/getFiveNewEnrollments");
    const enrollments: EnrollmentResponse[] = response.data;
    return enrollments;
  } catch (error) {
    console.log("[ACTIONS_GET_FIVE_NEW_ENROLLMENTS]", error);
    return [];
  }
};

const getCourseAndEnrollmentCountBy30Date = async (): Promise<CourseAndEnrollmentCountResponse[]> => {
  try {
    const response = await api.get("/api/admin/auth/getCourseAndEnrollmentCountBy30Date");
    const data: CourseAndEnrollmentCountResponse[] = response.data;
    return data;
  } catch (error) {
    console.log("[ACTIONS_GET_COURSE_AND_ENROLLMENT_COUNT_BY_30_DATE]", error);
    return [];
  }
};

const exportEnrollmentData = async (startDate: string, endDate: string) => {
  try {
    const response = await api.get('/api/admin/auth/generate_report', {
      params: {
        startDate,
        endDate,
      },
      responseType: 'blob', 
    });

    const url = window.URL.createObjectURL(new Blob([response.data]));
    const a = document.createElement('a');
    a.href = url;
    a.download = 'report.xlsx';
    document.body.appendChild(a);
    a.click();
    a.remove();
  } catch (error) {
    throw new Error('Failed to download file');
  }
};

export { getStatisticalAdmin, getChartCountUser, getFiveNewEnrollments, getCourseAndEnrollmentCountBy30Date, exportEnrollmentData };
