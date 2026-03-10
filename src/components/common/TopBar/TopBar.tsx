import React from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaWhatsapp, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import Link from "next/link";

export const TopBar: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile */}
        <div className="flex items-center justify-between md:hidden text-xs">
          <Link aria-label="Call us" href="tel:+919991777218" className="flex items-center gap-1.5 hover:opacity-70 transition-opacity">
            <FiPhone size={12} />
            +91 99917-77218
          </Link>
          <Link
          aria-label="WhatsApp us"
            href="https://wa.me/919991777218"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-black text-yellow-400 px-3 py-1 rounded-full hover:bg-gray-900 transition-colors"
          >
            <FaWhatsapp size={12} />
            WhatsApp
          </Link>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center justify-between text-sm font-medium">
          <div className="flex items-center gap-6">
            <Link aria-label="Call us" href="tel:+919991777218" className="flex items-center gap-1.5 hover:opacity-70 transition-opacity">
              <FiPhone size={14} />
              +91 99917-77218
            </Link>
            <Link aria-label="Email us" href="mailto:neosolarco@gmail.com" className="flex items-center gap-1.5 hover:opacity-70 transition-opacity">
              <FiMail size={14} />
              neosolarco@gmail.com
            </Link>
            <span className="hidden lg:flex items-center gap-1.5">
              <FiMapPin size={14} />
              Plot No. 01, Near Blessing Marriage Palace, Hisar-125001 (Haryana), India
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link aria-label="Follow us on Facebook" href="https://facebook.com/neosolar" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
              <FaFacebook size={16} />
            </Link>
            <Link aria-label="Follow us on Instagram" href="https://instagram.com/myneosolar" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
              <FaInstagram size={16} />
            </Link>
        
            <Link aria-label="WhatsApp us" href="https://wa.me/919991777218" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 bg-black text-white px-3 py-1 rounded-full hover:bg-gray-900 transition-colors">
              <FaWhatsapp size={14} />
              WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};