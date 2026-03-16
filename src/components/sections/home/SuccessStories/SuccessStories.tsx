"use client";
import React, { useState, useEffect, useRef } from "react";
import { Heading } from "@/components/common/Heading";
import { SubHeading } from "@/components/common/SubHeading";
import { FiStar, FiMapPin, FiChevronLeft, FiChevronRight, FiTrendingDown } from "react-icons/fi";
import SectionBadge from "@/components/common/SectionBadge/SectionBadge";

const stories = [
  { name: "Rajesh Sharma", location: "Delhi", system: "5 kW On-Grid", savings: "₹4,200/month", billBefore: "₹5,000", rating: 5, avatar: "👨‍💼", tag: "Home Owner", color: "from-yellow-400 to-orange-400", review: "Neo Solar changed our life! Our bill used to be ₹5,000 every month — now it is ZERO. Installation was done in just 1 day and the team was completely professional." },
  { name: "Priya Gupta", location: "Mumbai", system: "8 kW Hybrid", savings: "₹7,800/month", billBefore: "₹9,000", rating: 5, avatar: "👩‍🦱", tag: "Business Owner", color: "from-blue-400 to-cyan-500", review: "We got a Hybrid system — no more electricity bills, no more power cuts. Neo Solar delivered on their Zero Bill promise and even helped us with the PM Subsidy application!" },
  { name: "Suresh Patel", location: "Ahmedabad", system: "3 kW On-Grid", savings: "₹2,800/month", billBefore: "₹3,200", rating: 5, avatar: "👨‍🌾", tag: "Farmer", color: "from-green-400 to-emerald-500", review: "They truly kept their Zero Bill promise! The full investment will come back in just 3 years. MNRE certified team — I had no doubts at all. Best decision of my life!" },
  { name: "Anita Singh", location: "Chandigarh", system: "10 kW Hybrid", savings: "₹9,500/month", billBefore: "₹11,000", rating: 5, avatar: "👩‍💻", tag: "Office Owner", color: "from-purple-400 to-violet-500", review: "Our office electricity bill is now ZERO! The after-sales support is excellent too — whenever we call, we get an instant response. 100% trust in Neo Solar." },
  { name: "Vikram Joshi", location: "Pune", system: "15 kW On-Grid", savings: "₹14,000/month", billBefore: "₹16,000", rating: 5, avatar: "🧑‍🏫", tag: "School Principal", color: "from-orange-400 to-red-400", review: "School bill is zero now! We also received the PM Surya Ghar subsidy. It was Neo Solar's Zero Bill guarantee that convinced us — and they kept their promise." },
  { name: "Meera Jain", location: "Jaipur", system: "6 kW Hybrid", savings: "₹5,400/month", billBefore: "₹6,000", rating: 5, avatar: "👩‍🍳", tag: "Homemaker", color: "from-rose-400 to-pink-500", review: "I was scared to invest this much at first, but Neo Solar's Zero Bill guarantee gave me the confidence. Now I save the full ₹6,000 every single month!" },
  { name: "Arjun Mehta", location: "Surat", system: "20 kW On-Grid", savings: "₹18,000/month", billBefore: "₹20,000", rating: 5, avatar: "🧑‍🏭", tag: "Factory Owner", color: "from-teal-400 to-cyan-500", review: "Neo Solar brought our factory electricity bill to ZERO. The industrial system is absolutely perfect. We will get full ROI in 2.5 years. Highly recommended for businesses!" },
  { name: "Sunita Verma", location: "Lucknow", system: "4 kW On-Grid", savings: "₹3,600/month", billBefore: "₹4,000", rating: 5, avatar: "👩‍🏫", tag: "Teacher", color: "from-amber-400 to-yellow-500", review: "I am a teacher with a limited budget — but Neo Solar's EMI plan and Zero Bill guarantee made it possible. Now my electricity bill is ZERO and my savings are at the maximum!" },
];

export const SuccessStories: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const animatingRef = useRef(false);

  const go = (idx: number) => {
    if (animatingRef.current) return;
    animatingRef.current = true;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
      animatingRef.current = false;
    }, 250);
  };

  const prev = () => go((current - 1 + stories.length) % stories.length);
  const next = () => go((current + 1) % stories.length);

  useEffect(() => {
    if (!sidebarRef.current) return;
    const card = sidebarRef.current.children[current] as HTMLElement;
    if (!card) return;
    const container = sidebarRef.current;
    const cardTop = card.offsetTop;
    container.scrollTo({ top: cardTop - 20, behavior: "smooth" });
  }, [current]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (animatingRef.current) return;
      animatingRef.current = true;
      setAnimating(true);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % stories.length);
        setAnimating(false);
        animatingRef.current = false;
      }, 250);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const s = stories[current];

  return (
    <section id="success-stories" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-amber-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-14">
          <SectionBadge text="Trusted by Our Customers" />
          <Heading level="h2" align="center" gradient>Our Happy Customers</Heading>
          <SubHeading align="center" className="mt-3 max-w-xl mx-auto">
            500+ families who now pay{" "}
            <span className="text-yellow-600 font-semibold">ZERO electricity bill</span> —{" "}
            <span className="text-orange-700 font-semibold">we guarantee it.</span>
          </SubHeading>
          <div className="inline-flex items-center gap-2 bg-green-500 text-white px-5 py-2 rounded-full text-sm font-bold mt-4 shadow-lg shadow-green-200">
            ✅ Zero Electricity Bill — Guaranteed by Us
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

          {/* Sidebar */}
          <div className="lg:col-span-2 relative">
            <div
              ref={sidebarRef}
              className="flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto lg:overflow-x-hidden pb-2 lg:pb-6 px-3"
              style={{ maxHeight: "480px", scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {stories.map((st, i) => (
                <button aria-label={`View story from ${st.name}`} key={i} onClick={() => go(i)}
                  className={`flex-shrink-0 flex items-center gap-3 rounded-2xl p-4 text-left border-2 transition-all duration-300 w-52 lg:w-full ${i === current
                      ? "bg-white border-yellow-300 shadow-lg scale-[1.02]"
                      : "bg-white/70 border-gray-100 hover:border-yellow-200 hover:shadow-md"
                    }`}>
                  <span className="text-3xl flex-shrink-0">{st.avatar}</span>
                  <div className="min-w-0 flex-1">
                    <p className="text-gray-900 font-bold text-sm truncate">{st.name}</p>
                    <p className="text-gray-400 text-xs flex items-center gap-1 mb-1">
                      <FiMapPin size={9} />{st.location}
                    </p>
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="text-green-600 font-bold text-xs">{st.savings}</p>
                      <span className="text-[9px] bg-green-100 text-green-700 font-bold px-1.5 py-0.5 rounded-full">ZERO Bill</span>
                    </div>
                  </div>
                  {i === current && (
                    <div className={`w-1.5 h-8 rounded-full bg-gradient-to-b ${st.color} flex-shrink-0`} />
                  )}
                </button>
              ))}
            </div>
            <div className="hidden lg:block absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none" />
          </div>

          {/* Main card */}
          <div className="lg:col-span-3">
            <div className={`bg-white rounded-3xl border-2 border-gray-100 shadow-xl overflow-hidden transition-all duration-300 ${animating ? "opacity-0 scale-[0.98]" : "opacity-100 scale-100"}`}>
              <div className={`h-2 bg-gradient-to-r ${s.color}`} />
              <div className="p-8">

                {/* Stars + tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex gap-1">
                    {[...Array(s.rating)].map((_, i) => (
                      <FiStar key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${s.color} text-white`}>
                    {s.tag}
                  </span>
                </div>

                {/* Quote */}
                <div className="relative mb-6">
                  <span className="absolute -top-3 -left-1 text-6xl text-yellow-200 font-serif leading-none">"</span>
                  <p className="text-gray-700 text-base leading-relaxed pl-6 italic">{s.review}</p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-100">
                  <span className="text-4xl">{s.avatar}</span>
                  <div>
                    <p className="text-gray-900 font-bold">{s.name}</p>
                    <p className="text-gray-400 text-xs flex items-center gap-1">
                      <FiMapPin size={11} /> {s.location} · {s.system}
                    </p>
                  </div>
                </div>

                {/* Bill comparison */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="bg-red-50 border border-red-100 rounded-2xl p-3 text-center">
                    <p className="text-[10px] text-gray-400 mb-1">Bill Before</p>
                    <p className="text-red-500 font-bold text-lg">{s.billBefore}</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${s.color} flex items-center justify-center shadow-md`}>
                      <FiTrendingDown size={18} className="text-white" />
                    </div>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-2xl p-3 text-center">
                    <p className="text-[10px] text-gray-400 mb-1">Bill Now</p>
                    <p className="text-green-600 font-bold text-2xl">₹0</p>
                    <p className="text-[9px] text-green-500 font-bold">ZERO ✅</p>
                  </div>
                </div>

                <div className={`bg-gradient-to-r ${s.color} rounded-2xl px-4 py-3 flex items-center justify-between`}>
                  <p className="text-white/80 text-xs">Monthly Savings</p>
                  <p className="text-white font-bold text-xl">{s.savings}</p>
                </div>
              </div>
            </div>

            {/* Dots + arrows */}
            <div className="flex items-center justify-between mt-5">
              <div className="flex gap-1.5 flex-wrap">
                {stories.map((_, i) => (
                  <button key={i} onClick={() => go(i)}
                    className={`rounded-full transition-all duration-300 ${i === current ? "w-7 h-2.5 bg-yellow-500" : "w-2.5 h-2.5 bg-gray-300 hover:bg-yellow-400"}`} />
                ))}
              </div>
              <div className="flex gap-2">
                <button aria-label="Previous story" onClick={prev} className="w-10 h-10 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center hover:border-yellow-400 hover:text-yellow-500 transition-all">
                  <FiChevronLeft size={18} />
                </button>
                <button aria-label="Next story" onClick={next} className="w-10 h-10 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center hover:border-yellow-400 hover:text-yellow-500 transition-all">
                  <FiChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};