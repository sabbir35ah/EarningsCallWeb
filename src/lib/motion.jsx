"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// ─── Shared ease curve ────────────────────────────────────────────────────────
export const EASE = [0.22, 1, 0.36, 1];

// ─── Reusable variant definitions ─────────────────────────────────────────────
export const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE } },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE } },
};

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

// ─── Wrapper components ────────────────────────────────────────────────────────

/**
 * Fades + slides up when scrolled into view.
 * Props: delay, margin (viewport margin), as (element tag), + any motion props.
 */
export function FadeUp({ children, className, delay = 0, margin, as: Tag = "div", ...props }) {
  const Component = motion[Tag];
  return (
    <Component
      className={cn(className)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, ...(margin != null && { margin }) }}
      transition={{ duration: 0.5, ease: EASE, delay }}
      {...props}
    >
      {children}
    </Component>
  );
}

/**
 * Fades in (opacity only) when scrolled into view.
 * Props: delay, as, + any motion props.
 */
export function FadeIn({ children, className, delay = 0, as: Tag = "div", ...props }) {
  const Component = motion[Tag];
  return (
    <Component
      className={cn(className)}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
      {...props}
    >
      {children}
    </Component>
  );
}

/**
 * Slides in horizontally when scrolled into view.
 * Props: direction ("left" | "right"), amount (px offset, default 40), delay, as, + any motion props.
 */
export function SlideIn({
  children,
  className,
  direction = "left",
  amount = 40,
  delay = 0,
  as: Tag = "div",
  ...props
}) {
  const Component = motion[Tag];
  const x = direction === "left" ? -amount : amount;
  return (
    <Component
      className={cn(className)}
      initial={{ opacity: 0, x }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: EASE, delay }}
      {...props}
    >
      {children}
    </Component>
  );
}

/**
 * Stagger container — staggers child variant animations.
 * Children must use `variants={fadeInUp}` (or similar) to participate.
 * Props: onLoad (animate on page load instead of scroll), margin (viewport margin).
 */
export function Stagger({ children, className, onLoad = false, margin = "-80px", ...props }) {
  const triggerProps = onLoad
    ? { animate: "visible" }
    : { whileInView: "visible", viewport: { once: true, margin } };
  return (
    <motion.div
      className={cn(className)}
      variants={staggerContainer}
      initial="hidden"
      {...triggerProps}
      {...props}
    >
      {children}
    </motion.div>
  );
}
