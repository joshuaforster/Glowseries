import { getHero } from "@/lib/contentful";

export default async function Hero() {
  const content = await getHero();

  return (
    <section
      aria-label="Hero"
      className="relative overflow-hidden text-white min-h-[85vh] max-h-[950px] flex flex-col justify-end bg-gs-grey-2"
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
        style={{ backgroundImage: content.backgroundImage }}
      />

      {/* Overlay */}
      <div aria-hidden="true" className="absolute inset-0 bg-black/25" />

      {/* Scrim */}
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />

      {/* Issue marker */}
      <div
        aria-hidden="true"
        className="absolute right-8 top-1/2 z-20 hidden lg:flex flex-col items-center gap-6 -translate-y-1/2"
      >
        <span className="block w-px h-24 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
        <span
          className="text-white uppercase tracking-[.3em] text-[10px] font-mono select-none"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          {content.sidebarLabel}
        </span>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-7xl px-6 pb-16 md:px-12 md:pb-50">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-16 items-end">

            {/* Left — Headline */}
            <div className="md:col-span-7 lg:col-span-8">
              <div className="flex items-center gap-4 mb-8">
                <span aria-hidden="true" className="block w-12 h-px bg-white/40" />
                <p className="font-caveat text-2xl text-white italic tracking-wide">
                  {content.eyebrow}
                </p>
              </div>
              <p aria-hidden="true" className="font-archivo text-base md:text-xl font-medium tracking-[0.4em] mb-4 text-white uppercase">
                {content.preheading}
              </p>
              <h1 className="font-anton text-[clamp(64px,10vw,160px)] leading-[0.85] uppercase tracking-tighter text-white drop-shadow-2xl">
                {content.heading}
              </h1>
            </div>

            {/* Right — Body & CTAs */}
            <div className="md:col-span-5 lg:col-span-4 flex flex-col gap-8 md:mb-4">
              <p className="font-archivo text-base leading-relaxed text-white max-w-md">
                {content.body}
              </p>
              <div className="flex flex-row gap-3">
                <a
                  href={content.primaryCta.href}
                  className="btn-shimmer inline-flex items-center justify-center whitespace-nowrap font-archivo text-[11px] font-bold uppercase tracking-[.2em] px-6 py-4 bg-gs-paper text-gs-ink border border-gs-paper rounded-full hover:bg-gs-grey-1 hover:border-gs-grey-1 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  {content.primaryCta.label}
                </a>
                <a
                  href={content.secondaryCta.href}
                  className="btn-shimmer inline-flex items-center justify-center whitespace-nowrap font-archivo text-[11px] font-bold uppercase tracking-[.2em] px-6 py-4 border border-white text-white bg-transparent rounded-full hover:bg-white hover:text-black transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  {content.secondaryCta.label}
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}