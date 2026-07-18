"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { getGsap } from "../lib/gsap";

type VelocityMarqueeProps = {
  children: ReactNode;
  baseDuration?: number;
  className?: string;
};

export function VelocityMarquee({ children, baseDuration = 26, className }: VelocityMarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const { gsap, ScrollTrigger } = getGsap();

    const ctx = gsap.context(() => {
      const tween = gsap.to(track, {
        xPercent: -50,
        duration: baseDuration,
        ease: "none",
        repeat: -1,
      });

      const proxy = { speed: 1 };
      const trigger = ScrollTrigger.create({
        onUpdate: (self) => {
          const velocity = self.getVelocity() / 1000;
          const target = gsap.utils.clamp(-4, 4, 1 + velocity);
          gsap.to(proxy, {
            speed: target,
            duration: 0.3,
            overwrite: true,
            onUpdate: () => {
              tween.timeScale(proxy.speed);
            },
          });
        },
      });

      return () => trigger.kill();
    }, track);

    return () => ctx.revert();
  }, [baseDuration]);

  return (
    <div className={`overflow-hidden ${className ?? ""}`}>
      <div ref={trackRef} className="marquee-track">
        {children}
      </div>
    </div>
  );
}
