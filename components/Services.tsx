import { Car, Bus, Briefcase, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Sedan / Small Vehicle",
    subtitle: "Standard cars & hatchbacks",
    items: ["Wash Only", "Wash & Polish", "Exterior Wash", "Interior Wash"],
    from: "R40",
  },
  {
    icon: Bus,
    title: "Bus & Taxi",
    subtitle: "Minibuses, taxis & large vehicles",
    items: ["Wash Only", "Wash & Polish"],
    from: "R100",
    featured: true,
  },
  {
    icon: Briefcase,
    title: "Bolt & Uber",
    subtitle: "E-hailing drivers welcome",
    items: ["Wash Only", "Wash & Polish", "Engine Wash"],
    from: "R50",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#D4AF37] mb-3">
            What We Offer
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Our Services
          </h2>
          <div className="section-divider" />
          <p className="text-gray-400 max-w-xl mx-auto">
            We handle all vehicle types — from your daily sedan to minibus
            taxis and Bolt/Uber fleets.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <div
                key={i}
                className={`relative rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1 ${
                  svc.featured
                    ? "bg-[#111] border-[#D4AF37] gold-glow"
                    : "bg-[#111] border-[#222] hover:border-[#D4AF37]/40 hover:gold-glow-sm"
                }`}
              >
                {svc.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-[#0a0a0a] text-xs font-bold px-4 py-1 rounded-full tracking-widest uppercase">
                    Most Popular
                  </div>
                )}

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: "rgba(212,175,55,0.1)" }}
                >
                  <Icon size={28} style={{ color: "#D4AF37" }} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-1">
                  {svc.title}
                </h3>
                <p className="text-sm text-gray-500 mb-6">{svc.subtitle}</p>

                {/* Service list */}
                <ul className="space-y-3 mb-8">
                  {svc.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle2
                        size={16}
                        className="flex-shrink-0"
                        style={{ color: "#D4AF37" }}
                      />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* From price */}
                <div className="border-t border-[#222] pt-5">
                  <span className="text-xs text-gray-500 uppercase tracking-wider">
                    Starting from
                  </span>
                  <div
                    className="text-3xl font-black mt-1"
                    style={{ color: "#D4AF37" }}
                  >
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
