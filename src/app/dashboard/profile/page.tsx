"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Pencil, MicOff, History } from "lucide-react";
import Link from "next/link";

export default function ProfileSettingsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 min-h-full pb-8">
      
      {/* Header Section */}
      <div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
          Profile Settings
        </h1>
        <p className="text-slate-500 text-base">
          Manage your account information and preferences
        </p>
      </div>

      {/* Profile Information Card */}
      <Card className="border-slate-200 shadow-sm rounded-2xl bg-white overflow-hidden">
        <div className="px-6 py-5 border-b border-slate-100">
          <h2 className="text-xl font-bold text-slate-900">Profile Information</h2>
        </div>
        
        <CardContent className="p-6 md:p-8 space-y-8">
          
          {/* Avatar & Photo Upload Section */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="relative">
              <Avatar className="h-24 w-24 border border-slate-200 shadow-sm">
                {/* Replaced with a placeholder matching the style in the screenshot */}
                <AvatarImage src="https://i.pravatar.cc/150?u=yudhishthir" alt="Profile" className="object-cover" />
                <AvatarFallback className="bg-slate-100 text-slate-600 font-bold text-xl">YM</AvatarFallback>
              </Avatar>
              <button className="absolute bottom-0 right-0 w-8 h-8 bg-violet-600 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-violet-700 transition-colors shadow-sm">
                <Pencil className="w-4 h-4" />
              </button>
            </div>
            
            <div className="flex flex-col gap-3">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Sonu Mahawar</h3>
                <p className="text-sm text-slate-500">Upload a square image, at least 400x400px</p>
              </div>
              <div className="flex items-center gap-3">
                <Button className="bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-lg shadow-sm">
                  Change Photo
                </Button>
                <Button variant="secondary" className="bg-slate-100 text-slate-700 hover:bg-slate-200 font-semibold rounded-lg">
                  Remove
                </Button>
              </div>
            </div>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-900">Username</label>
              <Input 
                defaultValue="Yudhishthir.ai" 
                className="h-12 bg-white border-slate-200 focus-visible:ring-violet-500 rounded-xl text-base"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-900">Email Address</label>
              <Input 
                defaultValue="Yudhishthircode@gmail.com" 
                type="email"
                className="h-12 bg-white border-slate-200 focus-visible:ring-violet-500 rounded-xl text-base"
              />
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <Button className="bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-xl h-12 px-8 shadow-sm">
              Save Changes
            </Button>
          </div>
          
        </CardContent>
      </Card>

      {/* Subscription Plan Card */}
      <Card className="border-slate-200 shadow-sm rounded-2xl bg-white overflow-hidden">
        <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">Subscription Plan</h2>
          <Badge variant="secondary" className="bg-slate-100 text-slate-600 font-bold px-3 py-1 rounded-md text-xs tracking-wider uppercase border-none">
            Free Plan
          </Badge>
        </div>
        
        <CardContent className="p-6 md:p-8 space-y-8">
          
          {/* Credits Usage */}
          <div>
            <div className="flex justify-between items-end mb-3">
              <h3 className="text-sm font-bold text-slate-900">Credits Usage</h3>
              <span className="text-sm text-slate-500 font-medium">2,450 / 5,000 credits</span>
            </div>
            <Progress value={49} className="h-2.5 mb-2 bg-slate-100 [&>div]:bg-violet-600" />
            <p className="text-xs text-slate-400 font-medium">
              Your credits reset on Oct 24, 2023
            </p>
          </div>

          {/* Mini Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3">
                <MicOff className="w-5 h-5 text-violet-600" />
                <h4 className="font-bold text-slate-900 text-sm">Voice Clones</h4>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-extrabold text-slate-900 tracking-tight">2 / 3</span>
                <span className="text-sm text-slate-500 font-medium">available</span>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3">
                <History className="w-5 h-5 text-violet-600" />
                <h4 className="font-bold text-slate-900 text-sm">Generations</h4>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-extrabold text-slate-900 tracking-tight">128</span>
                <span className="text-sm text-slate-500 font-medium">this month</span>
              </div>
            </div>

          </div>

          {/* Upgrade Banner */}
          <div className="bg-[#f8f5ff] border border-violet-100 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-violet-700 font-bold mb-1">Need more power?</h4>
              <p className="text-slate-600 text-sm font-medium">
                Unlock high-quality voices and unlimited clones.
              </p>
            </div>
            <Button asChild className="w-full sm:w-auto bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-lg shadow-sm whitespace-nowrap">
  <Link href="/pricing">
    Upgrade Plan
  </Link>
</Button>
          </div>

        </CardContent>
      </Card>

    </div>
  );
}