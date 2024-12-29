"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

export default function SettingsPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">System Settings</h1>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Email Configuration</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="smtp">SMTP Server</Label>
              <Input id="smtp" placeholder="smtp.example.com" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="port">Port</Label>
              <Input id="port" placeholder="587" />
            </div>
            <Button>Save Email Settings</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>System Preferences</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="notifications">Email Notifications</Label>
              <Switch id="notifications" />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <Label htmlFor="analytics">Usage Analytics</Label>
              <Switch id="analytics" />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <Label htmlFor="maintenance">Maintenance Mode</Label>
              <Switch id="maintenance" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Security Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="password-expiry">Password Expiry (days)</Label>
              <Input id="password-expiry" type="number" placeholder="90" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="2fa">Two-Factor Authentication</Label>
              <Switch id="2fa" />
            </div>
            <Button>Update Security Settings</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
