"use client";

import { executeEnrollPayment } from "@/actions/enroll-payment";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const PaymentSuccessPage = ({ params }: { params: { courseId: string } }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const paymentId = searchParams.get("paymentId");
  const payerID = searchParams.get("PayerID");

  useEffect(() => {
    async function executePayment() {
      if (!paymentId || !payerID) {
        console.error("Payment ID or Payer ID missing");
        return;
      }
      const response = await executeEnrollPayment(
        paymentId as string,
        payerID as string,
        params.courseId
      );
      if (response) {
        window.location.href = `/course/${params.courseId}`;
      }
    }
    executePayment();
  }, [paymentId, payerID, params.courseId]);

  // redirect(`/course/${params.courseId}`);
};

export default PaymentSuccessPage;
