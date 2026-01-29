"use client";

import { useEffect } from "react";

export default function WebflowInit() {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const wfQueue = (window as unknown as { Webflow?: any }).Webflow || [];
    (window as unknown as { Webflow: any }).Webflow = wfQueue;

    let didScheduleJobboardFallback = false;
    let didScheduleTestimonialsFallback = false;

    const scheduleJobboardFallback = () => {
      const target = document.querySelector<HTMLElement>(".jobboard-items-wrapper");
      if (target) {
        document.documentElement.classList.add("jobboard-loop-fallback");
      }
    };

    const scheduleTestimonialsFallback = () => {
      const topTrack = document.querySelector<HTMLElement>(".testimanial-full-width-wrapper");
      const bottomTrack = document.querySelector<HTMLElement>(".bottom-testimon-full-width-wrap");
      if (topTrack || bottomTrack) {
        document.documentElement.classList.add("testimonials-loop-fallback");
      }
    };

    const initInViewAnimations = () => {
      const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-ix-inview]"));
      if (!targets.length) {
        return;
      }

      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              (entry.target as HTMLElement).classList.add("ix-visible");
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -5% 0px" }
      );

      targets.forEach((target) => observer.observe(target));
    };

    const nudgeScrollForIx2 = () => {
      const scrollElement = document.scrollingElement ?? document.documentElement;
      const x = window.scrollX;
      const y = window.scrollY;
      const maxY = Math.max(0, scrollElement.scrollHeight - window.innerHeight);
      const nudgeTo = y < maxY ? y + 1 : Math.max(0, y - 1);

      if (nudgeTo === y) {
        return;
      }

      window.requestAnimationFrame(() => {
        window.scrollTo(x, nudgeTo);
        window.requestAnimationFrame(() => {
          window.scrollTo(x, y);
        });
      });
    };

    const forceInViewUpdate = () => {
      const fire = () => {
        // window.dispatchEvent(new Event("scroll"));
        window.dispatchEvent(new Event("resize"));
        document.dispatchEvent(new Event("scroll"));
        document.dispatchEvent(new Event("resize"));
      };

      fire();
      window.requestAnimationFrame(() => {
        fire();
        window.setTimeout(fire, 200);
        window.setTimeout(fire, 600);
        window.setTimeout(fire, 1200);
        window.setTimeout(fire, 2000);
      });
    };

    let didInitInView = false;
    const safeInitInView = () => {
      if (didInitInView) {
        return;
      }

      didInitInView = true;
      initInViewAnimations();
    };

    safeInitInView();

    const scheduleLoopFallbacks = () => {
      scheduleJobboardFallback();
      scheduleTestimonialsFallback();
    };

    const refreshInView = () => {
      safeInitInView();
      forceInViewUpdate();
    };

    let didBootWebflowIx2 = false;
    const bootWebflowIx2 = () => {
      if (didBootWebflowIx2) {
        return true;
      }

      const wf = (window as unknown as { Webflow?: any }).Webflow;
      if (!wf || typeof wf.require !== "function") {
        return false;
      }

      try {
        wf.destroy?.();
      } catch { }

      try {
        wf.ready?.();
      } catch { }

      try {
        wf.require("ix2")?.init?.();
      } catch { }

      window.dispatchEvent(new Event("resize"));
      nudgeScrollForIx2();

      const didAttachIx = document.documentElement.classList.contains("w-mod-ix");
      if (!didAttachIx) {
        return false;
      }

      didBootWebflowIx2 = true;
      return true;
    };

    const handleLoad = () => {
      bootWebflowIx2();
      scheduleLoopFallbacks();
      refreshInView();
    };

    const handlePageShow = () => {
      window.setTimeout(() => {
        bootWebflowIx2();
        scheduleLoopFallbacks();
        refreshInView();
      }, 50);
    };

    window.addEventListener("load", handleLoad, { once: true });
    window.addEventListener("pageshow", handlePageShow);

    const initWebflow = () => {
      bootWebflowIx2();
      scheduleLoopFallbacks();
      refreshInView();
    };

    window.addEventListener("webflow:scripts-ready", initWebflow as EventListener);

    const start = Date.now();
    const poll = window.setInterval(() => {
      if (bootWebflowIx2()) {
        window.clearInterval(poll);
        return;
      }

      if (Date.now() - start > 6000) {
        window.clearInterval(poll);
      }
    }, 50);

    if (typeof wfQueue.push === "function") {
      wfQueue.push(initWebflow);
    }

    if (wfQueue.require) {
      initWebflow();
    }

    return () => {
      window.removeEventListener("load", handleLoad);
      window.removeEventListener("pageshow", handlePageShow);
      window.removeEventListener("webflow:scripts-ready", initWebflow as EventListener);
      window.clearInterval(poll);
    };
  }, []);

  return null;
}
