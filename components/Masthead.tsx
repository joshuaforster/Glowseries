"use client";
import { useState, useEffect, useRef } from "react";

const NAV_LEFT = [
  { label: "Studio",   href: "#studio"   },
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
];

const NAV_RIGHT = [
  { label: "Work",    href: "#work"    },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const ALL_NAV = [...NAV_LEFT, ...NAV_RIGHT];

const linkCls =
  "nav-link-underline font-archivo text-[11px] font-bold uppercase tracking-[.22em] text-white hover:text-gs-grey-2 pb-0.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm [text-shadow:0_1px_4px_rgba(0,0,0,0.8)]";

function smoothScrollTo(id: string) {
  const el = document.getElementById(id.replace("#", ""));
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Masthead() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const scrollTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      setScrolling(true);
      if (scrollTimer.current) clearTimeout(scrollTimer.current);
      scrollTimer.current = setTimeout(() => setScrolling(false), 1200);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (scrollTimer.current) clearTimeout(scrollTimer.current);
    };
  }, []);

  const transparent = scrolled && scrolling;

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    smoothScrollTo(href);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[300] border-b transition-all duration-700 ${
        transparent
          ? "border-white/10 backdrop-blur-xl bg-transparent"
          : "border-transparent bg-black/90"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 py-4 md:px-9 md:py-5 flex items-center justify-between md:grid md:grid-cols-3">

        {/* Left nav — desktop */}
        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-7">
          {NAV_LEFT.map((l) => (
            <a key={l.label} href={l.href} className={linkCls} onClick={(e) => handleNav(e, l.href)}>
              {l.label}
            </a>
          ))}
        </nav>

        {/* Logo — left on mobile, centred on desktop */}
        <div className="md:flex md:justify-center">
          <a
            href="#"
            aria-label="glowseries — home"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm"
          >
            <span className="font-caveat text-[22px] tracking-[-0.01em] text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.8)]">
              <span className="logo-glow">glow</span><span className="font-anton lowercase">series.</span>
            </span>
          </a>
        </div>

        {/* Right nav + hamburger */}
        <div className="flex items-center justify-end">
          <nav aria-label="Secondary navigation" className="hidden md:flex items-center gap-7">
            {NAV_RIGHT.map((l) => (
              <a key={l.label} href={l.href} className={linkCls} onClick={(e) => handleNav(e, l.href)}>
                {l.label}
              </a>
            ))}
          </nav>

          {/* Hamburger */}
          <button
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close navigation" : "Open navigation"}
            className="flex md:hidden flex-col gap-[5px] p-2 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            onClick={() => setOpen(!open)}
          >
            <span aria-hidden="true" className={`block w-5 h-px bg-white transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-[6px]" : ""}`} />
            <span aria-hidden="true" className={`block w-5 h-px bg-white transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`} />
            <span aria-hidden="true" className={`block w-5 h-px bg-white transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-[6px]" : ""}`} />
          </button>
        </div>

      </div>

      {/* Mobile menu */}
      <nav
        id="mobile-menu"
        aria-label="Mobile navigation"
        aria-hidden={!open}
        className={`md:hidden border-t border-white/10 bg-gs-ink/95 overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-5 py-5 gap-1" role="list">
          {ALL_NAV.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className={`${linkCls} block py-3 border-b border-white/10 last:border-0`}
                onClick={(e) => handleNav(e, l.href)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
