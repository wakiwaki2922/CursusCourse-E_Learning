"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import WithdrawForm from "./withdraw-form";

interface BalanceCardProps {
  value: number | 0;
  paypalId: string;
  label: string;
  shouldFormat?: boolean;
}

const BalanceCard = ({
  value,
  paypalId,
  label,
  shouldFormat,
}: BalanceCardProps) => {
  return (
    <div>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-base font-medium">{label}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="text-2xl font-bold">
              {shouldFormat ? `$${Math.round(value).toFixed(2)}` : value}
            </div>

            <div className="text-sm text-slate-900">
              <h1 className="text-2xl">Withdraw</h1>
              <WithdrawForm value={value} paypalPaymentId={paypalId} />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BalanceCard;
