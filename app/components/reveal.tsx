"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 34, rotate: -1.2 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 16,
        mass: 0.7,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
