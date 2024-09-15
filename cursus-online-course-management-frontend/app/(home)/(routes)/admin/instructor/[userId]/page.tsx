"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  getUserById,
  getStudentOwnedCoursesById,
  updateStatusUser,
} from "@/actions/edit-student";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";
import toast, { Toaster } from "react-hot-toast";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { getInstructorHavaImageById } from "@/actions/edit-instructor";
import {
  CourseWithLessonsWithAttachments,
  getCoursesOfInstructorById,
} from "@/actions/get-courses";

export type UserOwnedCourse = {
  courseId: string;
  courseTitle: string;
  userCourseProgress: number;
  enrolledDate: string;
  courseEnrolledPrice: number;
};

const formSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "Email is required",
    })
    .email("Invalid email address"),
  phone: z
    .union([
      z
        .string()
        .min(10, {
          message: "Phone number must be exactly 10 digits",
        })
        .regex(/^\d+$/, "Invalid phone number")
        .max(10, {
          message: "Phone number must be exactly 10 digits",
        }),
      z.null(),
    ])
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
  avatarImageUrl: z.string().optional(),
  status: z.string().optional(),
  joinDate: z.coerce.date().optional(),
  introduction: z.string().optional(),
  professionalExperience: z.string().optional(),
});

type FormSchemaType = z.infer<typeof formSchema>;

const ViewStudentPage = ({ params }: { params: { userId: string } }) => {
  const breadcrumbItems = [
    { title: "Dashboard", link: "/admin/dashboard" },
    { title: "Instructor Management", link: "/admin/instructor" },
    { title: "Account", link: `/admin/instructor/${params.userId}` },
  ];

  const [user, setUser] = useState<FormSchemaType | null>(null);

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: user || undefined,
  });

  const router = useRouter();

  const [changetatus, setChangeStatus] = useState(false);

  const {
    handleSubmit,
    trigger,
    formState: { errors },
    reset,
  } = form;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getInstructorHavaImageById(params.userId);
        console.log(data);
        setUser(data);
        setChangeStatus(false);
        reset(data);
      } catch (error) {
        console.error("Failed to fetch user profile:", error);
      }
    };
    fetchUserData();
  }, [params.userId, reset, changetatus]);

  let newStatus;
  let buttonColor;
  switch (user?.status) {
    case "AVAILABLE":
      newStatus = "BLOCK_ROLE_INSTRUCTOR";
      buttonColor = "bg-yellow-600";
      break;
    case "BLOCK_ACCOUNT":
      newStatus = "BLOCK_ROLE_STUDENT";
      buttonColor = "bg-yellow-500";
      break;
    case "BLOCK_ROLE_INSTRUCTOR":
      newStatus = "AVAILABLE";
      buttonColor = "bg-lime-600";
      break;
    case "BLOCK_ROLE_STUDENT":
      newStatus = "BLOCK_ACCOUNT";
      buttonColor = "bg-red-600";
      break;
    default:
      newStatus = "UNKNOWN";
      buttonColor = "bg-gray-400";
  }

  const onSubmit = async (data: FormSchemaType) => {
    try {
      const response = await updateStatusUser(params.userId, newStatus);
      console.log(response);
      setChangeStatus(true);
      toast.success("Status updated successfully");
      router.refresh();
    } catch (error) {
      console.error("Failed to update status:", error);
      toast.error("Failed to update status");
    }
  };

  const [avatarUrl, setAvatarUrl] = useState<string>(
    user?.avatarImageUrl || "/avatar-default.svg"
  );
  const previousAvatarUrlRef = useRef<string>(avatarUrl);

  useEffect(() => {
    if (
      user?.avatarImageUrl &&
      user?.avatarImageUrl !== previousAvatarUrlRef.current
    ) {
      setAvatarUrl(user.avatarImageUrl);
      previousAvatarUrlRef.current = user.avatarImageUrl;
    }
  }, [user?.avatarImageUrl]);

  const [courses, setCourses] = useState<CourseWithLessonsWithAttachments[]>(
    []
  );

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const data = await getCoursesOfInstructorById(params.userId);
        setCourses(data);
      } catch (error) {
        console.error("Error fetching course:", error);
        router.push("/");
      }
    };

    fetchCourse();
  }, [params.userId, router]);

  let badgeColor;
  let badgeText;

  switch (user?.status) {
    case "AVAILABLE":
      badgeColor = "bg-lime-600";
      badgeText = "AVAILABLE";
      break;
    case "BLOCK_ACCOUNT":
      badgeColor = "bg-red-600";
      badgeText = "BLOCK_ACCOUNT";
      break;
    case "BLOCK_ROLE_STUDENT":
      badgeColor = "bg-yellow-600";
      badgeText = "BLOCK_ROLE_STUDENT";
      break;
    case "BLOCK_ROLE_INSTRUCTOR":
      badgeColor = "bg-yellow-600";
      badgeText = "BLOCK_ROLE_INSTRUCTOR";
      break;
    default:
      badgeColor = "bg-gray-400";
      badgeText = "UNKNOWN";
  }

  if (!user || !courses) {
    return (
      <>
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-sky-800/20"></div>
          <p className="mt-4 text-lg text-gray-700">Loading...</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Toaster />
      <div className="p-6">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="mb-2">
          <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="sm:flex sm:justify-between sm:items-center sm:flex-col md:flex md:flex-row md:justify-between md:items-center">
                <div>
                  <Heading
                    title={`Instructors profile`}
                    description="You cannot change any user information (Server side table functionalities.)"
                  />
                  <Badge className={cn(badgeColor)}>{badgeText}</Badge>
                </div>
                <div className="flex items-center justify-center mt-3 md:mt-0 md:gap-x-2 md:justify-end">
                  <Button className={cn(buttonColor, "")}>
                    CHANGE_{newStatus}
                  </Button>
                </div>
              </div>
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 items-center">
                <div className="flex-shrink-0 w-full h-full md:w-1/3 flex justify-center items-center">
                  <Avatar className="flex items-center w-1/2 h-1/2 md:w-3/4 md:h-3/4 lg:w-1/2 lg:h-1/2">
                    <AvatarImage src={avatarUrl} />
                    <AvatarFallback>
                      <Icons.spinner className="m-auto animate-spin" />
                    </AvatarFallback>
                  </Avatar>
                </div>
                <div className="w-full md:w-2/3 p-4">
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
                            disabled
                            placeholder="e.g. 'John Doe'"
                            {...field}
                            onBlur={() => trigger("fullName")}
                          />
                        </FormControl>
                        {errors.fullName && (
                          <FormMessage>{errors.fullName.message}</FormMessage>
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
                            disabled={false}
                            placeholder="e.g. '1234567890'"
                            value={field.value || ""}
                            onChange={field.onChange}
                            onBlur={field.onBlur}
                          />
                        </FormControl>
                        {errors.phone && (
                          <FormMessage>{errors.phone.message}</FormMessage>
                        )}
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="joinDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Join Date</FormLabel>
                        <FormControl>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full justify-start text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {field.value ? (
                                  format(field.value, "HH:mm dd/MM/yyyy")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent
                              className="w-auto p-0"
                              align="start"
                            ></PopoverContent>
                          </Popover>
                        </FormControl>
                        {errors.joinDate && (
                          <FormMessage>{errors.joinDate.message}</FormMessage>
                        )}
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="introduction"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Introduction</FormLabel>
                        <FormControl>
                          <Input
                            disabled
                            placeholder="Introduction of the instructor"
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
                        <FormLabel>Professional Experience</FormLabel>
                        <FormControl>
                          <Input
                            disabled
                            placeholder="Professional Experience of the instructor"
                            {...field}
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
                </div>
              </div>
            </form>
          </Form>
        </div>
        <Separator />
        <DataTable columns={Columns} data={courses} />
      </div>
    </>
  );
};

export default ViewStudentPage;
