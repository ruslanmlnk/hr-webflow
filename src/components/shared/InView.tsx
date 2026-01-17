"use client";

import type { ElementType, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

type Props = {
  as?: ElementType;
  className?: string;
  once?: boolean;
  rootMargin?: string;
  threshold?: number;
  children?: ReactNode;
} & Record<string, unknown>;

export default function InView({
  as: Tag = "div",
  className,
  once = true,
  rootMargin = "0px 0px 10% 0px",
  threshold = 0.05,
  children,
  ...rest
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsInView(false);
        }
      },
      { root: null, rootMargin, threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, rootMargin, threshold]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const TagAny = Tag as any;
  return (
    <TagAny ref={ref} data-inview={isInView ? "true" : "false"} className={className} {...rest}>
      {children}
    </TagAny>
  );
}
