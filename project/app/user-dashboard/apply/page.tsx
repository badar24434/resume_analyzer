"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Upload } from "lucide-react";
import { toast } from "sonner";

export default function ApplicationForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    coverLetter: "",
    resume: null as File | null,
  });

  const jobDetails = {
    position: searchParams.get("position"),
    company: searchParams.get("company"),
    type: searchParams.get("type"),
    location: searchParams.get("location"),
    salary: searchParams.get("salary"),
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your API
    toast.success("Application submitted successfully!");
    router.push("/user-dashboard/applications");
  };

  return (
    <div className="container mx-auto p-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Apply for {jobDetails.position}</CardTitle>
          <div className="flex flex-wrap gap-2 mt-2">
            <Badge variant="secondary">{jobDetails.company}</Badge>
            <Badge variant="outline">{jobDetails.type}</Badge>
            <Badge variant="outline">{jobDetails.location}</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  required
                  value={formData.fullName}
                  onChange={e => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="resume">Resume</Label>
                <Input
                  id="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  required
                  className="cursor-pointer"
                  onChange={e => setFormData(prev => ({ 
                    ...prev, 
                    resume: e.target.files?.[0] || null 
                  }))}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="coverLetter">Cover Letter</Label>
                <Textarea
                  id="coverLetter"
                  placeholder="Why are you interested in this position?"
                  className="min-h-[150px]"
                  value={formData.coverLetter}
                  onChange={e => setFormData(prev => ({ ...prev, coverLetter: e.target.value }))}
                />
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <Button type="button" variant="outline" onClick={() => router.back()}>
                Cancel
              </Button>
              <Button type="submit">
                <Upload className="w-4 h-4 mr-2" />
                Submit Application
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
