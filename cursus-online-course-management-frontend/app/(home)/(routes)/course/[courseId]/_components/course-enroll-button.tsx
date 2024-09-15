"use client";

import {
  createEnrollPayment,
  executeEnrollPayment,
} from "@/actions/enroll-payment";
import { formatPrice } from "@/lib/format";
import {
  PayPalScriptProvider,
  PayPalButtons,
  ReactPayPalScriptOptions,
} from "@paypal/react-paypal-js";
import {
  CreateOrderActions,
  CreateOrderData,
  OnApproveData,
  OnApproveActions,
} from "@paypal/paypal-js";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Course } from "@/types/Course";
import { isStudentBlocked } from "@/lib/account-block";
import { Banner } from "@/components/banner";

interface CourseEnrollButtonProps {
  price: number;
  course: Course;
}

const clientId = process.env.PAYPAL_CLIENT_ID;

const CourseEnrollButton = ({ price, course }: CourseEnrollButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const createOrder = async (
    data: CreateOrderData,
    actions: CreateOrderActions
  ): Promise<string> => {
    console.log(actions.order.create({
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: price.toString(),
          },
          description: `Course enrollment for course title ${course.courseTitle}`,
        },
      ],
    }))
    return actions.order.create({
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: price.toString(),
          },
          description: `Course enrollment for course title ${course.courseTitle}`,
        },
      ],
    });
  };

  const executeOrder = async (
    data: OnApproveData,
    actions: OnApproveActions
  ) => {
    // if (actions.order) {
    //   const order = await actions.order.capture();
    //   console.log("Order captured: ", order);
    // }

    const paymentId = data.orderID;
    const payerId = data.payerID;
    setIsLoading(true);
    if (!paymentId || !payerId) {
      console.error("Payment ID or Payer ID missing");
      toast.error("Payment failed. Please try again.");
      return;
    }
    try {
      const response = await executeEnrollPayment(paymentId, payerId, course.courseId);
      console.log("Payment executed: ", response);
      toast.success("Payment successful. You are now enrolled in the course.");
    } catch (error) {
      console.error("Error executing payment: ", error);
      toast.error("Payment failed. Please try again.");
    }
  };

  const onError = (err: any) => {
    console.error("Error with payment: ", err);
    toast.error("Payment failed. Please try again.");
  };

  const onClick = async () => {
    const payment_approval_url = await createEnrollPayment(
      price,
      course
    );
    // window.open(payment_approval_url, "_blank");
    window.location.href = payment_approval_url;
  };

  return (
    <>
      <Toaster />
      <div className="font-bold text-xl text-center mb-4">
        Enroll now{" "}
        <span className="text-red-600 text-2xl">{formatPrice(price)}</span>
      </div>
      <PayPalScriptProvider
        options={{ clientId: clientId } as ReactPayPalScriptOptions}
      >
        {isStudentBlocked() && (
          <Banner label="Your student account is blocked. Please contact support." />
        )}
        <PayPalButtons
          style={{
            layout: "horizontal",
            color: "gold",
            shape: "rect",
            height: 40,
            tagline: false,
          }}
          onClick={!isStudentBlocked() ? onClick : undefined}
          onError={onError}
          onCancel={() => {
            toast.error("Payment cancelled");
            console.log("Payment cancelled");
          }}
          disabled={isStudentBlocked()}
        />
      </PayPalScriptProvider>
    </>
  );
};

export default CourseEnrollButton;
