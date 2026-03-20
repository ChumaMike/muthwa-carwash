import { MessageCircle, Gift, Repeat2 } from "lucide-react";

export default function Loyalty() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0a0a0a]">
      {/* Background ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 15% 50%, rgba(232,25,44,0.07) 0%, transparent 60%), radial-gradient(ellipse 50% 70% at 85% 50%, rgba(212,175,55,0.07) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div
          className="relative rounded-3xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #140508 0%, #0f0a02 50%, #140508 100%)",
            border: "1px solid rgba(232,25,44,0.25)",
            boxShadow: "0 0 40px rgba(232,25,44,0.1), 0 0 80px rgba(212,175,55,0.05)",
          }}
        >
          {/* Shimmer orbs */}
          <div
            className="absolute top-0 left-0 w-64 h-64 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(232,25,44,0.15) 0%, transparent 70%)",
              filter: "blur(30px)",
              transform: "translate(-30%, -30%)",
            }}
          />
          <div
            className="absolute bottom-0 right-0 w-64 h-64 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 70%)",
              filter: "blur(30px)",
              transform: "translate(30%, 30%)",
            }}
          />

          <div className="relative z-10 px-8 py-12 sm:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Left */}
              <div>
                <div className="inline-flex items-center gap-2 border border-[#E8192C]/40 bg-[#E8192C]/10 rounded-full px-3 py-1 text-xs font-bold tracking-widest uppercase text-[#E8192C] mb-6">
                  <Gift size={12} />
                  Loyalty Reward
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 leading-tight">
                  Wash 5 Times,{" "}
                  <span
                    className="red-text-glow"
                    style={{ color: "#E8192C" }}
                  >
                    Get 1 FREE
                  </span>
                </h2>
                <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-md">
                  Our loyalty stamp card is the easiest way to save on your
                  regular wash. Every 5th wash is on us — no catches, no expiry.
                  Ask us about it when you visit!
                </p>
                <a
                  href="https://wa.me/27767838899?text=Hi%20Muthwa%2C%20I%20want%20to%20know%20more%20about%20the%20loyalty%20card"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 btn-red px-7 py-3.5 rounded-full text-sm"
                >
                  <MessageCircle size={16} />
                  Ask About Our Loyalty Card
                </a>
              </div>

              {/* Right: Stamp card */}
              <div className="flex justify-center lg:justify-end">
                <div
                  className="rounded-2xl p-6 w-full max-w-sm"
                  style={{
                    background: "#0a0a0a",
                    border: "1px solid rgba(232,25,44,0.2)",
                  }}
                >
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <div className="text-sm font-black tracking-widest" style={{ color: "#D4AF37" }}>
                        MUTHWA
                      </div>
                      <div className="text-[10px] text-gray-500 tracking-widest uppercase">
                        Loyalty Card
                      </div>
                    </div>
                    <Repeat2 size={20} style={{ color: "#E8192C" }} />
                  </div>

                  <div className="grid grid-cols-6 gap-2 mb-4">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <div
                        key={n}
                        className="aspect-square rounded-lg flex items-center justify-center text-sm font-bold border"
                        style={{
                          background: n <= 3 ? "rgba(232,25,44,0.2)" : "rgba(255,255,255,0.03)",
                          borderColor: n <= 3 ? "rgba(232,25,44,0.5)" : "#1c1c1c",
                          color: n <= 3 ? "#E8192C" : "transparent",
                        }}
                      >
                        {n <= 3 ? "✓" : ""}
                      </div>
                    ))}
                    <div
                      className="aspect-square rounded-lg flex flex-col items-center justify-center text-center border"
                      style={{
                        background: "rgba(212,175,55,0.1)",
                        borderColor: "rgba(212,175,55,0.4)",
                      }}
                    >
                      <span className="text-[8px] font-black leading-tight" style={{ color: "#D4AF37" }}>
                        FREE<br />WASH
                      </span>
                    </div>
                  </div>

                  <p className="text-[11px] text-gray-600 text-center">
                    3 of 5 stamps · 2 more to your free wash!
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
