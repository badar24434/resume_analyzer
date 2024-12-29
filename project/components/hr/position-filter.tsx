"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { departments } from "@/lib/mock-data";

interface PositionFilterProps {
  selectedDepartment: string;
  onPositionChange: (position: string) => void;
}

export function PositionFilter({ selectedDepartment, onPositionChange }: PositionFilterProps) {
  const positions = selectedDepartment === "all"
    ? departments.flatMap(d => d.positions)
    : departments.find(d => d.name === selectedDepartment)?.positions || [];

  // Remove duplicates
  const uniquePositions = [...new Set(positions)];

  return (
    <Select onValueChange={onPositionChange}>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select Position" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All Positions</SelectItem>
        {uniquePositions.map((position) => (
          <SelectItem key={position} value={position}>
            {position}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
