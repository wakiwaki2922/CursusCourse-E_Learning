import { UserProgress } from "./UserProgress";

export type Lesson = {
    lessonId: string;
    lessonTitle: string;
    lessonDescription?: string;
    videoUrl?: string;
    position: number;
    isPublished: boolean;
    isFree: boolean;
    courseId: string;
    createAt: Date;
    updateAt: Date;
    lessonProgressList: UserProgress[];
}