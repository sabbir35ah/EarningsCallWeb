"use client";
import { SlideIn } from "@/lib/motion";
import {
  DAY_HEADERS,
  BADGE_COUNTS,
  WEEKS,
  calendarStats,
  calendarBullets,
} from "./constants/constants";
import { Container } from "../layout/container";
import { Button } from "@/components/ui/button";

function EventBadge({ count }) {
  return (
    <span className="mt-1 inline-flex items-center justify-center rounded-full bg-accent px-1.5 py-0.5 text-[9px] font-semibold leading-none text-brand sm:px-2 sm:text-[10px]">
      {count}
    </span>
  );
}

function DayCell({ cell, colIndex }) {
  return (
    <div className="flex flex-col items-center py-2 sm:py-3 lg:py-1">
      <span
        className={`text-[10px] font-medium leading-none sm:text-[11px] ${
          cell.isPrev ? "text-white/30" : "text-white/90"
        }`}
      >
        {cell.day}
      </span>
      {!cell.isPrev && <EventBadge count={BADGE_COUNTS[colIndex]} />}
    </div>
  );
}

function AugustCalendar() {
  return (
    <div className="w-full overflow-hidden rounded-xl">
      <div className="flex items-center justify-between px-3 py-3 sm:px-4">
        <span className="text-sm font-semibold text-white sm:text-base">
          August
        </span>
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-accent" />
          <span className="text-xs text-white/70">Calls</span>
        </div>
      </div>

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

export function CalendarSection() {
  return (
    <section
      id="calendar"
      className="py-10 sm:py-16 lg:py-25.75"
      style={{
        background:
          "radial-gradient(circle at 15% 125%, rgba(76,240,140,0.9) 0%, rgba(76,255,130,0.4) 20%, transparent 50%), radial-gradient(circle at 102% 170%, rgba(76,255,140,0.9) 0%, rgba(76,255,140,0.4) 30%, transparent 50%), linear-gradient(rgb(0,43,20) 0%, rgb(1,67,31) 102%, rgb(4,107,49) 70%)",
      }}
    >
      <Container>
        <div className="w-full rounded-2xl border border-white/14 bg-white/7 backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* LEFT COLUMN */}
            <SlideIn
              direction="left"
              className="flex flex-col justify-center border-white/15 px-6 py-10 sm:px-10 sm:py-12 lg:border-r lg:px-21.25 lg:py-11.25"
            >
              <h2 className="mb-6 w-[min(562px,100%)] text-subheading text-white sm:mb-8">
                Never Miss a Beat with the Earnings Call Calendar
              </h2>

              <ul className="mb-6 space-y-3 sm:mb-8 sm:space-y-4">
                {calendarBullets.map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="mt-0.75 h-3 w-3 shrink-0 rounded-full bg-accent"
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

              <div className="order-1 mb-8 flex flex-wrap gap-x-6 gap-y-4 min-[576px]:order-2 min-[576px]:mb-0 min-[576px]:mt-8 sm:gap-x-10">
                {calendarStats.map((stat) => (
                  <div key={stat.label} className="flex flex-col">
                    <span className="text-stat text-white">{stat.value}</span>
                    <span className="text-xs text-white font-light">{stat.label}</span>
                  </div>
                ))}
              </div>

              <Button
                variant="white"
                className="order-2 mb-0 h-10 w-45 px-5! text-[12px] font-light text-btn min-[576px]:order-1 min-[576px]:mb-8 min-[576px]:h-12.5 min-[576px]:w-48.25 min-[576px]:text-[18px]"
              >
                Go to Calendar
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <rect width="22" height="22" rx="2" fill="#1DBF73" />
                  <path d="M18.5296 10.5295V11.4706H9.58972V10.5295H18.5296Z" fill="#013214" />
                  <path d="M18.8623 10.6674C19.0461 10.8511 19.0461 11.149 18.8623 11.3327L14.1571 16.0379L13.4918 15.3726L17.8643 11L13.4918 6.6275L14.1571 5.96216L18.8623 10.6674Z" fill="#013214" />
                  <path d="M4.88446 10.5295V11.4706H3.94342V10.5295H4.88446Z" fill="#013214" />
                  <path d="M6.76657 10.5295V11.4706H5.82553V10.5295H6.76657Z" fill="#013214" />
                  <path d="M8.64871 10.5295V11.4706H7.70767V10.5295H8.64871Z" fill="#013214" />
                </svg>
              </Button>
            </SlideIn>

            {/* RIGHT COLUMN — Calendar widget */}
            <SlideIn
              direction="right"
              className="flex items-center justify-center border-t border-white/10 px-6 py-10 sm:px-10 sm:py-12 lg:justify-start lg:border-t-0 lg:px-22.5 lg:py-25.75"
            >
              <div className="w-full">
                <AugustCalendar />
              </div>
            </SlideIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
