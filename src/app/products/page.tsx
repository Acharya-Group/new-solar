import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solar Products – Panels, Inverters & Batteries | Neo Solar",
  description:
    "Neo Solar ke premium solar products dekhein — on-grid, off-grid aur hybrid systems. Top brands, best prices aur 25 saal ki warranty ke saath.",
};

const products = [
  {
    id: 1,
    category: "On-Grid System",
    emoji: "⚡",
    color: "from-blue-500 to-cyan-500",
    bg: "bg-blue-50",
    border: "border-blue-200",
    tag: "Most Popular",
    tagColor: "bg-blue-500",
    sizes: ["1 kW", "2 kW", "3 kW", "5 kW", "10 kW"],
    price: "Starting ₹45,000",
    subsidy: "₹78,000 subsidy available",
    features: [
      "Grid se connected — bijli becho bhi",
      "Net metering support",
      "PM Surya Ghar subsidy eligible",
      "25 saal panel warranty",
      "5 saal inverter warranty",
    ],
    cta: "/contact",
  },
  {
    id: 2,
    category: "Off-Grid System",
    emoji: "🔋",
    color: "from-green-500 to-emerald-500",
    bg: "bg-green-50",
    border: "border-green-200",
    tag: "Best for Rural",
    tagColor: "bg-green-500",
    sizes: ["1 kW", "2 kW", "3 kW", "5 kW"],
    price: "Starting ₹65,000",
    subsidy: "Battery backup included",
    features: [
      "Grid se independent — 24/7 bijli",
      "Battery storage system",
      "Power cuts mein bhi kaam kare",
      "Remote areas ke liye perfect",
      "25 saal panel warranty",
    ],
    cta: "/contact",
  },
  {
    id: 3,
    category: "Hybrid System",
    emoji: "🌟",
    color: "from-purple-500 to-pink-500",
    bg: "bg-purple-50",
    border: "border-purple-200",
    tag: "Best of Both",
    tagColor: "bg-purple-500",
    sizes: ["3 kW", "5 kW", "10 kW"],
    price: "Starting ₹85,000",
    subsidy: "Grid + Battery backup",
    features: [
      "Grid aur battery dono",
      "Power cut mein battery se chalao",
      "Extra bijli grid ko becho",
      "Smart energy management",
      "25 saal panel warranty",
    ],
    cta: "/contact",
  },
];

const brands = [
  { name: "Adani Solar", country: "🇮🇳" },
  { name: "Waaree", country: "🇮🇳" },
  { name: "Luminous", country: "🇮🇳" },
  { name: "Havells", country: "🇮🇳" },
  { name: "Tata Power Solar", country: "🇮🇳" },
  { name: "SolarEdge", country: "🌍" },
];

const whyNeo = [
  { icon: "🏆", title: "Top Brand Panels", desc: "Sirf certified aur tested panels use karte hain" },
  { icon: "🔧", title: "Expert Installation", desc: "Trained technicians, clean wiring, proper mounting" },
  { icon: "📋", title: "Subsidy Help", desc: "PM Surya Ghar ki poori paperwork hum karte hain" },
  { icon: "📞", title: "After-Sales Support", desc: "Installation ke baad bhi hum available hain" },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Hero */}
      <section className="bg-gradient-to-br from-green-600 via-teal-700 to-blue-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
            MNRE Approved • ISO Certified
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Hamare Solar Products
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Ghar ya business ke liye — har zaroorat ka solar solution. Top brands,
            best prices aur 25 saal ki warranty.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["✅ Free Site Survey", "✅ EMI Available", "✅ Subsidy Assistance", "✅ 25 Yr Warranty"].map((b) => (
              <span key={b} className="bg-white/15 border border-white/25 px-4 py-1.5 rounded-full text-sm font-medium">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Apna System Choose Karo</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Apni zaroorat ke hisaab se system chunein — hum free site survey karke best option suggest karenge
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((p) => (
            <div key={p.id} className={`relative bg-white rounded-3xl border ${p.border} shadow-lg overflow-hidden flex flex-col`}>

              {/* Tag */}
              <div className={`absolute top-4 right-4 ${p.tagColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                {p.tag}
              </div>

              {/* Header */}
              <div className={`bg-gradient-to-r ${p.color} px-6 py-8 text-white`}>
                <div className="text-4xl mb-3">{p.emoji}</div>
                <h2 className="text-2xl font-bold mb-1">{p.category}</h2>
                <p className="text-white/80 text-sm">{p.subsidy}</p>
              </div>

              {/* Body */}
              <div className="px-6 py-6 flex flex-col gap-5 flex-1">

                {/* Price */}
                <div className={`${p.bg} ${p.border} border rounded-2xl px-4 py-3 text-center`}>
                  <p className="text-xs text-gray-500 mb-1">Price</p>
                  <p className="text-2xl font-bold text-gray-900">{p.price}</p>
                  <p className="text-xs text-gray-400 mt-1">GST included • Free installation</p>
                </div>

                {/* Sizes */}
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-2">Available Sizes</p>
                  <div className="flex flex-wrap gap-2">
                    {p.sizes.map((s) => (
                      <span key={s} className="bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full border border-gray-200">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <ul className="flex flex-col gap-2 flex-1">
                  {p.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={p.cta}
                  className={`w-full text-center bg-gradient-to-r ${p.color} text-white font-bold py-3 px-6 rounded-xl hover:opacity-90 transition-all duration-200 hover:scale-[1.02] shadow-md`}
                >
                  Free Quote Lo →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Brands */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Top Brands Jo Hum Use Karte Hain</h2>
          <p className="text-gray-500 mb-10 text-sm">Sirf certified aur proven brands — koi compromise nahi</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {brands.map((b) => (
              <div key={b.name} className="bg-gray-50 border border-gray-200 rounded-2xl px-4 py-5 flex flex-col items-center gap-2 hover:border-green-400 hover:bg-green-50 transition-all duration-200">
                <span className="text-2xl">{b.country}</span>
                <span className="text-xs font-bold text-gray-700 text-center">{b.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Neo Solar */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Neo Solar Kyun Choose Karein?</h2>
          <p className="text-gray-500 text-sm">Sirf products nahi — complete solution</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {whyNeo.map((w) => (
            <div key={w.title} className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:border-green-400 hover:shadow-md transition-all duration-200">
              <div className="text-3xl mb-3">{w.icon}</div>
              <h3 className="font-bold text-gray-900 mb-2 text-sm">{w.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-green-500 to-blue-600 py-14 px-4 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-3">Apna Solar System Lagwao Aaj!</h2>
          <p className="text-white/80 mb-8">
            Free site survey karwaein — expert aayega, assess karega aur best system suggest karega
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-green-700 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Free Quote Lo →
            </Link>
            <a
              href="https://wa.me/919991777218"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-400 text-white font-bold px-8 py-4 rounded-xl hover:bg-green-300 transition-all duration-200 hover:scale-105"
            >
              WhatsApp Karo 📱
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}