"use client";

import { useEffect, useState } from "react";
import { FileAudio, Play } from "lucide-react";

import { AudioPreviewDialog } from "@/components/audioplayer/audioplyer";
import { getUserGenratedVoices } from "@/service/voice.service";
import { Button } from "@/components/ui/button";

export const GenerationsTable = () => {

  const [generatedAudios, setVoices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [open, setOpen] = useState(false);
  const [selectedAudio, setSelectedAudio] = useState<string | null>(null);

  // ✅ Fetch voices
  const fetchVoices = async () => {
    try {
      const res = await getUserGenratedVoices();
      console.log(res)
      setVoices(res.data);
    } catch (error) {
      console.error("Voice Fetch Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVoices();
  }, []);

  if (loading) {
    return <p className="p-6">Loading voices...</p>;
  }

  const handlePlay = (url: string) => {
    setSelectedAudio(url);
    setOpen(true);
  };

  return (
    <>
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">

          {/* HEADER */}
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase">
                File
              </th>
              <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase">
                Voice Model
              </th>
              <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase">
                Duration
              </th>
              <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase text-right">
                Action
              </th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody className="divide-y divide-slate-100">
            {generatedAudios.map((item) => (
              <tr
                key={item._id}
                className="hover:bg-slate-50 transition-colors"
              >
                {/* TEXT */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="size-8 bg-slate-100 rounded flex items-center justify-center">
                      <FileAudio className="text-primary" size={16} />
                    </div>

                    <span className="text-sm font-medium">
                      {item.text?.slice(0, 25)}...
                    </span>
                  </div>
                </td>

                {/* VOICE NAME */}
                <td className="px-6 py-4 text-sm text-slate-500">
                  {item.voiceId.voiceName}
                </td>

                {/* DURATION */}
                <td className="px-6 py-4 text-sm text-slate-500">
                  {item.duration ? `${item.duration}s` : "calculating..."}
                </td>

                {/* PLAY */}
                <td className="px-6 py-4 text-right">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() =>
                      handlePlay(item.genratedvoice)
                    }
                  >
                    <Play className="w-4 h-4" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

      {/* ✅ Reusable Audio Dialog */}
      <AudioPreviewDialog
        open={open}
        onOpenChange={setOpen}
        audioUrl={selectedAudio}
      />
    </>
  );
};