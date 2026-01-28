// components/SmoothScroll.tsx
'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false, // ВАЖЛИВО
      autoResize: true, // ВАЖЛИВО
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Оновити після завантаження контенту
    window.addEventListener('load', () => {
      lenis.resize();
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}