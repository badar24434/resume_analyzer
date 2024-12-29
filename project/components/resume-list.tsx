"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Eye, MessageSquare } from "lucide-react";
import { Resume } from "@/lib/types";

interface ResumeListProps {
  resumes: Resume[];
  onSelectResume: (resume: Resume) => void;
  onFeedback: (resume: Resume) => void;
}

export function ResumeList({ resumes, onSelectResume, onFeedback }: ResumeListProps) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Position</TableHead>
            <TableHead>Skills Match</TableHead>
            <TableHead>Experience</TableHead>
            <TableHead>Score</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {resumes
            .sort((a, b) => b.score - a.score)
            .map((resume) => (
              <TableRow 
                key={resume.id}
                className="cursor-pointer hover:bg-muted/50"
                onClick={() => onSelectResume(resume)}
              >
                <TableCell className="font-medium">{resume.name}</TableCell>
                <TableCell>{resume.position}</TableCell>
                <TableCell>
                  <Badge variant={resume.skillsMatch >= 80 ? "default" : "secondary"}>
                    {resume.skillsMatch}%
                  </Badge>
                </TableCell>
                <TableCell>{resume.experience} years</TableCell>
                <TableCell>
                  <Badge variant={resume.score >= 8 ? "default" : "secondary"}>
                    {resume.score}/10
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="icon" onClick={(e) => {
                      e.stopPropagation();
                      onFeedback(resume);
                    }}>
                      <MessageSquare className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" onClick={(e) => {
                      e.stopPropagation();
                      window.open(resume.pdfUrl, '_blank');
                    }}>
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}