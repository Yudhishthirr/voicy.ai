"use client"
import { 
  Download, 
  Plus, 
  BarChart3, 
  Clock, 
  Activity, 
  FileAudio, 
  Play, 
  ChevronRight,
  Smile,
  UserCircle,
  MessageSquare
} from 'lucide-react';
import { motion } from 'motion/react';

const StatCard = ({ title, value, trend, icon: Icon, trendUp }: { title: string, value: string, trend: string, icon: any, trendUp: boolean }) => (
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

const UsageTrendCard = () => (
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

const GenerationsTable = () => (
  <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="bg-slate-50 border-b border-slate-200">
          <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">File Name</th>
          <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Voice Model</th>
          <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Length</th>
          <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Action</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-100">
        {[
          { name: 'marketing_vlog_01.mp3', model: 'Ethan (American)', length: '03:42' },
          { name: 'podcast_intro_final.wav', model: 'Sophia (British)', length: '00:54' },
          { name: 'explainer_video_draft.mp3', model: 'Liam (Deep)', length: '05:12' },
        ].map((file, i) => (
          <tr key={i} className="hover:bg-slate-50 transition-colors group">
            <td className="px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="size-8 bg-slate-100 rounded flex items-center justify-center">
                  <FileAudio className="text-primary" size={16} />
                </div>
                <span className="text-sm font-medium">{file.name}</span>
              </div>
            </td>
            <td className="px-6 py-4 text-sm text-slate-500">{file.model}</td>
            <td className="px-6 py-4 text-sm text-slate-500">{file.length}</td>
            <td className="px-6 py-4 text-right">
              <button className="size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all cursor-pointer">
                <Play size={14} fill="currentColor" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const VoiceModelCard = ({ name, type, icon: Icon, colorClass }: { name: string, type: string, icon: any, colorClass: string }) => (
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

const DashboardPage = () => (
  <div className="p-8 space-y-8 max-w-7xl mx-auto w-full">
    {/* Welcome Section */}
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div>
        <h1 className="text-3xl font-black tracking-tight text-slate-900">Dashboard Overview</h1>
        <p className="text-slate-500 mt-1">Manage your AI voice projects and generation stats.</p>
      </div>
      <div className="flex gap-3">
        <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors cursor-pointer">
          <Download size={16} />
          Export Report
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity cursor-pointer">
          <Plus size={16} />
          New Generation
        </button>
      </div>
    </div>

    {/* Stats Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <StatCard 
        title="Total Generations" 
        value="1,284" 
        trend="12% from last month" 
        icon={BarChart3} 
        trendUp={true} 
      />
      <StatCard 
        title="Hours of Audio" 
        value="42.5h" 
        trend="8% from last month" 
        icon={Clock} 
        trendUp={true} 
      />
      <UsageTrendCard />
    </div>

    <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
      {/* Recent Generations */}
      <div className="xl:col-span-2 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold">Recent Generations</h3>
          <button className="text-sm text-primary font-semibold hover:underline cursor-pointer">View All</button>
        </div>
        <GenerationsTable />
      </div>

      {/* Voice Models */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold">Top Voice Models</h3>
          <button className="text-sm text-primary font-semibold hover:underline cursor-pointer">Browse</button>
        </div>
        <div className="space-y-3">
          <VoiceModelCard 
            name="Ethan (Pro)" 
            type="Energetic • Commercial" 
            icon={UserCircle} 
            colorClass="bg-blue-100 text-blue-600" 
          />
          <VoiceModelCard 
            name="Sophia (Narrative)" 
            type="Calm • Educational" 
            icon={MessageSquare} 
            colorClass="bg-purple-100 text-purple-600" 
          />
          <VoiceModelCard 
            name="Mia (Expressive)" 
            type="Playful • Creative" 
            icon={Smile} 
            colorClass="bg-pink-100 text-pink-600" 
          />
          <button className="w-full py-3 border border-dashed border-slate-300 rounded-xl text-slate-500 text-sm font-medium hover:bg-slate-50 transition-colors cursor-pointer">
            + Create Custom Model
          </button>
        </div>
      </div>
    </div>
    
    {/* Footer Spacer */}
    <div className="h-10"></div>
  </div>
);

export default DashboardPage