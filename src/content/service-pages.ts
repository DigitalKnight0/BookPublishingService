import { figmaAssets } from "@/design-system";

export const servicePageSlugs = [
  "ghostwriting",
  "book-editing",
  "design-services",
  "publishing",
  "audiobook-production",
  "proofreading",
  "cover-design",
  "interior-formatting",
  "book-illustration",
  "ebook-kindle",
  "author-branding",
  "isbn-registration",
  "printing-services",
  "global-distribution",
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
      "Got the idea but not the hours? A writer suited to your subject learns your voice, then quietly does the writing. The credit stays yours.",
      "We work across memoirs, business and leadership books, self-help, fiction, and more, matching every project with a writer experienced in that genre.",
    ],
    heroImage: figmaAssets.ghostwritingPage.heroBackground,
    heroImageAlt: "Open books and writing materials",
    heroImagePosition: "center",
    benefitsLead: "We Work Across",
    benefitsAccent: "Memoirs, Business, And Leadership Books",
    benefits: [
      "Dedicated ghostwriter matched to your genre and tone",
      "Structured interviews and check-ins so your voice stays central",
      "100% confidentiality with signed NDAs on every project",
      "Full manuscript ownership and authorship rights remain yours",
      "Unlimited revision rounds within your project scope",
    ],
    ctaTitle: "Your Story Deserves To Be Written Right",
    ctaDescription:
      "Let a professional ghostwriter turn your ideas into a manuscript you’re proud to put your name on.",
    ctaButton: "Start Your Ghostwriting Project",
    processAccent: "Ghostwriting Project",
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
      "We start with the shape of the whole story, then tighten paragraph by paragraph, right down to the misplaced comma nobody else caught.",
      "From developmental editing through the final proofread, we match your book with an editor experienced in its genre and stage.",
    ],
    heroImage: figmaAssets.services.timelineMedia.editing,
    heroImageAlt: "Editor reviewing a manuscript",
    heroImagePosition: "center",
    benefitsLead: "We Strengthen Every Manuscript With",
    benefitsAccent: "Clarity, Consistency, And Care",
    benefits: [
      "Genre-experienced editor selected for your manuscript",
      "Developmental guidance for structure, pacing, and character",
      "Line and copy editing for clarity, tone, and consistency",
      "Professional proofreading before publication",
      "Collaborative revisions that preserve your author voice",
    ],
    ctaTitle: "Turn A Good Draft Into A Great Book",
    ctaDescription:
      "Give your manuscript the professional editorial attention it needs to engage readers from the first page to the last.",
    ctaButton: "Start Your Editing Project",
    processAccent: "Book Editing Project",
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
      "Your cover has one job: earn a second look. We design to make sure it does exactly that.",
      "We lay out the inside so it reads as easily as it looks, and develop original illustrations from loose sketch to finished page.",
    ],
    heroImage: figmaAssets.services.timelineMedia.design,
    heroImageAlt: "Professionally designed book covers",
    heroImagePosition: "center",
    benefitsLead: "We Make Every Book",
    benefitsAccent: "Beautiful, Readable, And Unmistakably Yours",
    benefits: [
      "Custom cover concepts created for your genre and audience",
      "Print and eBook interiors designed for effortless reading",
      "Typography, color, and imagery developed as one visual system",
      "Original illustration options for children’s and specialty books",
      "Production-ready files for every required publishing platform",
    ],
    ctaTitle: "Give Your Story A Design Readers Remember",
    ctaDescription:
      "Pair your manuscript with a cover and interior that look professional in every format and stand out in every marketplace.",
    ctaButton: "Start Your Design Project",
    processAccent: "Book Design Project",
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
    metadataTitle: "Book Publication Solutions",
    metadataDescription:
      "End-to-end book publishing, formatting, ISBN support, platform setup, distribution, and launch guidance for independent authors.",
    heroTitle: "Book Publication Solutions",
    heroParagraphs: [
      "We run the full journey with you, from a raw manuscript to a book on sale, shaping each choice around your genre and your goals.",
      "You keep control of your work and publishing accounts while our team manages formatting, metadata, ISBN support, platform setup, quality checks, and distribution.",
    ],
    heroImage: figmaAssets.services.timelineMedia.publishing,
    heroImageAlt: "Published books prepared for distribution",
    heroImagePosition: "center",
    benefitsLead: "We Take Your Manuscript From",
    benefitsAccent: "Final Draft To Global Distribution",
    benefits: [
      "Dedicated publishing manager coordinating every stage",
      "Professional print and eBook formatting for major platforms",
      "ISBN, metadata, category, and keyword guidance",
      "Account setup and upload support with ownership kept in your name",
      "Quality checks and distribution across leading book retailers",
    ],
    ctaTitle: "Your Manuscript Is Ready For The World",
    ctaDescription:
      "Publish with a team that handles every technical detail while you retain full control of your book and rights.",
    ctaButton: "Start Your Publishing Project",
    processAccent: "Publishing Project",
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
      "We record your book with professional narration in a proper studio, then get it onto ACX and the platforms listeners already use.",
      "From memoir and business to fiction and children’s books, we match each project with the right vocal style and production approach.",
    ],
    heroImage: figmaAssets.services.timelineMedia.audiobook,
    heroImageAlt: "Professional audiobook recording session",
    heroImagePosition: "center 40%",
    benefitsLead: "We Transform Your Book Into",
    benefitsAccent: "A Polished Listening Experience",
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
    processAccent: "Audiobook Project",
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
  proofreading: {
    slug: "proofreading",
    metadataTitle: "Professional Book Proofreading Services",
    metadataDescription:
      "Final-stage book proofreading for spelling, punctuation, consistency, spacing, and layout errors before print or digital publication.",
    heroTitle: "Book Proofreading Services",
    heroParagraphs: [
      "One last, unhurried read before print can make the difference between a finished draft and a professional book.",
      "We clear out typos, punctuation slips, inconsistent styling, odd spacing, and the small errors that interrupt a reader’s trust.",
    ],
    heroImage: "/assets/generated/services/proofreading.png",
    heroImageAlt: "A proofread manuscript on a professional editor's desk",
    heroImagePosition: "center",
    benefitsLead: "We Give Every Page",
    benefitsAccent: "A Precise Final Quality Check",
    benefits: [
      "Spelling, grammar, punctuation, and capitalization review",
      "Consistency checks for names, terms, dates, and formatting",
      "Page-by-page review of headings, spacing, and layout details",
      "Clear corrections that preserve your voice and meaning",
      "A clean final file ready for print or digital release",
    ],
    ctaTitle: "Make The Last Read Count",
    ctaDescription:
      "Send your publication-ready manuscript through a careful final pass before it reaches readers.",
    ctaButton: "Start Your Proofreading Project",
    processAccent: "Proofreading Project",
    processDescription:
      "Our final-stage review catches the details that are easiest to miss after months of writing and editing.",
    processSteps: [
      {
        number: "01",
        title: "Share the Final Manuscript",
        description:
          "Send the edited and formatted manuscript along with your style preferences and intended publishing format.",
      },
      {
        number: "02",
        title: "Confirm the Proofing Scope",
        description:
          "We review the file, confirm what will be checked, and provide a clear schedule before work begins.",
      },
      {
        number: "03",
        title: "Proof Every Page",
        description:
          "A professional proofreader checks language, punctuation, consistency, and visible page-level issues line by line.",
      },
      {
        number: "04",
        title: "Review Layout Details",
        description:
          "We inspect headings, page numbers, spacing, line breaks, and other production details that affect the reading experience.",
      },
      {
        number: "05",
        title: "Return Clear Corrections",
        description:
          "You receive a marked file with focused corrections and notes for any item that needs an author decision.",
      },
      {
        number: "06",
        title: "Approve the Clean Proof",
        description:
          "After corrections are applied, the final manuscript is ready to move confidently into publication.",
      },
    ],
  },
  "cover-design": {
    slug: "cover-design",
    metadataTitle: "Custom Book Cover Design Services",
    metadataDescription:
      "Custom book cover design for print and eBooks, developed around your genre, audience, positioning, and publishing specifications.",
    heroTitle: "Custom Book Cover Design",
    heroParagraphs: [
      "Your cover has one job: earn a second look. We design it to speak clearly to the readers your book was written for.",
      "Every concept is built around your genre, tone, audience, and marketplace, then prepared for both print and digital release.",
    ],
    heroImage: "/assets/generated/services/cover-design.png",
    heroImageAlt: "A designer developing original book cover concepts",
    heroImagePosition: "center",
    benefitsLead: "We Design Covers That Are",
    benefitsAccent: "Distinctive, Relevant, And Ready To Sell",
    benefits: [
      "Original concepts tailored to your genre and audience",
      "Professional typography, imagery, and visual hierarchy",
      "Front, spine, and back-cover design for print editions",
      "Digital cover files optimized for retailer thumbnails",
      "Production-ready files sized for your chosen platforms",
    ],
    ctaTitle: "Give Your Book A Cover Worth Opening",
    ctaDescription:
      "Turn your manuscript into a visual promise that catches attention and sets the right expectation.",
    ctaButton: "Start Your Cover Design",
    processAccent: "Cover Design Project",
    processDescription:
      "From creative direction to final production files, every decision is grounded in your book and its readers.",
    processSteps: [
      {
        number: "01",
        title: "Define the Creative Brief",
        description:
          "We discuss your story, genre, audience, comparable titles, visual references, and publishing formats.",
      },
      {
        number: "02",
        title: "Research the Marketplace",
        description:
          "Your designer studies the category so the cover feels familiar enough to belong and original enough to stand out.",
      },
      {
        number: "03",
        title: "Develop Cover Concepts",
        description:
          "We explore focused visual directions through typography, imagery, color, and composition.",
      },
      {
        number: "04",
        title: "Choose a Direction",
        description:
          "You review the concepts, select the strongest route, and share feedback with your designer.",
      },
      {
        number: "05",
        title: "Refine the Full Cover",
        description:
          "The chosen concept is polished and expanded across the front, spine, and back for your exact trim size.",
      },
      {
        number: "06",
        title: "Receive Final Files",
        description:
          "We deliver print-ready and digital cover files prepared to each selected platform’s specifications.",
      },
    ],
  },
  "interior-formatting": {
    slug: "interior-formatting",
    metadataTitle: "Book Interior Formatting Services",
    metadataDescription:
      "Professional print and eBook interior formatting, typography, page layout, chapter styling, and platform-ready production files.",
    heroTitle: "Book Interior Formatting",
    heroParagraphs: [
      "The inside earns as much thought as the cover. We set every page so the type breathes and the book feels natural to read.",
      "From chapter openings and running heads to image placement and page flow, we build interiors that work in print and on screen.",
    ],
    heroImage: "/assets/generated/services/interior-formatting.png",
    heroImageAlt: "Professionally formatted book interiors and page layouts",
    heroImagePosition: "center",
    benefitsLead: "We Turn Your Manuscript Into",
    benefitsAccent: "A Clear And Comfortable Reading Experience",
    benefits: [
      "Typography selected for your genre, audience, and format",
      "Consistent chapter openings, headings, margins, and spacing",
      "Careful handling of images, tables, footnotes, and special elements",
      "Separate print and digital layouts for reliable performance",
      "Platform-ready PDF and eBook files with quality checks",
    ],
    ctaTitle: "Make Every Page Feel Finished",
    ctaDescription:
      "Give readers an interior that looks intentional, reads comfortably, and holds together in every format.",
    ctaButton: "Start Your Formatting Project",
    processAccent: "Interior Formatting Project",
    processDescription:
      "We develop a page system, apply it consistently, and test the finished files before publication.",
    processSteps: [
      {
        number: "01",
        title: "Review the Manuscript",
        description:
          "We assess the book’s structure, images, special elements, target formats, trim size, and platform requirements.",
      },
      {
        number: "02",
        title: "Create the Page Style",
        description:
          "Your formatter establishes typography, margins, chapter treatments, headings, and recurring page elements.",
      },
      {
        number: "03",
        title: "Format the Full Interior",
        description:
          "The approved system is applied throughout the manuscript with careful attention to hierarchy and rhythm.",
      },
      {
        number: "04",
        title: "Place Special Content",
        description:
          "Images, tables, callouts, footnotes, and other elements are positioned for clarity and consistency.",
      },
      {
        number: "05",
        title: "Review the Proof",
        description:
          "You inspect the complete formatted proof while we resolve layout issues and incorporate your feedback.",
      },
      {
        number: "06",
        title: "Export Final Editions",
        description:
          "We deliver checked print and digital files prepared for your selected publishing platforms.",
      },
    ],
  },
  "book-illustration": {
    slug: "book-illustration",
    metadataTitle: "Custom Book Illustration Services",
    metadataDescription:
      "Original book illustration for children’s books, fiction, educational titles, and specialty publishing projects.",
    heroTitle: "Custom Book Illustration",
    heroParagraphs: [
      "Some stories only sing with pictures. Our illustrators develop original artwork alongside you, from a loose first sketch to the finished page.",
      "Whether you need a handful of spot illustrations or a complete children’s book, every image is built around your story, audience, and visual world.",
    ],
    heroImage: "/assets/generated/services/book-illustration.png",
    heroImageAlt: "Original book illustrations in a professional artist's studio",
    heroImagePosition: "center",
    benefitsLead: "We Bring Your Visual World To Life With",
    benefitsAccent: "Original Art Made For Your Story",
    benefits: [
      "Illustrator matching based on audience, tone, and art style",
      "Character, setting, and visual-world development",
      "Sketch approval before detailed artwork begins",
      "Collaborative color and composition revisions",
      "Print-ready artwork prepared for your final page layout",
    ],
    ctaTitle: "Give Your Story A World Readers Can See",
    ctaDescription:
      "Work with an illustrator to create original characters, settings, and moments that belong to your book alone.",
    ctaButton: "Start Your Illustration Project",
    processAccent: "Book Illustration Project",
    processDescription:
      "A staged creative process lets you shape every image before it reaches final color and production.",
    processSteps: [
      {
        number: "01",
        title: "Share the Story",
        description:
          "We review the manuscript, audience, art references, number of illustrations, page plan, and production needs.",
      },
      {
        number: "02",
        title: "Choose the Art Direction",
        description:
          "Your illustrator proposes a visual style, palette, and overall approach suited to the story and intended reader.",
      },
      {
        number: "03",
        title: "Develop Characters and Settings",
        description:
          "Early studies establish the appearance, personality, scale, and visual continuity of the book’s world.",
      },
      {
        number: "04",
        title: "Review Page Sketches",
        description:
          "You approve composition and storytelling through sketches before detailed rendering begins.",
      },
      {
        number: "05",
        title: "Create the Final Artwork",
        description:
          "Approved sketches are developed into polished illustrations with color, texture, lighting, and final detail.",
      },
      {
        number: "06",
        title: "Prepare Art for Production",
        description:
          "We size, check, and deliver the illustrations for seamless placement in the final print and digital layouts.",
      },
    ],
  },
  "ebook-kindle": {
    slug: "ebook-kindle",
    metadataTitle: "eBook and Kindle Formatting Services",
    metadataDescription:
      "Responsive eBook and Kindle formatting, device testing, navigation, metadata preparation, and retailer-ready digital files.",
    heroTitle: "eBook And Kindle Services",
    heroParagraphs: [
      "Digital readers come in dozens of shapes and sizes. We build your eBook so it stays clear, responsive, and easy to navigate on all of them.",
      "Every edition is tested across Kindle, phones, tablets, and common reading apps before it reaches the marketplace.",
    ],
    heroImage: "/assets/generated/services/ebook-kindle.png",
    heroImageAlt: "A responsive eBook displayed across reading devices",
    heroImagePosition: "center",
    benefitsLead: "We Create Digital Editions That",
    benefitsAccent: "Work Beautifully On Every Screen",
    benefits: [
      "Responsive formatting for Kindle, tablets, phones, and e-readers",
      "Clean chapter navigation and a linked table of contents",
      "Careful image, footnote, and special-element handling",
      "Device and reading-app quality testing",
      "Retailer-ready EPUB files with upload support",
    ],
    ctaTitle: "Put Your Book In Every Reader’s Pocket",
    ctaDescription:
      "Turn your manuscript into a reliable digital edition that feels at home on any reading device.",
    ctaButton: "Start Your eBook Project",
    processAccent: "eBook And Kindle Project",
    processDescription:
      "We format, validate, and test your eBook before preparing it for the stores your readers already use.",
    processSteps: [
      {
        number: "01",
        title: "Review the Source Files",
        description:
          "We inspect the manuscript, images, links, footnotes, and structural elements that need to work digitally.",
      },
      {
        number: "02",
        title: "Build the Digital Structure",
        description:
          "Chapters, headings, navigation, metadata, and reading order are organized for a reliable eBook foundation.",
      },
      {
        number: "03",
        title: "Format the eBook",
        description:
          "We create a responsive layout that adapts to user font choices and different screen sizes without breaking.",
      },
      {
        number: "04",
        title: "Test Across Devices",
        description:
          "The eBook is checked on representative Kindle, tablet, phone, and reading-app environments.",
      },
      {
        number: "05",
        title: "Resolve Validation Issues",
        description:
          "We correct navigation, image, metadata, and code issues until the file passes retailer validation.",
      },
      {
        number: "06",
        title: "Deliver and Upload",
        description:
          "You receive the final EPUB and support preparing the digital listing on your chosen platforms.",
      },
    ],
  },
  "author-branding": {
    slug: "author-branding",
    metadataTitle: "Author Branding Services",
    metadataDescription:
      "Author branding, visual identity, positioning, messaging, and platform design that build recognition across books and marketing channels.",
    heroTitle: "Author Branding Services",
    heroParagraphs: [
      "Readers follow authors, not one-off books. We shape a look, voice, and presence that feel like you and can grow with every title you publish.",
      "Your books, website, social presence, and launch materials become one recognizable system rather than a collection of disconnected pieces.",
    ],
    heroImage: "/assets/generated/services/author-branding.png",
    heroImageAlt: "A cohesive author brand system in a creative studio",
    heroImagePosition: "center",
    benefitsLead: "We Build An Author Presence That Is",
    benefitsAccent: "Recognizable, Credible, And Made To Grow",
    benefits: [
      "Clear positioning based on your genre, audience, and goals",
      "Author messaging, biography, and brand voice development",
      "Consistent visual identity across books and marketing",
      "Practical social and website brand guidance",
      "Reusable assets that support future titles and campaigns",
    ],
    ctaTitle: "Build A Name Readers Remember",
    ctaDescription:
      "Create an author identity that connects your current book to the audience you want for the next one.",
    ctaButton: "Start Your Author Brand",
    processAccent: "Author Branding Project",
    processDescription:
      "We turn your genre, values, voice, and reader promise into a cohesive identity you can use everywhere.",
    processSteps: [
      {
        number: "01",
        title: "Define Your Position",
        description:
          "We clarify your genre, audience, point of view, publishing goals, and the qualities readers should associate with your name.",
      },
      {
        number: "02",
        title: "Shape the Brand Voice",
        description:
          "Your messaging, author biography, tone, and core story are developed into a clear verbal identity.",
      },
      {
        number: "03",
        title: "Create the Visual Direction",
        description:
          "We establish typography, color, imagery, and design principles that reflect your work and audience.",
      },
      {
        number: "04",
        title: "Build Core Assets",
        description:
          "The approved system is applied to practical assets for your website, social presence, media kit, and promotions.",
      },
      {
        number: "05",
        title: "Review Brand Consistency",
        description:
          "We check how your identity works across different channels and refine any weak or disconnected touchpoints.",
      },
      {
        number: "06",
        title: "Launch Your Author Brand",
        description:
          "You receive organized assets and guidance for using the brand consistently as your readership and catalog grow.",
      },
    ],
  },
  "isbn-registration": {
    slug: "isbn-registration",
    metadataTitle: "ISBN Registration Services for Authors",
    metadataDescription:
      "ISBN registration, barcode preparation, copyright guidance, metadata setup, and publishing administration for independent authors.",
    heroTitle: "ISBN Registration Services",
    heroParagraphs: [
      "The paperwork is dull but vital. We take it off your plate so an ISBN, barcode, or metadata form never becomes the reason your book stalls.",
      "Your publishing identifiers and account details stay organized around your ownership while our team handles the administrative steps.",
    ],
    heroImage: "/assets/generated/services/isbn-registration.png",
    heroImageAlt: "A finished book with ISBN and publishing registration materials",
    heroImagePosition: "center",
    benefitsLead: "We Handle The Administration Behind",
    benefitsAccent: "A Properly Registered And Discoverable Book",
    benefits: [
      "ISBN guidance for each required edition and format",
      "Barcode preparation for print production",
      "Metadata, category, contributor, and imprint setup",
      "Copyright-registration guidance and document organization",
      "Clear ownership records and platform-ready information",
    ],
    ctaTitle: "Get The Details Right Before Release",
    ctaDescription:
      "Let our publishing team organize the identifiers and metadata your book needs to enter the marketplace correctly.",
    ctaButton: "Start ISBN Registration",
    processAccent: "ISBN Registration Project",
    processDescription:
      "We identify what your editions need, collect the right information, and prepare accurate records for publication.",
    processSteps: [
      {
        number: "01",
        title: "Confirm Your Editions",
        description:
          "We review the formats, territories, imprint, publishing accounts, and release plan for your book.",
      },
      {
        number: "02",
        title: "Collect Book Information",
        description:
          "Title details, contributors, description, categories, pricing, and ownership information are gathered in one place.",
      },
      {
        number: "03",
        title: "Plan the ISBNs",
        description:
          "We determine which print, digital, or audiobook editions require their own identifiers.",
      },
      {
        number: "04",
        title: "Prepare Registration Records",
        description:
          "Your team organizes the ISBN, barcode, metadata, and related administrative information for each edition.",
      },
      {
        number: "05",
        title: "Verify Every Detail",
        description:
          "Names, identifiers, formats, categories, and ownership details are checked for consistency before submission.",
      },
      {
        number: "06",
        title: "Complete Platform Setup",
        description:
          "The approved information is prepared for publishing-platform listings and retained for future reference.",
      },
    ],
  },
  "printing-services": {
    slug: "printing-services",
    metadataTitle: "Professional Book Printing Services",
    metadataDescription:
      "Book printing, print-on-demand, offset runs, paper and finish selection, physical proofs, and production coordination for authors.",
    heroTitle: "Professional Book Printing",
    heroParagraphs: [
      "Whether you want print-on-demand copies or a larger offset run, we coordinate production around the quality, quantity, and budget your project needs.",
      "Paper, binding, trim, cover finish, color, and proofing are handled as one production plan so the finished book feels right in the hand.",
    ],
    heroImage: "/assets/generated/services/printing-services.png",
    heroImageAlt: "Freshly printed hardcover and paperback books",
    heroImagePosition: "center",
    benefitsLead: "We Produce Physical Books With",
    benefitsAccent: "Quality You Can See And Feel",
    benefits: [
      "Print-on-demand and larger-run production options",
      "Guidance on trim size, paper, binding, and cover finishes",
      "Color and black-and-white interior production",
      "Physical proof review before the full order proceeds",
      "Production coordination, packing, and delivery support",
    ],
    ctaTitle: "Turn The Final Files Into A Book You Can Hold",
    ctaDescription:
      "Choose the materials, finish, and print quantity that make sense for your readers, budget, and launch.",
    ctaButton: "Plan Your Print Run",
    processAccent: "Book Printing Project",
    processDescription:
      "We guide your files through specifications, proofing, production, and delivery with clear approval points.",
    processSteps: [
      {
        number: "01",
        title: "Define the Print Plan",
        description:
          "We discuss format, quantity, budget, schedule, distribution needs, and whether print-on-demand or offset printing fits best.",
      },
      {
        number: "02",
        title: "Choose Materials and Finishes",
        description:
          "Select trim, paper, binding, cover stock, lamination, and optional production details with practical guidance.",
      },
      {
        number: "03",
        title: "Check Production Files",
        description:
          "Interior and cover files are reviewed against the final printer specifications before proofing.",
      },
      {
        number: "04",
        title: "Review the Proof Copy",
        description:
          "You inspect the physical or digital proof and approve color, alignment, paper, binding, and finish.",
      },
      {
        number: "05",
        title: "Run Production",
        description:
          "Once approved, the printer produces your order under the agreed quality controls and schedule.",
      },
      {
        number: "06",
        title: "Pack and Deliver",
        description:
          "Finished books are prepared for shipment, fulfillment, events, direct sales, or your chosen distribution path.",
      },
    ],
  },
  "global-distribution": {
    slug: "global-distribution",
    metadataTitle: "Global Book Distribution Services",
    metadataDescription:
      "Worldwide book distribution through major retailers, wholesalers, libraries, and online stores across more than 200 countries.",
    heroTitle: "Global Book Distribution",
    heroParagraphs: [
      "Once your book is ready, we open the doors. Your editions are prepared for discovery through major retailers and distribution channels around the world.",
      "We coordinate metadata, availability, territories, pricing, and listings so readers can find and order the book wherever they shop.",
    ],
    heroImage: "/assets/generated/services/global-distribution.png",
    heroImageAlt: "Books prepared for worldwide retail distribution",
    heroImagePosition: "center",
    benefitsLead: "We Connect Your Finished Book With",
    benefitsAccent: "Retailers And Readers Around The World",
    benefits: [
      "Distribution access across more than 200 countries",
      "Listings for major online and physical book retailers",
      "Wholesaler, library, and institutional availability options",
      "Territory, pricing, metadata, and format coordination",
      "Ongoing listing support as your catalog grows",
    ],
    ctaTitle: "Put Your Book Within Reach Of The World",
    ctaDescription:
      "Move beyond a single storefront with a distribution plan built around your formats, territories, and readers.",
    ctaButton: "Plan Global Distribution",
    processAccent: "Global Distribution Project",
    processDescription:
      "We prepare your book information, configure the right channels, and verify that every edition is available correctly.",
    processSteps: [
      {
        number: "01",
        title: "Set Distribution Goals",
        description:
          "We identify your target territories, formats, retailers, pricing approach, and library or wholesale priorities.",
      },
      {
        number: "02",
        title: "Review Production Readiness",
        description:
          "Your final cover, interior, identifiers, metadata, and rights information are checked for distribution requirements.",
      },
      {
        number: "03",
        title: "Prepare Retail Metadata",
        description:
          "Descriptions, categories, keywords, contributors, pricing, and territory details are optimized and organized.",
      },
      {
        number: "04",
        title: "Configure Distribution Channels",
        description:
          "The selected print and digital editions are set up across the agreed retailer, wholesaler, and library networks.",
      },
      {
        number: "05",
        title: "Verify Live Listings",
        description:
          "We check availability, metadata, pricing, covers, and format details as listings propagate through the network.",
      },
      {
        number: "06",
        title: "Support Ongoing Reach",
        description:
          "Your team helps resolve listing issues and update distribution information as formats, pricing, or territories change.",
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
      "We map the launch, line up early reviews, and keep nudging your book in front of new readers long after the first week.",
      "Every strategy is tailored to your genre, goals, platform, and budget rather than copied from a one-size-fits-all campaign.",
    ],
    heroImage: figmaAssets.services.timelineMedia.marketing,
    heroImageAlt: "Book marketing and audience outreach",
    heroImagePosition: "center",
    benefitsLead: "We Connect Your Book With",
    benefitsAccent: "The Readers Most Likely To Love It",
    benefits: [
      "Custom campaign strategy based on your audience and goals",
      "Author brand positioning and consistent promotional messaging",
      "Retailer page, metadata, category, and keyword optimization",
      "Social media, email, content, and launch campaign support",
      "Clear reporting with ongoing recommendations and adjustments",
    ],
    ctaTitle: "Your Book Deserves To Be Discovered",
    ctaDescription:
      "Build visibility, reach the right readers, and launch with a marketing plan designed around your book.",
    ctaButton: "Start Your Marketing Campaign",
    processAccent: "Book Marketing Project",
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
