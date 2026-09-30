import type { Metadata } from "next";

import { LegalPage } from "@/components/legal/legal-page";
import { privacySections } from "@/content/legal-pages";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Book Publication Solutions collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return <LegalPage title="Privacy Policy" sections={privacySections} />;
}
