"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { getGsap } from "../lib/gsap";

type PopRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function PopReveal({ children, className, delay = 0 }: PopRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const { gsap } = getGsap();
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { clipPath: "inset(0% 0% 100% 0%)", rotate: -1.4, y: 26 },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          rotate: 0,
          y: 0,
          duration: 1.05,
          delay,
          ease: "expo.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        },
      );
    }, el);

    return () => ctx.revert();
  }, [delay]);

  return (
    <div ref={ref} className={className} style={{ willChange: "clip-path, transform" }}>
      {children}
    </div>
  );
}
