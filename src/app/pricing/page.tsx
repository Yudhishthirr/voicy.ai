"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { 
  AudioWaveform, Menu, X, Check, X as XIcon, ChevronDown 
} from "lucide-react";

// FAQ Data
const faqs = [
  {
    question: "Can I change plans at any time?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
  },
  {
    question: "How does the free trial work?",
    answer: "Our 14-day free trial gives you full access to the Creator plan features. No credit card is required to start. If you don't upgrade by the end of the trial, your account will automatically downgrade to the Free plan."
  },
  {
    question: "What happens if I run out of characters?",
    answer: "If you reach your character limit, you can either upgrade your plan for a higher limit or purchase additional character credits à la carte from your dashboard."
  },
  {
    question: "Are the voices really AI generated?",
    answer: "Yes, all our voices are generated using advanced neural networks trained on high-fidelity audio, making them nearly indistinguishable from real human voices."
  }
];

export default function PricingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [billingMode, setBillingMode] = useState<'credits' | 'monthly'>('monthly');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0); // First one open by default

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 font-sans selection:bg-violet-100 selection:text-violet-900">
      
      {/* --- Navbar --- */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-violet-600 rounded-md flex items-center justify-center">
              <AudioWaveform className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight">Voicy.ai</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-violet-600 transition-colors">Features</a>
            <a href="#" className="text-violet-600 transition-colors">Pricing</a>
            <a href="#" className="hover:text-violet-600 transition-colors">About</a>
            <a href="#" className="hover:text-violet-600 transition-colors">Contact</a>
          </nav>
          
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="text-sm font-medium text-slate-600 hover:text-slate-900">
              Log In
            </Button>
            <Button className="bg-violet-600 hover:bg-violet-700 text-white rounded-md px-6">
              Sign Up
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
              <a href="#" className="text-violet-600 transition-colors">Pricing</a>
              <a href="#" className="hover:text-violet-600 transition-colors">About</a>
              <a href="#" className="hover:text-violet-600 transition-colors">Contact</a>
            </nav>
            <hr className="border-slate-100 my-2" />
            <div className="flex flex-col gap-3">
              <Button variant="outline" className="w-full border-slate-200">
                Log In
              </Button>
              <Button className="w-full bg-violet-600 hover:bg-violet-700 text-white">
                Sign Up
              </Button>
            </div>
          </div>
        )}
      </header>

      <main className="pb-24">
        {/* --- Header & Toggle Section --- */}
        <section className="pt-20 pb-16 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Simple & Transparent Pricing
          </h1>
          <p className="text-slate-500 text-lg max-w-xl mx-auto mb-10">
            Choose the plan that's right for your voice generation needs. Scale your creativity with high-fidelity AI voices.
          </p>

          <div className="inline-flex bg-slate-100/80 p-1.5 rounded-full border border-slate-200/60 shadow-sm mb-12">
            <button 
              onClick={() => setBillingMode('credits')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                billingMode === 'credits' 
                  ? 'bg-white text-slate-900 shadow-sm' 
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Credit Based
            </button>
            <button 
              onClick={() => setBillingMode('monthly')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                billingMode === 'monthly' 
                  ? 'bg-white text-slate-900 shadow-sm' 
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Monthly Plans
            </button>
          </div>
        </section>

        {/* --- Pricing Cards Section --- */}
        <section className="container mx-auto px-4 sm:px-6 md:px-8 max-w-6xl mb-24">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            
            {/* Free Plan */}
            <Card className="border-slate-200 shadow-sm rounded-2xl bg-white h-fit">
              <CardHeader className="pt-8 pb-4">
                <CardTitle className="text-xl font-bold text-slate-900">Free</CardTitle>
                <div className="mt-4 mb-2 flex items-baseline text-5xl font-extrabold">
                  $0
                  <span className="text-lg font-medium text-slate-500 ml-1">/mo</span>
                </div>
                <CardDescription className="text-slate-500">
                  Perfect for trying out Voicy.ai
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-6">
                <Button className="w-full bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold mb-8 h-12 rounded-xl">
                  Get Started
                </Button>
                <ul className="space-y-4 text-sm text-slate-600">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 shrink-0" /> Basic Voice Synthesis
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 shrink-0" /> 3 Projects
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 shrink-0" /> Standard Support
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Creator Plan (Most Popular) */}
            <Card className="border-violet-500 shadow-xl shadow-violet-500/10 rounded-2xl bg-white relative transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Badge className="bg-violet-600 hover:bg-violet-600 text-white px-4 py-1 text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
                  Most Popular
                </Badge>
              </div>
              <CardHeader className="pt-10 pb-4">
                <CardTitle className="text-xl font-bold text-slate-900">Creator</CardTitle>
                <div className="mt-4 mb-2 flex items-baseline text-5xl font-extrabold">
                  $15
                  <span className="text-lg font-medium text-slate-500 ml-1">/mo</span>
                </div>
                <CardDescription className="text-slate-500">
                  For independent content creators
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-8">
                <Button className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold mb-8 h-12 rounded-xl shadow-md shadow-violet-600/20">
                  Start Free Trial
                </Button>
                <ul className="space-y-4 text-sm text-slate-600">
                  <li className="flex items-center gap-3 font-medium">
                    <Check className="w-5 h-5 text-violet-600 shrink-0" /> Everything in Free
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-violet-600 shrink-0" /> 10 High-Fidelity Voices
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-violet-600 shrink-0" /> Unlimited Projects
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-violet-600 shrink-0" /> Priority Support
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="border-slate-200 shadow-sm rounded-2xl bg-white h-fit">
              <CardHeader className="pt-8 pb-4">
                <CardTitle className="text-xl font-bold text-slate-900">Pro</CardTitle>
                <div className="mt-4 mb-2 flex items-baseline text-5xl font-extrabold">
                  $39
                  <span className="text-lg font-medium text-slate-500 ml-1">/mo</span>
                </div>
                <CardDescription className="text-slate-500">
                  Advanced tools for professionals
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-6">
                <Button className="w-full bg-[#0f111a] hover:bg-slate-800 text-white font-semibold mb-8 h-12 rounded-xl">
                  Contact Sales
                </Button>
                <ul className="space-y-4 text-sm text-slate-600">
                  <li className="flex items-center gap-3 font-medium">
                    <Check className="w-5 h-5 text-slate-900 shrink-0" /> Everything in Creator
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-slate-900 shrink-0" /> Custom Voice Cloning
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-slate-900 shrink-0" /> API Access
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-slate-900 shrink-0" /> 24/7 Dedicated Support
                  </li>
                </ul>
              </CardContent>
            </Card>

          </div>
        </section>

        {/* --- Feature Comparison Section --- */}
        <section className="container mx-auto px-4 sm:px-6 md:px-8 max-w-5xl mb-24">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-10 text-slate-900">
            Feature Comparison
          </h2>
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden overflow-x-auto">
            <table className="w-full text-sm text-left min-w-[600px]">
              <thead className="bg-white border-b border-slate-100">
                <tr>
                  <th className="px-6 py-6 font-bold text-slate-900 w-1/4">Features</th>
                  <th className="px-6 py-6 font-bold text-slate-900 text-center w-1/4">Free</th>
                  <th className="px-6 py-6 font-bold text-violet-600 text-center w-1/4">Creator</th>
                  <th className="px-6 py-6 font-bold text-slate-900 text-center w-1/4">Pro</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                <tr>
                  <td className="px-6 py-5 font-medium">Monthly Characters</td>
                  <td className="px-6 py-5 text-center">10,000</td>
                  <td className="px-6 py-5 text-center font-semibold text-violet-600">100,000</td>
                  <td className="px-6 py-5 text-center">Unlimited</td>
                </tr>
                <tr>
                  <td className="px-6 py-5 font-medium">Voice Library</td>
                  <td className="px-6 py-5 text-center">Standard</td>
                  <td className="px-6 py-5 text-center font-semibold text-violet-600">Premium + Standard</td>
                  <td className="px-6 py-5 text-center">All Voices + Custom</td>
                </tr>
                <tr>
                  <td className="px-6 py-5 font-medium">Audio Quality</td>
                  <td className="px-6 py-5 text-center">128kbps</td>
                  <td className="px-6 py-5 text-center font-semibold text-violet-600">High Fidelity</td>
                  <td className="px-6 py-5 text-center">Lossless Studio</td>
                </tr>
                <tr>
                  <td className="px-6 py-5 font-medium">Commercial Rights</td>
                  <td className="px-6 py-5 text-center">
                    <XIcon className="w-5 h-5 text-slate-300 mx-auto" />
                  </td>
                  <td className="px-6 py-5 text-center">
                    <Check className="w-5 h-5 text-violet-600 mx-auto" />
                  </td>
                  <td className="px-6 py-5 text-center">
                    <Check className="w-5 h-5 text-slate-900 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-5 font-medium">API Support</td>
                  <td className="px-6 py-5 text-center">
                    <XIcon className="w-5 h-5 text-slate-300 mx-auto" />
                  </td>
                  <td className="px-6 py-5 text-center">
                    <XIcon className="w-5 h-5 text-slate-300 mx-auto" />
                  </td>
                  <td className="px-6 py-5 text-center">
                    <Check className="w-5 h-5 text-slate-900 mx-auto" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* --- FAQ Section --- */}
        <section className="container mx-auto px-4 sm:px-6 md:px-8 max-w-3xl mb-24">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-10 text-slate-900">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-all duration-200"
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between bg-white focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-semibold text-left text-slate-900 pr-4">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      openFaqIndex === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                <div 
                  className={`px-6 text-slate-500 text-sm leading-relaxed overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaqIndex === index ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- CTA Section --- */}
        <section className="container mx-auto px-4 sm:px-6 md:px-8 max-w-5xl">
          <div className="bg-violet-600 rounded-[2rem] p-10 md:p-16 text-center text-white relative overflow-hidden">
            {/* Background decorative gradients */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-64 h-64 md:w-96 md:h-96 bg-violet-500 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-64 h-64 md:w-96 md:h-96 bg-violet-700 rounded-full blur-3xl opacity-50" />
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
                Ready to transform your audio content?
              </h2>
              <p className="text-violet-100 text-base mb-10">
                Join over 10,000 creators using Voicy.ai to bring their ideas to life.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 px-4 sm:px-0">
                <Button size="lg" className="w-full sm:w-auto bg-white text-violet-900 hover:bg-slate-50 rounded-lg px-8 py-6 text-base font-semibold">
                  Start for Free
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-violet-400 text-white hover:bg-violet-500/50 rounded-lg px-8 py-6 text-base font-semibold bg-transparent">
                  Schedule a Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* --- Footer --- */}
      <footer className="bg-white py-8 border-t border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
            
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-violet-600 rounded-[4px] flex items-center justify-center">
                <AudioWaveform className="w-3 h-3 text-white" />
              </div>
              <span className="font-bold text-lg tracking-tight">Voicy.ai</span>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-500 font-medium">
              <a href="#" className="hover:text-violet-600 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-violet-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-violet-600 transition-colors">Cookies</a>
            </div>

            <div className="text-xs text-slate-400">
              © 2024 Voicy.ai. All rights reserved.
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
}