"use client";
import { useState } from "react";
import { heroTags } from "../constants/constants";
import { AudienceToggle } from "./audience-toggle";

export function PricingHero() {
  const [audience, setAudience] = useState("individual");

  return (
    <section
      className="bg-white pb-10 sm:pb-14 lg:pb-16 px-4"
      style={{ paddingTop: "calc(var(--navbar-height) + 40px + 24px)" }}
    >
      <div className="max-w-226.7 mx-auto flex flex-col items-center gap-4 text-center">
        <AudienceToggle audience={audience} setAudience={setAudience} />
        <h1
          className="font-headline font-normal leading-[1.2] max-w-147 text-[#023f1a] tracking-[-0.8px]"
          style={{
            fontSize: "clamp(16px, 5vw, 60px)",
          }}
        >
          The earnings call API. Plug in. Start building.
        </h1>

        <p
          className="font-headline font-light text-brand leading-6"
          style={{ fontSize: "clamp(13px, 1.8vw, 16px)" }}
        >
          9,000+ companies. One API key. Zero infrastructure.
        </p>

        <div className="flex flex-wrap justify-center mt-1 gap-[clamp(14px,3vw,28px)]">
          {heroTags.map(({ label, icon }) => (
            <span
              key={label}
              className="flex items-center gap-1.5 font-headline font-light text-brand leading-5"
              style={{ fontSize: "clamp(12px, 1.5vw, 14px)" }}
            >
              {icon}
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
