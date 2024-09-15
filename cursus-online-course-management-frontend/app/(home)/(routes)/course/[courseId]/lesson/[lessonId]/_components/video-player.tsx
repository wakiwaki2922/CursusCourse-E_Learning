import { Lesson } from "@/types/Lesson";
import { Lock } from "lucide-react";

interface VideoPlayerProps {
  courseId: string;
  lesson: Lesson;
  nextChapterId: string;
  isLocked: boolean;
}

const VideoPlayer = ({
  courseId,
  lesson,
  nextChapterId,
  isLocked,
}: VideoPlayerProps) => {
  return (
    <>
      <div className="relative aspect-video">
        {isLocked && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-800 flex-col gap-y-2 text-secondary">
            <Lock className="w-8 h-8" />
            <p className="text-sm">This lesson is locked!</p>
          </div>
        )}
        {!isLocked && (
          <video controls className="w-full h-full" src={lesson.videoUrl} />
        )}
        
      </div>
    </>
  );
};

export default VideoPlayer;
