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

    const scheduleJobboardFallback = (force = false) => {
      if (didScheduleJobboardFallback && !force) {
        return;
      }

      const target = document.querySelector<HTMLElement>(".jobboard-items-wrapper");
      if (!target) {
        return;
      }

      didScheduleJobboardFallback = true;

      const prefersReducedMotion = false; // force motion even if reduce motion is set
      const enableFallback = () => {
        if (!prefersReducedMotion) {
          document.documentElement.classList.add("jobboard-loop-fallback");
        }
      };

      // Force on immediately to guarantee motion
      enableFallback();

      const readTransform = () => window.getComputedStyle(target).transform;
      window.setTimeout(() => {
        const start = readTransform();
        window.setTimeout(() => {
          const current = readTransform();
          if (start === current) {
            enableFallback();
          }
        }, 1200);
      }, 1200);

      window.setTimeout(() => {
        const animationName = window.getComputedStyle(target).animationName;
        if (animationName === "none") {
          enableFallback();
        }
      }, 3500);
    };

    const scheduleTestimonialsFallback = (force = false) => {
      if (didScheduleTestimonialsFallback && !force) {
        return;
      }

      const topTrack = document.querySelector<HTMLElement>(".testimanial-full-width-wrapper");
      const bottomTrack = document.querySelector<HTMLElement>(".bottom-testimon-full-width-wrap");
      if (!topTrack && !bottomTrack) {
        return;
      }

      didScheduleTestimonialsFallback = true;

      const readTransform = (element?: HTMLElement | null) =>
        element ? window.getComputedStyle(element).transform : null;

      // Force on immediately to guarantee motion
      document.documentElement.classList.add("testimonials-loop-fallback");

      window.setTimeout(() => {
        const topStart = readTransform(topTrack);
        const bottomStart = readTransform(bottomTrack);
        window.setTimeout(() => {
          const topCurrent = readTransform(topTrack);
          const bottomCurrent = readTransform(bottomTrack);
          const topStatic = topTrack && topStart === topCurrent;
          const bottomStatic = bottomTrack && bottomStart === bottomCurrent;

          if (topStatic || bottomStatic) {
            document.documentElement.classList.add("testimonials-loop-fallback");
          }
        }, 1200);
      }, 1200);
    };

    const initInViewAnimations = () => {
      const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-ix-inview]"));
      if (!targets.length) {
        return;
      }

      const revealAll = () => {
        targets.forEach((target) => target.classList.add("ix-visible"));
      };

      const applyInViewNow = () => {
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        const viewportTop = viewportHeight * 0.1;
        const viewportBottom = viewportHeight * 0.9;

        targets.forEach((target) => {
          const rect = target.getBoundingClientRect();
          const isInView = rect.bottom >= viewportTop && rect.top <= viewportBottom;
          if (isInView) {
            target.classList.add("ix-visible");
          }
        });
      };

      if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
        targets.forEach((target) => target.classList.add("ix-visible"));
        return;
      }

      if (typeof IntersectionObserver === "undefined") {
        targets.forEach((target) => target.classList.add("ix-visible"));
        return;
      }

      applyInViewNow();
      window.setTimeout(applyInViewNow, 50);
      window.setTimeout(revealAll, 300);

      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }

            (entry.target as HTMLElement).classList.add("ix-visible");
            obs.unobserve(entry.target);
          });
        },
        { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
      );

      targets.forEach((target) => observer.observe(target));

      window.setTimeout(() => {
        targets.forEach((target) => {
          if (!target.classList.contains("ix-visible")) {
            target.classList.add("ix-visible");
          }
        });
      }, 2500);
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
        window.dispatchEvent(new Event("scroll"));
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
        window.setTimeout(nudgeScrollForIx2, 0);
        window.setTimeout(nudgeScrollForIx2, 200);
        window.setTimeout(nudgeScrollForIx2, 1200);
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

    const scheduleLoopFallbacks = (force = false) => {
      scheduleJobboardFallback(force);
      scheduleTestimonialsFallback(force);
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
      } catch {}

      try {
        wf.ready?.();
      } catch {}

      try {
        wf.require("ix2")?.init?.();
      } catch {}

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
      scheduleLoopFallbacks(true);
      refreshInView();
    };

    const handlePageShow = () => {
      window.setTimeout(() => {
        bootWebflowIx2();
        scheduleLoopFallbacks(true);
        refreshInView();
      }, 50);
    };

    window.addEventListener("load", handleLoad, { once: true });
    window.addEventListener("pageshow", handlePageShow);

    const initWebflow = () => {
      bootWebflowIx2();
      scheduleLoopFallbacks(true);
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
