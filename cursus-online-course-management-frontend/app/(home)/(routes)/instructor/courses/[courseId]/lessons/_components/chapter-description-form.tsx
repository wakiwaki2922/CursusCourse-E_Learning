"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
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
import { Editor } from "@/components/editor";
import { Lesson } from "@/types/Lesson";
import { Preview } from "@/components/preview";
import { editLesson } from "@/actions/edit-lesson";

interface ChapterDescriptionFormProps {
  initialData: Lesson;
  courseId: string;
  lessonId: string;
  onLessonUpdated: () => void;
}

const formSchema = z.object({
  lessonDescription: z.string().min(1),
});

const ChapterDescriptionForm = ({
  initialData,
  courseId,
  lessonId,
  onLessonUpdated,
}: ChapterDescriptionFormProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((current) => !current);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      lessonDescription: initialData?.lessonDescription || "",
    },
  });

  const router = useRouter();

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      console.log(values);
      await editLesson(lessonId, values);
      toast.success("Chapter updated");
      toggleEdit();
      onLessonUpdated();
    } catch (error: any) {
      toast.error(error.message || "Something went wrong!");
    }
  };

  return (
    <div className="mt-6 border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Chapter Description
        <Button onClick={toggleEdit} variant="ghost">
          {isEditing ? (
            <>Cancel</>
          ) : (
            <>
              <Pencil className="h-4 w-4 mr-2" />
              <p className="md:text-wrap">Edit description</p>
            </>
          )}
        </Button>
      </div>
      {!isEditing && (
        <div
          className={cn(
            "text-sm mt-2",
            !initialData.lessonDescription && "text-slate-500 italic"
          )}
        >
          {!initialData.lessonDescription && "No description"}
          {initialData.lessonDescription && (
            <Preview value={initialData.lessonDescription} />
          )}
        </div>
      )}
      {isEditing && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 mt-4"
          >
            <FormField
              control={form.control}
              name="lessonDescription"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Editor {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center gap-x-2">
              <Button disabled={!isValid || isSubmitting} type="submit">
                Save
              </Button>
            </div>
          </form>
        </Form>
      )}
    </div>
  );
};

export default ChapterDescriptionForm;
