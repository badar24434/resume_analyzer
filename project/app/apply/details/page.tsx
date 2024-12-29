"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function DetailsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const position = searchParams.get("position");
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const queryParams = new URLSearchParams({
      ...formData,
      position: position || ""
    }).toString();
    router.push(`/apply/upload?${queryParams}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <form onSubmit={handleSubmit} className="w-full max-w-xl space-y-6 bg-card p-8 rounded-lg border shadow-sm">
        <div className="space-y-2 text-center">
          <h2 className="text-2xl font-semibold">Personal Details</h2>
          <p className="text-sm text-muted-foreground">
            Applying for: {position}
          </p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              required
              value={formData.name}
              onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
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
            <Label htmlFor="experience">Years of Experience</Label>
            <Input
              id="experience"
              type="number"
              required
              min="0"
              value={formData.experience}
              onChange={e => setFormData(prev => ({ ...prev, experience: e.target.value }))}
            />
          </div>
        </div>

        <div className="flex justify-end">
          <Button type="submit" className="w-32">
            Continue
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </form>
    </div>
  );
}
