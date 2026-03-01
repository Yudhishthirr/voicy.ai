"use client"
import { GenerationsTable } from '@/components/dashboard/cards/Generations';
import { StatCard } from '@/components/dashboard/cards/StatCard';
import { UsageTrendCard } from '@/components/dashboard/cards/UsageTrendCard';
import { VoiceModelCard } from '@/components/dashboard/cards/VoiceModelCard';
import {
  Download,
  Plus,
  BarChart3,
  Clock,
  Smile,
  UserCircle,
  MessageSquare
} from 'lucide-react';

import Link from 'next/link';


const DashboardUI = () => {

  
  return (
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
            <Link
              href="/dashboard/text-voice"
              className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity cursor-pointer"
            >
              <Plus size={16} />
              New Generation
            </Link>
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
              <Link href={"/dashboard/library"} className="text-sm text-primary font-semibold hover:underline cursor-pointer">View All</Link>
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

            </div>
          </div>
        </div>

        {/* Footer Spacer */}
        <div className="h-10"></div>
      </div>
  );
};

export default DashboardUI