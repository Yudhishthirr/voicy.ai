"use client"
import {
  AudioLines,
  LayoutDashboard,
  Mic2,
  Copy,
  Library,
  User,
  Settings,
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from "next/link";

export const Sidebar = () => {
  const pathname = usePathname();

  // Helper function: Now uses font-semibold for inactive, font-bold for active
  const getLinkClass = (path: string) => {
    const isActive = pathname === path;
    return `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${isActive
        ? "bg-violet-100 text-violet-700 font-bold" // Active style
        : "text-slate-600 hover:bg-slate-100 font-semibold" // Inactive style
      }`;
  };

  return (
    <aside className="w-64 border-r border-slate-200 flex flex-col bg-white z-10 h-screen sticky top-0">
      <div className="p-6 flex items-center gap-3">
        <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
          <AudioLines size={20} />
        </div>
        <h2 className="text-xl font-bold tracking-tight">Voicy.ai</h2>
      </div>

      <nav className="flex-1 px-4 space-y-1 mt-4">
        <Link
          href="/dashboard"
          className={getLinkClass("/dashboard")}
        >
          <LayoutDashboard size={18} />
          Dashboard
        </Link>

        <Link
          href="/dashboard/text-voice"
          className={getLinkClass("/dashboard/text-voice")}
        >
          <Mic2 size={18} />
          Text to Voice
        </Link>

        <Link
          href="/dashboard/voice-clone"
          className={getLinkClass("/dashboard/voice-clone")}
        >
          <Copy size={18} />
          Voice Clone
        </Link>

        <Link
          href="/dashboard/library"
          className={getLinkClass("/dashboard/library")}
        >
          <Library size={18} />
          Library
        </Link>

        <div className="pt-4 pb-2 text-xs font-bold text-slate-400 uppercase tracking-wider px-3">
          Account
        </div>

        <Link
          href="/dashboard/profile"
          className={getLinkClass("/dashboard/profile")}
        >
          <User size={18} />
          Profile
        </Link>


      </nav>

      <div className="p-4 border-t border-slate-200">
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <span className="text-sm font-bold">Credits</span>
            <span className="text-xs font-semibold text-slate-500">2,450 left</span>
          </div>
          <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
            <div className="bg-primary h-full w-3/4"></div>
          </div>

          <Link
            href="/pricing"
            className="w-full py-2 bg-primary text-white text-xs font-bold rounded-lg hover:opacity-90 transition-opacity cursor-pointer flex justify-center items-center"
          >
            Upgrade Plan
          </Link>
        </div>
      </div>
    </aside>
  );
};