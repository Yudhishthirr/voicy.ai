"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Pencil, MicOff, History } from "lucide-react";
import Link from "next/link";
import { getUserCredit } from "@/service/voice.service";

export default function ProfileSettingsPage() {
  const [credits, setCredits] = useState(0);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await getUserCredit();
        setCredits(res?.data?.credit || 0);
        setUser(res?.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="max-w-4xl mx-auto space-y-8 min-h-full pb-8">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
          Profile Settings
        </h1>
        <p className="text-slate-500 text-base">
          Manage your account information and preferences
        </p>
      </div>

      {/* Profile Card */}
      <Card className="border-slate-200 shadow-sm rounded-2xl bg-white overflow-hidden">
  <div className="px-6 py-5 border-b border-slate-100">
    <h2 className="text-xl font-bold text-slate-900">Profile Information</h2>
  </div>

  <CardContent className="p-6 md:p-8 space-y-8">

    {/* Avatar */}
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
      <Avatar className="h-24 w-24 border border-slate-200 shadow-sm">
        <AvatarImage src={user?.avatar} className="object-cover" />
        <AvatarFallback className="bg-slate-100 text-slate-600 font-bold text-xl">
          {user?.username?.[0] || "U"}
        </AvatarFallback>
      </Avatar>

      <div>
        <h3 className="text-lg font-bold text-slate-900">
          {user?.username || "User"}
        </h3>
        <p className="text-sm text-slate-500">
          Account created on{" "}
          {user?.createdAt
            ? new Date(user.createdAt).toLocaleDateString()
            : "-"}
        </p>
      </div>
    </div>

    {/* Info Fields (Read Only) */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      <div className="space-y-1">
        <p className="text-xs text-slate-400 font-semibold">Username</p>
        <div className="h-12 flex items-center px-4 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-800">
          {user?.username || "-"}
        </div>
      </div>

      <div className="space-y-1">
        <p className="text-xs text-slate-400 font-semibold">Email</p>
        <div className="h-12 flex items-center px-4 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-800">
          {user?.email || "-"}
        </div>
      </div>

    </div>

  </CardContent>
</Card>

      {/* Subscription Card */}
      <Card className="border-slate-200 shadow-sm rounded-2xl bg-white overflow-hidden">
        <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">Subscription Plan</h2>
          <Badge className="bg-slate-100 text-slate-600 font-bold px-3 py-1 rounded-md text-xs uppercase border-none">
            {user?.isPaid ? "Pro Plan" : "Free Plan"}
          </Badge>
        </div>

        <CardContent className="p-6 md:p-8 space-y-8">

          {/* Credits */}
          <div>
            <div className="flex justify-between items-end mb-3">
              <h3 className="text-sm font-bold text-slate-900">Credits Usage</h3>
              <span className="text-sm text-slate-500 font-medium">
                {credits} / 8000 credits
              </span>
            </div>

            <Progress
              value={(credits / 8000) * 100}
              className="h-2.5 mb-2 bg-slate-100 [&>div]:bg-violet-600"
            />

            <p className="text-xs text-slate-400 font-medium">
              Free users get 10 credits • Max limit 8000
            </p>

            {credits <= 5 && (
              <p className="text-xs text-red-500 font-medium mt-1">
                Low credits! Upgrade soon ⚠️
              </p>
            )}
          </div>

          {/* Stats */}
         

          {/* Upgrade */}
          <div className="bg-[#f8f5ff] border border-violet-100 rounded-xl p-6 flex flex-col sm:flex-row justify-between gap-4">
            <div>
              <h4 className="text-violet-700 font-bold mb-1">Need more power?</h4>
              <p className="text-slate-600 text-sm">
                Unlock high-quality voices and unlimited clones.
              </p>
            </div>

            <Button asChild className="bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-lg">
              <Link href="/pricing">Upgrade Plan</Link>
            </Button>
          </div>

        </CardContent>
      </Card>

    </div>
  );
}