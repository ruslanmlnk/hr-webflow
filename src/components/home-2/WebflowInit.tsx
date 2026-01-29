"use client";

import { useEffect } from "react";

export default function WebflowInit() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // --- Webflow queue bootstrap ---
    const wfQueue = (window as any).Webflow || [];
    (window as any).Webflow = wfQueue;

    let didInitIx2 = false;

    // --- In-view animations (custom, safe) ---
    const initInViewAnimations = () => {
      const targets = document.querySelectorAll<HTMLElement>("[data-ix-inview]");
      if (!targets.length) return;

      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("ix-visible");
              obs.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -5% 0px",
        }
      );

      targets.forEach((el) => observer.observe(el));
    };

    // --- Webflow IX2 safe init ---
    const bootWebflowIx2 = () => {
      if (didInitIx2) return true;

      const wf = (window as any).Webflow;
      if (!wf || typeof wf.require !== "function") return false;

      try {
        wf.destroy?.();
        wf.ready?.();
        wf.require("ix2")?.init?.();
      } catch {
        // silent
      }

      // 🔑 ЄДИНИЙ безпечний сигнал для Webflow + Lenis
      window.dispatchEvent(new Event("resize"));

      didInitIx2 = document.documentElement.classList.contains("w-mod-ix");
      return didInitIx2;
    };

    // --- Main init ---
    const init = () => {
      bootWebflowIx2();
      initInViewAnimations();
    };

    // --- Events ---
    window.addEventListener("load", init, { once: true });
    window.addEventListener("pageshow", () => {
      setTimeout(init, 50);
    });

    window.addEventListener("webflow:scripts-ready", init as EventListener);

    // --- Poll Webflow if scripts are late ---
    const start = Date.now();
    const poll = window.setInterval(() => {
      if (bootWebflowIx2()) {
        clearInterval(poll);
        return;
      }

      if (Date.now() - start > 6000) {
        clearInterval(poll);
      }
    }, 50);

    if (typeof wfQueue.push === "function") {
      wfQueue.push(init);
    }

    if ((wfQueue as any).require) {
      init();
    }

    return () => {
      window.removeEventListener("load", init);
      window.removeEventListener("pageshow", init);
      window.removeEventListener("webflow:scripts-ready", init as EventListener);
      clearInterval(poll);
    };
  }, []);

  return null;
}
