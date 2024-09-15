"use client";

import Loader from "@/app/components/Loader";
import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import "react-quill/dist/quill.bubble.css";

interface PreviewProps {
  value: string;
}

export const Preview = ({ value }: PreviewProps) => {
  const [showFullContent, setShowFullContent] = useState(false);

  const ReactQuill = useMemo(
    () =>
      dynamic(() => import("react-quill"), {
        ssr: false,
        loading: () => <Loader />,
      }),
    []
  );

  const toggleContent = () => {
    setShowFullContent((prev) => !prev);
  };

  const truncatedValue = showFullContent
    ? value
    : value.slice(0, 500) + (value.length > 500 ? "..." : "");

  return (
    <div>
      <ReactQuill theme="bubble" value={truncatedValue} readOnly />
      {value.length > 500 && (
        <div className="inline-block">
          <button onClick={toggleContent} className="px-3 text-sm">
            {showFullContent ? "Show less" : "Show more"}
          </button>
        </div>
      )}
    </div>
  );
};
