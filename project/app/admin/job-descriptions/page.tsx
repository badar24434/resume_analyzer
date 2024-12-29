"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { jobDescriptions } from "@/lib/mock-data";
import { JobDescription } from "@/lib/types";

export default function JobDescriptionsPage() {
  const [jobs, setJobs] = useState<JobDescription[]>(jobDescriptions);

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Job Descriptions</h1>
          <Button>Add New Job</Button>
        </div>

        <div className="grid gap-6">
          {jobs.map((job) => (
            <Card key={job.id}>
              <CardHeader>
                <CardTitle>{job.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div>
                    <Label>Required Skills</Label>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {job.requiredSkills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label>Experience Weightage ({job.weightage.experience * 100}%)</Label>
                      <Slider
                        defaultValue={[job.weightage.experience * 100]}
                        max={100}
                        step={1}
                      />
                    </div>
                    <div>
                      <Label>Skills Weightage ({job.weightage.skills * 100}%)</Label>
                      <Slider
                        defaultValue={[job.weightage.skills * 100]}
                        max={100}
                        step={1}
                      />
                    </div>
                    <div>
                      <Label>Education Weightage ({job.weightage.education * 100}%)</Label>
                      <Slider
                        defaultValue={[job.weightage.education * 100]}
                        max={100}
                        step={1}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}