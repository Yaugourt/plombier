"use client";

import { useEffect } from "react";

function revealInViewport(elements: Iterable<HTMLElement>) {
  const viewportHeight = window.innerHeight;
  for (const el of elements) {
    const rect = el.getBoundingClientRect();
    if (rect.top < viewportHeight * 0.95 && rect.bottom > 0) {
      el.classList.add("in");
    }
  }
}

export default function ScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    if (elements.length === 0) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) {
      elements.forEach((el) => el.classList.add("in"));
      return;
    }

    document.documentElement.classList.add("reveal-js");
    revealInViewport(elements);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -2% 0px", threshold: 0.01 }
    );

    elements.forEach((el) => {
      if (!el.classList.contains("in")) io.observe(el);
    });

    const onResize = () => revealInViewport(elements);
    window.addEventListener("resize", onResize, { passive: true });

    const fallback = window.setTimeout(() => {
      elements.forEach((el) => el.classList.add("in"));
    }, 2000);

    return () => {
      window.clearTimeout(fallback);
      window.removeEventListener("resize", onResize);
      io.disconnect();
      document.documentElement.classList.remove("reveal-js");
    };
  }, []);

  return null;
}
