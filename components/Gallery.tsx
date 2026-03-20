"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const photos = [
  { src: "/gallery/wash1.jpg", label: "Exterior Shine", desc: "Spotless finish every time" },
  { src: "/gallery/wash2.jpg", label: "Full Foam Wash", desc: "Deep clean from top to bottom" },
  { src: "/gallery/wash3.jpg", label: "Interior Detail", desc: "Clean inside and out" },
  { src: "/gallery/wash4.jpg", label: "Premium Polish", desc: "Showroom-ready shine" },
  { src: "/gallery/wash5.jpg", label: "Engine Clean", desc: "Under-hood professional clean" },
  { src: "/gallery/wash6.jpg", label: "Bolt & Uber Wash", desc: "Fleet & e-hailing specialists" },
];

export default function Gallery() {
  const swiperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let swiperInstance: unknown = null;
    const initSwiper = async () => {
      const { Swiper } = await import("swiper");
      const { Autoplay, Navigation, Pagination } = await import("swiper/modules");
      if (!swiperRef.current) return;
      swiperInstance = new Swiper(swiperRef.current, {
        modules: [Autoplay, Navigation, Pagination],
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: { delay: 3000, disableOnInteraction: false },
        pagination: { el: ".gallery-pagination", clickable: true },
        navigation: { nextEl: ".gallery-next", prevEl: ".gallery-prev" },
        breakpoints: { 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } },
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
      id="gallery"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ background: "#080808" }}
    >
      {/* Ambient lights */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[40vw] max-w-[700px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(232,25,44,0.05) 0%, rgba(212,175,55,0.04) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#E8192C] mb-3">
            Our Work
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">Gallery</h2>
          <div className="section-divider" />
          <p className="text-gray-400">Real results from Muthwa Premium Car Wash — Soweto&apos;s finest.</p>
        </div>

        <div className="relative">
          <div ref={swiperRef} className="swiper w-full">
            <div className="swiper-wrapper">
              {photos.map((photo, i) => (
                <div key={i} className="swiper-slide">
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-[#1c1c1c] group">
                    <Image
                      src={photo.src}
                      alt={photo.label}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <p className="text-white font-bold text-base">{photo.label}</p>
                      <p className="text-gray-400 text-xs mt-0.5">{photo.desc}</p>
                    </div>
                    {/* Red-to-gold bottom line */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-[2px]"
                      style={{ background: "linear-gradient(90deg, #E8192C, #D4AF37, transparent)" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button className="gallery-prev w-10 h-10 rounded-full border border-[#E8192C]/30 flex items-center justify-center text-[#E8192C] hover:bg-[#E8192C]/10 transition-colors text-xl">‹</button>
            <div className="gallery-pagination flex gap-2" />
            <button className="gallery-next w-10 h-10 rounded-full border border-[#E8192C]/30 flex items-center justify-center text-[#E8192C] hover:bg-[#E8192C]/10 transition-colors text-xl">›</button>
          </div>
        </div>
      </div>
    </section>
  );
}
