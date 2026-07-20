import type { Metadata } from "next";
import Image from "next/image";

import { figmaAssets } from "@/design-system";
import {
  AccentText,
  Button,
  Container,
  Heading,
  Input,
  Surface,
  Textarea,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Design System",
  description:
    "Immaculate Publishing design tokens, components, and Figma asset inventory.",
};

const colors = [
  ["Ink", "#131313"],
  ["Brand 400", "#219EBC"],
  ["Brand 700", "#005F8E"],
  ["Brand 900", "#023047"],
  ["Surface soft", "#F2FBFF"],
  ["Surface tint", "#E5F6FB"],
] as const;

const featuredAssets = [
  ["Home hero", figmaAssets.hero.homeBackground],
  ["Hero book stack", figmaAssets.hero.homeBookStack],
  ["Services hero", figmaAssets.hero.servicesBackground],
  ["Publishing CTA", figmaAssets.cta.publishingSteps],
  ["Service media", figmaAssets.services.ghostwriting],
  ["Service card", figmaAssets.services.cards[1]],
] as const;

export default function DesignSystemPage() {
  return (
    <main className="text-ink min-h-screen bg-white">
      <section className="bg-brand-deep relative isolate overflow-hidden py-24 text-white">
        <Image
          src={figmaAssets.hero.homeBackground}
          alt=""
          fill
          loading="eager"
          fetchPriority="high"
          className="-z-20 object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(2,48,71,.96),rgba(2,48,71,.65))]" />
        <Container>
          <p className="mb-4 text-sm font-medium tracking-[0.18em] text-white/70 uppercase">
            Figma foundation · July 2026
          </p>
          <Heading as="h1" size="display" className="max-w-3xl text-white">
            Immaculate Publishing design system
          </Heading>
          <p className="mt-5 max-w-2xl text-lg text-white/80">
            Shared tokens and primitives extracted from the Home and Services
            desktop frames.
          </p>
        </Container>
      </section>

      <section className="ds-section">
        <Container>
          <Heading>Color</Heading>
          <p className="text-ink/65 mt-2 max-w-2xl">
            The interface is predominantly black and white, with a compact
            teal-to-navy brand ramp.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {colors.map(([name, value]) => (
              <div
                key={name}
                className="overflow-hidden rounded-2xl border border-black/10"
              >
                <div className="h-28" style={{ background: value }} />
                <div className="flex items-center justify-between p-4">
                  <span className="font-medium">{name}</span>
                  <code className="text-ink/55 text-sm">{value}</code>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="ds-section bg-gradient-pale">
        <Container>
          <Heading>Typography</Heading>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_.6fr]">
            <div className="space-y-8">
              <Heading as="h3" size="display">
                Publish ideas with <AccentText>clarity and flair.</AccentText>
              </Heading>
              <Heading as="h3" size="service">
                Editorial headings use Bethany Elingston.
              </Heading>
            </div>
            <div className="text-ink/75 space-y-4 text-base leading-relaxed">
              <p>
                Neue Montreal carries navigation, body copy, fields, and
                actions. The local font name is preferred, with Geist and system
                sans-serif fallbacks during development.
              </p>
              <p className="text-sm">
                Neue Montreal also handles consent and legal copy, keeping the
                interface to a focused two-family system.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="ds-section">
        <Container>
          <Heading>Actions and surfaces</Heading>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="flex flex-wrap content-start gap-4">
              <Button>Primary action</Button>
              <Button variant="secondary">Secondary action</Button>
              <Button variant="outline">Outline action</Button>
              <Button variant="ghost">Ghost action</Button>
            </div>
            <Surface className="space-y-4 p-8">
              <Heading as="h3" size="title">
                Get a free quote
              </Heading>
              <p className="text-sm">Discuss your project with our experts.</p>
              <Input aria-label="Name" placeholder="Name" />
              <div className="grid gap-3 sm:grid-cols-2">
                <Input aria-label="Email" placeholder="Email" />
                <Input aria-label="Phone number" placeholder="Phone number" />
              </div>
              <Textarea
                aria-label="Project details"
                placeholder="Tell us about your book"
              />
              <Button className="w-full">Submit</Button>
            </Surface>
          </div>
        </Container>
      </section>

      <section className="ds-section bg-surface-soft">
        <Container>
          <Heading>Asset library</Heading>
          <p className="text-ink/65 mt-2 max-w-2xl">
            100 deduplicated raster assets and 20 reusable SVGs are stored
            locally. The complete inventory lives in the Figma manifest.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredAssets.map(([name, src]) => (
              <figure
                key={name}
                className="overflow-hidden rounded-[var(--ds-radius-media)] bg-white"
              >
                <div className="relative aspect-[4/3] bg-white">
                  <Image
                    src={src}
                    alt=""
                    fill
                    className="object-contain"
                    sizes="(min-width: 1024px) 33vw, 50vw"
                  />
                </div>
                <figcaption className="border-t border-black/10 px-5 py-4 font-medium">
                  {name}
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
