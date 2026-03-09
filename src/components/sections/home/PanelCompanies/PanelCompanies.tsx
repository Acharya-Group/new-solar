"use client";
import React from "react";
import { Heading } from "@/components/common/Heading";
import { SubHeading } from "@/components/common/SubHeading";
import { FiStar, FiShield, FiZap, FiAward } from "react-icons/fi";

const brands = [
  { name: "Adani Solar", logo: "🌞", warranty: "25 Yr", efficiency: "22.5%", badge: "Most Popular", badgeColor: "bg-blue-600", color: "from-blue-500 to-blue-700", bg: "bg-blue-50", border: "border-blue-200", desc: "India Ka #1 Brand", capacity: "4 GW/year", founded: "2015" },
  { name: "Waaree Solar", logo: "⚡", warranty: "25 Yr", efficiency: "21.8%", badge: "Best Value", badgeColor: "bg-orange-500", color: "from-orange-500 to-red-500", bg: "bg-orange-50", border: "border-orange-200", desc: "India's Largest Exporter", capacity: "12 GW/year", founded: "1989" },
  { name: "UTL Solar", logo: "🔋", warranty: "25 Yr", efficiency: "21.2%", badge: "Best Combo", badgeColor: "bg-green-600", color: "from-green-500 to-emerald-600", bg: "bg-green-50", border: "border-green-200", desc: "Inverter + Panel Combo", capacity: "2 GW/year", founded: "1994" },
  { name: "Tata Solar", logo: "🏭", warranty: "25 Yr", efficiency: "22.0%", badge: "Most Trusted", badgeColor: "bg-indigo-600", color: "from-indigo-500 to-purple-600", bg: "bg-indigo-50", border: "border-indigo-200", desc: "100% Indian Legacy", capacity: "1.1 GW/year", founded: "1989" },
  { name: "Vikram Solar", logo: "🌟", warranty: "30 Yr", efficiency: "23.0%", badge: "Top Efficiency", badgeColor: "bg-yellow-600", color: "from-yellow-500 to-orange-500", bg: "bg-yellow-50", border: "border-yellow-200", desc: "Highest Efficiency", capacity: "3 GW/year", founded: "2006" },
  { name: "Renewsys Solar", logo: "☀️", warranty: "25 Yr", efficiency: "21.5%", badge: "Rising Star", badgeColor: "bg-rose-600", color: "from-rose-500 to-pink-500", bg: "bg-rose-50", border: "border-rose-200", desc: "Fast Growing Indian Brand", capacity: "1.3 GW/year", founded: "2011" },
];

export const PanelCompanies: React.FC = () => {
  return (
    <section id="panel-companies" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-amber-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-yellow-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-300 text-orange-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <FiAward size={14} /> 🇮🇳 100% Indian Brands — Make in India
          </div>
          <Heading level="h2" align="center" gradient>Hamari Panel Companies</Heading>
          <SubHeading align="center" className="mt-3 max-w-2xl mx-auto">
            Hum sirf <span className="text-green-600 font-semibold">Made in India</span> Tier-1 certified panels use karte hain —
            desh ka paisa desh mein, aur quality bhi top class.
          </SubHeading>
        </div>

        {/* 2 rows × 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map((b) => (
            <div key={b.name} className="group relative rounded-3xl border-2 bg-white shadow-md p-6 flex flex-col gap-4 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden ${b.border}"
              style={{ borderColor: "" }}
            >
              {/* Use inline border via className properly */}
              <div className={`absolute inset-0 rounded-3xl border-2 ${b.border} pointer-events-none`} />
              <div className={`absolute inset-0 bg-gradient-to-br ${b.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

              {/* Top row */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-orange-600 bg-orange-50 border border-orange-200 px-2.5 py-1 rounded-full">🇮🇳 Made in India</span>
                <span className={`${b.badgeColor} text-white text-[11px] font-bold px-3 py-1 rounded-full`}>{b.badge}</span>
              </div>

              {/* Logo + Name */}
              <div className="flex items-center gap-4">
                <div className={`w-16 h-16 rounded-2xl ${b.bg} flex items-center justify-center text-4xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  {b.logo}
                </div>
                <div>
                  <h3 className="text-gray-900 font-bold text-lg leading-tight">{b.name}</h3>
                  <p className="text-gray-400 text-xs mt-0.5">Est. {b.founded}</p>
                  <p className={`text-xs font-semibold mt-1 bg-gradient-to-r ${b.color} bg-clip-text text-transparent`}>✨ {b.desc}</p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 mt-auto">
                {[
                  { icon: FiZap, label: "Efficiency", val: b.efficiency },
                  { icon: FiShield, label: "Warranty", val: b.warranty },
                  { icon: FiStar, label: "Capacity", val: b.capacity },
                ].map(({ icon: Icon, label, val }) => (
                  <div key={label} className={`${b.bg} rounded-xl p-2.5 text-center`}>
                    <Icon size={12} className="mx-auto text-gray-400 mb-1" />
                    <p className="text-[10px] text-gray-400">{label}</p>
                    <p className={`text-xs font-bold bg-gradient-to-r ${b.color} bg-clip-text text-transparent`}>{val}</p>
                  </div>
                ))}
              </div>

              {/* Bottom hover line */}
              <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${b.color} w-0 group-hover:w-full transition-all duration-500 rounded-b-3xl`} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};