"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Resume } from "@/lib/types";
import { Progress } from "@/components/ui/progress";
import { GrowthProjection } from "./growth-projection";

interface CandidatePotentialProps {
  resume: Resume;
}

export function CandidatePotential({ resume }: CandidatePotentialProps) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Growth Potential Analysis</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">Leadership Potential</span>
              <span className="text-sm text-muted-foreground">
                {resume.growthPotential?.leadership}%
              </span>
            </div>
            <Progress value={resume.growthPotential?.leadership} />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">Technical Growth</span>
              <span className="text-sm text-muted-foreground">
                {resume.growthPotential?.technical}%
              </span>
            </div>
            <Progress value={resume.growthPotential?.technical} />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">Communication Skills</span>
              <span className="text-sm text-muted-foreground">
                {resume.growthPotential?.communication}%
              </span>
            </div>
            <Progress value={resume.growthPotential?.communication} />
          </div>
        </CardContent>
      </Card>
      
      <GrowthProjection resume={resume} />
    </div>
  );
}