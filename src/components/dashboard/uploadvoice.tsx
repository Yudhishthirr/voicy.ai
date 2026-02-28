"use client";

import React, { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { CloudUpload, Wand2 } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { UploadButton } from "@/utils/uploadthing";
import { toast } from "sonner"
export function Uploadvoice() {
  const [voiceName, setVoiceName] = useState("");
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  /**
   * ✅ Validate duration BEFORE upload
   */
  const validateAudioDurationFromFile = (file: File) => {
    return new Promise<boolean>((resolve) => {
      const audio = document.createElement("audio");

      audio.preload = "metadata";
      audio.src = URL.createObjectURL(file);

      audio.onloadedmetadata = () => {
        URL.revokeObjectURL(audio.src);

        const duration = audio.duration;

        console.log("Audio duration:", duration);

        const MIN_DURATION = 30; // seconds
        const MAX_DURATION = 60; // seconds (1 min)

        if (duration < MIN_DURATION) {
          // alert(");
          toast.error("Audio must be at least 30 seconds.")
          resolve(false);
        } else if (duration > MAX_DURATION) {
          // alert("");
          toast.error("Audio must be under 1 minute.")
          resolve(false);
        } else {
          // toast.success("Audio uploaded 🎉");
          resolve(true);
        }
      };

      audio.onerror = () => {
        toast.error("Invalid audio file.");
        resolve(false);
      };
    });
  };

  /**
   * ✅ Clone Voice Handler
   */
  const handleCloneVoice = async () => {
    if (!voiceName || !audioUrl) return;

    console.log({
      voiceName,
      audioUrl,
    });

    // 👉 Call your backend API here
    // await axios.post("/api/clone-voice", { voiceName, audioUrl });
  };

  return (
    <div className="lg:col-span-2">
      <Card className="border-slate-200 shadow-sm rounded-2xl overflow-hidden bg-white">
        <CardContent className="p-6 md:p-8 space-y-8">

          {/* Upload Area */}
          <div className="border-2 border-dashed border-violet-200 bg-[#fbfbfe] rounded-2xl p-10 flex flex-col items-center justify-center text-center hover:bg-violet-50/50 transition">

            <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center text-violet-600 mb-6 shadow-sm">
              <CloudUpload className="w-8 h-8" />
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Upload your voice recording
            </h3>

            <p className="text-sm text-slate-500 max-w-sm mb-4">
              Upload clean voice sample (30 sec – 1 min)
            </p>

            {/* ✅ UploadThing Button */}
            <UploadButton
              endpoint="audioUploader"
              appearance={{
                button:
                  "bg-violet-600 text-white px-6 py-2 rounded-lg hover:bg-violet-700 transition",
                container: "flex flex-col items-center gap-2",
                allowedContent: "text-xs text-slate-400",
              }}

              /**
               * ✅ BLOCK INVALID AUDIO BEFORE UPLOAD
               */
              onBeforeUploadBegin={async (files) => {
                const file = files[0];

                const isValid =
                  await validateAudioDurationFromFile(file);

                if (!isValid) {
                  return []; // ❌ cancel upload
                }

                return files; // ✅ continue upload
              }}

              onUploadBegin={() => {
                setIsUploading(true);
              }}

              onClientUploadComplete={(res) => {
                setIsUploading(false);
                setAudioUrl(res?.[0]?.url ?? null);
              }}

              onUploadError={(error: Error) => {
                setIsUploading(false);
                toast.error(error.message);
              }}
            />

            {/* Upload Success */}
            {audioUrl && (
              <p className="text-green-600 text-sm font-medium mt-3">
                ✅ Audio uploaded successfully
              </p>
            )}
          </div>

          {/* Voice Name */}
          <div className="space-y-3">
            <label className="text-sm font-bold text-slate-900">
              Voice Name
            </label>

            <Input
              placeholder="e.g. My Podcast Voice"
              value={voiceName}
              onChange={(e) => setVoiceName(e.target.value)}
              className="h-12 bg-slate-50 border-slate-200 rounded-xl"
            />
          </div>

          {/* Clone Button */}
          <Button
            disabled={!voiceName || !audioUrl || isUploading}
            onClick={handleCloneVoice}
            className="w-full h-14 bg-violet-600 hover:bg-violet-700 text-white rounded-xl font-bold disabled:opacity-50"
          >
            <Wand2 className="w-5 h-5 mr-2" />
            {isUploading ? "Uploading..." : "Start Cloning"}
          </Button>

        </CardContent>
      </Card>
    </div>
  );
}