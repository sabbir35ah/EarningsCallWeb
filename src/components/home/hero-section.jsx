"use client";
import { fadeInUp, Stagger } from "@/lib/motion";
import { jsonLines } from "./constants/constants";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Container } from "../layout/container";

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden pt-16 pb-0"
      style={{
        background: `
          radial-gradient(circle at 15% 125%, rgba(76,240,140,0.9) 0%, rgba(76,255,130,0.4) 20%, transparent 50%),
          radial-gradient(circle at 102% 170%, rgba(76,255,140,0.9) 0%, rgba(76,255,140,0.4) 30%, transparent 50%),
          linear-gradient(rgb(0,43,20) 0%, rgb(1,67,31) 102%, rgb(4,107,49) 70%)
        `,
      }}
    >
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

          {/* Search bar */}
          <motion.div variants={fadeInUp} className="mt-8 w-full max-w-lg">
            <div className="flex items-center overflow-hidden rounded-md border border-white/20 focus-within:border-white/40 transition-colors bg-white/17">
              <input
                type="text"
                placeholder="Search with company name or ticker symbol"
                className="flex-1 bg-transparent px-4 py-3 text-white placeholder:text-white/55 focus:outline-none text-[clamp(12px,2.4vw,14px)]"
              />
              <button
                className="flex h-full items-center justify-center px-4 text-white/70 hover:text-white transition-colors"
                aria-label="Search"
              >
                <Search className="h-4 w-4" />
              </button>
            </div>
          </motion.div>

          {/* Card stack */}
          <motion.div
            variants={fadeInUp}
            className="relative mt-12 w-[min(909px,100%)] h-[clamp(220px,40vw,372px)]"
          >
            {/* White backing card */}
            <div className="absolute inset-0 rounded-t-xl bg-white z-0">
              <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[min(863px,calc(100%-46px))]">
                <div className="flex items-center justify-between px-5 py-4 sm:py-3 bg-white">
                  <span className="font-mono text-xs text-black">
                    GET /events
                  </span>
                  <span className="flex items-center gap-1.5 font-mono text-xs">
                    <span className="h-2 w-2 rounded-full bg-accent" />
                    <span className="font-medium text-black">200</span>
                    <span className="text-black">ok</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Dark API card */}
            <div className="absolute bottom-0 left-1/2 overflow-hidden rounded-t-xl shadow-[0_0_60px_rgba(0,0,0,0.5)] -translate-x-1/2 w-[min(863px,calc(100%-46px))] h-[clamp(170px,35vw,325px)] border border-white/10 border-b-0 z-1">
              <div className="overflow-x-auto px-5 py-5 text-left font-mono text-xs leading-[1.8] bg-[#0a2013] h-full overflow-y-hidden">
                {jsonLines.map((line) => (
                  <div key={line.num} className="flex">
                    <span className="mr-5 w-5 shrink-0 select-none text-right text-accent">
                      {line.num}
                    </span>
                    <span className="text-accent">{line.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </Stagger>
      </Container>
    </section>
  );
}
