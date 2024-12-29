"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { Users, Brain, LineChart } from "lucide-react";

export default function OnboardingPage() {
  const router = useRouter();

  const features = [
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "Applicant Management",
      description: "Efficiently organize and track job applicants in one centralized system."
    },
    {
      icon: <Brain className="h-12 w-12 text-primary" />,
      title: "Smart Analysis",
      description: "AI-powered resume analysis to match candidates with job requirements automatically."
    },
    {
      icon: <LineChart className="h-12 w-12 text-primary" />,
      title: "Performance Insights",
      description: "Get detailed analytics and insights about your hiring process and candidates."
    }
  ];

  return (
    <main className="min-h-screen bg-background flex items-center justify-center">
      <div className="container max-w-6xl p-8">
        <div className="text-center space-y-8 mb-12">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Welcome to Resume Analyzer
            </h1>
            <p className="text-xl text-muted-foreground md:text-2xl max-w-3xl mx-auto">
              Get started with our intelligent resume analysis platform
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 flex flex-col items-center text-center space-y-4">
              {feature.icon}
              <h2 className="text-xl font-semibold">{feature.title}</h2>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" onClick={() => router.push("/login")} className="px-8 py-6 text-lg">
            Get Started
          </Button>
        </div>
      </div>
    </main>
  );
}
