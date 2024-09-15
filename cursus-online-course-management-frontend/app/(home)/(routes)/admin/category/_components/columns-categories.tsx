"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Category } from "@/types/Category";
import { ColumnDef } from "@tanstack/react-table";

import { ArrowUpDown, MoreHorizontal, Pencil } from "lucide-react";
import { Fragment, useState } from "react";
import ModalDelete from "./modal-delete";
import ModalEdit from "./modal-edit";
import DropdownMenuActions from "./dropdown-menu";
import { Emoji } from "emoji-picker-react";

interface ColumnProps {
  onCategoryChange: (newCategory: Category) => void;
}

export const columns = ({
  onCategoryChange,
}: ColumnProps): ColumnDef<Category>[] => [
  {
    accessorKey: "categoryIcon",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Icon
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const icon = row.original.categoryIcon;
      return <>{icon ? <Emoji size={30} unified={icon} /> : ""}</>;
    },
  },
  {
    accessorKey: "categoryName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Category Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "courses",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Courses
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const courseCount = row.original.courses.length;
      return <span>{courseCount}</span>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const { categoryId } = row.original;
      return (
        <DropdownMenuActions
          categoryId={categoryId}
          onCategoryChange={onCategoryChange}
        />
      );
    },
  },
];
