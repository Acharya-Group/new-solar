import React from "react";
import { Heading } from "@/components/common/Heading";
import { SubHeading } from "@/components/common/SubHeading";
import { Button } from "@/components/common/Button";
import { FiShield, FiTool, FiPhone, FiAward, FiUsers, FiClock, FiCheckCircle, FiStar } from "react-icons/fi";
import SectionBadge from "@/components/common/SectionBadge/SectionBadge";

const benefits = [
  { icon: FiAward, title: "10+ Saal Ka Experience", desc: "Daskon saal mein 500+ installations — har type ke system pe expertise hai hamare paas.", color: "from-yellow-400 to-orange-400", bg: "bg-yellow-50", iconColor: "text-yellow-500" },
  { icon: FiShield, title: "25 Saal Ki Warranty", desc: "Panels, inverter, aur installation — sab pe full warranty. Koi hidden charges nahi.", color: "from-blue-400 to-cyan-400", bg: "bg-blue-50", iconColor: "text-blue-500" },
  { icon: FiTool, title: "Expert Installation Team", desc: "MNRE certified technicians — trained, experienced, aur professional team.", color: "from-green-400 to-emerald-400", bg: "bg-green-50", iconColor: "text-green-500" },
  { icon: FiPhone, title: "24/7 After-Sales Support", desc: "Installation ke baad bhi hum saath hain — call karo, WhatsApp karo, hum ready hain.", color: "from-purple-400 to-violet-400", bg: "bg-purple-50", iconColor: "text-purple-500" },
  { icon: FiUsers, title: "Free Site Survey", desc: "Ghar aate hain, site dekhte hain, free mein best plan banate hain — koi charge nahi.", color: "from-teal-400 to-cyan-400", bg: "bg-teal-50", iconColor: "text-teal-500" },
  { icon: FiClock, title: "7 Din Mein Installation", desc: "Survey se installation tak sirf 7 din — India mein fastest solar installation service.", color: "from-orange-400 to-red-400", bg: "bg-orange-50", iconColor: "text-orange-500" },
  { icon: FiCheckCircle, title: "PM Subsidy Assistance", desc: "₹78,000 tak PM Surya Ghar subsidy — hum poori application process mein help karte hain.", color: "from-rose-400 to-pink-400", bg: "bg-rose-50", iconColor: "text-rose-500" },
  { icon: FiStar, title: "4.9★ Google Rating", desc: "500+ verified reviews — hamare customers hi haari sabse badi strength hain.", color: "from-amber-400 to-yellow-400", bg: "bg-amber-50", iconColor: "text-amber-500" },
];

export const NeoBenefits: React.FC = () => {
  return (
    <section id="neo-benefits" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-yellow-50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <SectionBadge text="Neo Solar Kyun Choose Karein?" />
          <Heading level="h2" align="center" gradient>Why Choose Neo Solar?</Heading>
          <SubHeading align="center" className="mt-3 max-w-2xl mx-auto">
            Sirf panels nahi — hum dete hain{" "}
            <span className="text-green-600 font-semibold">complete solar experience</span>
            survey se lekar 25 saal ki service tak.
          </SubHeading>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map(({ icon: Icon, title, desc, color, bg, iconColor }, i) => (
            <div key={i} className="group relative bg-white border-2 border-gray-100 rounded-3xl p-5 hover:shadow-xl hover:-translate-y-2 hover:border-green-200 transition-all duration-300 overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              <div className={`w-11 h-11 ${bg} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Icon size={20} className={iconColor} />
              </div>
              <h3 className="text-gray-900 font-bold text-sm mb-1.5">{title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${color} w-0 group-hover:w-full transition-all duration-500 rounded-b-3xl`} />
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-green-200">
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">Ready to Go Solar?</h3>
            <p className="text-white text-sm">Aaj hi free consultation lo — koi obligation nahi.</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Button aria-label="Calculate solar savings" href="/solar-calculator" variant="ghost" size="md">Calculator →</Button>
            <Button aria-label="Request free consultation" href="/contact" variant="primary" size="md">Free Consultation Lo</Button>
          </div>
        </div>
      </div>
    </section>
  );
};