"use client";
import { useEffect } from "react";

export default function RevealObserver() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).dataset.animate = "visible";
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const staggerObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).dataset.animateStagger = "visible";
          staggerObs.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    const imgObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).dataset.imgReveal = "visible";
          imgObs.unobserve(entry.target);
        });
      },
      { threshold: 0.05 }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => {
      (el as HTMLElement).dataset.animate = "hidden";
      obs.observe(el);
    });

    document.querySelectorAll("[data-animate-stagger]").forEach((el) => {
      (el as HTMLElement).dataset.animateStagger = "hidden";
      staggerObs.observe(el);
    });

    document.querySelectorAll("[data-img-reveal]").forEach((el) => {
      imgObs.observe(el);
    });

    return () => {
      obs.disconnect();
      staggerObs.disconnect();
      imgObs.disconnect();
    };
  }, []);

  return null;
}
