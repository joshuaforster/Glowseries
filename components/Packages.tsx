import { getPackages } from "@/lib/contentful";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";

type Package = {
  tier: string;
  name: string;
  price: string;
  sub: string;
  features: string[];
  cta: string;
};

function PackageCard({
  tier,
  name,
  price,
  sub,
  features,
  cta,
  featured,
}: Package & { featured?: boolean }) {
  return (
    <div
      className={`card-lift relative flex flex-col gap-8 px-8 py-12 sm:px-10 sm:py-14 ${
        featured ? "card-featured-pulse bg-gs-paper text-gs-ink" : "bg-transparent text-white"
      }`}
    >
      {featured && (
        <span className="absolute top-7 right-7 font-archivo text-[9px] font-bold uppercase tracking-[.3em] bg-gs-ink text-gs-paper px-3 py-1.5 rounded-full">
          Recommended
        </span>
      )}

      {/* Tier + name */}
      <div>
        <p className={`font-caveat text-2xl italic mb-1.5 ${featured ? "text-gs-grey-4" : "text-gs-grey-2"}`}>
          {tier}
        </p>
        <p className="font-archivo text-[14px] font-bold uppercase tracking-[.1em]">
          {name}
        </p>
      </div>

      {/* Price */}
      <div>
        <div className="font-anton text-[clamp(32px,5vw,52px)] leading-[0.88] mb-2" aria-label={price}>
          <span aria-hidden="true">{price}</span>
        </div>
        <p className={`font-archivo text-[11px] uppercase tracking-[.18em] ${featured ? "text-gs-grey-4" : "text-gs-grey-2"}`}>
          {sub}
        </p>
      </div>

      <div aria-hidden="true" className={`w-full h-px ${featured ? "bg-gs-grey-1" : "bg-white/20"}`} />

      {/* Features */}
      <ul className="flex flex-col gap-4 flex-1" aria-label={`${name} features`}>
        {features.map((f, i) => (
          <li
            key={i}
            className={`flex gap-3 font-archivo text-[14px] leading-relaxed ${featured ? "text-gs-grey-4" : "text-white"}`}
          >
            <span aria-hidden="true" className={`shrink-0 ${featured ? "text-gs-grey-3" : "text-gs-grey-2"}`}>—</span>
            {f}
          </li>
        ))}
      </ul>

      <Button
        variant={featured ? "primary" : "secondary"}
        theme={featured ? "light" : "dark"}
        href="#contact"
        className="w-full justify-center"
      >
        {cta}
      </Button>
    </div>
  );
}

export default async function Packages() {
  const content = await getPackages();

  return (
    <section
      id="packages"
      aria-labelledby="packages-heading"
      data-theme="dark"
      className="bg-black text-white border-t border-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28">

        <Reveal className="mb-16 pb-10 border-b border-white flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2
            id="packages-heading"
            className="font-anton text-[clamp(56px,7vw,110px)] leading-[0.92] uppercase text-white"
          >
            {content.heading}
          </h2>
          <p className="font-archivo text-[16px] leading-relaxed text-gs-grey-2 max-w-[36ch] md:pb-3">
            {content.body}
          </p>
        </Reveal>

        <Reveal delay={100} className="grid grid-cols-1 md:grid-cols-3 border border-white divide-y divide-white/10 md:divide-y-0 md:divide-x md:divide-white">
          {content.packages.map((p, i) => (
            <PackageCard key={p.tier} {...p} featured={i === 1} />
          ))}
        </Reveal>

        <p className="text-center mt-12 font-archivo text-[11px] uppercase tracking-widest text-gs-grey-3">
          {content.footer}
        </p>
      </div>
    </section>
  );
}
