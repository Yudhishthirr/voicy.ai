import { ChevronRight } from "lucide-react";

export const VoiceModelCard = ({ name, type, icon: Icon, colorClass }: { name: string, type: string, icon: any, colorClass: string }) => (
    <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm flex items-center gap-4 hover:border-primary/30 transition-colors cursor-pointer group">
      <div className={`size-10 rounded-full flex items-center justify-center ${colorClass}`}>
        <Icon size={20} />
      </div>
      <div className="flex-1">
        <p className="text-sm font-bold">{name}</p>
        <p className="text-[11px] text-slate-500 uppercase tracking-tighter">{type}</p>
      </div>
      <ChevronRight className="text-slate-300 group-hover:text-primary transition-colors" size={18} />
    </div>
);
  