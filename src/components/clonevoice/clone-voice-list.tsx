"use client";

import { useEffect, useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getUserVoices } from "@/service/voice.service";

export function CloneVoiceList() {
  const [voices, setVoices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchVoices = async () => {
    try {
      const data = await getUserVoices();
      setVoices(data);
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
    <div className="lg:col-span-1">
      <Card className="border-slate-200 shadow-sm rounded-2xl bg-white flex flex-col h-full">

        {/* Header */}
        <div className="p-6 pb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900">
            Cloned Voice List
          </h2>

          <Badge className="bg-violet-100 text-violet-700">
            {voices.length} Models
          </Badge>
        </div>

        <CardContent className="p-6 pt-0 flex-1 flex flex-col">

          <div className="flex flex-col gap-6">

            {loading && (
              <p className="text-sm text-slate-400">
                Loading voices...
              </p>
            )}

            {!loading && voices.length === 0 && (
              <p className="text-sm text-slate-400">
                No voices created yet
              </p>
            )}

            {voices.map((voice) => (
              <div
                key={voice._id}
                className="flex items-center gap-4"
              >
                <Avatar className="h-12 w-12 border shadow-sm">
                  <AvatarFallback>
                    {voice.voiceName
                      ?.slice(0, 2)
                      .toUpperCase()}
                  </AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <h4 className="font-bold text-sm">
                    {voice.voiceName}
                  </h4>

                  <div className="flex items-center gap-2 mt-1">

                    {/* Status */}
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                      <span className="text-[10px] font-bold text-emerald-600 uppercase">
                        Ready
                      </span>
                    </div>

                    {/* Created Time */}
                    <span className="text-xs text-slate-400">
                      {new Date(
                        voice.createdAt
                      ).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-auto pt-8">
            <div className="border-t pt-5 text-center">
              <p className="text-xs text-slate-400">
                Manage your cloned voices anytime.
              </p>
            </div>
          </div>

        </CardContent>
      </Card>
    </div>
  );
}