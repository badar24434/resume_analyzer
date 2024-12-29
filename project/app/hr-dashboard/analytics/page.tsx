"use client";

import React from "react";
import { ApplicationsTimeline } from "@/components/hr/applications-timeline";
import { mockResumes } from "@/lib/mock-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, LineChart, PieChart } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const AnalyticsPage = () => {
  // Mock some realistic numbers for the pipeline
  const totalApplicants = 150;  // Total number of applications
  const inScreening = 45;       // Number in screening phase
  const inInterview = 20;       // Number in interview phase
  const inFinalStage = 8;       // Number in final stage

  const pipelineData = [
    { 
      stage: "Applied", 
      count: totalApplicants, 
      percentage: 100 
    },
    { 
      stage: "Screening", 
      count: inScreening, 
      percentage: Math.round((inScreening / totalApplicants) * 100)
    },
    { 
      stage: "Interview", 
      count: inInterview, 
      percentage: Math.round((inInterview / totalApplicants) * 100)
    },
    { 
      stage: "Final Stage", 
      count: inFinalStage, 
      percentage: Math.round((inFinalStage / totalApplicants) * 100)
    },
  ];

  const skillsData = mockResumes.reduce((acc, resume) => {
    resume.skills.forEach(skill => {
      acc[skill] = (acc[skill] || 0) + 1;
    });
    return acc;
  }, {} as Record<string, number>);

  // Mock time-to-hire data
  const timeToHireData = [
    { month: 'Jan', days: 18 },
    { month: 'Feb', days: 15 },
    { month: 'Mar', days: 12 },
    { month: 'Apr', days: 20 },
    { month: 'May', days: 14 },
    { month: 'Jun', days: 10 },
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Analytics Dashboard</h1>
      
      <div className="grid gap-6">
        <ApplicationsTimeline resumes={mockResumes} />
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart className="h-5 w-5" />
                Hiring Pipeline
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {pipelineData.map((stage) => (
                <div key={stage.stage} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{stage.stage}</span>
                    <span className="text-muted-foreground">{stage.count} candidates</span>
                  </div>
                  <Progress value={stage.percentage} />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="h-5 w-5" />
                Top Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Object.entries(skillsData)
                  .sort(([,a], [,b]) => b - a)
                  .slice(0, 5)
                  .map(([skill, count]) => (
                    <div key={skill} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{skill}</span>
                        <span className="text-muted-foreground">{count} candidates</span>
                      </div>
                      <Progress value={(count / mockResumes.length) * 100} />
                    </div>
                  ))
                }
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LineChart className="h-5 w-5" />
                Time-to-Hire Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsLineChart data={timeToHireData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="days"
                      stroke="hsl(var(--primary))"
                      strokeWidth={2}
                      dot={{ fill: "hsl(var(--primary))" }}
                      name="Days to Hire"
                    />
                  </RechartsLineChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 space-y-4">
                <div className="flex justify-between text-sm">
                  <span>Average Time to Hire</span>
                  <span className="text-muted-foreground">
                    {Math.round(timeToHireData.reduce((acc, curr) => acc + curr.days, 0) / timeToHireData.length)} days
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Fastest Hire</span>
                  <span className="text-muted-foreground">
                    {Math.min(...timeToHireData.map(d => d.days))} days
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Longest Hire</span>
                  <span className="text-muted-foreground">
                    {Math.max(...timeToHireData.map(d => d.days))} days
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
