import React from "react";
import { Heading } from "@/components/common/Heading";
import { SubHeading } from "@/components/common/SubHeading";
import { Button } from "@/components/common/Button";
import { FiCheckCircle, FiPhone, FiCalendar, FiSun } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import SectionBadge from "@/components/common/SectionBadge/SectionBadge";

const includes = [
  "Free roof & site analysis",
  "Customized system recommendation",
  "Savings & ROI calculation",
  "PM Subsidy eligibility check",
  "No obligation — 100% free",
  "Expert solar advisor at your door",
];

// Floating solar particle
const SolarParticle: React.FC<{ style: React.CSSProperties }> = ({ style }) => (
  <div
    className="absolute rounded-full pointer-events-none"
    style={{
      background: "radial-gradient(circle, #fde68a, #f59e0b)",
      opacity: 0.5,
      animation: "floatUp 6s ease-in-out infinite",
      ...style,
    }}
  />
);

// Sun ray animation component
const SunRays: React.FC = () => (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-10">
    {Array.from({ length: 12 }).map((_, i) => (
      <div
        key={i}
        className="absolute origin-bottom"
        style={{
          width: 2,
          height: 120,
          background: "linear-gradient(to top, #f59e0b, transparent)",
          transform: `rotate(${i * 30}deg) translateY(-60px)`,
          animation: `rayPulse 3s ease-in-out ${i * 0.25}s infinite`,
        }}
      />
    ))}
  </div>
);

export const FreeConsultation: React.FC = () => {
  return (
    <>
      {/* Keyframe styles injected once */}
      <style>{`
        @keyframes floatUp {
          0%   { transform: translateY(0px) scale(1); opacity: 0.5; }
          50%  { transform: translateY(-18px) scale(1.15); opacity: 0.8; }
          100% { transform: translateY(0px) scale(1); opacity: 0.5; }
        }
        @keyframes rayPulse {
          0%, 100% { opacity: 0.6; transform: scaleY(1) rotate(var(--r)); }
          50%       { opacity: 1;   transform: scaleY(1.25) rotate(var(--r)); }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.4); }
          50%       { box-shadow: 0 0 0 12px rgba(74, 222, 128, 0); }
        }
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes orbitDot {
          from { transform: rotate(0deg) translateX(22px) rotate(0deg); }
          to   { transform: rotate(360deg) translateX(22px) rotate(-360deg); }
        }
        .animate-fade-slide { animation: fadeSlideIn 0.5s ease both; }
        .animate-spin-slow  { animation: spinSlow 12s linear infinite; }
        .whatsapp-pulse     { animation: pulseGlow 2s ease-in-out infinite; }
      `}</style>

      <section
        id="free-consultation"
        className="py-16 md:py-24 bg-gradient-to-br from-yellow-50 via-white to-orange-50 relative overflow-hidden"
      >
        {/* Background blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-100/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-100/40 rounded-full blur-3xl pointer-events-none" />

        {/* Floating solar particles */}
        <SolarParticle style={{ width: 10, height: 10, top: "15%", left: "8%",  animationDelay: "0s",    animationDuration: "5s"  }} />
        <SolarParticle style={{ width: 6,  height: 6,  top: "55%", left: "3%",  animationDelay: "1.2s",  animationDuration: "7s"  }} />
        <SolarParticle style={{ width: 8,  height: 8,  top: "30%", right: "5%", animationDelay: "0.5s",  animationDuration: "6.5s"}} />
        <SolarParticle style={{ width: 12, height: 12, top: "70%", right: "10%",animationDelay: "2s",    animationDuration: "8s"  }} />
        <SolarParticle style={{ width: 5,  height: 5,  top: "80%", left: "20%", animationDelay: "3s",    animationDuration: "5.5s"}} />
        <SolarParticle style={{ width: 7,  height: 7,  top: "10%", right: "25%",animationDelay: "1.8s",  animationDuration: "6s"  }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* ── LEFT ── */}
            <div className="flex flex-col gap-6">

              {/* Badge with animated sun icon */}
              <div className="animate-fade-slide" style={{ animationDelay: "0s" }}>
                <SectionBadge text="Get a Free Consultation" />
              </div>

              <div className="animate-fade-slide" style={{ animationDelay: "0.1s" }}>
                <Heading level="h2" align="left" color="text-gray-900">
                  Get Your{" "}
                  <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                    Free Solar Consultation
                  </span>
                </Heading>
              </div>

              <div className="animate-fade-slide" style={{ animationDelay: "0.2s" }}>
                <SubHeading align="left" className="!text-gray-600">
                  Our solar expert will visit your home — check your roof, calculate your savings,
                  and suggest the best system for you. Completely free of charge.
                </SubHeading>
              </div>

              {/* Checklist items — staggered entrance */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {includes.map((item, i) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 bg-white border border-green-100 rounded-xl px-3 py-2.5 shadow-sm
                               hover:border-green-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200
                               animate-fade-slide"
                    style={{ animationDelay: `${0.25 + i * 0.07}s` }}
                  >
                    <FiCheckCircle size={15} className="text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div
                className="flex flex-col sm:flex-row gap-3 mt-2 animate-fade-slide"
                style={{ animationDelay: "0.7s" }}
              >
                {/* WhatsApp button with pulse glow */}
                <Link
                  aria-label="Chat on WhatsApp"
                  href="https://wa.me/919991777218"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-pulse inline-flex items-center justify-center gap-2 bg-green-500 text-white font-bold
                             px-6 py-3.5 rounded-xl hover:bg-green-600 transition-all hover:scale-105 shadow-lg shadow-green-200"
                >
                  <FaWhatsapp size={20} /> Chat on WhatsApp
                </Link>
                <Button aria-label="Book site survey" href="/contact" variant="primary" size="md">
                  Book Site Survey →
                </Button>
              </div>
            </div>

            {/* ── RIGHT ── */}
            <div className="flex flex-col gap-4 animate-fade-slide" style={{ animationDelay: "0.3s" }}>

              {/* Call card with animated sun + rays */}
              <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-3xl p-8 text-black relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-8 translate-x-8" />

                {/* Animated sun in the corner */}
                <div className="relative mb-4 w-fit">
                  <FiSun
                    size={40}
                    className="animate-spin-slow text-white/60 relative z-10"
                  />
                  {/* Orbit dot */}
                  <div
                    className="absolute top-1/2 left-1/2 w-2.5 h-2.5 rounded-full bg-yellow-300 -mt-1.5 -ml-1.5"
                    style={{ animation: "orbitDot 3s linear infinite" }}
                  />
                </div>

                <h3 className="font-bold text-2xl text-white mb-2">Call Us Today</h3>
                <p className="text-white text-sm mb-4 leading-relaxed">
                  Monday to Saturday, 9 AM – 7 PM — our solar experts are ready to help you.
                </p>
                <Link
                  aria-label="Call us"
                  href="tel:+919991777218"
                  className="inline-flex items-center gap-2 bg-black text-green-400 font-bold px-5 py-3 rounded-xl
                             hover:bg-gray-900 hover:scale-105 transition-all duration-200"
                >
                  <FiPhone size={18} /> +91 99917-77218
                </Link>

                {/* Subtle shimmer overlay */}
                <div
                  className="absolute inset-0 rounded-3xl pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.08) 50%, transparent 60%)",
                    backgroundSize: "200% 100%",
                    animation: "shimmer 4s linear infinite",
                  }}
                />
              </div>

              {/* Stat cards */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: FiCalendar, title: "Same Day", desc: "Response guaranteed", delay: "0.45s" },
                  { icon: FiPhone,    title: "Free Call", desc: "No charges at all",  delay: "0.52s" },
                  { icon: FiCheckCircle, title: "No Pressure", desc: "Zero obligation", delay: "0.59s" },
                ].map(({ icon: Icon, title, desc, delay }) => (
                  <div
                    key={title}
                    className="bg-white border border-gray-100 rounded-2xl p-4 text-center shadow-sm
                               hover:shadow-md hover:border-yellow-300 hover:-translate-y-1 transition-all duration-200
                               animate-fade-slide"
                    style={{ animationDelay: delay }}
                  >
                    <Icon size={20} className="text-green-500 mx-auto mb-2" />
                    <p className="text-gray-900 font-bold text-sm">{title}</p>
                    <p className="text-gray-400 text-xs">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};