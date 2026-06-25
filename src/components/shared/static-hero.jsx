"use client";

import { fadeInUp, Stagger } from "@/lib/motion";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";

export function StaticHero({ title, subtitle }) {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, rgb(0,43,20) 0%, rgb(1,67,31) 100%)",
        paddingTop: "var(--navbar-height)",
      }}
    >
      <div
        className="animate-glow-rise pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 100% 90% at 50% 108%, rgba(78,255,145,0.9) 0%, rgba(76,255,140,0.42) 42%, transparent 75%),
            radial-gradient(ellipse 60% 70% at 8% 115%, rgba(76,240,140,0.6) 0%, transparent 68%),
            radial-gradient(ellipse 60% 70% at 92% 115%, rgba(76,240,140,0.6) 0%, transparent 68%)
          `,
        }}
      />
      <Container className="relative z-10 flex flex-col items-center py-16 sm:py-20 lg:py-24 text-center">
        <Stagger onLoad className="flex w-full flex-col items-center">
          <motion.h1
            variants={fadeInUp}
            className="text-hero text-white text-center w-[min(820px,100%)]"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              variants={fadeInUp}
              className="text-body text-white/80 text-center mt-5 w-[min(620px,100%)]"
            >
              {subtitle}
            </motion.p>
          )}
        </Stagger>
      </Container>
    </section>
  );
}
