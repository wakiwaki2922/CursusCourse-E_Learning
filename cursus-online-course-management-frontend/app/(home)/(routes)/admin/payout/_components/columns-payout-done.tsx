"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";

import { ArrowUpDown, MoreHorizontal, Pencil } from "lucide-react";
import { format } from 'date-fns';

interface IsDonePaymentRequest {
  paymentRequestId: string;
  amount: number;
  fullName: string;
  requestDate: Date;
  instructorPaypalId: string;
  paid: Boolean;
}

const dateFormat = 'HH:mm | dd/MM/yyyy';

export const columnsDone: ColumnDef<IsDonePaymentRequest>[] = [
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
    accessorKey: "requestDate",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Request Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const requestDate: string = row.getValue("requestDate");
      return (
        <span>
          {format(new Date(requestDate), dateFormat)}
        </span>
      );
    },
  },
  {
    accessorKey: "amount",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Amount ($)
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "paid",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Paid Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const isVerify = row.getValue("paid") || false;

      return (
        <Badge className={cn("bg-amber-400", isVerify && "bg-lime-600")}>
          {isVerify ? "Done" : "Waiting"}
        </Badge>
      );
    },
  },
];
