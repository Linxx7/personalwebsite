"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

interface RevealOnScrollProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  once?: boolean;
  amount?: number;
}

const OFFSET = 36;

export default function RevealOnScroll({
  children,
  delay = 0,
  direction = "up",
  className,
  once = true,
  amount = 0.15,
}: RevealOnScrollProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });
  const shouldReduceMotion = useReducedMotion();

  // Keep server-rendered content visible. Motion enhances the page instead of
  // becoming a requirement for reading it.
  const initial: Record<string, number> = { opacity: 1 };
  if (!shouldReduceMotion) {
    if (direction === "up") initial.y = OFFSET;
    if (direction === "down") initial.y = -OFFSET;
    if (direction === "left") initial.x = OFFSET;
    if (direction === "right") initial.x = -OFFSET;
  }

  const animate =
    shouldReduceMotion || isInView ? { opacity: 1, x: 0, y: 0 } : initial;

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.65,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
      data-reveal
    >
      {children}
    </motion.div>
  );
}
