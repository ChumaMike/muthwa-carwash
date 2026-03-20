import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muthwa Premium Car Wash | Soweto",
  description:
    "Professional car wash services in Soweto. Affordable prices for sedans, buses, taxis and Bolt/Uber vehicles. Call or WhatsApp 076 783 8899.",
  keywords:
    "car wash Soweto, car wash Klipspruit, car wash Moroka, premium car wash, Muthwa car wash, Bolt Uber car wash Soweto",
  openGraph: {
    title: "Muthwa Premium Car Wash | Soweto",
    description:
      "Professional car wash in Soweto. Sedans from R50. Buses & taxis from R100. WhatsApp 076 783 8899.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-white">
        {children}
      </body>
    </html>
  );
}
