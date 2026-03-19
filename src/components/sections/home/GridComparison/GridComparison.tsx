"use client";
import React, { useState, useEffect } from "react";
import { Heading } from "@/components/common/Heading";
import { SubHeading } from "@/components/common/SubHeading";
import { FiCheck, FiX, FiMinus, FiZap, FiSun, FiWifi, FiBattery, FiActivity, FiTrendingUp } from "react-icons/fi";
import { MdSolarPower, MdElectricBolt } from "react-icons/md";
import { BsLightningChargeFill, BsSunFill } from "react-icons/bs";
import { TbSolarPanel, TbPlugConnected } from "react-icons/tb";
import SectionBadge from "@/components/common/SectionBadge/SectionBadge";

const rows = [
  { feature: "Electricity Bill", ongrid: "Zero", offgrid: "Zero", hybrid: "Zero", solar: true },
  { feature: "Power Cut Protection", ongrid: false, offgrid: true, hybrid: true, solar: null },
  { feature: "Net Metering (Sell Units)", ongrid: true, offgrid: false, hybrid: true, solar: null },
  { feature: "Battery Backup", ongrid: false, offgrid: true, hybrid: true, solar: null },
  { feature: "PM Subsidy Eligible", ongrid: true, offgrid: false, hybrid: true, solar: null },
  { feature: "Maintenance", ongrid: "Minimal", offgrid: "Medium", hybrid: "Medium", solar: null },
  { feature: "Best For", ongrid: "Urban Areas", offgrid: "Rural/Remote", hybrid: "Everyone", solar: null },
];

const Cell: React.FC<{ val: string | boolean | null }> = ({ val }) => {
  if (val === true)
    return (
      <div className="flex justify-center">
        <div className="w-7 h-7 bg-green-100 rounded-full flex items-center justify-center animate-scale-in">
          <FiCheck size={14} className="text-green-600" />
        </div>
      </div>
    );
  if (val === false)
    return (
      <div className="flex justify-center">
        <div className="w-7 h-7 bg-red-100 rounded-full flex items-center justify-center animate-scale-in">
          <FiX size={14} className="text-red-500" />
        </div>
      </div>
    );
  if (val === null)
    return (
      <div className="flex justify-center">
        <FiMinus size={14} className="text-gray-300" />
      </div>
    );
  return <span className="text-xs font-semibold text-gray-700">{val}</span>;
};

/* Floating decorative icon bubble */
const FloatingIcon: React.FC<{
  icon: React.ReactNode;
  className?: string;
  delay?: string;
  size?: string;
}> = ({ icon, className = "", delay = "0s", size = "w-10 h-10" }) => (
  <div
    className={`absolute flex items-center justify-center rounded-2xl shadow-lg backdrop-blur-sm ${size} ${className}`}
    style={{
      animation: `floatBob 4s ease-in-out infinite`,
      animationDelay: delay,
    }}
  >
    {icon}
  </div>
);

export const GridComparison: React.FC = () => {
  const [highlighted, setHighlighted] = useState(2);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const cols = [
    { label: "On-Grid", color: "from-blue-500 to-cyan-500", light: "bg-blue-50", border: "border-blue-300" },
    { label: "Off-Grid", color: "from-green-500 to-emerald-500", light: "bg-green-50", border: "border-green-300" },
    { label: "Hybrid ⭐", color: "from-green-500 to-blue-500", light: "bg-green-50", border: "border-green-300" },
  ];

  return (
    <>
      {/* Keyframe animations injected via style tag */}
      <style>{`
        @keyframes floatBob {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33%       { transform: translateY(-10px) rotate(4deg); }
          66%       { transform: translateY(-5px) rotate(-3deg); }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50%      { opacity: 1;   transform: scale(1.15); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes scale-in {
          from { transform: scale(0.6); opacity: 0; }
          to   { transform: scale(1);   opacity: 1; }
        }
        .animate-scale-in { animation: scale-in 0.25s ease-out both; }
        .anim-left  { animation: slideInLeft  0.7s ease-out both; }
        .anim-right { animation: slideInRight 0.7s ease-out both; }
        .anim-up    { animation: fadeInUp     0.7s ease-out both; }
        .spin-slow  { animation: spinSlow 8s linear infinite; }
        .pulse-glow { animation: pulseGlow 2.5s ease-in-out infinite; }
      `}</style>

      <section id="grid-comparison" className="py-16 md:py-24 bg-white relative overflow-hidden">
        {/* ── Background blobs ── */}
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-50/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* ════════════════════════════════════
              HEADER — with corner icon clusters
          ════════════════════════════════════ */}
          <div className="text-center mb-12 relative">

            {/* ── TOP-LEFT icon cluster ── */}
            <div
              className={`absolute left-0 top-0 w-40 h-40 ${mounted ? "anim-left" : "opacity-0"}`}
              style={{ animationDelay: "0.1s" }}
            >
              {/* Main panel icon */}
              <FloatingIcon
                icon={<TbSolarPanel size={22} className="text-yellow-500" />}
                className="bg-yellow-50/80 border border-yellow-200 top-0 left-0"
                delay="0s"
              />
              {/* Grid plug */}
              <FloatingIcon
                icon={<TbPlugConnected size={18} className="text-blue-500" />}
                className="bg-blue-50/80 border border-blue-200 w-8 h-8 top-10 left-10"
                delay="0.6s"
                size="w-8 h-8"
              />
              {/* Activity */}
              <FloatingIcon
                icon={<FiActivity size={14} className="text-green-500" />}
                className="bg-green-50/80 border border-green-200 w-7 h-7 top-1 left-16"
                delay="1.2s"
                size="w-7 h-7"
              />
              {/* Spinning sun accent */}
              <div
                className="absolute top-12 left-1 w-5 h-5 flex items-center justify-center"
                style={{ animationDelay: "0.3s" }}
              >
                <BsSunFill size={14} className="text-yellow-400 spin-slow" />
              </div>
            </div>

            {/* ── TOP-RIGHT icon cluster ── */}
            <div
              className={`absolute right-0 top-0 w-40 h-40 ${mounted ? "anim-right" : "opacity-0"}`}
              style={{ animationDelay: "0.2s" }}
            >
              {/* Battery */}
              <FloatingIcon
                icon={<FiBattery size={20} className="text-emerald-500" />}
                className="bg-emerald-50/80 border border-emerald-200 right-0 top-0"
                delay="0.4s"
              />
              {/* Lightning bolt */}
              <FloatingIcon
                icon={<BsLightningChargeFill size={16} className="text-orange-400" />}
                className="bg-orange-50/80 border border-orange-200 w-8 h-8 right-10 top-10"
                delay="1s"
                size="w-8 h-8"
              />
              {/* Trend up */}
              <FloatingIcon
                icon={<FiTrendingUp size={14} className="text-blue-500" />}
                className="bg-blue-50/80 border border-blue-200 w-7 h-7 right-16 top-1"
                delay="1.6s"
                size="w-7 h-7"
              />
              {/* Pulsing zap */}
              <div className="absolute top-12 right-2 w-5 h-5 flex items-center justify-center">
                <MdElectricBolt size={16} className="text-yellow-500 pulse-glow" />
              </div>
            </div>

            {/* ── Heading content ── */}
            <div className={mounted ? "anim-up" : "opacity-0"} style={{ animationDelay: "0.3s" }}>
              <SectionBadge text="Side-by-Side Comparison" />
              <Heading level="h2" align="center" gradient>
                Compare Solar Systems
              </Heading>
              <SubHeading align="center" className="mt-3 max-w-xl mx-auto">
                Choose the perfect solar system based on your needs and budget.
              </SubHeading>
            </div>
          </div>

          {/* ════════════════════════════════════
              COMPARISON TABLE
          ════════════════════════════════════ */}
          <div
            className={`overflow-x-auto rounded-3xl border border-gray-100 shadow-xl ${mounted ? "anim-up" : "opacity-0"}`}
            style={{ animationDelay: "0.5s" }}
          >
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left px-6 py-4 text-gray-500 text-sm font-semibold w-[35%]">
                    Feature
                  </th>
                  {cols.map((c, i) => (
                    <th
                      key={i}
                      onClick={() => setHighlighted(i)}
                      className={`px-4 py-4 text-center cursor-pointer transition-all duration-300 ${
                        highlighted === i
                          ? `bg-gradient-to-b ${c.color} text-white`
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <span className="text-sm font-bold">{c.label}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, ri) => (
                  <tr
                    key={ri}
                    className={`border-b border-gray-50 transition-colors duration-200 hover:bg-gray-50/80 ${
                      ri % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                    }`}
                  >
                    <td className="px-6 py-4 text-sm font-medium text-gray-700">{row.feature}</td>
                    {[row.ongrid, row.offgrid, row.hybrid].map((val, ci) => (
                      <td
                        key={ci}
                        className={`px-4 py-4 text-center transition-all duration-300 ${
                          highlighted === ci ? cols[ci].light : ""
                        }`}
                      >
                        <Cell val={val} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-gray-400 text-sm mt-6">
            💡 Click on any column header to highlight that system
          </p>
        </div>
      </section>
    </>
  );
};