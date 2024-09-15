import { cn } from "@/lib/utils";
import { Progress } from "./ui/progress";

interface CourseProgressProps {
    value: number;
    variant?: "default" | "success" | "warning",
    size?: "default" | "sm";
};

const colourByVariant = {
    default: "text-sky-700",
    success: "text-emerald-700",
    warning: "text-rose-700"
}

const sizeByVariant = {
    default: "text-sm",
    sm: "text-xs"
}

const CourseProgress = ({
    value,
    variant,
    size
}: CourseProgressProps) => {
    return (
        <div>
            <Progress
                className="h-2"
                value={value}
                variant={variant}
            />
            <p className={cn(
                "font-medium mt-2 text-sky-700",
                colourByVariant[variant || "default"],
                sizeByVariant[size || "default"]
            )}>
                {variant === "warning" && ("Not Started. Need enroll to start.")}
                {variant !== "warning" && `${Math.round(value)}% Completed`}
                {/* {Math.round(value)}% Completed */}
            </p>
        </div>
    );
}

export default CourseProgress;