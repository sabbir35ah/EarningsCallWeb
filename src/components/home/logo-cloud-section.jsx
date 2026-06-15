"use client";
import { FadeUp } from "@/lib/motion";
import { companies } from "./constants/constants";
import { Container } from "../layout/container";
import CompanySlide from "./`company-slides";

export function LogoCloudSection() {
  return (
    <section className="overflow-hidden border-y border-gray-100 bg-white pt-12 pb-16">
      <Container>
        <FadeUp as="p" className="text-headline text-brand text-center mb-10">
          Access data from 9,000+ companies
        </FadeUp>
      </Container>

      <div className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24"
          style={{
            background: "linear-gradient(to right, white, transparent)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24"
          style={{ background: "linear-gradient(to left, white, transparent)" }}
        />

        <div className="flex w-max animate-marquee items-start">
          <div className="flex shrink-0 items-start">
            {companies.map((company) => (
              <CompanySlide key={`a-${company.id}`} company={company} />
            ))}
          </div>
          <div className="flex shrink-0 items-start" aria-hidden="true">
            {companies.map((company) => (
              <CompanySlide key={`b-${company.id}`} company={company} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
