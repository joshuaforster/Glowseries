import { getPortfolio } from "@/lib/contentful";
import Reveal from "@/components/Reveal";

type PortfolioItem = {
  n: string;
  title: string;
  price: string;
  sub: string;
  badge: string;
  img: string;
};

function PortfolioCard({ n, title, price, sub, badge, img }: PortfolioItem) {
  return (
    <div className="flex flex-col gap-4 group">
      <div className="aspect-[3/4] bg-gs-grey-1 relative overflow-hidden">
        {img && (
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[600ms] group-hover:scale-[1.02]"
            style={{ backgroundImage: `url('${img}')` }}
          />
        )}
        <div
          aria-hidden="true"
          className="absolute top-4 left-4 font-archivo text-[10px] font-bold uppercase tracking-[.2em] bg-gs-paper text-gs-ink px-3 py-1.5 rounded-full"
        >
          {badge}
        </div>
        <div
          aria-hidden="true"
          className="absolute left-4 bottom-4 font-anton text-[36px] leading-[0.95] uppercase text-gs-paper"
        >
          {n}.
        </div>
      </div>
      <div className="flex justify-between items-baseline gap-3 px-1">
        <p className="font-archivo text-[13px] font-bold uppercase tracking-[.06em] text-gs-ink">
          {title}
        </p>
        <p className="font-mono text-[12px] tracking-[.04em] text-gs-ink shrink-0">
          {price}
        </p>
      </div>
      <p className="font-archivo text-[11px] uppercase tracking-[.18em] text-gs-grey-3 px-1">
        {sub}
      </p>
    </div>
  );
}

export default async function Portfolio() {
  const content = await getPortfolio();

  return (
    <section
      aria-labelledby="portfolio-heading"
      className="border-t border-black/10 bg-[#F3F1EA]"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28">
        <Reveal className="mb-14">
          <p className="font-caveat text-xl italic tracking-wide text-gs-grey-4 mb-4">
            {content.eyebrow}
          </p>
          <h2
            id="portfolio-heading"
            className="font-anton text-[clamp(56px,8vw,128px)] leading-[0.92] tracking-[-0.01em] uppercase m-0"
          >
            {content.heading}
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <ul
            role="list"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10"
          >
            {content.portfolio.map((item) => (
              <li key={item.n}>
                <PortfolioCard {...item} />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
