import { ShieldCheck, Clock, Star, MapPin, Leaf, Heart } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Quality You Can Trust",
    description: "Premium cleaning products that protect your paint and deliver a showroom finish every single time.",
    accent: "#E8192C",
    iconBg: "rgba(232,25,44,0.1)",
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    description: "No waiting forever. We work fast without cutting corners — in and out, looking great.",
    accent: "#D4AF37",
    iconBg: "rgba(212,175,55,0.1)",
  },
  {
    icon: Star,
    title: "Fairest Prices in Soweto",
    description: "Premium service, honest prices. What you see on our price list is what you pay — always.",
    accent: "#E8192C",
    iconBg: "rgba(232,25,44,0.1)",
  },
  {
    icon: MapPin,
    title: "Conveniently Located",
    description: "Right on Nancefield Rd, Klipspruit. Easy to find, open 7 days — including Sundays.",
    accent: "#D4AF37",
    iconBg: "rgba(212,175,55,0.1)",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Methods",
    description: "Water-efficient techniques that use up to 60% less water than a standard hosepipe wash.",
    accent: "#E8192C",
    iconBg: "rgba(232,25,44,0.1)",
  },
  {
    icon: Heart,
    title: "Proudly Soweto",
    description: "100% local, community-owned. Every wash supports jobs and families right here in Soweto.",
    accent: "#D4AF37",
    iconBg: "rgba(212,175,55,0.1)",
  },
];

export default function WhyUs() {
  return (
    <section
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ background: "#0a0a0a" }}
    >
      {/* Red glow bottom-right */}
      <div
        className="absolute bottom-0 right-0 w-[40vw] h-[40vw] max-w-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(232,25,44,0.07) 0%, transparent 70%)",
          filter: "blur(50px)",
          transform: "translate(20%, 20%)",
        }}
      />
      {/* Gold glow top-left */}
      <div
        className="absolute top-0 left-0 w-[30vw] h-[30vw] max-w-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
          transform: "translate(-20%, -20%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#E8192C] mb-3">
            Our Promise
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Why Choose Muthwa?
          </h2>
          <div className="section-divider" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <div
                key={i}
                className="relative bg-[#0f0f0f] border border-[#1c1c1c] rounded-2xl p-6 group transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Hover top accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, ${feat.accent}, transparent)` }}
                />
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{ background: feat.iconBg }}
                >
                  <Icon size={24} style={{ color: feat.accent }} />
                </div>
                <h3 className="text-sm font-bold text-white mb-2">{feat.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{feat.description}</p>

                {/* Bottom accent on hover */}
                <div
                  className="mt-5 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, ${feat.accent}60, transparent)` }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
