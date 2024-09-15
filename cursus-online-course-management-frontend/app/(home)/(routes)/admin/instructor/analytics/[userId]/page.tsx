"use client";

import { redirect, useRouter } from "next/navigation";
import DataCard from "./_components/data-card";
import { getAnalytics } from "@/actions/get-analytics-admin";
import { useEffect, useState } from "react";
import { isInstructor } from "@/lib/instructor";
import CustomPieChart from "./_components/pie-chart";
import CustomLineChart from "./_components/line-chart";
import { Breadcrumbs } from "@/components/breadcrumbs";

const AnalyticsPage = ({ params }: { params: { userId: string } }) => {
  const router = useRouter();

  const breadcrumbItems = [
    { title: "Dashboard", link: "/admin/dashboard" },
    { title: "Instructor Management", link: "/admin/instructor" },
    {
      title: "Analytics",
      link: `/admin/instructor/analytics/${params.userId}`,
    },
  ];

  const [analytics, setAnalytics] = useState<{
    pieChartData: { name: string; total: number }[];
    composedChartData: any[]; // Replace [] with the correct type for composedChartData
    totalRevenue: number;
    totalSales: number;
  }>({
    pieChartData: [],
    composedChartData: [],
    totalRevenue: 0,
    totalSales: 0,
  });

  const [revenueQuarter, setRevenueQuarter] = useState(1);
  const [totalSalesQuarter, setTotalSales] = useState(1);

  

  useEffect(() => {
    if (!isInstructor) {
      redirect("/");
    } else {
      const fetchAnalytics = async (
        revenueQuarter: number,
        totalSalesQuarter: number
      ) => {
        const { pieChartData, composedChartData, totalRevenue, totalSales } =
          await getAnalytics(params.userId, revenueQuarter, totalSalesQuarter);
        setAnalytics({
          pieChartData: pieChartData || [],
          composedChartData: composedChartData || [],
          totalRevenue,
          totalSales,
        });
      };

      fetchAnalytics(revenueQuarter, totalSalesQuarter);
    }
  }, [router, revenueQuarter, totalSalesQuarter, params.userId]);

  return (
    <>
      <div className="p-6">
        <Breadcrumbs items={breadcrumbItems} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 mb-4">
          <DataCard
            label="Total Sales"
            value={analytics.totalSales}
            onSelectChange={(value) => setTotalSales(value)}
          />
          <DataCard
            label="Total Revenue"
            value={analytics.totalRevenue}
            shouldFormat
            onSelectChange={(value) => setRevenueQuarter(value)}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <CustomPieChart
            label="Percent revenue of each course in last month"
            data={analytics.pieChartData}
          />
          <CustomLineChart data={analytics.composedChartData} />
        </div>
      </div>
    </>
  );
};

export default AnalyticsPage;
