
import { getNewsletter } from "@/lib/contentful";

export default async function Newsletter() {
  const content = await getNewsletter();

  return (
    <section
      id="contact"
      className="px-16 py-24 bg-white grid grid-cols-2 gap-16 items-end border-t border-black/10 max-md:grid-cols-1 max-md:gap-8 max-md:px-6"
    >
      <div>
        <p className="font-archivo text-[11px] font-bold uppercase tracking-[.22em] text-gs-grey-4 mb-5">
          {content.eyebrow}
        </p>
        <h3 className="font-anton text-[clamp(40px,5vw,80px)] leading-[0.95] tracking-[-0.005em] uppercase m-0">
          {content.heading}
        </h3>
      </div>
      <div>
        <div className="flex items-stretch border-b border-gs-ink">
          <input
            type="email"
            placeholder={content.input.placeholder}
            className="flex-1 bg-transparent border-0 font-archivo text-[18px] py-3.5 text-gs-ink placeholder-gs-grey-3 outline-none"
          />
          <button className="font-archivo font-bold text-[12px] uppercase tracking-[.2em] bg-transparent border-0 px-3 text-gs-ink">
            {content.input.submitLabel}
          </button>
        </div>
        <p className="mt-3.5 font-mono text-[10.5px] uppercase tracking-[.06em] text-gs-grey-3">
          {content.input.hint}
        </p>
        <div className="mt-8 flex flex-col gap-3">
          <p className="font-archivo text-[11px] font-bold uppercase tracking-[.22em] text-gs-grey-4">
            {content.booking.eyebrow}
          </p>
          <p className="font-archivo text-[14px] leading-[1.7] text-gs-grey-4 max-w-[36ch]">
            {content.booking.body}
          </p>
          <div className="mt-2 flex gap-3 flex-wrap">
            <a
              href={content.booking.primaryCta.href}
              className="inline-flex font-archivo text-[12px] font-bold uppercase tracking-[.2em] px-6 py-4 bg-gs-ink text-gs-paper border border-gs-ink rounded-full hover:opacity-80 transition-opacity"
            >
              {content.booking.primaryCta.label}
            </a>
            <a
              href={content.booking.secondaryCta.href}
              className="inline-flex font-archivo text-[12px] font-bold uppercase tracking-[.2em] px-6 py-4 border border-gs-ink text-gs-ink rounded-full hover:opacity-80 transition-opacity"
            >
              {content.booking.secondaryCta.label}
            </a>
          </div>
          <p className="font-archivo text-[11px] font-semibold uppercase tracking-[.14em] text-gs-grey-3 mt-2">
            {content.booking.meta}
          </p>
        </div>
      </div>
    </section>
  );
}