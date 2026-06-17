"use client";

import { Container } from "@/components/layout/container";
import { FadeUp, Stagger } from "@/lib/motion";
import { comingNextCards } from "./constants/constants";

function ComingNextCard({ Icon, title, description, tags, index }) {
  return (
    <FadeUp
      margin="-60px"
      delay={index * 0.1}
      className="flex flex-col rounded-md border border-[#d7d7d7] bg-[#fafafa] p-6"
    >
      {/* Icon */}
      <div className="mb-6 h-8 w-8 text-brand-alt">
        <Icon />
      </div>

      {/* Title */}
      <p
        className="mb-3 font-normal text-brand-alt"
        style={{
          fontFamily: "var(--font-stack-sans-headline)",
          fontSize: "clamp(16px, 2vw, 20px)",
          lineHeight: "28px",
        }}
      >
        {title}
      </p>

      {/* Description */}
      <p
        className="mb-6 flex-1 text-brand-alt/80"
        style={{
          fontFamily: "var(--font-stack-sans-headline)",
          fontSize: "14px",
          fontWeight: 300,
          lineHeight: "20px",
        }}
      >
        {description}
      </p>

      {/* Feature tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-[#8ab89a] px-3.5 py-1 text-brand"
            style={{
              fontFamily: "var(--font-stack-sans-headline)",
              fontSize: "12px",
              fontWeight: 300,
              lineHeight: "20px",
              letterSpacing: "0.2px",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </FadeUp>
  );
}

export function ComingNextSection() {
  return (
    <section className="py-8 991:py-20">
      <Container>
        {/* Section heading */}
        <FadeUp className="mb-8 991:mb-[90px] flex flex-col items-center text-center">
          <h2
            className="mb-3 text-brand text-[16px] leading-[24px] 991:text-[clamp(24px,4vw,40px)] 991:leading-[clamp(32px,5vw,48px)]"
            style={{
              fontFamily: "var(--font-stack-sans-headline)",
              fontWeight: 400,
              letterSpacing: "-0.8px",
            }}
          >
            What&apos;s coming next
          </h2>
          <p
            className="max-w-[568px] text-brand"
            style={{
              fontFamily: "var(--font-stack-sans-headline)",
              fontSize: "clamp(14px, 1.8vw, 16px)",
              fontWeight: 300,
              lineHeight: "24px",
            }}
          >
            We&apos;re building the most powerful earnings intelligence platform.
            <br />
            Here&apos;s what&apos;s on deck.
          </p>
        </FadeUp>

        {/* 3-column grid */}
        <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {comingNextCards.map((card, index) => (
            <ComingNextCard key={card.title} {...card} index={index} />
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
