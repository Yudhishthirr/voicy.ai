"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Sparkles, Play, Mic, AudioWaveform, Zap, Cloud, 
  LayoutDashboard, Mic2, Library, Download, PlayCircle, 
  Twitter, Linkedin, Github, Circle, Menu, X
} from "lucide-react";

export default function LandingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-violet-100 selection:text-violet-900 relative">
      
      {/* --- Navbar --- */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-violet-600 rounded-md flex items-center justify-center">
              <AudioWaveform className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight">Voicy.ai</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-violet-600 transition-colors">Features</a>
            <a href="#" className="hover:text-violet-600 transition-colors">Pricing</a>
            <a href="#" className="hover:text-violet-600 transition-colors">Enterprise</a>
            <a href="#" className="hover:text-violet-600 transition-colors">Docs</a>
          </nav>
          
          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a href="/dashboard" className="text-sm font-medium text-slate-600 hover:text-slate-900">Log In</a>
            <Button className="bg-violet-600 hover:bg-violet-700 text-white rounded-full px-6">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
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
              <Button variant="outline" className="w-full border-slate-200">
                Log In
              </Button>
              <Button className="w-full bg-violet-600 hover:bg-violet-700 text-white">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* --- Hero Section --- */}
        <section className="container mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-24 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div className="flex flex-col gap-5 md:gap-6 items-start">
            <Badge variant="secondary" className="bg-violet-50 text-violet-700 hover:bg-violet-100 px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider border border-violet-200">
              <Sparkles className="w-3 h-3 mr-1.5 sm:mr-2" /> NEW: V3 NEURAL ENGINE IS LIVE!
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
              Create <span className="text-violet-600">Ultra-Realistic</span> AI Voices in Seconds
            </h1>
            
            <p className="text-base sm:text-lg text-slate-600 max-w-lg leading-relaxed">
              Experience the next-generation of AI voice synthesis. Transform text into natural speech with unmatched clarity and emotional depth.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-2 w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-violet-600 hover:bg-violet-700 text-white rounded-full px-8 py-6 text-base shadow-lg shadow-violet-600/20">
                Start Generating <Sparkles className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-8 py-6 text-base border-slate-200 hover:bg-slate-50">
                <Play className="w-4 h-4 mr-2" /> Try Demo
              </Button>
            </div>
            
            <div className="flex items-center gap-3 mt-6 lg:mt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white" />
                ))}
              </div>
              <span className="text-xs sm:text-sm text-slate-500 font-medium">Trusted by 2,000+ creators and studios</span>
            </div>
          </div>
          
          {/* Hero Image / Mockup Area */}
          <div className="relative mt-8 lg:mt-0 w-full">
            <div className="absolute inset-0 bg-violet-500/10 blur-3xl rounded-full" />
            <div className="relative bg-[#0f111a] rounded-xl sm:rounded-2xl border border-slate-800 shadow-2xl overflow-hidden aspect-[4/3] sm:aspect-video lg:aspect-[4/3] flex flex-col">
              {/* Fake Window Header */}
              <div className="h-8 sm:h-10 bg-[#161925] border-b border-slate-800 flex items-center px-3 sm:px-4 gap-2">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/80" />
                <div className="mx-auto bg-slate-800/50 rounded text-[8px] sm:text-[10px] px-2 sm:px-3 py-1 text-slate-400 font-mono hidden sm:block">WORKSPACE: MAIN</div>
              </div>
              {/* Fake Content */}
              <div className="p-4 sm:p-8 flex-1 flex flex-col justify-center gap-3 sm:gap-4 relative">
                <div className="w-full h-10 sm:h-12 bg-slate-800/50 rounded-lg border border-slate-700 flex items-center px-3 sm:px-4 text-slate-400 text-xs sm:text-sm truncate">
                  Type your script here to generate voice...
                </div>
                <div className="flex gap-3 sm:gap-4 h-24 sm:h-32">
                  <div className="flex-1 bg-violet-900/20 border border-violet-800/30 rounded-lg flex items-center justify-center">
                    <AudioWaveform className="w-8 h-8 sm:w-16 sm:h-16 text-violet-500" />
                  </div>
                  <div className="w-24 sm:w-48 bg-slate-800/50 rounded-lg border border-slate-700 p-2 sm:p-4 flex flex-col justify-end">
                    <div className="w-full h-6 sm:h-8 bg-violet-600 rounded-md sm:mb-2 flex items-center justify-center text-[10px] sm:text-xs font-bold text-white">GENERATE</div>
                  </div>
                </div>
                {/* Floating widget in mockup */}
                <div className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 bg-white rounded-xl shadow-lg p-2 sm:p-3 flex items-center gap-2 sm:gap-3 border border-slate-100 scale-90 sm:scale-100 origin-bottom-right">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-100" />
                  <div>
                    <div className="text-[10px] sm:text-xs font-bold text-slate-900">Arthur/Reading</div>
                    <div className="text-[8px] sm:text-[10px] text-slate-500">Audio Generated</div>
                  </div>
                  <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 ml-1 sm:ml-2" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Features Section --- */}
        <section className="bg-slate-50 py-16 md:py-20 border-y border-slate-100">
          <div className="container mx-auto px-4 sm:px-6 md:px-8">
            <div className="mb-10 max-w-2xl text-center md:text-left mx-auto md:mx-0">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3 sm:mb-4">Powerful Features for Creators</h2>
              <p className="text-slate-600 text-base sm:text-lg">Everything you need to scale your audio production with enterprise-grade AI technology.</p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                { icon: Mic, title: "Text to Voice", desc: "Convert any text into high-quality, emotionally expressive speech instantly." },
                { icon: AudioWaveform, title: "Voice Cloning", desc: "Create a perfect digital twin of any voice with just minutes of audio data." },
                { icon: Zap, title: "Fast Generation", desc: "Render long-form content in seconds with our highly optimized cloud infrastructure." },
                { icon: Cloud, title: "Cloud Library", desc: "Securely store, organize, and manage all your generated audio assets in one dashboard." }
              ].map((feature, i) => (
                <Card key={i} className="bg-white border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-5 sm:p-6">
                    <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-4">
                      <feature.icon className="w-5 h-5 text-slate-700" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* --- How it Works Section --- */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3 sm:mb-4 flex items-center justify-center gap-2">
              How it Works
            </h2>
            <p className="text-slate-600 mb-12 sm:mb-16 max-w-xl mx-auto text-base">
              Getting from text to high-fidelity audio is a simple 3-step process designed for speed and quality.
            </p>
            
            <div className="grid md:grid-cols-3 gap-10 md:gap-12 max-w-4xl mx-auto relative">
              {/* Connecting line for desktop */}
              <div className="hidden md:block absolute top-6 left-[16%] right-[16%] h-[1px] bg-slate-100 -z-10" />
              
              {[
                { step: "1", title: "Input Script", desc: "Write directly in our text editor or upload your script files (doc, docx, pdf)." },
                { step: "2", title: "Choose Voice", desc: "Select from our library of 500+ premium voices or use your custom cloned voice." },
                { step: "3", title: "Render & Export", desc: "Hit generate and download your high-fidelity MP3 or WAV file in seconds." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-violet-50 text-violet-600 flex items-center justify-center font-bold text-lg mb-4 sm:mb-6 shadow-sm border border-violet-100">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed px-4 md:px-0">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- App Interface Demo Section --- */}
        <section className="py-16 md:py-20 bg-slate-50 relative overflow-hidden px-4">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-violet-400/20 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="container mx-auto px-0 sm:px-4 md:px-8 relative z-10">
            <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden flex flex-col md:flex-row max-w-5xl mx-auto">
              
              {/* Sidebar */}
              <div className="w-full md:w-64 bg-slate-50/50 border-b md:border-b-0 md:border-r border-slate-100 p-4 flex flex-row md:flex-col justify-between overflow-x-auto">
                <div className="flex flex-row md:flex-col space-x-2 md:space-x-0 md:space-y-1 min-w-max md:min-w-0">
                  <div className="flex items-center gap-2 sm:gap-3 px-3 py-2 bg-violet-100 text-violet-700 rounded-lg text-xs sm:text-sm font-medium">
                    <LayoutDashboard className="w-4 h-4" /> <span className="hidden sm:inline">Dashboard</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 px-3 py-2 text-slate-600 hover:bg-slate-100 rounded-lg text-xs sm:text-sm font-medium transition-colors cursor-pointer">
                    <Mic2 className="w-4 h-4" /> <span className="hidden sm:inline">Voice Lab</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 px-3 py-2 text-slate-600 hover:bg-slate-100 rounded-lg text-xs sm:text-sm font-medium transition-colors cursor-pointer">
                    <Library className="w-4 h-4" /> <span className="hidden sm:inline">My Library</span>
                  </div>
                </div>
                <div className="hidden md:block mt-8 bg-[#0f111a] rounded-xl p-4 text-white">
                  <div className="text-[10px] text-slate-400 font-semibold mb-1 uppercase tracking-wider">Words Balance</div>
                  <div className="text-xl font-bold mb-3">12,450</div>
                  <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-violet-500 w-3/4" />
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 p-4 sm:p-6 md:p-8 bg-white overflow-hidden">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                  <h3 className="text-xl font-bold">New Project</h3>
                  <div className="flex gap-2 w-full sm:w-auto">
                    <Button variant="outline" size="sm" className="text-slate-600 flex-1 sm:flex-none">History</Button>
                    <Button size="sm" className="bg-violet-600 hover:bg-violet-700 text-white flex-1 sm:flex-none">Save Project</Button>
                  </div>
                </div>
                
                {/* Voice Selection Pills (Scrollable on Mobile) */}
                <div className="flex gap-2 mb-6 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 hide-scrollbar">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-violet-50 border border-violet-200 text-violet-700 rounded-full text-xs font-semibold whitespace-nowrap">
                    <Mic className="w-3 h-3" /> Sarah (US, Narration)
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-600 rounded-full text-xs font-medium whitespace-nowrap hover:bg-slate-100 cursor-pointer">
                    Emotion: Excited
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-600 rounded-full text-xs font-medium whitespace-nowrap hover:bg-slate-100 cursor-pointer">
                    Speed: 1.0x
                  </div>
                </div>

                {/* Text Area */}
                <div className="border border-slate-200 rounded-xl p-3 sm:p-4 min-h-[150px] sm:min-h-[200px] mb-6 focus-within:ring-2 focus-within:ring-violet-500/20 focus-within:border-violet-500 transition-all">
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed outline-none">
                    Welcome to the future of voice generation. With Voicy.ai, you can transform your creative visions into high-quality auditory experiences. Our neural engines are trained on thousands of hours of high-fidelity human speech to ensure every nuance and breath sounds completely natural.
                  </p>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center bg-slate-50 border border-slate-100 p-3 rounded-xl">
                  <Button className="w-full sm:w-auto bg-violet-600 hover:bg-violet-700 text-white rounded-lg px-6">
                    <PlayCircle className="w-4 h-4 mr-2" /> Generate Audio
                  </Button>
                  
                  <div className="flex-1 flex items-center gap-2 sm:gap-3 px-2 sm:px-4 w-full">
                    <span className="text-[10px] sm:text-xs text-slate-400 font-medium w-6 sm:w-8">0:00</span>
                    <div className="h-1.5 flex-1 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-violet-500 w-1/3" />
                    </div>
                    <span className="text-[10px] sm:text-xs text-slate-400 font-medium w-6 sm:w-8">0:14</span>
                  </div>
                  
                  <Button variant="ghost" size="icon" className="text-slate-500 hover:text-violet-600 hidden sm:flex shrink-0">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- CTA Section --- */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 md:px-8">
            <div className="bg-violet-600 rounded-[2rem] md:rounded-[2.5rem] p-8 sm:p-12 md:p-20 text-center text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-64 h-64 md:w-96 md:h-96 bg-violet-500 rounded-full blur-3xl opacity-50" />
              <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-64 h-64 md:w-96 md:h-96 bg-violet-700 rounded-full blur-3xl opacity-50" />
              
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 md:mb-6">Ready to bring your stories to life?</h2>
                <p className="text-violet-100 text-base md:text-lg mb-8 md:mb-10">
                  Join over 2,000+ creators who are already using Voicy.ai to automate their voiceover production.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 w-full px-4 sm:px-0">
                  <Button size="lg" className="w-full sm:w-auto bg-white text-violet-900 hover:bg-slate-50 rounded-full px-8 py-6 text-base font-semibold">
                    Start Free Trial
                  </Button>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-violet-400 text-white hover:bg-violet-500/50 rounded-full px-8 py-6 text-base font-semibold bg-transparent">
                    Talk to Sales
                  </Button>
                </div>
                <p className="mt-6 text-violet-200 text-xs sm:text-sm">
                  No credit card required • 14-day free trial • Cancel anytime
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* --- Footer --- */}
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
                <li><a href="#" className="hover:text-violet-600 transition-colors">Voice Lab</a></li>
                <li><a href="#" className="hover:text-violet-600 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-violet-600 transition-colors">API</a></li>
              </ul>
            </div>
            
            <div className="col-span-1">
              <h4 className="font-semibold mb-3 md:mb-4 text-slate-900 text-sm md:text-base">Company</h4>
              <ul className="space-y-2 md:space-y-3 text-sm text-slate-500">
                <li><a href="#" className="hover:text-violet-600 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-violet-600 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-violet-600 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-violet-600 transition-colors">Press</a></li>
              </ul>
            </div>
            
            <div className="col-span-2 lg:col-span-1">
              <h4 className="font-semibold mb-3 md:mb-4 text-slate-900 text-sm md:text-base">Legal</h4>
              <ul className="space-y-2 md:space-y-3 text-sm text-slate-500 flex flex-row lg:flex-col gap-4 lg:gap-0 flex-wrap">
                <li><a href="#" className="hover:text-violet-600 transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-violet-600 transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-violet-600 transition-colors">Cookies</a></li>
                <li><a href="#" className="hover:text-violet-600 transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col-reverse md:flex-row justify-between items-center pt-8 border-t border-slate-100 text-[10px] sm:text-xs text-slate-400 gap-4 md:gap-0">
            <p>© 2024 Voicy AI Technologies Inc. All rights reserved.</p>
            <div className="flex items-center gap-2">
              <Circle className="w-2 h-2 fill-green-500 text-green-500" />
              <span>SYSTEM STATUS: OPERATIONAL</span>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Hide scrollbar utility for Webkit */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
}

function CheckCircle2(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
    >
      <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.76 11.7574L11.0026 16Z"></path>
    </svg>
  );
}