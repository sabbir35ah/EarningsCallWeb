"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { companies } from "@/data/content";

// Triple the list so there's always content to the right while dragging
const marqueeItems = [...companies, ...companies, ...companies];

function CompanySlide({ company }) {
  return (
    <div
      className="company-details flex shrink-0 flex-col items-center gap-1.5"
      style={{ marginRight: "clamp(12px, 2vw, 26px)", width: "clamp(52px, 8vw, 80px)" }}
    >
      <div
        className="logo-block flex items-center justify-center"
        style={{
          width: "clamp(52px, 8vw, 80px)",
          height: "clamp(52px, 8vw, 80px)",
          aspectRatio: "1/1",
          borderRadius: "4px",
          border: "0.5px solid rgba(216, 216, 216, 0.62)",
          background: "#FFF",
          pointerEvents: "none",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={company.src}
          alt={`${company.name} Logo`}
          loading="lazy"
          decoding="async"
          draggable={false}
          style={{ maxWidth: "clamp(36px, 6vw, 60px)", maxHeight: "clamp(36px, 6vw, 60px)", objectFit: "contain" }}
          onError={(e) => { e.currentTarget.style.display = "none"; }}
        />
      </div>
      <p className="text-name text-center font-medium" style={{ color: "#374151", fontSize: "clamp(10px, 1.5vw, 14px)" }}>
        {company.name}
      </p>
    </div>
  );
}

export function LogoCloudSection() {
  const trackRef = useRef(null);
  const animRef  = useRef(null);
  const dragging = useRef(false);
  const prevX    = useRef(0);
  const SPEED    = 0.6; // px per frame — always running

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Start mid-list so drag-left always has content
    track.scrollLeft = track.scrollWidth / 3;

    const tick = () => {
      // Auto-scroll runs continuously — drag adds its own delta on top
      track.scrollLeft += SPEED;
      const third = track.scrollWidth / 3;
      if (track.scrollLeft >= third * 2) track.scrollLeft -= third;
      if (track.scrollLeft <= 0)         track.scrollLeft += third;
      animRef.current = requestAnimationFrame(tick);
    };

    animRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  const startDrag = (x) => {
    dragging.current = true;
    prevX.current    = x;
    trackRef.current.style.cursor = "grabbing";
  };

  const moveDrag = (x) => {
    if (!dragging.current) return;
    // Add drag delta on top of the always-running auto-scroll
    trackRef.current.scrollLeft += prevX.current - x;
    prevX.current = x;
  };

  const endDrag = () => {
    dragging.current = false;
    if (trackRef.current) trackRef.current.style.cursor = "grab";
  };

  return (
    <section className="overflow-hidden border-y border-gray-100 bg-white pt-12 pb-16">
      <Container>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            color: "#012D12",
            textAlign: "center",
            fontFamily: "var(--font-stack-sans-headline), sans-serif",
            fontSize: "clamp(16px, 4vw, 40px)",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "clamp(30px, 5vw, 48px)",
            letterSpacing: "-1px",
            marginBottom: "40px",
          }}
        >
          Access data from 9,000+ companies
        </motion.p>
      </Container>

      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24"
          style={{ background: "linear-gradient(to right, white, transparent)" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24"
          style={{ background: "linear-gradient(to left, white, transparent)" }}
        />

        {/* Scrollable drag track — scrollbar hidden via CSS */}
        <div
          ref={trackRef}
          className="flex items-start select-none overflow-x-scroll"
          style={{ cursor: "grab", scrollbarWidth: "none", msOverflowStyle: "none" }}
          onMouseDown={(e) => startDrag(e.pageX)}
          onMouseMove={(e) => moveDrag(e.pageX)}
          onMouseUp={endDrag}
          onMouseLeave={endDrag}
          onTouchStart={(e) => startDrag(e.touches[0].pageX)}
          onTouchMove={(e) => moveDrag(e.touches[0].pageX)}
          onTouchEnd={endDrag}
        >
          <style>{`.logo-track::-webkit-scrollbar { display: none; }`}</style>
          {marqueeItems.map((company, i) => (
            <CompanySlide key={`${company.id}-${i}`} company={company} />
          ))}
        </div>
      </div>
    </section>
  );
}
