"use client";

import React, { useEffect, useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import UserSideBar from "../../_components/user-sidebar";
import { getUser } from "@/actions/get-full-user-details";
import ImageForm from "../../_components/user-avatar";
import { Student } from "@/types/Student";
import Loader from "@/app/components/Loader";
import FormHeader from "../../_components/form-header";

interface UserData {
  uid: string;
  displayName: string;
  email: string;
  avatarImageUrl: string;
  providerData: any;
  metadata: any;
}

const EditAvatar = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [user, setUser] = useState<Student | null>(null);
  const [check, setCheck] = useState<Boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchUser = useCallback(async () => {
    try {
      const storedUserData = localStorage.getItem("userData");
      if (storedUserData) {
        setUserData(JSON.parse(storedUserData));
      }
      if (userData?.avatarImageUrl) {
        setCheck(true);
      } else {
        setCheck(false);
        // const data = await getUser();
        // setUser(data);
      }
    } catch (error: any) {
      toast.error(error.message || "Failed to get user");
    } finally {
      setLoading(false);
    }
  }, [userData?.avatarImageUrl]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  if (loading) {
    return (
      <>
        <div className="flex flex-col items-center justify-center h-screen">
          <Loader />
        </div>
      </>
    );
  }

  return (
    <>
      <div className="p-6">
        <Toaster />
        <div className="rounded-[0.5rem] border bg-background shadow">
          <div className="space-y-6 p-10 pb-16">
            <FormHeader />
            <div className="shrink-0 bg-border h-[1px] w-full my-6"></div>
            <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
              <aside className="-mx-4 lg:w-1/5">
                <UserSideBar />
              </aside>
              <div className="flex-1 lg:max-w-2xl">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium">Upload Avatar</h3>
                    <p className="text-sm text-muted-foreground">
                      Upload your account avater.
                    </p>
                  </div>
                  <div className="shrink-0 bg-border h-[1px] w-full my-6"></div>
                  {check ? (
                    <ImageForm
                      initialData={userData?.avatarImageUrl}
                      userId={userData?.uid}
                      onAvatarUpdated={fetchUser}
                    />
                  ) : (
                    <ImageForm
                      initialData={user?.avatarImageUrl}
                      userId={user?.userId}
                      onAvatarUpdated={fetchUser}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditAvatar;
