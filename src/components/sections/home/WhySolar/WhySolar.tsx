import React from "react";
import { Heading } from "@/components/common/Heading";
import { SubHeading } from "@/components/common/SubHeading";
import { Button } from "@/components/common/Button";
import { FiSun, FiTrendingDown, FiShield, FiZap, FiHome, FiGlobe } from "react-icons/fi";

const reasons = [
  { icon: FiTrendingDown, title: "Bijli Bill 90% Kam", desc: "Har mahine hazar rupaye bachao — solar se bijli free mein banao aur grid ko becho.", color: "from-green-400 to-emerald-500", bg: "bg-green-50", border: "border-green-200", iconColor: "text-green-500" },
  { icon: FiShield, title: "25 Saal Ki Warranty", desc: "Ek baar invest karo, 25 saal tension free raho. Full manufacturer warranty ke saath.", color: "from-blue-400 to-cyan-500", bg: "bg-blue-50", border: "border-blue-200", iconColor: "text-blue-500" },
  { icon: FiZap, title: "Power Cuts Se Azaadi", desc: "Battery backup ke saath 24/7 bijli — load shedding aur blackout ka koi darr nahi.", color: "from-teal-400 to-cyan-400", bg: "bg-teal-50", border: "border-teal-200", iconColor: "text-teal-500" },
  { icon: FiHome, title: "Property Value Badhti Hai", desc: "Solar lagane se ghar ki market value 10-15% tak badh jaati hai — best investment.", color: "from-emerald-400 to-green-500", bg: "bg-emerald-50", border: "border-emerald-200", iconColor: "text-emerald-500" },
  { icon: FiGlobe, title: "Environment Bachao", desc: "Har 5kW system se 6 ton CO₂ annually bachta hai — apne bachchon ka future secure karo.", color: "from-cyan-400 to-blue-500", bg: "bg-cyan-50", border: "border-cyan-200", iconColor: "text-cyan-500" },
  { icon: FiSun, title: "₹78,000 Govt Subsidy", desc: "PM Surya Ghar Yojana ke under ₹78,000 tak subsidy milti hai — hum poori help karte hain.", color: "from-blue-500 to-indigo-500", bg: "bg-blue-50", border: "border-blue-200", iconColor: "text-blue-600" },
];

export const WhySolar: React.FC = () => {
  return (
    <section id="why-solar" className="py-16 md:py-24 bg-gradient-to-br from-green-50 via-white to-blue-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-100 border border-green-300 text-green-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <FiSun size={14} /> Solar Kyun Lagayen?
          </div>
          <Heading level="h2" align="center" gradient>Why Solar Energy?</Heading>
          <SubHeading align="center" className="mt-3 max-w-2xl mx-auto">
            Solar sirf bijli nahi — yeh ek{" "}
            <span className="text-green-600 font-semibold">smart financial decision</span> hai
            jo aapki zindagi badal deta hai.
          </SubHeading>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, desc, color, bg, border, iconColor }, i) => (
            <div key={i} className={`group relative bg-white border-2 ${border} rounded-3xl p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

              {/* Icon — simple className, no style trick */}
              <div className={`w-12 h-12 ${bg} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Icon size={22} className={iconColor} />
              </div>

              <h3 className="text-gray-900 font-bold text-lg mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${color} w-0 group-hover:w-full transition-all duration-500 rounded-b-3xl`} />
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-green-200">
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">Abhi Switch Karo Solar Pe</h3>
            <p className="text-white/70 text-sm">Free site survey + instant savings estimate — koi charge nahi.</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a href="/solar-calculator"
              className="inline-flex items-center gap-2 bg-white/20 text-white border border-white/30 hover:bg-white/30 px-6 py-3 rounded-xl font-semibold transition-all">
              Calculator →
            </a>
            <a href="/contact"
              className="inline-flex items-center gap-2 bg-white text-green-600 font-bold px-6 py-3 rounded-xl hover:bg-gray-50 transition-all hover:scale-105 shadow">
              Free Survey Book Karo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};