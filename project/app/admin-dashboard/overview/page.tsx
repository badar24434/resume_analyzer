"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Users, Database, Server } from "lucide-react";
import { SystemMetrics } from "@/components/admin/system-metrics";

const mockMetrics = {
  cpuUsage: 45,
  memoryUsage: 62,
  activeUsers: 23,
  requestsPerMinute: 150
};

const stats = [
  {
    title: "Total Users",
    value: "1,234",
    description: "Active system users",
    icon: <Users className="h-4 w-4 text-muted-foreground" />,
  },
  {
    title: "System Load",
    value: "45%",
    description: "Average CPU usage",
    icon: <Activity className="h-4 w-4 text-muted-foreground" />,
  },
  {
    title: "Database Size",
    value: "2.4 GB",
    description: "Total storage used",
    icon: <Database className="h-4 w-4 text-muted-foreground" />,
  },
  {
    title: "Server Status",
    value: "Healthy",
    description: "All systems operational",
    icon: <Server className="h-4 w-4 text-muted-foreground" />,
  }
];

export default function OverviewPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">System Overview</h1>
      
      <div className="grid gap-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                {stat.icon}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <SystemMetrics metrics={mockMetrics} />
      </div>
    </div>
  );
}
