
"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function LenisProvider() {
  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (reducedMotion.matches) return;

    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    let frame = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      frame = window.requestAnimationFrame(raf);
    };

    frame = window.requestAnimationFrame(raf);

    const handleAnchorClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target;

      if (!(target instanceof Element)) return;

      const link = target.closest<HTMLAnchorElement>('a[href^="#"]');

      if (!link || link.hasAttribute("download")) return;
      if (link.target && link.target !== "_self") return;

      const href = link.getAttribute("href");

      if (!href || href === "#") return;

      let id: string;

      try {
        id = decodeURIComponent(href.slice(1));
      } catch {
        return;
      }

      const destination = document.getElementById(id);

      if (!destination) return;

      event.preventDefault();

      lenis.scrollTo(destination, {
        offset: -96,
        onComplete: () => {
          if (window.location.hash !== href) {
            window.history.replaceState(null, "", href);
          }
        },
      });
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      window.cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return null;
}
