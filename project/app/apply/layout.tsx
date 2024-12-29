"use client";

import { UserNavbar } from "@/components/user-navbar";

export default function ApplyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <UserNavbar />
      <main className="flex-1">{children}</main>
    </div>
  );
}
