"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import {
  redirect,
  useParams,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useEffect, useState } from "react";
import {
  changeStatusForRequest,
  createInstructorRefundPayment,
  executeInstructorRefundPayment,
  getPaymentRequestIsNotDoneById,
} from "@/actions/payment-request";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Icons } from "@/components/icons";

const formSchema = z.object({
  paymentRequestId: z.string(),
  amount: z.number(),
  fullName: z.string(),
  requestDate: z.coerce.date({
    required_error: "A request sate is required.",
  }),
});

type FormSchemaType = z.infer<typeof formSchema>;

const PayoutPage = ({ params }: { params: { paymentRequestId: string } }) => {
  const baseURL: string = process.env.BASE_API_URL_FE || "";

  const searchParams = useSearchParams();
  const paymentId = searchParams.get("paymentId");
  const payerID = searchParams.get("PayerID");

  const breadcrumbItems = [
    { title: "Dashboard", link: "/admin/dashboard" },
    { title: "Payout Management", link: "/admin/payout" },
    {
      title: "Payout Request",
      link: `/admin/payout/${params.paymentRequestId}`,
    },
  ];

  const [isDonePaymentRequest, setIsDonePaymentRequest] =
    useState<FormSchemaType>({
      paymentRequestId: "",
      amount: 0,
      fullName: "",
      requestDate: new Date(),
    });

  const [isPaid, setIsPaid] = useState<Boolean>(false);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const router = useRouter();

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: isDonePaymentRequest,
  });

  const {
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = form;

  useEffect(() => {
    async function executePayment() {
      if (!paymentId || !payerID) {
        console.error("Payment ID or Payer ID missing");
        return;
      }
      const isNotDonePaymentRequest = await executeInstructorRefundPayment(
        paymentId as string,
        payerID as string,
        params.paymentRequestId
      );
      if (isNotDonePaymentRequest) {
        window.location.href = `${baseURL}/admin/payout/success/${params.paymentRequestId}`;
      }
      setIsPaid(isNotDonePaymentRequest.paid);
      setIsDonePaymentRequest(isDonePaymentRequest);
      setIsLoading(false);
      reset(isNotDonePaymentRequest);
    }
    executePayment();
  }, [
    baseURL,
    isDonePaymentRequest,
    params.paymentRequestId,
    payerID,
    paymentId,
    reset,
  ]);

  return (
    <div className="p-6 ">
      <Breadcrumbs items={breadcrumbItems} />
      <div className="mt-8">
        <Heading
          title={`Payouts`}
          description={`Payout for instructor (Server side table functionalities.)`}
        />
        <Separator />
      </div>
      <div className="max-h-full flex flex-col items-center justify-center mt-8">
        <Card className="w-[400px]">
          <CardHeader>
            <CardTitle>
              <div className="flex items-center justify-between">
                Payout Request
                {isLoading ? (
                  ""
                ) : (
                  <Badge
                    className={cn("bg-amber-400", isPaid && "bg-lime-600")}
                  >
                    {isPaid ? "Done" : "Waiting"}
                  </Badge>
                )}
              </div>
            </CardTitle>
            <CardDescription>
              {isLoading ? "" : <> #{params.paymentRequestId}</>}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Icons.spinner className="m-auto h-4 w-4 animate-spin" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PayoutPage;
