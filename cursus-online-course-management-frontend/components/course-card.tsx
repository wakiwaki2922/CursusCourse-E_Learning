import Image from "next/image";
import Link from "next/link";
import { IconBagde } from "./icon-badge";
import { Book } from "lucide-react";
import { formatPrice } from "@/lib/format";
import CourseProgress from "./course-progress";

interface CourseCardProps {
  id: string;
  title: string;
  imageUrl: string;
  chaptersLength: number;
  price: number;
  category: string;
  progress: number | null;
}

const CourseCard = ({
  id,
  title,
  imageUrl,
  chaptersLength,
  price,
  category,
  progress,
}: CourseCardProps) => {
  return (
    <>
      <Link href={`/course/${id}`}>
        <div className="group hover:shadow-sm transition overflow-hidden border rounded-lg p-3 h-full">
          <div className="relative w-full aspect-video rounded-md overflow-hidden">
            <Image
              fill
              className="object-cover"
              alt={title}
              src={imageUrl || "/default-thumbnail.jpg"}
            />
          </div>
          <div className="flex flex-col pt-2">
            <div className="text-lg md:text-base font-medium group-hover:text-sky-700 transition line-clamp-2">
              {title}
            </div>
            <div className="my-3 flex items-center gap-x-2 text-sm md:text-xs">
              <div className="flex items-center gap-x-1 text-slate-500">
                <IconBagde size="sm" icon={Book} />
                <span>
                  {chaptersLength}{" "}
                  {chaptersLength === 1 ? "Chapter" : "Chapters"}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm text-slate-500">{category}</div>
              <div className="text-sm font-medium text-sky-700">
                {progress != null ? (
                  <div>
                    <CourseProgress
                      size="sm"
                      value={progress}
                      variant={progress === 100 ? "success" : "default"}
                    />
                  </div>
                ) : (
                  <p className="text-md md:text-sm font-medium text-slate-700">
                    {formatPrice(price)}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CourseCard;
