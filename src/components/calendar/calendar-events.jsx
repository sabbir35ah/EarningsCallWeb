"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { AVAILABLE_DATES, earningsEvents } from "./constants";

const DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function getOrdinalSuffix(d) {
  if ([11, 12, 13].includes(d % 100)) return "th";
  if (d % 10 === 1) return "st";
  if (d % 10 === 2) return "nd";
  if (d % 10 === 3) return "rd";
  return "th";
}

function formatDisplayDate(dateKey) {
  const [y, m, d] = dateKey.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  const dayName = DAY_NAMES[date.getDay()];
  const monthName = MONTH_NAMES[m - 1];
  const suffix = getOrdinalSuffix(d);
  return `${dayName}, ${monthName} ${d}${suffix}, ${y}`;
}

function toMinutes(timeStr) {
  const [time, period] = timeStr.split(" ");
  let [h, min] = time.split(":").map(Number);
  if (period === "PM" && h !== 12) h += 12;
  if (period === "AM" && h === 12) h = 0;
  return h * 60 + min;
}

function groupByTime(events) {
  const map = {};
  for (const ev of events) {
    if (!map[ev.time]) map[ev.time] = [];
    map[ev.time].push(ev);
  }
  return Object.entries(map).sort((a, b) => toMinutes(a[0]) - toMinutes(b[0]));
}

function EventCard({ company, quarter, year }) {
  return (
    <div className="sm:w-1/2 lg:w-1/3 xl:w-1/4 w-full px-2 mb-4">
      <Link href="#" className="block group h-full">
        <div className="h-full flex flex-col justify-between gap-3 transition-all" style={{ background: "linear-gradient(135deg, #6ef2a4, #4dec8c 65%, #2bbf6c)", borderRadius: "5px", boxShadow: "0 0 6px rgba(0,0,0,0.239)", padding: "11px 13px" }}>
          <div className="text-sm font-medium text-brand leading-snug">{company}</div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-brand text-sm">{quarter}</span>
            <span className="text-muted text-sm">{year}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

function TimeGroup({ time, events }) {
  return (
    <div className="bg-white border rounded-xl overflow-hidden" style={{ borderColor: "transparent", marginBottom: "14px" }}>
      <h2 className="flex items-center gap-3" style={{ alignItems: "center", backgroundColor: "rgba(77,236,140,0.35)", border: 0, borderRadius: "4px", display: "flex", padding: "0.5rem" }}>
        <span className="font-headline font-semibold text-brand text-base sm:text-lg">{time}</span>
        <span className="text-sm text-muted">{events.length} {events.length === 1 ? "Call" : "Calls"}</span>
      </h2>
      <div style={{ background: "rgba(77,236,140,0.1) 0 0 no-repeat padding-box", borderBottomLeftRadius: "4px", borderBottomRightRadius: "4px", minHeight: "138px", padding: "18px 25px 3px" }}>
        <div className="flex flex-wrap -mx-2">
          {events.map((ev, i) => (
            <EventCard key={i} {...ev} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function CalendarEvents() {
  const [dateKey, setDateKey] = useState("2026-06-23");

  const idx = AVAILABLE_DATES.indexOf(dateKey);
  const hasPrev = idx > 0;
  const hasNext = idx < AVAILABLE_DATES.length - 1;

  const events = earningsEvents[dateKey] || [];
  const grouped = useMemo(() => groupByTime(events), [events]);

  return (
    <section className="bg-surface py-10 sm:py-16 lg:py-20 min-h-[50vh]">
      <Container>
        {/* Date navigator */}
        <div className="flex items-center justify-between gap-4 mb-10 sm:mb-12">
          <button
            onClick={() => hasPrev && setDateKey(AVAILABLE_DATES[idx - 1])}
            disabled={!hasPrev}
            aria-label="Previous day"
            className="shrink-0 flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
            style={{ backgroundColor: "rgba(0,0,0,0.8)", borderRadius: "5px", fontSize: "22px", fontWeight: 500, paddingTop: "0.782rem", paddingBottom: "0.782rem", width: "139px" }}
          >
            Previous
          </button>

          <div className="flex items-center gap-2 text-brand mx-auto inline-flex">
            <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" enableBackground="new 0 0 512 512" height="36" viewBox="0 0 512 512" width="36" className="shrink-0" aria-hidden="true"><g><path d="m391.017 251.454h35.714c8.074 0 14.643-6.569 14.643-14.643v-35.714c0-8.074-6.569-14.643-14.643-14.643h-35.714c-8.074 0-14.643 6.569-14.643 14.643v35.714c0 8.074 6.569 14.643 14.643 14.643zm.357-50h35v35h-35zm-.357 145h35.714c8.074 0 14.643-6.569 14.643-14.643v-35.714c0-8.074-6.569-14.643-14.643-14.643h-35.714c-8.074 0-14.643 6.569-14.643 14.643v35.714c0 8.074 6.569 14.643 14.643 14.643zm.357-50h35v35h-35zm-102.273-45h35.714c8.074 0 14.643-6.569 14.643-14.643v-35.714c0-8.074-6.569-14.643-14.643-14.643h-35.714c-8.074 0-14.643 6.569-14.643 14.643v35.714c0 8.074 6.569 14.643 14.643 14.643zm.357-50h35v35h-35zm-168.475 170.546h-35.714c-8.074 0-14.643 6.569-14.643 14.643v35.714c0 8.074 6.569 14.643 14.643 14.643h35.714c8.074 0 14.643-6.569 14.643-14.643v-35.714c0-8.074-6.569-14.643-14.643-14.643zm-.357 50h-35v-35h35zm.357-235.546h-35.714c-8.074 0-14.643 6.569-14.643 14.643v35.714c0 8.074 6.569 14.643 14.643 14.643h35.714c8.074 0 14.643-6.569 14.643-14.643v-35.714c0-8.075-6.569-14.643-14.643-14.643zm-.357 50h-35v-35h35zm168.475 107.773h35.714c8.074 0 14.643-6.569 14.643-14.643v-35.714c0-8.074-6.569-14.643-14.643-14.643h-35.714c-8.074 0-14.643 6.569-14.643 14.643v35.714c0 8.074 6.569 14.643 14.643 14.643zm.357-50h35v35h-35zm159.365-259.953h-32.066v-11.467c0-12.576-10.231-22.807-22.807-22.807h-3.444c-12.575 0-22.806 10.231-22.806 22.807v11.467h-223.4v-11.467c0-12.576-10.231-22.807-22.807-22.807h-3.444c-12.576 0-22.807 10.231-22.807 22.807v11.467h-32.065c-20.705 0-37.55 16.845-37.55 37.55v402.676c0 20.678 16.822 37.5 37.5 37.5h385.748c20.678 0 37.5-16.822 37.5-37.5v-402.676c-.001-20.705-16.846-37.55-37.552-37.55zm-66.123-11.467c0-4.305 3.502-7.807 7.807-7.807h3.444c4.305 0 7.807 3.502 7.807 7.807v11.467h-19.058zm-272.457 0c0-4.305 3.502-7.807 7.807-7.807h3.444c4.305 0 7.807 3.502 7.807 7.807v11.467h-19.057v-11.467zm361.131 451.693c0 12.407-10.093 22.5-22.5 22.5h-385.748c-12.407 0-22.5-10.093-22.5-22.5v-.047c6.284 4.735 14.095 7.547 22.551 7.547h304.083c10.03 0 19.46-3.906 26.552-10.999l77.562-77.562zm-85.215-17.059c.588-2.427.908-4.958.908-7.563v-50.064c0-9.44 7.681-17.121 17.122-17.121h50.063c2.605 0 5.136-.32 7.563-.908zm85.215-315.987h-319.574c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h319.574v194.118c0 9.441-7.681 17.122-17.122 17.122h-50.063c-17.712 0-32.122 14.41-32.122 32.121v50.064c0 9.441-7.681 17.122-17.121 17.122h-291.769c-12.434 0-22.55-10.116-22.55-22.551v-287.996h81.173c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-81.174v-69.63c0-12.434 10.116-22.55 22.55-22.55h32.066v22.052c0 12.576 10.231 22.807 22.807 22.807 4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5c-4.305 0-7.807-3.502-7.807-7.807v-22.052h257.458v22.052c0 12.576 10.231 22.807 22.807 22.807 4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5c-4.305 0-7.807-3.502-7.807-7.807v-22.052h66.124c12.434 0 22.55 10.116 22.55 22.55zm-350.391 137.773h-35.714c-8.074 0-14.643 6.569-14.643 14.643v35.714c0 8.074 6.569 14.643 14.643 14.643h35.714c8.074 0 14.643-6.569 14.643-14.643v-35.714c0-8.075-6.569-14.643-14.643-14.643zm-.357 50h-35v-35h35zm66.559-77.773h35.714c8.074 0 14.643-6.569 14.643-14.643v-35.714c0-8.074-6.569-14.643-14.643-14.643h-35.714c-8.074 0-14.643 6.569-14.643 14.643v35.714c0 8.074 6.569 14.643 14.643 14.643zm.357-50h35v35h-35zm101.907 220.546c-.186-3.977-3.469-7.143-7.492-7.143-4.142 0-7.5 3.358-7.5 7.5 0 8.074 6.569 14.643 14.643 14.643h35.714c8.074 0 14.643-6.569 14.643-14.643v-35.714c0-8.074-6.569-14.643-14.643-14.643h-35.714c-8.074 0-14.643 6.569-14.643 14.643v10.3c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-9.943h35v35zm-102.264-77.773h35.714c8.074 0 14.643-6.569 14.643-14.643v-35.714c0-8.074-6.569-14.643-14.643-14.643h-35.714c-8.074 0-14.643 6.569-14.643 14.643v35.714c0 8.074 6.569 14.643 14.643 14.643zm.357-50h35v35h-35zm-.357 142.773h35.714c8.074 0 14.643-6.569 14.643-14.643v-35.714c0-8.074-6.569-14.643-14.643-14.643h-35.714c-8.074 0-14.643 6.569-14.643 14.643v35.714c0 8.074 6.569 14.643 14.643 14.643zm.357-50h35v35h-35z"/></g></svg>
            <span style={{ color: "#171717", fontSize: "24px", fontWeight: 600, letterSpacing: 0, width: "100%" }}>
              {formatDisplayDate(dateKey)}
            </span>
          </div>

          <button
            onClick={() => hasNext && setDateKey(AVAILABLE_DATES[idx + 1])}
            disabled={!hasNext}
            aria-label="Next day"
            className="shrink-0 flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
            style={{ backgroundColor: "rgba(0,0,0,0.8)", borderRadius: "5px", fontSize: "22px", fontWeight: 500, paddingTop: "0.782rem", paddingBottom: "0.782rem", width: "139px" }}
          >
            Next
          </button>
        </div>

        {/* Event groups */}
        {grouped.length === 0 ? (
          <div className="text-center py-16 text-muted font-headline text-sm">
            No earnings calls scheduled for this date.
          </div>
        ) : (
          <div className="flex flex-col gap-8">
            {grouped.map(([time, timeEvents]) => (
              <TimeGroup key={time} time={time} events={timeEvents} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
