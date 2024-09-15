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
import { Input } from "@/components/ui/input";
import { formatPrice } from "@/lib/format";
import { Course } from "@/types/Course";
import { editCourse } from "@/actions/edit-course";

interface PriceFormProps {
    initialData: Course;
    courseId: string;
    onCourseUpdated: () => void;
};

const formSchema = z.object({
    price: z.coerce.number()
});

const PriceForm = ({
    initialData,
    courseId,
    onCourseUpdated
}: PriceFormProps) => {

    const [isEditing, setIsEditing] = useState(false);

    const toggleEdit = () => setIsEditing((current) => !current);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            price: initialData?.price || undefined
        }
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
                    Course Price
                    <Button onClick={toggleEdit} variant="ghost">
                        {isEditing ? (
                            <>Cancel</>
                        ) : (
                            <>
                                <Pencil className="h-4 w-4 mr-2" />
                                Edit price
                            </>
                        )}
                    </Button>
                </div>
                {!isEditing && (
                    <p className={cn(
                        "text-sm mt-2",
                        !initialData.price && "text-slate-500 italic"
                    )}>
                        {initialData.price ? formatPrice(initialData.price) : "No price"}
                    </p>
                )}
                {isEditing && (
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
                            <FormField control={form.control} name="price" render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            step="0.01"
                                            disabled={isSubmitting}
                                            placeholder="Set a price for your course e.g. '8.88'"
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

export default PriceForm;