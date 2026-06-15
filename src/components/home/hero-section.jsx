"use client";
import { fadeInUp, Stagger } from "@/lib/motion";
import { motion } from "framer-motion";
import { Container } from "../layout/container";
import { HeroSearchBar } from "./hero-search-bar";
import { HeroCardStack } from "./hero-card-stack";

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden pt-16 pb-0"
      style={{ background: "linear-gradient(180deg, rgb(0,43,20) 0%, rgb(1,67,31) 100%)" }}
    >
      {/* Animated rising glow layer */}
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
      <Container className="relative z-10 flex flex-col items-center pt-20 pb-0 text-center sm:pt-28">
        <Stagger onLoad className="flex w-full flex-col items-center">
          <motion.h1
            variants={fadeInUp}
            className="text-hero text-white text-center w-[min(909px,100%)]"
          >
            Earnings Call Transcripts
            <br />
            API Structured, Clean &amp; Scalable
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-body text-white text-center mt-6 w-[min(834px,100%)]"
          >
            Historical and current earnings transcripts, audio files, slide
            decks, and event data from 9,000+ public companies — clean JSON, one
            API, ready to ship.
          </motion.p>

          <HeroSearchBar />
          <HeroCardStack />
        </Stagger>
      </Container>
    </section>
  );
}
