import { getServices } from "@/lib/contentful";
import Reveal from "@/components/Reveal";

type Service = {
  n: string;
  title: string;
  body: string;
  tags: string[];
};

function ServiceCard({ n, title, body, tags }: Service) {
  return (
    <div className="group p-8 sm:p-11 border-b border-black/10 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 hover:bg-gs-ink transition-colors duration-200">
      <div
        aria-hidden="true"
        className="font-anton text-[48px] leading-none mb-6 group-hover:text-white transition-colors duration-200"
      >
        {n}
      </div>
      <div className="font-archivo text-[15px] font-bold uppercase tracking-[.06em] mb-3.5 leading-tight text-gs-ink group-hover:text-white transition-colors duration-200">
        {title}
      </div>
      <div className="font-archivo text-[14px] leading-[1.7] mb-7 text-gs-grey-4 group-hover:text-white/70 transition-colors duration-200">
        {body}
      </div>
      <ul className="flex flex-col gap-2" aria-label={`${title} includes`}>
        {tags.map((tag) => (
          <li
            key={tag}
            className="font-archivo text-[10px] font-semibold uppercase tracking-[.18em] border-l border-black/30 group-hover:border-white/30 pl-3 text-gs-grey-3 group-hover:text-white/50 transition-colors duration-200"
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default async function Services() {
  const content = await getServices();

  return (
    <section
      aria-labelledby="services-heading"
      className="bg-[#F2F0E9]"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28">
        <Reveal className="grid grid-cols-1 gap-8 items-end mb-14 pb-8 border-b border-black/10 md:grid-cols-2 md:gap-12">
          <h2
            id="services-heading"
            className="font-anton text-[clamp(56px,8vw,120px)] leading-[0.92] tracking-[-0.01em] uppercase m-0"
          >
            {content.heading}
          </h2>
          <p className="font-archivo text-[16px] leading-relaxed text-gs-grey-4 max-w-[38ch] self-end">
            {content.body}
          </p>
        </Reveal>
        <Reveal delay={100} className="grid grid-cols-1 border-t border-black/10 md:grid-cols-3">
          {content.services.map((s) => (
            <ServiceCard key={s.n} {...s} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
