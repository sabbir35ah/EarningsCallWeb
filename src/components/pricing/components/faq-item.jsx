"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, X } from "lucide-react";
import { useState } from "react";

export function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        className="flex w-full items-center justify-between py-5 sm:py-6 text-left gap-3"
        onClick={() => setOpen(!open)}
      >
        <span
          className="font-headline font-light text-brand-alt"
          style={{ fontSize: "clamp(13px, 1.8vw, 16px)" }}
        >
          {question}
        </span>
        <span className="shrink-0">
          {open ? (
            <Minus size={20} className="text-brand-alt" />
          ) : (
            <Plus size={20} className="text-brand-alt" />
          )}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p
              className="pb-4 font-headline font-light text-[#4D7A5E] leading-6"
              style={{ fontSize: "clamp(12px, 1.5vw, 14px)" }}
            >
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="h-px bg-gray-200" />
    </div>
  );
}
