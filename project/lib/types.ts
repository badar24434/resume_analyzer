export interface Resume {
  id: string;
  name: string;
  position: string;
  skillsMatch: number;
  experience: number;
  score: number;
  pdfUrl: string;
  potentialScore?: number;
  feedback?: string;
  skills: string[];
  lastFeedback?: string;
  growthPotential?: {
    leadership: number;
    technical: number;
    communication: number;
  };
  applicationDate: string; // ISO date string
  applicationStatus?: ApplicationStatus;
  statusTimeline?: {
    submitted: string;
    in_review?: string;
    feedback_given?: string;
    shortlisted?: string;
    rejected?: string;
  };
  recruitmentProgress?: number; // 0-100
}

export type ApplicationStatus = 'submitted' | 'in_review' | 'feedback_given' | 'shortlisted' | 'rejected';

export interface JobDescription {
  id: string;
  title: string;
  department: string;
  requiredSkills: string[];
  experienceLevel: string;
  status: 'active' | 'closed';
  weightage: {
    experience: number;
    skills: number;
    education: number;
  };
}

export interface Department {
  id: string;
  name: string;
  positions: string[];
}

export type FeedbackType = 'positive' | 'negative' | 'neutral';

export interface SystemStatus {
  totalUsers: number;
  activeUploads: number;
  systemHealth: string;
  lastUpdated: string;
}
export type DecisionType = 'proceed' | 'reject' | 'pending';

export interface FeedbackDialogProps {
  resume: Resume;
  open: boolean;
  onClose: () => void;
  onSubmit: (feedback: string, feedbackType: FeedbackType, decision: DecisionType) => void;
}