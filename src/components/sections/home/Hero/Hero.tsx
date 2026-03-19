"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Heading } from "@/components/common/Heading";
import { Button } from "@/components/common/Button";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowDown, FiCheckCircle } from "react-icons/fi";
import Link from "next/link";

// ── CONFIG ──────────────────────────────────────────────
const WORDS = ["Solar is for Home", "Solar is for Hospitals", "Solar is for Schools", "Solar is for Colleges"];
const BG_IMAGES = [
  "/images/common/hero-bg.jpg",
  "/images/common/hero-bg2.jpg",
  "/images/common/hero-bg3.jpg",
  "/images/common/hero-bg4.jpg",
];
const SUBSIDY_POINTS = [
  "1-2 kW pe ₹30,000 subsidy",
  "3 kW pe ₹78,000 subsidy",
  "3kW se upar ₹78,000",
  "300 unit/month FREE bijli",
];

// ── BG SLIDER ───────────────────────────────────────────
const BgSlider: React.FC = () => {
  const [cur, setCur] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setPrev(cur);
      setTransitioning(true);
      setCur((c) => (c + 1) % BG_IMAGES.length);
    }, 5000);
    return () => clearInterval(id);
  }, [cur]);

  useEffect(() => {
    if (!transitioning) return;
    const t = setTimeout(() => { setPrev(null); setTransitioning(false); }, 1200);
    return () => clearTimeout(t);
  }, [transitioning]);

  const goTo = (i: number) => { setPrev(cur); setTransitioning(true); setCur(i); };

  return (
    <div className="absolute inset-0 overflow-hidden hidden lg:block">
      {prev !== null && (
        <Image key={`p-${prev}`} src={BG_IMAGES[prev]} alt="" fill priority={prev === 0}
          className="object-cover object-center" sizes="100vw" style={{ zIndex: 1 }} />
      )}
      <Image key={`c-${cur}`} src={BG_IMAGES[cur]} alt="Neo Solar background" fill
        priority={cur === 0} fetchPriority={cur === 0 ? "high" : "auto"}
        className="object-cover object-center" sizes="100vw"
        style={{ zIndex: 2, animation: "bgFade 1.2s ease-in-out forwards" }} />

      {/* ✅ Dark overlay — content clearly visible */}
      <div className="absolute inset-0 bg-black/55" style={{ zIndex: 3 }} />

      {/* Dot indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2" style={{ zIndex: 10 }}>
        {BG_IMAGES.map((_, i) => (
          <button key={i} aria-label={`Slide ${i + 1}`} onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-500 ${i === cur ? "w-6 h-2 bg-white" : "w-2 h-2 bg-white/45 hover:bg-white/70"}`} />
        ))}
      </div>
      <style>{`@keyframes bgFade { from { opacity: 0 } to { opacity: 1 } }`}</style>
    </div>
  );
};

// ── CANVAS ───────────────────────────────────────────────
const SolarCanvas: React.FC = () => {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current; if (!canvas) return;
    const ctx = canvas.getContext("2d"); if (!ctx) return;
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize(); window.addEventListener("resize", resize);

    const sun = { x: 0, y: 0, r: 55, angle: 0, pulse: 0 };
    const clouds = [{ x: 0, y: 0, w: 120, s: 0.12 }, { x: 0, y: 0, w: 90, s: 0.08 }, { x: 0, y: 0, w: 100, s: 0.1 }];
    const particles = Array.from({ length: 35 }, () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5, vy: -0.3 - Math.random() * 0.4,
      r: 1 + Math.random() * 2, life: Math.random() * 150, max: 120 + Math.random() * 80,
      color: Math.random() > 0.5 ? "#fbbf24" : "#f97316",
    }));

    const init = () => {
      sun.x = canvas.width * 0.85; sun.y = canvas.height * 0.15;
      clouds[0].x = canvas.width * 0.1; clouds[0].y = canvas.height * 0.08;
      clouds[1].x = canvas.width * 0.4; clouds[1].y = canvas.height * 0.05;
      clouds[2].x = canvas.width * 0.65; clouds[2].y = canvas.height * 0.12;
    };
    init(); window.addEventListener("resize", init);

    const drawCloud = (x: number, y: number, w: number) => {
      ctx.save(); ctx.globalAlpha = 0.18; ctx.fillStyle = "#fff";
      const h = w * 0.4;
      ctx.beginPath();
      ctx.ellipse(x, y, w * 0.5, h * 0.5, 0, 0, Math.PI * 2);
      ctx.ellipse(x - w * 0.2, y + h * 0.1, w * 0.32, h * 0.4, 0, 0, Math.PI * 2);
      ctx.ellipse(x + w * 0.2, y + h * 0.1, w * 0.3, h * 0.38, 0, 0, Math.PI * 2);
      ctx.fill(); ctx.restore();
    };

    const drawSun = () => {
      sun.angle += 0.004; sun.pulse += 0.02;
      const p = 1 + Math.sin(sun.pulse) * 0.04;
      ctx.save(); ctx.translate(sun.x, sun.y);
      const glow = ctx.createRadialGradient(0, 0, sun.r, 0, 0, sun.r * 3.5);
      glow.addColorStop(0, "rgba(251,191,36,0.18)"); glow.addColorStop(1, "rgba(251,191,36,0)");
      ctx.beginPath(); ctx.arc(0, 0, sun.r * 3.5, 0, Math.PI * 2); ctx.fillStyle = glow; ctx.fill();
      const core = ctx.createRadialGradient(-8, -8, 0, 0, 0, sun.r * p);
      core.addColorStop(0, "#fffbeb"); core.addColorStop(0.5, "#fbbf24"); core.addColorStop(1, "#f59e0b");
      ctx.beginPath(); ctx.arc(0, 0, sun.r * p, 0, Math.PI * 2); ctx.fillStyle = core; ctx.fill();
      ctx.rotate(sun.angle);
      for (let i = 0; i < 14; i++) {
        const a = (i / 14) * Math.PI * 2; const inn = sun.r * p + 8; const out = inn + (i % 2 === 0 ? 20 : 11);
        ctx.beginPath(); ctx.moveTo(Math.cos(a) * inn, Math.sin(a) * inn); ctx.lineTo(Math.cos(a) * out, Math.sin(a) * out);
        ctx.strokeStyle = `rgba(251,191,36,${i % 2 === 0 ? 0.65 : 0.35})`; ctx.lineWidth = 2; ctx.lineCap = "round"; ctx.stroke();
      }
      ctx.restore();
    };

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      clouds.forEach((c) => { c.x += c.s; if (c.x > canvas.width + 100) c.x = -150; drawCloud(c.x, c.y, c.w); });
      drawSun();
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy; p.life++;
        if (p.life > p.max) { p.x = Math.random() * canvas.width; p.y = canvas.height; p.life = 0; }
        ctx.save(); ctx.globalAlpha = Math.sin((p.life / p.max) * Math.PI) * 0.3;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fillStyle = p.color; ctx.fill(); ctx.restore();
      });
      animId = requestAnimationFrame(animate);
    };
    animate();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); window.removeEventListener("resize", init); };
  }, []);
  return <canvas ref={ref} className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 4 }} />;
};

// ── HERO ─────────────────────────────────────────────────
export const Hero: React.FC = () => {
  const [wordIdx, setWordIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [charIdx, setCharIdx] = useState(0);
  const [showCanvas, setShowCanvas] = useState(false);

  useEffect(() => { const t = setTimeout(() => setShowCanvas(true), 1000); return () => clearTimeout(t); }, []);

  useEffect(() => {
    const word = WORDS[wordIdx];
    let t: NodeJS.Timeout;
    if (!deleting && charIdx < word.length)       t = setTimeout(() => setCharIdx((c) => c + 1), 75);
    else if (!deleting && charIdx === word.length) t = setTimeout(() => setDeleting(true), 2200);
    else if (deleting && charIdx > 0)              t = setTimeout(() => setCharIdx((c) => c - 1), 35);
    else { setDeleting(false); setWordIdx((w) => (w + 1) % WORDS.length); }
    setText(word.slice(0, charIdx));
    return () => clearTimeout(t);
  }, [charIdx, deleting, wordIdx]);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <BgSlider />
      {showCanvas && <SolarCanvas />}

      {/* Gradient overlays */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 5 }}>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-24" style={{ zIndex: 6 }}>
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* LEFT */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-5">
            <div className="inline-flex items-center gap-2 bg-green-400/20 border border-green-400/50 text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              India's Most Trusted Solar Company
            </div>

            <Heading level="h1" align="center">Neo Solar</Heading>

            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight min-h-[1.3em]">
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                {text}
                <span className="inline-block w-[3px] h-[0.85em] bg-green-400 ml-1 align-middle animate-pulse" />
              </span>
            </div>

            <p className="max-w-lg text-xl text-white/90 font-medium drop-shadow-lg">
              Premium solar panels, expert installation, and a 25-year warranty — reduce your electricity bill by up to 90%.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-3 mt-1">
              <Button aria-label="Free consultation" href="/contact" variant="primary" size="lg">Free Consultation</Button>
              <Link href="/products" aria-label="Explore products"
                className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 text-white hover:bg-white/25 px-6 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
                Explore Products
              </Link>
              <Link href="https://wa.me/919991777218" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                className="inline-flex items-center gap-2 bg-green-500 text-white hover:bg-green-600 px-7 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                <FaWhatsapp size={20} /> WhatsApp
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mt-1">
              {["✅ Free Site Survey", "✅ Finance / EMI", "✅ Net Metering Help", "✅ After-Sales Support"].map((item) => (
                <span key={item} className="text-xs text-white/90 bg-white/15 backdrop-blur-sm border border-white/20 px-3 py-1.5 rounded-full">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT — Subsidy Card */}
          <div className="w-full lg:w-[380px] flex-shrink-0">
            <div className="bg-white/95 backdrop-blur-md border border-green-200 rounded-3xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-green-500 px-6 py-5 flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-2xl">🇮🇳</div>
                <div>
                  <p className="text-white/80 text-xs font-medium uppercase tracking-wide">Government Subsidy Scheme</p>
                  <h2 className="text-white font-bold text-lg leading-tight">PM Surya Ghar Yojana</h2>
                </div>
              </div>

              <div className="px-6 py-5 flex flex-col gap-4">
                <div className="bg-green-50 border border-green-200 rounded-2xl px-4 py-3 text-center">
                  <p className="text-xs text-gray-500 mb-1">Maximum Subsidy</p>
                  <p className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">₹78,000</p>
                  <p className="text-xs text-gray-500 mt-1">PM-SGMBY</p>
                </div>

                <div className="flex flex-col gap-2">
                  {SUBSIDY_POINTS.map((pt, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <FiCheckCircle size={16} className="text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{pt}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-green-50 border border-green-200 rounded-xl px-4 py-3 flex items-center gap-3">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <p className="text-sm font-bold text-green-700">300 Units FREE Har Mahine</p>
                    <p className="text-xs text-green-600">Sell Extra Units Through Net Metering</p>
                  </div>
                </div>

                <Button aria-label="Apply for subsidy" href="/contact" variant="primary" size="md" fullWidth>
                  Apply For Subsidy →
                </Button>
                <p className="text-[11px] text-gray-400 text-center">Complete guidance for a fast and easy application.</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/60 animate-bounce" style={{ zIndex: 6 }}>
        <span className="text-xs font-medium">Scroll</span>
        <FiArrowDown size={16} />
      </div>
    </section>
  );
};