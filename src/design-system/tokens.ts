export const designTokens = {
  source: {
    fileKey: "BCt8ImdzpZEHKoc8RXnp35",
    frames: {
      home: "72:1349",
      services: "85:1803",
    },
    canvasWidth: 1440,
  },
  color: {
    ink: "#131313",
    white: "#FFFFFF",
    brand: {
      400: "#219EBC",
      700: "#005F8E",
      900: "#023047",
    },
    surface: {
      soft: "#F2FBFF",
      tint: "#E5F6FB",
    },
  },
  gradient: {
    action: "linear-gradient(180deg, #219EBC 0%, #023047 100%)",
    section: "linear-gradient(180deg, #219EBC 0%, #005F8E 100%)",
    pale: "linear-gradient(180deg, #FFFFFF 0%, #F2FBFF 100%)",
    glass:
      "linear-gradient(180deg, rgba(33, 158, 188, 0) 0%, rgba(33, 158, 188, 0.2) 100%), #FFFFFF",
  },
  typography: {
    display: {
      family: "Bethany Elingston",
      fallback: '"Iowan Old Style", Baskerville, "Times New Roman", serif',
      weight: 400,
    },
    body: {
      family: "Neue Montreal",
      fallback: "var(--font-geist-sans), Arial, sans-serif",
      regular: 400,
      medium: 500,
    },
    legal: {
      family: "Neue Montreal",
      fallback: "var(--font-geist-sans), Arial, sans-serif",
      regular: 400,
      medium: 500,
    },
    scale: {
      display: { size: 56, lineHeight: 1.4, letterSpacing: 0.56 },
      section: { size: 48, lineHeight: 1.4, letterSpacing: 0.48 },
      title: { size: 32, lineHeight: 1.2, letterSpacing: 0.32 },
      subheading: { size: 20, lineHeight: 1.2, letterSpacing: 0.2 },
      action: { size: 18, lineHeight: 1.2, letterSpacing: 0 },
      body: { size: 16, lineHeight: 1.2, letterSpacing: 0 },
      small: { size: 14, lineHeight: 1.2, letterSpacing: -0.14 },
    },
  },
  layout: {
    contentWidth: 1240,
    desktopGutter: 100,
    tabletGutter: 40,
    mobileGutter: 20,
    sectionSpace: 100,
  },
  spacing: {
    1: 5,
    2: 10,
    3: 15,
    4: 20,
    5: 24,
    6: 32,
    7: 40,
    8: 50,
    9: 75,
    10: 100,
  },
  radius: {
    checkbox: 3,
    control: 10,
    card: 20,
    media: 32,
  },
  border: {
    brand: "1px solid #219EBC",
    highlight: "1px solid rgba(255, 255, 255, 0.29)",
  },
  breakpoint: {
    mobile: 640,
    tablet: 768,
    desktop: 1024,
    wide: 1440,
  },
  motion: {
    fast: 160,
    default: 240,
    slow: 420,
    easing: "cubic-bezier(0.22, 1, 0.36, 1)",
  },
} as const;

export type DesignTokens = typeof designTokens;
