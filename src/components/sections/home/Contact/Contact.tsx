"use client";
import React, { useState } from "react";
import { Heading } from "@/components/common/Heading";
import { SubHeading } from "@/components/common/SubHeading";
import { Button } from "@/components/common/Button";
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import SectionBadge from "@/components/common/SectionBadge/SectionBadge";

const contactInfo = [
  { icon: FiPhone, label: "Phone", value: "+91 99917-77219", href: "tel:+919991777219" },
  { icon: FaWhatsapp, label: "WhatsApp", value: "+91 99917-77218", href: "https://wa.me/919991777218" },
  { icon: FiMail, label: "Email", value: "neosolarco@gmail.com", href: "mailto:neosolarco@gmail.com" },
  { icon: FiMapPin, label: "Address", value: "Plot No. 01, Near Blessing Marriage Palace, Hisar-125001 (Haryana), India", href: "#" },
  { icon: FiClock, label: "Working Hours", value: "Mon–Sat: 9AM – 7PM", href: "#" },
];

export const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form),
      });
      const data = await res.json();
      setStatus(data.success ? "success" : "error");
      if (data.success) setForm({ name: "", phone: "", email: "", service: "", message: "" });
    } catch { setStatus("error"); }
    finally { setLoading(false); }
  };

  const inputClass = "bg-gray-50 border-2 border-gray-200 focus:border-green-400 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 outline-none transition-colors text-sm w-full";

  return (
    <section id="contact" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <SectionBadge text="Hum Se Baat Karo" />
          <Heading level="h2" align="center" gradient>Contact Us</Heading>
          <SubHeading align="center" className="mt-3 max-w-xl mx-auto">
            Koi bhi sawaal ho — <span className="text-green-600 font-semibold">hum yahan hain.</span>{" "}
            Form bharo ya seedha call karo.
          </SubHeading>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT — Form */}
          <div className="bg-white border border-gray-100 rounded-3xl shadow-xl p-8">
            <h3 className="text-gray-900 font-bold text-xl mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input className={inputClass} placeholder="Aapka Naam *" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                <input className={inputClass} placeholder="Phone Number *" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
              </div>
              <input type="email" className={inputClass} placeholder="Email Address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              <select aria-label="Select your state" className={inputClass} value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}>
                <option value="">Service Select Karo</option>
                <option value="on-grid">On-Grid System</option>
                <option value="off-grid">Off-Grid System</option>
                <option value="hybrid">Hybrid System</option>
                <option value="subsidy">PM Subsidy Help</option>
                <option value="maintenance">Maintenance</option>
              </select>
              <textarea className={`${inputClass} resize-none`} rows={4} placeholder="Aapka message ya sawaal..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />

              <button aria-label="Send message" type="submit" disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-3.5 rounded-xl hover:scale-[1.02] transition-all disabled:opacity-50 shadow-lg shadow-green-200">
                <FiSend size={18} />
                {loading ? "Bhej rahe hain..." : "Message Bhejo"}
              </button>

              {status === "success" && <p className="text-green-600 text-sm text-center">✅ Message mil gaya! Hum jald contact karenge.</p>}
              {status === "error" && <p className="text-red-500 text-sm text-center">❌ Kuch error aaya. Dobara try karo.</p>}
            </form>
          </div>

          {/* RIGHT — Info */}
          <div className="flex flex-col gap-5">
            <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-3xl p-6">
              <h3 className="text-white font-bold text-xl mb-1">Seedha Baat Karo</h3>
              <p className="text-white/70 text-sm mb-4">Form se zyada fast — call ya WhatsApp karo.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link aria-label="Call us" href="tel:+919991777219"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-black text-green-500 font-bold px-4 py-3 rounded-xl hover:bg-gray-900 transition-all">
                  <FiPhone size={16} /> Call Now
                </Link>
                <Link aria-label="WhatsApp us" href="https://wa.me/919991777218" target="_blank" rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-green-500 text-white font-bold px-4 py-3 rounded-xl hover:bg-green-600 transition-all">
                  <FaWhatsapp size={16} /> WhatsApp
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              {contactInfo.map(({ icon: Icon, label, value, href }, index) => (
                <Link
                  key={`${label}-${index}`}
                  aria-label={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-white border border-gray-100 rounded-2xl px-4 py-3.5 shadow-sm hover:shadow-md hover:border-green-200 transition-all group"
                >
                  <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-100 transition-colors">
                    <Icon size={18} className="text-green-500" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">{label}</p>
                    <p className="text-gray-900 font-semibold text-sm">{value}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};