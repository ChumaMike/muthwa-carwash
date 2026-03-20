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

const contactInfo = [
  { icon: Phone, label: "Phone / WhatsApp", value: "076 783 8899", href: "tel:0767838899", color: "#E8192C" },
  { icon: Clock, label: "Operating Hours", value: "Mon–Sat 07:00–18:00 · Sun 07:00–16:00", href: null, color: "#D4AF37" },
  { icon: MapPin, label: "Address", value: "388/30 Moroka, Nancefield Rd, Klipspruit, Soweto, 1809", href: "https://maps.google.com/?q=Klipspruit+Soweto", color: "#E8192C" },
  { icon: MessageCircle, label: "WhatsApp", value: "Chat with us now →", href: "https://wa.me/27767838899", color: "#25D366" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    const msg = encodeURIComponent(
      `Hi Muthwa Premium Car Wash! 👋\n\nName: ${data.name}\nPhone: ${data.phone}\nVehicle: ${vehicleLabels[data.vehicleType]}\n\nMessage: ${data.message}`
    );
    window.open(`https://wa.me/27767838899?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ background: "#080808" }}
    >
      {/* Red radial top-left */}
      <div
        className="absolute top-0 left-0 w-[40vw] h-[40vw] max-w-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(232,25,44,0.08) 0%, transparent 70%)",
          filter: "blur(50px)",
          transform: "translate(-20%, -20%)",
        }}
      />
      {/* Dot grid */}
      <div className="absolute inset-0 bg-dots pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#E8192C] mb-3">
            Get In Touch
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">Contact Us</h2>
          <div className="section-divider" />
          <p className="text-gray-400 max-w-xl mx-auto">
            Ready to book? Fill in the form and we&apos;ll open WhatsApp with your message pre-filled.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Form */}
          <div
            className="rounded-2xl p-8 border border-[#1c1c1c]"
            style={{ background: "#0f0f0f" }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ background: "rgba(37,211,102,0.15)" }}>
                  <MessageCircle size={32} style={{ color: "#25D366" }} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">WhatsApp Opened!</h3>
                <p className="text-gray-400 text-sm max-w-xs">Your message is pre-filled in WhatsApp. Just hit send and we&apos;ll reply shortly.</p>
                <button onClick={() => setSubmitted(false)} className="mt-6 text-sm text-[#E8192C] hover:underline">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {[
                  { field: "name", label: "Full Name", placeholder: "e.g. Sipho Nkosi", type: "text" },
                  { field: "phone", label: "Phone Number", placeholder: "e.g. 076 783 8899", type: "tel" },
                ].map(({ field, label, placeholder, type }) => (
                  <div key={field}>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">{label}</label>
                    <input
                      {...register(field as "name" | "phone")}
                      type={type}
                      placeholder={placeholder}
                      className="w-full bg-[#0a0a0a] border border-[#1c1c1c] rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#E8192C] transition-colors"
                    />
                    {errors[field as keyof typeof errors] && (
                      <p className="text-red-400 text-xs mt-1">{errors[field as keyof typeof errors]?.message}</p>
                    )}
                  </div>
                ))}

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Vehicle Type</label>
                  <select
                    {...register("vehicleType")}
                    className="w-full bg-[#0a0a0a] border border-[#1c1c1c] rounded-xl px-4 py-3 text-sm text-gray-300 focus:outline-none focus:border-[#E8192C] transition-colors appearance-none"
                  >
                    <option value="">Select vehicle type...</option>
                    <option value="sedan">Sedan / Small Vehicle</option>
                    <option value="bus_taxi">Bus & Taxi</option>
                    <option value="bolt_uber">Bolt & Uber</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.vehicleType && <p className="text-red-400 text-xs mt-1">{errors.vehicleType.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Message</label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    placeholder="Tell us what service you need or ask a question..."
                    className="w-full bg-[#0a0a0a] border border-[#1c1c1c] rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#E8192C] transition-colors resize-none"
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
                </div>

                <button type="submit" disabled={isSubmitting} className="w-full btn-red flex items-center justify-center gap-2 py-4 rounded-xl text-sm disabled:opacity-60">
                  <Send size={16} />
                  Send via WhatsApp
                </button>
              </form>
            )}
          </div>

          {/* Info + Map */}
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {contactInfo.map((item, i) => {
                const Icon = item.icon;
                const content = (
                  <div className="bg-[#0f0f0f] border border-[#1c1c1c] rounded-xl p-4 flex items-start gap-3 hover:border-[#E8192C]/30 transition-all duration-200">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: `${item.color}18` }}>
                      <Icon size={17} style={{ color: item.color }} />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-0.5">{item.label}</div>
                      <div className="text-sm text-gray-200 font-medium">{item.value}</div>
                    </div>
                  </div>
                );
                return item.href ? (
                  <a key={i} href={item.href} target="_blank" rel="noopener noreferrer">{content}</a>
                ) : (
                  <div key={i}>{content}</div>
                );
              })}
            </div>

            <div className="rounded-2xl overflow-hidden border border-[#1c1c1c] flex-1 min-h-[240px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.2!2d27.8903!3d-26.2886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c5f5e5e5e5f%3A0x1!2sNancefield+Rd%2C+Klipspruit%2C+Soweto!5e0!3m2!1sen!2sza!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "240px", filter: "invert(90%) hue-rotate(180deg) saturate(0.8)" }}
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
