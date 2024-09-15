import { Course } from "./Course";
import { Student } from "./Student";

export type Enrollment = {
    enrollmentId: string;
    enrollmentDate: Date;
    enrollmentPrice: number;
    course: Course[];
    user: Student[];
};