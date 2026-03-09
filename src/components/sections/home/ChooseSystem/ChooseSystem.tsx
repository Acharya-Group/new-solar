"use client";
import React from "react";
import { Heading } from "@/components/common/Heading";
import { SubHeading } from "@/components/common/SubHeading";
import { Button } from "@/components/common/Button";
import { FiCheck, FiX, FiSun, FiBattery, FiZap } from "react-icons/fi";

const systems = [
  {
    icon: FiZap, type: "On-Grid", hindi: "Grid Se Connected",
    desc: "Seedha bijli grid se connected — din mein solar use karo, raat mein grid se lo. Extra units becho.",
    color: "from-blue-500 to-cyan-500", bg: "bg-blue-50", border: "border-blue-200",
    badge: "Most Popular", badgeColor: "bg-blue-600", iconColor: "text-blue-500",
    price: "₹55,000 – ₹1,20,000", roi: "3–4 Saal",
    pros: ["Sabse sasta system", "Net metering — units becho", "Low maintenance", "PM Subsidy eligible"],
    cons: ["Power cut mein kaam nahi karta", "Battery nahi hoti"],
    bestFor: "Jahan load shedding kam ho",
  },
  {
    icon: FiBattery, type: "Off-Grid", hindi: "Completely Independent",
    desc: "Grid se bilkul alag — battery backup ke saath 24/7 bijli. Remote areas ke liye best.",
    color: "from-green-500 to-emerald-500", bg: "bg-green-50", border: "border-green-200",
    badge: "Best for Rural", badgeColor: "bg-green-600", iconColor: "text-green-500",
    price: "₹90,000 – ₹2,50,000", roi: "4–5 Saal",
    pros: ["24/7 bijli milti hai", "Grid pe depend nahi", "Remote areas ke liye best", "Complete energy freedom"],
    cons: ["Zyada expensive", "Battery replacement 8-10 saal mein"],
    bestFor: "Jahan grid nahi ya load shedding zyada ho",
  },
  {
    icon: FiSun, type: "Hybrid", hindi: "Best of Both Worlds",
    desc: "On-grid + Off-grid dono ka fayda. Battery bhi, net metering bhi — complete solution.",
    color: "from-yellow-500 to-orange-500", bg: "bg-yellow-50", border: "border-yellow-200",
    badge: "Recommended ⭐", badgeColor: "bg-yellow-500", iconColor: "text-yellow-500",
    price: "₹1,20,000 – ₹3,50,000", roi: "4–5 Saal",
    pros: ["Power cut mein bhi kaam kare", "Net metering benefit", "Battery backup available", "Future-ready system"],
    cons: ["Sabse mehnga system", "Complex installation"],
    bestFor: "Jo best performance chahte hain",
  },
];

export const ChooseSystem: React.FC = () => {
  return (
    <section id="choose-system" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-amber-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-100 border border-yellow-300 text-yellow-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            ⚡ Apna System Choose Karo
          </div>
          <Heading level="h2" align="center" gradient>Which System Is Right For You?</Heading>
          <SubHeading align="center" className="mt-3 max-w-2xl mx-auto">
            Teen types ke solar systems hain —{" "}
            <span className="text-yellow-600 font-semibold">apni zarurat aur budget</span> ke hisaab se best choose karo.
          </SubHeading>
        </div>

        {/* 3 Full Width Cards */}
        <div className="flex flex-col gap-6">
          {systems.map((s, i) => (
            <div key={i} className={`bg-white border-2 ${s.border} rounded-3xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300`}>
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">

                {/* Col 1 — Info */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-14 h-14 ${s.bg} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                      <s.icon size={26} className={s.iconColor} />
                    </div>
                    <div>
                      <span className={`${s.badgeColor} text-white text-[10px] font-bold px-2.5 py-1 rounded-full`}>{s.badge}</span>
                      <h3 className="text-gray-900 font-bold text-xl mt-1 leading-tight">{s.type} System</h3>
                      <p className="text-gray-400 text-xs">{s.hindi}</p>
                    </div>
                  </div>

                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>

                  {/* Cost + ROI */}
                  <div className={`bg-gradient-to-r ${s.color} p-[1.5px] rounded-2xl`}>
                    <div className="bg-white rounded-2xl px-4 py-3 grid grid-cols-2 gap-3">
                      <div>
                        <p className="text-[10px] text-gray-400">System Cost</p>
                        <p className="font-bold text-gray-900 text-sm">{s.price}</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-400">ROI Period</p>
                        <p className="font-bold text-gray-900 text-sm">{s.roi}</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-gray-400">
                    ✅ Best for: <span className="font-semibold text-gray-600">{s.bestFor}</span>
                  </p>

                  <Button href="/contact" variant="primary" size="sm">
                    Quote Lo →
                  </Button>
                </div>

                {/* Col 2 — Pros */}
                <div className="lg:col-span-1">
                  <h4 className="text-gray-900 font-bold mb-3 flex items-center gap-2 text-sm">
                    <FiCheck className="text-green-500" size={16} /> Fayde
                  </h4>
                  <ul className="flex flex-col gap-2">
                    {s.pros.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm text-gray-600 bg-green-50 border border-green-100 rounded-xl px-3 py-2.5">
                        <FiCheck size={13} className="text-green-500 flex-shrink-0" />{p}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Col 3 — Cons */}
                <div className="lg:col-span-1">
                  <h4 className="text-gray-900 font-bold mb-3 flex items-center gap-2 text-sm">
                    <FiX className="text-red-400" size={16} /> Limitations
                  </h4>
                  <ul className="flex flex-col gap-2">
                    {s.cons.map((c) => (
                      <li key={c} className="flex items-center gap-2 text-sm text-gray-600 bg-red-50 border border-red-100 rounded-xl px-3 py-2.5">
                        <FiX size={13} className="text-red-400 flex-shrink-0" />{c}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Col 4 — Visual highlight */}
                <div className={`bg-gradient-to-br ${s.color} rounded-2xl p-5 flex flex-col justify-center items-center text-center gap-3`}>
                  <s.icon size={40} className="text-white/80" />
                  <div>
                    <p className="text-white font-bold text-lg">{s.type}</p>
                    <p className="text-white/70 text-xs">{s.hindi}</p>
                  </div>
                  <div className="w-full bg-white/20 rounded-xl px-3 py-2">
                    <p className="text-white/70 text-[10px]">Starting From</p>
                    <p className="text-white font-bold text-sm">{s.price.split("–")[0].trim()}</p>
                  </div>
                  <div className="w-full bg-white/20 rounded-xl px-3 py-2">
                    <p className="text-white/70 text-[10px]">ROI In</p>
                    <p className="text-white font-bold text-sm">{s.roi}</p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};