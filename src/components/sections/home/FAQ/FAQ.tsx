"use client";
import React, { useState } from "react";
import { Heading } from "@/components/common/Heading";
import { SubHeading } from "@/components/common/SubHeading";
import { Button } from "@/components/common/Button";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  { q: "Solar lagwane mein kitna kharcha aata hai?", a: "3 kW On-Grid system ₹55,000–₹90,000 mein aata hai. PM Surya Ghar subsidy ke baad ₹78,000 tak discount milta hai — matlab 3 kW system almost free ho jaata hai eligible customers ke liye." },
  { q: "PM Surya Ghar Yojana subsidy kaise milegi?", a: "Hum poori process mein help karte hain — form fill karna, documents submit karna, inspection karwana sab hum karte hain. Subsidy seedha aapke bank account mein aati hai 30–60 din mein." },
  { q: "Kitne saal mein investment wapis aayega?", a: "On-Grid system ka payback period 3–4 saal hai. Subsidy ke baad 2–3 saal bhi ho sakta hai. System 25 saal chalta hai — matlab 20+ saal free bijli milti hai." },
  { q: "Power cut mein solar kaam karega?", a: "On-Grid system mein nahi karega. Off-Grid aur Hybrid system mein battery backup hoti hai — power cut mein bhi bijli milti rahegi. Hum aapki zarurat ke hisaab se best system suggest karenge." },
  { q: "Maintenance kitni baar karni padti hai?", a: "Saaal mein ek baar professional cleaning aur inspection kaafi hai. Panels pe koi moving parts nahi hote — isliye breakdown ka risk almost zero hai. Hum free annual maintenance dete hain pehle saal." },
  { q: "Kya flat roof pe bhi solar lag sakta hai?", a: "Bilkul lag sakta hai! Flat roof pe adjustable mounting structure use hoti hai jo optimal angle pe panels set karti hai. Har type ki roof pe — RCC, tin, tiles — solar installation possible hai." },
  { q: "Net metering kya hota hai?", a: "Net metering mein aap extra bijli grid ko bechte hain. Jab aapka solar zyada bijli banata hai toh meter ulta chalta hai — mahine ke end mein sirf net difference pay karna padta hai ya credit milta hai." },
  { q: "Installation mein kitna waqt lagta hai?", a: "Survey se lekar installation tak sirf 7 din. Installation khud sirf 1 din mein complete ho jaati hai. Hamaari MNRE certified team fast aur professional hai — koi mess nahi, koi delay nahi." },
];

export const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-100 border border-green-300 text-yellow-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            ❓ Aksar Pooche Jaane Wale Sawaal
          </div>
          <Heading level="h2" align="center" gradient>Frequently Asked Questions</Heading>
          <SubHeading align="center" className="mt-3 max-w-xl mx-auto">
            Solar ke baare mein koi bhi sawaal ho —{" "}
            <span className="text-green-600 font-semibold">yahan jawab milega.</span>
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
          <p className="text-gray-400 text-sm mb-4">Aur koi sawaal hai? Hum se seedha poochho.</p>
          <div className="flex justify-center gap-3">
            <Button aria-label="Chat on WhatsApp" href="https://wa.me/919991777218" variant="primary" size="md">WhatsApp Karo</Button>
            <Button aria-label="Contact us" href="/contact" variant="outline" size="md">Contact Us</Button>
          </div>
        </div>
      </div>
    </section>
  );
};