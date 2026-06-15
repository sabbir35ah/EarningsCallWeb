"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motion";
import { jsonLines } from "./constants/constants";

export function HeroCardStack() {
  return (
    <motion.div
      variants={fadeInUp}
      className="relative mt-12 w-[min(909px,100%)] h-[clamp(220px,40vw,372px)]"
    >
      {/* White backing card */}
      <div className="absolute inset-0 rounded-t-xl bg-white z-0">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[min(863px,calc(100%-46px))]">
          <div className="flex items-center justify-between px-5 py-4 sm:py-3 bg-white">
            <span className="font-mono text-xs text-black">GET /events</span>
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
  );
}
