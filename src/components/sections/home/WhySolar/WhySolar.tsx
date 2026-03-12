import React from "react";
import { Heading } from "@/components/common/Heading";
import { SubHeading } from "@/components/common/SubHeading";
import { FiSun, FiTrendingDown, FiShield, FiZap, FiCreditCard, FiCheckCircle } from "react-icons/fi";
import Link from "next/link";
import SectionBadge from "@/components/common/SectionBadge/SectionBadge";



const reasons = [
  {
    icon: FiTrendingDown,
    title: "Zero Electricity Bill",
    desc: "Generate your own electricity and bring your monthly power bill down to zero — for good.",
    color: "from-green-400 to-emerald-500",
    bg: "bg-green-50",
    border: "border-green-200",
    iconColor: "text-green-500",
  },
  {
    icon: FiShield,
    title: "25-Year Warranty",
    desc: "Invest once and stay worry-free for 25 years. Fully backed by manufacturer warranty.",
    color: "from-blue-400 to-cyan-500",
    bg: "bg-blue-50",
    border: "border-blue-200",
    iconColor: "text-blue-500",
  },
  {
    icon: FiSun,
    title: "Government Subsidy",
    desc: "Get up to ₹78,000 in subsidy under PM Surya Ghar Yojana — we handle all the paperwork for you.",
    color: "from-yellow-400 to-orange-500",
    bg: "bg-yellow-50",
    border: "border-yellow-200",
    iconColor: "text-yellow-500",
  },
  {
    icon: FiZap,
    title: "Fast Installation",
    desc: "Our trained team installs your complete solar system in just 1–2 days with zero disruption to your home.",
    color: "from-teal-400 to-cyan-400",
    bg: "bg-teal-50",
    border: "border-teal-200",
    iconColor: "text-teal-500",
  },
  {
    icon: FiCreditCard,
    title: "Easy EMI Options",
    desc: "Go solar without any financial stress — flexible EMI plans that fit your budget starting at just ₹0 down.",
    color: "from-pink-400 to-rose-500",
    bg: "bg-pink-50",
    border: "border-pink-200",
    iconColor: "text-pink-500",
  },
  {
    icon: FiCheckCircle,
    title: "Full Process Support",
    desc: "From subsidy application to final switch-on — we guide you through every single step without any hassle.",
    color: "from-indigo-400 to-blue-500",
    bg: "bg-indigo-50",
    border: "border-indigo-200",
    iconColor: "text-indigo-500",
  },
];

export const WhySolar: React.FC = () => {
  return (
    <section id="why-solar" className="py-16 md:py-24 bg-gradient-to-br from-green-50 via-white to-blue-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <SectionBadge text="Why Go Solar?" />

          <Heading level="h2" align="center" gradient>Why Solar Energy?</Heading>
          <SubHeading align="center" className="mt-3 max-w-2xl mx-auto">
            Solar is not just electricity — it is a{" "}
            <span className="text-green-600 font-semibold">smart financial decision</span>{" "}
            that changes your life for the better.
          </SubHeading>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, desc, color, bg, border, iconColor }, i) => (
            <div key={i} className={`group relative bg-white border-2 ${border} rounded-3xl p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

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
            <h3 className="text-2xl font-bold text-white mb-1">Switch to Solar Today</h3>
            <p className="text-white/70 text-sm">Free site survey + instant savings estimate — no charges at all.</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Link aria-label="Calculate your solar savings" href="/solar-calculator"
              className="inline-flex items-center gap-2 bg-white/20 text-white border border-white/30 hover:bg-white/30 px-6 py-3 rounded-xl font-semibold transition-all">
              Calculator →
            </Link>
            <Link aria-label="Book a free solar survey" href="/contact"
              className="inline-flex items-center gap-2 bg-white text-green-600 font-bold px-6 py-3 rounded-xl hover:bg-gray-50 transition-all hover:scale-105 shadow">
              Book a Free Survey
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};