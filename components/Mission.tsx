

const content = {
  eyebrow: "Manifesto · 01",
  heading: "challenging the norm.",
  body: [
    "glowseries is a studio that produces identity. Interior design packages, lookbooks, venetian plaster walls, and handcrafted statement furniture. The chair, the wall, the contact sheet.",
    "We transform commercial spaces — salons, hotels, airbnb properties, offices — into premium destinations. Designed to the detail. Installed in days.",
  ],
  cta: { label: "Read the manifesto", href: "#services" },
};

export default function Mission() {
  return (

      <section className="bg-black text-gs-paper px-16 py-24 grid grid-cols-[1fr_1.3fr] gap-16 items-end border-t border-[rgba(244,241,234,.08)] max-md:grid-cols-1 max-md:gap-8 max-md:px-6">
        <div>
          <p className="font-archivo text-[11px] font-bold uppercase tracking-[.22em] text-[rgba(244,241,234,.4)] mb-4">
            {content.eyebrow}
          </p>
          <div className="font-anton text-white text-[clamp(48px,7vw,110px)] leading-[0.92] uppercase tracking-[-0.005em]">
            {content.heading}
          </div>
        </div>
        <div className="font-archivo text-[16px] leading-relaxed text-[rgba(244,241,234,.65)] max-w-[480px]">
          {content.body.map((paragraph, i) => (
            <p key={i} className={i > 0 ? "mt-4" : ""}>
              {paragraph}
            </p>
          ))}
          <div className="mt-7">
            <a
              href={content.cta.href}
              className="inline-flex font-archivo text-[12px] font-bold uppercase tracking-[.2em] px-6 py-4 border border-[rgba(244,241,234,.5)] text-gs-paper rounded-full hover:opacity-75 transition-opacity"
            >
              {content.cta.label}
            </a>
          </div>
        </div>
      </section>

  );
}
