"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  FileText, 
  MessageSquare, 
  BarChart,
  LogOut
} from "lucide-react";

export default function HRDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const routes = [
    {
      href: "/hr-dashboard",
      label: "Applications",
      icon: <FileText className="h-4 w-4" />
    },
    {
      href: "/hr-dashboard/analytics",
      label: "Analytics",
      icon: <BarChart className="h-4 w-4" />
    },
    {
      href: "/hr-dashboard/candidates",
      label: "Candidates",
      icon: <Users className="h-4 w-4" />
    },
    {
      href: "/hr-dashboard/messages",
      label: "Messages",
      icon: <MessageSquare className="h-4 w-4" />
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 md:flex">
            <Link href="/hr-dashboard" className="flex items-center space-x-2">
                <span className="font-bold ml-2">HR Dashboard</span>
            </Link>
          </div>
          <nav className="flex items-center space-x-4 lg:space-x-6 mx-6">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary",
                  pathname === route.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {route.icon}
                <span>{route.label}</span>
              </Link>
            ))}
          </nav>
          <div className="ml-auto flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-red-600" 
              onClick={() => {
                // Add logout logic here
                router.push("/login");
              }}
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}