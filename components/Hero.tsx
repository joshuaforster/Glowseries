import { getHero } from "@/lib/contentful";


export default async function Hero() {
  const content = await getHero();
  return (
    <section className="relative overflow-hidden h-[70vh]">
      {/* Background */}
      <div
        className="absolute inset-0 bg-gs-grey-2 bg-cover bg-center"
        style={{ backgroundImage: content.backgroundImage }}
      />

      {/* Scrim — vertical + subtle left vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(to right, rgba(0,0,0,0.38) 0%, rgba(0,0,0,0) 55%),
            linear-gradient(180deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.52) 60%, rgba(0,0,0,0.92) 100%)
          `,
        }}
      />

      {/* Issue marker — vertical text, right edge */}
      <div
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

      {/* Content grid */}
      <div className="relative z-10 grid grid-cols-2 gap-16 px-16 pt-20 pb-20 items-end max-md:grid-cols-1 max-md:gap-10 max-md:px-6 max-md:pt-14 max-md:pb-12">
        {/* Left — headline */}
        <div className="text-gs-paper">
          {/* Eyebrow with decorative rule */}
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-8 h-px bg-white/40" />
            <p className="font-archivo text-[11px] font-bold uppercase tracking-[.22em] text-white">
              {content.eyebrow}
            </p>
          </div>

          <div className="font-caveat text-[clamp(42px,5.2vw,88px)] leading-[0.78] mb-1 text-white/90">
            {content.preheading}
          </div>

          <h1 className="font-anton text-[clamp(80px,11vw,180px)] leading-[0.86] uppercase tracking-[-0.01em] text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)]">
            {content.heading}
          </h1>
        </div>

        {/* Right — body + CTAs */}
        <div className="flex flex-col gap-6 max-w-[380px] justify-self-end max-md:justify-self-start max-md:max-w-none">
          {/* Thin accent line at top */}
          <div className="w-8 h-px bg-white/30 max-md:hidden" />

          <p className="font-archivo text-[16.5px] leading-[1.7] text-white tracking-[0.01em]">
            {content.body}
          </p>

          <div className="flex gap-3 flex-wrap">
            {/* Primary CTA — warm cream fill */}
            <a
              href={content.primaryCta.href}
              className="inline-flex border items-center font-archivo text-[11px] font-bold uppercase tracking-[.2em] px-7 py-[14px] bg-gs-paper text-gs-ink rounded-full transition-all duration-200 bg-white hover:scale-[1.02] hover:shadow-lg"
            >
              {content.primaryCta.label}
            </a>

            {/* Secondary CTA — glass/frosted */}
            <a
              href={content.secondaryCta.href}
              className="inline-flex items-center font-archivo text-[11px] font-bold uppercase tracking-[.2em] px-7 py-[14px] border border-white/90 text-white rounded-full backdrop-blur-sm bg-white/5 transition-all duration-200 hover:bg-white/15 hover:border-white/60"
            >
              {content.secondaryCta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}