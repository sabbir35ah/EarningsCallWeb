"use client";

import { FadeUp } from "@/lib/motion";
import { useCaseStats, useCaseTags } from "./constants/constants";
import { Container } from "../layout/container";

export function UseCasesSection() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-24">
      <Container>
        {/* Header */}
        <div className="mb-10 sm:mb-12 text-center">
          <h2 className="mb-3 text-headline text-brand text-center">
            How people use EarningsCall
          </h2>
          <p className="text-body text-brand text-center">
            Built for developers, serving investors every day.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-[65%_35%]">
          {/* LEFT — case study card */}
          <FadeUp className="flex flex-col justify-between p-8 rounded-xl border border-[#DEDEDE] bg-[#FDFDFD] min-h-119">
            <div>
              <h3 className="mb-4 text-subheading text-brand">
                From manual research to a reliable internal chatbot
              </h3>
              <p className="mb-8 text-body text-brand">
                EarningsCall.biz proved to be a reliable service for our
                internal chatbot. Their quick response to our requests for
                adding new companies and helpful support in getting us started
                were appreciated.
              </p>
            </div>

            {/* Author — pushed to bottom */}
            <div className="mt-auto mb-6">
              <p className="text-sm font-semibold text-brand">
                Itai Friendinger
              </p>
              <p className="text-body-sm text-brand">
                Principal Software Engineer · Forter
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {useCaseTags.map((tag) => (
                <span
                  key={tag.id}
                  className="max-[575px]:text-xs! max-[575px]:px-2.5! max-[575px]:py-1.5! rounded-[29px] border-[0.5px] border-[#E3E1E1] bg-[#F6F6F6] inline-flex items-center justify-center gap-2.5 px-3.75 py-2.5 text-body-sm text-brand"
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </FadeUp>

          {/* RIGHT — stats card with gradient bg */}
          <FadeUp
            delay={0.12}
            className="relative overflow-hidden rounded-xl border border-[#DEDEDE]"
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
                    className="font-headline font-semibold text-white leading-normal"
                    style={{
                      fontSize: "clamp(24px, 4vw, 40px)",
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
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}
