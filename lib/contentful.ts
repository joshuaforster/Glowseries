import { createClient, Asset } from 'contentful';

type RichTextNode = { nodeType: string; value?: string; content?: RichTextNode[] };

function richTextToPlain(node: unknown): string {
  const n = node as RichTextNode;
  if (!n) return "";
  if (n.nodeType === "text") return n.value ?? "";
  if (Array.isArray(n.content)) return n.content.map(richTextToPlain).join("");
  return "";
}

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

export async function getServices() {
  const res = await client.getEntries({ content_type: "services" })
  const fields = res.items[0]?.fields ?? {}
  console.log(fields)

  return {
    heading: (fields.heading as string) ?? "What we do.",
    body: (fields.body as string) ?? "Total room transformation. From a complete interior design concept on paper to physical installation of walls, furniture and surfaces — we do it all, or just the parts you need.",
    services: [
      {
        n: "01",
        title: (fields.service1title as string) ?? "Interior Design Packages",
        body: (fields.service1body as string) ?? "A complete digital concept for your space. Mood board, floor plan, material specifications, colour palette, lighting guide and sourcing list. Everything your contractor needs, or the blueprint to hire us.",
        tags: (fields.service1tags as string[]) ?? ["Mood boards", "Floor plans", "Material specs", "Digital delivery"],
      },
      {
        n: "02",
        title: (fields.service2title as string) ?? "Venetian Plaster & Walls",
        body: (fields.service2body as string) ?? "Hand-applied venetian plaster, microcement and textured wall finishes. Warm stone, deep cobalt, obsidian black. No two walls identical. Applied on-site across Norwich and surrounding areas.",
        tags: (fields.service2tags as string[]) ?? ["Venetian plaster", "Microcement", "Feature walls", "On-site installation"],
      },
      {
        n: "03",
        title: (fields.service3title as string) ?? "Statement Furniture",
        body: (fields.service3body as string) ?? "Handcrafted furniture with deep-relief croc texture, stone and microcement finishes, antique brass hardware and solid walnut tops. Commissioned pieces built to order in our Norwich studio.",
        tags: (fields.service3tags as string[]) ?? ["Croc texture", "Microcement finish", "Brass hardware", "Made to order"],
      },
    ]
  }
}

export async function getPackages() {
  const res = await client.getEntries({ content_type: "packages" })
  const fields = res.items[0]?.fields ?? {}

  return {
    heading: (fields.heading as string) ?? "Choose your tier.",
    body: (fields.body as string) ?? "Start with a digital concept. Upgrade to full installation. Or go straight to the complete glowseries treatment.",
    footer: (fields.footer as string) ?? "Design packages available worldwide. Installation: Norwich, Norfolk & surrounding areas.",
    packages: [
      {
        tier: "01",
        name: (fields.package1name as string) ?? "Design Concept",
        price: (fields.package1price as string) ?? "£149–249",
        sub: (fields.package1sub as string) ?? "Digital · 7 working days",
        features: (fields.package1features as string[]) ?? ["Full mood board. Your space, your aesthetic.", "Colour palette. Walls, floors, furniture, accents.", "Material and finish specification sheet.", "Annotated floor plan with furniture layout.", "Feature wall concept and finish details.", "Lighting recommendations.", "Shopping and sourcing guide.", "One round of revisions included."],
        cta: (fields.package1cta as string) ?? "Get started",
      },
      {
        tier: "02",
        name: (fields.package2name as string) ?? "Design + Consult",
        price: (fields.package2price as string) ?? "£349–499",
        sub: (fields.package2sub as string) ?? "Digital + 1hr consultation · 7 days",
        features: (fields.package2features as string[]) ?? ["Everything in the design concept package.", "1-hour virtual walkthrough of your design.", "Two rounds of revisions included.", "Contractor-ready brief document.", "Material sourcing with supplier links.", "Priority 5-day turnaround.", "30-day email support after delivery."],
        cta: (fields.package2cta as string) ?? "Book now",
      },
      {
        tier: "03",
        name: (fields.package3name as string) ?? "Full Transformation",
        price: (fields.package3price as string) ?? "£800+",
        sub: (fields.package3sub as string) ?? "Norwich & surrounding areas · quoted",
        features: (fields.package3features as string[]) ?? ["Complete design concept package.", "On-site consultation and space assessment.", "Venetian plaster or microcement walls.", "Bespoke handcrafted furniture commission.", "Full installation by glowseries.", "Professional photography included.", "12-month commercial finish warranty."],
        cta: (fields.package3cta as string) ?? "Get a quote",
      },
    ]
  }
}

export async function getProcess() {
  const res = await client.getEntries({ content_type: "process" })
  const fields = res.items[0]?.fields ?? {}
  console.log(fields)

  return {
    eyebrow: (fields.eyebrow as string) ?? "How it works",
    heading: (fields.heading as string) ?? "simple. fast. no surprises.",
    body: (fields.body as string) ?? "From first enquiry to finished space in as little as 14 days.",
    cta: {
      label: (fields.ctaLabel as string) ?? "Start the process",
      href: (fields.ctaHref as string) ?? "#contact",
    },
    steps: [
      { n: "01", title: (fields.step1title as string) ?? "Tell us about your space.", body: (fields.step1body as string) ?? "Purchase a package and complete our short design brief. Send us your dimensions, existing photos, and what you want clients to feel when they walk in.", day: (fields.step1day as string) ?? "Day 1" },
      { n: "02", title: (fields.step2title as string) ?? "We design your transformation.", body: (fields.step2body as string) ?? "Our studio creates your full design concept — mood board, floor plan, material specification, feature wall concept and sourcing guide. Tailored entirely to your space.", day: (fields.step2day as string) ?? "Days 2–7" },
      { n: "03", title: (fields.step3title as string) ?? "You review and approve.", body: (fields.step3body as string) ?? "We walk you through every decision. You request revisions. We refine. When satisfied, you approve and we move to delivery or installation.", day: (fields.step3day as string) ?? "Days 7–9" },
      { n: "04", title: (fields.step4title as string) ?? "Delivery or installation.", body: (fields.step4body as string) ?? "Digital packages delivered as high-resolution PDF. Full transformation clients receive on-site installation — walls plastered, furniture installed, space styled and photographed.", day: (fields.step4day as string) ?? "Days 10–14" },
    ]
  }
}


export async function getPortfolio() {
  const res = await client.getEntries({ content_type: "portfolio" })
  const fields = res.items[0]?.fields ?? {}

  const imgUrl = (field: unknown) => {
    const asset = field as Asset
    return asset?.fields?.file?.url ? `https:${asset.fields.file.url}` : ""
  }

  return {
    eyebrow: (fields.eyebrow as string) ?? "Index · Our work",
    heading: (fields.heading as string) ?? "Spaces transformed.",
    filterTags: (fields.filterTags as string[]) ?? ["All", "Furniture", "Walls", "Full room"],
    portfolio: [
      { n: "01", title: (fields.item1title as string) ?? "The Obsidian Pair", price: (fields.item1price as string) ?? "£525", sub: (fields.item1sub as string) ?? "Norwich · Croc texture", badge: (fields.item1badge as string) ?? "Statement furniture", img: imgUrl(fields.item1image) },
      { n: "02", title: (fields.item2title as string) ?? "Deep Cobalt Wall", price: (fields.item2price as string) ?? "From £800", sub: (fields.item2sub as string) ?? "Norwich · Hand-applied", badge: (fields.item2badge as string) ?? "Venetian plaster", img: imgUrl(fields.item2image) },
      { n: "03", title: (fields.item3title as string) ?? "Warm Stone Wall", price: (fields.item3price as string) ?? "From £800", sub: (fields.item3sub as string) ?? "Norwich · Hand-applied", badge: (fields.item3badge as string) ?? "Venetian plaster", img: imgUrl(fields.item3image) },
    ]
  }
}

export async function getGallery() {
  const imgUrl = (field: unknown) => {
    const asset = field as Asset
    return asset?.fields?.file?.url ? `https:${asset.fields.file.url}` : ""
  }

  const defaults = {
    eyebrow: "Gallery · Issue 01",
    heading: "The work.",
    items: [
      {
        n: "01",
        title: "The Obsidian Room",
        subtitle: "spaces that tell your story.",
        body: "Every project begins with listening. We document the space, the light, the feeling you want clients to have — then build backwards from that moment.",
        category: "Full transformation · Norwich",
        image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932&auto=format&fit=crop",
        imageAlt: "Featured interior",
      },
      {
        n: "02",
        title: "Deep Cobalt Wall",
        subtitle: "no two walls identical.",
        body: "Hand-applied venetian plaster in deep cobalt. Warm to the touch, rich in depth. Applied on-site across Norwich and surrounding areas.",
        category: "Venetian plaster · Norwich",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1958&auto=format&fit=crop",
        imageAlt: "Deep cobalt venetian plaster wall",
      },
      {
        n: "03",
        title: "Bouclé Studio",
        subtitle: "designed to the detail.",
        body: "Textured surfaces, curated lighting, handcrafted furniture. A complete interior design concept realised in full.",
        category: "Statement furniture · Norwich",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=870&auto=format&fit=crop",
        imageAlt: "Interior detail 01",
      },
      {
        n: "04",
        title: "Warm Stone Finish",
        subtitle: "installed in days.",
        body: "Microcement and warm stone finishes applied across a full commercial space. From concept to completion in under two weeks.",
        category: "Microcement · Norfolk",
        image: "https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=870&auto=format&fit=crop",
        imageAlt: "Interior detail 02",
      },
      {
        n: "05",
        title: "Walnut & Brass",
        subtitle: "made to order.",
        body: "Commissioned furniture with solid walnut tops, antique brass hardware and deep-relief croc texture. Built in our Norwich studio.",
        category: "Bespoke furniture · Norwich",
        image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=870&auto=format&fit=crop",
        imageAlt: "Interior detail 03",
      },
    ],
  }

  try {
    const [headerRes, itemsRes] = await Promise.all([
      client.getEntries({ content_type: "gallery" }),
      client.getEntries({ content_type: "galleryItem", order: ["fields.number"] }),
    ])

    const hf = (headerRes.items[0]?.fields ?? {}) as Record<string, unknown>

    const items = itemsRes.items.map((entry) => {
      const f = entry.fields as Record<string, unknown>
      return {
        n: String(f.number ?? ""),
        title: (f.title as string) ?? "",
        subtitle: (f.subtitle as string) ?? "",
        body: typeof f.body === "object" ? richTextToPlain(f.body) : (f.body as string) ?? "",
        category: (f.category as string) ?? "",
        image: imgUrl(f.image),
        imageAlt: (f.imageAlt as string) ?? "",
      }
    })

    return {
      eyebrow: (hf.eyebrow as string) ?? defaults.eyebrow,
      heading: (hf.heading as string) ?? defaults.heading,
      items: items.length > 0 ? items : defaults.items,
    }
  } catch {
    return defaults
  }
}

export async function getLookbook() {
  const res = await client.getEntries({ content_type: "lookbook" })
  const fields = res.items[0]?.fields ?? {}
  const image = fields.image as Asset

  return {
    eyebrow: (fields.eyebrow as string) ?? "Lookbook · Issue 01",
    image: {
      src: image?.fields?.file?.url
        ? `url('https:${image.fields.file.url}')`
        : "url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop')",
      caption: (fields.imageCaption as string) ?? "Bouclé · 01",
    },
    preheading: (fields.preheading as string) ?? "the space",
    heading: (fields.heading as string) ?? "sells the experience now.",
    body: (fields.body as string) ?? "Every client who walks in mentions it. One transformation. Raised prices the following month.",
    cta: {
      label: (fields.ctaLabel as string) ?? "View the lookbook",
      href: (fields.ctaHref as string) ?? "#packages",
    },
  }
}

export async function getNewsletter() {
  const res = await client.getEntries({ content_type: "newsletter" })
  const fields = res.items[0]?.fields ?? {}

  return {
    eyebrow: (fields.eyebrow as string) ?? "Register for Issue 01.",
    heading: (fields.heading as string) ?? "twice a year. never spam.",
    input: {
      placeholder: (fields.inputPlaceholder as string) ?? "your@studio.example",
      submitLabel: (fields.inputSubmitLabel as string) ?? "Submit →",
      hint: (fields.inputHint as string) ?? "New work · new projects · new pieces.",
    },
    booking: {
      eyebrow: (fields.bookingEyebrow as string) ?? "Book the studio.",
      body: (fields.bookingBody as string) ?? "15-minute consultation. We'll look at your space and show you exactly what's possible — before you commit to anything.",
      primaryCta: {
        label: (fields.bookingPrimaryCtaLabel as string) ?? "Book a consultation",
        href: (fields.bookingPrimaryCtaHref as string) ?? "mailto:hello@glowseries.com",
      },
      secondaryCta: {
        label: (fields.bookingSecondaryCtaLabel as string) ?? "See packages",
        href: (fields.bookingSecondaryCtaHref as string) ?? "#packages",
      },
      meta: (fields.bookingMeta as string) ?? "hello@glowseries.com · Norwich, UK · 4 projects per month.",
    },
  }
}