"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { LoaderCircleIcon, Pencil, PlusCircle } from "lucide-react";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { list } from "postcss";
import { Course } from "@/types/Course";
import ChaptersList from "./chapter-list";
import { Lesson } from "@/types/Lesson";
import { createLesson, reOrderLessons } from "@/actions/edit-lesson";

interface ChapterFormProps {
  initialData: Course & { lessons: Lesson[] };
  courseId: string;
  onCourseUpdated: () => void;
}

const formSchema = z.object({
  title: z.string().min(1),
});

const ChapterForm = ({
  initialData,
  courseId,
  onCourseUpdated,
}: ChapterFormProps) => {
  const [isCreating, setIsCreating] = useState(false);

  const [isUpdating, setIsUpdating] = useState(false);

  const toggleCreating = () => {
    setIsCreating((current) => !current);
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });

  const router = useRouter();

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      console.log(values);
      await createLesson(courseId, values.title);
      toast.success("Chapter created");
      toggleCreating();
      onCourseUpdated();
    } catch (error: any) {
      toast.error(error.message || "Something went wrong!");
    }
  };

  const onReorder = async (
    updateData: {
      lessonId: string;
      position: number;
    }[]
  ) => {
    try {
      setIsUpdating(true);
      // await axios.put(`/api/courses/${courseId}/chapters/reorder`, {
      //   list: updateData,
      // });
      await reOrderLessons(courseId, updateData);
      toast.success("Chapters re-ordered");
      onCourseUpdated();
    } catch (error: any) {
      toast.error(error.message || "Something went wrong!");
    } finally {
      setIsUpdating(false);
    }
  };

  const onEdit = (id: string) => {
    router.push(`/instructor/courses/${courseId}/lessons/${id}`);
  };

  const lessons = initialData.lessons || [];

  return (
    <div className="relative mt-6 border bg-slate-100 rounded-md p-4">
      {isUpdating && (
        <div className="absolute h-full w-full bg-slate-500/20 top-0 right-0 rounded-md flex items-center justify-center">
          <LoaderCircleIcon className="animate-spin h-6 w-6 text-sky-700" />
        </div>
      )}
      <div className="font-medium flex items-center justify-between">
        Course Chapters
        <Button onClick={toggleCreating} variant="ghost">
          {isCreating ? (
            <>Cancel</>
          ) : (
            <>
              <PlusCircle className="h-4 w-4 mr-2" />
              <p className="md:text-wrap">Add chapter video</p>
            </>
          )}
        </Button>
      </div>
      {isCreating && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 mt-4"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder="e.g. 'Introduction to the course'"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button disabled={!isValid || isSubmitting} type="submit">
              Create
            </Button>
          </form>
        </Form>
      )}
      {!isCreating && (
        <div
          className={cn(
            "text-sm mt-2",
            !lessons.length && "text-slate-500 italic"
          )}
        >
          {!lessons.length && "Do not have any chapter on this course"}
          <ChaptersList onEdit={onEdit} onReorder={onReorder} items={lessons} />
        </div>
      )}
      {!isCreating && (
        <p className="text-xs text-muted-foreground mt-4">
          Drag and drop to re-order the chapters
        </p>
      )}
    </div>
  );
};

export default ChapterForm;
