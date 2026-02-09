import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Offlane Design | Simplicity & Reason",
  description: "We turn complex businesses into high-fidelity brands. No clutter, no jargon, just design that works.",
  keywords: ["design studio", "brand design", "product design", "web design", "luxury branding", "hospitality design"],
  authors: [{ name: "Offlane Design" }],
  openGraph: {
    title: "Offlane Design | Simplicity & Reason",
    description: "We turn complex businesses into high-fidelity brands. No clutter, no jargon, just design that works.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-cream text-stark`}
      >
        {children}
      </body>
    </html>
  );
}
