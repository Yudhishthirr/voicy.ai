"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  FileText, 
  Box, 
  UserCheck, 
  TrendingUp, 
  Play, 
  Download,
  FileAudio
} from "lucide-react";
import { GenratedVoiceTable } from "@/components/table/GenratedVoiceTable";
import { CloneVoiceTable } from "@/components/table/CloneVoiceTable ";

// Mock data for the table
const generatedAudios = [
  {
    id: 1,
    fileName: "Marketing_Campaign_V1.mp3",
    voice: "James (British Male)",
    duration: "02:45",
    date: "Oct 24, 2023",
    credits: "12 pts",
  },
  {
    id: 2,
    fileName: "Podcast_Intro_Final.mp3",
    voice: "Sarah (US Female)",
    duration: "00:32",
    date: "Oct 23, 2023",
    credits: "4 pts",
  },
  {
    id: 3,
    fileName: "Tutorial_Voiceover_2.mp3",
    voice: "Marcus (Narrator)",
    duration: "05:12",
    date: "Oct 22, 2023",
    credits: "22 pts",
  },
  {
    id: 4,
    fileName: "Explainer_Video_Audio.mp3",
    voice: "Elena (Italian Accent)",
    duration: "01:15",
    date: "Oct 20, 2023",
    credits: "8 pts",
  }
];

export default function LibraryPage() {


  const [activeTab, setActiveTab] = useState("generated");
  console.log(activeTab);
  return (
    <div className="max-w-6xl mx-auto space-y-8 min-h-full pb-8">
      
      {/* Header Section */}
      <div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
          Library & Activity
        </h1>
        <p className="text-slate-500 text-base">
          Manage and access all your generated voice content and history.
        </p>
      </div>

      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1: Total Generations */}
        <Card className="border-slate-200 shadow-sm rounded-2xl bg-white">
          <CardContent className="p-6 flex items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
              <FileText className="w-6 h-6 text-slate-400" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-slate-500 mb-1">Total Generations</span>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-slate-900">1,284</span>
                <div className="flex items-center gap-1 bg-emerald-50 text-emerald-600 px-1.5 py-0.5 rounded text-xs font-bold">
                  <TrendingUp className="w-3 h-3" /> 12%
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Card 2: Credits Used */}
        <Card className="border-slate-200 shadow-sm rounded-2xl bg-white">
          <CardContent className="p-6 flex items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
              <Box className="w-6 h-6 text-slate-400" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-slate-500 mb-1">Credits Used</span>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-slate-900">450</span>
                <div className="flex items-center gap-1 bg-emerald-50 text-emerald-600 px-1.5 py-0.5 rounded text-xs font-bold">
                  <TrendingUp className="w-3 h-3" /> 5%
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Card 3: Cloned Voices */}
        <Card className="border-slate-200 shadow-sm rounded-2xl bg-white">
          <CardContent className="p-6 flex items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
              <UserCheck className="w-6 h-6 text-slate-400" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-slate-500 mb-1">Cloned Voices</span>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-slate-900">12</span>
                <div className="flex items-center gap-1 bg-emerald-50 text-emerald-600 px-1.5 py-0.5 rounded text-xs font-bold">
                  <TrendingUp className="w-3 h-3" /> 2%
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>

      {/* Tabs & Table Section */}
      <div className="flex flex-col gap-6">
        
        {/* Custom Tabs */}
        <div className="flex items-center gap-8 border-b border-slate-200 overflow-x-auto hide-scrollbar">
          
          <button 
            onClick={() => setActiveTab("generated")}
            className={`pb-4 text-sm font-bold whitespace-nowrap transition-colors relative ${
              activeTab === "generated" ? "text-violet-700" : "text-slate-500 hover:text-slate-800"
            }`}
          >
            Generated Audios
            {activeTab === "generated" && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-violet-600 rounded-t-full" />
            )}
          </button>
          
          <button 
            onClick={() => setActiveTab("cloned")}
            className={`pb-4 text-sm font-bold whitespace-nowrap transition-colors relative ${
              activeTab === "cloned" ? "text-violet-700" : "text-slate-500 hover:text-slate-800"
            }`}
          >
            Cloned Voices
            {activeTab === "cloned" && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-violet-600 rounded-t-full" />
            )}
          </button>

          <button 
            onClick={() => setActiveTab("history")}
            className={`pb-4 text-sm font-bold whitespace-nowrap transition-colors relative ${
              activeTab === "history" ? "text-violet-700" : "text-slate-500 hover:text-slate-800"
            }`}
          >
            Activity History
            {activeTab === "history" && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-violet-600 rounded-t-full" />
            )}
          </button>
        </div>

        {/* Table Container */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col">

          {activeTab == "generated" ? <GenratedVoiceTable/> : <CloneVoiceTable/>}
          

         
          {/* <div className="px-6 py-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white">
            <span className="text-sm text-slate-500 font-medium">
              Showing 1 to 4 of 1,284 entries
            </span>
            <div className="flex items-center gap-1.5">
              <Button variant="outline" size="sm" className="h-9 px-4 border-slate-200 text-slate-600 font-medium">
                Previous
              </Button>
              <Button variant="default" size="sm" className="w-9 h-9 bg-violet-600 hover:bg-violet-700 text-white font-bold p-0">
                1
              </Button>
              <Button variant="outline" size="sm" className="w-9 h-9 border-slate-200 text-slate-600 hover:bg-slate-50 font-medium p-0">
                2
              </Button>
              <Button variant="outline" size="sm" className="w-9 h-9 border-slate-200 text-slate-600 hover:bg-slate-50 font-medium p-0">
                3
              </Button>
              <Button variant="outline" size="sm" className="h-9 px-4 border-slate-200 text-slate-600 font-medium">
                Next
              </Button>
            </div>
          </div> */}
        </div>

      </div>
    </div>
  );
}