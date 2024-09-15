"use client";

import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

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
import { Category } from "@/types/Category";
import { getCategoryWithCourse } from "@/actions/edit-category";

type ChartData = {
  categoryName: string;
  numberCourse: number;
  fill?: string;
};

interface ChildComponentProps {
  dataUser: number;
}

const generateUniqueColors = (count: number): string[] => {
  const colors = new Set<string>();
  while (colors.size < count) {
    const color = `hsl(${Math.floor(Math.random() * 360)}, 70%, 70%)`;
    colors.add(color);
  }
  return Array.from(colors);
};

const getChartDataFromCategories = (categories: Category[]): ChartData[] => {
  const chartData = categories.map((category) => ({
    categoryName: category.categoryName,
    numberCourse: category.courses.length,
  }));

  const colors = generateUniqueColors(chartData.length);
  return chartData.map((item, index) => ({
    ...item,
    fill: colors[index],
  }));
};

const PieGraph: React.FC<ChildComponentProps> = ({dataUser}) => {
  const [categories, setCategories] = React.useState<Category[]>([]);
  const [chartData, setChartData] = React.useState<ChartData[]>([]);

  React.useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategoryWithCourse(); // Replace with actual fetch function
        setCategories(data);
        setChartData(getChartDataFromCategories(data));
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const totalCourses = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.numberCourse, 0);
  }, [chartData]);

  const chartConfig: ChartConfig = {};

  // Update chartConfig dynamically based on categories
  React.useEffect(() => {
    chartData.forEach((item) => {
      chartConfig[item.categoryName] = {
        label: item.categoryName,
        color: item.fill || "hsl(0, 0%, 70%)",
      };
    });
  }, [chartData]);

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Category Distribution</CardTitle>
        <CardDescription>Distribution of Courses by Category</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[360px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="numberCourse"
              nameKey="categoryName"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalCourses.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Courses
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by {dataUser}% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing distribution of courses across categories
        </div>
      </CardFooter>
    </Card>
  );
};

export default PieGraph;
