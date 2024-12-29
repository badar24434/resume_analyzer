"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { departments } from "@/lib/mock-data";
import { JobDescription } from "@/lib/types";

interface JobFormProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (job: Partial<JobDescription>) => void;
  initialData?: JobDescription;
}

export function JobForm({ open, onClose, onSubmit, initialData }: JobFormProps) {
  const [formData, setFormData] = useState<Partial<JobDescription>>(initialData || {
    title: "",
    department: "",
    requiredSkills: [],
    experienceLevel: "",
    status: "active",
    weightage: {
      experience: 0.4,
      skills: 0.4,
      education: 0.2
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{initialData ? "Edit Job" : "Add New Job"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Job Title</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="department">Department</Label>
            <Select
              value={formData.department}
              onValueChange={(value) => setFormData({ ...formData, department: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select department" />
              </SelectTrigger>
              <SelectContent>
                {departments.map((dept) => (
                  <SelectItem key={dept.id} value={dept.name}>
                    {dept.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="skills">Required Skills (comma-separated)</Label>
            <Input
              id="skills"
              value={formData.requiredSkills?.join(", ")}
              onChange={(e) => setFormData({
                ...formData,
                requiredSkills: e.target.value.split(",").map(s => s.trim())
              })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="experienceLevel">Experience Level</Label>
            <Select
              value={formData.experienceLevel}
              onValueChange={(value) => setFormData({ ...formData, experienceLevel: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Junior">Junior</SelectItem>
                <SelectItem value="Mid">Mid</SelectItem>
                <SelectItem value="Senior">Senior</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">
              {initialData ? "Update" : "Create"} Job
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}