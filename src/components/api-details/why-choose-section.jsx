"use client";

import { FadeUp, Stagger } from "@/lib/motion";
import { Container } from "@/components/layout/container";
import { FeatureCard } from "@/components/home/feature-card";
import { features } from "@/components/home/constants/constants";

export function WhyChooseSection() {
  return (
    <section className="bg-surface pt-8 pb-8 991:pt-16 991:pb-20 lg:pt-24">
      <Container>
        {/* Section heading */}
        <FadeUp className="mb-8 991:mb-24 text-center">
          <h2
            className="text-brand text-[16px] leading-[24px] 991:text-[clamp(24px,4vw,40px)] 991:leading-[clamp(32px,5vw,48px)]"
            style={{
              fontFamily: "var(--font-stack-sans-headline)",
              fontWeight: 400,
              letterSpacing: "-0.8px",
            }}
          >
            Why teams
            <br />
            choose EarningsCall API
          </h2>
        </FadeUp>

        {/* Feature cards — 4-col × 2-row grid */}
        <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
