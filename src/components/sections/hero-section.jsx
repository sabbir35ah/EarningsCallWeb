"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Container } from "@/components/layout/container";
import { fadeInUp, staggerContainer } from "@/components/shared/animated-section";

// All JSON text rendered in a single accent green per Figma (#4dec8c)
const jsonLines = [
  { num: 1,  text: "{" },
  { num: 2,  text: '  "company_name": "Apple Inc.",' },
  { num: 3,  text: '  "events": [' },
  { num: 4,  text: "    {" },
  { num: 5,  text: '      "year": 2024,' },
  { num: 6,  text: '      "quarter": 2,' },
  { num: 7,  text: '      "conference_date": "2024-05-02T17:00:00.000-04:00"' },
  { num: 8,  text: "    }," },
  { num: 9,  text: '    { "year": 2024,' },
  { num: 10, text: '      "quarter": 1,' },
  { num: 11, text: '      "conference_date": "2024-02-01T17:00:00.000-05:00"' },
];

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

      <Container className="relative z-10 flex flex-col items-center pt-20 pb-0 text-center sm:pt-28" style={{ paddingBottom: 0, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex w-full flex-col items-center"
        >
          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            style={{
              color: "#fff",
              fontFamily: "var(--font-stack-sans-headline), sans-serif",
              fontSize: "clamp(20px, 5vw, 60px)",
              fontWeight: 400,
              lineHeight: "clamp(36px, 6vw, 72px)",
              textAlign: "center",
              width: "min(909px, 100%)",
            }}
          >
            Earnings Call Transcripts
            <br />
            API Structured, Clean &amp; Scalable
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            style={{
              width: "min(834px, 100%)",
              color: "#fff",
              textAlign: "center",
              fontFamily: "var(--font-stack-sans-headline), sans-serif",
              fontSize: "clamp(12px, 2.8vw, 16px)",
              fontStyle: "normal",
              fontWeight: 300,
              lineHeight: "24px",
              marginTop: "24px",
            }}
          >
            Historical and current earnings transcripts, audio files, slide decks, and
            event data from 9,000+ public companies — clean JSON, one API, ready to ship.
          </motion.p>

          {/* Search bar */}
          <motion.div variants={fadeInUp} className="mt-8 w-full max-w-lg">
            <div
              className="flex items-center overflow-hidden rounded-md border border-white/20 focus-within:border-white/40 transition-colors"
              style={{ backgroundColor: "rgba(255,255,255,0.17)" }}
            >
              <input
                type="text"
                placeholder="Search with company name or ticker symbol"
                className="flex-1 bg-transparent px-4 py-3 text-white placeholder:text-white/55 focus:outline-none"
                style={{ fontSize: "clamp(12px, 2.4vw, 14px)" }}
              />
              <button
                className="flex h-full items-center justify-center px-4 text-white/70 hover:text-white transition-colors"
                aria-label="Search"
              >
                <Search className="h-4 w-4" />
              </button>
            </div>
          </motion.div>

          {/* Card stack — white frame behind, dark API card in front */}
          <motion.div
            variants={fadeInUp}
            className="relative mt-12"
            style={{ width: "min(909px, 100%)", height: "clamp(220px, 40vw, 372px)", marginBottom: 0 }}
          >
            {/* White backing card — visible left, top, right */}
            <div
              className="absolute inset-0 rounded-t-xl"
              style={{ backgroundColor: "#ffffff", width: "100%", height: "100%", zIndex: 0 }}
            >
              {/* Header bar sits in the white top strip, aligned to dark card width */}
              <div
                className="absolute left-1/2"
                style={{
                  top: 0,
                  transform: "translateX(-50%)",
                  width: "min(863px, calc(100% - 46px))",
                }}
              >
                <div
                  className="flex items-center justify-between px-5 py-4 sm:py-3"
                  style={{
                    backgroundColor: "#ffffff",
                  }}
                >
                  <span className="font-mono text-xs" style={{ color: "#000000" }}>GET /events</span>
                  <span className="flex items-center gap-1.5 font-mono text-xs">
                    <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "#4dec8c" }} />
                    <span className="font-medium" style={{ color: "#000000" }}>200</span>
                    <span style={{ color: "#000000" }}>ok</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Dark API card — centered, flush at bottom, code only */}
            <div
              className="absolute bottom-0 left-1/2 overflow-hidden rounded-t-xl shadow-[0_0_60px_rgba(0,0,0,0.5)]"
              style={{
                transform: "translateX(-50%)",
                width: "min(863px, calc(100% - 46px))",
                height: "clamp(170px, 35vw, 325px)",
                border: "1px solid rgba(255,255,255,0.10)",
                borderBottom: "none",
                zIndex: 1,
              }}
            >
            {/* Code area — full height of dark card */}
            <div
              className="overflow-x-auto px-5 py-5 text-left font-mono text-xs leading-[1.8]"
              style={{ backgroundColor: "#0a2013", height: "100%", overflowY: "hidden" }}
            >
              {jsonLines.map((line) => (
                <div key={line.num} className="flex">
                  <span
                    className="mr-5 w-5 shrink-0 select-none text-right"
                    style={{ color: "#4dec8c" }}
                  >
                    {line.num}
                  </span>
                  <span style={{ color: "#4dec8c" }}>{line.text}</span>
                </div>
              ))}
            </div>
            </div>{/* end dark API card */}
          </motion.div>{/* end card stack */}
        </motion.div>
      </Container>
    </section>
  );
}
