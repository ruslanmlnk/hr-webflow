"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.9,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      autoRaf: true, // дуже важливо
    });

    (window as any).lenis = lenis;

    lenis.on('scroll', () => {
      // Notify Webflow IX2 and other scroll-dependent libraries
      window.dispatchEvent(new Event('scroll'));
    });

    return () => {
      lenis.destroy();
      (window as any).lenis = null;
    };
  }, []);

  return null;
}
