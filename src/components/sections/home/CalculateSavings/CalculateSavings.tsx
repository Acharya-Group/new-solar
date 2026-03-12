"use client";
import React, { useState } from "react";
import { Heading } from "@/components/common/Heading";
import { SubHeading } from "@/components/common/SubHeading";
import { Button } from "@/components/common/Button";
import { FiZap, FiSun, FiTrendingDown, FiDollarSign } from "react-icons/fi";
import SectionBadge from "@/components/common/SectionBadge/SectionBadge";

export const CalculateSavings: React.FC = () => {
  const [bill, setBill] = useState("");
  const [units, setUnits] = useState("");
  const [result, setResult] = useState<null | {
    kw: number; cost: number; monthly: number; annual: number; payback: number; panels: number;
  }>(null);

  const calculate = () => {
    const b = parseFloat(bill); const u = parseFloat(units);
    if (!b || !u) return;
    const kw = Math.ceil(u / 120);
    const cost = kw * 120000;
    const monthly = b * 0.85;
    const annual = monthly * 12;
    const payback = parseFloat((cost / annual).toFixed(1));
    const panels = kw * 2;
    setResult({ kw, cost, monthly, annual, payback, panels });
  };

  return (
    <section id="calculate-savings" className="py-16 md:py-24 bg-gradient-to-br from-yellow-50 via-white to-orange-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <SectionBadge text="Free Solar Calculator" />
          <Heading level="h2" align="center" gradient>Calculate Your Savings</Heading>
          <SubHeading align="center" className="mt-3 max-w-xl mx-auto">
            Enter your monthly electricity bill and see how much{" "}
            <span className="text-yellow-600 font-semibold">you can save every month.</span>
          </SubHeading>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Input Form */}
          <div className="bg-white rounded-3xl border border-yellow-100 shadow-xl p-8 flex flex-col gap-5">
            <h3 className="text-gray-900 font-bold text-xl">Enter Your Bill Details</h3>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">Monthly Electricity Bill (₹)</label>
              <input
                type="number" value={bill} onChange={(e) => setBill(e.target.value)}
                placeholder="e.g. 3000"
                className="bg-gray-50 border-2 border-gray-200 focus:border-yellow-400 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 outline-none transition-colors text-sm"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">Monthly Units Used (kWh)</label>
              <input
                type="number" value={units} onChange={(e) => setUnits(e.target.value)}
                placeholder="e.g. 300"
                className="bg-gray-50 border-2 border-gray-200 focus:border-yellow-400 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 outline-none transition-colors text-sm"
              />
            </div>

            <Button aria-label="Calculate savings" onClick={calculate} variant="primary" size="lg" fullWidth>
              Calculate Savings ⚡
            </Button>

            <p className="text-xs text-gray-400 text-center">* Estimated values — actual results may vary slightly</p>
          </div>

          {/* Results */}
          <div className="flex flex-col gap-4">
            {!result ? (
              <div className="bg-white rounded-3xl border-2 border-dashed border-yellow-200 p-10 flex flex-col items-center justify-center gap-4 text-center min-h-[320px]">
                <div className="text-6xl">☀️</div>
                <p className="text-gray-400 text-sm">Enter your bill and units — your results will appear here</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: FiSun, label: "Recommended System", val: `${result.kw} kW`, color: "from-yellow-400 to-orange-400" },
                    { icon: FiZap, label: "Solar Panels Needed", val: `${result.panels} Panels`, color: "from-blue-400 to-cyan-400" },
                    { icon: FiTrendingDown, label: "Monthly Savings", val: `₹${result.monthly.toFixed(0)}`, color: "from-green-400 to-emerald-400" },
                    { icon: FiDollarSign, label: "Annual Savings", val: `₹${result.annual.toFixed(0)}`, color: "from-purple-400 to-violet-400" },
                  ].map(({ icon: Icon, label, val, color }) => (
                    <div key={label} className="bg-white border border-gray-100 rounded-2xl p-4 shadow-md hover:shadow-lg transition-all">
                      <Icon size={18} className="text-gray-400 mb-2" />
                      <p className="text-xs text-gray-400 mb-1">{label}</p>
                      <p className={`text-xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent`}>{val}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-5 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-black/60 text-xs mb-1">Estimated System Cost</p>
                    <p className="text-black font-bold text-xl">₹{result.cost.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-black/60 text-xs mb-1">Payback Period</p>
                    <p className="text-black font-bold text-xl">{result.payback} Years</p>
                  </div>
                </div>

                <Button aria-label="Request free quote" href="/contact" variant="primary" size="md" fullWidth>
                  Get a Quote for This System →
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};