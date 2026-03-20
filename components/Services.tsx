import { Car, Bus, Briefcase, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Sedan / Small Vehicle",
    subtitle: "Standard cars & hatchbacks",
    items: ["Wash Only", "Wash & Polish", "Exterior Wash", "Interior Wash"],
    from: "R40",
    accent: "#E8192C",
    iconBg: "rgba(232,25,44,0.12)",
    featured: true,
  },
  {
    icon: Bus,
    title: "Bus & Taxi",
    subtitle: "Minibuses, taxis & large vehicles",
    items: ["Wash Only", "Wash & Polish"],
    from: "R100",
    accent: "#D4AF37",
    iconBg: "rgba(212,175,55,0.12)",
    featured: false,
  },
  {
    icon: Briefcase,
    title: "Bolt & Uber",
    subtitle: "E-hailing drivers welcome",
    items: ["Wash Only", "Wash & Polish", "Engine Wash"],
    from: "R50",
    accent: "#E8192C",
    iconBg: "rgba(232,25,44,0.12)",
    featured: false,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ background: "#0a0a0a" }}
    >
      {/* Red ambient top-left */}
      <div
        className="absolute top-0 left-0 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(232,25,44,0.09) 0%, transparent 70%)",
          filter: "blur(40px)",
          transform: "translate(-30%, -30%)",
        }}
      />
      {/* Dot grid */}
      <div className="absolute inset-0 bg-dots opacity-100 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#E8192C] mb-3">
            What We Offer
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Our Services
          </h2>
          <div className="section-divider" />
          <p className="text-gray-400 max-w-xl mx-auto">
            We handle all vehicle types — from your daily sedan to minibus taxis
            and Bolt/Uber fleets.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <div
                key={i}
                className="relative rounded-2xl p-8 border border-[#1c1c1c] bg-[#0f0f0f] transition-all duration-300 hover:-translate-y-2 group"
                style={{
                  ["--hover-border" as string]: svc.accent,
                }}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, ${svc.accent}, transparent)` }}
                />

                {svc.featured && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-white text-xs font-bold px-4 py-1 rounded-full tracking-widest uppercase"
                    style={{ background: "#E8192C", boxShadow: "0 0 14px rgba(232,25,44,0.5)" }}
                  >
                    Most Popular
                  </div>
                )}

                {/* Hover glow border */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ boxShadow: `inset 0 0 0 1px ${svc.accent}40, 0 0 20px ${svc.accent}15` }}
                />

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: svc.iconBg }}
                >
                  <Icon size={28} style={{ color: svc.accent }} />
                </div>

                <h3 className="text-xl font-bold text-white mb-1">{svc.title}</h3>
                <p className="text-sm text-gray-500 mb-6">{svc.subtitle}</p>

                <ul className="space-y-3 mb-8">
                  {svc.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle2 size={15} className="flex-shrink-0" style={{ color: svc.accent }} />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-[#1c1c1c] pt-5">
                  <span className="text-xs text-gray-600 uppercase tracking-wider">Starting from</span>
                  <div className="text-3xl font-black mt-1" style={{ color: svc.accent }}>
                    {svc.from}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
