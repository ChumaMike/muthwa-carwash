"use client";

import { MessageCircle, ChevronDown } from "lucide-react";

const stats = [
  { value: "500+", label: "Happy Customers" },
  { value: "3+", label: "Years Experience" },
  { value: "Same Day", label: "Service" },
];

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      {/* Radial gold glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(212,175,55,0.08) 0%, transparent 70%)",
        }}
      />
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(212,175,55,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-24">
        {/* Badges row */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 border border-[#D4AF37]/30 bg-[#D4AF37]/10 rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-[#D4AF37]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
            Now Open · Soweto&apos;s Premier Car Wash
          </div>
          <div className="inline-flex items-center gap-1.5 border border-green-500/30 bg-green-500/10 rounded-full px-3 py-1.5 text-xs font-semibold text-green-400">
            💧 Water-Saving Wash Method
          </div>
        </div>
        {/* isiZulu welcome */}
        <p className="text-sm text-[#D4AF37]/60 tracking-widest uppercase mb-3 font-medium">
          Siyakwamukela · Welcome
        </p>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-6">
          <span className="text-white">Your Car</span>
          <br />
          <span
            className="gold-text-glow"
            style={{
              color: "#D4AF37",
              background: "linear-gradient(135deg, #D4AF37, #F0D060, #D4AF37)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Deserves the Best
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Premium car wash services in Klipspruit, Soweto. Affordable prices,
          professional results — for sedans, buses, taxis & Bolt/Uber drivers.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="https://wa.me/27767838899?text=Hi%20Muthwa%20Premium%20Car%20Wash%2C%20I%20would%20like%20to%20book%20a%20car%20wash"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 btn-whatsapp px-8 py-4 rounded-full text-base font-bold shadow-lg w-full sm:w-auto justify-center"
          >
            <MessageCircle size={20} />
            Book via WhatsApp
          </a>
          <button
            onClick={() => scrollTo("pricing")}
            className="btn-outline-gold px-8 py-4 rounded-full text-base w-full sm:w-auto"
          >
            See Our Prices
          </button>
        </div>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div
                className="text-3xl font-black gold-text-glow"
                style={{ color: "#D4AF37" }}
              >
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 mt-0.5 tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo("services")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#D4AF37]/50 hover:text-[#D4AF37] transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
}
