import React from "react";
import { Heading } from "@/components/common/Heading";
import { SubHeading } from "@/components/common/SubHeading";
import { Button } from "@/components/common/Button";
import { FiAward, FiStar, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const experts = [
  { name: "Arjun Mehta", role: "Senior Solar Engineer", exp: "8 Years", emoji: "👨‍💼", speciality: "On-Grid & Net Metering", rating: 4.9, reviews: 120 },
  { name: "Pooja Sharma", role: "Energy Consultant", exp: "6 Years", emoji: "👩‍💼", speciality: "Residential & Subsidy", rating: 5.0, reviews: 98 },
  { name: "Ravi Kumar", role: "Technical Lead", exp: "10 Years", emoji: "👨‍🔧", speciality: "Industrial & Hybrid", rating: 4.8, reviews: 145 },
];

export const ExpertConsultation: React.FC = () => {
  return (
    <section id="expert-consultation" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-amber-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-100 border border-yellow-300 text-yellow-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            👨‍💼 Hamare Experts Se Baat Karo
          </div>
          <Heading level="h2" align="center" gradient>Talk To Our Experts</Heading>
          <SubHeading align="center" className="mt-3 max-w-xl mx-auto">
            Certified solar engineers jo{" "}
            <span className="text-yellow-600 font-semibold">aapki har query ka jawab</span> denge — free mein.
          </SubHeading>
        </div>

        {/* Expert cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {experts.map((e, i) => (
            <div key={i} className="group bg-white border-2 border-gray-100 rounded-3xl p-6 hover:shadow-xl hover:-translate-y-2 hover:border-yellow-200 transition-all duration-300 text-center">
              <div className="text-6xl mb-3">{e.emoji}</div>
              <h3 className="text-gray-900 font-bold text-lg">{e.name}</h3>
              <p className="text-yellow-600 text-sm font-semibold">{e.role}</p>
              <p className="text-gray-400 text-xs mt-1 mb-4">{e.exp} Experience · {e.speciality}</p>

              <div className="flex justify-center gap-1 mb-3">
                {[...Array(5)].map((_, j) => (
                  <FiStar key={j} size={14} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="bg-yellow-50 rounded-xl px-3 py-2">
                  <p className="text-xs text-gray-400">Rating</p>
                  <p className="font-bold text-yellow-600 text-sm">{e.rating} ⭐</p>
                </div>
                <div className="bg-gray-50 rounded-xl px-3 py-2">
                  <p className="text-xs text-gray-400">Reviews</p>
                  <p className="font-bold text-gray-800 text-sm">{e.reviews}+</p>
                </div>
              </div>

              <a href="https://wa.me/919991777218" target="_blank" rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-green-500 text-white text-sm font-bold px-4 py-2.5 rounded-xl hover:bg-green-600 transition-all">
                <FaWhatsapp size={16} /> Chat Now
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">Abhi Expert Se Baat Karo</h3>
            <p className="text-white/70 text-sm">Monday–Saturday · 9AM–7PM · Free Consultation</p>
          </div>
          <div className="flex gap-3 flex-shrink-0 flex-wrap">
            <a href="tel:+919991777218"
              className="inline-flex items-center gap-2 bg-black text-yellow-400 font-bold px-6 py-3 rounded-xl hover:bg-gray-900 transition-all hover:scale-105">
              <FiPhone size={18} /> Call Now
            </a>
            <Button href="/contact" variant="ghost" size="md">Book Appointment →</Button>
          </div>
        </div>
      </div>
    </section>
  );
};