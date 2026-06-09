"use client";

import { motion } from "framer-motion";
import {
  slideInLeft,
  slideInRight,
} from "@/components/shared/animated-section";

// ─── Calendar data ────────────────────────────────────────────────────────────
const DAY_HEADERS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const BADGE_COUNTS = [362, 112, 362, 112, 112, 112, 112];

const WEEKS = [
  [
    { day: 28, isPrev: true },
    { day: 29, isPrev: true },
    { day: 30, isPrev: true },
    { day: 31, isPrev: true },
    { day: 1 },
    { day: 2 },
    { day: 3 },
  ],
  [
    { day: 4 },
    { day: 5 },
    { day: 6 },
    { day: 7 },
    { day: 8 },
    { day: 9 },
    { day: 10 },
  ],
  [
    { day: 11 },
    { day: 12 },
    { day: 13 },
    { day: 14 },
    { day: 15 },
    { day: 16 },
    { day: 17 },
  ],
  [
    { day: 18 },
    { day: 19 },
    { day: 20 },
    { day: 21 },
    { day: 22 },
    { day: 23 },
    { day: 24 },
  ],
  [
    { day: 25 },
    { day: 26 },
    { day: 27 },
    { day: 28 },
    { day: 29 },
    { day: 30 },
    { day: 31 },
  ],
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function EventBadge({ count, isSaturday }) {
  return (
    <span
      className="mt-1 inline-flex items-center justify-center rounded-full px-1.5 py-0.5 text-[9px] font-semibold leading-none sm:px-2 sm:text-[10px]"
      style={{
        backgroundColor: isSaturday ? "#4dec8c" : "#40ff8f",
        color: "#012d12",
      }}
    >
      {count}
    </span>
  );
}

function DayCell({ cell, colIndex }) {
  const isSaturday = colIndex === 6;
  return (
    <div className="flex flex-col items-center py-2 sm:py-3 lg:py-1">
      <span
        className="text-[10px] font-medium leading-none sm:text-[11px]"
        style={{
          color: cell.isPrev
            ? "rgba(255,255,255,0.3)"
            : "rgba(255,255,255,0.9)",
        }}
      >
        {cell.day}
      </span>
      {!cell.isPrev && (
        <EventBadge count={BADGE_COUNTS[colIndex]} isSaturday={isSaturday} />
      )}
    </div>
  );
}

function AugustCalendar() {
  return (
    <div className="w-full overflow-hidden rounded-xl">
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-3 sm:px-4">
        <span className="text-sm font-semibold text-white sm:text-base">
          August
        </span>
        <div className="flex items-center gap-1.5">
          <span
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: "#4dec8c" }}
          />
          <span className="text-xs text-white/70">Calls</span>
        </div>
      </div>

      {/* Day-of-week headers */}
      <div className="grid grid-cols-7">
        {DAY_HEADERS.map((d) => (
          <div
            key={d}
            className="py-2 text-center text-[9px] font-medium text-white/60 sm:text-[10px]"
          >
            {d}
          </div>
        ))}
      </div>

      {/* Weeks */}
      <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8">
        {WEEKS.map((week, wi) => (
          <div key={wi} className="grid grid-cols-7">
            {week.map((cell, ci) => (
              <DayCell key={`${wi}-${ci}`} cell={cell} colIndex={ci} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Stats & Bullets ─────────────────────────────────────────────────────────
const STATS = [
  { value: "55k+", label: "Total Call" },
  { value: "9000+", label: "Companies" },
  { value: "Live", label: "Updates" },
];

const BULLETS = [
  "Stay ahead with every scheduled earnings call, all in one view.",
  "Structured earnings data. Ready the moment you connect.",
];

// ─── Main section ─────────────────────────────────────────────────────────────
export function CalendarSection() {
  return (
    <section
      id="calendar"
      className="py-10 sm:py-16 lg:py-[103px]"
      style={{
        background:
          "radial-gradient(circle at 15% 125%, rgba(76,240,140,0.9) 0%, rgba(76,255,130,0.4) 20%, transparent 50%), radial-gradient(circle at 102% 170%, rgba(76,255,140,0.9) 0%, rgba(76,255,140,0.4) 30%, transparent 50%), linear-gradient(rgb(0,43,20) 0%, rgb(1,67,31) 102%, rgb(4,107,49) 70%)",
      }}
    >
      <div className="mx-auto px-4 sm:px-6" style={{ maxWidth: "1440px" }}>
        <div
          className="w-full"
          style={{
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.14)",
            backdropFilter: "blur(12px)",
            borderRadius: "16px",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* ── LEFT COLUMN ── */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-12 lg:px-[85px] lg:py-[45px] lg:border-r"
              style={{ borderColor: "rgba(255,255,255,0.15)" }}
            >
              <h2
                className="mb-6 sm:mb-8"
                style={{
                  color: "#FFF",
                  fontFamily: "var(--font-stack-sans-headline), sans-serif",
                  fontSize: "clamp(16px, 3vw, 32px)",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "40px",
                  letterSpacing: "-0.5px",
                  width: "min(562px, 100%)",
                }}
              >
                Never Miss a Beat with the Earnings Call Calendar
              </h2>

              <ul className="mb-6 space-y-3 sm:mb-8 sm:space-y-4">
                {BULLETS.map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="mt-[3px] h-3 w-3 shrink-0 rounded-full"
                      style={{ backgroundColor: "#4dec8c" }}
                      aria-hidden="true"
                    />
                    <span
                      className="font-light leading-relaxed text-white/85"
                      style={{ fontSize: "clamp(12px, 1.5vw, 14px)" }}
                    >
                      {text}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="order-1 min-[576px]:order-2 mb-8 flex flex-wrap gap-x-6 gap-y-4 min-[576px]:mb-0 min-[576px]:mt-8 sm:gap-x-10">
                {STATS.map((stat) => (
                  <div key={stat.label} className="flex flex-col">
                    <span
                      style={{
                        color: "#FFF",
                        fontFamily:
                          "var(--font-stack-sans-headline), sans-serif",
                        fontSize: "clamp(22px, 3vw, 32px)",
                        fontStyle: "normal",
                        fontWeight: 600,
                        lineHeight: "normal",
                        letterSpacing: "0.2px",
                      }}
                    >
                      {stat.value}
                    </span>
                    <span className="text-xs text-white/55">{stat.label}</span>
                  </div>
                ))}
              </div>

              <button
                className="order-2 min-[576px]:order-1 mb-0 min-[576px]:mb-8 w-[150px] min-[576px]:w-[193px] h-[40px] min-[576px]:h-[50px] text-[12px] min-[576px]:text-[18px] inline-flex items-center justify-center gap-2 rounded-md transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: "#ffffff",
                  color: "#012D12",
                  padding: "0 12px",
                  fontFamily: "var(--font-stack-sans-headline), sans-serif",
                  fontStyle: "normal",
                  fontWeight: 300,
                  lineHeight: "28px",
                  textAlign: "center",
                  whiteSpace: "nowrap",
                }}
              >
                Go to Calendar
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  style={{
                    width: "clamp(16px, 2vw, 22px)",
                    height: "clamp(16px, 2vw, 22px)",
                  }}
                >
                  <rect width="22" height="22" rx="2" fill="#1DBF73" />
                  <path
                    d="M18.5296 10.5295V11.4706H9.58972V10.5295H18.5296Z"
                    fill="#013214"
                  />
                  <path
                    d="M18.8623 10.6674C19.0461 10.8511 19.0461 11.149 18.8623 11.3327L14.1571 16.0379L13.4918 15.3726L17.8643 11L13.4918 6.6275L14.1571 5.96216L18.8623 10.6674Z"
                    fill="#013214"
                  />
                  <path
                    d="M4.88446 10.5295V11.4706H3.94342V10.5295H4.88446Z"
                    fill="#013214"
                  />
                  <path
                    d="M6.76657 10.5295V11.4706H5.82553V10.5295H6.76657Z"
                    fill="#013214"
                  />
                  <path
                    d="M8.64871 10.5295V11.4706H7.70767V10.5295H8.64871Z"
                    fill="#013214"
                  />
                </svg>
              </button>
            </motion.div>

            {/* ── RIGHT COLUMN — Calendar widget ── */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-center justify-center border-t px-6 py-10 sm:px-10 sm:py-12 lg:border-t-0 lg:px-[90px] lg:py-[103px] lg:justify-start"
              style={{ borderColor: "rgba(255,255,255,0.10)" }}
            >
              <div className="w-full">
                <AugustCalendar />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
