"use client";
import { trackStyle, thumbSize, labelSize, badgeSize } from "@/lib/helpers";
import { cn } from "@/lib/utils";

export function BillingToggle({ billing, setBilling }) {
  const isAnnual = billing === "annual";

  return (
    <div className="flex items-center gap-3 sm:gap-4">
      <span
        className={cn(
          "font-headline leading-6 transition-colors duration-200",
          !isAnnual ? "font-normal text-brand-alt" : "font-light text-muted",
        )}
        style={labelSize}
      >
        Monthly
      </span>

      <button
        role="switch"
        aria-checked={isAnnual}
        onClick={() => setBilling(isAnnual ? "monthly" : "annual")}
        className={cn(
          "relative inline-flex shrink-0 cursor-pointer rounded-full border-0 p-0 transition-colors duration-200",
          isAnnual ? "bg-brand-alt" : "bg-gray-300",
        )}
        style={trackStyle}
      >
        <span
          className="absolute top-0.5 rounded-full bg-white shadow-sm transition-all duration-200"
          style={{
            ...thumbSize,
            left: isAnnual ? "clamp(12px, 3vw, 22px)" : "2px",
          }}
        />
      </button>

      <div className="flex items-center gap-2">
        <span
          className={cn(
            "font-headline leading-6 transition-colors duration-200",
            isAnnual ? "font-normal text-brand-alt" : "font-light text-muted",
          )}
          style={labelSize}
        >
          Annual
        </span>

        <div
          className="flex items-center gap-1.5 px-2 sm:px-3 py-1 rounded-full font-headline font-normal leading-5 text-brand-alt bg-[rgba(46,214,116,0.12)]"
          style={badgeSize}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="6"
            viewBox="0 0 6 6"
            fill="none"
          >
            <path
              d="M3.00312 0C1.3445 0 0 1.3431 0 3C0 4.6569 1.3445 6 3.00312 6C4.66175 6 6.00625 4.6569 6.00625 3C6.00625 1.3431 4.66175 0 3.00312 0Z"
              fill="#2ED674"
            />
          </svg>
          Save 20% Off
        </div>
      </div>
    </div>
  );
}
