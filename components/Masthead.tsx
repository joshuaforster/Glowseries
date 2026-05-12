"use client";
import { useState } from "react";

const linkCls =
  "font-archivo text-[11px] font-bold uppercase tracking-[.22em] text-gs-ink border-b border-transparent hover:border-gs-ink pb-0.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gs-ink focus-visible:ring-offset-2 rounded-sm";

const NAV_LEFT = ["Studio", "Index", "Lookbook"];
const NAV_RIGHT = ["Search", "Contact", "Book (0)"];

export default function Masthead() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-[300] bg-gs-paper/95 border-b border-black/10 backdrop-blur-md"
    >
      <div className="mx-auto max-w-7xl grid grid-cols-[1fr_auto_auto] items-center px-5 py-4 md:grid-cols-3 md:px-9 md:py-5">
        <nav aria-label="Main navigation" className="hidden md:flex gap-7 items-center">
          {NAV_LEFT.map((l) => (
            <a key={l} href="#" className={linkCls}>
              {l}
            </a>
          ))}
        </nav>

        <a
          href="#"
          aria-label="glowseries — home"
          className="flex justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gs-ink focus-visible:ring-offset-2 rounded-sm"
        >
          <span className="font-caveat text-[22px] tracking-[-0.01em]">
            glow<span className="font-anton lowercase">series.</span>
          </span>
        </a>

        <nav aria-label="Secondary navigation" className="hidden md:flex gap-7 items-center justify-end">
          {NAV_RIGHT.map((l) => (
            <a key={l} href="#" className={linkCls}>
              {l}
            </a>
          ))}
        </nav>

        <button
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close navigation" : "Open navigation"}
          className="flex md:hidden flex-col gap-[5px] p-2 ml-2 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gs-ink focus-visible:ring-offset-2"
          onClick={() => setOpen(!open)}
        >
          <span aria-hidden="true" className="block w-5 h-px bg-gs-ink" />
          <span aria-hidden="true" className="block w-5 h-px bg-gs-ink" />
          <span aria-hidden="true" className="block w-5 h-px bg-gs-ink" />
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          className="md:hidden border-t border-black/10 px-5 py-6 flex flex-col gap-5 bg-gs-paper/[.98]"
        >
          {[...NAV_LEFT, ...NAV_RIGHT].map((l) => (
            <a key={l} href="#" className={linkCls}>
              {l}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
