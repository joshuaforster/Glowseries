"use client";
import { useState, useEffect } from "react";

const linkCls =
  "font-archivo text-[11px] font-bold uppercase tracking-[.22em] text-white/80 border-b border-transparent hover:border-white/50 hover:text-white pb-0.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm [text-shadow:0_1px_4px_rgba(0,0,0,0.8)]";

const NAV_LEFT = ["Studio", "Index", "Lookbook"];
const NAV_RIGHT = ["Search", "Contact", "Book (0)"];

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
      {/*
        Mobile:  flex justify-between  → logo left, hamburger right
        Desktop: grid grid-cols-3      → left-nav | centred logo | right-nav
      */}
      <div className="mx-auto max-w-7xl flex items-center justify-between px-5 py-4 md:grid md:grid-cols-3 md:px-9 md:py-5">

        {/* Left — hidden on mobile, left nav on desktop */}
        <div className="hidden md:flex items-center">
          <nav aria-label="Main navigation" className="flex gap-7 items-center">
            {NAV_LEFT.map((l) => (
              <a key={l} href="#" className={linkCls}>{l}</a>
            ))}
          </nav>
        </div>

        {/* Logo — left on mobile (first visible flex item), centred on desktop */}
        <div className="md:flex md:justify-center">
          <a
            href="#"
            aria-label="glowseries — home"
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm"
          >
            <span className="font-caveat text-[22px] tracking-[-0.01em] text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.8)]">
              glow<span className="font-anton lowercase">series.</span>
            </span>
          </a>
        </div>

        {/* Right — right nav on desktop + hamburger on mobile */}
        <div className="flex items-center justify-end">
          <nav aria-label="Secondary navigation" className="hidden md:flex gap-7 items-center">
            {NAV_RIGHT.map((l) => (
              <a key={l} href="#" className={linkCls}>{l}</a>
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
            <a key={l} href="#" className={linkCls}>{l}</a>
          ))}
        </nav>
      )}
    </header>
  );
}
