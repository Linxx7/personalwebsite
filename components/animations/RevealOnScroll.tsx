"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";

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

  const initial: Record<string, number> = { opacity: 0 };
  if (direction === "up") initial.y = OFFSET;
  if (direction === "down") initial.y = -OFFSET;
  if (direction === "left") initial.x = OFFSET;
  if (direction === "right") initial.x = -OFFSET;

  const animate = isInView ? { opacity: 1, x: 0, y: 0 } : initial;

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
