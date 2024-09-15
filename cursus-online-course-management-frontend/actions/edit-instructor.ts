import api from '@/lib/axios';
import { Instructor } from '@/types/Instructor';


const getAllInstructorWithCourse = async () => {
    try {
        const response = await api.get('/api/admin/auth/getAllInstructor');
        const instructor: Instructor[] = response.data;
        return instructor;
    } catch (error) {
        console.log("[ACTIONS_GET_INSTRUCTOR_WITH_COURSE]", error);
        return [];
    }
}

const getInstructorInfoById = async (instructorId: string) => {
    try {
        const response = await api.get(`/api/user/getInstructorById/${instructorId}`);
        const instructor: Instructor = response.data;
        return instructor;
    } catch (error: any) {
        console.log("[ACTIONS_GET_INSTRUCTOR_INFO_BY_ID]", error);
        return null;
    }
}

const getInstructorHavaImageById = async (userId: string) => {
    try {
      const endpoint = `/api/user/auth/getInstructorHavaImageById`;
      const response = await api.get(endpoint, { params: { userId } });
      return response.data;
    } catch (error) {
      console.error("[ACTIONS_GET_USER]", error);
      return null;
    }
  };

export { getAllInstructorWithCourse, getInstructorInfoById, getInstructorHavaImageById };