"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";

import {
  ArrowUpDown,
  Hand,
  MoreHorizontal,
  Pencil,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { UserOwnedCourse } from "../page";

export const Columns: ColumnDef<UserOwnedCourse>[] = [
  {
    accessorKey: "courseTitle",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Title
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "courseEnrolledPrice",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          EnrolledPrice
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("courseEnrolledPrice") || "0");
      const formattedPrice = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(price);

      return <div>{formattedPrice}</div>;
    },
  },
  {
    accessorKey: "enrolledDate",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Enrolled Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const enrolledDate: string = row.getValue("enrolledDate");
      return (
        <span>
          {new Date(enrolledDate).toLocaleDateString()}
        </span>
      );
    },
  },
  {
    accessorKey: "userCourseProgress",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Progress
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const progress: number = row.getValue("userCourseProgress") || 0;
      const roundedProgress = progress.toFixed(0);
      return (
        <Badge
          className={cn(
            "bg-red-700",
            progress >= 20 && 80 >= progress && "bg-orange-500",
            progress >= 80 && 100 >= progress && "bg-blue-500",
            progress === 100 && "bg-green-700",
          )}
        >
          {String(roundedProgress)}%
        </Badge>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const { courseId } = row.original;
      const progress = row.getValue("userCourseProgress") || 0;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-4 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <Link href={`/course/${courseId}`}>
              <DropdownMenuItem>
                <Hand className="h-4 w-4 mr-2" />
                Go to course
              </DropdownMenuItem>
            </Link>
            {progress === 100 && (
              <Link href={`/course/${courseId}/lesson/courseCertificate`}>
                <DropdownMenuItem>
                  <ShieldCheck className="h-4 w-4 mr-2" />
                  Get certificate
                </DropdownMenuItem>
              </Link>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
