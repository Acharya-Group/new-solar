"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiChevronRight, FiHome } from "react-icons/fi";

const CommonHero = () => {
    const pathname = usePathname();

    // Convert "/services" → "Services", "/solar-calculator" → "Solar Calculator"
    const pageName = pathname
        .replace("/", "")
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ") || "Home";

    return (
        <section className="py-10 bg-gradient-to-r  from-gray-50 to-amber-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="flex items-center justify-center gap-2 text-sm">
                    <Link href="/" aria-label="Go to Home"
                        className="flex justify-center items-center gap-1 text-gray-500 hover:text-green-600 transition-colors duration-200"

                    >
                        <FiHome size={14} />
                        <span>Home</span>
                    </Link>
                    <FiChevronRight size={14} className="text-gray-300" />
                    <span className="text-gray-800 font-semibold">{pageName}</span>
                </nav>
            </div>
        </section>
    );
};

export default CommonHero;