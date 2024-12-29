"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Resume } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CandidatePotential } from "./candidate-potential";

interface CandidateDetailsProps {
  resume: Resume;
}

export function CandidateDetails({ resume }: CandidateDetailsProps) {
  return (
    <Tabs defaultValue="potential" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="potential">Growth Potential</TabsTrigger>
        <TabsTrigger value="skills">Skills & Experience</TabsTrigger>
      </TabsList>
      
      <TabsContent value="potential">
        <CandidatePotential resume={resume} />
      </TabsContent>
      
      <TabsContent value="skills">
        <Card>
          <CardHeader>
            <CardTitle>Skills & Experience</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-sm font-medium mb-2">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {resume.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-2">Experience</h3>
              <p className="text-sm text-muted-foreground">
                {resume.experience} years of experience in {resume.position}
              </p>
            </div>

            {resume.lastFeedback && (
              <div>
                <h3 className="text-sm font-medium mb-2">Last Feedback</h3>
                <p className="text-sm text-muted-foreground">
                  {resume.lastFeedback}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}