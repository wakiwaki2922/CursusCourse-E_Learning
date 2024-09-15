"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import UserSideBar from "../_components/user-sidebar";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { getUser, updateUser } from "@/actions/get-full-user-details";
import Loader from "@/app/components/Loader";
import FormHeader from "../_components/form-header";

const formSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "Email is required",
    })
    .email("Invalid email address"),
  phone: z
    .string()
    .min(10, {
      message: "Phone number must be exactly 10 digits",
    })
    .regex(/^\d+$/, "Invalid phone number")
    .max(10, {
      message: "Phone number must be exactly 10 digits",
    })
    .optional(),
  fullName: z
    .string()
    .min(1, {
      message: "Full name is required",
    })
    .max(50, {
      message: "Full name can have a maximum of 50 characters",
    })
    .optional(),
  avatarImageUrl: z
  .union([
    z.string(),
    z.null(),
  ])
  .optional(),
});

type FormSchemaType = z.infer<typeof formSchema>;

const UserProfile = () => {
  const [user, setUser] = useState<FormSchemaType | null>(null);

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: user || undefined,
  });

  const router = useRouter();

  const {
    handleSubmit,
    trigger,
    formState: { errors, isSubmitting, isValid },
    reset,
    watch,
  } = form;

  const [isChanged, setIsChanged] = useState(false);

  const watchedFields = watch();

  useEffect(() => {
    setIsChanged(
      Object.keys(watchedFields).some((key) => {
        const typedKey = key as keyof FormSchemaType;
        console.log(typedKey, watchedFields[typedKey], user?.[typedKey]);
        return watchedFields[typedKey] !== user?.[typedKey];
      })
    );
  }, [watchedFields, user]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // const { data } = await axios.get("/api/user/profile");
        const data = await getUser();
        console.log(data);
        setUser(data);
        reset(data);
      } catch (error) {
        console.error("Failed to fetch user profile:", error);
      }
    };
    fetchUserData();
  }, [reset]);

  const onSubmit = async (data: FormSchemaType) => {
    try {
      // await axios.put("/api/user/profile", data);
      await updateUser(data);
      console.log("Profile updated successfully");
      toast.success("Profile updated successfully");
      router.refresh();
    } catch (error) {
      console.error("Failed to update profile:", error);
    }
  };

  if (!user) {
    return (
      <>
        {/* <div className="flex flex-col items-center justify-center h-screen">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-sky-800/20"></div>
                <p className="mt-4 text-lg text-gray-700">Loading...</p>
            </div> */}
        <div className="flex flex-col items-center justify-center h-screen">
          <Loader />
        </div>
      </>
    );
  }
  console.log("Button: ", isValid, isSubmitting, isChanged);
  console.log("Disabled: ", isSubmitting || !isValid);

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
                    <h3 className="text-lg font-medium">Profile</h3>
                    <p className="text-sm text-muted-foreground">
                      This is how others will see you on site.
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
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input
                                disabled
                                placeholder="e.g. 'name@example.com'"
                                {...field}
                                onBlur={() => trigger("email")}
                              />
                            </FormControl>
                            <FormDescription className="text-[0.8rem] text-muted-foreground">
                              You cannot change your email address.
                            </FormDescription>
                            {errors.email && (
                              <FormMessage>{errors.email.message}</FormMessage>
                            )}
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input
                                disabled={isSubmitting}
                                placeholder="e.g. 'John Doe'"
                                {...field}
                                onBlur={() => trigger("fullName")}
                              />
                            </FormControl>
                            <FormDescription className="text-[0.8rem] text-muted-foreground">
                              This is your public display name and will on your
                              certificate. It should be your real name.
                            </FormDescription>
                            {errors.fullName && (
                              <FormMessage>
                                {errors.fullName.message}
                              </FormMessage>
                            )}
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone</FormLabel>
                            <FormControl>
                              <Input
                                disabled={isSubmitting}
                                placeholder="e.g. '1234567890'"
                                {...field}
                                onBlur={() => trigger("phone")}
                              />
                            </FormControl>
                            <FormDescription className="text-[0.8rem] text-muted-foreground">
                              It should be your real phone, we maybe need to
                              contact with you for some problems.
                            </FormDescription>
                            {errors.phone && (
                              <FormMessage>{errors.phone.message}</FormMessage>
                            )}
                          </FormItem>
                        )}
                      />
                      <div className="flex items-center gap-x-2 justify-end">
                        <Button
                          type="submit"
                          disabled={isSubmitting || !isValid || !isChanged}
                        >
                          Update profile
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

export default UserProfile;
