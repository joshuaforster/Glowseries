import { getLookbook } from "@/lib/contentful";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";

export default async function Lookbook() {
  const content = await getLookbook();

  return (
    <section
      aria-labelledby="lookbook-heading"
      className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] min-h-[80vh] border-t border-black/10 bg-[#EAE8E0]"
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
      <Reveal delay={80} className="flex flex-col justify-center gap-7 bg-gs-paper px-6 py-12 sm:px-10 sm:py-16 lg:pl-14 lg:py-20 lg:pr-14 xl:pr-[calc((100vw-80rem)/2+4rem)]">
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
          <Button variant="primary" theme="light" href={content.cta.href} className="w-full sm:w-auto justify-center">
            {content.cta.label}
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
