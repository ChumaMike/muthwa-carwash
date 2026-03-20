import { ShieldCheck, Clock, Star, MapPin, Leaf, Heart } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Quality You Can Trust",
    description:
      "We use premium cleaning products that protect your car's paint and leave a showroom finish every time.",
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    description:
      "No waiting forever. We work fast without cutting corners — your time is valuable too.",
  },
  {
    icon: Star,
    title: "Fairest Prices in Soweto",
    description:
      "Premium service doesn't mean premium prices. Transparent pricing, no hidden extras — ever.",
  },
  {
    icon: MapPin,
    title: "Conveniently Located",
    description:
      "Right on Nancefield Rd, Klipspruit, Soweto. Easy to find, open 7 days — including Sundays.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Methods",
    description:
      "We use water-efficient techniques that use up to 60% less water than a standard hosepipe wash.",
  },
  {
    icon: Heart,
    title: "Proudly Soweto",
    description:
      "100% local, community-owned business. Every wash supports jobs and families right here in Soweto.",
  },
];

export default function WhyUs() {
  return (
    <section
      className="py-24 px-4 sm:px-6 lg:px-8"
      style={{ background: "linear-gradient(180deg, #0d0d0d 0%, #0a0a0a 100%)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#D4AF37] mb-3">
            Our Promise
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Why Choose Muthwa?
          </h2>
          <div className="section-divider" />
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <div
                key={i}
                className="bg-[#111] border border-[#1e1e1e] rounded-2xl p-6 group hover:border-[#D4AF37]/40 hover:gold-glow-sm transition-all duration-300"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{ background: "rgba(212,175,55,0.1)" }}
                >
                  <Icon size={26} style={{ color: "#D4AF37" }} />
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {feat.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
