"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Upload, Briefcase, MapPin, DollarSign } from "lucide-react";
import { toast } from "sonner";

export default function ApplicationForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const jobDetails = {
    position: searchParams.get("position"),
    company: searchParams.get("company"),
    type: searchParams.get("type"),
    location: searchParams.get("location"),
    salary: searchParams.get("salary"),
    match: searchParams.get("match"),
    posted: searchParams.get("posted"),
  };

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    coverLetter: "",
    resume: null as File | null,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Application submitted successfully!");
    router.push("/user-dashboard/applications");
  };

  return (
    <div className="container mx-auto p-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">{jobDetails.position}</CardTitle>
          <CardDescription>
            <div className="flex flex-wrap items-center gap-4 mt-2">
              <div className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                {jobDetails.company}
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {jobDetails.location}
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                {jobDetails.salary}
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              <Badge variant="secondary">{jobDetails.type}</Badge>
              <Badge variant="success" className="bg-green-100 text-green-800">
                {jobDetails.match}% Match
              </Badge>
              <Badge variant="outline">Posted {jobDetails.posted}</Badge>
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* ...existing form fields... */}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
