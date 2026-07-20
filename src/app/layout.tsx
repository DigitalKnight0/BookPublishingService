import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { BackToTopButton } from "@/components/back-to-top-button";
import { PageMotion } from "@/components/page-motion";
import { SmoothScroll } from "@/components/smooth-scroll";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Immaculate Publishing",
    template: "%s | Immaculate Publishing",
  },
  description:
    "Professional book writing, editing, design, publishing, and marketing services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <SmoothScroll />
        <PageMotion />
        {children}
        <BackToTopButton />
      </body>
    </html>
  );
}
