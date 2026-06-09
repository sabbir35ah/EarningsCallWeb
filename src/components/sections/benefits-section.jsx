"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { benefits } from "@/data/benefits";

export function BenefitsSection() {
  return (
    <section className="overflow-hidden bg-white py-12 sm:py-16 lg:py-24">
      <Container>
        {/* Centered header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-10 sm:mb-14 lg:mb-16 text-center"
        >
          <h2
            style={{
              color: "#012D12",
              textAlign: "center",
              fontFamily: "var(--font-stack-sans-headline), sans-serif",
              fontSize: "clamp(16px, 4vw, 40px)",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "clamp(30px, 5vw, 48px)",
              letterSpacing: "-0.8px",
              marginBottom: "16px",
            }}
          >
            Built for earnings season
            <br />
            speed and scale
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
            Every transcript, audio file, and slide deck — delivered fast,
            reliably, and from a single API.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 items-start gap-10 sm:gap-12 lg:gap-16 lg:grid-cols-2">
          {/* LEFT — benefit list */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul className="space-y-[16px] min-[576px]:space-y-[32px]">
              {benefits.map((benefit, i) => (
                <motion.li
                  key={benefit.id}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="flex items-start gap-3"
                  style={{ marginBottom: "0" }}
                >
                  <span
                    className="mt-1 h-3 w-3 sm:h-4 sm:w-4 shrink-0 rounded-[3px]"
                    style={{ backgroundColor: "#1DBF73" }}
                    aria-hidden="true"
                  />
                  <div>
                    <p
                      style={{
                        color: "#012D12",
                        fontFamily:
                          "var(--font-stack-sans-headline), sans-serif",
                        fontSize: "clamp(14px, 2vw, 20px)",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "28px",
                        marginBottom: "10px",
                      }}
                    >
                      {benefit.label}
                    </p>
                    <p
                      className="min-[576px]:mb-[31px]"
                      style={{
                        color: "#828282",
                        fontFamily:
                          "var(--font-stack-sans-headline), sans-serif",
                        fontSize: "clamp(12px, 1.5vw, 14px)",
                        fontStyle: "normal",
                        fontWeight: 300,
                        lineHeight: "24px",
                      }}
                    >
                      {benefit.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT — bg image card with code overlay */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-xl w-full"
            style={{
              minHeight: "clamp(300px, 55vw, 600px)",
              height: "clamp(300px, 55vw, 600px)",
              maxWidth: "709px",
              border: "1px solid #e5e7eb",
            }}
          >
            {/* Background image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/Bg_Image.png"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Code/terminal card overlay */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden w-[88%] sm:w-[85%]"
              style={{
                maxWidth: "561px",
                height: "auto",
                borderRadius: "clamp(8px, 2vw, 36px)",
                background: "#FFF",
              }}
            >
              {/* Window chrome */}
              <div
                className="flex items-center gap-1 sm:gap-1.5 pl-4 sm:pl-10 pr-4 py-2 sm:py-3"
                style={{ borderBottom: "1px solid #e5e7eb" }}
              >
                <span
                  className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full"
                  style={{ backgroundColor: "#013214" }}
                />
                <span
                  className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full"
                  style={{ backgroundColor: "#9CDEC1" }}
                />
                <span
                  className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full"
                  style={{ backgroundColor: "#43B0B8" }}
                />
              </div>

              {/* Code content */}
              <pre
                className="p-3 sm:p-5 whitespace-pre-wrap break-words w-full"
                style={{
                  fontFamily: '"Geist Mono", monospace',
                  fontSize: "clamp(9px, 2vw, 12px)",
                  fontStyle: "normal",
                  fontWeight: 300,
                  lineHeight: "clamp(18px, 3vw, 24px)",
                  color: "#808080",
                  margin: 0,
                }}
              >
                {`{
  "event": {
    "year": 2023,
    "quarter": 1,
    "conference_date": "2023-02-02T17:00:00.000-05:00"
  },
  "prepared_remarks": "Good day, everyone, and welcome to the Apple Q1 Fiscal Year 2023 Earnings Conference Call. Today's call is being recorded....",
  "questions_and_answers": "Our first question comes from Katie Huberty from Morgan Stanley. Please go ahead. Hello, Katie. Your..."
}`}
              </pre>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
