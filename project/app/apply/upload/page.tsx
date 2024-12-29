"use client";

import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Upload } from "lucide-react";

export default function UploadPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const position = searchParams.get("position");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle resume upload logic here
    router.push("/apply/upload/success");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <form onSubmit={handleSubmit} className="w-full max-w-xl space-y-6 bg-card p-8 rounded-lg border shadow-sm">
        <div className="space-y-2 text-center">
          <h2 className="text-2xl font-semibold">Upload Your Resume</h2>
          <p className="text-sm text-muted-foreground">
            Please upload your resume in PDF format
          </p>
        </div>

        <div className="space-y-4">
          <div className="grid w-full max-w-xl items-center gap-1.5">
            <Label htmlFor="resume">Resume</Label>
            <Input
              id="resume"
              type="file"
              accept=".pdf"
              required
              className="cursor-pointer"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <Button type="submit" className="w-32">
            Submit
            <Upload className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </form>
    </div>
  );
}
