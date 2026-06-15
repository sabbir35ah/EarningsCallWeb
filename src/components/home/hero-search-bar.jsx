"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { fadeInUp } from "@/lib/motion";

export function HeroSearchBar() {
  return (
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
  );
}
