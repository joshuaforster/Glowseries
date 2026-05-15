"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse   = useRef({ x: 0, y: 0 });
  const ring    = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + "px";
        dotRef.current.style.top  = e.clientY + "px";
      }
    };
    document.addEventListener("mousemove", onMove);

    let raf: number;
    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.1;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.1;
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + "px";
        ringRef.current.style.top  = ring.current.y + "px";
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    const grow   = () => { if (ringRef.current) { ringRef.current.style.transform = "translate(-50%,-50%) scale(2)"; ringRef.current.style.opacity = ".5"; } };
    const shrink = () => { if (ringRef.current) { ringRef.current.style.transform = "translate(-50%,-50%) scale(1)"; ringRef.current.style.opacity = ".2"; } };
    document.querySelectorAll("a,button").forEach(el => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });

    return () => { document.removeEventListener("mousemove", onMove); cancelAnimationFrame(raf); };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="fixed w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 [@media(pointer:coarse)]:hidden" style={{ mixBlendMode: "difference" }} />
      <div ref={ringRef} className="fixed w-7 h-7 border border-white rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 opacity-80 [@media(pointer:coarse)]:hidden"
           style={{ mixBlendMode: "difference", transition: "transform .2s cubic-bezier(0.22,1,0.36,1), opacity .2s" }} />
    </>
  );
}
