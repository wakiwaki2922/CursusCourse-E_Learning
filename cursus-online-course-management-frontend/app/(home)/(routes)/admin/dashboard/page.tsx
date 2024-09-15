"use client";

import {
  exportEnrollmentData,
  getStatisticalAdmin,
} from "@/actions/admin-dashboard";
import { AreaGraph } from "./_components/area-graph";
import BarGraph from "./_components/bar-graph";
import PieGraph from "./_components/pie-graph";
import { CalendarDateRangePicker } from "@/components/date-range-picker";
import { Overview } from "@/components/overview";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { isAdmin } from "@/lib/admin";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import ChartCountUser from "./_components/area-graph-user";
import RecentSales from "./_components/recent-sales";
import { number } from "zod";
import { DateRange } from "react-day-picker";
import { format } from "date-fns";

interface StatisticalAdminResponse {
  thisMonthRevenue: number | 0;
  totalRevenue: number | 0;
  percentageRevenueOfThisMonthAndLastMonth: number | 0;

  thisMonthCourses: number | 0;
  totalCourse: number | 0;
  percentageCoursesOfThisMonthAndLastMonth: number | 0;

  thisMonthEnrollments: number | 0;
  totalEnrollment: number | 0;
  percentageEnrollmentsOfThisMonthAndLastMonth: number | 0;

  thisMonthUsers: number | 0;
  totalUsers: number | 0;
  percentageUsersOfThisMonthAndLastMonth: number | 0;
}

interface Props {
  value: number | 0;
}

const DashboardPage = () => {
  const [statistical, setStatistical] =
    useState<StatisticalAdminResponse | null>(null);

  const fetchAnalytics = async () => {
    try {
      const response = await getStatisticalAdmin();
      console.log(response);
      if (response && typeof response === "object") {
        setStatistical(response as StatisticalAdminResponse);
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

  const NumberDisplay: React.FC<Props> = ({ value }) => {
    return <>{value > 0 ? `+${value}` : value < 0 ? `${value}` : "0"}</>;
  };

  const formatPercentage = (value: number): number => {
    return parseFloat(Math.round(value).toFixed(1));
  };

  const [selectedDateRange, setSelectedDateRange] = useState<{
    startDate: Date;
    endDate: Date;
  } | null>(null);

  const handleDatesChange = (range: DateRange | undefined) => {
    if (range?.from && range?.to) {
      setSelectedDateRange({ startDate: range.from, endDate: range.to });
    } else {
      setSelectedDateRange(null);
    }
  };

  const handleDownload = async () => {
    if (selectedDateRange) {
      const { startDate, endDate } = selectedDateRange;
      const formattedStartDate = startDate
        .toLocaleDateString("en-GB")
        .split("/")
        // .reverse()
        .join("-");
      const formattedEndDate = endDate
        .toLocaleDateString("en-GB")
        .split("/")
        // .reverse()
        .join("-");

      try {
        await exportEnrollmentData(formattedStartDate, formattedEndDate);
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      console.log("No date range selected");
    }
  };

  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">
            Hi, Welcome back 👋
          </h2>
          <div className="hidden items-center space-x-2 md:flex">
            <CalendarDateRangePicker onDatesChange={handleDatesChange} />
            <Button onClick={handleDownload}>Download</Button>
          </div>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Revenue
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    <NumberDisplay
                      value={formatPercentage(
                        statistical?.totalRevenue || 0
                      )}
                    />$
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Users
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {statistical?.totalUsers}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Courses
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <path d="M2 10h20" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {statistical?.totalCourse}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Enrollments
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {statistical?.totalEnrollment}
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">
              <div className="col-span-4">
                <ChartCountUser
                  dataUser={formatPercentage(
                    statistical?.percentageUsersOfThisMonthAndLastMonth || 0
                  )}
                />
              </div>
              <Card className="col-span-4 md:col-span-3">
                <CardHeader>
                  <CardTitle>Recent Enrollments</CardTitle>
                  <CardDescription>
                    You made {statistical?.thisMonthEnrollments} enrollments
                    this month.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentSales />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="analytics" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Revenue</CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    +{statistical?.thisMonthRevenue}$
                  </div>
                  <p className="text-xs text-muted-foreground">
                    <NumberDisplay
                      value={formatPercentage(
                        statistical?.percentageRevenueOfThisMonthAndLastMonth || 0
                      )}
                    />
                    % from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Users</CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    +{statistical?.thisMonthUsers}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    <NumberDisplay
                      value={formatPercentage(
                        statistical?.percentageUsersOfThisMonthAndLastMonth || 0
                      )}
                    />
                    % from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Courses</CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <path d="M2 10h20" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    +{statistical?.thisMonthCourses}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    <NumberDisplay
                      value={
                        statistical?.percentageCoursesOfThisMonthAndLastMonth ||
                        0
                      }
                    />
                    % from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Enrollments
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    +{statistical?.thisMonthEnrollments}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    <NumberDisplay
                      value={
                        statistical?.percentageEnrollmentsOfThisMonthAndLastMonth ||
                        0
                      }
                    />{" "}
                    % from last month
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">
              <div className="col-span-4">
                <BarGraph />
              </div>
              <div className="col-span-4 md:col-span-3">
                <PieGraph
                  dataUser={
                    statistical?.percentageCoursesOfThisMonthAndLastMonth || 0
                  }
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </ScrollArea>
  );
};

export default DashboardPage;
