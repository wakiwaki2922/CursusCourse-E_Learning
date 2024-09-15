"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { isAdmin } from "@/lib/admin";
import { getChartCountUser } from "@/actions/admin-dashboard";

interface DataChartCountUser {
  month: string;
  numberStudent: number;
  numberInstructor: number;
}

interface ChildComponentProps {
  dataUser: number;
}

const chartConfig = {
  numberStudent: {
    label: "Student",
    color: "hsl(var(--chart-1))",
  },
  numberInstructor: {
    label: "Instructor",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

const ChartCountUser: React.FC<ChildComponentProps> = ({ dataUser }) => {
  const [statistical, setStatistical] = useState<DataChartCountUser[]>();
  const [startMonth, setStartMonth] = useState<string>("");
  const [endMonth, setEndMonth] = useState<string>("");

  const fetchAnalytics = async () => {
    try {
      const response = await getChartCountUser();
      console.log(response);
      if (response && typeof response === "object") {
        setStatistical(response as DataChartCountUser[]);
      } else {
        throw new Error("Invalid data format");
      }
    } catch (error) {
      console.error("Error fetching analytics:", error);
    }
  };

  useEffect(() => {
    if (!isAdmin) {
      redirect("/");
    } else {
      fetchAnalytics();
    }
  }, []);

  useEffect(() => {
    if (statistical != null) {
      if (statistical.length > 0) {
        const months = statistical.map((item) => item.month);
        const startMonth = months[0];
        const endMonth = months[months.length - 1];

        setStartMonth(startMonth);
        setEndMonth(endMonth);
      }
    }
  }, [statistical]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Chart Statistical User</CardTitle>
        <CardDescription>
          Showing total register for the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[310px] w-full"
        >
          <AreaChart
            accessibilityLayer
            data={statistical}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="numberStudent"
              type="natural"
              fill="var(--color-numberStudent)"
              fillOpacity={0.4}
              stroke="var(--color-numberStudent)"
              stackId="a"
            />
            <Area
              dataKey="numberInstructor"
              type="natural"
              fill="var(--color-numberInstructor)"
              fillOpacity={0.4}
              stroke="var(--color-numberInstructor)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by {dataUser}% this month{" "}
              <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              {startMonth} - {endMonth} 
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ChartCountUser;
