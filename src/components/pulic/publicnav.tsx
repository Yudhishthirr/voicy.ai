"use client";
import { Button } from "@/components/ui/button";
import {
  AudioWaveform, Menu, X, 
} from "lucide-react";

import { useRouter } from 'next/navigation';
import { useState } from "react";

export const Publicnav = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  
  return (
     <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => router.push("/")}>
            <div className="w-6 h-6 bg-violet-600 rounded-md flex items-center justify-center">
              <AudioWaveform className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight">Voicy.ai</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="/pricing" className="hover:text-violet-600 transition-colors">Pricing</a>
            {/* <a href="#" className="hover:text-violet-600 transition-colors">Features</a>
            <a href="#" className="hover:text-violet-600 transition-colors">Enterprise</a>
            <a href="#" className="hover:text-violet-600 transition-colors">Docs</a> */}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="/dashboard" className="text-sm font-medium text-slate-600 hover:text-slate-900">Log In</a>
            <Button className="bg-violet-600 hover:bg-violet-700 text-white rounded-full px-6 cursor-pointer" onClick={() => router.push("/dashboard")}>
              Get Started
            </Button>
          </div>

          <button
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-slate-100 shadow-lg px-4 py-6 flex flex-col gap-4 z-40">
            <nav className="flex flex-col gap-4 text-base font-medium text-slate-600">
              <a href="#" className="hover:text-violet-600 transition-colors">Features</a>
              <a href="#" className="hover:text-violet-600 transition-colors">Pricing</a>
              <a href="#" className="hover:text-violet-600 transition-colors">Enterprise</a>
              <a href="#" className="hover:text-violet-600 transition-colors">Docs</a>
            </nav>
            <hr className="border-slate-100 my-2" />
            <div className="flex flex-col gap-3">
              <Button variant="outline" className="w-full border-slate-200">Log In</Button>
              <Button className="w-full bg-violet-600 hover:bg-violet-700 text-white">Get Started</Button>
            </div>
          </div>
        )}
      </header>
  )
}
