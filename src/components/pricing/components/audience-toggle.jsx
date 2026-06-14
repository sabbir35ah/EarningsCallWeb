"use client";

import { cn } from "@/lib/utils";

const OPTIONS = ["individual", "commercial"];

export function AudienceToggle({ audience, setAudience }) {
  return (
    <div className="inline-flex">
      {OPTIONS.map((val) => (
        <button
          key={val}
          type="button"
          onClick={() => setAudience(val)}
          className={cn(
            "inline-flex items-center justify-center font-headline font-light leading-7 transition-all duration-200 border border-brand-alt",
            val === "individual" ? "rounded-l-md" : "rounded-r-md border-l-0",
            audience === val
              ? "bg-brand-alt text-white"
              : "bg-transparent text-brand-alt",
          )}
          style={{
            height: "clamp(30px, 5vw, 52px)",
            padding: "0 clamp(10px, 3vw, 32px)",
            fontSize: "clamp(11px, 2vw, 18px)",
          }}
        >
          {val.charAt(0).toUpperCase() + val.slice(1)}
        </button>
      ))}
    </div>
  );
}
