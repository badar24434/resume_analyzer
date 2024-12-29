"use client";

import { useState } from "react";
import { Upload, Users, Star, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ResumeList } from "@/components/resume-list";
import { UploadResume } from "@/components/upload-resume";
import { DepartmentFilter } from "@/components/hr/department-filter";
import { CandidateDetails } from "@/components/hr/candidate-details";
import { FeedbackDialog } from "@/components/hr/feedback-dialog";
import { PositionFilter } from "@/components/hr/position-filter";
import { departments, mockResumes } from "@/lib/mock-data";
import { Resume } from "@/lib/types";

export default function HRDashboard() {
  const [showUpload, setShowUpload] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [selectedPosition, setSelectedPosition] = useState("all");
  const [resumes, setResumes] = useState(mockResumes);
  const [selectedResume, setSelectedResume] = useState<Resume | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const filteredResumes = resumes
    .filter(r => {
      if (selectedDepartment === "all") return true;
      const dept = departments.find(d => d.name === selectedDepartment);
      return dept ? dept.positions.includes(r.position) : false;
    })
    .filter(r => selectedPosition === "all" || r.position === selectedPosition)
    .sort((a, b) => {
      // Sort by position first, then by score
      if (a.position !== b.position) {
        return a.position.localeCompare(b.position);
      }
      return b.score - a.score;
    });

  const handleFeedbackSubmit = (feedback: string, type: string) => {
    if (selectedResume) {
      const updatedResumes = resumes.map(r => {
        if (r.id === selectedResume.id) {
          return { ...r, lastFeedback: feedback };
        }
        return r;
      });
      setResumes(updatedResumes);
      setShowFeedback(false);
    }
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">HR Dashboard</h1>
          <div className="flex space-x-4">
            <DepartmentFilter onDepartmentChange={setSelectedDepartment} />
            <PositionFilter 
              selectedDepartment={selectedDepartment}
              onPositionChange={setSelectedPosition}
            />
            <Button onClick={() => setShowUpload(true)}>
              <Upload className="mr-2 h-4 w-4" />
              Upload Resumes
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Resumes</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{resumes.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Top Candidates</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {resumes.filter((r) => r.score >= 8).length}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Jobs</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <ResumeList 
              resumes={filteredResumes}
              onSelectResume={setSelectedResume}
              onFeedback={(resume) => {
                setSelectedResume(resume);
                setShowFeedback(true);
              }}
            />
          </div>
          <div>
            {selectedResume && (
              <CandidateDetails resume={selectedResume} />
            )}
          </div>
        </div>

        <UploadResume open={showUpload} onClose={() => setShowUpload(false)} />
        {selectedResume && (
          <FeedbackDialog
            resume={selectedResume}
            open={showFeedback}
            onClose={() => setShowFeedback(false)}
            onSubmit={handleFeedbackSubmit}
          />
        )}
      </div>
    </div>
  );
}