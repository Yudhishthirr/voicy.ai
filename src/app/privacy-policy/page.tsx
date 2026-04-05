"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  AudioWaveform, Twitter, Linkedin, Github, Circle,
  Menu, X, Lock, ChevronRight, Eye, CreditCard,
  Cookie, Globe, ShieldCheck, UserCheck, Mail
} from "lucide-react";
import { Publicnav } from '@/components/pulic/publicnav';
import { PublicFooter } from '@/components/pulic/publicfooter';

const sections = [
  { id: "information-we-collect", number: "01", title: "Information We Collect", icon: Eye },
  { id: "how-we-use", number: "02", title: "How We Use Your Information", icon: UserCheck },
  { id: "cookies", number: "03", title: "Cookies", icon: Cookie },
  { id: "third-party-services", number: "04", title: "Third-Party Services", icon: Globe },
  { id: "data-security", number: "05", title: "Data Security", icon: ShieldCheck },
  { id: "your-rights", number: "06", title: "Your Rights", icon: Lock },
  { id: "contact-us", number: "07", title: "Contact Us", icon: Mail },
];

export default function PrivacyPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("information-we-collect");


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
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-violet-300/10 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <div className="flex flex-col items-start gap-4 max-w-2xl">
            <Badge variant="secondary" className="bg-violet-50 text-violet-700 hover:bg-violet-100 px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider border border-violet-200">
              <Lock className="w-3 h-3 mr-1.5" /> Legal
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Privacy Policy
            </h1>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              Last Updated: January 1, 2025 &nbsp;·&nbsp; Your privacy is important to us. This policy explains how we handle your data.
            </p>

            {/* Quick stat pills */}
            <div className="flex flex-wrap gap-2 mt-2">
              {[
                { icon: ShieldCheck, label: "GDPR Compliant" },
                { icon: Lock, label: "Data Encrypted" },
                { icon: UserCheck, label: "No Data Selling" },
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

              <div className="mt-8 p-4 bg-violet-50 border border-violet-100 rounded-xl">
                <p className="text-xs text-violet-700 font-semibold mb-1">Privacy Questions?</p>
                <p className="text-xs text-violet-600 leading-relaxed">
                  Contact our privacy team at <a href="mailto:privacy@voicy.ai" className="underline underline-offset-2">privacy@voicy.ai</a>
                </p>
              </div>

              <div className="mt-4 p-4 bg-slate-50 border border-slate-100 rounded-xl">
                <p className="text-xs text-slate-500 leading-relaxed">
                  Related documents: &nbsp;
                  <a href="/terms" className="text-violet-600 hover:underline font-medium">Terms &amp; Conditions</a>
                  &nbsp;·&nbsp;
                  <a href="#" className="text-violet-600 hover:underline font-medium">Cookie Policy</a>
                </p>
              </div>
            </div>
          </aside>

          {/* Policy Content */}
          <article className="flex-1 min-w-0">
            <div className="prose-custom space-y-12">

              {/* Intro */}
              <div className="p-5 bg-slate-50 border border-slate-100 rounded-xl text-sm text-slate-600 leading-relaxed">
                Welcome to <strong className="text-slate-800">Voicy.ai</strong>. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains what information we collect, how we use it, and what rights you have in relation to it. By using our service, you agree to this Privacy Policy.
              </div>

              {/* Section 1 */}
              <PolicySection id="information-we-collect" number="01" title="Information We Collect" onVisible={setActiveSection}>
                <p>When you use Voicy.ai, we may collect the following categories of information to provide and improve our services:</p>
                <div className="grid sm:grid-cols-3 gap-4 my-5">
                  {[
                    {
                      icon: UserCheck,
                      label: "Personal Details",
                      desc: "Your name and email address when you register for an account."
                    },
                    {
                      icon: CreditCard,
                      label: "Payment Info",
                      desc: "Payment details processed securely via certified third-party providers."
                    },
                    {
                      icon: Eye,
                      label: "Usage Data",
                      desc: "How you interact with our app, features used, and session information."
                    },
                  ].map(({ icon: Icon, label, desc }) => (
                    <div key={label} className="p-4 bg-slate-50 border border-slate-100 rounded-xl flex flex-col gap-2">
                      <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-violet-600" />
                      </div>
                      <p className="text-sm font-semibold text-slate-800">{label}</p>
                      <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
                <p>We only collect information that is necessary to deliver our services effectively. We do not collect sensitive personal data unless strictly required and authorized.</p>
              </PolicySection>

              {/* Section 2 */}
              <PolicySection id="how-we-use" number="02" title="How We Use Your Information" onVisible={setActiveSection}>
                <p>The information we collect from you is used solely to operate, improve, and grow our services. Specifically, we use your data to:</p>
                <ul>
                  <li>Provide, maintain, and improve the Voicy.ai platform and all its features.</li>
                  <li>Process payments and manage your subscription securely.</li>
                  <li>Send transactional emails, service updates, and customer support communications.</li>
                  <li>Analyze usage patterns to understand how users interact with our platform.</li>
                  <li>Detect, prevent, and address technical issues or fraudulent activity.</li>
                </ul>
                <p>We will never sell, rent, or trade your personal information to third parties for marketing purposes.</p>
              </PolicySection>

              {/* Section 3 */}
              <PolicySection id="cookies" number="03" title="Cookies" onVisible={setActiveSection}>
                <p>We use cookies and similar tracking technologies to enhance your browsing experience, analyze traffic, and understand how our platform is used. Cookies are small data files stored on your device.</p>
                <div className="my-5 space-y-3">
                  {[
                    { type: "Essential Cookies", desc: "Required for the platform to function correctly. These cannot be disabled.", color: "bg-slate-100 text-slate-700" },
                    { type: "Analytics Cookies", desc: "Help us understand how visitors interact with our website to improve performance.", color: "bg-violet-50 text-violet-700" },
                    { type: "Preference Cookies", desc: "Remember your settings and preferences for a more personalized experience.", color: "bg-slate-50 text-slate-600" },
                  ].map(({ type, desc, color }) => (
                    <div key={type} className="flex items-start gap-3 p-4 bg-slate-50 border border-slate-100 rounded-xl">
                      <span className={`mt-0.5 px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide whitespace-nowrap ${color} border border-slate-200`}>{type}</span>
                      <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
                <p>You can control or disable cookies through your browser settings. Note that disabling certain cookies may affect the functionality of our platform.</p>
              </PolicySection>

              {/* Section 4 */}
              <PolicySection id="third-party-services" number="04" title="Third-Party Services" onVisible={setActiveSection}>
                <p>To operate Voicy.ai effectively, we integrate with trusted third-party services including payment gateways, analytics providers, and cloud infrastructure. These services may collect and process your data according to their own privacy policies.</p>
                <div className="my-5 grid sm:grid-cols-2 gap-3">
                  {[
                    { category: "Payment Processing", examples: "Stripe, PayPal" },
                    { category: "Analytics", examples: "Google Analytics, Mixpanel" },
                    { category: "Cloud Infrastructure", examples: "AWS, Google Cloud" },
                    { category: "Email Communications", examples: "SendGrid, Resend" },
                  ].map(({ category, examples }) => (
                    <div key={category} className="flex items-center gap-3 p-3 border border-slate-100 rounded-xl bg-slate-50/50">
                      <Globe className="w-4 h-4 text-violet-400 shrink-0" />
                      <div>
                        <p className="text-xs font-semibold text-slate-700">{category}</p>
                        <p className="text-xs text-slate-400">{examples}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p>We carefully vet all third-party partners to ensure they meet our privacy and security standards. We are not responsible for the privacy practices of external websites that may be linked from our platform.</p>
              </PolicySection>

              {/* Section 5 */}
              <PolicySection id="data-security" number="05" title="Data Security" onVisible={setActiveSection}>
                <p>We implement industry-standard security measures to protect your personal data from unauthorized access, disclosure, alteration, or destruction. This includes encrypted connections (TLS/SSL), access controls, and regular security audits.</p>
                <div className="my-5 p-5 bg-slate-50 border border-slate-100 rounded-xl flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-5 h-5 text-violet-500" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800 mb-1">Our Security Commitment</p>
                    <p className="text-sm text-slate-500 leading-relaxed">While we take all reasonable measures to safeguard your data, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security, and we encourage you to use strong, unique passwords for your account.</p>
                  </div>
                </div>
                <p>In the event of a data breach that affects your personal information, we will notify you promptly in accordance with applicable laws and regulations.</p>
              </PolicySection>

              {/* Section 6 */}
              <PolicySection id="your-rights" number="06" title="Your Rights" onVisible={setActiveSection}>
                <p>Depending on your location, you may have the following rights regarding your personal data under applicable privacy laws such as GDPR and CCPA:</p>
                <ul>
                  <li><strong className="text-slate-700">Right to Access:</strong> Request a copy of the personal data we hold about you.</li>
                  <li><strong className="text-slate-700">Right to Correction:</strong> Ask us to correct inaccurate or incomplete data.</li>
                  <li><strong className="text-slate-700">Right to Deletion:</strong> Request that we delete your personal data, subject to legal obligations.</li>
                  <li><strong className="text-slate-700">Right to Portability:</strong> Receive your data in a structured, machine-readable format.</li>
                  <li><strong className="text-slate-700">Right to Object:</strong> Object to certain types of data processing, including marketing.</li>
                </ul>
                <p>To exercise any of these rights, please contact us at <a href="mailto:privacy@voicy.ai" className="text-violet-600 hover:underline">privacy@voicy.ai</a>. We will respond to your request within 30 days.</p>
              </PolicySection>

              {/* Section 7 */}
              <PolicySection id="contact-us" number="07" title="Contact Us" onVisible={setActiveSection}>
                <p>If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your personal data, please reach out to our dedicated privacy team:</p>
                <div className="mt-4 p-5 bg-slate-50 border border-slate-100 rounded-xl text-sm text-slate-700 space-y-2">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-violet-400 shrink-0" />
                    <span><strong>Email:</strong> <a href="mailto:privacy@voicy.ai" className="text-violet-600 hover:underline">privacy@voicy.ai</a></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-violet-400 shrink-0" />
                    <span><strong>Company:</strong> Voicy AI Technologies Inc.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-violet-400 shrink-0" />
                    <span><strong>Address:</strong> 123 AI Boulevard, San Francisco, CA 94105</span>
                  </div>
                </div>
              </PolicySection>

              {/* Agreement Banner */}
              <div className="mt-12 p-6 sm:p-8 bg-violet-600 rounded-2xl text-white text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-violet-500 rounded-full blur-2xl opacity-50 -translate-y-1/2 translate-x-1/4" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-violet-700 rounded-full blur-2xl opacity-50 translate-y-1/2 -translate-x-1/4" />
                <div className="relative z-10">
                  <Lock className="w-8 h-8 mx-auto mb-3 text-violet-200" />
                  <p className="font-semibold text-base sm:text-lg mb-2">By using our service, you agree to this Privacy Policy.</p>
                  <p className="text-violet-200 text-xs sm:text-sm">We are committed to keeping your data safe and being transparent about how we use it.</p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-5">
                    <Button size="sm" className="bg-white text-violet-900 hover:bg-slate-100 rounded-full px-6 font-semibold w-full sm:w-auto">
                      Contact Privacy Team
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