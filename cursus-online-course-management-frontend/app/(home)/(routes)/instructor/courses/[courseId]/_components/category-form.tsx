"use client"

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import { useState } from "react";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Course } from "@/types/Course";
import { Combobox } from "@/components/ui/combobox";
import { editCourse } from "@/actions/edit-course";

interface CategoryFormProps {
    initialData: Course;
    courseId: string;
    options: { label: string; value: string; }[];
    onCourseUpdated: () => void;
};

const formSchema = z.object({
    categoryId: z.string().min(1)
});

const CategoryForm = ({
    initialData,
    courseId,
    options,
    onCourseUpdated
}: CategoryFormProps) => {

    const [isEditing, setIsEditing] = useState(false);

    const toggleEdit = () => setIsEditing((current) => !current);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            categoryId: initialData?.categories || ""
        }
    });

    const router = useRouter();

    const { isSubmitting, isValid } = form.formState;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            // Convert categoryId from string back to number
            const updatedValues = {
                ...values,
                categoriesId: [Number(values.categoryId)],
            };
            console.log(updatedValues);
            await editCourse(courseId, updatedValues);
            toast.success("Course updated");
            toggleEdit();
            onCourseUpdated();
        } catch (error: any) {
            toast.error(error.message || "Something went wrong!");
        }
    };

    const selectedOption = options.find((option) => option.value === initialData.categories[0]?.categoryId.toString());
    
    return (
        <>
            <Toaster />
            <div className="mt-6 border bg-slate-100 rounded-md p-4">
                <div className="font-medium flex items-center justify-between">
                    Course Category
                    <Button onClick={toggleEdit} variant="ghost">
                        {isEditing ? (
                            <>Cancel</>
                        ) : (
                            <>
                                <Pencil className="h-4 w-4 mr-2" />
                                Edit category
                            </>
                        )}
                    </Button>
                </div>
                {!isEditing && (
                    <p className={cn(
                        "text-sm mt-2",
                        !initialData.categories && "text-slate-500 italic"
                    )}>
                        {selectedOption?.label || "No category"}
                    </p>
                )}
                {isEditing && (
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
                            <FormField control={form.control} name="categoryId" render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Combobox
                                            options={options}
                                            {...field}
                                            onChange={(value) => {
                                                field.onChange(value);
                                                form.trigger("categoryId");
                                            }}
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

export default CategoryForm;