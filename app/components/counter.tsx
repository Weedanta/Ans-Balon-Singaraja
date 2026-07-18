"use client";

import { useEffect, useRef, useState } from "react";
import { getGsap } from "../lib/gsap";

type CounterProps = {
  to: number;
  prefix?: string;
  suffix?: string;
  className?: string;
};

export function Counter({ to, prefix = "", suffix = "", className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(() => `${prefix}${to.toLocaleString("id-ID")}${suffix}`);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const { gsap } = getGsap();
    const proxy = { val: 0 };

    const ctx = gsap.context(() => {
      gsap.to(proxy, {
        val: to,
        duration: 1.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          once: true,
        },
        onUpdate: () => {
          setDisplay(`${prefix}${Math.round(proxy.val).toLocaleString("id-ID")}${suffix}`);
        },
      });
    }, el);

    return () => ctx.revert();
  }, [to, prefix, suffix]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
