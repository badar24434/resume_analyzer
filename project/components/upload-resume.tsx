"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

interface UploadResumeProps {
  open: boolean;
  onClose: () => void;
}

export function UploadResume({ open, onClose }: UploadResumeProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload Resumes</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="resumes">Select Resume Files</Label>
            <Input
              id="resumes"
              type="file"
              multiple
              accept=".pdf,.doc,.docx"
              className="cursor-pointer"
            />
          </div>
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button>
              <Upload className="mr-2 h-4 w-4" />
              Upload
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}