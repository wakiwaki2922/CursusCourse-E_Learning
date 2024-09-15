"use client";

import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import UserSideBar from "../../_components/user-sidebar";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import getFullUserDetails, {
  registerBecomeInstructor,
} from "@/actions/get-full-user-details";
import { Textarea } from "@/components/ui/textarea";
import Loader from "@/app/components/Loader";
import FormHeader from "../../_components/form-header";
import { isInstructor } from "@/lib/instructor";

const formSchema = z.object({
  introduction: z.string().min(1, { message: "Introduction is required" }),
  professionalExperience: z
    .string()
    .min(1, { message: "Experience is required" }),
});

type FormSchemaType = z.infer<typeof formSchema>;

const UserProfileAccount = () => {
  const [userDetails, setUserDetails] = useState<FormSchemaType | null>(null);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: userDetails || undefined,
  });

  const {
    handleSubmit,
    trigger,
    reset,
    formState: { errors, isSubmitting, isValid },
    watch,
  } = form;

  const [isChanged, setIsChanged] = useState(false);

  const watchedFields = watch();

  useEffect(() => {
    setIsChanged(
      Object.keys(watchedFields).some((key) => {
        const typedKey = key as keyof FormSchemaType;
        return userDetails && watchedFields[typedKey] !== userDetails[typedKey];
      })
    );
  }, [watchedFields, userDetails]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getFullUserDetails();
        setUserDetails(data);
        reset(data);
      } catch (error) {
        console.error("Failed to fetch user details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [reset]);

  const onSubmit = async (data: FormSchemaType) => {
    try {
      await registerBecomeInstructor(data);
      console.log("Your request to be instructor send successfully");
      toast.success("Your request to be instructor send successfully");
      form.reset(data);
      router.refresh();
    } catch (error) {
      console.error("Failed to send request:", error);
    }
  };

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
      <Toaster />
      <div className="p-6">
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
                    <h3 className="text-lg font-medium">Account</h3>
                    <p className="text-sm text-muted-foreground">
                      Turn what you know into an opportunity and reach millions
                      around the world. Become an instructor and change lives —
                      including your own.
                    </p>
                  </div>
                  <div className="shrink-0 bg-border h-[1px] w-full my-6"></div>
                  <Form {...form}>
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-4 mt-8"
                    >
                      <FormField
                        control={form.control}
                        name="introduction"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Introduction</FormLabel>
                            <FormControl>
                              <Textarea
                                className="h-32"
                                disabled={isSubmitting}
                                placeholder="Introduction about yourself"
                                {...field}
                                onBlur={() => trigger("introduction")}
                              />
                            </FormControl>
                            {errors.introduction && (
                              <FormMessage>
                                {errors.introduction.message}
                              </FormMessage>
                            )}
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="professionalExperience"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Experience</FormLabel>
                            <FormControl>
                              <Textarea
                                className="h-32"
                                disabled={isSubmitting}
                                placeholder="Professional experience"
                                {...field}
                                value={field.value || ""}
                                onBlur={() => trigger("professionalExperience")}
                              />
                            </FormControl>
                            {errors.professionalExperience && (
                              <FormMessage>
                                {errors.professionalExperience.message}
                              </FormMessage>
                            )}
                          </FormItem>
                        )}
                      />
                      <div className="flex items-center gap-x-2 justify-end">
                        <Button
                          type="submit"
                          disabled={!isValid || isSubmitting || !isChanged}
                        >
                          {isInstructor() ? "Update Profile Instructor" : "Become a Cursus Instructor"}
                        </Button>
                      </div>
                    </form>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfileAccount;
