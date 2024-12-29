"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { 
  User
} from "lucide-react";

const routes = [
  {
    href: "/profile",
    label: "Profile",
    icon: <User className="h-4 w-4" />
  }
];

export function MainNav() {
  const pathname = usePathname();
  
  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "flex items-center space-x-2 text-sm transition-colors hover:text-primary",
            "py-2 px-3 rounded-md hover:bg-accent",
            pathname === route.href
              ? "text-primary font-medium bg-accent"
              : "text-muted-foreground"
          )}
        >
          <span className="transition-transform duration-200 group-hover:scale-110">
            {route.icon}
          </span>
          <span>{route.label}</span>
        </Link>
      ))}
    </nav>
  );
}
