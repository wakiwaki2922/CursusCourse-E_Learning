import { Card } from "@/components/ui/card";
import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
  Bar,
} from "recharts";

type ChartProps = {
  data: any[];
};

export default class CustomLineChart extends PureComponent<ChartProps> {
  render() {
    const { data } = this.props;
    return (
      <>
        <Card>
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 20,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="monthYear" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Bar
                yAxisId="left"
                type="monotone"
                dataKey="totalRevenue"
                fill="#82ca9d"
                barSize={20}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="numberOfEnrollments"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </Card>
      </>
    );
  }
}
