import { MessageCircle, Gift, Repeat2 } from "lucide-react";

export default function Loyalty() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        {/* Main loyalty card */}
        <div
          className="relative rounded-3xl overflow-hidden border border-[#D4AF37]/30 gold-glow"
          style={{
            background:
              "linear-gradient(135deg, #111 0%, #161305 40%, #111 100%)",
          }}
        >
          {/* Background shimmer */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, #D4AF37 0%, transparent 50%), radial-gradient(circle at 80% 50%, #F0D060 0%, transparent 50%)",
            }}
          />

          <div className="relative z-10 px-8 py-12 sm:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Left: Text */}
              <div>
                <div
                  className="inline-flex items-center gap-2 border border-[#D4AF37]/40 rounded-full px-3 py-1 text-xs font-bold tracking-widest uppercase text-[#D4AF37] mb-6"
                >
                  <Gift size={12} />
                  Loyalty Reward
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 leading-tight">
                  Wash 5 Times,{" "}
                  <span style={{ color: "#D4AF37" }}>Get 1 FREE</span>
                </h2>
                <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-md">
                  Our loyalty stamp card is the easiest way to save money on your
                  regular wash. Every 5th wash is on us — no catches, no expiry.
                  Ask us about it when you visit!
                </p>
                <a
                  href="https://wa.me/27767838899?text=Hi%20Muthwa%2C%20I%20want%20to%20know%20more%20about%20the%20loyalty%20card"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 btn-gold px-7 py-3.5 rounded-full text-sm"
                >
                  <MessageCircle size={16} />
                  Ask About Our Loyalty Card
                </a>
              </div>

              {/* Right: Stamp card visual */}
              <div className="flex justify-center lg:justify-end">
                <div className="bg-[#0d0d0d] border border-[#D4AF37]/20 rounded-2xl p-6 w-full max-w-sm">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <div
                        className="text-sm font-black tracking-widest"
                        style={{ color: "#D4AF37" }}
                      >
                        MUTHWA
                      </div>
                      <div className="text-[10px] text-gray-500 tracking-widest uppercase">
                        Loyalty Card
                      </div>
                    </div>
                    <Repeat2 size={20} style={{ color: "#D4AF37" }} />
                  </div>

                  {/* 5 stamp slots + 1 free */}
                  <div className="grid grid-cols-6 gap-2 mb-4">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <div
                        key={n}
                        className="aspect-square rounded-lg flex items-center justify-center text-lg border"
                        style={{
                          background:
                            n <= 3
                              ? "rgba(212,175,55,0.15)"
                              : "rgba(255,255,255,0.03)",
                          borderColor:
                            n <= 3 ? "rgba(212,175,55,0.4)" : "#1e1e1e",
                        }}
                      >
                        {n <= 3 ? "✓" : ""}
                      </div>
                    ))}
                    {/* Free wash slot */}
                    <div
                      className="aspect-square rounded-lg flex flex-col items-center justify-center text-center border border-[#D4AF37]/40"
                      style={{ background: "rgba(212,175,55,0.08)" }}
                    >
                      <span className="text-[8px] font-bold text-[#D4AF37] leading-tight">
                        FREE
                        <br />
                        WASH
                      </span>
                    </div>
                  </div>

                  <p className="text-[11px] text-gray-600 text-center">
                    3 of 5 stamps collected · 2 more to go!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
