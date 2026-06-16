"use client";

import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/lib/motion";
import { heroStats } from "./constants/constants";

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
    >
      <rect width="22" height="22" rx="2" fill="#1DBF73" />
      <path d="M18.5296 10.5293V11.4703H9.58972V10.5293H18.5296Z" fill="#013214" />
      <path d="M18.8622 10.6671C19.046 10.8509 19.046 11.1487 18.8622 11.3325L14.157 16.0377L13.4917 15.3723L17.8642 10.9998L13.4917 6.62726L14.157 5.96191L18.8622 10.6671Z" fill="#013214" />
      <path d="M4.8844 10.5293V11.4703H3.94336V10.5293H4.8844Z" fill="#013214" />
      <path d="M6.7666 10.5293V11.4703H5.82556V10.5293H6.7666Z" fill="#013214" />
      <path d="M8.64868 10.5293V11.4703H7.70764V10.5293H8.64868Z" fill="#013214" />
    </svg>
  );
}

export function ApiHeroSection() {
  return (
    <section className="relative overflow-hidden pt-[60px] pb-12 991:pt-[136px] 991:pb-20 lg:pb-32" style={{ backgroundColor: "#FAFAFA" }}>
      <Container>
        <FadeUp className="flex flex-col items-center text-center">
          {/* Heading */}
          <h1
            className="mb-6 text-brand text-[20px] leading-[28px] 991:text-[clamp(32px,5vw,60px)] 991:leading-[clamp(40px,6vw,72px)]"
            style={{
              fontFamily: "var(--font-stack-sans-headline)",
              fontWeight: 400,
              letterSpacing: "-0.8px",
            }}
          >
            Every earnings call.
            <br />
            One clean API.
          </h1>

          {/* Subtitle */}
          <p
            className="mb-10 max-w-[549px] text-brand"
            style={{
              fontFamily: "var(--font-stack-sans-headline)",
              fontSize: "clamp(14px, 1.8vw, 16px)",
              fontWeight: 300,
              lineHeight: "24px",
            }}
          >
            REST API with JSON responses. Transcripts, audio, and calendars for
            9,000+ public companies.
          </p>

          {/* CTA Buttons */}
          <div className="mb-16 flex flex-wrap items-center justify-center gap-3 sm:mb-20">
            <Button
              asChild
              variant="brand"
              size="cta"
              className="text-white [&_svg]:size-[22px] text-[12px] 991:text-[18px]"
              style={{
                fontFamily: "var(--font-stack-sans-headline)",
                fontWeight: 300,
                lineHeight: "28px",
              }}
            >
              <Link href="/pricing">
                Check Pricing Plan
                <ArrowIcon />
              </Link>
            </Button>
            <Button
              variant="brand-outline"
              size="cta"
              className="text-[12px] 991:text-[18px]"
              style={{
                fontFamily: "var(--font-stack-sans-headline)",
                fontWeight: 300,
                lineHeight: "28px",
              }}
            >
              View API Doc
            </Button>
          </div>

          {/* Stats row */}
          <div className="flex flex-nowrap items-start justify-center gap-3 sm:gap-6 991:flex-wrap 991:gap-14 lg:gap-[160px]">
            {heroStats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1">
                <span
                  className="text-brand text-[20px] leading-[28px] 991:text-[40px] 991:leading-[48px]"
                  style={{
                    fontFamily: "var(--font-stack-sans-headline)",
                    fontStyle: "normal",
                    fontWeight: 400,
                    letterSpacing: "-0.8px",
                    color: "#013214",
                  }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-brand/70 text-[10px] 991:text-[clamp(12px,1.5vw,16px)]"
                  style={{
                    fontFamily: "var(--font-stack-sans-headline)",
                    fontWeight: 300,
                    lineHeight: "24px",
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
