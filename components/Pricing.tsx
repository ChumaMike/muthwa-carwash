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
    waMsg:
      "Hi%20Muthwa%20Premium%20Car%20Wash%2C%20I%20want%20to%20book%20a%20sedan%20wash",
  },
  {
    title: "Bus & Taxi",
    emoji: "🚌",
    popular: false,
    items: [
      { name: "Wash Only", price: "R100" },
      { name: "Wash & Polish", price: "R120" },
    ],
    waMsg:
      "Hi%20Muthwa%20Premium%20Car%20Wash%2C%20I%20want%20to%20book%20a%20bus%2Ftaxi%20wash",
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
    waMsg:
      "Hi%20Muthwa%20Premium%20Car%20Wash%2C%20I%20want%20to%20book%20a%20Bolt%2FUber%20wash",
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-24 px-4 sm:px-6 lg:px-8"
      style={{ background: "linear-gradient(180deg, #0a0a0a 0%, #0d0d0d 100%)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#D4AF37] mb-3">
            No Hidden Costs
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Transparent Pricing
          </h2>
          <div className="section-divider" />
          <p className="text-gray-400 max-w-xl mx-auto">
            What you see is what you pay. Simple, honest pricing for every
            vehicle type.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pricingData.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 ${
                plan.popular
                  ? "border-[#D4AF37] gold-glow"
                  : "border-[#222] hover:border-[#D4AF37]/30"
              }`}
            >
              {plan.popular && (
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{
                    background: "linear-gradient(90deg, #D4AF37, #F0D060, #D4AF37)",
                  }}
                />
              )}
              <div className="bg-[#111] p-8 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{plan.emoji}</span>
                  <h3 className="text-lg font-bold text-white">{plan.title}</h3>
                </div>

                {/* Price rows */}
                <div className="flex-1 space-y-3 mb-8">
                  {plan.items.map((item, j) => (
                    <div
                      key={j}
                      className="flex items-center justify-between py-3 border-b border-[#1a1a1a] last:border-0"
                    >
                      <div className="flex items-center gap-2">
                        <Check size={14} style={{ color: "#D4AF37" }} />
                        <span className="text-sm text-gray-300">{item.name}</span>
                      </div>
                      <span
                        className="text-lg font-black"
                        style={{ color: "#D4AF37" }}
                      >
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Book CTA */}
                <a
                  href={`https://wa.me/27767838899?text=${plan.waMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-sm font-bold transition-all duration-200 ${
                    plan.popular
                      ? "btn-gold"
                      : "btn-outline-gold hover:bg-[#D4AF37]/10"
                  }`}
                >
                  <MessageCircle size={16} />
                  Book This Wash
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-xs text-gray-600 mt-8">
          Prices listed above. Contact us on WhatsApp for group or fleet
          bookings.
        </p>
      </div>
    </section>
  );
}
