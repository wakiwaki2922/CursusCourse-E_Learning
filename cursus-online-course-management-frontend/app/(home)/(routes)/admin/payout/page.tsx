"use client";

import { useEffect, useState } from "react";
import { columnsNotDone } from "./_components/columns-payout-not-done";
import { DataTable } from "./_components/data-table-payout-done";
import { useRouter } from "next/navigation";
import { getAllInstructorWithCourse } from "@/actions/edit-instructor";
import { Instructor } from "@/types/Instructor";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getIsDonePaymentRequest, getIsNotDonePaymentRequest } from "@/actions/payment-request";
import { DataTableNotDone } from "./_components/data-table-payout-not-done";
import { columnsDone } from "./_components/columns-payout-done";

const breadcrumbItems = [
  { title: "Dashboard", link: "/admin/dashboard" },
  { title: "Payout Management", link: "/admin/payout" },
];

interface IsNotDonePaymentRequest {
  paymentRequestId: string;
  amount: number;
  fullName: string;
  requestDate: Date;
  instructorPaypalId: string;
  paid: Boolean;
}

interface IsDonePaymentRequest {
  paymentRequestId: string;
  amount: number;
  fullName: string;
  requestDate: Date;
  instructorPaypalId: string;
  paid: Boolean;
}

const StudentManagementPage = () => {
  const router = useRouter();

  const [isNotDonePaymentRequest, setIsNotDonePaymentRequest] = useState<
    IsNotDonePaymentRequest[]
  >([]);

  const [isDonePaymentRequest, setIsDonePaymentRequest] = useState<
    IsDonePaymentRequest[]
  >([]);

  useEffect(() => {
    const fetchIsNotDonePaymentRequest = async () => {
      try {
        const data = await getIsNotDonePaymentRequest();
        setIsNotDonePaymentRequest(data);
      } catch (error) {
        console.error("Error fetching instructor:", error);
      }
    };
    
    const fetchIsDonePaymentRequest = async () => {
      try {
        const data = await getIsDonePaymentRequest();
        setIsDonePaymentRequest(data);
      } catch (error) {
        console.error("Error fetching instructor:", error);
      }
    };

    fetchIsNotDonePaymentRequest();

    fetchIsDonePaymentRequest();
  }, [router]);

  return (
    <>
      <div className="p-6">
        <Breadcrumbs items={breadcrumbItems} />
        <Tabs defaultValue="progress" className="mt-5">
          <div className="flex items-center justify-between">
            <Heading
              title={`Payouts (${isNotDonePaymentRequest.length})`}
              description="Manage payouts (Server side table functionalities.)"
            />
            <TabsList>
              <TabsTrigger value="progress">WAITING</TabsTrigger>
              <TabsTrigger value="done">DONE</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="progress" className="space-y-3">
            <Separator />
            <DataTable columns={columnsNotDone} data={isNotDonePaymentRequest} />
          </TabsContent>
          <TabsContent value="done" className="space-y-3">
            <Separator />
            <DataTableNotDone columns={columnsDone} data={isDonePaymentRequest} />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default StudentManagementPage;
