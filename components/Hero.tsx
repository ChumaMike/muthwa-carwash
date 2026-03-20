"use client";

import { MessageCircle, ChevronDown } from "lucide-react";

const stats = [
  { value: "500+", label: "Happy Customers" },
  { value: "3+", label: "Years in Soweto" },
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
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#080808]"
    >
      {/* ── Animated orb glows ── */}
      <div
        className="absolute top-[-10%] left-[-5%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full pointer-events-none animate-pulse-slow"
        style={{
          background: "radial-gradient(circle, rgba(232,25,44,0.18) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute bottom-[5%] right-[-8%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] rounded-full pointer-events-none animate-pulse-slow2"
        style={{
          background: "radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      {/* Center subtle glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(232,25,44,0.05) 0%, transparent 70%)",
        }}
      />

      {/* Diagonal stripe overlay */}
      <div className="absolute inset-0 bg-diagonal opacity-100 pointer-events-none" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#080808] to-transparent pointer-events-none" />

      {/* Red + gold bottom line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[3px] pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent 0%, #E8192C 30%, #D4AF37 60%, #F0D060 80%, transparent 100%)" }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-24">

        {/* isiZulu welcome */}
        <p className="text-xs font-semibold tracking-[0.35em] uppercase text-[#E8192C]/70 mb-4">
          Siyakwamukela · Welcome
        </p>

        {/* Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 border border-[#E8192C]/40 bg-[#E8192C]/10 rounded-full px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-[#E8192C]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8192C] animate-pulse" />
            Now Open · Soweto&apos;s Premier Car Wash
          </div>
          <div className="inline-flex items-center gap-1.5 border border-green-500/30 bg-green-500/10 rounded-full px-3 py-1.5 text-xs font-semibold text-green-400">
            💧 Water-Saving Method
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-[0.95] tracking-tight mb-6">
          <span className="text-white">Your Car</span>
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #E8192C 0%, #D4AF37 50%, #F0D060 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Deserves the Best
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Premium car wash services in Klipspruit, Soweto. Honest prices,
          professional results — for sedans, buses, taxis &amp; Bolt/Uber drivers.
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
            className="btn-outline-red px-8 py-4 rounded-full text-base w-full sm:w-auto"
          >
            See Our Prices
          </button>
        </div>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-0">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center">
              <div className="text-center px-8 py-2">
                <div
                  className="text-3xl font-black"
                  style={{
                    color: i === 1 ? "#D4AF37" : "#E8192C",
                    textShadow: i === 1
                      ? "0 0 20px rgba(212,175,55,0.5)"
                      : "0 0 20px rgba(232,25,44,0.5)",
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500 mt-0.5 tracking-wide">
                  {stat.label}
                </div>
              </div>
              {i < stats.length - 1 && (
                <div className="hidden sm:block w-px h-10 bg-[#E8192C]/20" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo("services")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#E8192C]/50 hover:text-[#E8192C] transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
}
