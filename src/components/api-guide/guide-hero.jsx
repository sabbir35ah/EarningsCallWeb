"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Stagger, fadeInUp } from "@/lib/motion";

const techTags = ["REST", "JSON", "Bearer Auth", "Python SDK", "JS SDK"];

export function GuideHero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ paddingBlock: "140px", background: "linear-gradient(180deg, rgb(0,43,20) 0%, rgb(1,67,31) 100%)" }}
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

      <Container className="relative z-10">
        <Stagger onLoad className="flex flex-col items-center text-center">
          <motion.h1
            variants={fadeInUp}
            className="mb-5 text-white text-[24px] leading-[32px] 991:text-[clamp(36px,5vw,64px)] 991:leading-[clamp(44px,6vw,76px)]"
            style={{ fontFamily: "var(--font-stack-sans-headline)", fontWeight: 400, letterSpacing: "-0.8px" }}
          >
            API Documentation
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mb-8 max-w-[540px] text-white/75"
            style={{ fontFamily: "var(--font-stack-sans-headline)", fontSize: "clamp(14px,1.8vw,16px)", fontWeight: 300, lineHeight: "26px" }}
          >
            Programmatic access to earnings call transcripts, audio files, and
            calendars for 9,000+ public companies — clean JSON, one API.
          </motion.p>

          {/* Tech tags */}
          <motion.div variants={fadeInUp} className="mb-10 flex flex-wrap items-center justify-center gap-2">
            {techTags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-white/85"
                style={{ fontFamily: "var(--font-stack-sans-headline)", fontSize: "clamp(11px,1.3vw,13px)", fontWeight: 300 }}
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-3">
            <Button
              asChild
              variant="accent"
              size="cta"
              className="text-[12px] 991:text-[16px]"
              style={{ fontFamily: "var(--font-stack-sans-headline)", fontWeight: 300, lineHeight: "28px" }}
            >
              <Link href="/pricing">Get API Key</Link>
            </Button>
            <Button
              asChild
              variant="brand-outline"
              size="cta"
              className="text-[12px] 991:text-[16px] !border-white/40 !text-white"
              style={{ fontFamily: "var(--font-stack-sans-headline)", fontWeight: 300, lineHeight: "28px" }}
            >
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </motion.div>
        </Stagger>
      </Container>
    </section>
  );
}
