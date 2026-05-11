"use client";
import { useState } from "react";

const linkCls = "text-[11px] font-bold uppercase tracking-[.22em] text-gs-ink border-b border-transparent hover:border-gs-ink pb-0.5 transition-colors font-archivo";

const NAV_LEFT = ["Studio", "Index", "Lookbook"];
const NAV_RIGHT = ["Search", "Contact", "Book (0)"];
export default function Masthead() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-[300] bg-[#F2F0E9] border-b border-black/10" style={{ backdropFilter: "blur(12px)" }}>
      <div className="grid grid-cols-3 items-center px-9 py-5 max-md:grid-cols-[1fr_auto_auto] max-md:px-5 max-md:py-4">
        <nav className="flex gap-7 items-center max-md:hidden">
          {NAV_LEFT.map(l => <a key={l} href="#" className={linkCls}>{l}</a>)}
        </nav>
        <a href="#" className="flex justify-center">
          <span className="font-caveat text-[22px] tracking-[-0.01em]">
            glow<span className="font-anton lowercase">series.</span>
          </span>
        </a>
        <nav className="flex gap-7 items-center justify-end max-md:hidden">
          {NAV_RIGHT.map(l => <a key={l} href="#" className={linkCls}>{l}</a>)}
        </nav>
        <button className="hidden max-md:flex flex-col gap-[5px] p-1 ml-2" onClick={() => setOpen(!open)}>
          <span className="block w-5 h-px bg-gs-ink" />
          <span className="block w-5 h-px bg-gs-ink" />
          <span className="block w-5 h-px bg-gs-ink" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-black/10 px-5 py-6 flex flex-col gap-5" style={{ background: "rgba(244,241,234,.98)" }}>
          {[...NAV_LEFT, ...NAV_RIGHT].map(l => <a key={l} href="#" className={linkCls}>{l}</a>)}
        </div>
      )}
    </header>
  );
}
