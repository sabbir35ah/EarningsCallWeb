"use client";

import { motion } from "framer-motion";

export function TestimonialCard({ testimonial, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex h-full flex-col rounded-xl p-5 sm:p-6 lg:p-8"
      style={{ backgroundColor: "#fafafa" }}
    >
      {/* Quotation SVG icon */}
      <div className="mb-4 sm:mb-5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/quatation.svg" alt="" aria-hidden="true" width={36} height={25} className="sm:w-[46px] sm:h-[32px]" />
      </div>

      {/* 5 stars */}
      <div className="mb-4 sm:mb-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="85" height="14" viewBox="0 0 103 17" fill="none" aria-hidden="true" className="sm:w-[103px] sm:h-[17px]">
          <path d="M8.02419 0.758301L10.3492 5.73541L15.5484 6.53842L11.7863 10.4104L12.6741 15.8804L8.02419 13.2965L3.37424 15.8804L4.2621 10.4104L0.5 6.53842L5.69922 5.73541L8.02419 0.758301Z" fill="#023F1A" stroke="#023F1A" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M51.6645 0.5L53.9895 5.47711L59.1887 6.28012L55.4266 10.1521L56.3145 15.6221L51.6645 13.0382L47.0146 15.6221L47.9024 10.1521L44.1403 6.28012L49.3395 5.47711L51.6645 0.5Z" fill="#023F1A" stroke="#023F1A" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M73.4846 0.5L75.8096 5.47711L81.0088 6.28012L77.2467 10.1521L78.1345 15.6221L73.4846 13.0382L68.8346 15.6221L69.7225 10.1521L65.9604 6.28012L71.1596 5.47711L73.4846 0.5Z" fill="#023F1A" stroke="#023F1A" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M94.9285 0.5L97.2535 5.47711L102.453 6.28012L98.6906 10.1521L99.5784 15.6221L94.9285 13.0382L90.2785 15.6221L91.1664 10.1521L87.4043 6.28012L92.6035 5.47711L94.9285 0.5Z" fill="#023F1A" stroke="#023F1A" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M29.8442 0.5L32.1692 5.47711L37.3684 6.28012L33.6063 10.1521L34.4942 15.6221L29.8442 13.0382L25.1942 15.6221L26.0821 10.1521L22.32 6.28012L27.5192 5.47711L29.8442 0.5Z" fill="#023F1A" stroke="#023F1A" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Quote */}
      <p
        className="mb-auto"
        style={{
          color: "#013214",
          fontFamily: "var(--font-stack-sans-headline), sans-serif",
          fontSize: "clamp(14px, 2vw, 20px)",
          fontStyle: "normal",
          fontWeight: 300,
          lineHeight: "clamp(22px, 3vw, 32px)",
        }}
      >
        {testimonial.quote}
      </p>

      {/* User info */}
      <div className="flex items-center gap-3 mt-8 sm:mt-12 lg:mt-[154px]">
        <div>
          <p style={{
            color: "#012D12",
            fontFamily: "var(--font-stack-sans-headline), sans-serif",
            fontSize: "clamp(14px, 1.8vw, 18px)",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "25px",
          }}>
            {testimonial.name}
          </p>
          <p style={{
            color: "#012D12",
            fontFamily: "var(--font-stack-sans-headline), sans-serif",
            fontSize: "clamp(12px, 1.5vw, 16px)",
            fontStyle: "normal",
            fontWeight: 300,
            lineHeight: "24px",
          }}>
            {testimonial.role}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
