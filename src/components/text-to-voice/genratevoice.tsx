"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { Zap } from "lucide-react";
import { Textarea } from "../ui/textarea";
import { toast } from "sonner";

import { generateVoice } from "@/service/voice.service";
import { MY_CONSTANTS } from "@/constant";

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
      const cleanText = text.trim();

      if (!cleanText) {
        return toast.error("Enter text");
      }
  
      if (cleanText.length < 100) {
        return toast.error("Enter atleast 100 characters");
      }
    
      if (!selectedVoice)
        return toast.error(
          "Select voice model"
        );

      setLoading(true);

      const response = await generateVoice({
        text:cleanText,
        voiceId: selectedVoice._id,
        voiceSampleUrl:
          selectedVoice.voiceSampleUrl,
      });
      console.log(response);
      if(response.message === MY_CONSTANTS.INSUFFICIENT_CREDITS){
        toast.error(response.message);
        setLoading(false);
      }
      else{
        toast.success(
          "We will notity you when it completed 🎉"
        );
      }
      setLoading(false);

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
        className="w-full cursor-pointer h-14 bg-violet-600 hover:bg-violet-700 text-white"
      >
        <Zap className="mr-2 w-5 h-5" />
        {loading
          ? "Generating..."
          : "Generate Voice"}
      </Button>
    </>
  );
}