"use client";

import { useEffect, useRef } from "react";
import { Container } from "../layout/container";

const clients = [
  { id: "1", name: "MindCrop" },
  { id: "2", name: "MindCrop" },
  { id: "3", name: "MindCrop" },
  { id: "4", name: "MindCrop" },
  { id: "5", name: "MindCrop" },
  { id: "6", name: "MindCrop" },
  { id: "7", name: "MindCrop" },
  { id: "8", name: "MindCrop" },
];

const marqueeItems = [...clients, ...clients, ...clients];

export function TrustedBySection() {
  const trackRef = useRef(null);
  const animRef = useRef(null);
  const SPEED = 0.6;

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    track.scrollLeft = track.scrollWidth / 3;

    const tick = () => {
      track.scrollLeft += SPEED;
      const third = track.scrollWidth / 3;
      if (track.scrollLeft >= third * 2) track.scrollLeft -= third;
      if (track.scrollLeft <= 0) track.scrollLeft += third;
      animRef.current = requestAnimationFrame(tick);
    };

    animRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <section
      className="py-12 overflow-hidden"
      style={{ backgroundColor: "#fafafa" }}
    >
      <Container>
        <p
          className="mb-8"
          style={{
            color: "#012D12",
            textAlign: "center",
            fontFamily: "var(--font-stack-sans-headline), sans-serif",
            fontSize: "clamp(16px, 2.5vw, 24px)",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "clamp(24px, 3.5vw, 32px)",
            letterSpacing: "-0.3px",
          }}
        >
          Trusted by developers, founders &amp; investors around the world
        </p>
      </Container>

      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16"
          style={{
            background: "linear-gradient(to right, #fafafa, transparent)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16"
          style={{
            background: "linear-gradient(to left, #fafafa, transparent)",
          }}
        />

        <div
          ref={trackRef}
          className="flex items-center select-none overflow-x-scroll"
          style={{
            cursor: "default",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            gap: "clamp(20px, 5vw, 48px)",
            paddingInline: "24px",
          }}
        >
          {marqueeItems.map((client, i) => (
            <div
              key={`${client.id}-${i}`}
              className="flex shrink-0 items-center gap-1.5 max-[575px]:gap-1 opacity-70"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/icons/favicon-icon.svg"
                alt=""
                aria-hidden="true"
                style={{
                  width: "clamp(20px, 4vw, 30px)",
                  height: "clamp(20px, 4vw, 30px)",
                }}
              />
              <span
                style={{
                  color: "#000",
                  fontFamily: "var(--font-stack-sans-headline), sans-serif",
                  fontSize: "clamp(12px, 2.5vw, 18px)",
                  fontWeight: 400,
                  lineHeight: "25px",
                  whiteSpace: "nowrap",
                }}
              >
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
