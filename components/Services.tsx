import { getServices } from "@/lib/contentful";

type Service = {
  n: string;
  title: string;
  body: string;
  tags: string[];
};

function ServiceCard({ n, title, body, tags }: Service) {
  return (
    <div className="p-11 border-r border-black/10 last:border-r-0 max-md:border-r-0 max-md:border-b max-md:last:border-b-0 hover:bg-black hover:text-white">
      <div className="font-anton text-[48px] leading-none mb-6">{n}</div>
      <div className="font-archivo text-[15px] font-bold uppercase tracking-[.06em] mb-3.5 leading-tight text-gs-ink">
        {title}
      </div>
      <div className="font-archivo text-[14px] leading-[1.7] mb-7 text-gs-grey-4">
        {body}
      </div>
      <div className="flex flex-col gap-2">
        {tags.map((tag) => (
          <div
            key={tag}
            className="font-archivo text-[10px] font-semibold uppercase tracking-[.18em] border-l border-black/30 pl-3 text-gs-grey-3"
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
}

export default async function Services() {
  const content = await getServices();

  return (
    <section className="px-16 bg-[#F2F0E9] py-24 max-md:px-6">
      <div className="grid grid-cols-2 gap-12 items-end mb-14 pb-8 border-b border-black/10 max-md:grid-cols-1 max-md:gap-7">
        <h2 className="font-anton text-[clamp(56px,8vw,120px)] leading-[0.92] tracking-[-0.01em] uppercase m-0">
          {content.heading}
        </h2>
        <p className="font-archivo text-[16px] leading-relaxed text-gs-grey-4 max-w-[38ch] self-end">
          {content.body}
        </p>
      </div>
      <div className="grid grid-cols-3 border-t border-black/10 max-md:grid-cols-1">
        {content.services.map((s) => (
          <ServiceCard key={s.n} {...s} />
        ))}
      </div>
    </section>
  );
}
