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
          ? "bg-[#080808]/96 backdrop-blur-md shadow-xl shadow-black/60 border-b border-[#E8192C]/20"
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
            <div className="flex items-center gap-1.5">
              <span
                className="text-xl font-black tracking-widest gold-text-glow"
                style={{ color: "#D4AF37" }}
              >
                MUTHWA
              </span>
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: "#E8192C", boxShadow: "0 0 6px #E8192C" }}
              />
            </div>
            <span className="text-[10px] font-semibold tracking-[0.25em] text-gray-400 uppercase">
              Premium Car Wash
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors tracking-wide relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#E8192C] transition-all duration-300 group-hover:w-full rounded-full" />
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
            <MessageCircle size={15} />
            076 783 8899
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-gray-300 hover:text-[#E8192C] transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-[#0a0a0a] border-t border-[#E8192C]/20 px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-base font-medium text-gray-200 hover:text-[#E8192C] transition-colors text-left py-1 border-b border-[#1a1a1a] last:border-0"
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
