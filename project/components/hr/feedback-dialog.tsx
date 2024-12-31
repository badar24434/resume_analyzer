"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Resume, FeedbackType, DecisionType, FeedbackDialogProps } from "@/lib/types";
import { Check, X, Clock } from "lucide-react";

export function FeedbackDialog({ resume, open, onClose, onSubmit }: FeedbackDialogProps) {
  const [feedback, setFeedback] = useState("");
  const [feedbackType, setFeedbackType] = useState<FeedbackType>("neutral");
  const [decision, setDecision] = useState<DecisionType>("pending");

  const handleSubmit = () => {
    onSubmit(feedback, feedbackType, decision);
    setFeedback("");
    setFeedbackType("neutral");
    setDecision("pending");
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Provide Feedback for {resume.name}</DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Decision</label>
              <div className="flex space-x-2 mt-2">
                <Button
                  variant={decision === "proceed" ? "default" : "outline"}
                  onClick={() => setDecision("proceed")}
                  className="flex-1"
                >
                  <Check className="mr-2 h-4 w-4" />
                  Proceed
                </Button>
                <Button
                  variant={decision === "reject" ? "default" : "outline"}
                  onClick={() => setDecision("reject")}
                  className="flex-1"
                >
                  <X className="mr-2 h-4 w-4" />
                  Reject
                </Button>
                <Button
                  variant={decision === "pending" ? "default" : "outline"}
                  onClick={() => setDecision("pending")}
                  className="flex-1"
                >
                  <Clock className="mr-2 h-4 w-4" />
                  Pending
                </Button>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Feedback Type</label>
              <div className="flex space-x-2 mt-2">
                <Button
                  variant={feedbackType === "positive" ? "default" : "outline"}
                  onClick={() => setFeedbackType("positive")}
                >
                  Positive
                </Button>
                <Button
                  variant={feedbackType === "neutral" ? "default" : "outline"}
                  onClick={() => setFeedbackType("neutral")}
                >
                  Neutral
                </Button>
                <Button
                  variant={feedbackType === "negative" ? "default" : "outline"}
                  onClick={() => setFeedbackType("negative")}
                >
                  Negative
                </Button>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Feedback Comments</label>
            <Textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Enter your feedback..."
              className="min-h-[100px]"
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>Submit Feedback</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}