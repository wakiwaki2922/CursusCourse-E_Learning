import { Course } from "./Course";
import { Student } from "./Student";

export type Instructor = {
    stutdent: Student;
    courses: Course[];
    introduction: string;
    professionalExperience: string;
    joinDate: Date
    avatarImageUrl: string;
    fullName: string;
    userId: string;
  };