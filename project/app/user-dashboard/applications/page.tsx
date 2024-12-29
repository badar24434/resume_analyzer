"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Applications() {
  const applications = [
    {
      id: 1,
      position: "Software Engineer",
      status: "In Review",
      date: "2024-03-15",
      stage: "Technical Interview",
      nextStep: "System Design Round",
    },
    {
      id: 2, 
      position: "Frontend Developer",
      status: "Pending",
      date: "2024-03-10", 
      stage: "Initial Screening",
      nextStep: "Technical Assessment",
    },
    // Add more applications as needed
  ];

  return (
    <div className="container mx-auto p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">My Applications</h1>
          <p className="text-muted-foreground">Track your job application progress</p>
        </div>
        <div className="flex gap-4">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Applications</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="review">In Review</SelectItem>
              <SelectItem value="accepted">Accepted</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <ScrollArea className="h-[calc(100vh-12rem)]">
        <div className="grid gap-4">
          {applications.map((app) => (
            <Card key={app.id}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xl">{app.position}</CardTitle>
                <Badge variant={app.status === "In Review" ? "default" : "secondary"}>
                  {app.status}
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-sm font-semibold">Current Stage</p>
                    <p className="text-sm text-muted-foreground">{app.stage}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Next Step</p>
                    <p className="text-sm text-muted-foreground">{app.nextStep}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Applied On</p>
                    <p className="text-sm text-muted-foreground">{app.date}</p>
                  </div>
                  <div className="flex justify-end items-center">
                    <Button variant="outline" className="mr-2">View Details</Button>
                    <Button>Prepare</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
