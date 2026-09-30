export type LegalSection = {
  title: string;
  paragraphs?: readonly string[];
  intro?: string;
  bullets?: readonly string[];
};

export const termsSections: readonly LegalSection[] = [
  {
    title: "1. Acceptance Of Terms",
    paragraphs: [
      "Using this website or hiring us means you accept these terms. If any part does not sit right with you, please do not use our website or services.",
    ],
  },
  {
    title: "2. Services",
    paragraphs: [
      "We provide editing, ghostwriting, design and illustrations, formatting, ISBN registration, printing, distribution, and marketing for authors. The scope, timeline, and deliverables for your project appear in a separate agreement or proposal.",
    ],
  },
  {
    title: "3. Client Responsibilities",
    paragraphs: [
      "You agree to give us accurate information, timely feedback, and any materials the project needs. Late or missing materials can move your timeline.",
    ],
  },
  {
    title: "4. Intellectual Property And Rights",
    paragraphs: [
      "You keep full ownership of your manuscript, along with every right and royalty. We claim none of it. Original design or editorial work we produce is licensed to you once payment clears, unless we agree otherwise in writing.",
    ],
  },
  {
    title: "5. Payment Terms",
    paragraphs: [
      "Your service agreement lays out payment, including any deposit, milestones, and final balance. Work may pause if a payment misses the agreed schedule.",
    ],
  },
  {
    title: "6. Cancellations And Refunds",
    paragraphs: [
      "Cancellation and refund terms depend on how far the project has run and which package you chose. Check your service agreement, or ask us for the details on your project.",
    ],
  },
  {
    title: "7. Timelines",
    paragraphs: [
      "We estimate timelines in good faith from typical scope. Real timelines can shift with manuscript complexity, revision rounds, and how quickly you reply.",
    ],
  },
  {
    title: "8. Limitation Of Liability",
    paragraphs: [
      "As far as the law allows, we are not liable for indirect, incidental, or consequential losses from using our services. That includes lost sales, lost profits, and reputational harm.",
    ],
  },
  {
    title: "9. Third-Party Platforms",
    paragraphs: [
      "Distribution through retailers such as Amazon, Barnes & Noble, and Apple Books follows their own terms and policies, which sit outside our control.",
    ],
  },
  {
    title: "10. Website Use",
    paragraphs: [
      "You agree not to misuse this site, including any attempt to break into restricted areas, upload harmful code, or use it for unlawful ends.",
    ],
  },
  {
    title: "11. Changes To These Terms",
    paragraphs: [
      "We may update these terms from time to time. Continuing to use our website or services after a change is posted means you accept the update.",
    ],
  },
  {
    title: "12. Governing Law",
    paragraphs: [
      "These terms follow the laws of the jurisdiction where we operate, without regard to conflict of law rules.",
    ],
  },
  {
    title: "13. Contact Us",
    paragraphs: [
      "Questions about these terms? Email support@bookpublicationsolutions.com.",
    ],
  },
];

export const privacySections: readonly LegalSection[] = [
  {
    title: "1. Information We Collect",
    paragraphs: [
      "When you get in touch, ask for a consultation, or hire us, we may take your name, email, phone number, and details about your book. We also record standard technical data such as browser, device, and pages viewed to improve the site.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    paragraphs: [
      "We use what you share to reply, prepare quotes, deliver your project, and keep you posted. We may send the occasional service update, which you can opt out of whenever you like.",
    ],
  },
  {
    title: "3. How We Share Your Information",
    paragraphs: [
      "We never sell your personal information. We pass it only to trusted partners who help deliver your project, such as editors, designers, printers, and distributors. They see only what the work needs, and we may also share it where the law requires.",
    ],
  },
  {
    title: "4. Cookies And Tracking",
    paragraphs: [
      "Our site may use cookies and similar tools to see how visitors use it and to run more smoothly. You can turn cookies off in your browser, though some features may stop working properly.",
    ],
  },
  {
    title: "5. Data Retention",
    paragraphs: [
      "We keep personal information only as long as the purposes here require, including any publishing, distribution, or legal duties tied to your book.",
    ],
  },
  {
    title: "6. Your Rights",
    paragraphs: [
      "You can ask to see, correct, or delete your personal information at any time by contacting us. We respond to reasonable requests within a reasonable period.",
    ],
  },
  {
    title: "7. Data Security",
    paragraphs: [
      "We take sensible technical and organizational steps to protect your information from unauthorized access, loss, or misuse. No transfer over the internet is ever completely secure.",
    ],
  },
  {
    title: "8. Third-Party Links",
    paragraphs: [
      "Our site may link to other sites, such as retailers or distribution partners. We are not responsible for how those outside sites handle privacy.",
    ],
  },
  {
    title: "9. Children's Privacy",
    paragraphs: [
      "Our services are not aimed at children under 13, and we do not knowingly collect personal information from children.",
    ],
  },
  {
    title: "10. Changes To This Policy",
    paragraphs: [
      "We may revise this policy now and then. Any change appears on this page with a fresh effective date.",
    ],
  },
  {
    title: "11. Contact Us",
    paragraphs: [
      "Questions about this policy or how we handle your information? Email support@bookpublicationsolutions.com.",
    ],
  },
];
