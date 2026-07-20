export type LegalSection = {
  title: string;
  paragraphs?: readonly string[];
  intro?: string;
  bullets?: readonly string[];
};

export const termsSections: readonly LegalSection[] = [
  {
    title: "1. Introduction",
    paragraphs: [
      'These Terms and Conditions ("Terms") govern your use of the Book Publication Solutions website and services. By engaging our services or using this website, you agree to be bound by these Terms.',
    ],
  },
  {
    title: "2. Services",
    paragraphs: [
      "Book Publication Solutions provides ghostwriting, editing, formatting, design, publishing, audiobook production, and marketing services as described on this website. The specific scope, timeline, and deliverables for each project will be confirmed in a separate service agreement or quote prior to commencement.",
    ],
  },
  {
    title: "3. Client Responsibilities",
    paragraphs: [
      "Clients are responsible for providing accurate information, timely feedback, and any source materials required to complete the project. Delays in providing necessary materials may affect project timelines.",
    ],
  },
  {
    title: "4. Intellectual Property & Ownership",
    paragraphs: [
      "Unless otherwise agreed in writing, clients retain full ownership and rights to their manuscript and final published work. Book Publication Solutions retains no claim to authorship or royalties.",
    ],
  },
  {
    title: "5. Payment Terms",
    paragraphs: [
      "Payment schedules will be outlined in your individual service agreement. Projects may require a deposit prior to commencement, with remaining balances due at agreed milestones.",
    ],
  },
  {
    title: "6. Revisions",
    paragraphs: [
      "The number of included revision rounds varies by package and service, as detailed in your agreement. Additional revisions beyond the included scope may incur extra charges.",
    ],
  },
  {
    title: "7. Cancellations & Refunds",
    paragraphs: [
      "Cancellation and refund terms will be specified in your individual service agreement, as they may vary based on project stage and work completed.",
    ],
  },
  {
    title: "8. Confidentiality",
    paragraphs: [
      "We treat all client materials, manuscripts, and personal information as confidential and will not share them with third parties without consent, except as required to deliver contracted services (e.g., printers, distribution platforms).",
    ],
  },
  {
    title: "9. Limitation of Liability",
    paragraphs: [
      "Book Publication Solutions is not liable for indirect, incidental, or consequential damages arising from the use of our services, including but not limited to lost sales, reviews, or publishing outcomes beyond our reasonable control.",
    ],
  },
  {
    title: "10. Changes to These Terms",
    paragraphs: [
      "We may update these Terms from time to time. Continued use of our services after changes are posted constitutes acceptance of the revised Terms.",
    ],
  },
  {
    title: "11. Contact",
    paragraphs: [
      "Questions about these Terms can be directed to hello@bookpublicationsolutions.com.",
    ],
  },
];

export const privacySections: readonly LegalSection[] = [
  {
    title: "1. Introduction",
    paragraphs: [
      'Book Publication Solutions ("we," "us," "our") respects your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or use our services.',
    ],
  },
  {
    title: "2. Information We Collect",
    bullets: [
      "Personal Information: Name, email address, phone number, and any details you submit through contact or quote forms.",
      "Project Information: Manuscripts, notes, or materials you share with us for service delivery.",
      "Usage Data: Information about how you interact with our website, such as pages visited and browser type, collected via cookies and analytics tools.",
    ],
  },
  {
    title: "3. How We Use Your Information",
    intro: "We use your information to:",
    bullets: [
      "Respond to inquiries and provide requested services",
      "Deliver, manage, and improve your project",
      "Send updates related to your project (with your consent, marketing communications)",
      "Improve our website and service offerings",
    ],
  },
  {
    title: "4. Sharing Your Information",
    paragraphs: [
      "We do not sell your personal information. We may share information with trusted third parties (such as printers, distribution platforms, or payment processors) only as necessary to deliver contracted services, and under confidentiality obligations.",
    ],
  },
  {
    title: "5. Data Security",
    paragraphs: [
      "We implement reasonable technical and organizational measures to protect your personal information and manuscripts from unauthorized access, loss, or misuse.",
    ],
  },
  {
    title: "6. Cookies",
    paragraphs: [
      "Our website may use cookies to improve user experience and analyze site traffic. You can adjust your browser settings to refuse cookies, though this may affect site functionality.",
    ],
  },
  {
    title: "7. Your Rights",
    paragraphs: [
      "Depending on your location, you may have rights to access, correct, or request deletion of your personal information. Contact us at hello@bookpublicationsolutions.com to make a request.",
    ],
  },
  {
    title: "8. Data Retention",
    paragraphs: [
      "We retain personal and project information only as long as necessary to fulfill the purposes outlined in this policy or as required by law.",
    ],
  },
  {
    title: "9. Changes to This Policy",
    paragraphs: [
      'We may update this Privacy Policy periodically. Updates will be posted on this page with a revised "Last Updated" date.',
    ],
  },
  {
    title: "10. Contact Us",
    paragraphs: [
      "For questions about this Privacy Policy, contact us at hello@bookpublicationsolutions.com or (207) 555-0198.",
    ],
  },
];
