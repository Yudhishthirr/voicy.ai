"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AudioWaveform, Menu, X, Check, X as XIcon, ChevronDown } from "lucide-react";

import { getPlans } from "@/service/voice.service";
import { Publicnav } from "@/components/pulic/publicnav";
import { PublicFooter } from "@/components/pulic/publicfooter";

type Plan = {
  _id: string;
  name: string;
  price: number;
  credits: number;
  description?: string;
};

const faqs = [
  {
    question: "Can I change plans at any time?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.",
  },
  {
    question: "How does the free trial work?",
    answer:
      "Our 14-day free trial gives you full access to the Creator plan features.",
  },
  {
    question: "What happens if I run out of characters?",
    answer:
      "If you reach your character limit, you can upgrade your plan or purchase additional credits.",
  },
  {
    question: "Are the voices really AI generated?",
    answer:
      "Yes, all voices are generated using advanced neural networks.",
  },
];

export default function PricingPage() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [billingMode, setBillingMode] = useState<"credits" | "monthly">("monthly");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  useEffect(() => {
    async function loadPlans() {
      try {
        const data = await getPlans();
        setPlans(data.plans);
      } catch (error) {
        console.error("Failed to fetch plans", error);
      } finally {
        setLoading(false);
      }
    }

    loadPlans();
  }, []);

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 font-sans">

      {/* Navbar */}
      <Publicnav/>

      <main className="pb-24">

        {/* Header */}
        <section className="pt-20 pb-16 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Simple & Transparent Pricing
          </h1>

          <p className="text-slate-500 text-lg max-w-xl mx-auto mb-10">
            Choose the plan that's right for your voice generation needs.
          </p>
        </section>

        {/* Pricing Cards */}
        <section className="container mx-auto px-4 sm:px-6 md:px-8 max-w-6xl mb-24">

          {loading ? (
            <p className="text-center text-slate-500">Loading plans...</p>
          ) : (
            <div className="grid md:grid-cols-3 gap-8 items-center">

              {plans.map((plan) => (
                <Card
                  key={plan._id}
                  className={`rounded-2xl bg-white ${plan.name === "Creator"
                      ? "border-violet-500 shadow-xl"
                      : "border-slate-200 shadow-sm"
                    }`}
                >
                  {plan.name === "Creator" && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <Badge className="bg-violet-600 text-white">
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  <CardHeader>
                    <CardTitle className="text-xl font-bold">
                      {plan.name}
                    </CardTitle>

                    <div className="mt-4 mb-2 flex items-baseline text-5xl font-extrabold">
                      ${plan.price}
                      <span className="text-lg text-slate-500 ml-1">/mo</span>
                    </div>

                    <CardDescription>
                      {plan.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>

                    <Button
                      className={`w-full mb-8 h-12 ${plan.name === "Creator"
                          ? "bg-violet-600 hover:bg-violet-700 text-white"
                          : plan.name === "Pro"
                            ? "bg-black hover:bg-slate-800 text-white"
                            : "bg-slate-100 hover:bg-slate-200 text-slate-900"
                        }`}
                    >
                      {plan.name === "Free"
                        ? "Start Free Trial"
                        : plan.name === "Creator"
                          ? "Get Started"
                          : "Upgrade"}
                    </Button>

                    <ul className="space-y-4 text-sm text-slate-600">

                      <li className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-500" />
                        {plan.credits} Credits
                      </li>

                      {plan.name !== "Free" && (
                        <li className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-green-500" />
                          Unlimited Projects
                        </li>
                      )}

                      {plan.name === "Pro" && (
                        <li className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-green-500" />
                          API Access
                        </li>
                      )}
                    </ul>

                  </CardContent>
                </Card>
              ))}

            </div>
          )}
        </section>

        {/* FAQ */}
        <section className="container mx-auto px-4 sm:px-6 md:px-8 max-w-3xl mb-24">
          <h2 className="text-3xl font-extrabold text-center mb-10">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden"
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-semibold text-left pr-4">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${openFaqIndex === index ? "rotate-180" : ""
                      }`}
                  />
                </button>

                {openFaqIndex === index && (
                  <div className="px-6 pb-5 text-slate-500 text-sm">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
    <PublicFooter/>
      </main>
    </div>
    
  );
}