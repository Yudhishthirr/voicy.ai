"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { 
  ChevronDown, 
  Zap, 
  Play, 
  Download, 
  MoreVertical, 
  Lightbulb 
} from "lucide-react";

export default function TextToVoicePage() {
  const [text, setText] = useState("");

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      
      {/* Main Generation Card */}
      <Card className="border-slate-200 shadow-sm rounded-2xl overflow-hidden">
        <CardContent className="p-6 md:p-8">
          
          {/* Voice Model Selection */}
          <div className="mb-6">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">
              Voice Model
            </label>
            <div className="border border-slate-200 rounded-xl p-3 flex items-center justify-between cursor-pointer hover:border-violet-300 transition-colors bg-white">
              <div className="flex items-center gap-4">
                <Avatar className="h-10 w-10 bg-[#eef2ff] text-blue-600 flex items-center justify-center rounded-full shrink-0">
                  <span className="text-lg">👦</span>
                </Avatar>
                <div className="flex flex-col">
                  <h4 className="font-bold text-slate-900 text-sm">Ethan (Pro)</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Energetic • Commercial
                  </p>
                </div>
              </div>
              <ChevronDown className="w-5 h-5 text-slate-400 pr-1" />
            </div>
          </div>

          {/* Text Area */}
          <div className="relative mb-8">
            <Textarea 
              placeholder="Write or paste your script here..."
              className="min-h-[240px] resize-none border-slate-200 rounded-xl p-4 text-base placeholder:text-slate-400 focus-visible:ring-violet-500 pb-10"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <div className="absolute bottom-4 right-4 text-xs font-medium text-slate-400">
              {text.length} / 10,000
            </div>
          </div>

          {/* Sliders Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Stability Slider */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="font-semibold text-sm text-slate-900">Stability</label>
                <span className="text-sm font-medium text-violet-600">50%</span>
              </div>
              <Slider 
                defaultValue={[50]} 
                max={100} 
                step={1} 
                className="[&>span:first-child]:bg-slate-200 [&_[role=slider]]:bg-violet-600 [&_[role=slider]]:border-violet-600 [&>span:first-child>span]:bg-violet-600"
              />
              <p className="text-xs text-slate-400 leading-relaxed">
                Higher stability makes the voice more consistent but can sound robotic.
              </p>
            </div>

            {/* Clarity Slider */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="font-semibold text-sm text-slate-900">Clarity + Similarity Enhancement</label>
                <span className="text-sm font-medium text-violet-600">75%</span>
              </div>
              <Slider 
                defaultValue={[75]} 
                max={100} 
                step={1} 
                className="[&>span:first-child]:bg-slate-200 [&_[role=slider]]:bg-violet-600 [&_[role=slider]]:border-violet-600 [&>span:first-child>span]:bg-violet-600"
              />
              <p className="text-xs text-slate-400 leading-relaxed">
                Increases clarity and resemblance to the original voice model.
              </p>
            </div>
          </div>

          {/* Generate Button */}
          <Button className="w-full h-14 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-base font-semibold shadow-md shadow-violet-600/20 transition-all">
            <Zap className="w-5 h-5 mr-2 fill-current" />
            Generate Voice
          </Button>

        </CardContent>
      </Card>

      {/* Audio Player Card */}
      <Card className="border-slate-200 shadow-sm rounded-2xl overflow-hidden">
        <CardContent className="p-4 flex items-center gap-4">
          <button className="w-10 h-10 shrink-0 rounded-full bg-violet-600 flex items-center justify-center text-white hover:bg-violet-700 transition-colors shadow-sm">
            <Play className="w-4 h-4 ml-1 fill-current" />
          </button>
          
          {/* Mock Waveform */}
          <div className="flex-1 h-8 flex items-center gap-[3px] opacity-40 overflow-hidden">
            {[...Array(40)].map((_, i) => (
              <div 
                key={i} 
                className="w-1.5 bg-slate-400 rounded-full"
                style={{ height: `${Math.max(20, Math.random() * 100)}%` }}
              />
            ))}
          </div>

          <div className="shrink-0 text-sm font-medium text-slate-500 tabular-nums">
            00:00 / 02:45
          </div>

          <div className="flex items-center gap-1 shrink-0 text-slate-400">
            <Button variant="ghost" size="icon" className="hover:text-violet-600 hover:bg-violet-50 rounded-full">
              <Download className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-violet-600 hover:bg-violet-50 rounded-full">
              <MoreVertical className="w-5 h-5" />
            </Button>
          </div>
        </CardContent>
      </Card>

     

    </div>
  );
}