"use client";

import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-md shadow-lg shadow-black/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex flex-col leading-none text-left"
          >
            <span
              className="text-xl font-black tracking-widest gold-text-glow"
              style={{ color: "#D4AF37" }}
            >
              MUTHWA
            </span>
            <span className="text-[10px] font-semibold tracking-[0.25em] text-gray-300 uppercase">
              Premium Car Wash
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-sm font-medium text-gray-300 hover:text-[#D4AF37] transition-colors tracking-wide"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/27767838899"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 btn-whatsapp px-4 py-2 rounded-full text-sm font-semibold"
          >
            <MessageCircle size={16} />
            076 783 8899
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-gray-300 hover:text-[#D4AF37] transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-[#0d0d0d] border-t border-[#222] px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-base font-medium text-gray-200 hover:text-[#D4AF37] transition-colors text-left py-1"
            >
              {link.label}
            </button>
          ))}
          <a
            href="https://wa.me/27767838899"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 btn-whatsapp px-4 py-3 rounded-full text-sm font-semibold mt-2"
          >
            <MessageCircle size={16} />
            WhatsApp: 076 783 8899
          </a>
        </div>
      )}
    </nav>
  );
}
