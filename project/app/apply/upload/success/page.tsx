
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SuccessPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="max-w-md w-full">
        <CardContent className="pt-6 text-center space-y-4">
          <CheckCircle className="mx-auto h-12 w-12 text-green-500" />
          <h1 className="text-2xl font-semibold">Thank You!</h1>
          <p className="text-muted-foreground">
            Your resume has been successfully submitted. Our HR team will review it and get back to you soon.
          </p>
          <div className="flex justify-center space-x-4 pt-4">
            <Button onClick={() => router.push("/user-dashboard")}>
              View Application Status
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}