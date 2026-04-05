"use client";
import { Button } from "@/components/ui/button";
import {
  AudioWaveform, Circle, Github, Linkedin, Menu, Twitter, X, 
} from "lucide-react";

import { useRouter } from 'next/navigation';
import { useState } from "react";

export const PublicFooter = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  
  return (
        <footer className="bg-white pt-12 md:pt-16 pb-8 border-t border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-8 mb-12 md:mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-4 md:mb-6">
                <div className="w-6 h-6 bg-violet-600 rounded-md flex items-center justify-center">
                  <AudioWaveform className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold text-xl tracking-tight">Voicy.ai</span>
              </div>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-xs mb-6">
                The world's most advanced AI voice synthesis platform for professional creators, developers, and global brands.
              </p>
              <div className="flex items-center gap-4 text-slate-400">
                <a href="#" className="hover:text-violet-600 transition-colors"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="hover:text-violet-600 transition-colors"><Linkedin className="w-5 h-5" /></a>
                <a href="#" className="hover:text-violet-600 transition-colors"><Github className="w-5 h-5" /></a>
              </div>
            </div>
            
            <div className="col-span-1">
              <h4 className="font-semibold mb-3 md:mb-4 text-slate-900 text-sm md:text-base">Product</h4>
              <ul className="space-y-2 md:space-y-3 text-sm text-slate-500">
                <li><a href="#" className="hover:text-violet-600 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-violet-600 transition-colors">Pricing</a></li>
  
              </ul>
            </div>
            
            <div className="col-span-1">
              <h4 className="font-semibold mb-3 md:mb-4 text-slate-900 text-sm md:text-base">About Us</h4>
              <ul className="space-y-2 md:space-y-3 text-sm text-slate-500">
                <li><a href="https://www.instagram.com/yudhishthir.ai/" target="_blank" className="hover:text-violet-600 transition-colors">Instgram</a></li>
                <li><a href="https://x.com/yudhishthiir" target="_blank" className="hover:text-violet-600 transition-colors">X</a></li>
                <li><a href="https://www.linkedin.com/in/yudhishthir-kumar/" target="_blank" className="hover:text-violet-600 transition-colors">Linkedin</a></li>

              </ul>
            </div>
            
            <div className="col-span-2 lg:col-span-1">
              <h4 className="font-semibold mb-3 md:mb-4 text-slate-900 text-sm md:text-base">Legal</h4>
              <ul className="space-y-2 md:space-y-3 text-sm text-slate-500 flex flex-row lg:flex-col gap-4 lg:gap-0 flex-wrap">
                <li><a href="/privacy-policy" className="hover:text-violet-600 transition-colors">Privacy</a></li>
                <li><a href="/terms" className="hover:text-violet-600 transition-colors">Terms</a></li>
                <li><a href="/refund-policy" className="hover:text-violet-600 transition-colors">Refund Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col-reverse md:flex-row justify-between items-center pt-8 border-t border-slate-100 text-[10px] sm:text-xs text-slate-400 gap-4 md:gap-0">
            <p>© 2026 Voicy AI Technologies Inc. All rights reserved.</p>
            <div className="flex items-center gap-2">
              <Circle className="w-2 h-2 fill-green-500 text-green-500" />
              <span>SYSTEM STATUS: OPERATIONAL</span>
            </div>
          </div>
        </div>
      </footer>
  )
}
