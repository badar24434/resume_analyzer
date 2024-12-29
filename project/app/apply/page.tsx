"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Search, MapPin, DollarSign } from "lucide-react";

const jobs = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "Tech Corp",
    location: "New York, NY",
    salary: "$120k - $150k",
    type: "Full-time",
    tags: ["React", "Node.js", "TypeScript"],
    posted: "2 days ago",
    description: "We are looking for an experienced software engineer...",
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Web Solutions",
    location: "Remote",
    salary: "$90k - $110k",
    type: "Full-time",
    tags: ["React", "Next.js", "TailwindCSS"],
    posted: "1 week ago",
    description: "Join our team as a frontend developer...",
  },
  // Add more jobs as needed
];

export default function BrowseJobs() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  const handleSearch = (value: string) => {
    setSearch(value);
    const filtered = jobs.filter(job => 
      job.title.toLowerCase().includes(value.toLowerCase()) ||
      job.company.toLowerCase().includes(value.toLowerCase()) ||
      job.tags.some(tag => tag.toLowerCase().includes(value.toLowerCase()))
    );
    setFilteredJobs(filtered);
  };

  const handleApply = (job: typeof jobs[0]) => {
    router.push(`/apply/details?${new URLSearchParams({
      position: job.title,
      company: job.company,
      type: job.type,
      location: job.location,
      salary: job.salary,
      match: "95",
      posted: job.posted,
    }).toString()}`);
  };

  return (
    <div className="container mx-auto p-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">Browse Jobs</h1>
          <p className="text-muted-foreground">
            Find your next opportunity from our curated job listings
          </p>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search jobs by title, company, or skills..."
            className="pl-10"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>

        <div className="grid gap-4">
          {filteredJobs.map((job) => (
            <Card key={job.id} className="group hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-start justify-between space-y-0">
                <div className="space-y-1">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {job.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <Briefcase className="h-4 w-4" />
                    {job.company}
                  </p>
                </div>
                <Badge variant="secondary">{job.type}</Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4" />
                      {job.salary}
                    </span>
                  </div>
                  <p className="text-sm">{job.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      Posted {job.posted}
                    </span>
                    <Button onClick={() => handleApply(job)}>
                      Apply Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
