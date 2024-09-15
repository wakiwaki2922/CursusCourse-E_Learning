"use client";

import { redirect } from "next/navigation";
import React, { useEffect } from "react";

const RootPage = () => {
  useEffect(() => {
    redirect("/home");
  }, []);

  return null; // This component doesn't render anything itself
};

export default RootPage;