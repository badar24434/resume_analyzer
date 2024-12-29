"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, X, Save, Calendar } from "lucide-react";
import { toast } from "sonner";

export default function Profile() {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 234 567 890",
    bio: "Senior Software Engineer with 5+ years of experience...",
    skills: ["React", "TypeScript", "Node.js", "Next.js"],
    newSkill: "",
    experience: [
      {
        id: 1,
        title: "Senior Software Engineer",
        company: "Tech Corp",
        location: "New York, NY",
        startDate: "2022-01",
        endDate: "Present",
        description: "Led development of cloud-based solutions, managed team of 5 engineers, implemented CI/CD pipelines.",
      },
      {
        id: 2,
        title: "Full Stack Developer",
        company: "Web Solutions Inc",
        location: "Remote",
        startDate: "2019-03",
        endDate: "2021-12",
        description: "Developed and maintained multiple client projects using React, Node.js, and AWS.",
      },
      {
        id: 3,
        title: "Frontend Developer",
        company: "Digital Agency",
        location: "Boston, MA",
        startDate: "2017-06",
        endDate: "2019-02",
        description: "Built responsive web applications, improved site performance by 40%.",
      },
    ],
  });

  const [isEditing, setIsEditing] = useState(false);

  const addSkill = () => {
    if (profile.newSkill && !profile.skills.includes(profile.newSkill)) {
      setProfile(prev => ({
        ...prev,
        skills: [...prev.skills, prev.newSkill],
        newSkill: ""
      }));
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setProfile(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    toast.success("Profile updated successfully");
  };

  return (
    <div className="container mx-auto p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">My Profile</h1>
          <Button 
            onClick={() => isEditing ? handleSave() : setIsEditing(true)}
            variant={isEditing ? "default" : "outline"}
          >
            {isEditing ? (
              <>
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </>
            ) : (
              "Edit Profile"
            )}
          </Button>
        </div>

        <Tabs defaultValue="personal" className="space-y-6">
          <TabsList>
            <TabsTrigger value="personal">Personal Info</TabsTrigger>
            <TabsTrigger value="skills">Skills & Expertise</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
          </TabsList>

          <TabsContent value="personal">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-6">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src="/avatars/user.png" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  {isEditing && (
                    <Button variant="outline">Change Photo</Button>
                  )}
                </div>

                <div className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={profile.name}
                      onChange={e => setProfile(prev => ({ ...prev, name: e.target.value }))}
                      disabled={!isEditing}
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={profile.email}
                      onChange={e => setProfile(prev => ({ ...prev, email: e.target.value }))}
                      disabled={!isEditing}
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      value={profile.phone}
                      onChange={e => setProfile(prev => ({ ...prev, phone: e.target.value }))}
                      disabled={!isEditing}
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      value={profile.bio}
                      onChange={e => setProfile(prev => ({ ...prev, bio: e.target.value }))}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="skills">
            <Card>
              <CardHeader>
                <CardTitle>Skills & Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                {isEditing && (
                  <div className="flex gap-2 mb-4">
                    <Input
                      placeholder="Add a skill..."
                      value={profile.newSkill}
                      onChange={e => setProfile(prev => ({ ...prev, newSkill: e.target.value }))}
                      onKeyPress={e => e.key === 'Enter' && addSkill()}
                    />
                    <Button onClick={addSkill} size="icon">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {profile.skills.map(skill => (
                    <Badge key={skill} variant="secondary" className="text-sm">
                      {skill}
                      {isEditing && (
                        <button
                          onClick={() => removeSkill(skill)}
                          className="ml-2 hover:text-destructive"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      )}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="experience">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Work Experience</CardTitle>
                  {isEditing && (
                    <Button size="sm">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Experience
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {profile.experience.map((exp) => (
                    <div key={exp.id} className="relative">
                      {isEditing && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="absolute -right-2 -top-2"
                        >
                          Edit
                        </Button>
                      )}
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-lg">{exp.title}</h3>
                          <p className="text-muted-foreground">{exp.company}</p>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{exp.startDate} - {exp.endDate}</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{exp.location}</p>
                      <p className="mt-2 text-sm">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

        </Tabs>
      </div>
    </div>
  );
}
