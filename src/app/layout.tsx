import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { LiveChat } from "@/components/live-chat";
import { LiveChatLoader } from "@/components/live-chat-loader";
import { PageMotion } from "@/components/page-motion";
import { PublishingDiscountPopup } from "@/components/publishing-discount-popup";
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
    default: "Book Publication Solutions for Authors | Book Publication Solutions",
    template: "%s | Book Publication Solutions",
  },
  description:
    "Book publishing services that carry your manuscript from first edit to worldwide shelves. Self-publish a book with designing and distribution handled for you.",
  icons: {
    icon: [
      {
        url: "/assets/brand/favicon.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/assets/brand/favicon.svg",
  },
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
      <head>
        <link rel="preconnect" href="https://cdn.livechatinc.com" />
        <link rel="dns-prefetch" href="https://cdn.livechatinc.com" />
        <LiveChatLoader />
      </head>
      <body className="flex min-h-full flex-col">
        <SmoothScroll />
        <PageMotion />
        <LiveChat />
        <PublishingDiscountPopup />
        {children}
      </body>
    </html>
  );
}
