"use client";

import { generateCertificate } from "@/actions/get-progress";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import InstructorCard from "../_components/instructor-card";
import CourseRatingFeedback from "../_components/course-rating-feedback";

// Set the workerSrc for PDF.js
// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   'pdfjs-dist/build/pdf.worker.min.mjs',
//   import.meta.url,
// ).toString();
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const CertificatePage = ({ params }: { params: { courseId: string } }) => {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [numPages, setNumPages] = useState<number | null>(null);

  useEffect(() => {
    const fetchCertificate = async () => {
      try {
        const url = await generateCertificate(params.courseId);
        setPdfUrl(url);
      } catch (error: any) {
        toast.error(error.message || "Failed to fetch certificate");
      }
    };
    fetchCertificate();
  }, [params.courseId]);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <>
      <Toaster />
      <div className="p-6">
        <Link
          href={`/`}
          className="flex items-center text-sm hover:opacity-75 transition mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to home page
        </Link>
      </div>
      {pdfUrl && (
        <div className="w-full h-fit flex justify-center items-start overflow-auto">
          <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
          </Document>
        </div>
      )}
      <Separator />
      <div className="p-4">
        <CourseRatingFeedback courseId={params.courseId} />
      </div>
    </>
  );
};

export default CertificatePage;
