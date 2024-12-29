import { Resume, JobDescription, Department } from "./types";

export const departments: Department[] = [
  {
    id: "1",
    name: "Engineering",
    positions: ["Frontend Developer", "Backend Engineer", "Full Stack Developer", "DevOps Engineer"]
  },
  {
    id: "2",
    name: "Design",
    positions: ["UI Designer", "UX Designer", "Product Designer"]
  },
  {
    id: "3",
    name: "Marketing",
    positions: ["Marketing Manager", "Content Writer", "SEO Specialist"]
  }
];

export const jobDescriptions: JobDescription[] = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    department: "Engineering",
    requiredSkills: ["React", "TypeScript", "CSS", "Testing"],
    experienceLevel: "Senior",
    status: "active",
    weightage: {
      experience: 0.4,
      skills: 0.4,
      education: 0.2
    }
  },
  {
    id: "2",
    title: "UX Designer",
    department: "Design",
    requiredSkills: ["Figma", "User Research", "Prototyping"],
    experienceLevel: "Mid",
    status: "active",
    weightage: {
      experience: 0.3,
      skills: 0.5,
      education: 0.2
    }
  }
];

export const mockResumes: Resume[] = [
  // Frontend Developers
  {
    id: "FE001",
    name: "John Smith",
    position: "Frontend Developer",
    skillsMatch: 95,
    experience: 8,
    score: 9.5,
    pdfUrl: "/resumes/john-smith.pdf",
    skills: ["React", "TypeScript", "Node.js", "AWS"],
    growthPotential: {
      leadership: 85,
      technical: 90,
      communication: 80
    },
    applicationDate: ""
  },
  {
    id: "FE002",
    name: "Emily Zhang",
    position: "Frontend Developer",
    skillsMatch: 91,
    experience: 5,
    score: 8.8,
    pdfUrl: "/resumes/emily-zhang.pdf",
    skills: ["React", "Vue.js", "TypeScript", "GraphQL"],
    growthPotential: {
      leadership: 82,
      technical: 89,
      communication: 88
    },
    applicationDate: ""
  },
  {
    id: "FE003",
    name: "Daniel Park",
    position: "Frontend Developer",
    skillsMatch: 86,
    experience: 3,
    score: 8.1,
    pdfUrl: "/resumes/daniel-park.pdf",
    skills: ["Angular", "JavaScript", "CSS3", "Web Components"],
    growthPotential: {
      leadership: 75,
      technical: 84,
      communication: 82
    },
    applicationDate: ""
  },
  {
    id: "FE004",
    name: "Sofia Rodriguez",
    position: "Frontend Developer",
    skillsMatch: 93,
    experience: 6,
    score: 9.0,
    pdfUrl: "/resumes/sofia-rodriguez.pdf",
    skills: ["React", "Next.js", "TailwindCSS", "Redux"],
    growthPotential: {
      leadership: 85,
      technical: 92,
      communication: 88
    },
    applicationDate: ""
  },
  {
    id: "FE005",
    name: "Alex Thompson",
    position: "Frontend Developer",
    skillsMatch: 88,
    experience: 4,
    score: 8.4,
    pdfUrl: "/resumes/alex-thompson.pdf",
    skills: ["Vue.js", "JavaScript", "Sass", "WebGL"],
    growthPotential: {
      leadership: 70,
      technical: 86,
      communication: 85
    },
    applicationDate: ""
  },

  // Backend Engineers
  {
    id: "BE001",
    name: "Michael Chen",
    position: "Backend Engineer",
    skillsMatch: 92,
    experience: 6,
    score: 8.8,
    pdfUrl: "/resumes/michael-chen.pdf",
    skills: ["Python", "Django", "PostgreSQL", "Docker"],
    lastFeedback: "Strong problem-solving skills demonstrated during technical interview",
    growthPotential: {
      leadership: 80,
      technical: 95,
      communication: 75
    },
    applicationDate: ""
  },
  {
    id: "BE002",
    name: "Raj Patel",
    position: "Backend Engineer",
    skillsMatch: 89,
    experience: 4,
    score: 8.5,
    pdfUrl: "/resumes/raj-patel.pdf",
    skills: ["Java", "Spring Boot", "MySQL", "Redis"],
    growthPotential: {
      leadership: 78,
      technical: 88,
      communication: 82
    },
    applicationDate: ""
  },
  {
    id: "BE003",
    name: "Anna Kowalski",
    position: "Backend Engineer",
    skillsMatch: 94,
    experience: 7,
    score: 9.2,
    pdfUrl: "/resumes/anna-kowalski.pdf",
    skills: ["Go", "gRPC", "PostgreSQL", "Kubernetes"],
    growthPotential: {
      leadership: 88,
      technical: 95,
      communication: 85
    },
    applicationDate: ""
  },
  {
    id: "BE004",
    name: "Lucas Silva",
    position: "Backend Engineer",
    skillsMatch: 87,
    experience: 5,
    score: 8.4,
    pdfUrl: "/resumes/lucas-silva.pdf",
    skills: ["Node.js", "Express", "MongoDB", "GraphQL"],
    growthPotential: {
      leadership: 80,
      technical: 86,
      communication: 84
    },
    applicationDate: ""
  },

  // Full Stack Developers
  {
    id: "FS001",
    name: "James Wilson",
    position: "Full Stack Developer",
    skillsMatch: 89,
    experience: 5,
    score: 8.7,
    pdfUrl: "/resumes/james-wilson.pdf",
    skills: ["React", "Node.js", "MongoDB", "TypeScript"],
    growthPotential: {
      leadership: 75,
      technical: 88,
      communication: 82
    },
    applicationDate: ""
  },
  {
    id: "FS002",
    name: "Aisha Khan",
    position: "Full Stack Developer",
    skillsMatch: 92,
    experience: 6,
    score: 9.1,
    pdfUrl: "/resumes/aisha-khan.pdf",
    skills: ["React", "Node.js", "PostgreSQL", "AWS"],
    growthPotential: {
      leadership: 85,
      technical: 92,
      communication: 88
    },
    applicationDate: ""
  },
  {
    id: "FS003",
    name: "Marco Rossi",
    position: "Full Stack Developer",
    skillsMatch: 88,
    experience: 4,
    score: 8.6,
    pdfUrl: "/resumes/marco-rossi.pdf",
    skills: ["Vue.js", "Python", "Django", "Docker"],
    growthPotential: {
      leadership: 78,
      technical: 89,
      communication: 84
    },
    applicationDate: ""
  },
  {
    id: "FS004",
    name: "Sarah O'Connor",
    position: "Full Stack Developer",
    skillsMatch: 90,
    experience: 5,
    score: 8.9,
    pdfUrl: "/resumes/sarah-oconnor.pdf",
    skills: ["Angular", "Java", "Spring Boot", "Jenkins"],
    growthPotential: {
      leadership: 82,
      technical: 90,
      communication: 86
    },
    applicationDate: ""
  },

  // DevOps Engineers
  {
    id: "DO001",
    name: "David Kim",
    position: "DevOps Engineer",
    skillsMatch: 90,
    experience: 7,
    score: 9.0,
    pdfUrl: "/resumes/david-kim.pdf",
    skills: ["Kubernetes", "AWS", "Terraform", "CI/CD"],
    growthPotential: {
      leadership: 85,
      technical: 92,
      communication: 78
    },
    applicationDate: ""
  },
  {
    id: "DO002",
    name: "Mohammed Ahmed",
    position: "DevOps Engineer",
    skillsMatch: 93,
    experience: 6,
    score: 9.1,
    pdfUrl: "/resumes/mohammed-ahmed.pdf",
    skills: ["Kubernetes", "Terraform", "AWS", "Ansible"],
    growthPotential: {
      leadership: 88,
      technical: 93,
      communication: 85
    },
    applicationDate: ""
  },
  {
    id: "DO003",
    name: "Julia Schmidt",
    position: "DevOps Engineer",
    skillsMatch: 87,
    experience: 4,
    score: 8.5,
    pdfUrl: "/resumes/julia-schmidt.pdf",
    skills: ["Docker", "Jenkins", "Azure", "Python"],
    growthPotential: {
      leadership: 80,
      technical: 88,
      communication: 86
    },
    applicationDate: ""
  },
  {
    id: "DO004",
    name: "Trevor Barnes",
    position: "DevOps Engineer",
    skillsMatch: 91,
    experience: 8,
    score: 9.0,
    pdfUrl: "/resumes/trevor-barnes.pdf",
    skills: ["GCP", "GitLab CI", "Prometheus", "Grafana"],
    growthPotential: {
      leadership: 90,
      technical: 92,
      communication: 84
    },
    applicationDate: ""
  },

  // UI Designers
  {
    id: "UI001",
    name: "Nina Patel",
    position: "UI Designer",
    skillsMatch: 92,
    experience: 6,
    score: 8.9,
    pdfUrl: "/resumes/nina-patel.pdf",
    skills: ["Adobe CC", "Motion Design", "Design Systems", "Typography"],
    growthPotential: {
      leadership: 78,
      technical: 92,
      communication: 88
    },
    applicationDate: ""
  },
  {
    id: "UI002",
    name: "Leo Kim",
    position: "UI Designer",
    skillsMatch: 89,
    experience: 4,
    score: 8.7,
    pdfUrl: "/resumes/leo-kim.pdf",
    skills: ["Figma", "Sketch", "Principle", "Webflow"],
    growthPotential: {
      leadership: 75,
      technical: 90,
      communication: 88
    },
    applicationDate: ""
  },
  {
    id: "UI003",
    name: "Isabella Martinez",
    position: "UI Designer",
    skillsMatch: 94,
    experience: 7,
    score: 9.2,
    pdfUrl: "/resumes/isabella-martinez.pdf",
    skills: ["Adobe XD", "Illustrator", "After Effects", "Design Systems"],
    growthPotential: {
      leadership: 85,
      technical: 94,
      communication: 90
    },
    applicationDate: ""
  },
  {
    id: "UI004",
    name: "Oliver Wright",
    position: "UI Designer",
    skillsMatch: 88,
    experience: 3,
    score: 8.4,
    pdfUrl: "/resumes/oliver-wright.pdf",
    skills: ["Figma", "Framer", "Protopie", "Typography"],
    growthPotential: {
      leadership: 72,
      technical: 88,
      communication: 86
    },
    applicationDate: ""
  },

  // UX Designers
  {
    id: "UX001",
    name: "Sarah Johnson",
    position: "UX Designer",
    skillsMatch: 85,
    experience: 5,
    score: 8.2,
    pdfUrl: "/resumes/sarah-johnson.pdf",
    skills: ["Figma", "User Research", "Adobe XD"],
    growthPotential: {
      leadership: 75,
      technical: 85,
      communication: 90
    },
    applicationDate: ""
  },
  {
    id: "UX002",
    name: "Jordan Lee",
    position: "UX Designer",
    skillsMatch: 91,
    experience: 6,
    score: 8.8,
    pdfUrl: "/resumes/jordan-lee.pdf",
    skills: ["User Research", "Wireframing", "Usability Testing", "Information Architecture"],
    growthPotential: {
      leadership: 82,
      technical: 88,
      communication: 92
    },
    applicationDate: ""
  },
  {
    id: "UX003",
    name: "Andrea Wilson",
    position: "UX Designer",
    skillsMatch: 88,
    experience: 4,
    score: 8.4,
    pdfUrl: "/resumes/andrea-wilson.pdf",
    skills: ["User Flows", "Prototyping", "A/B Testing", "Design Thinking"],
    growthPotential: {
      leadership: 78,
      technical: 86,
      communication: 89
    },
    applicationDate: ""
  },
  {
    id: "UX004",
    name: "Thomas Chen",
    position: "UX Designer",
    skillsMatch: 93,
    experience: 7,
    score: 9.1,
    pdfUrl: "/resumes/thomas-chen.pdf",
    skills: ["Figma", "UX Research", "Design Systems", "User Journey Mapping"],
    growthPotential: {
      leadership: 86,
      technical: 91,
      communication: 88
    },
    applicationDate: ""
  },
  {
    id: "UX005",
    name: "Maria Garcia",
    position: "UX Designer",
    skillsMatch: 87,
    experience: 5,
    score: 8.6,
    pdfUrl: "/resumes/maria-garcia.pdf",
    skills: ["User Testing", "Interaction Design", "Accessibility", "Design Sprints"],
    growthPotential: {
      leadership: 80,
      technical: 87,
      communication: 91
    },
    applicationDate: ""
  },

  // Product Designers
  {
    id: "PD001",
    name: "Emma Rodriguez",
    position: "Product Designer",
    skillsMatch: 88,
    experience: 4,
    score: 8.5,
    pdfUrl: "/resumes/emma-rodriguez.pdf",
    skills: ["Figma", "Sketch", "Design Systems", "Prototyping"],
    lastFeedback: "Excellent portfolio showcasing user-centered design approach",
    growthPotential: {
      leadership: 70,
      technical: 85,
      communication: 95
    },
    applicationDate: ""
  },
  {
    id: "PD002",
    name: "Kevin Park",
    position: "Product Designer",
    skillsMatch: 90,
    experience: 5,
    score: 8.7,
    pdfUrl: "/resumes/kevin-park.pdf",
    skills: ["UI/UX", "Product Strategy", "Design Systems", "User Research"],
    growthPotential: {
      leadership: 82,
      technical: 88,
      communication: 85
    },
    applicationDate: ""
  },
  {
    id: "PD003",
    name: "Sophie Bennett",
    position: "Product Designer",
    skillsMatch: 92,
    experience: 6,
    score: 8.9,
    pdfUrl: "/resumes/sophie-bennett.pdf",
    skills: ["Design Thinking", "User Testing", "Prototyping", "Visual Design"],
    growthPotential: {
      leadership: 84,
      technical: 90,
      communication: 88
    },
    applicationDate: ""
  },
  {
    id: "PD004",
    name: "Ryan Murphy",
    position: "Product Designer",
    skillsMatch: 86,
    experience: 4,
    score: 8.3,
    pdfUrl: "/resumes/ryan-murphy.pdf",
    skills: ["Wireframing", "User Flows", "Design Systems", "Sketch"],
    growthPotential: {
      leadership: 75,
      technical: 85,
      communication: 87
    },
    applicationDate: ""
  },
  {
    id: "PD005",
    name: "Priya Sharma",
    position: "Product Designer",
    skillsMatch: 89,
    experience: 5,
    score: 8.6,
    pdfUrl: "/resumes/priya-sharma.pdf",
    skills: ["Product Strategy", "Design Thinking", "User Research", "Prototyping"],
    growthPotential: {
      leadership: 80,
      technical: 87,
      communication: 89
    },
    applicationDate: ""
  },

  // Marketing Managers
  {
    id: "MM001",
    name: "Lisa Wang",
    position: "Marketing Manager",
    skillsMatch: 87,
    experience: 6,
    score: 8.4,
    pdfUrl: "/resumes/lisa-wang.pdf",
    skills: ["Digital Marketing", "Analytics", "Content Strategy", "SEO"],
    lastFeedback: "Strong track record in growth marketing",
    growthPotential: {
      leadership: 88,
      technical: 75,
      communication: 92
    },
    applicationDate: ""
  },
  {
    id: "MM002",
    name: "Rachel Cohen",
    position: "Marketing Manager",
    skillsMatch: 91,
    experience: 7,
    score: 8.9,
    pdfUrl: "/resumes/rachel-cohen.pdf",
    skills: ["Brand Strategy", "Campaign Management", "Market Research", "Team Leadership"],
    growthPotential: {
      leadership: 92,
      technical: 82,
      communication: 90
    },
    applicationDate: ""
  },
  {
    id: "MM003",
    name: "Daniel Brown",
    position: "Marketing Manager",
    skillsMatch: 93,
    experience: 8,
    score: 9.1,
    pdfUrl: "/resumes/daniel-brown.pdf",
    skills: ["Digital Marketing", "Team Leadership", "Strategy Development", "Analytics"],
    growthPotential: {
      leadership: 90,
      technical: 85,
      communication: 92
    },
    applicationDate: ""
  },
  {
    id: "MM004",
    name: "Jennifer Liu",
    position: "Marketing Manager",
    skillsMatch: 88,
    experience: 5,
    score: 8.6,
    pdfUrl: "/resumes/jennifer-liu.pdf",
    skills: ["Campaign Management", "Social Media", "Content Strategy", "Budget Planning"],
    growthPotential: {
      leadership: 85,
      technical: 80,
      communication: 89
    },
    applicationDate: ""
  },
  {
    id: "MM005",
    name: "Michael Ross",
    position: "Marketing Manager",
    skillsMatch: 90,
    experience: 6,
    score: 8.8,
    pdfUrl: "/resumes/michael-ross.pdf",
    skills: ["Brand Management", "Marketing Analytics", "Team Leadership", "Strategic Planning"],
    growthPotential: {
      leadership: 88,
      technical: 83,
      communication: 91
    },
    applicationDate: ""
  },

  // Content Writers
  {
    id: "CW001",
    name: "Maya Patel",
    position: "Content Writer",
    skillsMatch: 83,
    experience: 3,
    score: 7.9,
    pdfUrl: "/resumes/maya-patel.pdf",
    skills: ["Content Strategy", "SEO Writing", "Social Media", "Copywriting"],
    growthPotential: {
      leadership: 72,
      technical: 80,
      communication: 95
    },
    applicationDate: ""
  },
  {
    id: "CW002",
    name: "Jack Anderson",
    position: "Content Writer",
    skillsMatch: 88,
    experience: 4,
    score: 8.2,
    pdfUrl: "/resumes/jack-anderson.pdf",
    skills: ["Blog Writing", "Content Strategy", "SEO", "Social Media"],
    growthPotential: {
      leadership: 75,
      technical: 82,
      communication: 92
    },
    applicationDate: ""
  },
  {
    id: "CW003",
    name: "Elena Torres",
    position: "Content Writer",
    skillsMatch: 85,
    experience: 3,
    score: 8.0,
    pdfUrl: "/resumes/elena-torres.pdf",
    skills: ["Technical Writing", "Content Marketing", "Editing", "Research"],
    growthPotential: {
      leadership: 70,
      technical: 85,
      communication: 90
    },
    applicationDate: ""
  },
  {
    id: "CW004",
    name: "David Foster",
    position: "Content Writer",
    skillsMatch: 87,
    experience: 5,
    score: 8.4,
    pdfUrl: "/resumes/david-foster.pdf",
    skills: ["Copywriting", "Brand Voice", "Content Strategy", "Marketing"],
    growthPotential: {
      leadership: 78,
      technical: 83,
      communication: 93
    },
    applicationDate: ""
  },
  {
    id: "CW005",
    name: "Alice Zhang",
    position: "Content Writer",
    skillsMatch: 89,
    experience: 4,
    score: 8.5,
    pdfUrl: "/resumes/alice-zhang.pdf",
    skills: ["Blog Writing", "Social Media", "SEO", "Content Marketing"],
    growthPotential: {
      leadership: 76,
      technical: 84,
      communication: 94
    },
    applicationDate: ""
  },

  // SEO Specialists
  {
    id: "SEO001",
    name: "Chris Martinez",
    position: "SEO Specialist",
    skillsMatch: 94,
    experience: 5,
    score: 8.8,
    pdfUrl: "/resumes/chris-martinez.pdf",
    skills: ["Technical SEO", "Google Analytics", "Content Strategy", "Link Building"],
    growthPotential: {
      leadership: 75,
      technical: 90,
      communication: 85
    },
    applicationDate: ""
  },
  {
    id: "SEO002",
    name: "Sam Wilson",
    position: "SEO Specialist",
    skillsMatch: 90,
    experience: 4,
    score: 8.6,
    pdfUrl: "/resumes/sam-wilson.pdf",
    skills: ["On-page SEO", "Google Analytics", "Keyword Research", "SEO Tools"],
    growthPotential: {
      leadership: 78,
      technical: 88,
      communication: 84
    },
    applicationDate: ""
  },
  {
    id: "SEO003",
    name: "Laura Chen",
    position: "SEO Specialist",
    skillsMatch: 92,
    experience: 6,
    score: 8.9,
    pdfUrl: "/resumes/laura-chen.pdf",
    skills: ["Technical SEO", "Link Building", "Content Strategy", "Analytics"],
    growthPotential: {
      leadership: 82,
      technical: 91,
      communication: 86
    },
    applicationDate: ""
  },
  {
    id: "SEO004",
    name: "Mark Thompson",
    position: "SEO Specialist",
    skillsMatch: 87,
    experience: 3,
    score: 8.3,
    pdfUrl: "/resumes/mark-thompson.pdf",
    skills: ["Local SEO", "Content Optimization", "Keyword Research", "SEO Auditing"],
    growthPotential: {
      leadership: 74,
      technical: 86,
      communication: 88
    },
    applicationDate: ""
  },
  {
    id: "SEO005",
    name: "Diana Lee",
    position: "SEO Specialist",
    skillsMatch: 91,
    experience: 5,
    score: 8.7,
    pdfUrl: "/resumes/diana-lee.pdf",
    skills: ["Technical SEO", "Analytics", "Content Strategy", "SEO Tools"],
    growthPotential: {
      leadership: 80,
      technical: 89,
      communication: 85
    },
    applicationDate: ""
  }
];