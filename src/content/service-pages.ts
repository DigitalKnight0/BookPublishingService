import { figmaAssets } from "@/design-system";

export const servicePageSlugs = [
  "ghostwriting",
  "book-editing",
  "design-services",
  "publishing",
  "audiobook-production",
  "book-marketing",
] as const;

export type ServicePageSlug = (typeof servicePageSlugs)[number];

export type ServiceProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type ServicePageConfig = {
  slug: ServicePageSlug;
  metadataTitle: string;
  metadataDescription: string;
  heroTitle: string;
  heroParagraphs: readonly string[];
  heroImage: string;
  heroImageAlt: string;
  heroImagePosition?: string;
  benefitsLead: string;
  benefitsAccent: string;
  benefits: readonly string[];
  ctaTitle: string;
  ctaDescription: string;
  ctaButton: string;
  processAccent: string;
  processDescription: string;
  processSteps: readonly ServiceProcessStep[];
};

const ghostwritingSteps: readonly ServiceProcessStep[] = [
  {
    number: "01",
    title: "Share Your Vision",
    description:
      "Your journey begins with a simple sign-up and a conversation about your book before we carefully match your project with the team best suited to bring your story to life.",
  },
  {
    number: "02",
    title: "Meet Your Project Manager",
    description:
      "After onboarding, you’ll be assigned a dedicated project manager who will serve as your primary point of contact throughout the process, keeping everything on schedule.",
  },
  {
    number: "03",
    title: "Watch Your Story Come to Life",
    description:
      "Once the project plan is approved, your writer begins crafting your manuscript. Every chapter is developed with your feedback, ensuring the final work reflects your voice and vision.",
  },
  {
    number: "04",
    title: "Refine Every Chapter",
    description:
      "You review each milestone while your writer strengthens the structure, pacing, and language until the manuscript reads naturally in your voice.",
  },
  {
    number: "05",
    title: "Complete Your Manuscript",
    description:
      "After your revisions are incorporated, the full manuscript receives a final editorial review for consistency, clarity, and polish.",
  },
  {
    number: "06",
    title: "Prepare for Publishing",
    description:
      "You receive the finished manuscript with full ownership and a clear path into editing, design, publishing, and launch support.",
  },
];

export const servicePages: Record<ServicePageSlug, ServicePageConfig> = {
  ghostwriting: {
    slug: "ghostwriting",
    metadataTitle: "Ghostwriting Services",
    metadataDescription:
      "Professional ghostwriting for memoirs, business books, self-help, fiction, and more, written in your voice with full ownership and confidentiality.",
    heroTitle: "Ghostwriting Services",
    heroParagraphs: [
      "You have the story — we have the pen. Our ghostwriting service is built for authors who have a powerful idea, message, or life story but need an experienced writer to shape it into a manuscript. Whether you’re working from voice notes, rough drafts, interviews, or a clear vision in your head, our ghostwriters immerse themselves in your voice and perspective to write a book that sounds unmistakably like you — not like us.",
      "We work across memoirs, business and leadership books, self-help, fiction, and more, matching every project with a writer experienced in that genre.",
    ],
    heroImage: figmaAssets.ghostwritingPage.heroBackground,
    heroImageAlt: "Open books and writing materials",
    heroImagePosition: "center",
    benefitsLead: "We work across",
    benefitsAccent: "memoirs, business and leadership books",
    benefits: [
      "Dedicated ghostwriter matched to your genre and tone",
      "Structured interviews and check-ins so your voice stays central",
      "100% confidentiality with signed NDAs on every project",
      "Full manuscript ownership and authorship rights remain yours",
      "Unlimited revision rounds within your project scope",
    ],
    ctaTitle: "Your Story Deserves to Be Written Right",
    ctaDescription:
      "Let a professional ghostwriter turn your ideas into a manuscript you’re proud to put your name on.",
    ctaButton: "Start Your Ghostwriting Project",
    processAccent: "Ghostwriting project",
    processDescription:
      "From your first conversation to the finished manuscript, we keep your voice, ideas, and goals at the center of every chapter.",
    processSteps: ghostwritingSteps,
  },
  "book-editing": {
    slug: "book-editing",
    metadataTitle: "Book Editing Services",
    metadataDescription:
      "Developmental editing, line editing, copy editing, and proofreading that strengthen your manuscript without losing your voice.",
    heroTitle: "Book Editing Services",
    heroParagraphs: [
      "A strong manuscript deserves an editor who understands what you are trying to achieve. Our book editing services improve structure, pacing, clarity, consistency, and correctness while protecting the voice and personality that make your writing yours.",
      "From an early draft that needs developmental direction to a finished manuscript ready for proofreading, we match your book with an editor experienced in its genre and stage.",
    ],
    heroImage: figmaAssets.services.timelineMedia.editing,
    heroImageAlt: "Editor reviewing a manuscript",
    heroImagePosition: "center",
    benefitsLead: "We strengthen every manuscript with",
    benefitsAccent: "clarity, consistency, and care",
    benefits: [
      "Genre-experienced editor selected for your manuscript",
      "Developmental guidance for structure, pacing, and character",
      "Line and copy editing for clarity, tone, and consistency",
      "Professional proofreading before publication",
      "Collaborative revisions that preserve your author voice",
    ],
    ctaTitle: "Turn a Good Draft Into a Great Book",
    ctaDescription:
      "Give your manuscript the professional editorial attention it needs to engage readers from the first page to the last.",
    ctaButton: "Start Your Editing Project",
    processAccent: "Book Editing project",
    processDescription:
      "Our structured editorial process gives you clear feedback, careful revisions, and a publication-ready manuscript.",
    processSteps: [
      {
        number: "01",
        title: "Submit Your Manuscript",
        description:
          "Share your draft, genre, audience, and publishing goals so we can understand the level of editorial support you need.",
      },
      {
        number: "02",
        title: "Receive an Editorial Assessment",
        description:
          "We review your manuscript and recommend developmental, line, copy, or proofreading services with a clear scope and schedule.",
      },
      {
        number: "03",
        title: "Meet Your Editor",
        description:
          "Your project manager introduces an editor whose experience fits your genre, style, and objectives.",
      },
      {
        number: "04",
        title: "Review the Edited Draft",
        description:
          "You receive tracked changes and practical notes that explain each recommendation while keeping your voice intact.",
      },
      {
        number: "05",
        title: "Collaborate on Revisions",
        description:
          "Ask questions, review key decisions, and work with your editor to resolve every important issue in the manuscript.",
      },
      {
        number: "06",
        title: "Approve the Final Manuscript",
        description:
          "A final quality pass delivers a clean, consistent manuscript ready for design, formatting, and publication.",
      },
    ],
  },
  "design-services": {
    slug: "design-services",
    metadataTitle: "Book Design Services",
    metadataDescription:
      "Professional book cover design, interior formatting, typesetting, and illustration created for your genre and audience.",
    heroTitle: "Book Design Services",
    heroParagraphs: [
      "Readers begin judging a book before they open it. Our designers create distinctive covers and polished interiors that communicate your genre, support readability, and give your work a professional presence in print and digital formats.",
      "Whether you need a cover, custom illustrations, typesetting, or a complete visual system, every design decision is shaped around your story and target audience.",
    ],
    heroImage: figmaAssets.services.timelineMedia.design,
    heroImageAlt: "Professionally designed book covers",
    heroImagePosition: "center",
    benefitsLead: "We make every book",
    benefitsAccent: "beautiful, readable, and unmistakably yours",
    benefits: [
      "Custom cover concepts created for your genre and audience",
      "Print and eBook interiors designed for effortless reading",
      "Typography, color, and imagery developed as one visual system",
      "Original illustration options for children’s and specialty books",
      "Production-ready files for every required publishing platform",
    ],
    ctaTitle: "Give Your Story a Design Readers Remember",
    ctaDescription:
      "Pair your manuscript with a cover and interior that look professional in every format and stand out in every marketplace.",
    ctaButton: "Start Your Design Project",
    processAccent: "Book Design project",
    processDescription:
      "From visual direction to final production files, each stage is collaborative, purposeful, and built around your readers.",
    processSteps: [
      {
        number: "01",
        title: "Share Your Creative Direction",
        description:
          "Tell us about your book, audience, genre, visual references, and the impression you want the finished design to create.",
      },
      {
        number: "02",
        title: "Build the Visual Concept",
        description:
          "Your designer develops a focused direction for typography, color, imagery, and layout before production begins.",
      },
      {
        number: "03",
        title: "Review Cover Concepts",
        description:
          "Explore professionally developed concepts and choose the direction that represents your story most effectively.",
      },
      {
        number: "04",
        title: "Design the Interior",
        description:
          "We format and typeset the manuscript for clean hierarchy, comfortable reading, and consistency across every page.",
      },
      {
        number: "05",
        title: "Refine Every Detail",
        description:
          "Your feedback guides revisions to the cover and interior until the complete package feels cohesive and finished.",
      },
      {
        number: "06",
        title: "Receive Production Files",
        description:
          "We deliver print-ready and digital files prepared to the specifications of your selected publishing platforms.",
      },
    ],
  },
  publishing: {
    slug: "publishing",
    metadataTitle: "Book Publishing Services",
    metadataDescription:
      "End-to-end book publishing, formatting, ISBN support, platform setup, distribution, and launch guidance for independent authors.",
    heroTitle: "Book Publishing Services",
    heroParagraphs: [
      "Publishing involves far more than uploading a file. We coordinate formatting, metadata, ISBN support, platform setup, quality checks, and distribution so your book launches professionally and reaches readers in the formats they prefer.",
      "You keep control of your work and publishing accounts while our team manages the technical details and guides every decision from final manuscript to live title.",
    ],
    heroImage: figmaAssets.services.timelineMedia.publishing,
    heroImageAlt: "Published books prepared for distribution",
    heroImagePosition: "center",
    benefitsLead: "We take your manuscript from",
    benefitsAccent: "final draft to global distribution",
    benefits: [
      "Dedicated publishing manager coordinating every stage",
      "Professional print and eBook formatting for major platforms",
      "ISBN, metadata, category, and keyword guidance",
      "Account setup and upload support with ownership kept in your name",
      "Quality checks and distribution across leading book retailers",
    ],
    ctaTitle: "Your Manuscript Is Ready for the World",
    ctaDescription:
      "Publish with a team that handles every technical detail while you retain full control of your book and rights.",
    ctaButton: "Start Your Publishing Project",
    processAccent: "Publishing project",
    processDescription:
      "A dedicated team guides your book through preparation, platform setup, quality assurance, and worldwide release.",
    processSteps: [
      {
        number: "01",
        title: "Review Your Publishing Goals",
        description:
          "We discuss formats, platforms, audience, timing, and distribution goals before building your publishing plan.",
      },
      {
        number: "02",
        title: "Prepare the Final Files",
        description:
          "Your approved manuscript and cover are formatted and checked against print and eBook production requirements.",
      },
      {
        number: "03",
        title: "Set Up Book Metadata",
        description:
          "We help finalize your title details, description, categories, keywords, pricing, ISBN information, and author profile.",
      },
      {
        number: "04",
        title: "Configure Publishing Platforms",
        description:
          "Your book is uploaded and configured on the agreed platforms using accounts and rights that remain under your control.",
      },
      {
        number: "05",
        title: "Approve Digital Proofs",
        description:
          "Review the digital and print proofs while our team resolves formatting or production issues before release.",
      },
      {
        number: "06",
        title: "Publish for a Global Audience",
        description:
          "Once approved, your book goes live and becomes available through the selected international retail and distribution channels.",
      },
    ],
  },
  "audiobook-production": {
    slug: "audiobook-production",
    metadataTitle: "Audiobook Production Services",
    metadataDescription:
      "Professional audiobook narration, recording, editing, mastering, quality control, and distribution-ready audio production.",
    heroTitle: "Audiobook Production Services",
    heroParagraphs: [
      "A great audiobook does more than read the words aloud — it gives the story a voice listeners want to follow. We manage casting, narration, recording, editing, mastering, and quality control to create an immersive, platform-ready listening experience.",
      "From memoir and business to fiction and children’s books, we match each project with the right vocal style and production approach.",
    ],
    heroImage: figmaAssets.services.timelineMedia.audiobook,
    heroImageAlt: "Professional audiobook recording session",
    heroImagePosition: "center 40%",
    benefitsLead: "We transform your book into",
    benefitsAccent: "a polished listening experience",
    benefits: [
      "Narrator casting matched to your genre, tone, and characters",
      "Professional recording with consistent performance and pacing",
      "Detailed editing that removes errors, noise, and distractions",
      "Mastering to meet leading audiobook platform specifications",
      "Author review checkpoints before final delivery and distribution",
    ],
    ctaTitle: "Let Readers Experience Your Story Anywhere",
    ctaDescription:
      "Turn your manuscript into a professionally narrated audiobook ready for today’s leading listening platforms.",
    ctaButton: "Start Your Audiobook Project",
    processAccent: "Audiobook project",
    processDescription:
      "Our production workflow takes your book from narrator selection to mastered audio with your approval at every milestone.",
    processSteps: [
      {
        number: "01",
        title: "Share Your Manuscript",
        description:
          "We review the book, characters, pronunciation needs, tone, audience, and platform requirements for your production.",
      },
      {
        number: "02",
        title: "Choose the Right Narrator",
        description:
          "Listen to curated auditions and select the voice that best represents your story, genre, and intended listener.",
      },
      {
        number: "03",
        title: "Approve the Audio Sample",
        description:
          "A sample chapter establishes pacing, character voices, tone, and pronunciation before full recording begins.",
      },
      {
        number: "04",
        title: "Record the Full Book",
        description:
          "Your narrator records the manuscript under professional direction for a consistent and engaging performance.",
      },
      {
        number: "05",
        title: "Edit and Master the Audio",
        description:
          "Engineers remove errors and noise, balance the sound, and master every chapter to required technical standards.",
      },
      {
        number: "06",
        title: "Approve and Distribute",
        description:
          "After your final review, you receive distribution-ready files and support preparing the audiobook for release.",
      },
    ],
  },
  "book-marketing": {
    slug: "book-marketing",
    metadataTitle: "Book Marketing Services",
    metadataDescription:
      "Strategic book marketing, author branding, launch campaigns, retailer optimization, social media, email, and reader outreach.",
    heroTitle: "Book Marketing Services",
    heroParagraphs: [
      "Publishing makes your book available; marketing helps the right readers discover it. We build practical, audience-focused campaigns that strengthen your author brand, improve marketplace visibility, and create momentum before and after launch.",
      "Every strategy is tailored to your genre, goals, platform, and budget rather than copied from a one-size-fits-all campaign.",
    ],
    heroImage: figmaAssets.services.timelineMedia.marketing,
    heroImageAlt: "Book marketing and audience outreach",
    heroImagePosition: "center",
    benefitsLead: "We connect your book with",
    benefitsAccent: "the readers most likely to love it",
    benefits: [
      "Custom campaign strategy based on your audience and goals",
      "Author brand positioning and consistent promotional messaging",
      "Retailer page, metadata, category, and keyword optimization",
      "Social media, email, content, and launch campaign support",
      "Clear reporting with ongoing recommendations and adjustments",
    ],
    ctaTitle: "Your Book Deserves to Be Discovered",
    ctaDescription:
      "Build visibility, reach the right readers, and launch with a marketing plan designed around your book.",
    ctaButton: "Start Your Marketing Campaign",
    processAccent: "Book Marketing project",
    processDescription:
      "We turn your goals and reader profile into a focused campaign with measurable actions before, during, and after launch.",
    processSteps: [
      {
        number: "01",
        title: "Define Your Audience",
        description:
          "We identify your ideal readers, comparable titles, market position, author goals, timeline, and available channels.",
      },
      {
        number: "02",
        title: "Build the Campaign Strategy",
        description:
          "Your team creates a practical roadmap covering positioning, content, platforms, launch activity, and measurable priorities.",
      },
      {
        number: "03",
        title: "Prepare Your Author Brand",
        description:
          "We refine your messaging, biography, visual consistency, and online presence so every reader touchpoint feels connected.",
      },
      {
        number: "04",
        title: "Optimize Your Book Listings",
        description:
          "Descriptions, categories, keywords, and retailer content are strengthened to improve discovery and conversion.",
      },
      {
        number: "05",
        title: "Launch the Campaign",
        description:
          "Coordinated social, email, content, and promotional activity introduces the book and builds sustained attention.",
      },
      {
        number: "06",
        title: "Measure and Grow",
        description:
          "We review campaign performance, identify opportunities, and recommend the next actions to continue growing your readership.",
      },
    ],
  },
};

export function getServicePage(slug: string) {
  return servicePages[slug as ServicePageSlug];
}
