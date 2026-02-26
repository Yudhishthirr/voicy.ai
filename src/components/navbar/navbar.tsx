
import { Search, Bell, HelpCircle } from 'lucide-react';

export const Navbar = () => (
  <header className="h-16 border-b border-slate-200 bg-white/80 backdrop-blur-md px-8 flex items-center justify-between sticky top-0 z-20">
    <div className="flex items-center gap-4 flex-1">
      <div className="relative w-full max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
        <input 
          className="w-full pl-10 pr-4 py-2 bg-slate-100 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary/20 outline-none" 
          placeholder="Search voices, generations..." 
          type="text"
        />
      </div>
    </div>
    
    <div className="flex items-center gap-4">
      <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer">
        <Bell size={20} />
      </button>
      <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer">
        <HelpCircle size={20} />
      </button>
      <div className="h-8 w-px bg-slate-200 mx-2"></div>
      <div className="flex items-center gap-3">
        <div className="text-right hidden sm:block">
          <p className="text-xs font-semibold">Alex Rivera</p>
          <p className="text-[10px] text-slate-500">Pro Plan</p>
        </div>
        <img 
          alt="Profile" 
          className="size-8 rounded-full border border-slate-200 object-cover" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKivGZXK1O-UNt1eUL_ksFBHj9FN-l9nceE5CToDA2pZWzq8EGmIbsyMi4tCPBmiHLR1kXIaJjVRegr4oeKSGacXczmOxQ4fyKvJi-DhDmWxwepnYcekOVcgRdMCEcYiX_-wd15WpOvdZrxabmrcVnZQZfSbLNlKIlc5b-27kEbNmX6uIo1VaYATORAK3wBwXAhoQP1kx8s9llEeBZiiB3FQ68I5Bq2R37h6A73yUNKmbyP02ENXSwEiQpuWKHzTGfILH2UKSwA8M"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  </header>
);
