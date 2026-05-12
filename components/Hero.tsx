import { getHero } from "@/lib/contentful";

export default async function Hero() {
  const content = await getHero();

  return (
    <section aria-label="Hero" className="relative overflow-hidden h-[70vh]">
      {/* Background */}
      <div
        role="img"
        aria-label={content.heading}
        className="absolute inset-0 bg-gs-grey-2 bg-cover bg-center"
        style={{ backgroundImage: content.backgroundImage }}
      />

      {/* Scrim */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(to right, rgba(0,0,0,0.38) 0%, rgba(0,0,0,0) 55%),
            linear-gradient(180deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.52) 60%, rgba(0,0,0,0.92) 100%)
          `,
        }}
      />

      {/* Issue marker — stays pinned to viewport edge on all screen sizes */}
      <div
        aria-hidden="true"
        className="absolute right-5 top-1/2 z-20 hidden lg:flex flex-col items-center gap-3.5"
        style={{ transform: "translateY(-50%)" }}
      >
        <span className="block w-px h-16 bg-white/20" />
        <span
          className="text-white uppercase tracking-[.18em] text-[10.5px] font-mono"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          {content.sidebarLabel}
        </span>
      </div>

      {/* Content — constrained to max-w-7xl */}
      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 pt-14 pb-12 md:px-9 md:pt-20 md:pb-20">
        <div className="grid grid-cols-1 gap-10 items-end md:grid-cols-2 md:gap-16">
          {/* Left — headline */}
          <div className="text-gs-paper">
            <div className="flex items-center gap-3 mb-5">
              <span aria-hidden="true" className="block w-8 h-px bg-white/40" />
              <p className="font-archivo text-[11px] font-bold uppercase tracking-[.22em] text-white">
                {content.eyebrow}
              </p>
            </div>
            <div className="font-caveat text-[clamp(42px,5.2vw,88px)] leading-[0.78] mb-1 text-white/90">
              {content.preheading}
            </div>
            <h1 className="font-anton text-[clamp(80px,11vw,180px)] leading-[0.86] uppercase tracking-[-0.01em] text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)] max-w-[6ch]">
              {content.heading}
            </h1>
          </div>

          {/* Right — body + CTAs */}
          <div className="flex flex-col gap-6 max-w-[380px] md:justify-self-end">
            <div aria-hidden="true" className="w-8 h-px bg-white/30 hidden md:block" />
            <p className="font-archivo text-[16.5px] leading-[1.7] text-white tracking-[0.01em]">
              {content.body}
            </p>
            <div className="flex gap-3 flex-wrap">
              <a
                href={content.primaryCta.href}
                className="inline-flex items-center font-archivo text-[12px] font-bold uppercase tracking-[.2em] px-7 py-[14px] bg-white text-gs-ink rounded-full transition-all duration-200 hover:scale-[1.02] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                {content.primaryCta.label}
              </a>
              <a
                href={content.secondaryCta.href}
                className="inline-flex items-center font-archivo text-[12px] font-bold uppercase tracking-[.2em] px-7 py-[14px] border border-white/90 text-white rounded-full backdrop-blur-sm bg-white/5 transition-all duration-200 hover:bg-white/15 hover:border-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                {content.secondaryCta.label}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
