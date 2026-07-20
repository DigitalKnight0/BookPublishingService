import type { Metadata } from "next";

import { SingleServicePage } from "@/components/services/single-service-page";
import { servicePages } from "@/content/service-pages";

export const metadata: Metadata = {
  title: "Ghostwriting Services",
  description:
    "Professional ghostwriting services for memoirs, business books, self-help, fiction, and more, written in your voice with full ownership and confidentiality.",
};

export default function GhostwritingServicesPage() {
  return <SingleServicePage service={servicePages.ghostwriting} />;
}
