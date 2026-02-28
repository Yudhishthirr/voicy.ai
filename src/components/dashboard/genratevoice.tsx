"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { Zap } from "lucide-react";
import { Textarea } from "../ui/textarea";
import { toast } from "sonner";

import { generateVoice } from "@/service/voice.service";

export function Genratevoice({
  selectedVoice,
}: {
  selectedVoice: any;
}) {

  const [text, setText] = useState("");
  const [loading, setLoading] =
    useState(false);

  const handleGenerate = async () => {
    try {
      if (!text)
        return toast.error("Enter text");

      if (!selectedVoice)
        return toast.error(
          "Select voice model"
        );

      setLoading(true);

      await generateVoice({
        text,
        voiceId: selectedVoice._id,
        voiceSampleUrl:
          selectedVoice.voiceSampleUrl,
      });

      toast.success(
        "Voice generated successfully 🎉"
      );

      setText("");

    } catch (error) {
      console.error(error);
      toast.error("Generation failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="relative mb-8">
        <Textarea
          placeholder="Write your script here..."
          value={text}
          onChange={(e) =>
            setText(e.target.value)
          }
          className="min-h-[240px]"
        />

        <div className="absolute bottom-4 right-4 text-xs text-slate-400">
          {text.length} / 10,000
        </div>
      </div>

      <Button
        onClick={handleGenerate}
        disabled={loading}
        className="w-full h-14 bg-violet-600 hover:bg-violet-700 text-white"
      >
        <Zap className="mr-2 w-5 h-5" />
        {loading
          ? "Generating..."
          : "Generate Voice"}
      </Button>
    </>
  );
}