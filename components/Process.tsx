import { getProcess } from "@/lib/contentful";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";

type Step = {
  n: string;
  title: string;
  body: string;
  day: string;
};

function StepRow({ n, title, body, day }: Step) {
  return (
    <div className="grid grid-cols-[52px_1fr] gap-7 py-8 border-b border-black/10">
      <div
        aria-hidden="true"
        className="font-anton text-[40px] leading-none pt-0.5"
        style={{ color: "rgba(10,10,10,.1)" }}
      >
        {n}
      </div>
      <div>
        <p className="font-archivo text-[13px] font-bold uppercase tracking-[.08em] text-gs-ink mb-2">
          {title}
        </p>
        <p className="font-archivo text-[14px] leading-[1.7] text-gs-grey-4">
          {body}
        </p>
        <span className="inline-block mt-3 font-archivo text-[9px] font-bold uppercase tracking-[.2em] text-gs-grey-3 border border-black/30 px-3 py-1 rounded-full">
          {day}
        </span>
      </div>
    </div>
  );
}

export default async function Process() {
  const content = await getProcess();


  return (
    <section
      aria-labelledby="process-heading"
      className="bg-gs-paper-2"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_2fr] md:gap-20 md:items-start">
          <Reveal>
            <p className="font-caveat text-xl italic tracking-wide text-gs-grey-4 mb-5">
              {content.eyebrow}
            </p>
            <h2
              id="process-heading"
              className="font-anton text-[clamp(48px,6vw,92px)] leading-[0.92] tracking-[-0.01em] uppercase mb-7"
            >
              {content.heading}
            </h2>
            <p className="font-archivo text-[14px] leading-[1.7] text-gs-grey-4 max-w-[28ch]">
              {content.body}
            </p>
            <div className="mt-8">
              <Button variant="primary" theme="light" href={content.cta.href} className="w-full sm:w-auto justify-center">
                {content.cta.label}
              </Button>
            </div>
          </Reveal>
          <Reveal delay={120} className="border-t border-black/10">
            {content.steps.map((step) => (
              <StepRow key={step.n} {...step} />
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
