import React from "react";
import { Heading } from "@/components/common/Heading";
import { SubHeading } from "@/components/common/SubHeading";
import { Button } from "@/components/common/Button";
import { FiPhone, FiMapPin, FiFileText, FiTool, FiZap, FiShield } from "react-icons/fi";
import SectionBadge from "@/components/common/SectionBadge/SectionBadge";

const steps = [
  { icon: FiPhone, step: "01", title: "Free Consultation", desc: "Call or WhatsApp us — our expert will understand your needs and suggest the best system for you.", duration: "Day 1", color: "from-blue-400 to-cyan-500", bg: "bg-blue-50", iconColor: "text-blue-500" },
  { icon: FiMapPin, step: "02", title: "Free Site Survey", desc: "Our certified engineer will visit your home — check the roof, analyse shade, and decide the best panel placement.", duration: "Day 2–3", color: "from-yellow-400 to-orange-400", bg: "bg-yellow-50", iconColor: "text-yellow-500" },
  { icon: FiFileText, step: "03", title: "Custom Quotation", desc: "After the site survey you will get a detailed quote — system size, total cost, savings estimate, and ROI all included.", duration: "Day 3–4", color: "from-purple-400 to-violet-500", bg: "bg-purple-50", iconColor: "text-purple-500" },
  { icon: FiTool, step: "04", title: "Installation", desc: "Our MNRE certified team will install panels, inverter, and wiring in a professional manner — completed in just 1 day.", duration: "Day 5–6", color: "from-orange-400 to-red-400", bg: "bg-orange-50", iconColor: "text-orange-500" },
  { icon: FiZap, step: "05", title: "Testing & Handover", desc: "Full system testing is done — power generation check, app setup, and a complete walkthrough of your new system.", duration: "Day 7", color: "from-green-400 to-emerald-500", bg: "bg-green-50", iconColor: "text-green-500" },
  { icon: FiShield, step: "06", title: "After-Sales Support", desc: "Your 25-year warranty is activated — annual maintenance, 24/7 support, and app monitoring all begin from day one.", duration: "Lifetime", color: "from-teal-400 to-cyan-400", bg: "bg-teal-50", iconColor: "text-teal-500" },
];

export const InstallationProcess: React.FC = () => {
  return (
    <section id="installation-process" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-amber-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <SectionBadge text="Done in Just 7 Days" />
          <Heading level="h2" align="center" gradient>Installation Process</Heading>
          <SubHeading align="center" className="mt-3 max-w-2xl mx-auto">
            From your first call to{" "}
            <span className="text-yellow-600 font-semibold">your solar system going live</span> — the whole process takes just 7 days.
          </SubHeading>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line — desktop */}
          <div className="hidden lg:block absolute top-16 left-[8.33%] right-[8.33%] h-0.5 bg-gradient-to-r from-blue-200 via-yellow-200 to-teal-200 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 relative z-10">
            {steps.map(({ icon: Icon, step, title, desc, duration, color, bg, iconColor }) => (
              <div key={step} className="group flex flex-col items-center text-center gap-3">
                {/* Circle */}
                <div className={`relative w-16 h-16 ${bg} rounded-full flex items-center justify-center border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={22} className={iconColor} />
                  <div className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r ${color} rounded-full flex items-center justify-center`}>
                    <span className="text-white text-[9px] font-bold">{step}</span>
                  </div>
                </div>

                {/* Duration badge */}
                <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-gradient-to-r ${color} text-white`}>
                  {duration}
                </span>

                <h3 className="text-gray-900 font-bold text-sm leading-tight">{title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <Button aria-label="Request free consultation" href="/contact" variant="primary" size="lg">
            Start Now — Get a Free Consultation →
          </Button>
          <p className="text-gray-400 text-sm mt-3">No advance payment — survey first, decision later</p>
        </div>
      </div>
    </section>
  );
};