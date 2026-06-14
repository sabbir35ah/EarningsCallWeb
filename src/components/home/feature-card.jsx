"use client";

import { FadeUp } from "@/lib/motion";

export function FeatureCard({ icon, title, description, index }) {
  return (
    <FadeUp
      margin="-60px"
      delay={index * 0.07}
      whileHover={{ scale: 1.02 }}
      className="group flex flex-col p-5 transition-shadow duration-300 hover:shadow-md w-full min-h-50 rounded-md border-[0.5px] border-[#D7D7D7] bg-surface"
    >
      <div className="h-8 w-8">{icon ?? null}</div>

      <div className="mt-[clamp(24px,4vw,56px)]">
        <h3
          className="mb-2 font-semibold leading-snug text-brand-alt"
          style={{ fontSize: "clamp(14px, 2vw, 1.05rem)" }}
        >
          {title}
        </h3>
        <p
          className="font-light leading-relaxed text-brand-alt/75"
          style={{ fontSize: "clamp(12px, 1.5vw, 0.8125rem)" }}
        >
          {description}
        </p>
      </div>
    </FadeUp>
  );
}
