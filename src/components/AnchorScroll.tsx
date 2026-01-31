"use client";

import { useEffect } from "react";

const getAnchorTarget = (hash: string) => {
  if (!hash || hash === "#") return null;
  const id = decodeURIComponent(hash.slice(1));
  if (!id) return null;
  return document.getElementById(id);
};

const scrollToTarget = (target: HTMLElement, behavior: ScrollBehavior) => {
  const rect = target.getBoundingClientRect();
  const targetTop = window.scrollY + rect.top - window.innerHeight / 2 + rect.height / 2;
  const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
  const clampedTop = Math.min(Math.max(0, targetTop), maxScroll);
  window.scrollTo({ top: clampedTop, behavior });
};

export default function AnchorScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const behavior: ScrollBehavior = prefersReduced ? "auto" : "smooth";

    let rafId: number | null = null;
    let restoreTimer: number | null = null;
    let originalBehavior = "";
    let originalBodyBehavior = "";

    const stopAnimation = () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      if (restoreTimer !== null) {
        window.clearTimeout(restoreTimer);
        restoreTimer = null;
      }
      if (originalBehavior !== "") {
        document.documentElement.style.setProperty("scroll-behavior", originalBehavior);
        originalBehavior = "";
      }
      if (originalBodyBehavior !== "") {
        document.body.style.setProperty("scroll-behavior", originalBodyBehavior);
        originalBodyBehavior = "";
      }
    };

    const smoothFollowScroll = (target: HTMLElement) => {
      stopAnimation();
      originalBehavior = getComputedStyle(document.documentElement).scrollBehavior;
      originalBodyBehavior = getComputedStyle(document.body).scrollBehavior;
      document.documentElement.style.setProperty("scroll-behavior", "auto", "important");
      document.body.style.setProperty("scroll-behavior", "auto", "important");

      const startTime = performance.now();
      const startTop = window.scrollY;
      const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

      const rect = target.getBoundingClientRect();
      const initialDesired = startTop + rect.top - window.innerHeight / 2 + rect.height / 2;
      const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      const initialTarget = Math.min(Math.max(0, initialDesired), maxScroll);
      const distance = Math.abs(initialTarget - startTop);
      const duration = Math.min(2500, Math.max(600, distance * 0.3));

      const step = (now: number) => {
        const progress = Math.min(1, (now - startTime) / duration);
        const eased = easeOutCubic(progress);
        const rectNow = target.getBoundingClientRect();
        const desired = window.scrollY + rectNow.top - window.innerHeight / 2 + rectNow.height / 2;
        const maxScrollNow = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
        const targetTop = Math.min(Math.max(0, desired), maxScrollNow);
        const currentTop = startTop + (targetTop - startTop) * eased;

        window.scrollTo({ top: currentTop, behavior: "auto" });

        if (progress < 1) {
          rafId = requestAnimationFrame(step);
          return;
        }

        const remaining = Math.abs(targetTop - window.scrollY);
        if (remaining > 6) {
          // If layout shifted during animation, run one more short pass.
          rafId = requestAnimationFrame(() => smoothFollowScroll(target));
          return;
        }

        stopAnimation();
      };

      rafId = requestAnimationFrame(step);
    };

    const scheduleScroll = (hash: string) => {
      const target = getAnchorTarget(hash);
      if (!target || target.id !== "contact-form") return;
      // Wait a couple frames to avoid layout shifts during navigation/animations.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (prefersReduced) {
            scrollToTarget(target, "auto");
          } else {
            smoothFollowScroll(target);
          }
        });
      });
    };

    const onClick = (event: MouseEvent) => {
      const el = event.target as HTMLElement | null;
      const link = el?.closest("a[href^='#']") as HTMLAnchorElement | null;
      if (!link) return;
      const hash = link.getAttribute("href") ?? "";
      const target = getAnchorTarget(hash);
      if (!target || target.id !== "contact-form") return;
      event.preventDefault();
      history.pushState(null, "", hash);
      scheduleScroll(hash);
    };

    const onHashChange = () => {
      scheduleScroll(window.location.hash);
    };

    document.addEventListener("click", onClick);
    window.addEventListener("hashchange", onHashChange);

    const navEntry = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
    if (navEntry?.type === "reload" && window.location.hash === "#contact-form") {
      history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
      window.scrollTo({ top: 0, behavior: "auto" });
    }

    return () => {
      stopAnimation();
      document.removeEventListener("click", onClick);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  return null;
}
