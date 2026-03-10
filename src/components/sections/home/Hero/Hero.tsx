"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Heading } from "@/components/common/Heading";
import { SubHeading } from "@/components/common/SubHeading";
import { Button } from "@/components/common/Button";
import { FaWhatsapp, FaSolarPanel } from "react-icons/fa";
import { FiArrowDown, FiSun, FiZap, FiShield, FiCheckCircle } from "react-icons/fi";
import Link from "next/link";

const typewriterWords = [
  "Solar is for Houses",
  "Solar is for Hospitals",
  "Solar is for Schools",
  "Solar is for Colleges",
];

const stats = [
  { icon: FiZap, value: "500+", label: "Installations" },
  { icon: FiSun, value: "10+", label: "Years Experience" },
  { icon: FiShield, value: "25 Yr", label: "Warranty" },
  { icon: FaSolarPanel, value: "98%", label: "Satisfaction" },
];

const subsidyPoints = [
  "1-2 kW pe ₹30,000 subsidy",
  "3 kW pe ₹78,000 subsidy",
  "3kW se upar ₹78,000 fixed",
  "300 unit/month FREE bijli",
];

// ══════════════════════════════════════════
//  CANVAS — SOLAR ROOFTOP SCENE
// ══════════════════════════════════════════
const SolarCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const sun = {
      x: canvas.width * 0.85,
      y: canvas.height * 0.15,
      r: 55,
      angle: 0,
      pulseT: 0,
    };

    const clouds: { x: number; y: number; w: number; speed: number; opacity: number }[] = [
      { x: canvas.width * 0.1, y: canvas.height * 0.08, w: 120, speed: 0.12, opacity: 0.5 },
      { x: canvas.width * 0.4, y: canvas.height * 0.05, w: 90, speed: 0.08, opacity: 0.4 },
      { x: canvas.width * 0.65, y: canvas.height * 0.12, w: 100, speed: 0.1, opacity: 0.35 },
    ];

    const house = {
      x: canvas.width * 0.5,
      y: canvas.height * 0.72,
      w: 180,
      h: 120,
    };

    const roofPanels = Array.from({ length: 6 }, (_, i) => ({
      offsetX: -70 + i * 26,
      offsetY: -10 + i * 4,
      w: 28,
      h: 18,
      shimmer: Math.random() * Math.PI * 2,
    }));

    const energyParticles: {
      x: number; y: number; tx: number; ty: number;
      progress: number; speed: number; opacity: number;
    }[] = Array.from({ length: 12 }, (_, i) => ({
      x: house.x - 50 + i * 20,
      y: house.y - 60,
      tx: house.x + 30 + (i % 3) * 20,
      ty: house.y + 20,
      progress: Math.random(),
      speed: 0.005 + Math.random() * 0.006,
      opacity: 0.6 + Math.random() * 0.4,
    }));

    const sunRays: { angle: number; length: number; speed: number; dotPos: number }[] = Array.from({ length: 6 }, (_, i) => ({
      angle: Math.PI * 0.6 + i * 0.12,
      length: 280 + i * 30,
      speed: 0.004 + i * 0.001,
      dotPos: Math.random(),
    }));

    const floatParticles: {
      x: number; y: number; vx: number; vy: number;
      r: number; life: number; maxLife: number; color: string;
    }[] = Array.from({ length: 40 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: -0.2 - Math.random() * 0.4,
      r: 1 + Math.random() * 2,
      life: Math.random() * 150,
      maxLife: 120 + Math.random() * 80,
      color: Math.random() > 0.5 ? "#fbbf24" : "#f97316",
    }));

    const icons: { x: number; y: number; vy: number; opacity: number; type: string }[] = [
      { x: canvas.width * 0.15, y: canvas.height * 0.3, vy: -0.3, opacity: 0.08, type: "bolt" },
      { x: canvas.width * 0.25, y: canvas.height * 0.6, vy: -0.25, opacity: 0.07, type: "sun" },
      { x: canvas.width * 0.75, y: canvas.height * 0.45, vy: -0.2, opacity: 0.06, type: "bolt" },
    ];

    const drawCloud = (x: number, y: number, w: number, opacity: number) => {
      ctx.save();
      ctx.globalAlpha = opacity;
      ctx.fillStyle = "#fff";
      const h = w * 0.4;
      ctx.beginPath();
      ctx.ellipse(x, y, w * 0.5, h * 0.5, 0, 0, Math.PI * 2);
      ctx.ellipse(x - w * 0.2, y + h * 0.1, w * 0.32, h * 0.4, 0, 0, Math.PI * 2);
      ctx.ellipse(x + w * 0.2, y + h * 0.1, w * 0.3, h * 0.38, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    const drawSun = () => {
      sun.angle += 0.004;
      sun.pulseT += 0.02;
      const pulse = 1 + Math.sin(sun.pulseT) * 0.04;
      ctx.save();
      ctx.translate(sun.x, sun.y);
      const glow = ctx.createRadialGradient(0, 0, sun.r, 0, 0, sun.r * 3.5);
      glow.addColorStop(0, "rgba(251,191,36,0.22)");
      glow.addColorStop(0.6, "rgba(251,191,36,0.06)");
      glow.addColorStop(1, "rgba(251,191,36,0)");
      ctx.beginPath();
      ctx.arc(0, 0, sun.r * 3.5, 0, Math.PI * 2);
      ctx.fillStyle = glow;
      ctx.fill();
      const core = ctx.createRadialGradient(-10, -10, 0, 0, 0, sun.r * pulse);
      core.addColorStop(0, "#fffbeb");
      core.addColorStop(0.3, "#fde68a");
      core.addColorStop(0.7, "#fbbf24");
      core.addColorStop(1, "#f59e0b");
      ctx.beginPath();
      ctx.arc(0, 0, sun.r * pulse, 0, Math.PI * 2);
      ctx.fillStyle = core;
      ctx.fill();
      ctx.rotate(sun.angle);
      for (let i = 0; i < 16; i++) {
        const a = (i / 16) * Math.PI * 2;
        const inner = sun.r * pulse + 8;
        const outer = inner + (i % 2 === 0 ? 22 : 12);
        ctx.beginPath();
        ctx.moveTo(Math.cos(a) * inner, Math.sin(a) * inner);
        ctx.lineTo(Math.cos(a) * outer, Math.sin(a) * outer);
        ctx.strokeStyle = `rgba(251,191,36,${i % 2 === 0 ? 0.7 : 0.4})`;
        ctx.lineWidth = i % 2 === 0 ? 2.5 : 1.5;
        ctx.lineCap = "round";
        ctx.stroke();
      }
      ctx.restore();
    };

    const drawSunRays = () => {
      sunRays.forEach((ray) => {
        ray.dotPos += ray.speed;
        if (ray.dotPos > 1) ray.dotPos = 0;
        const ex = sun.x + Math.cos(ray.angle) * ray.length;
        const ey = sun.y + Math.sin(ray.angle) * ray.length;
        ctx.save();
        ctx.globalAlpha = 0.06;
        ctx.strokeStyle = "#fbbf24";
        ctx.lineWidth = 1;
        ctx.setLineDash([6, 10]);
        ctx.beginPath();
        ctx.moveTo(sun.x, sun.y);
        ctx.lineTo(ex, ey);
        ctx.stroke();
        ctx.setLineDash([]);
        const dx = sun.x + (ex - sun.x) * ray.dotPos;
        const dy = sun.y + (ey - sun.y) * ray.dotPos;
        ctx.globalAlpha = 0.5 * Math.sin(ray.dotPos * Math.PI);
        ctx.beginPath();
        ctx.arc(dx, dy, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = "#fbbf24";
        ctx.shadowColor = "#fbbf24";
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
      });
    };

    const drawHouse = () => {
      const { x, y, w, h } = house;
      ctx.save();
      ctx.globalAlpha = 0.12;
      ctx.fillStyle = "#92400e";
      ctx.beginPath();
      ctx.rect(x - w / 2, y - h / 2, w, h);
      ctx.fill();
      ctx.strokeStyle = "#d97706";
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x - w / 2 - 15, y - h / 2);
      ctx.lineTo(x, y - h / 2 - 65);
      ctx.lineTo(x + w / 2 + 15, y - h / 2);
      ctx.closePath();
      ctx.fillStyle = "#b45309";
      ctx.fill();
      ctx.strokeStyle = "#d97706";
      ctx.stroke();
      ctx.strokeStyle = "#d97706";
      ctx.lineWidth = 1;
      ctx.strokeRect(x - 18, y + h / 2 - 45, 36, 45);
      ctx.strokeRect(x - w / 2 + 18, y - h / 2 + 20, 30, 25);
      ctx.strokeRect(x + w / 2 - 48, y - h / 2 + 20, 30, 25);
      ctx.restore();
      roofPanels.forEach((panel, i) => {
        panel.shimmer += 0.04;
        const px = x + panel.offsetX;
        const py = y - h / 2 - 30 + panel.offsetY;
        ctx.save();
        ctx.globalAlpha = 0.18 + Math.sin(panel.shimmer) * 0.06;
        ctx.translate(px, py);
        ctx.rotate(-0.34);
        const grad = ctx.createLinearGradient(0, 0, panel.w, panel.h);
        grad.addColorStop(0, "#1e40af");
        grad.addColorStop(0.5, "#3b82f6");
        grad.addColorStop(1, "#1d4ed8");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.roundRect(0, 0, panel.w, panel.h, 2);
        ctx.fill();
        ctx.strokeStyle = "#93c5fd";
        ctx.lineWidth = 0.4;
        ctx.beginPath(); ctx.moveTo(panel.w / 3, 0); ctx.lineTo(panel.w / 3, panel.h); ctx.stroke();
        ctx.beginPath(); ctx.moveTo((panel.w * 2) / 3, 0); ctx.lineTo((panel.w * 2) / 3, panel.h); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(0, panel.h / 2); ctx.lineTo(panel.w, panel.h / 2); ctx.stroke();
        ctx.globalAlpha = 0.1 + Math.sin(panel.shimmer + i) * 0.08;
        ctx.fillStyle = "#fbbf24";
        ctx.beginPath();
        ctx.roundRect(0, 0, panel.w, panel.h, 2);
        ctx.fill();
        ctx.restore();
      });
    };

    const drawEnergyFlow = () => {
      energyParticles.forEach((p) => {
        p.progress += p.speed;
        if (p.progress > 1) p.progress = 0;
        const cx = p.x + (p.tx - p.x) * p.progress;
        const cy = p.y + (p.ty - p.y) * p.progress - Math.sin(p.progress * Math.PI) * 30;
        ctx.save();
        ctx.globalAlpha = p.opacity * Math.sin(p.progress * Math.PI) * 0.4;
        ctx.beginPath();
        ctx.arc(cx, cy, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = "#fbbf24";
        ctx.shadowColor = "#fbbf24";
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.restore();
      });
    };

    const drawFloatParticles = () => {
      floatParticles.forEach((p) => {
        p.x += p.vx; p.y += p.vy; p.life++;
        if (p.life > p.maxLife) {
          p.x = Math.random() * canvas.width;
          p.y = canvas.height;
          p.life = 0;
        }
        ctx.save();
        ctx.globalAlpha = Math.sin((p.life / p.maxLife) * Math.PI) * 0.25;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        ctx.restore();
      });
    };

    const drawFloatingIcons = () => {
      icons.forEach((ic) => {
        ic.y += ic.vy;
        if (ic.y < -50) ic.y = canvas.height + 50;
        ctx.save();
        ctx.globalAlpha = ic.opacity;
        ctx.strokeStyle = "#d97706";
        ctx.lineWidth = 1.5;
        ctx.fillStyle = "#fbbf24";
        if (ic.type === "bolt") {
          ctx.beginPath();
          ctx.moveTo(ic.x + 8, ic.y);
          ctx.lineTo(ic.x, ic.y + 16);
          ctx.lineTo(ic.x + 6, ic.y + 16);
          ctx.lineTo(ic.x - 2, ic.y + 30);
          ctx.lineTo(ic.x + 10, ic.y + 12);
          ctx.lineTo(ic.x + 4, ic.y + 12);
          ctx.closePath();
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(ic.x, ic.y, 12, 0, Math.PI * 2);
          ctx.stroke();
          for (let i = 0; i < 8; i++) {
            const a = (i / 8) * Math.PI * 2;
            ctx.beginPath();
            ctx.moveTo(ic.x + Math.cos(a) * 15, ic.y + Math.sin(a) * 15);
            ctx.lineTo(ic.x + Math.cos(a) * 20, ic.y + Math.sin(a) * 20);
            ctx.stroke();
          }
        }
        ctx.restore();
      });
    };

    const drawDotGrid = () => {
      ctx.save();
      ctx.globalAlpha = 0.07;
      ctx.fillStyle = "#d97706";
      const spacing = 38;
      for (let x = 0; x < canvas.width; x += spacing) {
        for (let y = 0; y < canvas.height; y += spacing) {
          ctx.beginPath();
          ctx.arc(x, y, 1, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.restore();
    };

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawDotGrid();
      clouds.forEach((c) => {
        c.x += c.speed;
        if (c.x > canvas.width + 100) c.x = -150;
        drawCloud(c.x, c.y, c.w, c.opacity);
      });
      drawSun();
      drawSunRays();
      drawHouse();
      drawEnergyFlow();
      drawFloatParticles();
      drawFloatingIcons();
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
};

// ══════════════════════════════════════════
//  HERO COMPONENT
// ══════════════════════════════════════════
export const Hero: React.FC = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  // ✅ FIX: Canvas ko 1 second baad load karo — LCP pehle complete ho
  const [showCanvas, setShowCanvas] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowCanvas(true), 1000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const word = typewriterWords[currentWord];
    let timeout: NodeJS.Timeout;
    if (!isDeleting && charIndex < word.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 75);
    } else if (!isDeleting && charIndex === word.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 35);
    } else {
      setIsDeleting(false);
      setCurrentWord((w) => (w + 1) % typewriterWords.length);
    }
    setDisplayText(word.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentWord]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* ✅ LCP Fix — Priority background image */}
      <Image
        src="/images/common/hero-bg.jpg"
        alt="Neo Solar hero background"
        fill
        priority
        decoding="sync"
        fetchPriority="high"
        className="object-cover object-center hidden lg:block"
        sizes="100vw"
      />

      {/* ✅ Canvas — 1 second delay se load hoga, LCP block nahi karega */}
      {showCanvas && <SolarCanvas />}

      {/* Gradient overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-50/70 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* LEFT — Main content */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-5">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-green-400/20 border border-green-400/50 text-green-700 lg:text-white px-4 py-2 rounded-full text-sm font-semibold shadow-sm backdrop-blur-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              India Ka #1 Trusted Solar Company
            </div>

            {/* Heading + Typewriter */}
            <Heading level="h1" align="center">Neo Solar Se</Heading>
            <div className="flex flex-col gap-1">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight min-h-[1.3em]">
                <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                  {displayText}
                  <span className="inline-block w-[3px] h-[0.85em] bg-green-500 ml-1 align-middle animate-pulse" />
                </span>
              </div>
            </div>

            {/* Subheading */}
            <p
              className="max-w-m !text-xl !text-white [text-shadow:1px_1px_0_green,-1px_1px_0_green,1px_-1px_0_green,-1px_-1px_0_green,3px_3px_6px_rgba(0,0,0,0.35)]"
            >
              Premium solar panels, expert installation aur{" "}
              25 saal ki warranty ke saath apna bijli bill 90% tak kam karo.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-3 mt-1">
              <Button aria-label="Request free consultation" href="/contact" variant="primary" size="lg">
                Free Consultation Lo
              </Button>
              <Link
                aria-label="Explore our products"
                href="/products"
                className="inline-flex items-center gap-2 bg-gray-700 text-white hover:bg-gray-800 px-6 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-gray-300"
              >
                Explore Products
              </Link>
              <Link
                aria-label="Chat with us on WhatsApp"
                href="https://wa.me/919991777218"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 text-white hover:bg-green-600 px-7 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <FaWhatsapp size={20} />
                WhatsApp Karo
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mt-1">
              {["✅ Free Site Survey", "✅ EMI Available", "✅ Net Metering Help", "✅ After-Sales Support"].map((item) => (
                <span key={item} className="text-xs text-gray-500 bg-white/90 border border-gray-200 px-3 py-1.5 rounded-full shadow-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT — PM Surya Ghar Yojana Card */}
          <div className="w-full lg:w-[380px] flex-shrink-0">
            <div className="bg-white/90 backdrop-blur-md border border-green-200 rounded-3xl shadow-2xl shadow-green-100 overflow-hidden">

              {/* Card Header */}
              <div className="bg-gradient-to-r from-blue-500 to-green-500 px-6 py-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-2xl text-white">
                    🇮🇳
                  </div>
                  <div>
                    <p className="text-white/80 text-xs font-medium uppercase tracking-wide">Government Scheme</p>
                    <h2 className="text-white font-bold text-lg leading-tight">PM Surya Ghar Yojana</h2>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="px-6 py-5 flex flex-col gap-4">

                {/* Highlight box */}
                <div className="bg-gradient-to-r from-green-50 to-black-50 border border-green-200 rounded-2xl px-4 py-3 text-center">
                  <p className="text-xs text-gray-500 mb-1">Maximum Subsidy</p>
                  <p className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
                    ₹78,000
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Central Government Se Direct</p>
                </div>

                {/* Subsidy breakdown */}
                <div className="flex flex-col gap-2">
                  {subsidyPoints.map((point, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <FiCheckCircle size={16} className="text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{point}</span>
                    </div>
                  ))}
                </div>

                {/* Free units highlight */}
                <div className="bg-green-50 border border-green-200 rounded-xl px-4 py-3 flex items-center gap-3">
                  <div className="text-2xl">⚡</div>
                  <div>
                    <p className="text-sm font-bold text-green-700">300 Units FREE Har Mahine</p>
                    <p className="text-xs text-green-700">Net Metering se extra units becho bhi</p>
                  </div>
                </div>

                {/* CTA */}
                <Button aria-label="Apply for subsidy" href="/contact" variant="primary" size="md" fullWidth>
                  Subsidy Ke Liye Apply Karo →
                </Button>

                <p className="text-[11px] text-gray-400 text-center">
                  Hum aapki poori application process mein help karenge
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400 animate-bounce">
        <span className="text-xs font-medium">Scroll</span>
        <FiArrowDown size={16} />
      </div>
    </section>
  );
};