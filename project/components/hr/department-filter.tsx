"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { departments } from "@/lib/mock-data";

interface DepartmentFilterProps {
  onDepartmentChange: (department: string) => void;
}

export function DepartmentFilter({ onDepartmentChange }: DepartmentFilterProps) {
  return (
    <Select onValueChange={onDepartmentChange}>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select Department" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All Departments</SelectItem>
        {departments.map((dept) => (
          <SelectItem key={dept.id} value={dept.name}>
            {dept.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}