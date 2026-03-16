"use client";
import React, { useState } from "react";
import { Heading } from "@/components/common/Heading";
import { SubHeading } from "@/components/common/SubHeading";
import { Button } from "@/components/common/Button";
import { FiPlus, FiMinus } from "react-icons/fi";
import SectionBadge from "@/components/common/SectionBadge/SectionBadge";

const faqs = [
  { q: "How much does it cost to install solar?", a: "A 3 kW On-Grid system costs between ₹55,000–₹90,000. After the PM Surya Ghar subsidy of up to ₹78,000, eligible customers can get a 3 kW system for almost free." },
  { q: "How do I get the PM Surya Ghar Yojana subsidy?", a: "We help you through the entire process — filling the form, submitting documents, and arranging the inspection. The subsidy is credited directly to your bank account within 30–60 days." },
  { q: "How many years will it take to get my investment back?", a: "An On-Grid system has a payback period of 3–4 years. After subsidy it can be as low as 2–3 years. The system runs for 25 years — meaning you get 20+ years of free electricity." },
  { q: "Will solar work during a power cut?", a: "An On-Grid system will not work during a power cut. Off-Grid and Hybrid systems have battery backup — so you get electricity even when there is no grid power. We will suggest the best system based on your needs." },
  { q: "How often does the system need maintenance?", a: "Professional cleaning and inspection once a year is enough. Panels have no moving parts — so the risk of breakdown is almost zero. We provide free annual maintenance in the first year." },
  { q: "Can solar be installed on a flat roof?", a: "Absolutely! Flat roofs use adjustable mounting structures that set the panels at the optimal angle. Solar installation is possible on every type of roof — RCC, tin, or tiles." },
  { q: "What is net metering?", a: "With net metering you can sell your extra electricity back to the grid. When your solar generates more than you use, the meter runs backwards — at the end of the month you either pay only the net difference or receive a credit." },
  { q: "How long does the installation take?", a: "From survey to installation, the entire process takes just 7 days. The actual installation itself is completed in just 1 day. Our MNRE certified team is fast and professional — no mess, no delays." },
];

export const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <SectionBadge text="FAQ's" />
          <Heading level="h2" align="center" gradient>Frequently Asked Questions</Heading>
          <SubHeading align="center" className="mt-3 max-w-xl mx-auto">
            Have any questions about solar?{" "}
            <span className="text-green-600 font-semibold">You will find all the answers right here.</span>
          </SubHeading>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div key={i}
              className={`border-2 rounded-2xl overflow-hidden transition-all duration-300 ${open === i ? "border-green-300 shadow-md" : "border-gray-100 hover:border-blue-200"}`}>
              <button aria-label={faq.q}
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left gap-4"
              >
                <span className="text-gray-900 font-semibold text-sm">{faq.q}</span>
                <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${open === i ? "bg-green-600 text-white" : "bg-green-300 text-white"}`}>
                  {open === i ? <FiMinus size={14} /> : <FiPlus size={14} />}
                </div>
              </button>
              {open === i && (
                <div className="px-5 pb-4">
                  <p className="text-gray-500 text-sm leading-relaxed border-t border-yellow-100 pt-3">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-400 text-sm mb-4">Have more questions? Ask us directly.</p>
          <div className="flex justify-center gap-3">
            <Button aria-label="Chat on WhatsApp" href="https://wa.me/919991777218" variant="primary" size="md">Chat on WhatsApp</Button>
            <Button aria-label="Contact us" href="/contact" variant="outline" size="md">Contact Us</Button>
          </div>
        </div>
      </div>
    </section>
  );
};