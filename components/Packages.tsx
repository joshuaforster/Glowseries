import { getPackages } from "@/lib/contentful";

type Package = {
  tier: string;
  name: string;
  price: string;
  sub: string;
  features: string[];
  cta: string;
};

function PackageCard({ tier, name, price, sub, features, cta }: Package) {
  return (
    <div className="flex flex-col gap-6 p-8 sm:p-10 border-b border-white/10 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0">
      <div>
        <p className="font-mono text-[10px] text-white/50 uppercase tracking-widest mb-3">
          Tier · {tier}
        </p>
        <p className="font-archivo text-[13px] font-bold uppercase tracking-[.06em] text-white mb-4">
          {name}
        </p>
        <div className="font-anton text-[56px] text-white leading-none">
          {price}
        </div>
        <p className="font-mono text-[10px] text-white/50 uppercase tracking-wide mt-1">
          {sub}
        </p>
      </div>
      <div className="w-6 h-px bg-white/10" aria-hidden="true" />
      <ul className="flex flex-col gap-2.5 flex-1" aria-label={`${name} features`}>
        {features.map((f, i) => (
          <li key={i} className="flex gap-2.5 font-archivo text-[13px] text-white/80 leading-relaxed">
            <span aria-hidden="true" className="text-white/40 shrink-0">—</span>
            {f}
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className="block text-center py-3.5 font-archivo text-[11px] font-bold uppercase tracking-[.2em] border border-white/20 text-white/50 rounded-full hover:border-white hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      >
        {cta}
      </a>
    </div>
  );
}

export default async function Packages() {
  const content = await getPackages();

  return (
    <section
      aria-labelledby="packages-heading"
      className="bg-black text-white border-t border-white/5"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28">
        <div className="mb-16 pb-8 border-b border-white/10">
          <h2
            id="packages-heading"
            className="font-anton text-[clamp(56px,7vw,110px)] leading-[0.92] uppercase text-white mb-4"
          >
            {content.heading}
          </h2>
          <p className="font-archivo text-[16px] leading-relaxed text-white/40 max-w-[36ch]">
            {content.body}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 border border-white/10">
          {content.packages.map((p) => (
            <PackageCard key={p.tier} {...p} />
          ))}
        </div>
        <p className="text-center mt-10 font-mono text-[10px] uppercase tracking-widest text-white/20">
          {content.footer}
        </p>
      </div>
    </section>
  );
}
