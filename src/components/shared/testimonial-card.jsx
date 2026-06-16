"use client";

import { FadeUp } from "@/lib/motion";
import { FaStar } from "react-icons/fa";

export function TestimonialCard({ testimonial, index }) {
  return (
    <FadeUp
      margin="-60px"
      delay={index * 0.1}
      className="flex h-full flex-col rounded-xl p-5 sm:p-6 lg:p-8 bg-[#f2f2f2]"
    >
      {/* Quotation SVG icon */}
      <div className="mb-4 sm:mb-5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/icons/quatation.svg"
          alt=""
          aria-hidden="true"
          width={36}
          height={25}
          className="sm:w-11.5 sm:h-8"
        />
      </div>

      {/* 5 stars */}
      <div className="mb-4 sm:mb-5">
        {[...Array(5)].map((_, i) => (
          <span key={i} className=" inline-flex items-center">
            <FaStar size={15} className="text-[#023F1A]" />
          </span>
        ))}
      </div>

      {/* Quote */}
      <p
        className="mb-auto font-headline font-light text-brand-alt"
        style={{
          fontSize: "clamp(14px, 2vw, 20px)",
          lineHeight: "clamp(22px, 3vw, 32px)",
        }}
      >
        {testimonial.quote}
      </p>

      {/* User info */}
      <div className="flex items-center gap-3 mt-8 sm:mt-12 lg:mt-38.5">
        <div>
          <p
            className="font-headline font-normal text-brand leading-6.25"
            style={{ fontSize: "clamp(14px, 1.8vw, 18px)" }}
          >
            {testimonial.name}
          </p>
          <p
            className="font-headline font-light text-brand leading-6"
            style={{ fontSize: "clamp(12px, 1.5vw, 16px)" }}
          >
            {testimonial.role}
          </p>
        </div>
      </div>
    </FadeUp>
  );
}
