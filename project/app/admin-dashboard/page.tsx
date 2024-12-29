"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Users, Server, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SystemStatus, JobDescription } from "@/lib/types";
import { JobForm } from "@/components/admin/job-form";
import { SystemMetrics } from "@/components/admin/system-metrics";
import { jobDescriptions } from "@/lib/mock-data";

// Mock metrics data
const mockMetrics = {
  cpuUsage: 45,
  memoryUsage: 62,
  activeUsers: 23,
  requestsPerMinute: 150
};

const mockSystemStatus: SystemStatus = {
  totalUsers: 156,
  activeUploads: 23,
  systemHealth: 'good',
  lastUpdated: new Date().toISOString(),
};

export default function AdminDashboard() {
  const [showJobForm, setShowJobForm] = useState(false);
  const [jobs, setJobs] = useState<JobDescription[]>(jobDescriptions);
  const [editingJob, setEditingJob] = useState<JobDescription | undefined>(undefined);

  const handleJobSubmit = (job: Partial<JobDescription>) => {
    if (editingJob) {
      setJobs(jobs.map(j => j.id === editingJob.id ? { ...editingJob, ...job } as JobDescription : j));
    } else {
      const newJob: JobDescription = {
        id: String(Date.now()),
        status: "active",
        ...job
      } as JobDescription;
      setJobs([...jobs, newJob]);
    }
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">System Administration</h1>
          <Button onClick={() => setShowJobForm(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Add New Job
          </Button>
        </div>

        {/* Replace the old metrics cards with SystemMetrics component */}
        <div className="mb-8">
          <SystemMetrics metrics={mockMetrics} />
        </div>

        {/* Job Descriptions section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Job Descriptions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {jobs.map((job) => (
                <div key={job.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-semibold">{job.title}</h3>
                    <p className="text-sm text-muted-foreground">{job.department}</p>
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setEditingJob(job);
                      setShowJobForm(true);
                    }}
                  >
                    Edit
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Management cards */}
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Access Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Manage user roles and permissions for the Resume Analyzer system.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>System Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Monitor and optimize system performance metrics.
              </p>
            </CardContent>
          </Card>
        </div>

        <JobForm
          open={showJobForm}
          onClose={() => {
            setShowJobForm(false);
            setEditingJob(undefined);
          }}
          onSubmit={handleJobSubmit}
          initialData={editingJob}
        />
      </div>
    </div>
  );
}