"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Resume } from "@/lib/types";
import {
  ComposedChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

interface ApplicationsTimelineProps {
  resumes: Resume[];
}

export function ApplicationsTimeline({ resumes }: ApplicationsTimelineProps) {
  // Mock data for better visualization
  const mockData = [
    { date: "Jan 1", total: 5, shortlisted: 2, rejected: 1, efficiency: 75, response: 85 },
    { date: "Jan 15", total: 8, shortlisted: 4, rejected: 2, efficiency: 80, response: 75 },
    { date: "Feb 1", total: 12, shortlisted: 6, rejected: 3, efficiency: 85, response: 90 },
    { date: "Feb 15", total: 15, shortlisted: 8, rejected: 4, efficiency: 70, response: 80 },
    { date: "Mar 1", total: 20, shortlisted: 10, rejected: 5, efficiency: 90, response: 95 },
    { date: "Mar 15", total: 25, shortlisted: 12, rejected: 6, efficiency: 85, response: 88 },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Application Timeline & Metrics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={mockData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              
              {/* Area charts for application volumes */}
              <Area
                yAxisId="left"
                type="monotone"
                dataKey="total"
                stackId="1"
                stroke="hsl(var(--primary))"
                fill="hsl(var(--primary))"
                fillOpacity={0.2}
                name="Total Applications"
              />
              <Area
                yAxisId="left"
                type="monotone"
                dataKey="shortlisted"
                stackId="2"
                stroke="hsl(var(--success))"
                fill="hsl(var(--success))"
                fillOpacity={0.2}
                name="Shortlisted"
              />
              <Area
                yAxisId="left"
                type="monotone"
                dataKey="rejected"
                stackId="3"
                stroke="hsl(var(--destructive))"
                fill="hsl(var(--destructive))"
                fillOpacity={0.2}
                name="Rejected"
              />

              {/* Line charts for metrics */}
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="efficiency"
                stroke="hsl(var(--chart-1))"
                strokeWidth={2}
                dot={{ fill: "hsl(var(--chart-1))" }}
                name="Processing Efficiency %"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="response"
                stroke="hsl(var(--chart-2))"
                strokeWidth={2}
                dot={{ fill: "hsl(var(--chart-2))" }}
                name="Response Rate %"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
