"use client";

import { motion } from "framer-motion";

export function FeatureCard({ icon, title, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ scale: 1.02 }}
      className="group flex flex-col p-5 transition-shadow duration-300 hover:shadow-md"
      style={{
        width: "100%",
        minHeight: "200px",
        borderRadius: "6px",
        border: "0.5px solid #D7D7D7",
        background: "#FAFAFA",
      }}
    >
      {/* Icon — pass any SVG/JSX as the icon prop */}
      <div className="h-8 w-8">
        {icon ?? null}
      </div>

      {/* Text — 56px below icon */}
      <div style={{ marginTop: "clamp(24px, 4vw, 56px)" }}>
        <h3
          className="mb-2 font-semibold leading-snug"
          style={{ color: "#013214", fontSize: "clamp(14px, 2vw, 1.05rem)" }}
        >
          {title}
        </h3>
        <p
          className="font-light leading-relaxed"
          style={{ color: "#013214", opacity: 0.75, fontSize: "clamp(12px, 1.5vw, 0.8125rem)" }}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
}
