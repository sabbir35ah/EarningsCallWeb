"use client";

import { useCaseStats, useCaseTags } from "@/data/benefits";
import { motion } from "framer-motion";
import { Container } from "../layout/container";

export function UseCasesSection() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-24">
      <Container>
        {/* Header */}
        <div className="mb-10 sm:mb-12 text-center">
          <h2
            className="mb-3"
            style={{
              color: "#012D12",
              textAlign: "center",
              fontFamily: "var(--font-stack-sans-headline), sans-serif",
              fontSize: "clamp(16px, 4vw, 40px)",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "clamp(30px, 5vw, 48px)",
              letterSpacing: "-0.8px",
            }}
          >
            How people use EarningsCall
          </h2>
          <p
            style={{
              color: "#012D12",
              textAlign: "center",
              fontFamily: "var(--font-stack-sans-headline), sans-serif",
              fontSize: "clamp(12px, 2vw, 16px)",
              fontStyle: "normal",
              fontWeight: 300,
              lineHeight: "24px",
            }}
          >
            Built for developers, serving investors every day.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-[65%_35%]">
          {/* LEFT — case study card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between p-8"
            style={{
              borderRadius: "12px",
              border: "1px solid #DEDEDE",
              background: "#FDFDFD",
              minHeight: "476px",
            }}
          >
            <div>
              <h3
                className="mb-4"
                style={{
                  color: "#012D12",
                  fontFamily: "var(--font-stack-sans-headline), sans-serif",
                  fontSize: "clamp(16px, 3vw, 32px)",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "clamp(28px, 4vw, 40px)",
                  letterSpacing: "-0.5px",
                }}
              >
                From manual research to a reliable internal chatbot
              </h3>
              <p
                className="mb-8"
                style={{
                  color: "#012D12",
                  fontFamily: "var(--font-stack-sans-headline), sans-serif",
                  fontSize: "clamp(12px, 2vw, 16px)",
                  fontStyle: "normal",
                  fontWeight: 300,
                  lineHeight: "24px",
                }}
              >
                EarningsCall.biz proved to be a reliable service for our
                internal chatbot. Their quick response to our requests for
                adding new companies and helpful support in getting us started
                were appreciated.
              </p>
            </div>

            {/* Author — pushed to bottom */}
            <div className="mt-auto mb-6">
              <p className="text-sm font-semibold" style={{ color: "#012d12" }}>
                Itai Friendinger
              </p>
              <p
                style={{
                  color: "#012D12",
                  fontFamily: "var(--font-stack-sans-headline), sans-serif",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 300,
                  lineHeight: "20px",
                  letterSpacing: "0.2px",
                }}
              >
                Principal Software Engineer · Forter
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {useCaseTags.map((tag) => (
                <span
                  key={tag.id}
                  className="max-[575px]:!text-[12px] max-[575px]:!px-[10px] max-[575px]:!py-[6px]"
                  style={{
                    borderRadius: "29px",
                    border: "0.5px solid #E3E1E1",
                    background: "#F6F6F6",
                    display: "inline-flex",
                    padding: "10px 15px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                    color: "#012D12",
                    fontFamily: "var(--font-stack-sans-headline), sans-serif",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: 300,
                    lineHeight: "20px",
                    letterSpacing: "0.2px",
                  }}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — stats card with gradient bg */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="relative overflow-hidden"
            style={{ borderRadius: "12px", border: "1px solid #DEDEDE" }}
          >
            {/* Background image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/background-shape.png"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Stats */}
            <div className="relative flex flex-col justify-center gap-0 px-10 py-10 h-full">
              {useCaseStats.map((stat, i) => (
                <div key={i} className="py-7 first:pt-0 last:pb-0">
                  <p
                    style={{
                      color: "#FFF",
                      fontFamily: "var(--font-stack-sans-headline), sans-serif",
                      fontSize: "clamp(24px, 4vw, 40px)",
                      fontStyle: "normal",
                      fontWeight: 600,
                      lineHeight: "normal",
                      letterSpacing: "0.2px",
                    }}
                  >
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm font-light text-white/70">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
