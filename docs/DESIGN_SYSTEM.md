# Immaculate Publishing design system

This foundation was extracted from the two supplied Figma frames:

- Home — `72:1349`
- Services — `85:1803`
- Figma file — `BCt8ImdzpZEHKoc8RXnp35`

The visual reference route is available at `/design-system` while the landing pages are being implemented.

## Visual language

The design combines editorial serif headlines with compact sans-serif interface copy. White space and black text do most of the work; teal is used selectively for emphasized words, borders, icon tiles, actions, and large conversion sections.

The desktop canvas is 1,440px wide. Content occupies 1,240px with 100px gutters. Section spacing is generally 100px. Responsive gutters reduce to 40px on tablets and 20px on mobile.

## Tokens

The canonical values live in two places:

- CSS/runtime tokens: `src/app/globals.css`
- Typed reference tokens: `src/design-system/tokens.ts`

Core colors:

| Token        | Value     | Usage                                 |
| ------------ | --------- | ------------------------------------- |
| Ink          | `#131313` | Headlines and body copy               |
| Brand 400    | `#219EBC` | Accent text, borders, action gradient |
| Brand 700    | `#005F8E` | Large section gradient                |
| Brand 900    | `#023047` | Action gradient, deep footer surfaces |
| Surface soft | `#F2FBFF` | Pale page sections                    |
| Surface tint | `#E5F6FB` | Supporting cards and panels           |

Primary action gradient: `linear-gradient(180deg, #219EBC 0%, #023047 100%)`.

Corner radii are 10px for buttons and fields, 20px for panels, and 32px for large media.

## Typography

The licensed WOFF2 files are self-hosted under `public/fonts`:

- Bethany Elingston Regular — display and editorial headings
- Bethany Elingston Italic — editorial emphasis
- Neue Montreal Light/Regular/Medium/Bold with italic variants — body copy, navigation, actions, consent, and legal copy

The CSS includes explicit `@font-face` declarations with `font-display: swap`. Neue Montreal handles every sans-serif role so the website uses a focused two-family type system.

## Components

Shared primitives live in `src/components/ui`:

- `Button` and `buttonVariants`
- `Container`
- `Heading` and `AccentText`
- `Input` and `Textarea`
- `Surface`

Use these primitives when building both supplied pages so layout, typography, focus states, and conversion surfaces remain consistent.

## Assets

Figma source images were exported section-by-section to avoid the 20-image API cap, then deduplicated by SHA-256 and converted to near-lossless WebP for production.

- 238 Figma image occurrences
- 100 unique raster assets in `public/assets/figma/library`
- 20 SVG/vector assets in `public/assets/figma/shared`
- Full dimensions, source path, and checksum inventory in `public/assets/figma/manifest.json`
- Typed high-use asset registry in `src/design-system/assets.ts`

`scripts/prepare-figma-assets.mjs` reproduces the deduplication and optimization pass after raw Figma exports are placed in `public/assets/figma/home` and `public/assets/figma/services`.
