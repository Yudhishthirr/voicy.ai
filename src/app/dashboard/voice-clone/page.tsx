"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { CloudUpload, Wand2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { CloneVoice } from "@/components/clone-voice";

export default function VoiceClonePage() {
  const [voiceName, setVoiceName] = useState("");

  return (
    <div className="max-w-6xl mx-auto space-y-8 min-h-full pb-8">
      
      {/* Header Section */}
      <div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
          Create Custom Voice
        </h1>
        <p className="text-slate-500 text-base">
          Upload a sample to generate your high-fidelity digital voice clone.
        </p>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* LEFT COLUMN: Upload Form (Takes up 2/3 width on large screens) */}
        <div className="lg:col-span-2">
          <Card className="border-slate-200 shadow-sm rounded-2xl overflow-hidden bg-white">
            <CardContent className="p-6 md:p-8 space-y-8">
              
              {/* Drag & Drop Area */}
              <div className="border-2 border-dashed border-violet-200 bg-[#fbfbfe] rounded-2xl p-10 flex flex-col items-center justify-center text-center transition-colors hover:bg-violet-50/50">
                <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center text-violet-600 mb-6 shadow-sm">
                  <CloudUpload className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Upload your voice recording
                </h3>
                
                <p className="text-sm text-slate-500 max-w-sm mb-6 leading-relaxed">
                  Drag and drop your audio files here or click to browse. 
                  For best results, use a 1-2 minute clean recording (WAV or MP3).
                </p>
                
                <Button variant="outline" className="bg-white border-slate-200 text-slate-900 font-semibold hover:bg-slate-50 rounded-lg px-6">
                  Select Files
                </Button>
              </div>

              {/* Voice Name Input */}
              <div className="space-y-3">
                <label className="text-sm font-bold text-slate-900 block">
                  Voice Name
                </label>
                <Input 
                  placeholder="e.g., My Podcast Voice" 
                  value={voiceName}
                  onChange={(e) => setVoiceName(e.target.value)}
                  className="h-12 bg-slate-50/50 border-slate-200 focus-visible:ring-violet-500 rounded-xl text-base px-4"
                />
              </div>

              {/* Submit Button */}
              <Button className="w-full h-14 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-base font-bold shadow-md shadow-violet-600/20 transition-all">
                <Wand2 className="w-5 h-5 mr-2 fill-current opacity-90" />
                Start Cloning
              </Button>

            </CardContent>
          </Card>
        </div>

        {/* RIGHT COLUMN: Cloned Voice List (Takes up 1/3 width on large screens) */}
       
        <CloneVoice/>
      </div>
    </div>
  );
}