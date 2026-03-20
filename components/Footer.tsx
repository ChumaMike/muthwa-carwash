import { MessageCircle, MapPin, Phone, Clock } from "lucide-react";

const paymentMethods = ["Cash", "SnapScan", "Yoco", "Zapper", "EFT"];

export default function Footer() {
  return (
    <footer className="relative bg-[#060606] pt-1">
      {/* Red top bar */}
      <div
        className="w-full h-[3px]"
        style={{ background: "linear-gradient(90deg, #E8192C, #D4AF37, #E8192C)" }}
      />

      <div className="px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

            {/* Brand */}
            <div className="md:col-span-1">
              <div className="mb-1">
                <div className="text-2xl font-black tracking-widest gold-text-glow" style={{ color: "#D4AF37" }}>
                  MUTHWA
                </div>
                {/* Red underline */}
                <div className="w-12 h-[2px] mt-1 mb-2 rounded-full" style={{ background: "#E8192C" }} />
                <div className="text-xs font-semibold tracking-[0.25em] text-gray-400 uppercase">
                  Premium Car Wash
                </div>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed mb-4 mt-3">
                Soweto&apos;s trusted, community-owned premium car wash. Affordable
                prices, professional service — every time.
              </p>
              <div className="inline-flex items-center gap-2 border border-[#E8192C]/20 rounded-full px-3 py-1.5 text-xs text-gray-400 mb-5">
                🇿🇦 Proudly Soweto · Est. 2021
              </div>
              <br />
              <a
                href="https://wa.me/27767838899"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 btn-whatsapp px-5 py-2.5 rounded-full text-sm font-semibold"
              >
                <MessageCircle size={15} />
                Chat on WhatsApp
              </a>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-5 flex items-center gap-2">
                <span className="w-4 h-[2px] rounded bg-[#E8192C]" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {[
                  { label: "Services", href: "#services" },
                  { label: "Pricing", href: "#pricing" },
                  { label: "Gallery", href: "#gallery" },
                  { label: "Contact", href: "#contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-sm text-gray-500 hover:text-[#E8192C] transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-5 flex items-center gap-2">
                <span className="w-4 h-[2px] rounded bg-[#D4AF37]" />
                Contact Info
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin size={15} className="flex-shrink-0 mt-0.5" style={{ color: "#E8192C" }} />
                  <span className="text-sm text-gray-500">
                    Muthwa Butcher U, 388/30 Moroka,<br />
                    Nancefield Rd, Klipspruit,<br />
                    Soweto, 1809
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={15} style={{ color: "#E8192C" }} />
                  <a href="tel:0767838899" className="text-sm text-gray-500 hover:text-[#E8192C] transition-colors">076 783 8899</a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={15} className="mt-0.5 flex-shrink-0" style={{ color: "#D4AF37" }} />
                  <div>
                    <span className="text-sm text-gray-500">Mon – Sat: 07:00 – 18:00</span><br />
                    <span className="text-sm font-semibold" style={{ color: "#E8192C" }}>Sun: 07:00 – 16:00 ✓</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Payment */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-5 flex items-center gap-2">
                <span className="w-4 h-[2px] rounded bg-[#E8192C]" />
                We Accept
              </h4>
              <div className="flex flex-wrap gap-2">
                {paymentMethods.map((method) => (
                  <span
                    key={method}
                    className="text-xs font-semibold border border-[#1c1c1c] text-gray-400 px-3 py-1.5 rounded-lg bg-[#0f0f0f] hover:border-[#E8192C]/40 hover:text-[#E8192C] transition-colors cursor-default"
                  >
                    {method}
                  </span>
                ))}
              </div>
              <p className="text-xs text-gray-600 mt-4 leading-relaxed">
                Cash always welcome. Card via Yoco available on site.
              </p>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-[#111] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-gray-700">© 2026 Muthwa Premium Car Wash. All rights reserved.</p>
            <p className="text-xs text-gray-700">Klipspruit, Soweto 🇿🇦 · 💧 Water-Efficient Wash</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
