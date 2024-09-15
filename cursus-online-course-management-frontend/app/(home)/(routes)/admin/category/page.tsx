"use client";

import { Category } from "@/types/Category";
import { useEffect, useState } from "react";
import { DataTable } from "./_components/data-table-categories";
import { columns } from "./_components/columns-categories";
import { getCategoryWithCourse } from "@/actions/edit-category";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";

const breadcrumbItems = [
  { title: "Dashboard", link: "/admin/dashboard" },
  { title: "Category Management", link: "/admin/category" },
];

const CategoryManagement = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const [newCategory, setNewCategory] = useState<Category>();

  const handleCategoryChange = (newCategory: Category) => {
    setNewCategory(newCategory);
  };

  const fetchCategories = async () => {
    try {
      const data = await getCategoryWithCourse();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (newCategory != null) {
      fetchCategories();
    }
  }, [newCategory]);

  return (
    <>
      <div className="p-6">
        <Breadcrumbs items={breadcrumbItems} />
        <Heading
          title={`Categories (${categories.length})`}
          description="Manage categories (Server side table functionalities.)"
        /> 
        <Separator />
        <DataTable
          columns={columns({ onCategoryChange: handleCategoryChange })}
          data={categories}
          onCategoryChange={handleCategoryChange}
        />
      </div>
    </>
  );
};

export default CategoryManagement;
