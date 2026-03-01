"use client";

import { useEffect, useState } from "react";
import { getUserGenratedVoices } from "@/service/voice.service";
import {AudioPreviewDialog} from "@/components/audioplayer/audioplyer";
import { Button } from "../ui/button";
import { Download, Play, FileAudio } from "lucide-react";

export function GenratedVoiceTable() {

  const [generatedAudios, setVoices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [open, setOpen] = useState(false);
const [selectedAudio, setSelectedAudio] = useState<string | null>(null);

  // ✅ Fetch Voices
  const fetchVoices = async () => {
    try {
      const res = await getUserGenratedVoices();
      // console.log(res.data.length);
      setVoices(res.data);
    } catch (error) {
      console.error("Voice Fetch Error:", error);
    } finally {
      setLoading(false);
    }
  };

  // ✅ call on mount
  useEffect(() => {
    fetchVoices();
  }, []);

  if (loading) {
    return <p className="p-6">Loading voices...</p>;
  }


  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left min-w-[800px]">

        {/* HEADER */}
        <thead>
          <tr className="border-b border-slate-100 bg-white">
            <th className="px-6 py-4 text-xs uppercase">File</th>
            <th className="px-6 py-4 text-xs uppercase">Voice</th>
            <th className="px-6 py-4 text-xs uppercase">Duration</th>
            <th className="px-6 py-4 text-xs uppercase">Date</th>
            <th className="px-6 py-4 text-xs uppercase text-right">
              Actions
            </th>
          </tr>
        </thead>

        {/* BODY */}
        <tbody className="divide-y divide-slate-100">

          {generatedAudios.map((item) => (
            <tr
              key={item._id}
              className="hover:bg-slate-50 transition"
            >

              {/* TEXT */}
              <td className="px-6 py-4">
                <div className="flex gap-3 items-center">
                  <FileAudio className="w-5 h-5 text-violet-500" />

                  <span className="font-semibold text-sm">
                    {item.text?.slice(0, 10)}...
                  </span>
                </div>
              </td>

              {/* VOICE */}
              <td className="px-6 py-4 text-sm">
              {item.voiceId?.voiceName}
              </td>

              {/* DURATION */}
              <td className="px-6 py-4 text-sm">
                {item.duration
                  ? `${item.duration}s`
                  : "-"}
              </td>

              {/* DATE */}
              <td className="px-6 py-4 text-sm">
                {new Date(
                  item.createdAt
                ).toLocaleDateString()}
              </td>

              {/* ACTIONS */}
              <td className="px-6 py-4 text-right">
                <div className="flex justify-end gap-2">

                  {/* PLAY */}
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => {
                      setSelectedAudio(item.genratedvoice);
                      setOpen(true);
                    }}
                  >
                    <Play className="w-4 h-4" />
                  </Button>
                  {/* DOWNLOAD */}
                  <a
                    href={item.genratedvoice}
                    download
                  >
                    <Button
                      variant="outline"
                      size="icon"
                    >
                      <Download className="w-4 h-4" />
                    </Button>
                  </a>

                </div>
              </td>

            </tr>
          ))}

        </tbody>
      </table>
      <AudioPreviewDialog
  open={open}
  onOpenChange={setOpen}
  audioUrl={selectedAudio}
/>
    </div>
  );
}