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
    <div className="flex flex-col gap-6 p-10 border-r border-white/10 last:border-r-0 max-md:border-r-0 max-md:border-b">
      <div>
        <p className="font-mono text-[10px] text-white uppercase tracking-widest mb-3">
          Tier · {tier}
        </p>
        <p className="font-archivo text-[13px] font-bold uppercase tracking-[.06em] text-white mb-4">
          {name}
        </p>
        <div className="font-anton text-[56px] text-white leading-none">
          {price}
        </div>
        <p className="font-mono text-[10px] text-white uppercase tracking-wide mt-1">
          {sub}
        </p>
      </div>
      <div className="w-6 h-px bg-white/10" />
      <ul className="flex flex-col gap-2.5 flex-1">
        {features.map((f, i) => (
          <li key={i} className="flex gap-2.5 font-archivo text-[13px] text-white leading-relaxed">
            <span className="text-white shrink-0">—</span>
            {f}
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className="block text-center py-3.5 font-archivo text-[11px] font-bold uppercase tracking-[.2em] border border-white/20 text-white/50 rounded-full hover:border-white hover:text-white transition-all duration-200"
      >
        {cta}
      </a>
    </div>
  );
}

export default async function Packages() {
  const content = await getPackages();

  return (
    <section className="bg-black text-white px-16 py-24 border-t border-white/5 max-md:px-6">
      <div className="mb-16 pb-8 border-b border-white/10">
        <h2 className="font-anton text-[clamp(56px,7vw,110px)] leading-[0.92] uppercase text-white mb-4">
          {content.heading}
        </h2>
        <p className="font-archivo text-[16px] leading-relaxed text-white/40 max-w-[36ch]">
          {content.body}
        </p>
      </div>
      <div className="grid grid-cols-3 border border-white/10 max-md:grid-cols-1">
        {content.packages.map(p => (
          <PackageCard key={p.tier} {...p} />
        ))}
      </div>
      <p className="text-center mt-10 font-mono text-[10px] uppercase tracking-widest text-white/20">
        {content.footer}
      </p>
    </section>
  );
}