import React from "react";
import { Heading } from "@/components/common/Heading";
import { SubHeading } from "@/components/common/SubHeading";
import { Button } from "@/components/common/Button";
import { FiHome, FiBriefcase, FiTruck, FiDroplet, FiBook, FiZap } from "react-icons/fi";

const useCases = [
  { icon: FiHome, title: "Residential", subtitle: "Ghar ke liye", desc: "Apne ghar ki chhat pe solar lagao aur bijli bill zero karo. 3kW–10kW systems best hain.", tag: "Most Popular", tagColor: "bg-yellow-500", color: "from-yellow-400 to-orange-400", bg: "bg-yellow-50", border: "border-yellow-200", savings: "₹4,000–₹12,000/month" },
  { icon: FiBriefcase, title: "Commercial", subtitle: "Office & Shop", desc: "Apni dukaan ya office ka bijli kharcha 80% tak kam karo. ROI 3 saal mein.", tag: "Best ROI", tagColor: "bg-blue-500", color: "from-blue-400 to-cyan-400", bg: "bg-blue-50", border: "border-blue-200", savings: "₹20,000–₹80,000/month" },
  { icon: FiZap, title: "Industrial", subtitle: "Factory & Plant", desc: "Heavy machinery ke liye high-capacity solar systems. 100kW se 1MW tak.", tag: "High Capacity", tagColor: "bg-purple-500", color: "from-purple-400 to-violet-500", bg: "bg-purple-50", border: "border-purple-200", savings: "₹1L–₹10L/month" },
  { icon: FiBook, title: "Educational", subtitle: "School & College", desc: "Institutions ke liye special solar packages — subsidized rates pe.", tag: "Subsidized", tagColor: "bg-green-500", color: "from-green-400 to-emerald-500", bg: "bg-green-50", border: "border-green-200", savings: "₹15,000–₹50,000/month" },
  { icon: FiDroplet, title: "Agriculture", subtitle: "Khet & Pump", desc: "Solar water pumps aur irrigation systems — kisan ke liye best investment.", tag: "Kisan Special", tagColor: "bg-teal-500", color: "from-teal-400 to-cyan-400", bg: "bg-teal-50", border: "border-teal-200", savings: "₹5,000–₹25,000/month" },
  { icon: FiTruck, title: "EV Charging", subtitle: "Electric Vehicles", desc: "Apna solar EV charging station banao — ghar pe free charging har roz.", tag: "Future Ready", tagColor: "bg-rose-500", color: "from-rose-400 to-pink-500", bg: "bg-rose-50", border: "border-rose-200", savings: "₹3,000–₹8,000/month" },
];

export const WhereToUseSolar: React.FC = () => {
  return (
    <section id="where-to-use-solar" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-yellow-50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-100 border border-yellow-300 text-yellow-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            🏠 Kahan Kahan Use Hota Hai
          </div>
          <Heading level="h2" align="center" gradient>Where To Use Solar?</Heading>
          <SubHeading align="center" className="mt-3 max-w-2xl mx-auto">
            Ghar se factory tak —{" "}
            <span className="text-yellow-600 font-semibold">har jagah solar possible hai.</span>{" "}
            Apni zarurat ke hisaab se system choose karo.
          </SubHeading>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map(({ icon: Icon, title, subtitle, desc, tag, tagColor, color, bg, border, savings }) => (
            <div key={title} className={`group relative bg-white border-2 ${border} rounded-3xl p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 ${bg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={22} className="text-gray-600" />
                </div>
                <span className={`${tagColor} text-white text-[10px] font-bold px-2.5 py-1 rounded-full`}>{tag}</span>
              </div>
              <h3 className="text-gray-900 font-bold text-lg leading-tight">{title}</h3>
              <p className="text-gray-400 text-xs mb-2">{subtitle}</p>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{desc}</p>
              <div className={`bg-gradient-to-r ${color} p-[1px] rounded-xl`}>
                <div className="bg-white rounded-xl px-3 py-2">
                  <p className="text-[10px] text-gray-400">Monthly Savings</p>
                  <p className={`text-sm font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent`}>{savings}</p>
                </div>
              </div>
              <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${color} w-0 group-hover:w-full transition-all duration-500 rounded-b-3xl`} />
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href="/contact" variant="primary" size="lg">Apne Use Case Ke Liye Quote Lo →</Button>
        </div>
      </div>
    </section>
  );
};