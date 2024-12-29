"use client";

import { UserNavbar } from "@/components/user-navbar";
import { PageTransition } from "@/components/page-transition";

export default function UserDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <UserNavbar />
      <main className="flex-1 relative">
        <div className="absolute inset-0">
          <PageTransition>{children}</PageTransition>
        </div>
      </main>
    </div>
  );
}