import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Course } from "@/types/Course";
import { Lesson } from "@/types/Lesson";
import { UserProgress } from "@/types/UserProgress";
import { Menu } from "lucide-react";
import CourseSidebar from "./course-sidebar";

interface CourseMobileSidebarProps {
    course: Course;
    progressCount: number;
};

const CourseMobileSidebar = ({
    course,
    progressCount
}: CourseMobileSidebarProps) => {
    return (
        <Sheet>
            <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
                <Menu />
            </SheetTrigger>
            <SheetContent side="left" className="p-0 bg-white w-72">
                <CourseSidebar
                    course={course}
                    progressCount={progressCount}
                />
            </SheetContent>
        </Sheet>
    );
}

export default CourseMobileSidebar;