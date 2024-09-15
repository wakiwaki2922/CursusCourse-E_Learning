'use client';

import * as React from 'react';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart';
import { getCourseAndEnrollmentCountBy30Date } from '@/actions/admin-dashboard';

type CourseAndEnrollmentCountResponse = {
  date: string;
  courseCount: number;
  enrollmentCount: number;
};

const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}/${month}/${day}`;
};

export const description = 'An interactive bar chart';

const chartConfig = {
  views: {
    label: 'Page Views'
  },
  courseCount: {
    label: 'Course',
    color: 'hsl(var(--chart-1))'
  },
  enrollmentCount: {
    label: 'Enrollment',
    color: 'hsl(var(--chart-2))'
  }
} satisfies ChartConfig;

const BarGraph = () => {

  const [chartData, setChartData] = React.useState<CourseAndEnrollmentCountResponse[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await getCourseAndEnrollmentCountBy30Date();

      const formattedData = data.map(item => ({
        date: formatDate(item.date),
        courseCount: item.courseCount,
        enrollmentCount: item.enrollmentCount
      }));
      console.log(formattedData);
      
      setChartData(formattedData);
    };
    fetchData();
  }, []);

  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>('courseCount');

  const total = React.useMemo(
    () => ({
      courseCount: chartData.reduce((acc, curr) => acc + curr.courseCount, 0),
      enrollmentCount: chartData.reduce((acc, curr) => acc + curr.enrollmentCount, 0)
    }),
    [chartData]
  );

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Comparison Course and Enrollment</CardTitle>
          <CardDescription>
            Showing total datas for the last 30 days
          </CardDescription>
        </div>
        <div className="flex">
          {['courseCount', 'enrollmentCount'].map((key) => {
            const chart = key as keyof typeof chartConfig;
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[key as keyof typeof total]}
                </span>
              </button>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[280px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric'
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    });
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default BarGraph;