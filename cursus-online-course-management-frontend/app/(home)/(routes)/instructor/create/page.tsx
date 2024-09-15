"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import toast, { Toaster } from "react-hot-toast";
import { createCourse } from "@/actions/edit-course";
import Loader from "@/app/components/Loader";
import { isInstructorBlocked } from "@/lib/account-block";

const formSchema = z.object({
  courseTitle: z.string().min(1, {
    message: "Title is required",
  }),
});

const CreatePage = () => {
  const router = useRouter();
  const instructorBlocked: boolean = isInstructorBlocked();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      courseTitle: "",
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      console.log(values);
      // const response = await axios.post("/api/courses", values);
      const response = await createCourse(values);
      console.log(response);
      router.push(`/instructor/courses/${response.courseId}`);
      toast.success("Course created");
    } catch (error: any) {
      toast.error(error.message || "Something went wrong!");
    }
  };

  return (
    <>
      {isSubmitting && (
        <div className="flex items-center justify-center h-screen">
          <Loader />
        </div>
      )}
      <Toaster />
      {!isSubmitting && (
        <div className="max-w-5xl mx-auto flex md:items-center md:justify-center h-full p-6">
          <div>
            <h1 className="text-2xl">Name your course</h1>
            <div className="text-sm text-slate-600">
              It can be changed later!
            </div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 mt-8"
              >
                <FormField
                  control={form.control}
                  name="courseTitle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Course Title</FormLabel>
                      <FormControl>
                        <Input
                          disabled={isSubmitting}
                          placeholder="e.g. 'Java Spring Boot'"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>What your course about?</FormDescription>
                    </FormItem>
                  )}
                />
                <div className="flex items-center gap-x-2">
                  <Link href="/instructor/courses">
                    <Button variant="ghost">Cancel</Button>
                  </Link>
                  <Button type="submit" disabled={!isValid || isSubmitting || instructorBlocked}>
                    Continue {instructorBlocked && "(Blocked)"}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      )}
    </>
  );
};

export default CreatePage;
