"use client"

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import { useState } from "react";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { editCourse } from "@/actions/edit-course";

interface TitleFormProps {
    initialData: {
        courseTitle: string;
    };
    courseId: string;
    onCourseUpdated: () => void;
};

const formSchema = z.object({
    courseTitle: z.string().min(1, { message: "Title is required" })
});

const TitleForm = ({
    initialData,
    courseId,
    onCourseUpdated
}: TitleFormProps) => {

    const [isEditing, setIsEditing] = useState(false);

    const toggleEdit = () => setIsEditing((current) => !current);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: initialData
    });

    const router = useRouter();

    const { isSubmitting, isValid } = form.formState;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            console.log(values);
            await editCourse(courseId, values);
            toast.success("Course updated");
            toggleEdit();
            onCourseUpdated();
        } catch (error: any) {
            toast.error(error.message || "Something went wrong!");
        }
    }

    return (
        <>
            <Toaster />
            <div className="mt-6 border bg-slate-100 rounded-md p-4">
                <div className="font-medium flex items-center justify-between">
                    Course Title
                    <Button onClick={toggleEdit} variant="ghost">
                        {isEditing ? (
                            <>Cancel</>
                        ) : (
                            <>
                                <Pencil className="h-4 w-4 mr-2" />
                                Edit title
                            </>
                        )}
                    </Button>
                </div>
                {!isEditing && (
                    <p className="text-sm mt-2">
                        {initialData.courseTitle}
                    </p>
                )}
                {isEditing && (
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
                            <FormField control={form.control} name="courseTitle" render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            disabled={isSubmitting}
                                            placeholder="e.g. 'Advanced web development'"
                                            {...field}
                                        />
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
        </>
    );
}

export default TitleForm;