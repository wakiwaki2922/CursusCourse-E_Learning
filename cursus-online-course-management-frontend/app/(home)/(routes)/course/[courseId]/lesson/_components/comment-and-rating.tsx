import { addFeedback } from "@/actions/feedback";
import { getEnrollmentOfUser } from "@/actions/get-user-course-lesson";
import { Button } from "@/components/ui/button";
import { isStudentBlocked } from "@/lib/account-block";
import { distanceDateToNow } from "@/lib/utils";
import { Star } from "lucide-react";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

interface Comment {
  id: number;
  rating: number;
  feedback: string;
  fullName: string;
  createdAt: string;
}

const CommentAndRating = ({
  commentData,
  courseId,
}: {
  commentData: Comment[];
  courseId: string;
}) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [purchase, setPurchase] = useState<Boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUserData = localStorage.getItem("userData");
      if (storedUserData) {
        setIsLoggedIn(true);
      }
    }
  }, []);

  useEffect(() => {
    const fetchEnrollment = async () => {
      try {
        const response = await getEnrollmentOfUser(courseId);
        if (response && response.lessonProgressList) {
          setPurchase(true);
        } else {
          setPurchase(false);
        }
      } catch (error) {
        console.error("Error fetching enrollment:", error);
        setPurchase(false);
      }
    };
    fetchEnrollment();
  }, [courseId]);

  const handleRating = (rate: number) => {
    setRating(rate);
  };

  const handleSubmit = async () => {
    console.log("Rating:", rating);
    console.log("Comment:", comment);
    try {
      await addFeedback(courseId, { rating, feedback: comment });
      toast.success("Feedback submitted successfully");
    } catch (error: any) {
      console.error("[ACTIONS_ADD_FEEDBACK]", error);
      toast.error(error.message || "Failed to submit feedback");
    }
  };

  return (
    <>
      <Toaster />
      <div className="p-4 border rounded-sm shadow-md">
        <h2 className="font-semibold text-base mb-4">Rate this course</h2>
        <div className="flex items-center mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`h-6 w-6 cursor-pointer ${
                rating >= star
                  ? "text-yellow-500 fill-current"
                  : "text-gray-300"
              }`}
              onClick={() => handleRating(star)}
            />
          ))}
        </div>
        <textarea
          className="w-full p-2 border rounded-sm mb-4 text-sm"
          rows={4}
          placeholder="Leave a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <Button
          className="px-4 py-2"
          onClick={handleSubmit}
          disabled={!isLoggedIn || !purchase || !rating || isStudentBlocked()}
        >
          Submit
        </Button>
      </div>
      <div className="pt-6">
        <h2 className="font-semibold text-base mb-2">Comments and Ratings</h2>
        {commentData.map((comment) => (
          <div
            key={comment.id}
            className="mb-2 p-4 border rounded-sm shadow-md"
          >
            <div className="flex items-center mb-2 justify-between">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-4 w-4 ${
                      comment.rating >= star
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="ml-2 font-semibold text-sm">
                  {comment.fullName}
                </span>
              </div>
              <div className="text-gray-500 text-xs">
                {distanceDateToNow(comment.createdAt)}
              </div>
            </div>
            <p className="text-sm">{comment.feedback}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default CommentAndRating;
