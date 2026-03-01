import { BarChart3 } from "lucide-react";
import { motion } from "motion/react";

export const UsageTrendCard = () => (
    <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm relative overflow-hidden">
      <div className="flex items-center justify-between">
        <span className="text-slate-500 text-sm font-medium">Usage Trend</span>
        <BarChart3 className="text-primary" size={20} />
      </div>
      <div className="h-12 mt-4 flex items-end gap-1.5">
        <motion.div initial={{ height: 0 }} animate={{ height: '40%' }} className="flex-1 bg-primary/20 rounded-t-sm" />
        <motion.div initial={{ height: 0 }} animate={{ height: '60%' }} className="flex-1 bg-primary/20 rounded-t-sm" />
        <motion.div initial={{ height: 0 }} animate={{ height: '30%' }} className="flex-1 bg-primary/20 rounded-t-sm" />
        <motion.div initial={{ height: 0 }} animate={{ height: '80%' }} className="flex-1 bg-primary/20 rounded-t-sm" />
        <motion.div initial={{ height: 0 }} animate={{ height: '50%' }} className="flex-1 bg-primary/40 rounded-t-sm" />
        <motion.div initial={{ height: 0 }} animate={{ height: '90%' }} className="flex-1 bg-primary/60 rounded-t-sm" />
        <motion.div initial={{ height: 0 }} animate={{ height: '75%' }} className="flex-1 bg-primary rounded-t-sm" />
      </div>
    </div>
);
  