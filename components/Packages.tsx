const content = {
  heading: "Choose your tier.",
  body: "Start with a digital concept. Upgrade to full installation. Or go straight to the complete glowseries treatment.",
  footer: "Design packages available worldwide. Installation: Norwich, Norfolk & surrounding areas.",
  packages: [
    {
      tier: "01",
      name: "Design Concept",
      price: "£149–249",
      sub: "Digital · 7 working days",
      features: [
        "Full mood board. Your space, your aesthetic.",
        "Colour palette. Walls, floors, furniture, accents.",
        "Material and finish specification sheet.",
        "Annotated floor plan with furniture layout.",
        "Feature wall concept and finish details.",
        "Lighting recommendations.",
        "Shopping and sourcing guide.",
        "One round of revisions included.",
      ],
      cta: "Get started",
    },
    {
      tier: "02",
      name: "Design + Consult",
      price: "£349–499",
      sub: "Digital + 1hr consultation · 7 days",
      features: [
        "Everything in the design concept package.",
        "1-hour virtual walkthrough of your design.",
        "Two rounds of revisions included.",
        "Contractor-ready brief document.",
        "Material sourcing with supplier links.",
        "Priority 5-day turnaround.",
        "30-day email support after delivery.",
      ],
      cta: "Book now",
    },
    {
      tier: "03",
      name: "Full Transformation",
      price: "£800+",
      sub: "Norwich & surrounding areas · quoted",
      features: [
        "Complete design concept package.",
        "On-site consultation and space assessment.",
        "Venetian plaster or microcement walls.",
        "Bespoke handcrafted furniture commission.",
        "Full installation by glowseries.",
        "Professional photography included.",
        "12-month commercial finish warranty.",
      ],
      cta: "Get a quote",
    },
  ],
};

type Package = (typeof content.packages)[number];

function PackageCard({ tier, name, price, sub, features, cta }: Package) {
  return (
    <div className="flex flex-col gap-6 p-10 border-r border-white/10 last:border-r-0 max-md:border-r-0 max-md:border-b">
      <div>
        <p className="font-mono text-[10px] text-white uppercase tracking-widest mb-3">
          Tier · {tier}
        </p>
        <p className="font-archivo text-[13px] font-bold uppercase tracking-[.06em] text-white mb-4">
          {name}
        </p>
        <div className="font-anton text-[56px] text-white leading-none">
          {price}
        </div>
        <p className="font-mono text-[10px] text-white uppercase tracking-wide mt-1">
          {sub}
        </p>
      </div>
      <div className="w-6 h-px bg-white/10" />
      <ul className="flex flex-col gap-2.5 flex-1">
        {features.map((f, i) => (
          <li
            key={i}
            className="flex gap-2.5 font-archivo text-[13px] text-white leading-relaxed"
          >
            <span className="text-white shrink-0">—</span>
            {f}
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className="block text-center py-3.5 font-archivo text-[11px] font-bold uppercase tracking-[.2em] border border-white/20 text-white/50 rounded-full hover:border-white hover:text-white transition-all duration-200"
      >
        {cta}
      </a>
    </div>
  );
}

export default function Packages() {
  return (
    <section className="bg-black text-white px-16 py-24 border-t border-white/5 max-md:px-6">
      <div className="mb-16 pb-8 border-b border-white/10">
        <h2 className="font-anton text-[clamp(56px,7vw,110px)] leading-[0.92] uppercase text-white mb-4">
          {content.heading}
        </h2>
        <p className="font-archivo text-[16px] leading-relaxed text-white/40 max-w-[36ch]">
          {content.body}
        </p>
      </div>
      <div className="grid grid-cols-3 border border-white/10 max-md:grid-cols-1">
        {content.packages.map(p => (
          <PackageCard key={p.tier} {...p} />
        ))}
      </div>
      <p className="text-center mt-10 font-mono text-[10px] uppercase tracking-widest text-white/20">
        {content.footer}
      </p>
    </section>
  );
}