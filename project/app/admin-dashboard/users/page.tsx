"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search, UserPlus } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, LogOut, Lock, UserCog, History } from "lucide-react";
import { toast } from "sonner";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

const mockUsers = [
  { 
    id: 1, 
    name: "John Doe", 
    email: "john@example.com", 
    role: "Admin", 
    status: "Active",
    lastActive: "2024-03-15T10:30:00",
    sessions: 2,
    type: "admin"
  },
  { 
    id: 2, 
    name: "Jane Smith", 
    email: "jane@example.com", 
    role: "HR Manager", 
    status: "Active",
    lastActive: "2024-03-15T09:45:00",
    sessions: 1,
    type: "hr"
  },
  { 
    id: 3, 
    name: "Mike Johnson", 
    email: "mike@example.com", 
    role: "Recruiter", 
    status: "Active",
    lastActive: "2024-03-15T08:30:00",
    sessions: 1,
    type: "hr"
  },
  { 
    id: 4, 
    name: "Sarah Wilson", 
    email: "sarah@example.com", 
    role: "Job Seeker", 
    status: "Active",
    lastActive: "2024-03-15T11:20:00",
    sessions: 1,
    type: "user"
  },
  { 
    id: 5, 
    name: "Tom Brown", 
    email: "tom@example.com", 
    role: "Job Seeker", 
    status: "Inactive",
    lastActive: "2024-03-14T15:30:00",
    sessions: 0,
    type: "user"
  }
];

export default function UsersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");

  // Add role filter options
  const roleOptions = [
    { value: "all", label: "All Roles" },
    { value: "admin", label: "Administrators" },
    { value: "hr", label: "HR Staff" },
    { value: "user", label: "Job Seekers" }
  ];

  // Filter users based on search and role
  const filteredUsers = mockUsers.filter(user => {
    const matchesSearch = 
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.role.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = roleFilter === "all" || user.type === roleFilter;
    return matchesSearch && matchesRole;
  });

  const handleForceLogout = (userId: number) => {
    toast.success("User has been logged out from all sessions");
  };

  const handleLockAccount = (userId: number) => {
    toast.success("Account has been locked");
  };

  const handleViewSessions = (userId: number) => {
    // Implement session viewing logic
  };

  return (
    <div className="container mx-auto p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">User Management</h1>
        <Button>
          <UserPlus className="mr-2 h-4 w-4" />
          Add User
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>System Users</CardTitle>
            <div className="flex items-center gap-4">
              <Select value={roleFilter} onValueChange={setRoleFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by role" />
                </SelectTrigger>
                <SelectContent>
                  {roleOptions.map(option => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="relative w-64">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search users..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Active</TableHead>
                <TableHead>Sessions</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Badge 
                      variant={
                        user.type === "admin" 
                          ? "default"
                          : user.type === "hr"
                          ? "secondary"
                          : "outline"
                      }
                    >
                      {user.role}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={user.status === "Active" ? "default" : "secondary"}>
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {new Date(user.lastActive).toLocaleString()}
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{user.sessions} active</Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => handleViewSessions(user.id)}>
                          <History className="mr-2 h-4 w-4" />
                          View Sessions
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleForceLogout(user.id)}>
                          <LogOut className="mr-2 h-4 w-4" />
                          Force Logout
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => handleLockAccount(user.id)}>
                          <Lock className="mr-2 h-4 w-4" />
                          Lock Account
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <UserCog className="mr-2 h-4 w-4" />
                          Edit User
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
