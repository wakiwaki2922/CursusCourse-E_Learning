import { paymentRequest } from "@/actions/payment-request";
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
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { z } from "zod";

const WithdrawForm = ({
  value,
  paypalPaymentId,
}: {
  value: number;
  paypalPaymentId: string;
}) => {
  const formSchema = z.object({
    paypalPaymentId: z.string().min(1, {
      message: "PaypalID is required",
    }),
    amount: z
      .number()
      .min(1, {
        message: "Amount is required",
      })
      .max(value, {
        message: "Amount should be less than or equal to your balance",
      }),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      paypalPaymentId: paypalPaymentId,
      amount: 0,
    },
  });

  const {
    handleSubmit,
    trigger,
    formState: { errors, isSubmitting, isValid },
  } = form;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      console.log(values);
      await paymentRequest(values);
      toast.success("Withdraw request sent. Please wait for approval");
      form.reset();
    } catch (error: any) {
      toast.error(error.message || "Something went wrong");
    }
  };
  return (
    <>
      <Toaster />
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <FormField
            control={form.control}
            name="paypalPaymentId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Paypal Username</FormLabel>
                <FormControl>
                  <Input
                    disabled={isSubmitting}
                    placeholder={
                      paypalPaymentId
                        ? `Current paypal: ${paypalPaymentId}`
                        : "e.g. 'sb-47brsu31038551_api1.business.example.com'"
                    }
                    {...field}
                    onBlur={() => trigger("paypalPaymentId")}
                  />
                </FormControl>
                {errors.paypalPaymentId && (
                  <FormMessage>{errors.paypalPaymentId.message}</FormMessage>
                )}
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Amount</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    step={1.0}
                    disabled={isSubmitting}
                    placeholder="e.g. 100"
                    {...field}
                    onChange={e => {
                      const value = e.target.value;
                      field.onChange(value ? Number(value) : ''); // Convert string to number, fallback to empty string if conversion fails
                    }}
                    onBlur={() => {
                      const value = field.value;
                      trigger("amount");
                      field.onBlur();
                    }}
                  />
                </FormControl>
                {errors.amount && (
                  <FormMessage>{errors.amount.message}</FormMessage>
                )}
              </FormItem>
            )}
          />
          <div className="flex items-center gap-x-2">
            <Button type="submit" disabled={!isValid || isSubmitting}>
              Continue
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default WithdrawForm;
