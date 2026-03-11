"use client";
import React, { useEffect, useRef, useState } from "react";
import { Heading } from "@/components/common/Heading";
import { SubHeading } from "@/components/common/SubHeading";
import { FiSun, FiUsers, FiAward, FiThumbsUp, FiTrendingUp, FiShield, FiZap, FiStar } from "react-icons/fi";
import { FaSolarPanel } from "react-icons/fa";
import Link from "next/link";
import SectionBadge from "@/components/common/SectionBadge/SectionBadge";

const stats = [
  { icon: FiThumbsUp, value: 98, suffix: "%", label: "Customer Satisfaction", desc: "Har customer khush hai", color: "from-yellow-400 to-orange-400", bg: "bg-yellow-50", border: "border-yellow-200", iconColor: "text-yellow-500" },
  { icon: FaSolarPanel, value: 500, suffix: "+", label: "Successful Installations", desc: "Ghar aur office dono mein", color: "from-blue-400 to-cyan-400", bg: "bg-blue-50", border: "border-blue-200", iconColor: "text-blue-500" },
  { icon: FiUsers, value: 450, suffix: "+", label: "Happy Families", desc: "Bijli bill se azaad", color: "from-green-400 to-emerald-400", bg: "bg-green-50", border: "border-green-200", iconColor: "text-green-500" },
  { icon: FiAward, value: 10, suffix: "+ Yr", label: "Industry Experience", desc: "Daskon saal ka bharosa", color: "from-purple-400 to-violet-400", bg: "bg-purple-50", border: "border-purple-200", iconColor: "text-purple-500" },
  { icon: FiZap, value: 99, suffix: "%", label: "On-Time Delivery", desc: "Koi delay nahi", color: "from-orange-400 to-red-400", bg: "bg-orange-50", border: "border-orange-200", iconColor: "text-orange-500" },
  { icon: FiShield, value: 100, suffix: "%", label: "Warranty Honored", desc: "25 saal — kabhi na tooti", color: "from-teal-400 to-cyan-400", bg: "bg-teal-50", border: "border-teal-200", iconColor: "text-teal-500" },
  { icon: FiTrendingUp, value: 90, suffix: "%", label: "Bill Reduction", desc: "Average bijli bachat", color: "from-pink-400 to-rose-400", bg: "bg-pink-50", border: "border-pink-200", iconColor: "text-pink-500" },
  { icon: FiStar, value: 4.9, suffix: "/5", label: "Google Rating", desc: "500+ verified reviews", color: "from-amber-400 to-yellow-400", bg: "bg-amber-50", border: "border-amber-200", iconColor: "text-amber-500" },
];

const Counter: React.FC<{ value: number; suffix: string; started: boolean }> = ({ value, suffix, started }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start: number | null = null;
    const isDecimal = value % 1 !== 0;
    const step = (ts: number) => {
      if (!start) start = ts;
      const eased = 1 - Math.pow(1 - Math.min((ts - start) / 1800, 1), 3);
      setCount(isDecimal ? parseFloat((eased * value).toFixed(1)) : Math.floor(eased * value));
      if (eased < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, value]);
  return <span>{count}{suffix}</span>;
};

const Ring: React.FC<{ value: number; suffix: string; started: boolean }> = ({ value, suffix, started }) => {
  const [p, setP] = useState(0);
  const size = 72; const stroke = 5; const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const target = suffix === "/5" ? value / 5 : value / 100;
  useEffect(() => {
    if (!started) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const eased = 1 - Math.pow(1 - Math.min((ts - start) / 1800, 1), 3);
      setP(eased * target);
      if (eased < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target]);
  return (
    <svg width={size} height={size} className="-rotate-90">
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#e5e7eb" strokeWidth={stroke} />
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="url(#g)" strokeWidth={stroke}
        strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={circ * (1 - p)} />
      <defs>
        <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#fbbf24" /><stop offset="100%" stopColor="#f97316" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const SuccessRate: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="success-rate" ref={ref} className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-amber-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center mb-12">
          <SectionBadge text="Hamare Numbers Bolte Hain" />

          <Heading level="h2" align="center" gradient>Our Success Rate</Heading>
          <SubHeading align="center" className="mt-3 max-w-2xl mx-auto">
            Sirf baatein nahi — yeh hain hamare{" "}
            <span className="text-green-600 font-semibold">asli numbers</span> jo hamare kaam ki quality bayan karte hain.
          </SubHeading>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s, i) => {
            const Icon = s.icon;
            const isH = hovered === i;
            const showRing = s.suffix === "%" || s.suffix === "/5";
            return (
              <div key={i} onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}
                className={`relative group cursor-default rounded-3xl border-2 p-6 bg-white transition-all duration-500 overflow-hidden ${s.border} ${isH ? "shadow-2xl -translate-y-2 scale-[1.02]" : "shadow-md"}`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-2xl ${s.bg} flex items-center justify-center transition-transform duration-300 ${isH ? "rotate-12 scale-110" : ""}`}>
                    <Icon size={22} className={s.iconColor} />
                  </div>
                  {showRing && <Ring value={s.value} suffix={s.suffix} started={started} />}
                </div>
                <div className={`text-4xl font-bold mb-1 bg-gradient-to-r ${s.color} bg-clip-text text-transparent transition-all duration-300 ${isH ? "scale-110 origin-left" : ""}`}>
                  <Counter value={s.value} suffix={s.suffix} started={started} />
                </div>
                <p className="text-gray-800 font-semibold text-sm mb-1">{s.label}</p>
                <p className={`text-gray-500 text-xs leading-relaxed transition-all duration-300 ${isH ? "opacity-100 max-h-10" : "opacity-0 max-h-0 overflow-hidden"}`}>
                  {s.desc}
                </p>
                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${s.color} rounded-b-3xl transition-all duration-500 ${isH ? "w-full" : "w-0"}`} />
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-green-200">
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">Aap Bhi In Numbers Ka Hissa Bano</h3>
            <p className="text-black/70 text-sm">Free consultation lo aur apna solar journey shuru karo aaj hi.</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Link aria-label="Chat with us on WhatsApp" href="https://wa.me/919991777218" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-black text-green-400 font-bold px-6 py-3 rounded-xl hover:bg-gray-900 transition-all hover:scale-105">
              WhatsApp Karo
            </Link>
            <Link aria-label="Request a free quote" href="/contact" className="inline-flex items-center gap-2 bg-white text-black font-bold px-6 py-3 rounded-xl hover:bg-gray-50 transition-all hover:scale-105 shadow">
              Free Quote Lo →
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};