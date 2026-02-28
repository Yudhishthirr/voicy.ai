"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

import { Voicelist } from "@/components/dashboard/voicelist";
import { Genratevoice } from "@/components/dashboard/genratevoice";

export default function TextToVoicePage() {

  const [selectedVoice, setSelectedVoice] =
    useState<any>(null);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card className="border-slate-200 shadow-sm rounded-2xl overflow-hidden">
        <CardContent className="p-6 md:p-8">

          {/* Voice Selector */}
          <Voicelist
            onSelect={setSelectedVoice}
          />

          {/* Text Generator */}
          <Genratevoice
            selectedVoice={selectedVoice}
          />

        </CardContent>
      </Card>
    </div>
  );
}