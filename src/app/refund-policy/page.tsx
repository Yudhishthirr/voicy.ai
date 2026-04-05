"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  AudioWaveform, Twitter, Linkedin, Github, Circle,
  Menu, X, ChevronRight, ReceiptText, Ban,
  BadgeCheck, FileText, Clock, Mail
} from "lucide-react";

import { Publicnav } from '@/components/pulic/publicnav';
import { PublicFooter } from '@/components/pulic/publicfooter';

const sections = [
  { id: "no-refund-policy", number: "01", title: "No Refund Policy", icon: Ban },
  { id: "exceptions", number: "02", title: "Exceptions", icon: BadgeCheck },
  { id: "request-process", number: "03", title: "Request Process", icon: FileText },
  { id: "processing-time", number: "04", title: "Processing Time", icon: Clock },
];

export default function RefundPage() {

  const [activeSection, setActiveSection] = useState("no-refund-policy");
 

  const scrollToSection = (id:any) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 96;
      window.scrollTo({ top, behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-violet-100 selection:text-violet-900 relative">

      {/* --- Navbar --- */}
      <Publicnav/>
      {/* --- Hero Banner --- */}
      <section className="bg-slate-50 border-b border-slate-100 py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-violet-500/5 pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-violet-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-violet-300/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <div className="flex flex-col items-start gap-4 max-w-2xl">
            <Badge variant="secondary" className="bg-violet-50 text-violet-700 hover:bg-violet-100 px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider border border-violet-200">
              <ReceiptText className="w-3 h-3 mr-1.5" /> Legal
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Refund Policy
            </h1>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              Last Updated: January 1, 2025 &nbsp;·&nbsp; Thank you for using Voicy.ai. Please review our refund policy before making a purchase.
            </p>

            {/* Quick info pills */}
            <div className="flex flex-wrap gap-2 mt-2">
              {[
                { icon: Ban, label: "Non-Refundable by Default" },
                { icon: BadgeCheck, label: "Exceptions Available" },
                { icon: Clock, label: "5–7 Business Days" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-xs text-slate-600 font-medium shadow-sm">
                  <Icon className="w-3 h-3 text-violet-500" />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- Main Content --- */}
      <main className="container mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 max-w-6xl mx-auto">

          {/* Sticky Sidebar TOC */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">On this page</p>
              <nav className="flex flex-col gap-1">
                {sections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => scrollToSection(s.id)}
                    className={`flex items-center gap-3 text-left px-3 py-2 rounded-lg text-sm font-medium transition-all group ${
                      activeSection === s.id
                        ? "bg-violet-50 text-violet-700"
                        : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                    }`}
                  >
                    <span className={`text-[10px] font-mono tabular-nums ${activeSection === s.id ? "text-violet-400" : "text-slate-300 group-hover:text-slate-400"}`}>
                      {s.number}
                    </span>
                    <s.icon className={`w-3.5 h-3.5 shrink-0 ${activeSection === s.id ? "text-violet-500" : "text-slate-300 group-hover:text-slate-400"}`} />
                    {s.title}
                    {activeSection === s.id && <ChevronRight className="w-3 h-3 ml-auto text-violet-400" />}
                  </button>
                ))}
              </nav>

              {/* Contact card */}
              <div className="mt-8 p-4 bg-violet-50 border border-violet-100 rounded-xl">
                <p className="text-xs text-violet-700 font-semibold mb-1">Need a refund?</p>
                <p className="text-xs text-violet-600 leading-relaxed">
                  Email us at <a href="mailto:billing@voicy.ai" className="underline underline-offset-2">billing@voicy.ai</a> with your Transaction ID.
                </p>
              </div>

              {/* Related links */}
              <div className="mt-4 p-4 bg-slate-50 border border-slate-100 rounded-xl">
                <p className="text-xs text-slate-500 leading-relaxed">
                  Related:&nbsp;
                  <a href="/terms" className="text-violet-600 hover:underline font-medium">Terms &amp; Conditions</a>
                  &nbsp;·&nbsp;
                  <a href="/privacy" className="text-violet-600 hover:underline font-medium">Privacy Policy</a>
                </p>
              </div>
            </div>
          </aside>

          {/* Policy Content */}
          <article className="flex-1 min-w-0">
            <div className="prose-custom space-y-12">

              {/* Intro */}
              <div className="p-5 bg-slate-50 border border-slate-100 rounded-xl text-sm text-slate-600 leading-relaxed">
                Thank you for choosing <strong className="text-slate-800">Voicy.ai</strong>. This Refund Policy outlines the conditions under which refunds may be issued. By making a purchase on our platform, you acknowledge that you have read and agreed to this policy.
              </div>

              {/* Section 1 — No Refund */}
              <PolicySection id="no-refund-policy" number="01" title="No Refund Policy" onVisible={setActiveSection}>
                <p>All payments made to Voicy.ai — including subscription fees, one-time purchases, and add-on credits — are <strong className="text-slate-700">non-refundable by default</strong>, unless otherwise explicitly stated at the time of purchase or covered under the exceptions outlined in Section 2.</p>

                {/* Visual callout */}
                <div className="my-5 flex items-start gap-4 p-5 bg-amber-50 border border-amber-100 rounded-xl">
                  <div className="w-9 h-9 rounded-lg bg-amber-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Ban className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-amber-800 mb-1">Please note</p>
                    <p className="text-sm text-amber-700 leading-relaxed">We encourage all users to take advantage of our <strong>14-day free trial</strong> before committing to a paid plan, so you can evaluate the platform at no cost or risk.</p>
                  </div>
                </div>

                <p>Cancelling your subscription will stop future billing, but will not trigger a refund for the current billing period. You will retain access to the service until the end of your paid term.</p>
              </PolicySection>

              {/* Section 2 — Exceptions */}
              <PolicySection id="exceptions" number="02" title="Exceptions" onVisible={setActiveSection}>
                <p>We understand that exceptional circumstances can arise. Refunds may be considered on a case-by-case basis <strong className="text-slate-700">only</strong> in the following situations:</p>

                <div className="my-5 grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      icon: ReceiptText,
                      title: "Duplicate Transactions",
                      desc: "You were charged more than once for the same purchase due to a payment processing error.",
                      color: "bg-violet-50 border-violet-100",
                      iconColor: "bg-violet-100 text-violet-600",
                    },
                    {
                      icon: BadgeCheck,
                      title: "System-Caused Errors",
                      desc: "A verified technical error on our end prevented you from accessing the service you paid for.",
                      color: "bg-violet-50 border-violet-100",
                      iconColor: "bg-violet-100 text-violet-600",
                    },
                  ].map(({ icon: Icon, title, desc, color, iconColor }) => (
                    <div key={title} className={`p-5 border rounded-xl flex flex-col gap-3 ${color}`}>
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${iconColor}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <p className="text-sm font-semibold text-slate-800">{title}</p>
                      <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>

                <p>Refund eligibility is determined solely at the discretion of Voicy.ai. Submitting a request does not guarantee approval. We reserve the right to deny requests that do not meet the above criteria.</p>
              </PolicySection>

              {/* Section 3 — Request Process */}
              <PolicySection id="request-process" number="03" title="Request Process" onVisible={setActiveSection}>
                <p>To submit a refund request, please contact our billing team at <a href="mailto:billing@voicy.ai" className="text-violet-600 hover:underline">billing@voicy.ai</a>. To help us process your request quickly, include the following details in your email:</p>

                {/* Checklist */}
                <div className="my-5 space-y-3">
                  {[
                    { label: "Transaction ID", desc: "The unique ID found in your payment confirmation email or billing dashboard." },
                    { label: "Reason for Request", desc: "A brief, clear explanation of why you are requesting a refund." },
                    { label: "Account Email", desc: "The email address associated with your Voicy.ai account." },
                    { label: "Supporting Evidence", desc: "Screenshots or any documentation that supports your claim (where applicable)." },
                  ].map(({ label, desc }, i) => (
                    <div key={label} className="flex items-start gap-4 p-4 bg-slate-50 border border-slate-100 rounded-xl">
                      <div className="w-7 h-7 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        {i + 1}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-800">{label}</p>
                        <p className="text-xs text-slate-500 leading-relaxed mt-0.5">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <p>Our billing team will acknowledge your request within 2 business days and communicate the outcome once reviewed.</p>
              </PolicySection>

              {/* Section 4 — Processing Time */}
              <PolicySection id="processing-time" number="04" title="Processing Time" onVisible={setActiveSection}>
                <p>If your refund request is approved, the refunded amount will be returned to your original payment method. Please allow the following timeframes:</p>

                {/* Timeline */}
                <div className="my-5 relative pl-6 border-l-2 border-slate-100 space-y-6">
                  {[
                    { day: "Day 1–2", label: "Request Review", desc: "Our billing team reviews your submission and verifies eligibility." },
                    { day: "Day 2–3", label: "Approval Decision", desc: "You'll receive an email confirming approval or denial with a reason." },
                    { day: "Day 3–9", label: "Refund Processed", desc: "Approved refunds are processed within 5–7 business days from approval." },
                    { day: "Day 5–14", label: "Funds Received", desc: "Depending on your bank or card issuer, funds appear in your account." },
                  ].map(({ day, label, desc }, i) => (
                    <div key={label} className="relative">
                      <div className="absolute -left-[1.6rem] top-1 w-4 h-4 rounded-full bg-white border-2 border-violet-400 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                      </div>
                      <span className="text-[10px] font-mono font-semibold text-violet-400 uppercase tracking-widest">{day}</span>
                      <p className="text-sm font-semibold text-slate-800 mt-0.5">{label}</p>
                      <p className="text-xs text-slate-500 leading-relaxed mt-0.5">{desc}</p>
                    </div>
                  ))}
                </div>

                <p>Refund timelines may vary depending on your financial institution. Voicy.ai is not responsible for delays caused by third-party payment processors or banks.</p>
              </PolicySection>

              {/* Agreement Banner */}
              <div className="mt-12 p-6 sm:p-8 bg-violet-600 rounded-2xl text-white text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-violet-500 rounded-full blur-2xl opacity-50 -translate-y-1/2 translate-x-1/4" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-violet-700 rounded-full blur-2xl opacity-50 translate-y-1/2 -translate-x-1/4" />
                <div className="relative z-10">
                  <ReceiptText className="w-8 h-8 mx-auto mb-3 text-violet-200" />
                  <p className="font-semibold text-base sm:text-lg mb-2">By making a purchase, you agree to this Refund Policy.</p>
                  <p className="text-violet-200 text-xs sm:text-sm">Questions about a charge? Our billing team is here to help.</p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-5">
                    <Button size="sm" className="bg-white text-violet-900 hover:bg-slate-100 rounded-full px-6 font-semibold w-full sm:w-auto">
                      <Mail className="w-3.5 h-3.5 mr-2" />
                      Contact Billing
                    </Button>
                    <Button size="sm" variant="outline" className="border-violet-400 text-white hover:bg-violet-500/50 rounded-full px-6 font-semibold bg-transparent w-full sm:w-auto">
                      View Terms &amp; Conditions
                    </Button>
                  </div>
                </div>
              </div>

            </div>
          </article>
        </div>
      </main>

      {/* --- Footer --- */}
      <PublicFooter/>

      <style dangerouslySetInnerHTML={{__html: `
        .prose-custom p {
          color: #475569;
          font-size: 0.9375rem;
          line-height: 1.8;
          margin-bottom: 1rem;
        }
        .prose-custom ul {
          margin: 1rem 0 1rem 1.5rem;
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .prose-custom ul li {
          color: #475569;
          font-size: 0.9375rem;
          line-height: 1.7;
          padding-left: 1.25rem;
          position: relative;
        }
        .prose-custom ul li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.65em;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #7c3aed;
          opacity: 0.5;
        }
        a { color: inherit; }
      `}} />
    </div>
  );
}

function PolicySection({ id, number, title, children, onVisible }:any) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) onVisible(id); },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [id, onVisible]);

  return (
    <section id={id} ref={ref} className="scroll-mt-24">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-xs font-mono text-violet-400 font-semibold tracking-widest">{number}</span>
        <div className="h-px flex-1 bg-slate-100" />
      </div>
      <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 mb-4">{title}</h2>
      <div>{children}</div>
    </section>
  );
}