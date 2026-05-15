import { getNewsletter } from "@/lib/contentful";
import Reveal from "@/components/Reveal";

export default async function Newsletter() {
  const content = await getNewsletter();

  return (
    <section
      id="contact"
      aria-labelledby="newsletter-heading"
      className="border-t border-black/10 bg-gs-paper"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 md:items-end">
          <Reveal>
            <p className="font-caveat text-xl italic tracking-wide text-gs-grey-4 mb-5">
              {content.eyebrow}
            </p>
            <h3
              id="newsletter-heading"
              className="font-anton text-[clamp(40px,5vw,80px)] leading-[0.95] tracking-[-0.005em] uppercase m-0"
            >
              {content.heading}
            </h3>
          </Reveal>

          <Reveal delay={120}>
            <form action="#" method="post" noValidate>
              <label htmlFor="newsletter-email" className="sr-only">
                {content.input.placeholder}
              </label>
              <div className="flex items-stretch border-b border-gs-ink focus-within:border-gs-grey-3 transition-colors duration-150">
                <input
                  id="newsletter-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder={content.input.placeholder}
                  className="flex-1 bg-transparent border-0 font-archivo text-[18px] py-3.5 text-gs-ink placeholder-gs-grey-3 outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="font-archivo font-bold text-[12px] uppercase tracking-[.2em] bg-transparent border-0 px-3 text-gs-ink hover:text-gs-grey-4 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gs-ink focus-visible:ring-offset-2 rounded-sm btn-shimmer"
                >
                  {content.input.submitLabel}
                </button>
              </div>
            </form>
            <p className="mt-3.5 font-mono text-[10.5px] uppercase tracking-[.06em] text-gs-grey-3">
              {content.input.hint}
            </p>

            <div className="mt-10 flex flex-col gap-3">
              <p className="font-archivo text-[11px] font-bold uppercase tracking-[.22em] text-gs-grey-4">
                {content.booking.eyebrow}
              </p>
              <p className="font-archivo text-[14px] leading-[1.7] text-gs-grey-4 max-w-[36ch]">
                {content.booking.body}
              </p>
              <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={content.booking.primaryCta.href}
                  className="btn-shimmer inline-flex items-center justify-center font-archivo text-[12px] font-bold uppercase tracking-[.2em] px-6 py-4 bg-gs-ink text-gs-paper border border-gs-ink rounded-full hover:bg-gs-grey-4 hover:border-gs-grey-4 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gs-ink focus-visible:ring-offset-2 w-full sm:w-auto"
                >
                  {content.booking.primaryCta.label}
                </a>
                <a
                  href={content.booking.secondaryCta.href}
                  className="btn-shimmer inline-flex items-center justify-center font-archivo text-[12px] font-bold uppercase tracking-[.2em] px-6 py-4 border border-gs-ink text-gs-ink rounded-full hover:bg-gs-ink hover:text-gs-paper transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gs-ink focus-visible:ring-offset-2 w-full sm:w-auto"
                >
                  {content.booking.secondaryCta.label}
                </a>
              </div>
              <p className="font-archivo text-[11px] font-semibold uppercase tracking-[.14em] text-gs-grey-3 mt-2">
                {content.booking.meta}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
