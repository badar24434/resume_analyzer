"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function MessagesPage() {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);

  const chats = [
    {
      id: "1",
      name: "John Doe",
      position: "Software Engineer",
      lastMessage: "Thank you for the feedback",
      time: "2:30 PM",
      unread: 2,
    },
    {
      id: "2",
      name: "Jane Smith",
      position: "UI/UX Designer",
      lastMessage: "When is the next interview?",
      time: "11:00 AM",
      unread: 0,
    },
  ];

  const messages = [
    {
      id: 1,
      sender: "John Doe",
      content: "Thank you for considering my application.",
      time: "10:00 AM",
      isSender: false,
    },
    {
      id: 2,
      sender: "HR Team",
      content: "You're welcome! Your interview is scheduled for tomorrow at 2 PM.",
      time: "10:05 AM",
      isSender: true,
    },
  ];

  return (
    <div className="container mx-auto p-8">
      <div className="grid md:grid-cols-[300px_1fr] gap-6 h-[calc(100vh-12rem)]">
        <Card>
          <CardContent className="p-0">
            <ScrollArea className="h-[calc(100vh-12rem)]">
              <div className="p-4 space-y-4">
                {chats.map((chat) => (
                  <div
                    key={chat.id}
                    onClick={() => setSelectedChat(chat.id)}
                    className={`flex items-center gap-4 p-3 rounded-lg cursor-pointer transition-colors
                      ${selectedChat === chat.id ? 'bg-accent' : 'hover:bg-accent/50'}`}
                  >
                    <Avatar>
                      <AvatarImage src={`/avatars/${chat.id}.png`} />
                      <AvatarFallback>{chat.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium truncate">{chat.name}</p>
                          <p className="text-xs text-muted-foreground">{chat.position}</p>
                        </div>
                        <span className="text-xs text-muted-foreground">{chat.time}</span>
                      </div>
                      <p className="text-sm text-muted-foreground truncate">
                        {chat.lastMessage}
                      </p>
                    </div>
                    {chat.unread > 0 && (
                      <Badge variant="default" className="rounded-full">
                        {chat.unread}
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        <Card className="flex flex-col">
          <CardContent className="flex-1 p-0">
            <div className="flex flex-col h-full">
              <div className="border-b p-4">
                <h2 className="font-semibold">John Doe</h2>
                <p className="text-sm text-muted-foreground">Software Engineer Applicant</p>
              </div>
              
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isSender ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`rounded-lg p-3 max-w-[70%] ${
                          message.isSender
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted'
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                        <span className="text-xs text-muted-foreground">{message.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </CardContent>
          <div className="border-t p-4 flex items-center gap-4">
            <Input placeholder="Type a message..." className="flex-1" />
            <Button variant="primary">
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
