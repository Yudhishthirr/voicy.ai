
import { 
  AudioLines, 
  LayoutDashboard, 
  Mic2, 
  Copy, 
  Library, 
  User, 
  Settings, 
} from 'lucide-react';

export const Sidebar = () => (
    <aside className="w-64 border-r border-slate-200 flex flex-col bg-white z-10 h-screen sticky top-0">
      <div className="p-6 flex items-center gap-3">
        <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
          <AudioLines size={20} />
        </div>
        <h2 className="text-xl font-bold tracking-tight">Voicy.ai</h2>
      </div>
      
      <nav className="flex-1 px-4 space-y-1 mt-4">
        <a className="sidebar-link-active" href="#">
          <LayoutDashboard size={18} />
          Dashboard
        </a>
        <a className="sidebar-link" href="#">
          <Mic2 size={18} />
          Text to Voice
        </a>
        <a className="sidebar-link" href="#">
          <Copy size={18} />
          Voice Clone
        </a>
        <a className="sidebar-link" href="#">
          <Library size={18} />
          Library
        </a>
        
        <div className="pt-4 pb-2 text-xs font-semibold text-slate-400 uppercase tracking-wider px-3">
          Account
        </div>
        <a className="sidebar-link" href="#">
          <User size={18} />
          Profile
        </a>
        <a className="sidebar-link" href="#">
          <Settings size={18} />
          Settings
        </a>
      </nav>
  
      <div className="p-4 border-t border-slate-200">
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold">Credits</span>
            <span className="text-xs text-slate-500">2,450 left</span>
          </div>
          <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
            <div className="bg-primary h-full w-3/4"></div>
          </div>
          <button className="w-full py-2 bg-primary text-white text-xs font-bold rounded-lg hover:opacity-90 transition-opacity cursor-pointer">
            Upgrade Plan
          </button>
        </div>
      </div>
    </aside>
  );
  