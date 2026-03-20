import { MessageCircle, Check } from "lucide-react";

const pricingData = [
  {
    title: "Sedan / Small Vehicle",
    emoji: "🚗",
    popular: true,
    items: [
      { name: "Wash Only", price: "R70" },
      { name: "Wash & Polish", price: "R80" },
      { name: "Exterior Wash", price: "R50" },
      { name: "Interior Wash", price: "R40" },
    ],
    waMsg: "Hi%20Muthwa%20Premium%20Car%20Wash%2C%20I%20want%20to%20book%20a%20sedan%20wash",
    priceColor: "#E8192C",
    accentBar: "linear-gradient(90deg, #E8192C, #D4AF37, #F0D060)",
  },
  {
    title: "Bus & Taxi",
    emoji: "🚌",
    popular: false,
    items: [
      { name: "Wash Only", price: "R100" },
      { name: "Wash & Polish", price: "R120" },
    ],
    waMsg: "Hi%20Muthwa%20Premium%20Car%20Wash%2C%20I%20want%20to%20book%20a%20bus%2Ftaxi%20wash",
    priceColor: "#D4AF37",
    accentBar: "linear-gradient(90deg, #D4AF37, #F0D060)",
  },
  {
    title: "Bolt & Uber",
    emoji: "🚖",
    popular: false,
    items: [
      { name: "Wash Only", price: "R50" },
      { name: "Wash & Polish", price: "R60" },
      { name: "Engine Wash", price: "R80" },
    ],
    waMsg: "Hi%20Muthwa%20Premium%20Car%20Wash%2C%20I%20want%20to%20book%20a%20Bolt%2FUber%20wash",
    priceColor: "#E8192C",
    accentBar: "linear-gradient(90deg, #E8192C, #D4AF37)",
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ background: "#0d0d0d" }}
    >
      {/* Diagonal stripes */}
      <div className="absolute inset-0 bg-diagonal pointer-events-none" />
      {/* Red radial top-right */}
      <div
        className="absolute top-0 right-0 w-[45vw] h-[45vw] max-w-[550px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(232,25,44,0.08) 0%, transparent 70%)",
          filter: "blur(50px)",
          transform: "translate(20%, -20%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#E8192C] mb-3">
            No Hidden Costs
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Transparent Pricing
          </h2>
          <div className="section-divider" />
          <p className="text-gray-400 max-w-xl mx-auto">
            What you see is what you pay. Simple, honest pricing for every vehicle type.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pricingData.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? "border-[#E8192C]/60 red-glow"
                  : "border-[#1c1c1c] hover:border-[#E8192C]/30"
              }`}
            >
              {/* Top accent bar */}
              <div className="h-[3px] w-full" style={{ background: plan.accentBar }} />

              <div className="bg-[#0f0f0f] p-8 h-full flex flex-col">
                {plan.popular && (
                  <div
                    className="inline-flex items-center gap-1.5 self-start mb-4 text-white text-[10px] font-black px-3 py-1 rounded-full tracking-widest uppercase"
                    style={{ background: "#E8192C", boxShadow: "0 0 12px rgba(232,25,44,0.4)" }}
                  >
                    ★ Most Popular
                  </div>
                )}

                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{plan.emoji}</span>
                  <h3 className="text-lg font-bold text-white">{plan.title}</h3>
                </div>

                <div className="flex-1 space-y-0 mb-8">
                  {plan.items.map((item, j) => (
                    <div
                      key={j}
                      className="flex items-center justify-between py-3.5 border-b border-[#171717] last:border-0"
                    >
                      <div className="flex items-center gap-2.5">
                        <Check size={14} style={{ color: plan.priceColor }} />
                        <span className="text-sm text-gray-300">{item.name}</span>
                      </div>
                      <span className="text-lg font-black" style={{ color: plan.priceColor }}>
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href={`https://wa.me/27767838899?text=${plan.waMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-sm font-bold transition-all duration-200 ${
                    plan.popular ? "btn-red" : "btn-outline-red"
                  }`}
                >
                  <MessageCircle size={15} />
                  Book This Wash
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-600 mt-8">
          Contact us on WhatsApp for group or fleet bookings.
        </p>
      </div>
    </section>
  );
}
