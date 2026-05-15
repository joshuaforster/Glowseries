"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

type GalleryItem = {
  n: string;
  title: string;
  subtitle: string;
  body: string;
  category: string;
  image: string;
  imageAlt: string;
};

type Props = {
  eyebrow: string;
  heading: string;
  items: GalleryItem[];
};

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
        else if (!prefersReduced && entry.boundingClientRect.top > 0) setVisible(false);
      },
      {
        threshold: 0.08,
        rootMargin: prefersReduced ? "200% 0px 200% 0px" : "0px 0px -48px 0px",
      }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return [ref, visible] as const;
}

const easing = "cubic-bezier(0.22,1,0.36,1)";

const revealStyle = (visible: boolean, delay = 0): React.CSSProperties => ({
  opacity: visible ? 1 : 0,
  transform: visible ? "none" : "translateY(24px)",
  transition: `opacity 0.65s ${easing} ${delay}ms, transform 0.65s ${easing} ${delay}ms`,
});

export default function GalleryClient({ eyebrow, heading, items }: Props) {
  const [current, setCurrent] = useState(0);
  const [headerRef, headerVisible] = useReveal();
  const [sliderRef, sliderVisible] = useReveal();
  const [dotsRef, dotsVisible] = useReveal();

  const prev = () => setCurrent((c) => (c - 1 + items.length) % items.length);
  const next = () => setCurrent((c) => (c + 1) % items.length);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") setCurrent((c) => (c - 1 + items.length) % items.length);
      if (e.key === "ArrowRight") setCurrent((c) => (c + 1) % items.length);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [items.length]);

  return (
    <section className="border-t border-black/10 bg-gs-paper-2">
      {/* Header */}
      <div className="border-b border-black/10">
        <div
          ref={headerRef}
          className="mx-auto max-w-7xl px-6 py-6 sm:px-10 lg:px-16 flex items-end justify-between"
          style={revealStyle(headerVisible)}
        >
          <div>
            <p className="font-archivo text-[11px] font-bold uppercase tracking-[.22em] text-gs-grey-4">
              {eyebrow}
            </p>
            <h2 className="font-anton text-[clamp(44px,6vw,80px)] leading-[0.92] tracking-[-0.01em] uppercase mt-1">
              {heading}
            </h2>
          </div>
          <p className="font-archivo text-[11px] font-bold uppercase tracking-[.22em] text-gs-grey-3 pb-1">
            {String(current + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
          </p>
        </div>
      </div>

      {/* Slider — crossfade */}
      <div
        ref={sliderRef}
        className="relative h-[40vh] md:h-[65vh] overflow-hidden"
        style={revealStyle(sliderVisible, 120)}
      >
        {items.map((item, i) => {
          const active = i === current;
          return (
            <div
              key={item.n}
              className="absolute inset-0 flex"
              style={{
                opacity: active ? 1 : 0,
                transition: `opacity 0.85s ${easing}`,
                pointerEvents: active ? "auto" : "none",
                zIndex: active ? 1 : 0,
              }}
            >
              {/* Left: text panel — desktop only */}
              <div
                className="hidden md:flex flex-col justify-between pl-10 pr-10 py-16 lg:pl-16 lg:py-20 xl:pl-[calc((100vw-80rem)/2+4rem)] w-[38%] border-r border-black/10 bg-gs-paper-2"
                style={{
                  opacity: active ? 1 : 0,
                  transform: active ? "none" : "translateY(16px)",
                  transition: active
                    ? `opacity 0.65s ${easing} 360ms, transform 0.65s ${easing} 360ms`
                    : "none",
                }}
              >
                <div>
                  <p className="font-archivo text-[11px] font-bold uppercase tracking-[.22em] text-gs-grey-4 mb-8">
                    {item.category}
                  </p>
                  <p className="font-anton text-[clamp(72px,9vw,120px)] leading-none text-gs-ink/10 select-none">
                    {String(item.n).padStart(2, "0")}°
                  </p>
                  <p className="font-anton text-[clamp(24px,3vw,44px)] leading-[0.92] tracking-[-0.01em] uppercase -mt-2">
                    {item.title}
                  </p>
                  <p className="font-caveat text-xl italic text-gs-grey-4 mt-5 leading-snug">
                    {item.subtitle}
                  </p>
                </div>

                <div className="space-y-3">
                  <p className="font-archivo text-[11px] font-bold uppercase tracking-[.22em] text-gs-grey-3">
                    Info
                  </p>
                  <p className="font-archivo text-[14px] leading-relaxed text-gs-grey-4 max-w-[30ch]">
                    {item.body}
                  </p>
                  <p className="font-archivo text-[10px] font-semibold uppercase tracking-[.18em] text-gs-grey-3 border-t border-black/10 pt-3">
                    {String(item.n).padStart(2, "0")}° | {item.title}
                  </p>
                </div>
              </div>

              {/* Image — full width on mobile, flex-1 on desktop */}
              <div className="flex-1 relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          );
        })}

        {/* Arrows */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-gs-paper-2/90 border border-black/20 hover:bg-gs-ink hover:text-white hover:border-gs-ink transition-colors duration-300 font-archivo text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gs-ink"
        >
          ←
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-gs-paper-2/90 border border-black/20 hover:bg-gs-ink hover:text-white hover:border-gs-ink transition-colors duration-300 font-archivo text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gs-ink"
        >
          →
        </button>
      </div>

      {/* Mobile text panel — below image, hidden on desktop */}
      <div
        className="md:hidden bg-gs-paper-2 px-6 py-7 border-b border-black/10"
        aria-live="polite"
        aria-atomic="true"
      >
        <p className="font-archivo text-[10px] font-bold uppercase tracking-[.22em] text-gs-grey-4 mb-3">
          {items[current].category}
        </p>
        <p className="font-anton text-[clamp(28px,8vw,40px)] leading-[0.92] tracking-[-0.01em] uppercase mb-2">
          {items[current].title}
        </p>
        <p className="font-caveat text-lg italic text-gs-grey-4 mb-4 leading-snug">
          {items[current].subtitle}
        </p>
        <p className="font-archivo text-[13px] leading-relaxed text-gs-grey-4">
          {items[current].body}
        </p>
      </div>

      {/* Dots */}
      <div
        ref={dotsRef}
        className="flex items-center justify-center gap-2 py-5 border-t border-black/10"
        style={revealStyle(dotsVisible, 200)}
      >
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === current ? "w-8 bg-gs-ink" : "w-1.5 bg-gs-grey-2 hover:bg-gs-grey-3"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
