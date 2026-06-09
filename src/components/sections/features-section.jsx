"use client";

import { staggerContainer } from "@/components/shared/animated-section";
import { features } from "@/data/content";
import { motion } from "framer-motion";
import { Container } from "../layout/container";
import { FeatureCard } from "./feature-card";

export function FeaturesSection() {
  return (
    <section className="bg-white py-10 sm:py-16 lg:py-24">
      <Container>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          style={{
            marginBottom: "clamp(40px, 8vw, 84px)",
            textAlign: "center",
          }}
        >
          <span
            style={{
              color: "#012D12",
              textAlign: "center",
              fontFamily: "var(--font-stack-sans-headline), sans-serif",
              fontSize: "clamp(16px, 4vw, 40px)",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "clamp(30px, 5vw, 48px)",
              letterSpacing: "-0.8px",
              display: "block",
              marginBottom: "12px",
            }}
          >
            What&rsquo;s in the API
          </span>
          <p
            style={{
              width: "min(568px, 100%)",
              color: "#012D12",
              textAlign: "center",
              fontFamily: "var(--font-stack-sans-headline), sans-serif",
              fontSize: "clamp(12px, 2.8vw, 16px)",
              fontStyle: "normal",
              fontWeight: 300,
              lineHeight: "24px",
              margin: "0 auto",
            }}
          >
            Transcripts, audio, slide decks, and earnings data from 9,000+
            companies. One API, ready to ship.
          </p>
        </motion.div>

        {/* 4×2 grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
