"use client";

import { useEffect, useRef } from "react";
import { Quote } from "lucide-react";

const reviews = [
  {
    name: "Sipho M.",
    role: "Bolt Driver, Soweto",
    review: "Best car wash in the area! I come here every week before my Bolt shifts. My car always looks brand new and the price is unbeatable.",
    stars: 5,
  },
  {
    name: "Thandi K.",
    role: "Sedan Owner, Klipspruit",
    review: "The interior wash was amazing — they got every corner. Very professional service and friendly staff. Will definitely be back!",
    stars: 5,
  },
  {
    name: "Bongani N.",
    role: "Taxi Owner, Moroka",
    review: "I bring all 3 of my taxis here. The wash & polish makes them look fresh and my passengers always compliment how clean it is.",
    stars: 5,
  },
  {
    name: "Lerato D.",
    role: "Uber Driver, Soweto",
    review: "Quick, affordable, and quality work. I had an engine wash done too — runs so much better. Highly recommend Muthwa Premium!",
    stars: 5,
  },
];

export default function Testimonials() {
  const swiperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let swiperInstance: unknown = null;
    const initSwiper = async () => {
      const { Swiper } = await import("swiper");
      const { Autoplay, Pagination } = await import("swiper/modules");
      if (!swiperRef.current) return;
      swiperInstance = new Swiper(swiperRef.current, {
        modules: [Autoplay, Pagination],
        slidesPerView: 1,
        spaceBetween: 24,
        loop: true,
        autoplay: { delay: 4500, disableOnInteraction: false },
        pagination: { el: ".testimonial-pagination", clickable: true },
        breakpoints: { 768: { slidesPerView: 2 }, 1280: { slidesPerView: 3 } },
      });
    };
    initSwiper();
    return () => {
      if (swiperInstance && typeof swiperInstance === "object" && "destroy" in swiperInstance)
        (swiperInstance as { destroy: () => void }).destroy();
    };
  }, []);

  return (
    <section
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ background: "#0d0d0d" }}
    >
      {/* Gold center glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] max-w-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(212,175,55,0.05) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#E8192C] mb-3">
            Happy Clients
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            What Customers Say
          </h2>
          <div className="section-divider" />
        </div>

        <div ref={swiperRef} className="swiper w-full pb-12">
          <div className="swiper-wrapper">
            {reviews.map((review, i) => (
              <div key={i} className="swiper-slide h-auto">
                <div className="bg-[#0f0f0f] border border-[#1c1c1c] rounded-2xl p-8 h-full flex flex-col hover:border-[#E8192C]/30 transition-all duration-300 group">
                  <Quote size={26} className="mb-4" style={{ color: "#E8192C", opacity: 0.4 }} />

                  {/* Red stars */}
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: review.stars }).map((_, j) => (
                      <span key={j} className="text-lg" style={{ color: "#E8192C" }}>★</span>
                    ))}
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed flex-1 mb-6">
                    &ldquo;{review.review}&rdquo;
                  </p>

                  <div className="flex items-center gap-3 border-t border-[#1c1c1c] pt-5">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-sm flex-shrink-0"
                      style={{ background: "linear-gradient(135deg, #E8192C, #B5121F)" }}
                    >
                      {review.name[0]}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">{review.name}</div>
                      <div className="text-xs text-gray-500">{review.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="testimonial-pagination flex justify-center gap-2 mt-4" />
        </div>
      </div>
    </section>
  );
}
