"use client";

import { getFiveNewEnrollments } from '@/actions/admin-dashboard';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Enrollment } from '@/types/Enrollment';
import { useEffect, useState } from 'react';

type EnrollmentResponse = {
  enrollmentId: number;
  enrollmentDate: string;
  userName: string;
  courseName: string;
  enrollmentPrice: number;
  lessonProgressList: any;
};

const RecentSales = () => {

  const [enrollment, setEnrollment] = useState<EnrollmentResponse[]>([]);

  useEffect(() => {
    const fetchEnrollments = async () => {
      try {
        const data = await getFiveNewEnrollments(); 
        setEnrollment(data);
      } catch (error) {
        console.error("Error fetching enrollments:", error);
      }
    };
  
    fetchEnrollments();
  }, []);
  

  return (
    <div className="space-y-8">
      {enrollment.map((enrollment) => (
        <div key={enrollment.enrollmentId} className="flex items-center">
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{enrollment.userName}</p>
            <p className="text-sm text-muted-foreground">{enrollment.courseName}</p>
          </div>
          <div className="ml-auto font-medium">+${enrollment.enrollmentPrice.toFixed(2)}</div>
        </div>
      ))}
    </div>
  );
}


export default RecentSales;