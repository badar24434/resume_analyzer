"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Resume } from "@/lib/types";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface GrowthProjectionProps {
  resume: Resume;
}

export function GrowthProjection({ resume }: GrowthProjectionProps) {
  const currentYear = new Date().getFullYear();
  const targetYear = 2026;
  const yearDiff = targetYear - currentYear;
  
  // Calculate starting values by working backwards from target values
  const getStartValue = (targetValue: number) => {
    // Using compound annual growth rate formula backwards
    // We want approximately 20-25% total growth over the period
    const totalGrowthRate = 0.75; // This means the start value will be 75% of target
    return Math.round(targetValue * totalGrowthRate);
  };

  const projectedData = [
    {
      year: currentYear,
      leadership: getStartValue(resume.growthPotential.leadership),
      technical: getStartValue(resume.growthPotential.technical),
      communication: getStartValue(resume.growthPotential.communication),
    },
    {
      year: currentYear + Math.floor(yearDiff/2), // Midpoint year
      leadership: Math.round(getStartValue(resume.growthPotential.leadership) * 1.15),
      technical: Math.round(getStartValue(resume.growthPotential.technical) * 1.17),
      communication: Math.round(getStartValue(resume.growthPotential.communication) * 1.13),
    },
    {
      year: targetYear,
      leadership: resume.growthPotential.leadership, // Target values
      technical: resume.growthPotential.technical,
      communication: resume.growthPotential.communication,
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Growth Projection (2024-2026)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={projectedData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="leadership"
                stroke="hsl(var(--chart-1))"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="technical"
                stroke="hsl(var(--chart-2))"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="communication"
                stroke="hsl(var(--chart-3))"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
