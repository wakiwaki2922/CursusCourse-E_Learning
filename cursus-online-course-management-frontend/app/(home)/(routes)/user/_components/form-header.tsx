"use client";

import { verifyEmail } from "@/actions/edit-student";
import getFullUserDetails from "@/actions/get-full-user-details";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";
import { isAccountVerified } from "@/lib/account-block";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const FormHeader = () => {
  const [user, setUser] = useState<{ email: string } | undefined>();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getFullUserDetails();
        setUser(data);
      } catch (error: any) {
        toast.error(error.message || "Failed to get user");
      }
    };
    fetchUser();
  }, []);

  if (!user) {
    return null;
  }

  console.log("Form header user data", user);

  const handleOnClick = async () => {
    try {
      await verifyEmail(user?.email);
      toast.success("Verification email sent! Check your inbox");
    } catch (error: any) {
      toast.error(error.message || "Something went wrong");
    }
  };

  return (
    <>
      <Toaster />
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">
          Manage your account settings and what you wanna be in Cursus
        </p>
      </div>
      {!isAccountVerified() && (
        <Button onClick={handleOnClick}>Verify account</Button>
      )}
    </>
  );
};

export default FormHeader;
