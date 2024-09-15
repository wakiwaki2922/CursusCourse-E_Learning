import { Course } from "./Course";

export type Category = {
    categoryId: string;
    categoryName: string;
    categoryIcon: string;
    courses: Course[];
};