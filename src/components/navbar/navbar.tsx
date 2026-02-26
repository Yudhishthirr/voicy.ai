"use client";

import { Search, Bell, HelpCircle } from "lucide-react";
import { UserButton, SignedIn } from "@clerk/nextjs";

export const Navbar = () => (
  <header className="h-16 border-b border-slate-200 bg-white/80 backdrop-blur-md px-8 flex items-center justify-between sticky top-0 z-20">

    {/* Search */}
    <div className="flex items-center gap-4 flex-1">
      <div className="relative w-full max-w-md">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          size={16}
        />

        <input
          className="w-full pl-10 pr-4 py-2 bg-slate-100 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 outline-none"
          placeholder="Search voices, generations..."
        />
      </div>
    </div>

    {/* Right Side */}
    <div className="flex items-center gap-4">

      <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg">
        <Bell size={20} />
      </button>

      <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg">
        <HelpCircle size={20} />
      </button>

      <div className="h-8 w-px bg-slate-200 mx-2"></div>

      {/* Clerk User */}
      <SignedIn>
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: "w-9 h-9",
            },
          }}
        />
      </SignedIn>

    </div>
  </header>
);