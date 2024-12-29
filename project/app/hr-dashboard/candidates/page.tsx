"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { mockResumes } from "@/lib/mock-data";
import { ResumeList } from "@/components/resume-list";
import { CandidateDetails } from "@/components/hr/candidate-details";
import { Resume } from "@/lib/types";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FeedbackDialog } from "@/components/hr/feedback-dialog";
import { toast } from "sonner";

export default function CandidatesPage() {
  const [selectedResume, setSelectedResume] = useState<Resume | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [showFeedback, setShowFeedback] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"name" | "score" | "date">("score");

  const handleStatusChange = (newStatus: string) => {
    setStatusFilter(newStatus);
    setSelectedStatus(newStatus);
  };

  const handleFeedbackSubmit = (feedback: string, decision: string) => {
    if (selectedResume) {
      // Here you would typically update the backend
      const decisionMessages = {
        proceed: "Candidate has been moved to the next round",
        reject: "Candidate has been rejected",
        pending: "Candidate remains under review"
      };
      
      toast.success(decisionMessages[decision as keyof typeof decisionMessages], {
        description: `Feedback has been sent to ${selectedResume.name}`
      });
      
      // Update local state if needed
      const newStatus = {
        proceed: "shortlisted",
        reject: "rejected",
        pending: "in_review"
      }[decision];
      
      // Here you would update the resume status in your data
    }
    setShowFeedback(false);
  };

  const filteredResumes = mockResumes
    .filter(resume => {
      const matchesSearch = resume.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          resume.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          resume.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesStatus = statusFilter === "all" || resume.applicationStatus === statusFilter;
      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "score":
          return b.score - a.score;
        case "date":
          return new Date(b.applicationDate).getTime() - new Date(a.applicationDate).getTime();
        default:
          return 0;
      }
    });

  return (
    <div className="container mx-auto p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Candidates</h1>
        <div className="flex gap-4">
          <div className="relative w-64">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search candidates..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Select value={sortBy} onValueChange={(value: "name" | "score" | "date") => setSortBy(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="score">Score</SelectItem>
              <SelectItem value="name">Name</SelectItem>
              <SelectItem value="date">Date</SelectItem>
            </SelectContent>
          </Select>
          <Select value={selectedStatus} onValueChange={handleStatusChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="submitted">Submitted</SelectItem>
              <SelectItem value="in_review">In Review</SelectItem>
              <SelectItem value="shortlisted">Shortlisted</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card>
            <CardContent className="p-6">
              <ResumeList
                resumes={filteredResumes}
                onSelectResume={setSelectedResume}
                onFeedback={(resume) => {
                  setSelectedResume(resume);
                  setShowFeedback(true);
                }}
              />
            </CardContent>
          </Card>
        </div>
        <div>
          {selectedResume && (
            <CandidateDetails resume={selectedResume} />
          )}
        </div>
      </div>

      {selectedResume && (
        <FeedbackDialog
          resume={selectedResume}
          open={showFeedback}
          onClose={() => setShowFeedback(false)}
          onSubmit={handleFeedbackSubmit}
        />
      )}
    </div>
  );
}
