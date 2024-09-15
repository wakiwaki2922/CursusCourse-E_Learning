import { Enrollment } from "./Enrollment";

export type Student = {
  userId: string;
  fullName: string;
  email: string;
  phone: string;
  status: boolean;
  verify: boolean;
  joinDate: Date;
  roles: string[];
  avatarImageUrl: string;
  enrollmentsResponse: Enrollment[];
};
    