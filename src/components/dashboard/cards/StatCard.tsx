import { Activity } from "lucide-react";

export const StatCard = ({ title, value, trend, icon: Icon, trendUp }: { title: string, value: string, trend: string, icon: any, trendUp: boolean }) => (
    <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm">
      <div className="flex items-center justify-between">
        <span className="text-slate-500 text-sm font-medium">{title}</span>
        <Icon className="text-primary" size={20} />
      </div>
      <p className="text-3xl font-bold mt-2">{value}</p>
      <p className={`text-xs mt-1 flex items-center gap-1 font-medium ${trendUp ? 'text-green-600' : 'text-red-600'}`}>
        <Activity size={12} />
        {trend}
      </p>
    </div>
);