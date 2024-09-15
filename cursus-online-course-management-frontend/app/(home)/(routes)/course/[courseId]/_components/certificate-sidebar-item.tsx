"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { GraduationCap } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const CertificateSidebarItem = () => {
  const router = useRouter();
  const pathname = usePathname();
  const courseId = pathname?.split("/")[2];
  const isActive = pathname?.includes("courseCertificate");

  const onClick = () => {
    router.push(`/course/${courseId}/lesson/courseCertificate`);
  };

  return (
    <>
      <button
        onClick={onClick}
        type="button"
        className={cn(
          "flex items-center gap-x-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600 text-sm font-[500] pl-6 transition-all hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-emerald-900 hover:to-yellow-400",
          isActive &&
            "text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-emerald-900 hover:to-yellow-400"
        )}
      >
        <div className="flex items-center gap-x-2 py-4 text-left h-full">
          <div>
            <GraduationCap size={22} className="text-sky-800" />
          </div>
          <div className="flex-wrap">Congratulation! Your Certificate</div>
        </div>
        <div
          className={cn(
            "ml-auto opacity-0 border-2 border-emerald-700 h-full transition-all",
            isActive && "opacity-100"
          )}
        />
      </button>
    </>
  );
};

export default CertificateSidebarItem;
