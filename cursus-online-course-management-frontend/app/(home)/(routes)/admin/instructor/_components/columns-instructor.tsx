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
import { Enrollment } from "@/types/Enrollment";
import { Instructor } from "@/types/Instructor";
import { Student } from "@/types/Student";
import { ColumnDef } from "@tanstack/react-table";

import { ArrowUpDown, Eye, MoreHorizontal, BarChart   } from "lucide-react";
import Link from "next/link";

export const columns: ColumnDef<Instructor>[] = [
  {
    accessorKey: "fullName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Instructor Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "verify",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Verify
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const isVerify = row.getValue("verify") || false;

      return (
        <Badge className={cn("bg-red-600", isVerify && "bg-lime-600")}>
          {isVerify ? "Verified" : "Unverified"}
        </Badge>
      );
    },
  },
  // {
  //   accessorKey: "enrollmentsResponse",
  //   header: ({ column }) => {
  //     return (
  //       <Button
  //         variant="ghost"
  //         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
  //       >
  //         Enrollment
  //         <ArrowUpDown className="ml-2 h-4 w-4" />
  //       </Button>
  //     );
  //   },
  //   cell: ({ row }) => {
  //     const enrollments:Enrollment[] = row.getValue("enrollmentsResponse") || [];

  //     return <div>{enrollments.length}</div>;
  //   },
  // },
  {
    accessorFn: (row) => row.courses.length,
    id: "courses",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Course
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const countCourse: number = row.getValue("courses");
      return <div>{countCourse}</div>;
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const status = row.getValue("status") || "";

      let badgeColor;
      let badgeText;

      switch (status) {
        case "AVAILABLE":
          badgeColor = "bg-lime-600";
          badgeText = "AVAILABLE";
          break;
        case "BLOCK_ACCOUNT":
          badgeColor = "bg-red-600";
          badgeText = "BLOCK_ACCOUNT";
          break;
        case "BLOCK_ROLE_STUDENT":
          badgeColor = "bg-yellow-600";
          badgeText = "BLOCK_ROLE_STUDENT";
          break;
        case "BLOCK_ROLE_INSTRUCTOR":
          badgeColor = "bg-yellow-600";
          badgeText = "BLOCK_ROLE_INSTRUCTOR";
          break;
        default:
          badgeColor = "bg-gray-400";
          badgeText = "UNKNOWN";
      }

      return <Badge className={cn(badgeColor)}>{badgeText}</Badge>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const { userId } = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-4 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <Link href={`/admin/instructor/${userId}`}>
              <DropdownMenuItem>
                <Eye className="h-4 w-4 mr-2" />
                View
              </DropdownMenuItem>
            </Link>
            <Link href={`/admin/instructor/analytics/${userId}`}>
              <DropdownMenuItem>
                <BarChart  className="h-4 w-4 mr-2" />
                Analytics
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
