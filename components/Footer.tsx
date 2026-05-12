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
    <footer className="bg-black text-white" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10 sm:px-10 lg:px-16 lg:pt-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="font-caveat text-2xl text-gs-paper mb-5">
              glow<span className="font-anton lowercase">series.</span>
            </div>
            <p className="font-archivo text-sm leading-relaxed max-w-[28ch]">
              {content.brand.tagline}
            </p>
          </div>

          {/* Link columns */}
          {content.links.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <h2 className="font-archivo text-[11px] font-bold uppercase tracking-widest text-white/50 mb-5">
                {col.heading}
              </h2>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-archivo text-sm text-white/75 hover:text-white transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gs-ink rounded-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 max-w-7xl mx-auto px-6 py-6 sm:px-10 lg:px-16 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <span className="font-mono text-[11px] tracking-wide text-white/50 uppercase">
          {content.copyright}
        </span>
        <div className="flex gap-5 font-mono text-[11px] tracking-wide uppercase">
          {content.legal.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-white/50 hover:text-white transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gs-ink rounded-sm"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
