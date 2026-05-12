"use client";
import { useState, useEffect } from "react";

const linkCls =
  "nav-link-underline font-archivo text-[11px] font-bold uppercase tracking-[.22em] text-white hover:text-gs-grey-2 pb-0.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm [text-shadow:0_1px_4px_rgba(0,0,0,0.8)]";

type NavItem = { label: string; href: string; ariaLabel?: string };

const NAV_LEFT: NavItem[] = [
  { label: "Studio"   },
  { label: "Index"    },
  { label: "Lookbook" },
].map(n => ({ ...n, href: "#" }));

const NAV_RIGHT: NavItem[] = [
  { label: "Search" },
  { label: "Contact" },
  { label: "Book (0)", ariaLabel: "Book — 0 items" },
].map(n => ({ href: "#", ...n }));

export default function Masthead() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[300] border-b transition-all duration-500 ${
        scrolled
          ? "border-white/10 backdrop-blur-xl bg-transparent"
          : "border-transparent bg-black/90"
      }`}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between px-5 py-4 md:grid md:grid-cols-3 md:px-9 md:py-5">

        {/* Left — hidden on mobile, left nav on desktop */}
        <div className="hidden md:flex items-center">
          <nav aria-label="Main navigation" className="flex gap-7 items-center">
            {NAV_LEFT.map((l) => (
              <a key={l.label} href={l.href} className={linkCls}>{l.label}</a>
            ))}
          </nav>
        </div>

        {/* Logo — left on mobile, centred on desktop */}
        <div className="md:flex md:justify-center">
          <a
            href="#"
            aria-label="glowseries — home"
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm"
          >
            <span className="font-caveat text-[22px] tracking-[-0.01em] text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.8)]">
              <span className="logo-glow">glow</span><span className="font-anton lowercase">series.</span>
            </span>
          </a>
        </div>

        {/* Right — right nav on desktop + hamburger on mobile */}
        <div className="flex items-center justify-end">
          <nav aria-label="Secondary navigation" className="hidden md:flex gap-7 items-center">
            {NAV_RIGHT.map((l) => (
              <a
                key={l.label}
                href={l.href}
                aria-label={l.ariaLabel}
                className={linkCls}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Hamburger — rotates to × when open */}
          <button
            aria-expanded={open}
            aria-label={open ? "Close navigation" : "Open navigation"}
            className="flex md:hidden flex-col gap-[5px] p-2 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            onClick={() => setOpen(!open)}
          >
            <span
              aria-hidden="true"
              className={`block w-5 h-px bg-white transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-[6px]" : ""}`}
            />
            <span
              aria-hidden="true"
              className={`block w-5 h-px bg-white transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`}
            />
            <span
              aria-hidden="true"
              className={`block w-5 h-px bg-white transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-[6px]" : ""}`}
            />
          </button>
        </div>

      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          className="md:hidden border-t border-white/10 px-5 py-6 flex flex-col gap-5 bg-gs-ink/95"
        >
          {[...NAV_LEFT, ...NAV_RIGHT].map((l) => (
            <a key={l.label} href={l.href} aria-label={l.ariaLabel} className={linkCls}>{l.label}</a>
          ))}
        </nav>
      )}
    </header>
  );
}
