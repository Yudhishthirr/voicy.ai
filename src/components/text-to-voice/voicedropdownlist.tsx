"use client";

import React, { useEffect, useState } from "react";
import { Avatar } from "../ui/avatar";
import { ChevronDown } from "lucide-react";
import { getUserVoices } from "@/service/voice.service";

export function VoiceDropdownlist({
  onSelect,
}: {
  onSelect?: (voice: any) => void;
}) {

  const [voices, setVoices] = useState<any[]>([]);
  const [selectedVoice, setSelectedVoice] =
    useState<any>(null);

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchVoices = async () => {
    try {
      const data = await getUserVoices();
      setVoices(data);

      if (data.length > 0) {
        setSelectedVoice(data[0]);
        onSelect?.(data[0]); // ✅ send to parent
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVoices();
  }, []);

  return (
    <div className="mb-6 relative">

      <label className="text-xs font-bold text-slate-400 uppercase mb-2 block">
        Voice Model
      </label>

      {/* Selected */}
      <div
        onClick={() => setOpen(!open)}
        className="border border-slate-200 rounded-xl p-3 flex justify-between cursor-pointer bg-white"
      >
        <div className="flex items-center gap-4">

          <Avatar className="h-10 w-10 bg-indigo-100 flex items-center justify-center">
            <span>
              {selectedVoice?.voiceName?.[0] ?? "🎙"}
            </span>
          </Avatar>

          <div>
            <h4 className="font-bold text-sm">
              {selectedVoice
                ? selectedVoice.voiceName
                : loading
                ? "Loading..."
                : "No Voice"}
            </h4>
            <p className="text-xs text-slate-500">
              Custom Voice
            </p>
          </div>
        </div>

        <ChevronDown
          className={`transition ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute w-full mt-2 bg-white border rounded-xl shadow-lg z-50">

          {voices.map((voice) => (
            <div
              key={voice._id}
              onClick={() => {
                setSelectedVoice(voice);
                onSelect?.(voice);
                setOpen(false);
              }}
              className="flex items-center gap-3 p-3 hover:bg-violet-50 cursor-pointer"
            >
              <Avatar className="h-9 w-9 bg-violet-100 flex items-center justify-center">
                {voice.voiceName[0]}
              </Avatar>

              <div>
                <p className="font-semibold text-sm">
                  {voice.voiceName}
                </p>
                <p className="text-xs text-slate-400">
                  {voice.duration}s
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}