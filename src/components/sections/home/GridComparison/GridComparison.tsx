"use client";
import React, { useState } from "react";
import { Heading } from "@/components/common/Heading";
import { SubHeading } from "@/components/common/SubHeading";
import { FiCheck, FiX, FiMinus } from "react-icons/fi";
import SectionBadge from "@/components/common/SectionBadge/SectionBadge";

const rows = [
  { feature: "Electricity Bill", ongrid: "Zero", offgrid: "Zero", hybrid: "Zero", solar: true },
  { feature: "Power Cut Protection", ongrid: false, offgrid: true, hybrid: true, solar: null },
  { feature: "Net Metering (Sell Units)", ongrid: true, offgrid: false, hybrid: true, solar: null },
  { feature: "Battery Backup", ongrid: false, offgrid: true, hybrid: true, solar: null },
  { feature: "PM Subsidy Eligible", ongrid: true, offgrid: false, hybrid: true, solar: null },
  // { feature: "Installation Cost", ongrid: "Low", offgrid: "High", hybrid: "Highest", solar: null },
  { feature: "Maintenance", ongrid: "Minimal", offgrid: "Medium", hybrid: "Medium", solar: null },
  { feature: "Best For", ongrid: "Urban Areas", offgrid: "Rural/Remote", hybrid: "Everyone", solar: null },
];

const Cell: React.FC<{ val: string | boolean | null }> = ({ val }) => {
  if (val === true) return <div className="flex justify-center"><div className="w-7 h-7 bg-green-100 rounded-full flex items-center justify-center"><FiCheck size={14} className="text-green-600" /></div></div>;
  if (val === false) return <div className="flex justify-center"><div className="w-7 h-7 bg-red-100 rounded-full flex items-center justify-center"><FiX size={14} className="text-red-500" /></div></div>;
  if (val === null) return <div className="flex justify-center"><FiMinus size={14} className="text-gray-300" /></div>;
  return <span className="text-xs font-semibold text-gray-700">{val}</span>;
};

export const GridComparison: React.FC = () => {
  const [highlighted, setHighlighted] = useState(2);
  const cols = [
    { label: "On-Grid", color: "from-blue-500 to-cyan-500", light: "bg-blue-50", border: "border-blue-300" },
    { label: "Off-Grid", color: "from-green-500 to-emerald-500", light: "bg-green-50", border: "border-green-300" },
    { label: "Hybrid ⭐", color: "from-green-500 to-blue-500", light: "bg-green-60", border: "border-green-300" },
  ];

  return (
    <section id="grid-comparison" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-50 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <SectionBadge text="Side-by-Side Comparison" />
          <Heading level="h2" align="center" gradient>Compare Solar Systems</Heading>
          <SubHeading align="center" className="mt-3 max-w-xl mx-auto">
            Choose the perfect solar system based on your needs and budget. 
          </SubHeading>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-gray-100 shadow-xl">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left px-6 py-4 text-gray-500 text-sm font-semibold w-[35%]">Feature</th>
                {cols.map((c, i) => (
                  <th key={i} onClick={() => setHighlighted(i)} className={`px-4 py-4 text-center cursor-pointer transition-all duration-300 ${highlighted === i ? `bg-gradient-to-b ${c.color} text-white` : "text-gray-700 hover:bg-gray-100"}`}>
                    <span className="text-sm font-bold">{c.label}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr key={ri} className={`border-b border-gray-50 ${ri % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                  <td className="px-6 py-4 text-sm font-medium text-gray-700">{row.feature}</td>
                  {[row.ongrid, row.offgrid, row.hybrid].map((val, ci) => (
                    <td key={ci} className={`px-4 py-4 text-center transition-all duration-300 ${highlighted === ci ? cols[ci].light : ""}`}>
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
  );
};