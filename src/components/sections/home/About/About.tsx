import React from "react";
import { Heading } from "@/components/common/Heading";
import { Button } from "@/components/common/Button";
import { FiCheckCircle, FiAward, FiUsers, FiZap, FiSettings, FiTarget, FiEye } from "react-icons/fi";
import { FaLeaf } from "react-icons/fa";
import SectionBadge from "@/components/common/SectionBadge/SectionBadge";
import Image from "next/image";

const features = [
  { icon: FiAward, title: "Expertise & Experience", desc: "10+ saal ka field experience aur 500+ successful installations" },
  { icon: FiZap, title: "Quality Products", desc: "Sirf Tier-1 certified, BIS approved Indian solar panels" },
  { icon: FiSettings, title: "Customized Solutions", desc: "Har ghar aur business ke liye alag tailored solar plan" },
  { icon: FaLeaf, title: "Environmental Impact", desc: "Har installation se 2.5 ton CO₂ annually kam hota hai" },
];

const badges = [
  { icon: FiCheckCircle, text: "Building Quality Standards" },
  { icon: FiUsers, text: "Certified Engineered Team" },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* LEFT */}
          <div className="flex flex-col gap-6 relative">

            {/* ✅ Rotating sun — left column ke bg mein */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
              <Image
                src="/images/common/about-sun.png"
                alt=""
                width={420}
                height={420}
                className="opacity-[0.1]"
                style={{ animation: "spinSlow 60s linear infinite" }}
              />
            </div>

            <style>{`
              @keyframes spinSlow {
                from { transform: rotate(0deg); }
                to   { transform: rotate(360deg); }
              }
            `}</style>

            <div className="relative z-10">
              <SectionBadge text="About Neo Solar" />
            </div>

            <Heading level="h2" align="left" color="text-gray-900">
              Solar EPC Solutions
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                <br />Provider in India
              </span>
            </Heading>

            {/* Bilingual description */}
            <div className="flex flex-col gap-3">
              <p className="text-gray-600 text-base leading-relaxed">
                At Neo Solar, we combine <span className="text-yellow-600 font-semibold">cutting-edge technology</span> with expert
                solar installation services to deliver efficient and reliable solar power solutions.
                Our advanced systems
                <span className="text-yellow-600 font-semibold"> reduce their dependence on traditional electricity</span>.

                Our solar solutions are ideal for <span className="text-yellow-600 font-semibold">homes, industries, schools, colleges, hospitals, and petrol pumps</span>,
              </p>

              <p className="text-gray-500 text-sm leading-relaxed border-l-4 border-yellow-400 pl-4 bg-yellow-50/50 py-2 rounded-r-xl">
                You can
                <span className="text-orange-700 font-semibold ps-1">make your electricity bill ₹0</span>
                while contributing to a greener and more sustainable planet.
                Start your journey toward clean energy and long-term savings today.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {badges.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                  <Icon size={15} />{text}
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-2">
              <Button aria-label="Request free consultation" href="/contact" variant="primary" size="md">Free Consultation</Button>
              <Button aria-label="View our projects" href="/projects" variant="outline" size="md">Our Projects →</Button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-5">
            {/* Mission Card */}
            <div className="relative bg-green-600 rounded-3xl p-6 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-8 translate-x-8" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <FiTarget size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs font-medium uppercase tracking-wide">Our Mission</p>
                    <h3 className="font-bold text-white text-lg leading-tight">Our Goal</h3>
                  </div>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  Our mission is to provide affordable and reliable <b>solar energy solutions</b> for homes and businesses
                  across India, helping people reduce electricity bills and use clean energy.
                </p>
                <div className="mt-4 flex gap-2 flex-wrap">
                  {["🇮🇳 Make in India", "♻️ Green Energy", "💡 Innovation"].map((t) => (
                    <span key={t} className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="relative bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl p-6 overflow-hidden">
              <div className="absolute bottom-0 left-0 w-28 h-28 bg-white/10 rounded-full translate-y-8 -translate-x-8" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <FiEye size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs font-medium uppercase tracking-wide">Our Vision</p>
                    <h3 className="font-bold text-white text-lg leading-tight">Our Future Vision</h3>
                  </div>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  Our vision is to become one of India's most trusted <b>solar energy companies</b> by helping thousands
                  of homes and businesses switch to clean and renewable power.
                </p>
              </div>
            </div>

            {/* Bottom approval badge */}
            <div className="grid grid-cols-1">
              <div className="bg-white border-2 border-blue-200 rounded-2xl px-3 py-3 flex flex-col items-center gap-1.5 hover:shadow-md hover:border-blue-300 transition-all text-center">
                <span className="text-xl">⚡</span>
                <p className="text-gray-900 font-bold text-xs">MNRE Approved</p>
                <p className="text-gray-400 text-[10px]">Govt. certified</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};