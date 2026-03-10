"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "en" | "hi";

interface LangContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (key: string) => string;
}

const LangContext = createContext<LangContextType | undefined>(undefined);

// ============================================================
// ALL TRANSLATIONS
// ============================================================
export const translations: Record<Lang, Record<string, string>> = {
  en: {
    // TOPBAR
    "topbar.address": "Plot No. 01, Near Blessing Marriage Palace, Hisar-125001 (Haryana), India",
    "topbar.whatsapp": "WhatsApp",
    "topbar.lang_btn": "हिंदी",

    // NAVBAR
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.services.ongrid": "On-Grid Solar System",
    "nav.services.offgrid": "Off-Grid Solar System",
    "nav.services.hybrid": "Hybrid Solar System",
    "nav.services.netmetering": "Net Metering",
    "nav.projects": "Projects",
    "nav.gallery": "Gallery",
    "nav.calculator": "Solar Calculator",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.calculator_btn": "Calculator",
    "nav.quote_btn": "Free Quote",
    "nav.mobile_quote": "Get Free Quote",

    // HERO
    "hero.badge": "India's #1 Trusted Solar Company",
    "hero.heading": "Neo Solar Se",
    "hero.typewriter.1": "Zero Your Electricity Bill",
    "hero.typewriter.2": "Adopt Clean Energy",
    "hero.typewriter.3": "Be Free with Solar",
    "hero.subheading": "Premium solar panels, expert installation and 25-year warranty — reduce your electricity bill by 90%.",
    "hero.cta_consult": "Get Free Consultation",
    "hero.cta_whatsapp": "WhatsApp Us",
    "hero.badge1": "✅ Free Site Survey",
    "hero.badge2": "✅ EMI Available",
    "hero.badge3": "✅ Net Metering Help",
    "hero.badge4": "✅ After-Sales Support",
    "hero.card_tag": "Government Scheme",
    "hero.card_title": "PM Surya Ghar Yojana",
    "hero.card_subsidy_label": "Maximum Subsidy",
    "hero.card_subsidy_note": "Direct from Central Government",
    "hero.card_point1": "1-2 kW gets ₹30,000 subsidy",
    "hero.card_point2": "3 kW gets ₹78,000 subsidy",
    "hero.card_point3": "Above 3kW fixed ₹78,000",
    "hero.card_point4": "300 units/month FREE electricity",
    "hero.card_units": "300 Units FREE Every Month",
    "hero.card_units_sub": "Sell extra units via Net Metering",
    "hero.card_cta": "Apply for Subsidy →",
    "hero.card_note": "We will help you throughout the application process",
    "hero.scroll": "Scroll",
    "hero.stat1": "Installations",
    "hero.stat2": "Years Experience",
    "hero.stat3": "Warranty",
    "hero.stat4": "Satisfaction",

    // FOOTER
    "footer.description": "Neo Solar provides premium solar energy solutions for homes and businesses across India. Expert installation, top-brand panels, PM Surya Ghar subsidy assistance, and 25-year warranty.",
    "footer.badge1": "🇮🇳 Make in India",
    "footer.badge2": "⚡ MNRE Approved",
    "footer.badge3": "✅ ISO Certified",
    "footer.follow": "Follow Us",
    "footer.company": "Company",
    "footer.services": "Services",
    "footer.support": "Support",
    "footer.link_about": "About Us",
    "footer.link_projects": "Projects",
    "footer.link_gallery": "Gallery",
    "footer.link_terms": "Terms & Conditions",
    "footer.link_ongrid": "On-Grid System",
    "footer.link_offgrid": "Off-Grid System",
    "footer.link_hybrid": "Hybrid System",
    "footer.link_netmetering": "Net Metering",
    "footer.link_calculator": "Solar Calculator",
    "footer.link_faq": "FAQ",
    "footer.link_contact": "Contact Us",
    "footer.link_consultation": "Free Consultation",
    "footer.link_warranty": "Warranty Policy",
    "footer.pm_title": "PM Surya Ghar Yojana",
    "footer.pm_sub": "Subsidy up to ₹78,000 — we help you completely",
    "footer.pm_cta": "Apply for Subsidy →",
    "footer.copyright": "India's #1 Trusted Solar Company",
    "footer.terms": "Terms & Conditions",
    "footer.privacy": "Privacy Policy",
  },

  hi: {
    // TOPBAR
    "topbar.address": "प्लॉट नं. 01, ब्लेसिंग मैरिज पैलेस के पास, हिसार-125001 (हरियाणा), भारत",
    "topbar.whatsapp": "व्हाट्सएप",
    "topbar.lang_btn": "English",

    // NAVBAR
    "nav.home": "होम",
    "nav.services": "सेवाएं",
    "nav.services.ongrid": "ऑन-ग्रिड सोलर सिस्टम",
    "nav.services.offgrid": "ऑफ-ग्रिड सोलर सिस्टम",
    "nav.services.hybrid": "हाइब्रिड सोलर सिस्टम",
    "nav.services.netmetering": "नेट मीटरिंग",
    "nav.projects": "प्रोजेक्ट्स",
    "nav.gallery": "गैलरी",
    "nav.calculator": "सोलर कैलकुलेटर",
    "nav.faq": "सवाल-जवाब",
    "nav.contact": "संपर्क करें",
    "nav.calculator_btn": "कैलकुलेटर",
    "nav.quote_btn": "फ्री कोटेशन",
    "nav.mobile_quote": "फ्री कोटेशन लें",

    // HERO
    "hero.badge": "भारत की #1 भरोसेमंद सोलर कंपनी",
    "hero.heading": "नियो सोलर से",
    "hero.typewriter.1": "बिजली बिल जीरो करो",
    "hero.typewriter.2": "स्वच्छ ऊर्जा अपनाओ",
    "hero.typewriter.3": "सोलर से आजाद हो",
    "hero.subheading": "प्रीमियम सोलर पैनल, एक्सपर्ट इंस्टालेशन और 25 साल की वारंटी के साथ अपना बिजली बिल 90% तक कम करो।",
    "hero.cta_consult": "फ्री सलाह लें",
    "hero.cta_whatsapp": "व्हाट्सएप करो",
    "hero.badge1": "✅ फ्री साइट सर्वे",
    "hero.badge2": "✅ EMI उपलब्ध",
    "hero.badge3": "✅ नेट मीटरिंग सहायता",
    "hero.badge4": "✅ बिक्री के बाद सहायता",
    "hero.card_tag": "सरकारी योजना",
    "hero.card_title": "पीएम सूर्य घर योजना",
    "hero.card_subsidy_label": "अधिकतम सब्सिडी",
    "hero.card_subsidy_note": "केंद्र सरकार से सीधे",
    "hero.card_point1": "1-2 kW पर ₹30,000 सब्सिडी",
    "hero.card_point2": "3 kW पर ₹78,000 सब्सिडी",
    "hero.card_point3": "3kW से ऊपर ₹78,000 फिक्स",
    "hero.card_point4": "300 यूनिट/महीना मुफ्त बिजली",
    "hero.card_units": "हर महीने 300 यूनिट मुफ्त",
    "hero.card_units_sub": "नेट मीटरिंग से अतिरिक्त यूनिट बेचो भी",
    "hero.card_cta": "सब्सिडी के लिए आवेदन करें →",
    "hero.card_note": "हम आपकी पूरी आवेदन प्रक्रिया में मदद करेंगे",
    "hero.scroll": "स्क्रॉल करें",
    "hero.stat1": "इंस्टालेशन",
    "hero.stat2": "साल का अनुभव",
    "hero.stat3": "वारंटी",
    "hero.stat4": "संतुष्टि",

    // FOOTER
    "footer.description": "नियो सोलर पूरे भारत में घरों और व्यवसायों के लिए प्रीमियम सोलर ऊर्जा समाधान प्रदान करता है। एक्सपर्ट इंस्टालेशन, टॉप-ब्रांड पैनल, पीएम सूर्य घर सब्सिडी सहायता और 25 साल की वारंटी।",
    "footer.badge1": "🇮🇳 मेड इन इंडिया",
    "footer.badge2": "⚡ MNRE अनुमोदित",
    "footer.badge3": "✅ ISO प्रमाणित",
    "footer.follow": "हमें फॉलो करें",
    "footer.company": "कंपनी",
    "footer.services": "सेवाएं",
    "footer.support": "सहायता",
    "footer.link_about": "हमारे बारे में",
    "footer.link_projects": "प्रोजेक्ट्स",
    "footer.link_gallery": "गैलरी",
    "footer.link_terms": "नियम और शर्तें",
    "footer.link_ongrid": "ऑन-ग्रिड सिस्टम",
    "footer.link_offgrid": "ऑफ-ग्रिड सिस्टम",
    "footer.link_hybrid": "हाइब्रिड सिस्टम",
    "footer.link_netmetering": "नेट मीटरिंग",
    "footer.link_calculator": "सोलर कैलकुलेटर",
    "footer.link_faq": "सवाल-जवाब",
    "footer.link_contact": "संपर्क करें",
    "footer.link_consultation": "फ्री सलाह",
    "footer.link_warranty": "वारंटी नीति",
    "footer.pm_title": "पीएम सूर्य घर योजना",
    "footer.pm_sub": "₹78,000 तक सब्सिडी — हम पूरी मदद करते हैं",
    "footer.pm_cta": "सब्सिडी के लिए आवेदन करें →",
    "footer.copyright": "भारत की #1 भरोसेमंद सोलर कंपनी",
    "footer.terms": "नियम और शर्तें",
    "footer.privacy": "गोपनीयता नीति",
  },
};

// ============================================================
// PROVIDER
// ============================================================
export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en");

  const toggleLang = () => setLang((prev) => (prev === "en" ? "hi" : "en"));

  const t = (key: string): string => {
    return translations[lang][key] ?? key;
  };

  return (
    <LangContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LangContext.Provider>
  );
};

// ============================================================
// HOOK
// ============================================================
export const useLang = (): LangContextType => {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LangProvider");
  return ctx;
};
