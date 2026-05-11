import { createClient, Asset } from 'contentful';

const accessToken = process.env.CONTENTFUL_DELIVERY_API!
const space = process.env.CONTENTFUL_SPACE_ID!

const client = createClient({
  accessToken,
  space,
});

export async function getHero() {
  const res = await client.getEntries({ content_type: "hero" })
  const fields = res.items[0]?.fields ?? {}
  const image = fields.backgroundImage as Asset;

  return {
    eyebrow: (fields.eyebrowText as string) ?? "Studio · Issue 01 · Norwich",
    preheading: (fields.preHeading as string) ?? "space",
    heading: (fields.heading as string) ?? "with us.",
    body: (fields.bodyText as string) ?? "Challenging the norm. Creating your identity into a limitless space. Interior design packages, venetian plaster and handcrafted statement furniture for commercial spaces.",
    primaryCta: {
      label: (fields.primaryButtonText as string) ?? "Book the studio",
      href: (fields.primaryButtonLink as string) ?? "#portfolio",
    },
    secondaryCta: {
      label: (fields.secondaryButtonText as string) ?? "Open the lookbook",
      href: (fields.secondaryButtonLink as string) ?? "#packages",
    },
    sidebarLabel: `${(fields.studioLabel as string) ?? "studio · issue 01"} · ${new Date().getFullYear()}`,
    backgroundImage: image
      ? `url('${image.fields.file?.url}')`
      : "url('https://plus.unsplash.com/premium_photo-1681558402429-9427dadca430?q=80&w=2232&auto=format&fit=crop')",
  }
}

export async function getMarquee() {
  const res = await client.getEntries({ content_type: "marquee" })
  const fields = res.items[0]?.fields ?? {}

  return {
    items: (fields.items as string[]) ?? [
      "Interior Design Packages",
      "Venetian Plaster",
    ]
  }
}

export async function getMission() {
  const res = await client.getEntries({ content_type: "mission" })
  const fields = res.items[0]?.fields ?? {}

  return {
    eyebrow: (fields.eyebrowText as string) ?? "Manifesto · 01",
    heading: (fields.heading as string) ?? "challenging the norm.",
    body: [
      (fields.bodyParagraph1 as string) ?? "glowseries is a studio that produces identity. Interior design packages, lookbooks, venetian plaster walls, and handcrafted statement furniture. The chair, the wall, the contact sheet.",
      (fields.bodyParagraph2 as string) ?? "We transform commercial spaces — salons, hotels, airbnb properties, offices — into premium destinations. Designed to the detail. Installed in days.",
    ],
    cta: {
      label: (fields.buttonText as string) ?? "Read the manifesto",
      href: (fields.buttonLink as string) ?? "#services",
    },
  }
}