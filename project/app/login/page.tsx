"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { authenticateUser, getInitialRedirectPath } from "@/lib/auth";
import { LoginForm } from "@/components/login-form";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      const username = formData.get('username') as string;
      const password = formData.get('password') as string;
      
      const user = await authenticateUser(username, password);
      
      if (user) {
        const redirectPath = getInitialRedirectPath(user.role);
        await router.push(redirectPath);
      } else {
        setError("Invalid credentials");
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred during login");
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <LoginForm onSubmit={handleSubmit} error={error} />
    </div>
  );
}
