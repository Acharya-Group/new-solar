"use client";
import React, { useState } from "react";
import { Heading } from "@/components/common/Heading";
import { SubHeading } from "@/components/common/SubHeading";
import { Button } from "@/components/common/Button";
import { FiMapPin, FiZap, FiTrendingDown } from "react-icons/fi";
import SectionBadge from "@/components/common/SectionBadge/SectionBadge";

const projects = [
  { title: "Sharma Residence", location: "Delhi", capacity: "5 kW", type: "On-Grid", category: "residential", savings: "₹4,500/month", panels: 10, emoji: "🏠", color: "from-blue-400 to-cyan-500" },
  { title: "Gupta Mart", location: "Mumbai", capacity: "15 kW", type: "Hybrid", category: "commercial", savings: "₹18,000/month", panels: 30, emoji: "🏪", color: "from-yellow-400 to-orange-500" },
  { title: "Green Factory", location: "Pune", capacity: "100 kW", type: "On-Grid", category: "industrial", savings: "₹95,000/month", panels: 200, emoji: "🏭", color: "from-green-400 to-emerald-500" },
  { title: "Patel Farmhouse", location: "Gujarat", capacity: "8 kW", type: "Off-Grid", category: "residential", savings: "₹7,200/month", panels: 16, emoji: "🌾", color: "from-orange-400 to-red-400" },
  { title: "DPS School", location: "Noida", capacity: "50 kW", type: "On-Grid", category: "commercial", savings: "₹45,000/month", panels: 100, emoji: "🏫", color: "from-purple-400 to-violet-500" },
  { title: "Singh Villa", location: "Chandigarh", capacity: "10 kW", type: "Hybrid", category: "residential", savings: "₹9,000/month", panels: 20, emoji: "🏡", color: "from-teal-400 to-cyan-400" },
];

const filters = ["All", "residential", "commercial", "industrial"];

export const Projects: React.FC = () => {
  const [active, setActive] = useState("All");
  const filtered = projects.filter((p) => active === "All" || p.category === active);

  return (
    <section id="projects" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <SectionBadge text="Explore Our Projects" />
          <Heading level="h2" align="center" gradient>Successful Installations</Heading>
          <SubHeading align="center" className="mt-3 max-w-xl mx-auto">
            A few of our{" "}
            <span className="text-green-600 font-semibold">best projects</span> from 500+ installations — homes to factories.
          </SubHeading>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-3 mb-8 flex-wrap">
          {filters.map((f) => (
            <button aria-label={`Filter by ${f}`} key={f} onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border-2 capitalize transition-all duration-300 ${active === f
                  ? "bg-green-600 text-white border-transparent shadow-md"
                  : "bg-blue text-gray-600 border-gray-200 hover:border-green-300"
                }`}>
              {f}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <div key={i} className="group bg-white border-2 border-gray-100 rounded-3xl overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              {/* Top colored banner */}
              <div className={`bg-gradient-to-r ${p.color} h-32 flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10" />
                <span className="text-6xl relative z-10">{p.emoji}</span>
                <div className="absolute top-3 right-3 bg-white/20 text-white text-xs font-bold px-2.5 py-1 rounded-full backdrop-blur-sm">
                  {p.type}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col gap-3">
                <div>
                  <h3 className="text-gray-900 font-bold text-lg">{p.title}</h3>
                  <p className="text-gray-400 text-xs flex items-center gap-1 mt-0.5">
                    <FiMapPin size={11} />{p.location}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {[
                    { icon: FiZap, label: "Capacity", val: p.capacity },
                    { icon: FiTrendingDown, label: "Savings", val: p.savings },
                    { icon: FiZap, label: "Panels", val: `${p.panels}` },
                  ].map(({ icon: Icon, label, val }) => (
                    <div key={label} className="bg-gray-50 rounded-xl p-2 text-center">
                      <Icon size={11} className="mx-auto text-gray-400 mb-0.5" />
                      <p className="text-[9px] text-gray-400">{label}</p>
                      <p className="text-xs font-bold text-gray-800">{val}</p>
                    </div>
                  ))}
                </div>

                <div className={`h-1 bg-gradient-to-r ${p.color} rounded-full w-0 group-hover:w-full transition-all duration-500`} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href="/projects" variant="primary" size="lg">View All Projects →</Button>
        </div>
      </div>
    </section>
  );
};