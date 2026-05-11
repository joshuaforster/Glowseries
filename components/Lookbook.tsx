import Reveal from "./Reveal";

const content = {
  image: {
    src: "url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
    caption: "Bouclé · 01",
  },
  eyebrow: "Lookbook · Issue 01",
  preheading: "the space",
  heading: "sells the experience now.",
  body: "Every client who walks in mentions it. One transformation. Raised prices the following month.",
  cta: { label: "View the lookbook", href: "#packages" },
};

export default function Lookbook() {
  return (
    <Reveal>
      <section className="grid grid-cols-[1.4fr_1fr] min-h-[80vh] border-t border-black/10 max-md:grid-cols-1 bg-[#F2F0E9]">
        <div className="relative bg-white overflow-hidden bg-gs-grey-2 max-md:min-h-[60vh]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: content.image.src }}
          />
          <p className="absolute right-8 bottom-8 font-archivo text-[12px] font-bold uppercase tracking-[.32em] text-gs-ink">
            {content.image.caption}
          </p>
        </div>
        <div className="px-14 py-16 flex flex-col gap-7 bg-gs-paper justify-center max-md:px-6 max-md:py-12">
          <p className="font-archivo text-[11px] font-bold uppercase tracking-[.22em] text-gs-grey-4">
            {content.eyebrow}
          </p>
          <div className="font-caveat text-[48px] leading-[0.75] text-gs-ink">
            {content.preheading}
          </div>
          <h3 className="font-anton text-[clamp(40px,5vw,80px)] leading-[0.92] tracking-[-0.01em] uppercase m-0">
            {content.heading}
          </h3>
          <p className="font-archivo text-[16px] leading-relaxed text-gs-grey-4 max-w-[36ch]">
            {content.body}
          </p>
          <div>
            <a
              href={content.cta.href}
              className="inline-flex font-archivo text-[12px] font-bold uppercase tracking-[.2em] px-6 py-4 bg-gs-ink text-gs-paper border border-gs-ink rounded-full hover:opacity-80 transition-opacity"
            >
              {content.cta.label}
            </a>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
