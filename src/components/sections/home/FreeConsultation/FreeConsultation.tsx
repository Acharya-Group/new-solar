import React from "react";
import { Heading } from "@/components/common/Heading";
import { SubHeading } from "@/components/common/SubHeading";
import { Button } from "@/components/common/Button";
import { FiCheckCircle, FiPhone, FiCalendar, FiSun } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const includes = [
  "Free roof & site analysis",
  "Customized system recommendation",
  "Savings & ROI calculation",
  "PM Subsidy eligibility check",
  "No obligation — 100% free",
  "Expert solar advisor at your door",
];

export const FreeConsultation: React.FC = () => {
  return (
    <section id="free-consultation" className="py-16 md:py-24 bg-gradient-to-br from-yellow-50 via-white to-orange-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 bg-green-100 border border-green-300 text-green-700 px-4 py-1.5 rounded-full text-sm font-semibold w-fit">
              🎁 Bilkul Free — Koi Charge Nahi
            </div>
            <Heading level="h2" align="left" color="text-gray-900">
              Get Your{" "}
              <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                Free Solar Consultation
              </span>
            </Heading>
            <SubHeading align="left" className="!text-gray-600">
              Hamare solar expert ghar aayenge — roof dekhenge, savings calculate karenge,
              aur aapke liye best system suggest karenge. Bilkul free.
            </SubHeading>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {includes.map((item) => (
                <div key={item} className="flex items-center gap-2 bg-white border border-green-100 rounded-xl px-3 py-2.5 shadow-sm">
                  <FiCheckCircle size={15} className="text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <a href="https://wa.me/919991777218" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white font-bold px-6 py-3.5 rounded-xl hover:bg-green-600 transition-all hover:scale-105 shadow-lg shadow-green-200">
                <FaWhatsapp size={20} /> WhatsApp Karo
              </a>
              <Button href="/contact" variant="primary" size="md">Book Site Survey →</Button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-4">
            <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-3xl p-8 text-black relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-8 translate-x-8" />
              <FiSun size={40} className="text-black/40 mb-4" />
              <h3 className="font-bold text-2xl text-white mb-2">Aaj Hi Call Karo</h3>
              <p className="text-black/70 text-sm mb-4 leading-relaxed">
                Monday to Saturday, 9 AM – 7 PM — hamare solar experts ready hain.
              </p>
              <a href="tel:+919991777218"
                className="inline-flex items-center gap-2 bg-black text-green-400 font-bold px-5 py-3 rounded-xl hover:bg-gray-900 transition-all">
                <FiPhone size={18} /> +91 99917-77218
              </a>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: FiCalendar, title: "Same Day", desc: "Response milti hai" },
                { icon: FiPhone, title: "Free Call", desc: "Koi charge nahi" },
                { icon: FiCheckCircle, title: "No Pressure", desc: "Zero obligation" },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-white border border-gray-100 rounded-2xl p-4 text-center shadow-sm hover:shadow-md hover:border-yellow-200 transition-all">
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
  );
};