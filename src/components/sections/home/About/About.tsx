import React from "react";
import { Heading } from "@/components/common/Heading";
import { SubHeading } from "@/components/common/SubHeading";
import { Button } from "@/components/common/Button";
import { FiCheckCircle, FiAward, FiUsers, FiZap, FiSettings, FiTarget, FiEye } from "react-icons/fi";
import { FaLeaf } from "react-icons/fa";

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
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 bg-yellow-100 border border-green-300 text-yellow-700 px-4 py-1.5 rounded-full text-sm font-semibold w-fit">
              🌞 About Neo Solar
            </div>

            <Heading level="h2" align="left" color="text-gray-900">
              Innovation Aur Efficiency Ka{" "}
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                Sahi Combination
              </span>
            </Heading>

            {/* Bilingual description */}
            <div className="flex flex-col gap-3">
          <p className="text-gray-600 text-base leading-relaxed">
  Neo Solar mein hum innovation aur efficiency ko milaakar aapko clean energy ki taraf switch karne mein madad karte hain.
  Our high-performance solar solutions are engineered to{" "}
  <span className="text-yellow-600 font-semibold">reduce your costs</span> and your carbon footprint —{" "}
  <span className="text-yellow-600 font-semibold">bijli bill kam karo</span> aur environment bachao.
</p>
<p className="text-gray-500 text-sm leading-relaxed border-l-4 border-yellow-400 pl-4 bg-yellow-50/50 py-2 rounded-r-xl">
  At Neo Solar, we combine innovation and efficiency — hamare high-performance solar solutions aapki{" "}
  <span className="text-orange-600 font-semibold">laagat 90% tak kam</span> karte hain aur carbon footprint ghataate hain.
  Switch karo clean energy pe — <span className="text-orange-600 font-semibold">aaj hi shuru karo.</span>
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
              <Button aria-label="Request free consultation" href="/contact" variant="primary" size="md">Free Consultation Lo</Button>
              <Button aria-label="View our projects" href="/projects" variant="outline" size="md">Hamare Projects →</Button>
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
                    <h3 className="font-bold text-white text-lg leading-tight">Hamaara Lakshya</h3>
                  </div>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  To make clean solar energy accessible to every Indian home and business —
                  reducing electricity bills and building a greener nation.
                </p>
                <p className="text-white/60 text-xs mt-2 leading-relaxed">
                  Har Indian ghar aur vyavsaay ko saaf solar urja dena — bijli ka bill kam karna aur ek hariyali rashtra banana.
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
                    <h3 className="font-bold text-white text-lg leading-tight">Hamaari Drishti</h3>
                  </div>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  To become India&apos;s most trusted solar company by 2030 — powering 1 million homes
                  with clean, renewable energy solutions.
                </p>
                <p className="text-white/60 text-xs mt-2 leading-relaxed">
                  2030 tak India ki sabse bharosemand solar company banna — 10 lakh gharon ko clean energy se roshan karna.
                </p>
              </div>
            </div>

            {/* Bottom 3 approval badges */}
            <div className="grid grid-cols-2 gap-3">
        
              <div className="bg-white border-2 border-orange-200 rounded-2xl px-3 py-3 flex flex-col items-center gap-1.5 hover:shadow-md hover:border-orange-300 transition-all text-center">
                <span className="text-xl">🇮🇳</span>
                <p className="text-gray-900 font-bold text-xs">Make in India</p>
                <p className="text-gray-400 text-[10px]">BIS Approved</p>
              </div>
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