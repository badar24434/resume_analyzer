"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useRouter } from "next/navigation";
import { FileText, User, Clock, Briefcase, ChevronRight, BarChart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function UserDashboard() {
  const router = useRouter();

  const stats = [
    {
      title: "Application Status",
      value: "In Review",
      icon: <FileText className="h-4 w-4 text-muted-foreground" />,
      color: "bg-blue-500",
    },
    {
      title: "Profile Completion",
      value: "75%",
      icon: <User className="h-4 w-4 text-muted-foreground" />,
      color: "bg-green-500",
    },
    {
      title: "Last Activity",
      value: "2 days ago",
      icon: <Clock className="h-4 w-4 text-muted-foreground" />,
      color: "bg-orange-500",
    }
  ];

  const recentApplications = [
    { position: "Software Engineer", status: "In Review", date: "2024-03-15" },
    { position: "Frontend Developer", status: "Pending", date: "2024-03-10" },
  ];

  const recommendedJobs = [
    { title: "Senior Developer", match: 95 },
    { title: "Full Stack Engineer", match: 88 },
    { title: "React Developer", match: 85 },
  ];

  return (
    <div className="container mx-auto p-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">Welcome back, John!</h1>
          <p className="text-muted-foreground">
            Here's what's happening with your job applications
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {stats.map((stat, index) => (
            <Card key={index} className="relative overflow-hidden">
              <div className={`absolute top-0 left-0 w-1 h-full ${stat.color}`} />
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                {stat.icon}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Recent Applications
                <Button variant="ghost" size="sm" className="text-sm" onClick={() => router.push("/user-dashboard/applications")}>
                  View all
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentApplications.map((app, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <p className="font-medium">{app.position}</p>
                    <Badge variant={app.status === "In Review" ? "default" : "secondary"}>
                      {app.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Recommended Jobs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recommendedJobs.map((job, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <p className="font-medium">{job.title}</p>
                    <div className="flex items-center">
                      <span className="text-sm font-medium mr-2">{job.match}% match</span>
                      <Progress value={job.match} className="w-[60px]" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="w-full h-24 flex flex-col gap-2" onClick={() => router.push("/apply")}>
                <Briefcase className="h-6 w-6" />
                Browse Jobs
              </Button>
              <Button variant="outline" className="w-full h-24 flex flex-col gap-2" onClick={() => router.push("/profile")}>
                <User className="h-6 w-6" />
                Update Profile
              </Button>
              <Button variant="outline" className="w-full h-24 flex flex-col gap-2" onClick={() => router.push("/user-dashboard/analytics")}>
                <BarChart className="h-6 w-6" />
                View Analytics
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}