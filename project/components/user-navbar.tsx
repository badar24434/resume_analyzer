"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Badge } from "@/components/ui/badge";
import { Bell, LogOut, Settings, User, Search, Menu } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  HoverCard,
  HoverCardContent, 
  HoverCardTrigger
} from "@/components/ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export function UserNavbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigationItems = [
    { 
      href: "/user-dashboard", 
      label: "Dashboard",
      description: "Overview of your applications and status",
      icon: "grid" 
    },
    { 
      href: "/user-dashboard/applications", 
      label: "My Applications",
      description: "Track your submitted applications",
      icon: "file-text"
    },
    { 
      href: "/apply", 
      label: "Browse Jobs",
      description: "Find and apply for new positions",
      icon: "search"
    },
    { 
      href: "/user-dashboard/messages", 
      label: "Messages",
      description: "Communication with HR and recruiters",
      icon: "mail"
    },
  ];

  const userNotifications = [
    { id: 1, title: "Application Review", message: "Your resume has been reviewed" },
    { id: 2, title: "New Position", message: "New job matching your profile" }
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-8">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[280px]">
              <div className="flex flex-col gap-4 py-4">
                {navigationItems.map((item) => (
                  <Button
                    key={item.href}
                    variant="ghost"
                    className="justify-start"
                    onClick={() => {
                      router.push(item.href);
                      setMobileOpen(false);
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </div>
            </SheetContent>
          </Sheet>

          <Link href="/user-dashboard" className="flex items-center space-x-2">
            <div className="rounded-lg bg-primary/10 p-1">
              <User className="h-6 w-6 text-primary" />
            </div>
            <span className="hidden md:inline-block text-lg font-bold bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
              Resume Analyzer
            </span>
          </Link>

          <div className="hidden lg:flex">
            <NavigationMenu>
              <NavigationMenuList>
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.href}>
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <Link href={item.href} legacyBehavior passHref>
                          <NavigationMenuLink className={cn(
                            navigationMenuTriggerStyle(),
                            'transition-all duration-200 hover:scale-105',
                            pathname === item.href && 'bg-accent text-accent-foreground'
                          )}>
                            {item.label}
                          </NavigationMenuLink>
                        </Link>
                      </HoverCardTrigger>
                      <HoverCardContent align="start" className="w-[240px] text-sm">
                        <div className="font-medium">{item.label}</div>
                        <p className="text-muted-foreground mt-1">
                          {item.description || `View your ${item.label.toLowerCase()}`}
                        </p>
                      </HoverCardContent>
                    </HoverCard>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex relative">
            <div className="relative group">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
              <Input 
                placeholder="Search jobs..." 
                className="pl-8 w-[200px] focus:w-[300px] transition-all bg-muted/50 border-0 focus-visible:ring-1"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative animate-pulse">
                  <Bell className="h-5 w-5" />
                  <Badge
                    variant="destructive"
                    className="absolute -right-1 -top-1 h-4 w-4 p-0 text-[10px] flex items-center justify-center"
                  >
                    {userNotifications.length}
                  </Badge>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[300px]">
                <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {userNotifications.map((notification) => (
                  <DropdownMenuItem key={notification.id} className="cursor-pointer">
                    <div className="flex flex-col gap-1">
                      <span className="font-medium">{notification.title}</span>
                      <span className="text-sm text-muted-foreground">
                        {notification.message}
                      </span>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/avatars/user.png" alt="User" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <div className="flex items-center justify-start gap-2 p-2">
                  <div className="flex flex-col space-y-1 leading-none">
                    <p className="font-medium">John Doe</p>
                    <p className="text-sm text-muted-foreground">john@example.com</p>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => router.push("/profile")}>
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push("/settings")}>
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => router.push("/login")} className="text-red-600">
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}
