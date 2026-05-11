import Marquee from "react-fast-marquee";
import { getMarquee } from "@/lib/contentful";


export default async function MarqueeSection() {
  const { items } = await getMarquee()
  const doubled = [...items, ...items];
  return (
    <div className="bg-[#0A0A0A] py-3.5 overflow-hidden border-y border-white/80">
      <div className="flex whitespace-nowrap">
        <Marquee speed={30}>
          {doubled.map((item, i) => (
            <span key={i} className="flex items-center shrink-0">
              <span className="font-archivo text-[11px] font-semibold uppercase tracking-[.22em] text-white/80 px-8">
                {item}
              </span>
              <span className="text-white/80 px-1">·</span>
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
