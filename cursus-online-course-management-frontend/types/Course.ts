import { Attachment } from "./Attachment";
import { Category } from "./Category";
import { Lesson } from "./Lesson";
import { Purchase } from "./Purchase";

export type Course = {
  courseId: string;
  userId: string;
  courseTitle: string;
  description?: string;
  thumbnailUrl?: string;
  price?: number;
  courseStatus: boolean;
  categories?: any;
  createAt: Date;
  updateAt: Date;
  lessons: Lesson[];
  attachments: Attachment[];
  purchases: Purchase[];
  category: Category;
};

export type { Lesson };
