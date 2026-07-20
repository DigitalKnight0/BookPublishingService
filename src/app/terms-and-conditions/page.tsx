import type { Metadata } from "next";

import { LegalPage } from "@/components/legal/legal-page";
import { termsSections } from "@/content/legal-pages";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions for using Book Publication Solutions services and website.",
};

export default function TermsAndConditionsPage() {
  return <LegalPage title="Terms & Conditions" sections={termsSections} />;
}
