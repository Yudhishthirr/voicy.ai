"use client"
import { CloneVoice } from "@/components/dashboard/clone-voice";
import { Uploadvoice } from "@/components/dashboard/uploadvoice";

export default function VoiceClonePage() {

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
        <Uploadvoice/>

        {/* RIGHT COLUMN: Cloned Voice List (Takes up 1/3 width on large screens) */}
       
        <CloneVoice/>
      </div>
    </div>
  );
}