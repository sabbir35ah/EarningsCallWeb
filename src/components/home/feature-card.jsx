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
          className="mb-2 text-brand-alt text-[14px] 991:text-[20px]"
          style={{
            color: "#013214",
            fontFamily: "var(--font-stack-sans-headline)",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "28px",
          }}
        >
          {title}
        </h3>
        <p
          className="text-brand-alt"
          style={{
            width: "306px",
            color: "#013214",
            fontFamily: "var(--font-stack-sans-headline)",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: 300,
            lineHeight: "20px",
          }}
        >
          {description}
        </p>
      </div>
    </FadeUp>
  );
}
