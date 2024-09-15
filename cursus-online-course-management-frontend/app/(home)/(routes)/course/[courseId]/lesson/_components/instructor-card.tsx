import { getInstructorInfoById } from "@/actions/edit-instructor";
import { Preview } from "@/components/preview";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Instructor } from "@/types/Instructor";
import React, { useEffect, useState } from "react";

const InstructorCard = ({ instructorId }: { instructorId: string }) => {
  const [instructor, setInstructor] = useState<Instructor>();
  useEffect(() => {
    async function fetchInstructorData() {
      try {
        const data = await getInstructorInfoById(instructorId);
        if (data) {
          setInstructor(data);
        }
      } catch (error) {
        console.error("Error fetching instructor:", error);
      }
    }
    fetchInstructorData();
  }, [instructorId]);
  return (
    <>
      <h1 className="font-semibold text-lg">Instructor Information</h1>
      <div className="p-4 flex flex-col md:flex-row justify-between">
        <Avatar className="h-16 w-16">
          <AvatarImage
            src={instructor?.avatarImageUrl || "/avatar-default.svg"}
          />
        </Avatar>
        <div className="flex flex-col px-6">
          <h2 className="text-base font-normal">{instructor?.fullName}</h2>
          <p className="text-sm py-1">{instructor?.introduction}</p>
        </div>
      </div>
      <Preview value={instructor?.professionalExperience || ""} />
    </>
  );
};

export default InstructorCard;
