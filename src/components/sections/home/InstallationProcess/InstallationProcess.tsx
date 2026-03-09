import React from "react";
import { Heading } from "@/components/common/Heading";
import { SubHeading } from "@/components/common/SubHeading";
import { Button } from "@/components/common/Button";
import { FiPhone, FiMapPin, FiFileText, FiTool, FiZap, FiShield } from "react-icons/fi";

const steps = [
  { icon: FiPhone, step: "01", title: "Free Consultation", desc: "Call ya WhatsApp karo — hamare expert aapki zarurat samjhenge aur best system suggest karenge.", duration: "Day 1", color: "from-blue-400 to-cyan-500", bg: "bg-blue-50", iconColor: "text-blue-500" },
  { icon: FiMapPin, step: "02", title: "Free Site Survey", desc: "Hamare certified engineer ghar aayenge — roof check karenge, shadow analysis karenge, best placement decide karenge.", duration: "Day 2–3", color: "from-yellow-400 to-orange-400", bg: "bg-yellow-50", iconColor: "text-yellow-500" },
  { icon: FiFileText, step: "03", title: "Custom Quotation", desc: "Site survey ke baad detailed quotation milega — system size, cost, savings estimate, ROI sab kuch.", duration: "Day 3–4", color: "from-purple-400 to-violet-500", bg: "bg-purple-50", iconColor: "text-purple-500" },
  { icon: FiTool, step: "04", title: "Installation", desc: "MNRE certified team aayegi — panels, inverter, wiring sab professional tarike se install karegi. 1 din mein complete.", duration: "Day 5–6", color: "from-orange-400 to-red-400", bg: "bg-orange-50", iconColor: "text-orange-500" },
  { icon: FiZap, step: "05", title: "Testing & Handover", desc: "Full system testing hogi — bijli generation check, app setup, aur aapko poora system samjhaya jaayega.", duration: "Day 7", color: "from-green-400 to-emerald-500", bg: "bg-green-50", iconColor: "text-green-500" },
  { icon: FiShield, step: "06", title: "After-Sales Support", desc: "25 saal ki warranty activate hogi — annual maintenance, 24/7 support, aur app monitoring shuru.", duration: "Lifetime", color: "from-teal-400 to-cyan-400", bg: "bg-teal-50", iconColor: "text-teal-500" },
];

export const InstallationProcess: React.FC = () => {
  return (
    <section id="installation-process" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-amber-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-yellow-100 border border-yellow-300 text-yellow-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            🔧 Sirf 7 Din Mein
          </div>
          <Heading level="h2" align="center" gradient>Installation Process</Heading>
          <SubHeading align="center" className="mt-3 max-w-2xl mx-auto">
            Call se lekar{" "}
            <span className="text-yellow-600 font-semibold">solar system chalu hone tak</span> — sirf 7 din ka process.
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
          <Button href="/contact" variant="primary" size="lg">
            Abhi Start Karo — Free Consultation Lo →
          </Button>
          <p className="text-gray-400 text-sm mt-3">Koi advance payment nahi — pehle survey, phir decision</p>
        </div>
      </div>
    </section>
  );
};