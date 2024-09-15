import {
  getCategoryResponseById,
  updateCategory,
} from "@/actions/edit-category";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Category } from "@/types/Category";
import { zodResolver } from "@hookform/resolvers/zod";
import EmojiPicker, { Emoji } from "emoji-picker-react";
import { XIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type ModalEditProps = {
  categoryUpdateId: string;
  isVisible: boolean;
  onClose: () => void;
  onCategoryChange: (newCategory: Category) => void;
};

const categorySchema = z.object({
  categoryName: z
    .string()
    .min(1, { message: "Category name is required" })
    .max(20, {
      message: "Must not exceed 20 characters",
    }),
  categoryIcon: z.string().min(1, { message: "Icon is required" }),
});

type FormSchemaType = z.infer<typeof categorySchema>;

const ModalEdit: React.FC<ModalEditProps> = ({
  categoryUpdateId,
  isVisible,
  onClose,
  onCategoryChange,
}) => {
  const [category, setCategory] = useState<FormSchemaType>({
    categoryName: "",
    categoryIcon: "",
  });

  const [emojiCode, setEmojiCode] = useState("");

  const { toast } = useToast();

  const form = useForm<z.infer<typeof categorySchema>>({
    resolver: zodResolver(categorySchema),
    mode: "onChange",
    defaultValues: category,
  });

  const {
    handleSubmit,
    reset,
    trigger,
    watch,
    formState: { errors, isSubmitting, isValid },
  } = form;

  const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    const getCategory = async () => {
      const category = await getCategoryResponseById(categoryUpdateId);
      if (category) {
        setCategory(category);
        reset(category);
        setEmojiCode(category.categoryIcon);
      }
    };
    getCategory();
  }, [categoryUpdateId, reset]);

  const watchedFields = watch();

  useEffect(() => {
    const fieldsHaveChanged = Object.keys(watchedFields).some(() => {
      if (watchedFields.categoryIcon != category.categoryIcon || watchedFields.categoryName != category.categoryName) {
        return true;
      } else {
        return false;
      }
    });
    setIsChanged(fieldsHaveChanged);
  }, [watchedFields, category]);

  const onSubmit = async (values: z.infer<typeof categorySchema>) => {
    try {
      const newCategory = await updateCategory(categoryUpdateId, values);
      onCategoryChange(newCategory);
      reset();
      onClose();
      toast({
        description: "Your category has been successfully updated.",
      });
    } catch (error: any) {
      console.error("Error editing category:", error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: String(error.message || "Something went wrong!"),
      });
    }
  };

  if (!isVisible) return null;

  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target instanceof Element && e.target.id === "wrapper") {
      onClose();
    }
  };

  return (
    <div
      className="fixed z-10 top-0 left-0 right-0 bottom-0 inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="bg-white rounded-lg mt-20 w-96 px-8 py-4 z-10 relative flex flex-col">
        <div className="flex justify-between items-center mt-3">
          <h2 className="text-xl font-semibold">Update Category</h2>
          <button
            className="text-gray-600 hover:text-gray-900"
            onClick={onClose}
            aria-label="Close"
          >
            <XIcon className="h-6 w-6" />
          </button>
        </div>
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
            <FormField
              control={form.control}
              name="categoryIcon"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select icon</FormLabel>
                  <FormControl>
                    <div className="flex flex-col">
                      <EmojiPicker
                        onEmojiClick={(icon) => {
                          setEmojiCode(icon.unified);
                          form.setValue("categoryIcon", icon.unified);
                        }}
                        previewConfig={{
                          showPreview: false,
                        }}
                        style={{ width: "320px", maxHeight: "330px" }}
                      />
                      <div className="gap-2 mt-3 flex justify-center text-center">
                        {emojiCode ? (
                          <Emoji size={30} unified={emojiCode} />
                        ) : (
                          <Emoji size={30} unified="1f1fb-1f1f3" />
                        )}
                        <Input
                          readOnly
                          disabled={isSubmitting}
                          {...field}
                          placeholder="Icon"
                          onBlur={() => trigger("categoryIcon")}
                        />
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="categoryName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      {...field}
                      placeholder="Category Name"
                      onBlur={() => trigger("categoryName")}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end items-center gap-x-2">
              <Button
                disabled={!isValid || !isChanged}
                type="submit"
              >
                Save
              </Button>
              <Button variant="outline" onClick={onClose} className="mx-1">
                Cancel
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ModalEdit;
