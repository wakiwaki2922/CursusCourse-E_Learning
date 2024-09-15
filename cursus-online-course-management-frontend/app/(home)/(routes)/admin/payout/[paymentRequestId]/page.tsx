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
  createInstructorRefundPayment,
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

  const breadcrumbItems = [
    { title: "Dashboard", link: "/admin/dashboard" },
    { title: "Payout Management", link: "/admin/payout" },
    {
      title: "Payout Request",
      link: `/admin/payout/${params.paymentRequestId}`,
    },
  ];

  const [isNotDonePaymentRequest, setIsNotDonePaymentRequest] =
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
    defaultValues: isNotDonePaymentRequest,
  });

  const {
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = form;

  useEffect(() => {
    const fetchPaymentRequest = async () => {
      const isNotDonePaymentRequest = await getPaymentRequestIsNotDoneById(
        params.paymentRequestId
      );
      if (isNotDonePaymentRequest) {
        console.log(isNotDonePaymentRequest);
        setIsPaid(isNotDonePaymentRequest.paid);
        setIsNotDonePaymentRequest(isNotDonePaymentRequest);
        setIsLoading(false);
        reset(isNotDonePaymentRequest);
      }
    };
    fetchPaymentRequest();
  }, [params.paymentRequestId, reset]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const returnUrl = `${baseURL}/admin/payout/execute/${params.paymentRequestId}`;
      const cancelUrl = `${baseURL}/admin/payout`;

      const response = await createInstructorRefundPayment(
        values.paymentRequestId,
        returnUrl,
        cancelUrl
      );

      router.replace(response);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

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
              {isLoading ? (
                ""
              ) : (
                <> #{isNotDonePaymentRequest.paymentRequestId}</>
              )}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <Icons.spinner className="m-auto h-4 w-4 animate-spin" />
            ) : (
              <Form {...form}>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input
                            disabled
                            type="text"
                            placeholder="Nguyen Van A"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage></FormMessage>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="requestDate"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Date of request</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-[240px] pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              // disabled={(date) =>
                              //   date > new Date() || date < new Date("1900-01-01")
                              // }
                              disabled
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="amount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl>
                          <Input
                            disabled
                            type="text"
                            placeholder="Amount of money"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage></FormMessage>
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={!isValid || isSubmitting}
                  >
                    Submit
                  </Button>
                </form>
              </Form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PayoutPage;
