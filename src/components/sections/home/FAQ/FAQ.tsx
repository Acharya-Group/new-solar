"use client";
import React, { useState } from "react";
import { Heading } from "@/components/common/Heading";
import { SubHeading } from "@/components/common/SubHeading";
import { Button } from "@/components/common/Button";
import { FiPlus, FiMinus } from "react-icons/fi";
import SectionBadge from "@/components/common/SectionBadge/SectionBadge";

const faqs = [
  // --- Subsidy: PM Surya Ghar Yojana ---
  {
    q: "PM Surya Ghar Yojana subsidy kitni milti hai?",
    a: "Subsidy system ki capacity ke hisaab se milti hai: 1 kW par ₹30,000, 2 kW par ₹60,000, aur 3 kW par ₹78,000 (maximum). 2 kW tak 60% cost cover hoti hai aur 2–3 kW ke beech 40% extra cost covered hoti hai. North-East states, Himachal, Uttarakhand, J&K, Andaman, aur Lakshadweep ko 10% additional subsidy milti hai."
  },
  {
    q: "PM Surya Ghar Yojana ke liye kaun apply kar sakta hai?",
    a: "Koi bhi Indian resident jiske paas apna ghar aur valid electricity connection hai woh apply kar sakta hai — urban aur rural dono. Zaruri hai ki pehle koi solar subsidy na li ho aur rooftop installation ke liye jagah ho. RWA (Residential Welfare Associations) bhi eligible hain."
  },
  {
    q: "Subsidy apply karne ka process kya hai?",
    a: "Apply karne ke liye pmsuryaghar.gov.in par jaayein ya mobile app download karein. Mobile number, Aadhaar, aur email se register karein, DISCOM se approval lein, MNRE-registered vendor se installation karwaayein, aur phir inspection ke baad subsidy directly aapke bank account mein 30–45 din mein aa jaati hai. Hum poore process mein aapki madad karte hain."
  },
  {
    q: "Subsidy ke baad system kitne mein padega?",
    a: "3 kW On-Grid system ki total cost ₹55,000–₹90,000 hoti hai. ₹78,000 ki maximum subsidy ke baad eligible customers ko 3 kW system lagbhag muft mil sakta hai. 1 kW system par ₹30,000 ki subsidy milti hai jo small households ke liye kaafi hoti hai."
  },

  // --- Finance / EMI ---
  {
    q: "Kya bina paise ke bhi solar laga sakte hain? EMI/loan milta hai?",
    a: "Haan! SBI, Canara Bank, Indian Bank, aur Union Bank jaise banks PM Surya Ghar Yojana ke tahat collateral-free solar loan dete hain. Loan up to ₹6 lakhs, repayment tenure up to 10 saal, aur interest rate 7–8.5% per annum (CIBIL ke hisaab se). EMI aapke monthly electricity bill se kam ho sakti hai — matlab pehle din se saving shuru."
  },
  {
    q: "Loan ke liye kya documents chahiye aur process kitna lamba hai?",
    a: "Basic KYC documents (Aadhaar, PAN), electricity bill, aur property proof chahiye. Nationalized banks mein ₹2 lakh tak ke loan ke liye minimum CIBIL score bhi nahi chahiye. Loan approve hone mein 3–7 din lagte hain aur disbursement directly vendor ko hoti hai. Subsidy credit hone ke baad EMI automatically reduce ho jaati hai."
  },
  {
    q: "Kya EMI se solar lena financially samajhdari hai?",
    a: "Bilkul! Ek 3 kW system ki monthly EMI ₹1,500–₹2,500 ke aaspaas hoti hai, jabki aapki electricity bill saving ₹2,000–₹3,500+ ho sakti hai. Matlab aap EMI bhar rahe ho aur phir bhi bachaa rahe ho. Loan tenure khatam hone ke baad 15+ saal ki free electricity alag se milti hai."
  },

  // --- Basics ---
  {
    q: "Solar system kitne kW ka lagwana chahiye?",
    a: "Yeh aapki monthly consumption par depend karta hai: 100–150 units/month ke liye 1 kW, 150–300 units ke liye 2 kW, aur 300+ units ke liye 3 kW kaafi hota hai. Subsidy sirf 3 kW tak milti hai residential customers ko. Hum free site survey karke sahi capacity suggest karte hain."
  },
  {
    q: "On-Grid, Off-Grid aur Hybrid mein kya fark hai?",
    a: "On-Grid: Grid se connected, no battery — power cut mein band. Sabse sasta, best ROI, net metering available. Off-Grid: Battery backup, grid se independent — remote areas ke liye. Hybrid: Grid + Battery dono — power cut mein bhi chalta hai, city mein sabse reliable. Hum aapki zaroorat ke hisaab se best option suggest karenge."
  },
  {
    q: "Power cut mein solar kaam karta hai?",
    a: "On-Grid system power cut mein band ho jaata hai (safety requirement). Off-Grid aur Hybrid systems mein battery backup hoti hai — toh power cut mein bhi electricity milti hai. Agar aapke area mein zyada power cuts aate hain toh Hybrid system best choice hai."
  },

  {
    q: "Installation mein kitna time lagta hai?",
    a: "Survey se lekar installation tak sirf 7 din ka process hai. Actual installation ek hi din mein complete ho jaati hai. Hamaari MNRE certified team fast aur professional hai — koi mess nahi, koi delay nahi."
  },
  {
    q: "Kya flat roof par solar lag sakta hai?",
    a: "Bilkul! Flat roofs par adjustable mounting structures use hote hain jo panels ko optimal angle par set karte hain. RCC, tin ya tiles — har tarah ki roof par solar installation possible hai."
  },
  {
    q: "Maintenance kitni hogi aur system kitne saal chalega?",
    a: "Saal mein ek baar professional cleaning aur inspection kaafi hai. Panels mein koi moving parts nahi hote — breakdown ka risk almost zero hai. Pehle saal ki free maintenance hum dete hain. System 25 saal tak chalta hai — yaani 20+ saal ki free electricity guaranteed."
  },
  {
    q: "Investment kitne saal mein wapas milega?",
    a: "On-Grid system ka payback period 3–4 saal hai. Subsidy ke baad yeh 2–3 saal tak aa sakta hai. System 25 saal chalega — matlab 20+ saal bilkul free electricity. ROI 400–500% tak ho sakta hai poori life mein."
  },
];

export const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <SectionBadge text="FAQ's" />
          <Heading level="h2" align="center" gradient>Frequently Asked Questions</Heading>
          <SubHeading align="center" className="mt-3 max-w-xl mx-auto">
            Have any questions about solar?{" "}
            <span className="text-green-600 font-semibold">You will find all the answers right here.</span>
          </SubHeading>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div key={i}
              className={`border-2 rounded-2xl overflow-hidden transition-all duration-300 ${open === i ? "border-green-300 shadow-md" : "border-gray-100 hover:border-blue-200"}`}>
              <button aria-label={faq.q}
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left gap-4"
              >
                <span className="text-gray-900 font-semibold text-sm">{faq.q}</span>
                <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${open === i ? "bg-green-600 text-white" : "bg-green-300 text-white"}`}>
                  {open === i ? <FiMinus size={14} /> : <FiPlus size={14} />}
                </div>
              </button>
              {open === i && (
                <div className="px-5 pb-4">
                  <p className="text-gray-500 text-sm leading-relaxed border-t border-yellow-100 pt-3">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-400 text-sm mb-4">Have more questions? Ask us directly.</p>
          <div className="flex justify-center gap-3">
            <Button aria-label="Chat on WhatsApp" href="https://wa.me/919991777218" variant="primary" size="md">Chat on WhatsApp</Button>
            <Button aria-label="Contact us" href="/contact" variant="outline" size="md">Contact Us</Button>
          </div>
        </div>
      </div>
    </section>
  );
};