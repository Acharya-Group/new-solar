"use client";

import React, { useState } from "react";
import Link from "next/link";
import { navItems } from "@/lib/constants/navigation";
import { useScrollPosition } from "@/lib/hooks/useScrollPosition";
import { Button } from "@/components/common/Button";
import { cn } from "@/lib/utils/cn";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import Image from "next/image";

export const Header: React.FC = () => {
  const { isScrolled } = useScrollPosition();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const closeMenu = () => {
    setMobileOpen(false);
    setOpenDropdown(null);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/40 z-40 lg:hidden transition-opacity duration-300",
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
        onClick={closeMenu}
      />

      <header
        className={cn(
          "sticky top-0 z-50 border-b transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-gray-200 shadow"
            : "bg-white border-transparent"
        )}
      >
        <div className="max-w-7xl border-b border-gray-200 mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
           <Image src="/images/common/logo.jpg" unoptimized alt="Neo Solar Logo" width={150} height={150} className="object-contain" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-green-600 transition text-sm lg:text-base font-medium rounded-lg hover:bg-gray-100"
                >
                  {item.label}

                  {item.children && (
                    <FiChevronDown
                      size={14}
                      className="transition-transform group-hover:rotate-180"
                    />
                  )}
                </Link>

                {item.children && (
                  <div className="absolute top-full left-0 hidden group-hover:block pt-2 w-56 z-50">
                    <div className="bg-white border border-gray-200 rounded-xl p-2 shadow-lg">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:text-green-600 hover:bg-gray-100 rounded-lg transition"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button aria-label="Open solar calculator" href="/solar-calculator" variant="outline" size="sm">
             Solar Calculator
            </Button>

            <Button aria-label="Request free quote" href="/contact" variant="primary" size="sm">
              Free Quote
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button aria-label="Toggle menu" className="lg:hidden p-2 text-gray-700 hover:text-black transition" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden bg-white border-t border-gray-200 transition-all duration-500 overflow-hidden",
            mobileOpen
              ? "max-h-[calc(100vh-80px)] opacity-100"
              : "max-h-0 opacity-0"
          )}
        >
          {/* IMPORTANT: height + scroll */}
          <div className="max-h-[calc(100vh-80px)] overflow-y-auto px-4 py-4 flex flex-col gap-1">
            
            {navItems.map((item, index) => (
              <div
                key={item.href}
                className={cn(
                  "transition-all duration-500",
                  mobileOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                )}
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <div className="flex flex-col">

                  {/* Parent */}
                  <button aria-label={item.label}
                    onClick={() =>
                      item.children
                        ? setOpenDropdown(
                            openDropdown === item.href ? null : item.href
                          )
                        : closeMenu()
                    }
                    className="flex items-center justify-between px-4 py-3 text-gray-700 hover:text-yellow-600 hover:bg-gray-100 rounded-xl font-medium transition"
                  >
                    <Link aria-label={item.label} href={item.href}>
                      {item.label}
                    </Link>

                    {item.children && (
                      <FiChevronDown
                        size={18}
                        className={cn(
                          "transition-transform",
                          openDropdown === item.href && "rotate-180"
                        )}
                      />
                    )}
                  </button>

                  {/* Dropdown */}
                  {item.children && (
                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-300",
                        openDropdown === item.href
                          ? "max-h-44 opacity-100"
                          : "max-h-0 opacity-0"
                      )}
                    >
                      <div className="ml-4 border-l border-gray-200 pl-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={closeMenu}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-green-600 transition"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* CTA */}
            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-200">
              <Button
                aria-label="Open solar calculator"
                href="/solar-calculator"
                variant="outline"
                fullWidth
                onClick={closeMenu}
              >
                Calculator
              </Button>

              <Button aria-label="Request free quote"
                href="/contact"
                variant="primary"
                fullWidth
                onClick={closeMenu}
              >
                Get Free Quote
              </Button>
            </div>

          </div>
        </div>
      </header>
    </>
  );
};