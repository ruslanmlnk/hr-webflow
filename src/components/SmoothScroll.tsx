"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (reduceMotion || isTouch) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.25,
      lerp: 0.08,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.8,
      autoRaf: true,
    });

    (window as any).lenis = lenis;

    return () => {
      lenis.destroy();
      (window as any).lenis = null;
    };
  }, []);

  return null;
}
