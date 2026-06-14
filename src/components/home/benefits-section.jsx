"use client";
import { FadeUp, SlideIn } from "@/lib/motion";
import { benefits } from "./constants/constants";
import { Container } from "../layout/container";

export function BenefitsSection() {
  return (
    <section className="overflow-hidden bg-white py-12 sm:py-16 lg:py-24">
      <Container>
        <FadeUp className="mb-10 sm:mb-14 lg:mb-16 text-center">
          <h2 className="text-headline text-brand text-center mb-4">
            Built for earnings season
            <br />
            speed and scale
          </h2>
          <p className="text-body text-brand text-center">
            Every transcript, audio file, and slide deck — delivered fast,
            reliably, and from a single API.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 items-start gap-10 sm:gap-12 lg:gap-16 lg:grid-cols-2">
          {/* LEFT — benefit list */}
          <SlideIn direction="left">
            <ul className="space-y-4 min-[576px]:space-y-8">
              {benefits.map((benefit, i) => (
                <SlideIn
                  key={benefit.id}
                  as="li"
                  direction="left"
                  amount={16}
                  delay={i * 0.08}
                  className="flex items-start gap-3"
                >
                  <span
                    className="mt-1 h-3 w-3 sm:h-4 sm:w-4 shrink-0 rounded-[3px] bg-[#1DBF73]"
                    aria-hidden="true"
                  />
                  <div>
                    <p
                      className="font-headline font-normal text-brand leading-7 mb-2.5"
                      style={{ fontSize: "clamp(14px, 2vw, 20px)" }}
                    >
                      {benefit.label}
                    </p>
                    <p
                      className="min-[576px]:mb-7.75 font-headline font-light text-muted leading-6"
                      style={{ fontSize: "clamp(12px, 1.5vw, 14px)" }}
                    >
                      {benefit.description}
                    </p>
                  </div>
                </SlideIn>
              ))}
            </ul>
          </SlideIn>

          {/* RIGHT — bg image card with code overlay */}
          <SlideIn
            direction="right"
            className="relative overflow-hidden rounded-xl w-full border border-gray-200 h-[clamp(300px,55vw,600px)] min-h-[clamp(300px,55vw,600px)] max-w-177.25"
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
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden w-[88%] sm:w-[85%] max-w-140.25 rounded-[clamp(8px,2vw,36px)] bg-white">
              {/* Window chrome */}
              <div className="flex items-center gap-1 sm:gap-1.5 pl-4 sm:pl-10 pr-4 py-2 sm:py-3 border-b border-gray-200">
                <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-brand-alt" />
                <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-[#9CDEC1]" />
                <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-[#43B0B8]" />
              </div>

              {/* Code content */}
              <pre
                className="p-3 sm:p-5 whitespace-pre-wrap wrap-break-word w-full text-[#808080] font-light m-0"
                style={{
                  fontFamily: '"Geist Mono", monospace',
                  fontSize: "clamp(9px, 2vw, 12px)",
                  lineHeight: "clamp(18px, 3vw, 24px)",
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
          </SlideIn>
        </div>
      </Container>
    </section>
  );
}
