"use client";
import React, { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { Heading } from "@/components/common/Heading";
import { SubHeading } from "@/components/common/SubHeading";
import { Button } from "@/components/common/Button";
import { FiSun, FiZap, FiBattery, FiArrowRight, FiStar, FiShield, FiCheck, FiAnchor } from "react-icons/fi";
import SectionBadge from "@/components/common/SectionBadge/SectionBadge";

type Category = "panels" | "inverters" | "batteries" | "earthing";

const categories = [
  { id: "panels" as Category, label: "Solar Panels", icon: FiSun, activeBg: "bg-yellow-500" },
  { id: "inverters" as Category, label: "Inverters", icon: FiZap, activeBg: "bg-blue-500" },
  { id: "batteries" as Category, label: "Batteries", icon: FiBattery, activeBg: "bg-green-500" },
  { id: "earthing" as Category, label: "Earthing Material", icon: FiAnchor, activeBg: "bg-orange-500" },
];

const products: Record<Category, {
  name: string; tag: string; tagColor: string; price?: string; oldPrice?: string;
  wattage: string; efficiency: string; warranty: string; highlights: string[];
  badge?: string; badgeBg: string; gradient: string; iconColor: string; brand?: string;
}[]> = {
  panels: [
    // UTL Panels
    {
      name: "UTL 525W Panel", tag: "Premium", tagColor: "text-orange-600",
      wattage: "525W", efficiency: "22.5%", warranty: "25 Years",
      highlights: ["Dual-side energy capture", "High wind resistance", "Excellent shading tolerance", "N-type cell technology"],
      badgeBg: "bg-orange-50 border-orange-200", gradient: "from-orange-400 to-red-400", iconColor: "text-orange-500",
      brand: "UTL",
    },
    {
      name: "UTL 580W Panel", tag: "Premium", tagColor: "text-orange-600",
      wattage: "580W", efficiency: "23.1%", warranty: "25 Years",
      highlights: ["Dual-side energy capture", "High wind resistance", "Excellent shading tolerance", "N-type cell technology"],
      badgeBg: "bg-orange-50 border-orange-200", gradient: "from-orange-400 to-red-400", iconColor: "text-orange-500",
      brand: "UTL",
    },
    {
      name: "UTL 590W Panel", tag: "Premium", tagColor: "text-orange-600",
      wattage: "590W", efficiency: "23.2%", warranty: "25 Years",
      highlights: ["Dual-side energy capture", "High wind resistance", "Excellent shading tolerance", "N-type cell technology"],
      badgeBg: "bg-orange-50 border-orange-200", gradient: "from-orange-400 to-red-400", iconColor: "text-orange-500",
      brand: "UTL",
    },
    // Adani Panels
    {
      name: "Adani 540W Panel", tag: "Premium", tagColor: "text-blue-600",
      wattage: "540W", efficiency: "22.6%", warranty: "25 Years",
      highlights: ["Dual-side energy capture", "High wind resistance", "Excellent shading tolerance", "N-type cell technology"],
      badgeBg: "bg-blue-50 border-blue-200", gradient: "from-blue-400 to-cyan-400", iconColor: "text-blue-500",
      brand: "Adani",
    },
    {
      name: "Adani 580W Panel", tag: "Premium", tagColor: "text-blue-600",
      wattage: "580W", efficiency: "23.1%", warranty: "25 Years",
      highlights: ["Dual-side energy capture", "High wind resistance", "Excellent shading tolerance", "N-type cell technology"],
      badgeBg: "bg-blue-50 border-blue-200", gradient: "from-blue-400 to-cyan-400", iconColor: "text-blue-500",
      brand: "Adani",
    },
    {
      name: "Adani 620W Panel", tag: "Premium", tagColor: "text-blue-600",
      wattage: "620W", efficiency: "23.5%", warranty: "25 Years",
      highlights: ["Dual-side energy capture", "High wind resistance", "Excellent shading tolerance", "N-type cell technology"],
      badgeBg: "bg-blue-50 border-blue-200", gradient: "from-blue-400 to-cyan-400", iconColor: "text-blue-500",
      brand: "Adani",
    },
    // Waaree Panels
    {
      name: "Waaree 540W Panel", tag: "Premium", tagColor: "text-green-600",
      wattage: "540W", efficiency: "22.6%", warranty: "25 Years",
      highlights: ["Dual-side energy capture", "High wind resistance", "Excellent shading tolerance", "N-type cell technology"],
      badgeBg: "bg-green-50 border-green-200", gradient: "from-green-400 to-emerald-400", iconColor: "text-green-500",
      brand: "Waaree",
    },
    {
      name: "Waaree 580W Panel", tag: "Premium", tagColor: "text-green-600",
      wattage: "580W", efficiency: "23.1%", warranty: "25 Years",
      highlights: ["Dual-side energy capture", "High wind resistance", "Excellent shading tolerance", "N-type cell technology"],
      badgeBg: "bg-green-50 border-green-200", gradient: "from-green-400 to-emerald-400", iconColor: "text-green-500",
      brand: "Waaree",
    },
    {
      name: "Waaree 615W Panel", tag: "Premium", tagColor: "text-green-600",
      wattage: "615W", efficiency: "23.4%", warranty: "25 Years",
      highlights: ["Dual-side energy capture", "High wind resistance", "Excellent shading tolerance", "N-type cell technology"],
      badgeBg: "bg-green-50 border-green-200", gradient: "from-green-400 to-emerald-400", iconColor: "text-green-500",
      brand: "Waaree",
    },
  ],
  inverters: [
    {
      name: "Hybrid Inverter 5kW", tag: "Most Popular", tagColor: "text-blue-600",
      price: "₹52,700", oldPrice: "₹52,000", wattage: "5000W", efficiency: "98.4%", warranty: "5 Years",
      highlights: ["Battery + grid compatible", "WiFi monitoring app", "rMPPT solar charger", "Anti-islanding protection"],
      badge: "⭐ Top Rated", badgeBg: "bg-blue-50 border-blue-200",
      gradient: "from-blue-500 to-indigo-500", iconColor: "text-blue-500",
    },
    {
      name: "On-Grid Inverter 3kW", tag: "Best Value", tagColor: "text-cyan-600",
      price: "₹15,600", wattage: "3000W", efficiency: "97.6%", warranty: "5 Years",
      highlights: ["Net metering ready", "Single phase output", "LCD display", "Compact design"],
      badgeBg: "bg-cyan-50 border-cyan-200", gradient: "from-cyan-400 to-blue-400", iconColor: "text-cyan-500",
    },
    {
      name: "Off-Grid Inverter 10kW", tag: "Heavy Duty", tagColor: "text-indigo-600",
      price: "₹97,000", wattage: "10000W", efficiency: "96.5%", warranty: "5 Years",
      highlights: ["3-phase output", "Parallel operation up to 6 units", "Generator compatible", "Industrial grade"],
      badgeBg: "bg-indigo-50 border-indigo-200", gradient: "from-indigo-500 to-purple-500", iconColor: "text-indigo-500",
    },
  ],
  batteries: [
    {
      name: "Lithium LiFePO4 100Ah", tag: "Recommended", tagColor: "text-green-600",
      price: "₹25,000", oldPrice: "₹44,000", wattage: "24v", efficiency: "95%", warranty: "5 Years",
      highlights: ["4000+ charge cycles", "BMS protection built-in", "Fast charging support", "Compact & lightweight"],
      badge: "✅ Best Choice", badgeBg: "bg-green-50 border-green-200",
      gradient: "from-green-500 to-emerald-500", iconColor: "text-green-500",
    },
    {
      name: "Lead Acid Tubular 150Ah", tag: "Budget Friendly", tagColor: "text-teal-600",
      price: "₹10,000", wattage: "12v", efficiency: "90%", warranty: "5 Years",
      highlights: ["Low upfront cost", "Widely serviceable", "Proven technology", "Deep discharge resistant"],
      badgeBg: "bg-teal-50 border-teal-200", gradient: "from-teal-400 to-green-400", iconColor: "text-teal-500",
    },
  ],
  earthing: [
    {
      name: "Earthing Rod/Lightning Arrester/Chemical Bag", tag: "Premium", tagColor: "text-amber-600",
      price: "₹1,800", wattage: "Copper", efficiency: "Ultra Low Resistance", warranty: "5 Years",
      highlights: ["Best Quality", "Corrosion resistant", "Best conductivity", "Long service life"],
      badge: "⭐ Premium", badgeBg: "bg-amber-50 border-amber-200",
      gradient: "from-amber-400 to-orange-500", iconColor: "text-amber-500",
    },
  ],
};

const specLabels: Record<Category, [string, string, string]> = {
  panels:    ["Wattage",   "Efficiency",        "Warranty"],
  inverters: ["Capacity",  "Efficiency",        "Warranty"],
  batteries: ["Capacity",  "Round-trip Eff.",   "Warranty"],
  earthing:  ["Material",  "Resistance",        "Warranty"],
};

const hashToCategory: Record<string, Category> = {
  "#panels":    "panels",
  "#inverters": "inverters",
  "#batteries": "batteries",
  "#earthing":  "earthing",
};

// Brand config for the panels filter pills
const brandConfig: Record<string, { label: string; activeClass: string; dotClass: string }> = {
  All:    { label: "All Brands",  activeClass: "bg-gray-800 text-white",        dotClass: "bg-gray-400" },
  UTL:    { label: "UTL",         activeClass: "bg-orange-500 text-white",      dotClass: "bg-orange-400" },
  Adani:  { label: "Adani",       activeClass: "bg-blue-500 text-white",        dotClass: "bg-blue-400" },
  Waaree: { label: "Waaree",      activeClass: "bg-emerald-500 text-white",     dotClass: "bg-emerald-400" },
};

const Products = () => {
  const [active, setActive] = useState<Category>("panels");
  const [brandFilter, setBrandFilter] = useState<string>("All");
  const pathname = usePathname();

  const specs = specLabels[active];

  // Reset brand filter when switching away from panels
  useEffect(() => {
    if (active !== "panels") setBrandFilter("All");
  }, [active]);

  const rawList = products[active];
  const list =
    active === "panels" && brandFilter !== "All"
      ? rawList.filter((p) => p.brand === brandFilter)
      : rawList;

  const syncFromHash = useCallback(() => {
    const hash = window.location.hash;
    const matched = hashToCategory[hash];
    if (matched) {
      setActive(matched);
      setTimeout(() => {
        document.getElementById("products-tabs")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    }
  }, []);

  useEffect(() => {
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, [pathname, syncFromHash]);

  return (
    <section id="products" className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-white to-gray-100 relative overflow-hidden">
      <div className="absolute top-10 right-0 w-96 h-96 bg-yellow-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-72 h-72 bg-blue-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-10">
          <SectionBadge text="Our Products" />
          <Heading level="h2" align="center" gradient>Solar Products We Offer</Heading>
          <SubHeading align="center" className="mt-3 max-w-2xl mx-auto">
            Premium quality solar equipment —{" "}
            <span className="text-yellow-600 font-semibold">trusted brands, best prices, warranty guaranteed.</span>
          </SubHeading>
        </div>

        {/* Category Tabs */}
        <div id="products-tabs" className="flex justify-center mb-6 scroll-mt-24">
          <div className="inline-flex flex-wrap justify-center bg-white border border-gray-200 rounded-2xl p-1.5 shadow-sm gap-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200
                  ${active === cat.id
                    ? `${cat.activeBg} text-white shadow-md`
                    : "text-gray-500 hover:text-gray-800 hover:bg-gray-50"
                  }`}
              >
                <cat.icon size={16} />
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Brand Filter Pills — only shown for panels */}
        {active === "panels" && (
          <div className="flex justify-center mb-8">
            <div className="inline-flex flex-wrap justify-center gap-2">
              {Object.entries(brandConfig).map(([brand, cfg]) => (
                <button
                  key={brand}
                  onClick={() => setBrandFilter(brand)}
                  className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200
                    ${brandFilter === brand
                      ? `${cfg.activeClass} border-transparent shadow`
                      : "bg-white text-gray-500 border-gray-200 hover:border-gray-300 hover:text-gray-700"
                    }`}
                >
                  <span className={`w-2 h-2 rounded-full ${brandFilter === brand ? "bg-white/70" : cfg.dotClass}`} />
                  {cfg.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((product, i) => (
            <div
              key={`${active}-${brandFilter}-${i}`}
              className={`bg-white border-2 ${product.badgeBg} rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col`}
            >
              {/* Card Header */}
              <div className={`bg-gradient-to-r ${product.gradient} px-6 py-5 flex items-center justify-between`}>
                <div className="flex items-center gap-3">
                  {active === "panels"    && <FiSun     size={32} className="text-white/90" />}
                  {active === "inverters" && <FiZap     size={32} className="text-white/90" />}
                  {active === "batteries" && <FiBattery size={32} className="text-white/90" />}
                  {active === "earthing"  && <FiAnchor  size={32} className="text-white/90" />}
                  <div>
                    <p className="text-white/70 text-xs">{product.tag}</p>
                    <p className="text-white font-bold text-base leading-tight">{product.name}</p>
                  </div>
                </div>
                {product.badge && (
                  <span className="bg-white/20 text-white text-[10px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap">
                    {product.badge}
                  </span>
                )}
              </div>

              <div className="p-6 flex flex-col gap-4 flex-1">

                {/* Price row — hidden for panels */}
                {/* {active !== "panels" && product.price && (
                  <div className="flex items-end gap-2">
                    <span className="text-gray-900 font-bold text-2xl">{product.price}</span>
                    {product.oldPrice && (
                      <span className="text-gray-400 text-sm line-through mb-0.5">{product.oldPrice}</span>
                    )}
                  </div>
                )} */}

                {/* Spec grid */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: specs[0], value: product.wattage },
                    { label: specs[1], value: product.efficiency },
                    { label: specs[2], value: product.warranty },
                  ].map((spec) => (
                    <div key={spec.label} className="bg-gray-50 rounded-xl px-2 py-2 text-center">
                      <p className="text-[9px] text-gray-400 uppercase tracking-wide">{spec.label}</p>
                      <p className="text-gray-800 font-bold text-xs mt-0.5">{spec.value}</p>
                    </div>
                  ))}
                </div>

                {/* Highlights */}
                <ul className="flex flex-col gap-1.5">
                  {product.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-gray-600">
                      <FiCheck size={13} className="text-green-500 flex-shrink-0" />{h}
                    </li>
                  ))}
                </ul>

                {/* Footer meta */}
                <div className="flex items-center gap-3 text-xs text-gray-400 border-t border-gray-100 pt-3">
                  <span className="flex items-center gap-1"><FiShield size={12} className="text-green-400" /> Warranty Included</span>
                  <span className="flex items-center gap-1"><FiStar size={12} className="text-yellow-400" /> Top Rated</span>
                </div>

                {/* Actions */}
                <div className="flex gap-2 mt-auto">
                  <Button aria-label="Get quote" href="/contact" variant="primary" size="sm" className="flex-1">
                    Get Quote <FiArrowRight size={13} className="inline ml-1" />
                  </Button>
                  <Button aria-label="Learn more" href="/products" variant="outline" size="sm" className="flex-1">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm mb-4">Looking for a complete system package?</p>
          <Button aria-label="Get a free consultation" href="/contact" variant="primary" size="md">
            Get a Free Consultation →
          </Button>
        </div>

      </div>
    </section>
  );
};

export default Products;