import { getMission } from "@/lib/contentful";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";

export default async function Mission() {
  const content = await getMission();

  return (
    <section
      aria-labelledby="mission-heading"
      data-theme="dark"
      className="bg-black text-gs-paper border-t border-gs-paper/[.08]"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28">
        <div className="grid grid-cols-1 gap-12 items-start md:grid-cols-[1fr_2fr] md:gap-20 lg:gap-28">
          <Reveal>
            <p className="font-caveat text-xl italic tracking-wide text-white/50 mb-4">
              {content.eyebrow}
            </p>
            <h2
              id="mission-heading"
              className="font-anton text-white text-[clamp(44px,5.5vw,82px)] leading-[0.92] uppercase tracking-[-0.005em]"
            >
              {content.heading}
            </h2>
          </Reveal>
          <Reveal delay={120} className="font-archivo text-[16px] leading-relaxed text-gs-grey-2 max-w-[520px]">
            {content.body.map((paragraph, i) => (
              <p key={i} className={i > 0 ? "mt-4" : ""}>
                {paragraph}
              </p>
            ))}
            <div className="mt-7">
              <Button variant="secondary" theme="dark" href={content.cta.href} className="w-full sm:w-auto justify-center">
                {content.cta.label}
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
