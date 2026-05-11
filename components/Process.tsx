import Reveal from "./Reveal";

const content = {
  eyebrow: "How it works",
  heading: "simple. fast. no surprises.",
  body: "From first enquiry to finished space in as little as 14 days.",
  cta: { label: "Start the process", href: "#contact" },
  steps: [
    {
      n: "01",
      title: "Tell us about your space.",
      body: "Purchase a package and complete our short design brief. Send us your dimensions, existing photos, and what you want clients to feel when they walk in.",
      day: "Day 1",
    },
    {
      n: "02",
      title: "We design your transformation.",
      body: "Our studio creates your full design concept — mood board, floor plan, material specification, feature wall concept and sourcing guide. Tailored entirely to your space.",
      day: "Days 2–7",
    },
    {
      n: "03",
      title: "You review and approve.",
      body: "We walk you through every decision. You request revisions. We refine. When satisfied, you approve and we move to delivery or installation.",
      day: "Days 7–9",
    },
    {
      n: "04",
      title: "Delivery or installation.",
      body: "Digital packages delivered as high-resolution PDF. Full transformation clients receive on-site installation — walls plastered, furniture installed, space styled and photographed.",
      day: "Days 10–14",
    },
  ],
};

type Step = (typeof content.steps)[number];

function StepRow({ n, title, body, day }: Step) {
  return (
    <div className="grid grid-cols-[52px_1fr] gap-7 py-8 border-b border-black/10">
      <div
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

export default function Process() {
  return (
    <Reveal>
      <section className="px-16 py-24 bg-gs-paper-2 max-md:px-6 bg-[#EAE8E1]">
        <div className="grid grid-cols-[1fr_2fr] gap-20 items-start max-md:grid-cols-1 max-md:gap-8">
          <div>
            <p className="font-archivo text-[11px] font-bold uppercase tracking-[.22em] text-gs-grey-4 mb-5">
              {content.eyebrow}
            </p>
            <h2 className="font-anton text-[clamp(48px,6vw,92px)] leading-[0.92] tracking-[-0.01em] uppercase mb-7">
              {content.heading}
            </h2>
            <p className="font-archivo text-[14px] leading-[1.7] text-gs-grey-4 max-w-[28ch]">
              {content.body}
            </p>
            <div className="mt-8">
              <a
                href={content.cta.href}
                className="inline-flex font-archivo text-[12px] font-bold uppercase tracking-[.2em] px-6 py-4 bg-gs-ink text-gs-paper border border-gs-ink rounded-full hover:opacity-80 transition-opacity"
              >
                {content.cta.label}
              </a>
            </div>
          </div>
          <div className="border-t border-black/10">
            {content.steps.map((step) => (
              <StepRow key={step.n} {...step} />
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
