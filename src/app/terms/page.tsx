"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  AudioWaveform, Twitter, Linkedin, Github, Circle,
  Menu, X, ShieldCheck, ChevronRight
} from "lucide-react";
import { Publicnav } from '@/components/pulic/publicnav';
import { PublicFooter } from '@/components/pulic/publicfooter';

const sections = [
  { id: "use-of-service", number: "01", title: "Use of Service" },
  { id: "account-responsibility", number: "02", title: "Account Responsibility" },
  { id: "payments", number: "03", title: "Payments" },
  { id: "prohibited-activities", number: "04", title: "Prohibited Activities" },
  { id: "termination", number: "05", title: "Termination" },
  { id: "limitation-of-liability", number: "06", title: "Limitation of Liability" },
  { id: "changes-to-terms", number: "07", title: "Changes to Terms" },
  { id: "contact", number: "08", title: "Contact" },
];

export default function TermsPage() {
  
  const [activeSection, setActiveSection] = useState("use-of-service");
  

  const scrollToSection = (id:any) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 96;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
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
        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <div className="flex flex-col items-start gap-4 max-w-2xl">
            <Badge variant="secondary" className="bg-violet-50 text-violet-700 hover:bg-violet-100 px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider border border-violet-200">
              <ShieldCheck className="w-3 h-3 mr-1.5" /> Legal
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Terms &amp; Conditions
            </h1>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              Last Updated: January 1, 2025 &nbsp;·&nbsp; Please read these terms carefully before using Voicy.ai.
            </p>
          </div>
        </div>
      </section>

      {/* --- Main Content --- */}
      <main className="container mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 max-w-6xl mx-auto">

          {/* Sticky Sidebar / TOC */}
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
                    {s.title}
                    {activeSection === s.id && <ChevronRight className="w-3 h-3 ml-auto text-violet-400" />}
                  </button>
                ))}
              </nav>

              <div className="mt-8 p-4 bg-violet-50 border border-violet-100 rounded-xl">
                <p className="text-xs text-violet-700 font-semibold mb-1">Questions?</p>
                <p className="text-xs text-violet-600 leading-relaxed">
                  Reach out at <a href="mailto:legal@voicy.ai" className="underline underline-offset-2">legal@voicy.ai</a> and we'll be happy to help.
                </p>
              </div>
            </div>
          </aside>

          {/* Terms Content */}
          <article className="flex-1 min-w-0">
            <div className="prose-custom space-y-12">

              {/* Intro */}
              <div className="p-5 bg-slate-50 border border-slate-100 rounded-xl text-sm text-slate-600 leading-relaxed">
                Welcome to <strong className="text-slate-800">Voicy.ai</strong>. By accessing or using our service, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our platform.
              </div>

              <TermSection id="use-of-service" number="01" title="Use of Service" onVisible={setActiveSection}>
                <p>You agree to use the Voicy.ai service only for lawful purposes and in accordance with these Terms. You must not use our platform in any way that violates applicable local, national, or international laws or regulations.</p>
                <p>We reserve the right to update, modify, or discontinue any aspect of the service at any time without prior notice. Continued use of the service after any modifications constitutes your acceptance of the new terms.</p>
              </TermSection>

              <TermSection id="account-responsibility" number="02" title="Account Responsibility" onVisible={setActiveSection}>
                <p>You are solely responsible for maintaining the confidentiality of your account credentials, including your password. You agree to immediately notify us of any unauthorized use of your account or any other breach of security.</p>
                <p>Voicy.ai will not be liable for any loss or damage arising from your failure to comply with this security obligation. You may not share your account with others or allow third parties to access the service through your credentials.</p>
              </TermSection>

              <TermSection id="payments" number="03" title="Payments" onVisible={setActiveSection}>
                <p>All payments for Voicy.ai subscriptions and services are processed securely through our certified payment providers. By providing payment information, you represent that you are authorized to use the payment method.</p>
                <p>We reserve the right to change our pricing at any time. Any price changes will be communicated in advance and will take effect at the start of your next billing cycle. Refunds are handled on a case-by-case basis in accordance with our Refund Policy.</p>
              </TermSection>

              <TermSection id="prohibited-activities" number="04" title="Prohibited Activities" onVisible={setActiveSection}>
                <p>You may not engage in any of the following activities while using Voicy.ai:</p>
                <ul>
                  <li>Using the service for any illegal, fraudulent, or unauthorized purpose.</li>
                  <li>Attempting to probe, scan, or test the vulnerability of our systems or networks.</li>
                  <li>Reverse engineering, decompiling, or otherwise attempting to extract the source code of the platform.</li>
                  <li>Generating, cloning, or distributing voices of real individuals without their explicit consent.</li>
                  <li>Uploading or transmitting malicious code, viruses, or any disruptive software.</li>
                </ul>
              </TermSection>

              <TermSection id="termination" number="05" title="Termination" onVisible={setActiveSection}>
                <p>We reserve the right to suspend, restrict, or permanently terminate your account at our sole discretion if we determine that you have violated any provision of these Terms, without prior notice or liability.</p>
                <p>Upon termination, your right to use the service will immediately cease. Any provisions of these Terms that by their nature should survive termination — including ownership, disclaimers, and limitations of liability — shall remain in effect.</p>
              </TermSection>

              <TermSection id="limitation-of-liability" number="06" title="Limitation of Liability" onVisible={setActiveSection}>
                <p>To the fullest extent permitted by applicable law, Voicy.ai and its affiliates, officers, employees, agents, and licensors shall not be liable for any indirect, incidental, special, consequential, or punitive damages — including but not limited to loss of profits, data, goodwill, or other intangible losses.</p>
                <p>Our total liability to you for any claim arising out of or relating to these Terms or your use of the service shall not exceed the amount you paid us in the twelve (12) months preceding the claim.</p>
              </TermSection>

              <TermSection id="changes-to-terms" number="07" title="Changes to Terms" onVisible={setActiveSection}>
                <p>We may revise and update these Terms and Conditions from time to time at our sole discretion. All changes are effective immediately upon posting and apply to all access and use of the service thereafter.</p>
                <p>We will notify you of material changes by updating the "Last Updated" date at the top of this page, or by sending a notification to the email address associated with your account. Your continued use of the service following the posting of revised Terms constitutes your acceptance of those changes.</p>
              </TermSection>

              <TermSection id="contact" number="08" title="Contact" onVisible={setActiveSection}>
                <p>If you have any questions, concerns, or requests regarding these Terms and Conditions, please don't hesitate to reach out to our legal team:</p>
                <div className="mt-4 p-4 bg-slate-50 border border-slate-100 rounded-xl text-sm text-slate-700 space-y-1">
                  <p><strong>Email:</strong> <a href="mailto:legal@voicy.ai" className="text-violet-600 hover:underline">legal@voicy.ai</a></p>
                  <p><strong>Company:</strong> Voicy AI Technologies Inc.</p>
                  <p><strong>Address:</strong> 123 AI Boulevard, San Francisco, CA 94105</p>
                </div>
              </TermSection>

              {/* Agreement Banner */}
              <div className="mt-12 p-6 sm:p-8 bg-violet-600 rounded-2xl text-white text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-violet-500 rounded-full blur-2xl opacity-50 -translate-y-1/2 translate-x-1/4" />
                <div className="relative z-10">
                  <ShieldCheck className="w-8 h-8 mx-auto mb-3 text-violet-200" />
                  <p className="font-semibold text-base sm:text-lg mb-2">By using our service, you agree to these Terms.</p>
                  <p className="text-violet-200 text-xs sm:text-sm">If you have questions, our team is always available to help.</p>
                  <Button size="sm" className="mt-5 bg-white text-violet-900 hover:bg-slate-100 rounded-full px-6 font-semibold">
                    Contact Support
                  </Button>
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

function TermSection({ id, number, title, children, onVisible }:any) {
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