import { getLookbook } from "@/lib/contentful";

export default async function Lookbook() {
  const content = await getLookbook();

  return (
    <section
      aria-labelledby="lookbook-heading"
      className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] min-h-[80vh] border-t border-black/10"
    >
      {/* Image panel */}
      <div className="relative overflow-hidden bg-gs-grey-2 min-h-[60vh] md:min-h-0">
        <div
          role="img"
          aria-label={content.image.caption}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: content.image.src }}
        />
        <p
          aria-hidden="true"
          className="absolute right-6 bottom-6 sm:right-8 sm:bottom-8 font-archivo text-[12px] font-bold uppercase tracking-[.32em] text-gs-ink"
        >
          {content.image.caption}
        </p>
      </div>

      {/* Content panel */}
      <div className="flex flex-col justify-center gap-7 bg-gs-paper px-6 py-12 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
        <p className="font-archivo text-[11px] font-bold uppercase tracking-[.22em] text-gs-grey-4">
          {content.eyebrow}
        </p>
        <div className="font-caveat text-[48px] leading-[0.75] text-gs-ink">
          {content.preheading}
        </div>
        <h3
          id="lookbook-heading"
          className="font-anton text-[clamp(40px,5vw,80px)] leading-[0.92] tracking-[-0.01em] uppercase m-0"
        >
          {content.heading}
        </h3>
        <p className="font-archivo text-[16px] leading-relaxed text-gs-grey-4 max-w-[36ch]">
          {content.body}
        </p>
        <div>
          <a
            href={content.cta.href}
            className="inline-flex items-center font-archivo text-[12px] font-bold uppercase tracking-[.2em] px-6 py-4 bg-gs-ink text-gs-paper border border-gs-ink rounded-full hover:bg-gs-grey-4 hover:border-gs-grey-4 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gs-ink focus-visible:ring-offset-2"
          >
            {content.cta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
