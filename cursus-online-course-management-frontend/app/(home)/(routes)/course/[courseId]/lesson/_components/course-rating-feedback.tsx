import { Star, ThumbsUp } from "lucide-react";
import React, { useEffect, useState } from "react";
import CommentAndRating from "./comment-and-rating";
import { getFeedbacksOfCourse } from "@/actions/feedback";

const CourseRatingFeedback = ({ courseId }: { courseId: string }) => {
  const [comments, setComments] = useState<
    {
      id: number;
      rating: number;
      feedback: string;
      fullName: string;
      createdAt: string;
    }[]
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      const feedbacks = await getFeedbacksOfCourse(courseId);
      setComments(feedbacks);
      setLoading(false);
    };

    fetchFeedbacks();
  }, [courseId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const totalRatings = comments.length;
  const averageRating = totalRatings
    ? (
        comments.reduce((sum, comment) => sum + comment.rating, 0) /
        totalRatings
      ).toFixed(1)
    : "0.0";
  const fillPercentage = (Number(averageRating) / 5) * 100;
  return (
    <>
      <h1 className="font-semibold text-lg">
        <div className="flex items-center">
          <div className="relative h-6 w-6 mr-2">
            <Star className="absolute top-0 left-0 h-full w-full text-gray-300" />
            <Star
              className="absolute top-0 left-0 h-full w-full text-yellow-500"
              style={{ clipPath: `inset(0 ${100 - fillPercentage}% 0 0)` }}
            />
          </div>
          <span>{averageRating} course rating</span>
          <span className="mx-2">•</span>
          <span>{totalRatings} ratings</span>
        </div>
      </h1>
      <div className="pt-6">
        <CommentAndRating commentData={comments} courseId={courseId} />
      </div>
    </>
  );
};

export default CourseRatingFeedback;
