"use client";

import React, { useEffect, useState } from "react";
import BalanceCard from "./_components/balance-card";
import { getInstructorEarnings } from "@/actions/payment-request";

type instructorEarningsType = {
  balance: number;
  paypalId: string;
};

const EarningPage = () => {
  const [instructorEarnings, setInstructorEarnings] =
    useState<instructorEarningsType>();

  useEffect(() => {
    const fetchInstructorEarnings = async () => {
      try {
        const response = await getInstructorEarnings();
        setInstructorEarnings(response);
      } catch (error: any) {
        console.error("[INSTRUCTOR_EARNING_PAGE]", error);
      }
    };
    fetchInstructorEarnings();
  }, []);

  return (
    <>
      <div className="p-6">
        <BalanceCard
          value={instructorEarnings?.balance || 0}
          paypalId={instructorEarnings?.paypalId || ""}
          label="Wallet Balance"
          shouldFormat
        />
      </div>
    </>
  );
};

export default EarningPage;
