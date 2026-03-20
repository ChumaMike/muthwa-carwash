import { MessageCircle, MapPin, Phone, Clock } from "lucide-react";

const paymentMethods = ["Cash", "SnapScan", "Yoco", "Zapper", "EFT"];

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-[#1a1a1a] pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <div
                className="text-2xl font-black tracking-widest gold-text-glow mb-1"
                style={{ color: "#D4AF37" }}
              >
                MUTHWA
              </div>
              <div className="text-xs font-semibold tracking-[0.25em] text-gray-400 uppercase">
                Premium Car Wash
              </div>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              Soweto&apos;s trusted, community-owned premium car wash. Affordable
              prices, professional service — every time.
            </p>
            {/* Proudly SA badge */}
            <div className="inline-flex items-center gap-2 border border-[#D4AF37]/20 rounded-full px-3 py-1.5 text-xs text-gray-400 mb-5">
              🇿🇦 Proudly Soweto · Est. 2021
            </div>
            <br />
            <a
              href="https://wa.me/27767838899"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-whatsapp px-5 py-2.5 rounded-full text-sm font-semibold"
            >
              <MessageCircle size={16} />
              Chat on WhatsApp
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
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
                  <a
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-[#D4AF37] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-500">
                  Muthwa Butcher U, 388/30 Moroka,
                  <br />
                  Nancefield Rd, Klipspruit,
                  <br />
                  Soweto, 1809
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#D4AF37] flex-shrink-0" />
                <a
                  href="tel:0767838899"
                  className="text-sm text-gray-500 hover:text-[#D4AF37] transition-colors"
                >
                  076 783 8899
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-sm text-gray-500">
                    Mon – Sat: 07:00 – 18:00
                  </span>
                  <br />
                  <span className="text-sm font-semibold" style={{ color: "#D4AF37" }}>
                    Sun: 07:00 – 16:00 ✓
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Payment Methods */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
              We Accept
            </h4>
            <div className="flex flex-wrap gap-2">
              {paymentMethods.map((method) => (
                <span
                  key={method}
                  className="text-xs font-semibold border border-[#2a2a2a] text-gray-400 px-3 py-1.5 rounded-lg bg-[#111]"
                >
                  {method}
                </span>
              ))}
            </div>
            <p className="text-xs text-gray-600 mt-4 leading-relaxed">
              Cash is always welcome. Card payments via Yoco available on site.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1a1a1a] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © 2026 Muthwa Premium Car Wash. All rights reserved.
          </p>
          <p className="text-xs text-gray-700">
            Klipspruit, Soweto 🇿🇦 · 💧 Water-Efficient Wash
          </p>
        </div>
      </div>
    </footer>
  );
}
