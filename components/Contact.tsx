"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MessageCircle, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .regex(/^(\+27|0)[6-8][0-9]{8}$/, "Enter a valid SA phone number (e.g. 076 783 8899)"),
  vehicleType: z
    .enum(["sedan", "bus_taxi", "bolt_uber", "other"] as const)
    .refine((v) => v !== undefined, { message: "Please select a vehicle type" }),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

const vehicleLabels: Record<string, string> = {
  sedan: "Sedan / Small Vehicle",
  bus_taxi: "Bus & Taxi",
  bolt_uber: "Bolt & Uber",
  other: "Other",
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    const msg = encodeURIComponent(
      `Hi Muthwa Premium Car Wash! 👋\n\nName: ${data.name}\nPhone: ${data.phone}\nVehicle: ${vehicleLabels[data.vehicleType]}\n\nMessage: ${data.message}`
    );
    window.open(`https://wa.me/27767838899?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#D4AF37] mb-3">
            Get In Touch
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Contact Us
          </h2>
          <div className="section-divider" />
          <p className="text-gray-400 max-w-xl mx-auto">
            Ready to book? Have questions? Fill in the form and we&apos;ll respond
            straight on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="bg-[#111] border border-[#1e1e1e] rounded-2xl p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{ background: "rgba(37,211,102,0.15)" }}
                >
                  <MessageCircle size={32} style={{ color: "#25D366" }} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  WhatsApp Opened!
                </h3>
                <p className="text-gray-400 text-sm max-w-xs">
                  Your message has been pre-filled in WhatsApp. Just hit send
                  and we&apos;ll get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm text-[#D4AF37] hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    {...register("name")}
                    placeholder="e.g. Sipho Nkosi"
                    className="w-full bg-[#0d0d0d] border border-[#2a2a2a] rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#D4AF37] transition-colors"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    {...register("phone")}
                    placeholder="e.g. 076 783 8899"
                    className="w-full bg-[#0d0d0d] border border-[#2a2a2a] rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#D4AF37] transition-colors"
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Vehicle Type */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Vehicle Type
                  </label>
                  <select
                    {...register("vehicleType")}
                    className="w-full bg-[#0d0d0d] border border-[#2a2a2a] rounded-xl px-4 py-3 text-sm text-gray-300 focus:outline-none focus:border-[#D4AF37] transition-colors appearance-none"
                  >
                    <option value="">Select vehicle type...</option>
                    <option value="sedan">Sedan / Small Vehicle</option>
                    <option value="bus_taxi">Bus & Taxi</option>
                    <option value="bolt_uber">Bolt & Uber</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.vehicleType && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.vehicleType.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    placeholder="Tell us what service you need or ask a question..."
                    className="w-full bg-[#0d0d0d] border border-[#2a2a2a] rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-whatsapp flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-sm disabled:opacity-60"
                >
                  <Send size={16} />
                  Send via WhatsApp
                </button>
              </form>
            )}
          </div>

          {/* Contact Info + Map */}
          <div className="flex flex-col gap-6">
            {/* Info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: Phone,
                  label: "Phone / WhatsApp",
                  value: "076 783 8899",
                  href: "tel:0767838899",
                },
                {
                  icon: Clock,
                  label: "Operating Hours",
                  value: "Mon – Sun: 07:00 – 18:00",
                  href: null,
                },
                {
                  icon: MapPin,
                  label: "Address",
                  value: "388/30 Moroka, Nancefield Rd, Klipspruit, Soweto, 1809",
                  href: "https://maps.google.com/?q=Klipspruit+Soweto",
                },
                {
                  icon: MessageCircle,
                  label: "WhatsApp",
                  value: "Chat with us now →",
                  href: "https://wa.me/27767838899",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                const content = (
                  <div
                    className={`bg-[#111] border border-[#1e1e1e] rounded-xl p-4 flex items-start gap-3 hover:border-[#D4AF37]/30 transition-all duration-200 ${item.href ? "cursor-pointer" : ""}`}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: "rgba(212,175,55,0.1)" }}
                    >
                      <Icon size={18} style={{ color: "#D4AF37" }} />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-0.5">{item.label}</div>
                      <div className="text-sm text-gray-200 font-medium">
                        {item.value}
                      </div>
                    </div>
                  </div>
                );
                return item.href ? (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={i}>{content}</div>
                );
              })}
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-[#1e1e1e] flex-1 min-h-[240px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.2!2d27.8903!3d-26.2886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c5f5e5e5e5f%3A0x1!2sNancefield+Rd%2C+Klipspruit%2C+Soweto!5e0!3m2!1sen!2sza!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "240px", filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Muthwa Premium Car Wash Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
