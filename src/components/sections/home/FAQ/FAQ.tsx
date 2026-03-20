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
    q: "How much subsidy is available under PM Surya Ghar Yojana?",
    a: "The subsidy is based on system capacity: ₹30,000 for 1 kW, ₹60,000 for 2 kW, and ₹78,000 (maximum) for 3 kW. Up to 2 kW, 60% of the cost is covered, and between 2–3 kW, an additional 40% of the extra cost is covered. North-East states, Himachal Pradesh, Uttarakhand, J&K, Andaman, and Lakshadweep receive an additional 10% subsidy."
  },
  {
    q: "Who is eligible to apply for PM Surya Ghar Yojana?",
    a: "Any Indian resident who owns a home and has a valid electricity connection can apply — both urban and rural. Requirements include no prior solar subsidy and available rooftop space for installation. Residential Welfare Associations (RWAs) are also eligible."
  },
  {
    q: "What is the process to apply for the subsidy?",
    a: "Visit pmsuryaghar.gov.in or download the mobile app. Register with your mobile number, Aadhaar, and email, get approval from your DISCOM, have the system installed by an MNRE-registered vendor, and after inspection, the subsidy is credited directly to your bank account within 30–45 days. We assist you throughout the entire process."
  },
  {
    q: "What will the system cost after the subsidy?",
    a: "A 3 kW On-Grid system has a total cost of ₹55,000–₹90,000. With the maximum subsidy of ₹78,000, eligible customers can get a 3 kW system for virtually free. For 1 kW systems, the ₹30,000 subsidy is substantial enough for small households."
  },

  // --- Finance / EMI ---
  {
    q: "Can I get solar installed without upfront payment? Is an EMI or loan available?",
    a: "Yes! Banks like SBI, Canara Bank, Indian Bank, and Union Bank offer collateral-free solar loans under PM Surya Ghar Yojana. Loans up to ₹6 lakhs, repayment tenure up to 10 years, and interest rates of 6–7% per annum (based on CIBIL score). Your EMI can be lower than your monthly electricity bill — meaning savings start from day one."
  },
  {
    q: "What documents are required for the loan and how long does the process take?",
    a: "Basic KYC documents (Aadhaar, PAN), electricity bill, and property proof are required. For loans up to ₹2 lakhs at nationalized banks, no minimum CIBIL score is needed. Loan approval takes 3–7 days and disbursement is made directly to the vendor. Once the subsidy is credited, your EMI is automatically reduced."
  },
  {
    q: "Is it financially wise to go solar on EMI?",
    a: "Absolutely! A 3 kW system's monthly EMI is around ₹1,500–₹2,500, while your electricity bill savings can be ₹2,000–₹3,500+. That means you're paying the EMI and still saving money. After the loan tenure ends, you get 15+ years of free electricity on top of that."
  },

  // --- Basics ---
  {
    q: "What kW system should I install?",
    a: "It depends on your monthly consumption: 1 kW for 100–150 units/month, 2 kW for 150–300 units, and 3 kW for 300+ units. Subsidy is available only up to 3 kW for residential customers. We conduct a free site survey to recommend the right capacity for you."
  },
  {
    q: "What is the difference between On-Grid, Off-Grid, and Hybrid systems?",
    a: "On-Grid: Connected to the grid, no battery — shuts down during power cuts. Cheapest option, best ROI, net metering available. Off-Grid: Battery backup, independent of the grid — ideal for remote areas. Hybrid: Both grid and battery — works even during power cuts, most reliable for city use. We'll suggest the best option based on your needs."
  },
  {
    q: "Does solar work during a power cut?",
    a: "An On-Grid system shuts down during power cuts (a safety requirement). Off-Grid and Hybrid systems have battery backup — so electricity is available even during outages. If your area has frequent power cuts, a Hybrid system is the best choice."
  },
  {
    q: "How long does installation take?",
    a: "The entire process from survey to installation takes just 7 days. The actual installation is completed in a single day. Our MNRE-certified team is fast and professional — no mess, no delays."
  },
  {
    q: "Can solar be installed on a flat roof?",
    a: "Absolutely! Flat roofs use adjustable mounting structures that set the panels at the optimal angle. Whether it's RCC, tin, or tiles — solar installation is possible on all roof types."
  },
  {
    q: "How much maintenance is required and how long will the system last?",
    a: "One professional cleaning and inspection per year is sufficient. Panels have no moving parts — the risk of breakdown is almost zero. We provide free maintenance for the first year. The system lasts 25 years — meaning 20+ years of free electricity is guaranteed."
  },
  {
    q: "How many years will it take to recover my investment?",
    a: "The payback period for an On-Grid system is 3–4 years. After the subsidy, this can come down to 2–3 years. The system lasts 25 years — meaning 20+ years of completely free electricity. The ROI can reach 400–500% over its entire lifetime."
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