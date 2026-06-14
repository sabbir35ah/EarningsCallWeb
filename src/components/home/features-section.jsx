"use client";

import { FadeUp, Stagger } from "@/lib/motion";
import { features } from "./constants/constants";
import { Container } from "../layout/container";
import { FeatureCard } from "./feature-card";

export function FeaturesSection() {
  return (
    <section className="bg-white py-10 sm:py-16 lg:py-24">
      <Container>
        <FadeUp className="mb-[clamp(40px,8vw,84px)] text-center">
          <span className="text-headline text-brand block mb-3">
            What&rsquo;s in the API
          </span>
          <p className="text-body text-brand text-center mx-auto w-[min(568px,100%)]">
            Transcripts, audio, slide decks, and earnings data from 9,000+
            companies. One API, ready to ship.
          </p>
        </FadeUp>

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
