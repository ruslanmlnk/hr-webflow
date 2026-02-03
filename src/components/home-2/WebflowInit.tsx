"use client";

import { useEffect } from "react";

export default function WebflowInit() {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const animationPresets: Record<string, "slideInBottom" | "fadeIn" | "growIn"> = {
      "15351649-b40d-6bc8-be35-ea6359904ac4": "slideInBottom",
      "1a298c2d-c7a2-6ccb-aba5-7ba85da153d5": "slideInBottom",
      "1a298c2d-c7a2-6ccb-aba5-7ba85da153d7": "slideInBottom",
      "1a298c2d-c7a2-6ccb-aba5-7ba85da153d9": "slideInBottom",
      "1a298c2d-c7a2-6ccb-aba5-7ba85da153dd": "slideInBottom",
      "1a298c2d-c7a2-6ccb-aba5-7ba85da153e8": "slideInBottom",
      "1a3d2dfe-b4da-e4f6-4c52-e589b95690f2": "growIn",
      "2c9c6a06-707e-b1ff-a965-59cb79a785b9": "slideInBottom",
      "2d795c65-8f28-5364-8057-86ac399da26d": "slideInBottom",
      "2e66a02a-4e4a-37b3-79c1-81eb79fca035": "fadeIn",
      "3aa20a89-d0f6-6f7d-077b-229e91b251e0": "slideInBottom",
      "64ab773d-0e4f-d1c1-e3cf-9810dc3b4b62": "slideInBottom",
      "71611291-5fd5-9990-8f8c-a889124e3eb3": "slideInBottom",
      "78b1b3e7-47e2-8506-03d6-8fe5cb6336b3": "slideInBottom",
      "78b1b3e7-47e2-8506-03d6-8fe5cb6336b5": "slideInBottom",
      "78b1b3e7-47e2-8506-03d6-8fe5cb6336b7": "slideInBottom",
      "818ee75b-97fd-4765-3010-e5b28f1012d7": "slideInBottom",
      "840c6250-2090-e03d-0df8-cb882921525e": "fadeIn",
      "840c6250-2090-e03d-0df8-cb8829215265": "growIn",
      "840c6250-2090-e03d-0df8-cb882921526a": "slideInBottom",
      "840c6250-2090-e03d-0df8-cb882921526d": "slideInBottom",
      "840c6250-2090-e03d-0df8-cb882921526e": "slideInBottom",
      "840c6250-2090-e03d-0df8-cb8829215270": "slideInBottom",
      "859a13a1-89b9-8714-0acb-76dd9ce7eab9": "slideInBottom",
      "86e8301c-f525-2945-b9fd-a4556e115c4c": "slideInBottom",
      "86e8301c-f525-2945-b9fd-a4556e115c4e": "slideInBottom",
      "86e8301c-f525-2945-b9fd-a4556e115c50": "slideInBottom",
      "8f81ccd8-c046-099f-d940-fbfa9b319666": "slideInBottom",
      "92a8d9be-2b86-6361-2ecb-849b408b23c7": "slideInBottom",
      "a654f4e7-cd86-a24f-6a1f-57e0c7eabe3f": "slideInBottom",
      "a654f4e7-cd86-a24f-6a1f-57e0c7eabe41": "slideInBottom",
      "a654f4e7-cd86-a24f-6a1f-57e0c7eabe44": "slideInBottom",
      "bf0ddcf4-6a19-22f5-40ac-b3f3f7d1664b": "slideInBottom",
      "bf0ddcf4-6a19-22f5-40ac-b3f3f7d1664d": "slideInBottom",
      "bf0ddcf4-6a19-22f5-40ac-b3f3f7d1664f": "slideInBottom",
      "c6f71348-e011-139e-bc51-8c9f8cd3e941": "slideInBottom",
      "c6f71348-e011-139e-bc51-8c9f8cd3e943": "slideInBottom",
      "c6f71348-e011-139e-bc51-8c9f8cd3e948": "slideInBottom",
      "caffce8b-ca9c-c9e4-cca8-29c6abcb36d7": "slideInBottom",
      "ce5e307b-2013-5ebf-1a2c-32cc419414f5": "slideInBottom",
      "d3b162f9-6b9f-15a4-2482-ab6efa6eb58d": "slideInBottom",
      "d5f52c81-4508-3818-4bbc-342ae3af498a": "fadeIn",
      "ef1fab17-cdb9-0b7b-64c5-bb41750c21cc": "growIn",
      "f06df3c2-59e4-6b20-51d3-3eb5e0d98e39": "slideInBottom",
    };
    const animationClassMap: Record<"slideInBottom" | "fadeIn" | "growIn", string> = {
      slideInBottom: "ix-slide-in-bottom",
      fadeIn: "ix-fade-in",
      growIn: "ix-grow-in",
    };
    const animationClasses = ["ix-fade-up", "ix-slide-in-bottom", "ix-fade-in", "ix-grow-in"];

    const loopTargets = [
      { selector: ".jobboard-wrapper", className: "jobboard-loop-fallback" },
      { selector: ".testimon-wrap", className: "testimonials-loop-fallback" },
      { selector: ".home-2-jobs-collection-track", className: "jobs-vertical-loop-fallback" },
      { selector: ".loop-job-wrapper", className: "jobs-loop-fallback" },
    ];

    const setupJobsVerticalLoop = () => {
      const track = document.querySelector<HTMLElement>(".home-2-jobs-collection-track");
      if (!track) {
        return;
      }
      const firstList = track.querySelector<HTMLElement>(".home-2-jobs-collection-wrap");
      if (!firstList) {
        return;
      }
      const styles = getComputedStyle(track);
      const gapValue = styles.rowGap || styles.gap || "0px";
      const gap = Number.parseFloat(gapValue) || 0;
      const distance = firstList.offsetHeight + gap;
      if (distance > 0) {
        track.style.setProperty("--jobs-loop-distance", `${distance}px`);
        const duration = Math.max(8, Math.round((distance / 360) * 10));
        track.style.setProperty("--jobs-loop-duration", `${duration}s`);
      }
    };

    const loopCounts = new Map<string, number>();
    const loopStates = new WeakMap<Element, boolean>();
    const updateLoopClass = (className: string, isActive: boolean) => {
      const current = loopCounts.get(className) ?? 0;
      const next = Math.max(0, current + (isActive ? 1 : -1));
      loopCounts.set(className, next);
      document.documentElement.classList.toggle(className, next > 0);
    };

    const loopObserver =
      typeof IntersectionObserver === "undefined"
        ? null
        : new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              const target = entry.target as HTMLElement;
              const className = target.dataset.loopClass;
              if (!className) return;
              const prev = loopStates.get(target) ?? false;
              if (prev === entry.isIntersecting) return;
              loopStates.set(target, entry.isIntersecting);
              updateLoopClass(className, entry.isIntersecting);
            });
          },
          { rootMargin: "200px 0px 200px 0px", threshold: 0.01 }
        );

    const registerLoopTarget = (el: HTMLElement, className: string) => {
      if (!loopObserver) {
        document.documentElement.classList.add(className);
        return;
      }
      if (el.dataset.loopClass === className) return;
      el.dataset.loopClass = className;
      loopObserver.observe(el);
    };

    const setupLoopTargets = () => {
      loopTargets.forEach(({ selector, className }) => {
        const el = document.querySelector<HTMLElement>(selector);
        if (el) registerLoopTarget(el, className);
      });

      if (!document.querySelector(".loop-job-wrapper")) {
        const topTrack = document.querySelector<HTMLElement>(".top-jobs-wrapper");
        if (topTrack) registerLoopTarget(topTrack, "jobs-loop-fallback");
      }

      setupJobsVerticalLoop();
    };

    const selector = "[data-ix-inview], [data-w-id]";
    const targets = () => Array.from(document.querySelectorAll<HTMLElement>(selector));

    const hasAnimationClass = (el: HTMLElement) =>
      animationClasses.some((cls) => el.classList.contains(cls));

    const applyPresetClass = (el: HTMLElement) => {
      const id = el.getAttribute("data-w-id");
      if (!id) return false;
      const preset = animationPresets[id];
      if (!preset) return false;
      animationClasses.forEach((cls) => el.classList.remove(cls));
      el.classList.add(animationClassMap[preset]);
      return true;
    };

    const ensureVisible = (el: HTMLElement) => {
      if (el.style.opacity && Number(el.style.opacity) === 0) {
        el.style.opacity = "1";
      }
    };

    const prepareTarget = (el: HTMLElement) => {
      const hasPreset = applyPresetClass(el);
      const shouldAnimate = hasPreset || hasAnimationClass(el);
      if (!shouldAnimate && el.hasAttribute("data-w-id")) {
        ensureVisible(el);
      }
      return shouldAnimate;
    };

    const reveal = (el: HTMLElement) => {
      el.classList.add("ix-visible");
    };

    const runFallbackLoops = () => {
      setupLoopTargets();
    };

    if (typeof IntersectionObserver === "undefined") {
      runFallbackLoops();
      targets().forEach((target) => {
        const shouldAnimate = prepareTarget(target);
        if (shouldAnimate) {
          reveal(target);
        }
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target as HTMLElement);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.01, rootMargin: "0px 0px 50px 0px" }
    );

    const checkInitialVisibility = () => {
      const isAtTop = window.scrollY < 100;
      targets().forEach((target) => {
        const shouldAnimate = prepareTarget(target);
        if (shouldAnimate) {
          if (isAtTop) {
            const rect = target.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
              reveal(target);
              return;
            }
          }
          observer.observe(target);
        }
      });
    };

    // Small timeout to ensure layout is settled on mobile
    setTimeout(checkInitialVisibility, 50);

    runFallbackLoops();
    window.addEventListener("load", runFallbackLoops, { once: true });
    window.addEventListener("resize", setupJobsVerticalLoop);

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) {
            return;
          }

          if (node.matches(selector)) {
            const shouldAnimate = prepareTarget(node);
            if (shouldAnimate) {
              const currentIsAtTop = window.scrollY < 100;
              if (currentIsAtTop) {
                const rect = node.getBoundingClientRect();
                if (rect.top < window.innerHeight) {
                  reveal(node);
                } else {
                  observer.observe(node);
                }
              } else {
                observer.observe(node);
              }
            }
          }

          loopTargets.forEach(({ selector: loopSelector, className }) => {
            if (node.matches(loopSelector)) {
              registerLoopTarget(node, className);
            }
          });

          node.querySelectorAll<HTMLElement>(selector).forEach((child) => {
            const shouldAnimate = prepareTarget(child);
            if (shouldAnimate) {
              const currentIsAtTop = window.scrollY < 100;
              if (currentIsAtTop) {
                const rect = child.getBoundingClientRect();
                if (rect.top < window.innerHeight) {
                  reveal(child);
                } else {
                  observer.observe(child);
                }
              } else {
                observer.observe(child);
              }
            }
          });

          loopTargets.forEach(({ selector: loopSelector, className }) => {
            node.querySelectorAll<HTMLElement>(loopSelector).forEach((child) => {
              registerLoopTarget(child, className);
            });
          });
        });
      });

      runFallbackLoops();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      loopObserver?.disconnect();
      window.removeEventListener("load", runFallbackLoops);
      window.removeEventListener("resize", setupJobsVerticalLoop);
    };
  }, []);

  return null;
}
