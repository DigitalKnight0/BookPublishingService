import type { Metadata } from "next";

import { LegalPage } from "@/components/legal/legal-page";
import { termsSections } from "@/content/legal-pages";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The terms and conditions that govern use of the Book Publication Solutions website and services.",
};

export default function TermsAndConditionsPage() {
  return <LegalPage title="Terms & Conditions" sections={termsSections} />;
}
