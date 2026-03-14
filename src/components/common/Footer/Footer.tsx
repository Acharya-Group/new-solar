import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/constants/site";
import { footerLinks } from "@/lib/constants/navigation";
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const socials = [
  { icon: FaFacebook, href: siteConfig.social.facebook, label: "Facebook", followers: "12K" },
  { icon: FaInstagram, href: siteConfig.social.instagram, label: "Instagram", followers: "8.5K" },
  { icon: FaWhatsapp, href: `https://wa.me/${siteConfig.contact.whatsapp}`, label: "WhatsApp", followers: "Chat" },
];

const contacts = [
  { icon: FiPhone, text: siteConfig.contact.phone, href: `tel:${siteConfig.contact.phone}` },
  { icon: FiMail, text: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
  { icon: FiMapPin, text: siteConfig.contact.address, href: "#" },
];

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-teal-700 to-blue-700" />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-32 translate-x-32 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full translate-y-24 -translate-x-24 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center">
              <div className="bg-white rounded-xl px-3 mb-2 py-1.5 shadow-sm">
                <Image
                  src="/images/common/logo.jpg"
                  alt="Neo Solar Logo"
                  width={120}
                  height={40}
                  className="object-contain h-10 w-auto"
                />
              </div>
            </Link>

            <p className="text-white/60 text-sm leading-relaxed mb-4 max-w-sm">
              {siteConfig.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {["⚡ MNRE Approved"].map((b) => (
                <span key={b} className="bg-white/10 text-white/80 text-xs font-medium px-3 py-1 rounded-full border border-white/20">{b}</span>
              ))}
            </div>

            <p className="text-white/40 text-xs mb-3 uppercase tracking-wider">Follow Us</p>
            <div className="flex items-center gap-2 flex-wrap">
              {socials.map(({ icon: Icon, href, label, followers }) => (
                <Link aria-label={label} key={label} href={href} target="_blank" rel="noopener noreferrer" title={label}
                  className="group flex flex-col items-center gap-1">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white/60 
                hover:text-white hover:bg-white/25 hover:border-white/60 hover:shadow-[0_0_12px_rgba(255,255,255,0.3)] hover:scale-110
                  transition-all duration-300">
                    <Icon size={16} />
                  </div>
                  <span className="text-white/40 text-[9px] group-hover:text-white-400 transition-colors">{followers}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          {([
            { title: "Company", links: footerLinks.company },
            { title: "Services", links: footerLinks.services },
            { title: "Support", links: footerLinks.support },
          ] as const).map(({ title, links }) => (
            <div key={title}>
              <h4 className="text-white font-bold text-sm mb-4 flex items-center gap-2">
                <span className="w-5 h-0.5 bg-white rounded-full inline-block" />{title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-white/55 hover:text-white text-sm transition-all duration-200 hover:translate-x-1 inline-block">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          {contacts.map(({ icon: Icon, text, href }, i) => (
            <Link aria-label={text} key={i} href={href}
              className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-2xl px-4 py-3 hover:bg-white/15 hover:border-green-400/50 transition-all duration-300 group">
              <div className="w-8 h-8 bg-blue-400/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-green-400/30 transition-colors">
                <Icon size={15} className="text-green-400" />
              </div>
              <span className="text-white/70 text-sm group-hover:text-white transition-colors">{text}</span>
            </Link>
          ))}
        </div>

        {/* PM Surya Ghar banner */}
        <div className="bg-gradient-to-r from-green-400/20 to-blue-400/20 border border-green-400/30 rounded-2xl px-5 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 mb-8">
          <div className="flex items-center gap-3">
            <div>
              <p className="text-white font-bold text-sm">PM Surya Ghar Yojana</p>
              <p className="text-white/60 text-xs">Get up to ₹78,000 in subsidy — we help you through the entire process</p>
            </div>
          </div>
          <Link href="/contact" className="bg-green-400 text-white text-xs font-bold px-4 py-2 rounded-xl hover:bg-green-300 transition-all whitespace-nowrap flex-shrink-0">
            Apply for Subsidy →
          </Link>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/15 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-center text-xs">© {year} Neo Solar. All rights reserved. | India's #1 Trusted Solar Company</p>
          <div className="flex gap-5">
            <Link href="/terms-and-conditions" className="text-white/40 hover:text-white text-xs transition-colors">Terms & Conditions</Link>
            <Link href="/privacy-policy" className="text-white/40 hover:text-white text-xs transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};