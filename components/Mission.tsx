import { getMission } from "@/lib/contentful";

export default async function Mission() {
  const content = await getMission();

  return (
    <section
      aria-labelledby="mission-heading"
      className="bg-black text-white text-gs-paper border-t border-gs-paper/[.08]"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28">
        <div className="grid grid-cols-1 gap-12 items-start md:grid-cols-[1fr_2fr] md:gap-20 lg:gap-28">
          <div>
            <p className="font-archivo text-[11px] font-bold uppercase tracking-[.22em] text-gs-paper/40 mb-4">
              {content.eyebrow}
            </p>
            <h2
              id="mission-heading"
              className="font-anton text-white text-[clamp(44px,5.5vw,82px)] leading-[0.92] uppercase tracking-[-0.005em]"
            >
              {content.heading}
            </h2>
          </div>
          <div className="font-archivo text-[16px] text-white leading-relaxed text-gs-paper/65 max-w-[520px]">
            {content.body.map((paragraph, i) => (
              <p key={i} className={i > 0 ? "mt-4" : ""}>
                {paragraph}
              </p>
            ))}
            <div className="mt-7">
              <a
                href={content.cta.href}
                className="inline-flex items-center font-archivo text-[12px] font-bold uppercase tracking-[.2em] px-6 py-4 border border-gs-paper/50 text-gs-paper rounded-full hover:border-gs-paper hover:text-white transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                {content.cta.label}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
