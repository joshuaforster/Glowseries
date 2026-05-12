interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  heading: string;
  links: FooterLink[];
}

const content = {
  brand: {
    tagline:
      "Challenging the norm. Creating your identity into a limitless space. Interior design. Venetian plaster. Statement furniture. Norwich, UK.",
  },
  copyright: `© ${new Date().getFullYear()} glowseries. · Norwich, UK · glowseries.com`,
  legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
  ],
  links: [
    {
      heading: "Studio",
      links: [
        { label: "Interior design", href: "#" },
        { label: "Venetian plaster", href: "#" },
        { label: "Statement furniture", href: "#" },
        { label: "Full transformation", href: "#" },
      ],
    },
    {
      heading: "Editorial",
      links: [
        { label: "Issue 01 — Identity", href: "#" },
        { label: "Issue 02 — Surfaces", href: "#" },
        { label: "Archive", href: "#" },
        { label: "Newsletter", href: "#" },
      ],
    },
    {
      heading: "Connect",
      links: [
        { label: "Instagram", href: "#" },
        { label: "Pinterest", href: "#" },
        { label: "Etsy shop", href: "#" },
        { label: "Contact", href: "#" },
      ],
    },
  ] as FooterColumn[],
};

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="px-8 pt-16 pb-10 md:px-16 md:pt-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="font-caveat text-2xl text-gs-paper mb-5">
              glow<span className="font-anton lowercase">series.</span>
            </div>
            <p className="font-archivo text-sm leading-relaxed text-white/40 max-w-[28ch]">
              {content.brand.tagline}
            </p>
          </div>
          {content.links.map((col) => (
            <div key={col.heading}>
              <h5 className="font-archivo text-[11px] font-bold uppercase tracking-widest text-white/40 mb-5">
                {col.heading}
              </h5>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-archivo text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10 px-8 py-6 md:px-16 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <span className="font-mono text-[11px] tracking-wide text-white/30 uppercase">
          {content.copyright}
        </span>
        <div className="flex gap-4 font-mono text-[11px] tracking-wide text-white/30 uppercase">
          {content.legal.map((item, i) => (
            <span key={item.label} className="flex items-center gap-4">
              {i > 0 && <span className="text-white/20">·</span>}
              <a
                href={item.href}
                className="hover:text-white/60 transition-colors"
              >
                {item.label}
              </a>
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
