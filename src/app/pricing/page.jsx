"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { TrustedBySection } from "@/components/sections/trusted-by-section";
import { CtaSection } from "@/components/sections/cta-section";
import { plans, refundConditions, faqs } from "@/data/pricing";

// ─── Sub-components ──────────────────────────────────────────────────────────

function PlanCard({ plan, billing }) {
  const price = billing === "annual" ? plan.annualPrice : plan.monthlyPrice;

  return (
    <div
      className="flex flex-col rounded-[6px] overflow-hidden w-full lg:h-[539px]"
      style={{
        backgroundColor: "#fafafa",
        border: "0.5px solid #d7d7d7",
      }}
    >
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        {/* Name */}
        <p
          style={{
            color: "#013214",
            fontFamily: "var(--font-stack-sans-headline), sans-serif",
            fontSize: "clamp(16px, 2.5vw, 24px)",
            fontWeight: 400,
            lineHeight: "32px",
            letterSpacing: "-0.3px",
            marginBottom: "6px",
          }}
        >
          {plan.name}
        </p>

        {/* Price */}
        <p
          style={{
            color: "#4d7a5e",
            fontFamily: "var(--font-stack-sans-headline), sans-serif",
            fontSize: "clamp(13px, 1.8vw, 16px)",
            fontWeight: 400,
            lineHeight: "32px",
            letterSpacing: "-0.3px",
            marginBottom: "16px",
          }}
        >
          Starting at {price}{plan.priceSuffix}
        </p>

        {/* Divider */}
        <div className="h-px mb-4" style={{ backgroundColor: "#e5e7eb" }} />

        {/* Features */}
        <ul className="flex flex-col gap-3 flex-1 justify-center">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 sm:gap-3">
              <svg
                width="13"
                height="9"
                viewBox="0 0 13 9"
                fill="none"
                style={{ flexShrink: 0, marginTop: "5px" }}
              >
                <path
                  d="M1 4L4.5 7.5L11.5 1"
                  stroke="#013214"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span
                style={{
                  color: "#013214",
                  fontFamily: "var(--font-stack-sans-headline), sans-serif",
                  fontSize: "clamp(12px, 1.5vw, 14px)",
                  fontWeight: 300,
                  lineHeight: "20px",
                }}
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          className="mt-6 w-full rounded-[4px] transition-opacity hover:opacity-90"
          style={{
            height: "clamp(42px, 5vw, 50px)",
            fontFamily: "var(--font-stack-sans-headline), sans-serif",
            fontSize: "clamp(14px, 2vw, 18px)",
            fontWeight: 300,
            lineHeight: "28px",
            ...(plan.featured
              ? { backgroundColor: "#013214", color: "#fff" }
              : { border: "1px solid #013214", backgroundColor: "transparent", color: "#013214" }),
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        className="flex w-full items-center justify-between py-5 sm:py-6 text-left gap-3"
        onClick={() => setOpen(!open)}
      >
        <span
          style={{
            color: "#013214",
            fontFamily: "var(--font-stack-sans-headline), sans-serif",
            fontSize: "clamp(13px, 1.8vw, 16px)",
            fontWeight: 300,
            lineHeight: "normal",
          }}
        >
          {question}
        </span>
        <span className="shrink-0">
          {open ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="sm:w-6 sm:h-6">
              <path d="M5 12H19" stroke="#013214" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="sm:w-6 sm:h-6">
              <path d="M12 5V19M5 12H19" stroke="#013214" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p
              className="pb-4"
              style={{
                color: "#4D7A5E",
                fontFamily: "var(--font-stack-sans-headline), sans-serif",
                fontSize: "clamp(12px, 1.5vw, 14px)",
                fontWeight: 300,
                lineHeight: "24px",
              }}
            >
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="h-px" style={{ backgroundColor: "#e5e7eb" }} />
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function PricingPage() {
  const [billing, setBilling] = useState("monthly");
  const [audience, setAudience] = useState("individual");

  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        className="bg-white pb-10 sm:pb-14 lg:pb-16 px-4"
        style={{ paddingTop: "calc(var(--navbar-height) + 40px + 24px)" }}
      >
        <div className="max-w-[907px] mx-auto flex flex-col items-center gap-4 text-center">

          {/* Individual / Commercial toggle */}
          <div className="inline-flex">
            {["individual", "commercial"].map((val) => (
              <button
                key={val}
                type="button"
                onClick={() => setAudience(val)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "clamp(30px, 5vw, 52px)",
                  padding: "0 clamp(10px, 3vw, 32px)",
                  fontFamily: "var(--font-stack-sans-headline), sans-serif",
                  fontSize: "clamp(11px, 2vw, 18px)",
                  fontWeight: 300,
                  lineHeight: "28px",
                  border: "1px solid #013214",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  backgroundColor: audience === val ? "#013214" : "transparent",
                  color: audience === val ? "#fff" : "#013214",
                  borderRadius: val === "individual" ? "6px 0 0 6px" : "0 6px 6px 0",
                  borderLeft: val === "commercial" ? "none" : "1px solid #013214",
                }}
              >
                {val.charAt(0).toUpperCase() + val.slice(1)}
              </button>
            ))}
          </div>

          {/* Headline */}
          <h1
            style={{
              color: "#023f1a",
              fontFamily: "var(--font-stack-sans-headline), sans-serif",
              fontSize: "clamp(16px, 5vw, 60px)",
              fontWeight: 400,
              lineHeight: 1.2,
              letterSpacing: "-0.8px",
              maxWidth: "588px",
            }}
          >
            The earnings call API. Plug in. Start building.
          </h1>

          {/* Subtitle */}
          <p
            style={{
              color: "var(--Text-Inverse, #012D12)",
              fontFamily: '"Stack Sans Headline", var(--font-stack-sans-headline), sans-serif',
              fontSize: "clamp(13px, 1.8vw, 16px)",
              fontStyle: "normal",
              fontWeight: 300,
              lineHeight: "24px",
            }}
          >
            9,000+ companies. One API key. Zero infrastructure.
          </p>

          {/* Feature pills */}
          <div className="flex flex-wrap justify-center mt-1" style={{ gap: "clamp(14px, 3vw, 28px)" }}>
            {[
              {
                label: "Instant access",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 15 15" fill="none">
                    <g clipPath="url(#clip0_654_386)">
                      <path d="M6.04492 15L7.18051 8.60255H3.27686L8.95492 0L7.81932 6.04017H11.723L6.04492 15Z" fill="#012D12"/>
                    </g>
                    <defs><clipPath id="clip0_654_386"><rect width="15" height="15" fill="white"/></clipPath></defs>
                  </svg>
                ),
              },
              {
                label: "No hidden fees",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 15 15" fill="none">
                    <path d="M7.18014 12.5043C7.14579 12.5043 7.11181 12.4972 7.08033 12.4834C7.04886 12.4697 7.02057 12.4495 6.99726 12.4243L2.06617 7.09028C2.0333 7.05472 2.01151 7.01035 2.00346 6.9626C1.99542 6.91484 2.00147 6.86578 2.02087 6.82141C2.04028 6.77705 2.0722 6.7393 2.11273 6.71279C2.15325 6.68628 2.20063 6.67216 2.24906 6.67216H4.62261C4.65825 6.67217 4.69347 6.67981 4.7259 6.69459C4.75833 6.70936 4.78721 6.73092 4.8106 6.75781L6.45859 8.65377C6.63669 8.27305 6.98147 7.63914 7.58649 6.8667C8.48091 5.72476 10.1446 4.04531 12.991 2.52923C13.046 2.49993 13.11 2.49233 13.1703 2.50792C13.2307 2.52351 13.283 2.56116 13.3169 2.61344C13.3509 2.66572 13.364 2.72882 13.3537 2.79029C13.3433 2.85176 13.3103 2.90713 13.2612 2.94546C13.2503 2.95395 12.1529 3.81819 10.8898 5.4012C9.72742 6.85796 8.18219 9.23998 7.42183 12.3151C7.40847 12.3692 7.37741 12.4172 7.33359 12.4515C7.28977 12.4858 7.23572 12.5044 7.18007 12.5044L7.18014 12.5043Z" fill="#012D12"/>
                  </svg>
                ),
              },
              {
                label: "Cancel anytime",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 10 10" fill="none">
                    <path d="M6.17837 4.99999L9.75584 1.42252C10.0814 1.097 10.0814 0.56966 9.75584 0.24414C9.43032 -0.08138 8.90298 -0.08138 8.57746 0.24414L4.99999 3.82161L1.42252 0.24414C1.097 -0.08138 0.56966 -0.08138 0.24414 0.24414C-0.08138 0.56966 -0.08138 1.097 0.24414 1.42252L3.82161 4.99999L0.24414 8.57746C-0.08138 8.90298 -0.08138 9.43032 0.24414 9.75584C0.4069 9.9186 0.620116 9.99998 0.833332 9.99998C1.04655 9.99998 1.25976 9.9186 1.42252 9.75584L4.99999 6.17837L8.57746 9.75584C8.74022 9.9186 8.95343 9.99998 9.16665 9.99998C9.37986 9.99998 9.59308 9.9186 9.75584 9.75584C10.0814 9.43032 10.0814 8.90298 9.75584 8.57746L6.17837 4.99999Z" fill="#012D12"/>
                  </svg>
                ),
              },
            ].map(({ label, icon }) => (
              <span
                key={label}
                className="flex items-center gap-1.5"
                style={{
                  color: "var(--Text-Inverse, #012D12)",
                  fontFamily: '"Stack Sans Headline", var(--font-stack-sans-headline), sans-serif',
                  fontSize: "clamp(12px, 1.5vw, 14px)",
                  fontStyle: "normal",
                  fontWeight: 300,
                  lineHeight: "20px",
                }}
              >
                {icon}
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Billing toggle + Cards ────────────────────────────────────────── */}
      <section className="bg-white pb-10 sm:pb-14 lg:pb-16">
        <Container>
          {/* Billing toggle — right-aligned */}
          <div className="flex flex-col items-center sm:items-end gap-3 mb-8 sm:mb-10 w-full">
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Monthly label */}
              <span
                style={{
                  fontFamily: "var(--font-stack-sans-headline), sans-serif",
                  fontSize: "clamp(10px, 1.8vw, 16px)",
                  fontWeight: billing === "monthly" ? 400 : 300,
                  lineHeight: "24px",
                  color: billing === "monthly" ? "#013214" : "#828282",
                  transition: "color 0.2s",
                }}
              >
                Monthly
              </span>

              {/* Toggle switch */}
              <button
                role="switch"
                aria-checked={billing === "annual"}
                onClick={() => setBilling(billing === "monthly" ? "annual" : "monthly")}
                style={{
                  position: "relative",
                  display: "inline-flex",
                  width: "clamp(32px, 6vw, 44px)",
                  height: "clamp(18px, 3.5vw, 24px)",
                  borderRadius: "100px",
                  backgroundColor: billing === "annual" ? "#013214" : "#D1D5DB",
                  border: "none",
                  cursor: "pointer",
                  transition: "background-color 0.2s",
                  flexShrink: 0,
                  padding: 0,
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: "2px",
                    left: billing === "annual" ? "clamp(12px, 3vw, 22px)" : "2px",
                    width: "clamp(14px, 2.5vw, 20px)",
                    height: "clamp(14px, 2.5vw, 20px)",
                    borderRadius: "50%",
                    backgroundColor: "#fff",
                    transition: "left 0.2s",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                  }}
                />
              </button>

              {/* Annual label + Save badge */}
              <div className="flex items-center gap-2">
                <span
                  style={{
                    fontFamily: "var(--font-stack-sans-headline), sans-serif",
                    fontSize: "clamp(10px, 1.8vw, 16px)",
                    fontWeight: billing === "annual" ? 400 : 300,
                    lineHeight: "24px",
                    color: billing === "annual" ? "#013214" : "#828282",
                    transition: "color 0.2s",
                  }}
                >
                  Annual
                </span>
                <div
                  className="flex items-center gap-1.5 px-2 sm:px-3 py-1 rounded-full"
                  style={{
                    backgroundColor: "rgba(46,214,116,0.12)",
                    color: "#013214",
                    fontFamily: "var(--font-stack-sans-headline), sans-serif",
                    fontSize: "clamp(9px, 1.3vw, 13px)",
                    fontWeight: 400,
                    lineHeight: "20px",
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                    <path d="M3.00312 0C1.3445 0 0 1.3431 0 3C0 4.6569 1.3445 6 3.00312 6C4.66175 6 6.00625 4.6569 6.00625 3C6.00625 1.3431 4.66175 0 3.00312 0Z" fill="#2ED674"/>
                  </svg>
                  Save 20% Off
                </div>
              </div>
            </div>
          </div>

          {/* Cards — 1 col mobile, 2 col sm, 4 col lg */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[21px]">
            {plans.map((plan) => (
              <PlanCard key={plan.id} plan={plan} billing={billing} />
            ))}
          </div>
        </Container>
      </section>

      {/* ── Refund Policy ────────────────────────────────────────────────── */}
      <section className="bg-white pb-10 sm:pb-14 lg:pb-16">
        <Container>
          <div
            className="rounded-[12px] px-6 sm:px-8 py-10 sm:py-14 lg:py-20"
            style={{ backgroundColor: "#013214" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

              {/* LEFT — refund text */}
              <div>
                {/* Body paragraph */}
                <p
                  style={{
                    color: "#fff",
                    fontFamily: "var(--font-stack-sans-headline), sans-serif",
                    fontSize: "clamp(12px, 1.8vw, 16px)",
                    fontWeight: 300,
                    lineHeight: "24px",
                    maxWidth: "650px",
                    marginBottom: "32px",
                  }}
                >
                  We stand behind our data. If it&apos;s not right for you,{" "}
                  <a href="mailto:support@earningscall.biz" style={{ color: "#fff", textDecoration: "underline" }}>
                    contact us
                  </a>{" "}
                  within 7 days of your first payment for a full refund — no forms, no friction.
                </p>

                {/* Fair-use conditions */}
                <p
                  style={{
                    color: "#4dec8c",
                    fontFamily: "var(--font-stack-sans-headline), sans-serif",
                    fontSize: "clamp(16px, 2.5vw, 20px)",
                    fontWeight: 400,
                    lineHeight: "28px",
                    marginBottom: "20px",
                  }}
                >
                  Fair-use conditions
                </p>

                <div className="flex flex-col">
                  {refundConditions.map(({ label, desc }) => (
                    <div key={label} className="flex flex-col gap-0.5 py-3">
                      <span
                        style={{
                          color: "#fff",
                          fontFamily: "var(--font-stack-sans-headline), sans-serif",
                          fontSize: "clamp(14px, 1.8vw, 16px)",
                          fontWeight: 400,
                          lineHeight: "28px",
                        }}
                      >
                        {label}
                      </span>
                      <span
                        style={{
                          color: "#8ab89a",
                          fontFamily: "var(--font-stack-sans-headline), sans-serif",
                          fontSize: "clamp(12px, 1.5vw, 14px)",
                          fontWeight: 300,
                          lineHeight: "24px",
                        }}
                      >
                        {desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT — security cards */}
              <div className="flex items-center justify-center">
              <div style={{ display: "flex", width: "min(467px, 100%)", padding: "24px", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "24px", borderRadius: "16px", border: "0.5px solid rgba(164,164,164,0.40)", background: "#0B3C1E" }}>
                {/* SSL/TLS card */}
                <div style={{ borderRadius: "12px", border: "0.5px solid rgba(164,164,164,0.60)", background: "#154628", display: "flex", padding: "16px", alignItems: "center", gap: "12px", alignSelf: "stretch" }}>
                  <div style={{ display: "flex", width: "80px", height: "64px", padding: "16px 15px 16px 14px", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "10px", borderRadius: "8px", background: "#287347", flexShrink: 0 }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" viewBox="0 0 30 40" fill="none">
                      <path d="M25.4395 13.8403H4.06029C3.68208 13.8403 3.31537 13.9699 3.02115 14.2075L2.24069 14.8378C0.823588 15.9823 0 17.7061 0 19.5276V38.346C0 39.2594 0.740464 39.9999 1.6539 39.9999H27.8459C28.7593 39.9999 29.4998 39.2594 29.4998 38.346V19.5276C29.4998 17.7061 28.6762 15.9823 27.2591 14.8379L26.4787 14.2076C26.1844 13.9699 25.8177 13.8403 25.4395 13.8403Z" fill="url(#paint0_linear_769_282)"/>
                      <path d="M6.86232 16.7746C8.20919 16.7746 9.30105 16.3442 9.30105 15.8132C9.30105 15.2822 8.20919 14.8518 6.86232 14.8518C5.51544 14.8518 4.42358 15.2822 4.42358 15.8132C4.42358 16.3442 5.51544 16.7746 6.86232 16.7746Z" fill="url(#paint1_linear_769_282)"/>
                      <path d="M22.6111 16.7746C23.958 16.7746 25.0498 16.3442 25.0498 15.8132C25.0498 15.2822 23.958 14.8518 22.6111 14.8518C21.2642 14.8518 20.1724 15.2822 20.1724 15.8132C20.1724 16.3442 21.2642 16.7746 22.6111 16.7746Z" fill="url(#paint2_linear_769_282)"/>
                      <path d="M29.5003 38.346V19.5275C29.5003 17.706 28.6768 15.9822 27.2596 14.8378L26.4792 14.2075C26.185 13.9699 25.8183 13.8403 25.4401 13.8403H7.599L5.33667 16.1027L28.8747 39.6409C29.2557 39.3378 29.5003 38.8706 29.5003 38.346Z" fill="url(#paint3_linear_769_282)"/>
                      <path d="M14.7505 36.5666C13.2854 36.5666 12.0933 35.3746 12.0933 33.9094V31.3467C12.0933 30.7911 11.8507 30.2731 11.4276 29.9253C10.1575 28.881 9.46188 27.3394 9.51915 25.6956C9.56618 24.3438 10.1323 23.0763 11.113 22.1267C12.0933 21.1775 13.378 20.6521 14.7306 20.647H14.7505C17.6369 20.647 19.9852 22.9952 19.9852 25.8816C19.9852 27.4524 19.2885 28.9262 18.0738 29.925C17.6505 30.2731 17.4077 30.7912 17.4077 31.3467V33.9095C17.4077 35.3746 16.2157 36.5666 14.7505 36.5666Z" fill="url(#paint4_linear_769_282)"/>
                      <path d="M14.7505 36.5666C13.2854 36.5666 12.0933 35.3746 12.0933 33.9094V31.3467C12.0933 30.7911 11.8507 30.2731 11.4276 29.9253C10.1575 28.881 9.46188 27.3394 9.51915 25.6956C9.56618 24.3438 10.1323 23.0763 11.113 22.1267C12.0933 21.1775 13.378 20.6521 14.7306 20.647H14.7505C17.6369 20.647 19.9852 22.9952 19.9852 25.8816C19.9852 27.4524 19.2885 28.9262 18.0738 29.925C17.6505 30.2731 17.4077 30.7912 17.4077 31.3467V33.9095C17.4077 35.3746 16.2157 36.5666 14.7505 36.5666Z" fill="url(#paint5_linear_769_282)"/>
                      <path d="M0 20.5851V38.3459C0 39.2594 0.740464 39.9999 1.6539 39.9999H27.8459C28.7593 39.9999 29.4998 39.2594 29.4998 38.3459V20.5851H0Z" fill="url(#paint6_linear_769_282)"/>
                      <path d="M27.2592 14.8378L26.4788 14.2075C26.1846 13.9699 25.8178 13.8403 25.4396 13.8403H15.2837V39.9999H27.846C28.7594 39.9999 29.4998 39.2594 29.4998 38.346V19.5275C29.4998 17.706 28.6763 15.9822 27.2592 14.8378Z" fill="url(#paint7_linear_769_282)"/>
                      <path d="M27.2596 14.8378L26.4791 14.2075C26.1849 13.9699 25.8181 13.8403 25.44 13.8403H23.3112L21.0784 16.0731L29.5002 24.4949V19.5276C29.5002 17.706 28.6766 15.9822 27.2596 14.8378Z" fill="url(#paint8_linear_769_282)"/>
                      <path d="M24.331 9.5807V15.8134C24.331 16.182 23.5733 16.4807 22.6382 16.4807C21.7037 16.4807 20.9454 16.182 20.9454 15.8134V9.5807C20.9454 6.16414 18.1661 3.38563 14.7503 3.38563C11.3346 3.38563 8.55528 6.16414 8.55528 9.5807V15.8134C8.55528 16.182 7.79693 16.4807 6.86248 16.4807C5.92725 16.4807 5.16968 16.182 5.16968 15.8134V9.5807C5.16968 4.29758 9.46715 0 14.7503 0C20.0335 0 24.331 4.29758 24.331 9.5807Z" fill="url(#paint9_linear_769_282)"/>
                      <path d="M14.75 0C14.6135 0 14.4778 0.00359375 14.3425 0.00921875V3.40055C14.4774 3.39172 14.613 3.3857 14.75 3.3857C18.1658 3.3857 20.9451 6.16422 20.9451 9.58078V15.8134C20.9451 16.1821 21.7034 16.4808 22.6379 16.4808C23.5731 16.4808 24.3307 16.1821 24.3307 15.8134V9.58078C24.3307 4.29758 20.0332 0 14.75 0Z" fill="url(#paint10_linear_769_282)"/>
                      <path d="M6.86321 16.4809C7.79766 16.4809 8.55601 16.1822 8.55601 15.8135V9.58088C8.55601 9.30994 8.57539 9.04361 8.60929 8.78174H5.204C5.18213 9.04533 5.17041 9.31174 5.17041 9.58088V15.8135C5.17041 16.1821 5.92806 16.4809 6.86321 16.4809Z" fill="url(#paint11_linear_769_282)"/>
                      <path d="M20.9459 9.58088V15.8135C20.9459 16.1822 21.7042 16.4809 22.6387 16.4809C23.5739 16.4809 24.3315 16.1822 24.3315 15.8135V9.58088C24.3315 9.31174 24.3197 9.04533 24.2979 8.78174H20.8926C20.9264 9.04361 20.9459 9.30994 20.9459 9.58088Z" fill="url(#paint12_linear_769_282)"/>
                      <path d="M18.8559 25.8813C18.8559 23.6083 17.009 21.7667 14.7341 21.7752C12.5438 21.7834 10.7226 23.5456 10.6464 25.7346C10.5998 27.0717 11.1931 28.2717 12.1437 29.0531C12.8287 29.6163 13.2213 30.4596 13.2213 31.3463V33.9092C13.2213 34.7534 13.9056 35.4378 14.7498 35.4378C15.5941 35.4378 16.2784 34.7534 16.2784 33.9092V31.3463C16.2784 30.4595 16.6712 29.6161 17.3563 29.0529C18.2719 28.3002 18.8559 27.1592 18.8559 25.8813Z" fill="url(#paint13_linear_769_282)"/>
                      <path d="M18.8559 25.8813C18.8559 23.6083 17.009 21.7667 14.7341 21.7752C12.5438 21.7834 10.7226 23.5456 10.6464 25.7346C10.5998 27.0717 11.1931 28.2717 12.1437 29.0531C12.8287 29.6163 13.2213 30.4596 13.2213 31.3463V33.9092C13.2213 34.7534 13.9056 35.4378 14.7498 35.4378C15.5941 35.4378 16.2784 34.7534 16.2784 33.9092V31.3463C16.2784 30.4595 16.6712 29.6161 17.3563 29.0529C18.2719 28.3002 18.8559 27.1592 18.8559 25.8813Z" fill="url(#paint14_linear_769_282)"/>
                      <path d="M18.8559 25.8813C18.8559 23.6083 17.009 21.7667 14.7341 21.7752C12.5438 21.7834 10.7226 23.5456 10.6464 25.7346C10.5998 27.0717 11.1931 28.2717 12.1437 29.0531C12.8287 29.6163 13.2213 30.4596 13.2213 31.3463V33.9092C13.2213 34.7534 13.9056 35.4378 14.7498 35.4378C15.5941 35.4378 16.2784 34.7534 16.2784 33.9092V31.3463C16.2784 30.4595 16.6712 29.6161 17.3563 29.0529C18.2719 28.3002 18.8559 27.1592 18.8559 25.8813Z" fill="url(#paint15_linear_769_282)"/>
                      <path d="M18.8559 25.8813C18.8559 23.6083 17.009 21.7667 14.7341 21.7752C12.5438 21.7834 10.7226 23.5456 10.6464 25.7346C10.5998 27.0717 11.1931 28.2717 12.1437 29.0531C12.8287 29.6163 13.2213 30.4596 13.2213 31.3463V33.9092C13.2213 34.7534 13.9056 35.4378 14.7498 35.4378C15.5941 35.4378 16.2784 34.7534 16.2784 33.9092V31.3463C16.2784 30.4595 16.6712 29.6161 17.3563 29.0529C18.2719 28.3002 18.8559 27.1592 18.8559 25.8813Z" fill="url(#paint16_linear_769_282)"/>
                      <defs>
                        <linearGradient id="paint0_linear_769_282" x1="14.7499" y1="15.5867" x2="14.7499" y2="22.2504" gradientUnits="userSpaceOnUse"><stop stopColor="#FEF0AE"/><stop offset="1" stopColor="#FAC600"/></linearGradient>
                        <linearGradient id="paint1_linear_769_282" x1="6.86232" y1="16.5763" x2="6.86232" y2="14.7684" gradientUnits="userSpaceOnUse"><stop stopColor="#FEF0AE"/><stop offset="1" stopColor="#FAC600"/></linearGradient>
                        <linearGradient id="paint2_linear_769_282" x1="22.6111" y1="16.5763" x2="22.6111" y2="14.7684" gradientUnits="userSpaceOnUse"><stop stopColor="#FEF0AE"/><stop offset="1" stopColor="#FAC600"/></linearGradient>
                        <linearGradient id="paint3_linear_769_282" x1="15.4264" y1="14.0434" x2="11.7793" y2="8.89449" gradientUnits="userSpaceOnUse"><stop stopColor="#FE9738" stopOpacity="0"/><stop offset="1" stopColor="#FE9738"/></linearGradient>
                        <linearGradient id="paint4_linear_769_282" x1="27.749" y1="41.0723" x2="12.2947" y2="25.6182" gradientUnits="userSpaceOnUse"><stop stopColor="#FEF0AE"/><stop offset="1" stopColor="#FAC600"/></linearGradient>
                        <linearGradient id="paint5_linear_769_282" x1="13.2868" y1="27.5409" x2="8.08422" y2="24.4837" gradientUnits="userSpaceOnUse"><stop stopColor="#FE9738" stopOpacity="0"/><stop offset="1" stopColor="#FE9738"/></linearGradient>
                        <linearGradient id="paint6_linear_769_282" x1="14.7499" y1="35.5451" x2="14.7499" y2="39.5141" gradientUnits="userSpaceOnUse"><stop stopColor="#FE9738" stopOpacity="0"/><stop offset="1" stopColor="#FE9738"/></linearGradient>
                        <linearGradient id="paint7_linear_769_282" x1="24.5071" y1="26.9201" x2="29.3879" y2="26.9201" gradientUnits="userSpaceOnUse"><stop stopColor="#FE9738" stopOpacity="0"/><stop offset="1" stopColor="#FE9738"/></linearGradient>
                        <linearGradient id="paint8_linear_769_282" x1="26.7506" y1="19.1767" x2="22.7011" y2="12.9015" gradientUnits="userSpaceOnUse"><stop stopColor="#FE9738" stopOpacity="0"/><stop offset="1" stopColor="#FE9738"/></linearGradient>
                        <linearGradient id="paint9_linear_769_282" x1="8.97778" y1="1.67133" x2="13.5904" y2="9.46622" gradientUnits="userSpaceOnUse"><stop stopColor="#F5FBFF"/><stop offset="1" stopColor="#DBD5EF"/></linearGradient>
                        <linearGradient id="paint10_linear_769_282" x1="19.1339" y1="8.24039" x2="24.3144" y2="8.24039" gradientUnits="userSpaceOnUse"><stop stopColor="#DBD5EF" stopOpacity="0"/><stop offset="0.2853" stopColor="#D9D2EE" stopOpacity="0.285"/><stop offset="0.4739" stopColor="#D4C9E9" stopOpacity="0.474"/><stop offset="0.6346" stopColor="#CBBAE2" stopOpacity="0.635"/><stop offset="0.7795" stopColor="#BFA5D7" stopOpacity="0.78"/><stop offset="0.9126" stopColor="#AF8ACA" stopOpacity="0.913"/><stop offset="1" stopColor="#A274BF"/></linearGradient>
                        <linearGradient id="paint11_linear_769_282" x1="6.88985" y1="12.7506" x2="6.88985" y2="16.5773" gradientUnits="userSpaceOnUse"><stop stopColor="#DBD5EF" stopOpacity="0"/><stop offset="0.2853" stopColor="#D9D2EE" stopOpacity="0.285"/><stop offset="0.4739" stopColor="#D4C9E9" stopOpacity="0.474"/><stop offset="0.6346" stopColor="#CBBAE2" stopOpacity="0.635"/><stop offset="0.7795" stopColor="#BFA5D7" stopOpacity="0.78"/><stop offset="0.9126" stopColor="#AF8ACA" stopOpacity="0.913"/><stop offset="1" stopColor="#A274BF"/></linearGradient>
                        <linearGradient id="paint12_linear_769_282" x1="22.612" y1="12.7507" x2="22.612" y2="16.5774" gradientUnits="userSpaceOnUse"><stop stopColor="#DBD5EF" stopOpacity="0"/><stop offset="0.2853" stopColor="#D9D2EE" stopOpacity="0.285"/><stop offset="0.4739" stopColor="#D4C9E9" stopOpacity="0.474"/><stop offset="0.6346" stopColor="#CBBAE2" stopOpacity="0.635"/><stop offset="0.7795" stopColor="#BFA5D7" stopOpacity="0.78"/><stop offset="0.9126" stopColor="#AF8ACA" stopOpacity="0.913"/><stop offset="1" stopColor="#A274BF"/></linearGradient>
                        <linearGradient id="paint13_linear_769_282" x1="12.1434" y1="28.6065" x2="17.1612" y2="28.6065" gradientUnits="userSpaceOnUse"><stop stopColor="#5A5A5A"/><stop offset="1" stopColor="#444444"/></linearGradient>
                        <linearGradient id="paint14_linear_769_282" x1="14.5652" y1="28.6074" x2="11.4545" y2="29.5191" gradientUnits="userSpaceOnUse"><stop stopColor="#433F43" stopOpacity="0"/><stop offset="1" stopColor="#1A1A1A"/></linearGradient>
                        <linearGradient id="paint15_linear_769_282" x1="13.5087" y1="27.224" x2="10.3442" y2="24.6496" gradientUnits="userSpaceOnUse"><stop stopColor="#433F43" stopOpacity="0"/><stop offset="1" stopColor="#1A1A1A"/></linearGradient>
                        <linearGradient id="paint16_linear_769_282" x1="14.7498" y1="24.8717" x2="14.7498" y2="21.3201" gradientUnits="userSpaceOnUse"><stop stopColor="#433F43" stopOpacity="0"/><stop offset="1" stopColor="#1A1A1A"/></linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p style={{ color: "#fff", fontFamily: "var(--font-stack-sans-headline), sans-serif", fontSize: "15px", fontWeight: 500, lineHeight: "22px" }}>SSL/TLS</p>
                    <p style={{ color: "#8ab89a", fontFamily: "var(--font-stack-sans-headline), sans-serif", fontSize: "12px", fontWeight: 300, lineHeight: "18px" }}>Certificate Status</p>
                    <p style={{ color: "#4dec8c", fontFamily: "var(--font-stack-sans-headline), sans-serif", fontSize: "12px", fontWeight: 400, lineHeight: "18px", marginTop: "2px" }}>
                      <span style={{ display: "inline-block", width: "7px", height: "7px", borderRadius: "50%", backgroundColor: "#4dec8c", marginRight: "5px", verticalAlign: "middle" }} />
                      Active
                    </p>
                  </div>
                </div>

                {/* Stripe Payments card */}
                <div style={{ borderRadius: "12px", border: "0.5px solid rgba(164,164,164,0.60)", background: "#154628", display: "flex", padding: "16px", alignItems: "center", gap: "12px", alignSelf: "stretch" }}>
                  <div style={{ display: "flex", width: "80px", height: "64px", flexDirection: "column", justifyContent: "center", alignItems: "center", borderRadius: "8px", background: "#FFE3EE", flexShrink: 0 }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="52" height="32" viewBox="0 0 52 32" fill="none">
                      <path d="M51.1988 30.3997C51.1988 31.2832 50.482 32 49.5985 32H1.60033C0.716052 31.9993 0 31.2832 0 30.3997V1.60033C0 0.716784 0.716052 0 1.60033 0H49.5992C50.482 0 51.1988 0.716784 51.1988 1.60033V30.3997Z" fill="url(#paint0_linear_769_243)"/>
                      <path d="M2.3999 15.9093C2.3999 14.8048 3.29535 13.9093 4.39995 13.9093H37.9988C39.1034 13.9093 39.9989 14.8048 39.9989 15.9093C39.9989 17.0139 39.1034 17.9094 37.9988 17.9094H4.39995C3.29535 17.9094 2.3999 17.0139 2.3999 15.9093Z" fill="white"/>
                      <path d="M28.9808 16.6861C28.9198 16.6863 28.8741 16.6302 28.8867 16.5706L29.0485 15.8026C29.0707 15.6974 28.9381 15.6049 28.8374 15.6425C28.8214 15.6485 28.805 15.6543 28.7883 15.66C28.7293 15.6798 28.6737 15.6267 28.6869 15.5659C28.6928 15.5389 28.7115 15.5168 28.7367 15.5056C28.8193 15.469 28.9007 15.4242 28.9837 15.3707C29.0773 15.3078 29.1475 15.2537 29.1951 15.2054C29.2164 15.1857 29.2374 15.1615 29.257 15.1327C29.2696 15.1143 29.29 15.1023 29.3123 15.1023C29.3521 15.1023 29.3819 15.139 29.3738 15.178L29.0742 16.6099C29.0649 16.6542 29.026 16.6859 28.9808 16.6861Z" fill="black"/>
                      <path d="M29.9376 16.6864C29.8082 16.6864 29.707 16.5635 29.7706 16.4509C29.8057 16.3873 29.8526 16.3258 29.9118 16.2702C29.9688 16.2125 30.0837 16.1181 30.2519 15.9835C30.3528 15.9023 30.4223 15.8431 30.4604 15.8036C30.5137 15.748 30.5525 15.6939 30.5774 15.6398C30.592 15.6032 30.6015 15.563 30.6015 15.5191C30.6015 15.4474 30.5759 15.3852 30.5255 15.3348C30.4743 15.285 30.4106 15.2587 30.336 15.2587C30.2621 15.2587 30.197 15.2843 30.1422 15.3362C30.1022 15.3731 30.0711 15.4251 30.048 15.4924C30.031 15.5422 29.9832 15.5769 29.9311 15.5695C29.877 15.5618 29.8382 15.5117 29.8531 15.4592C29.8801 15.3638 29.9277 15.2857 29.9959 15.2236C30.0859 15.1439 30.1985 15.1029 30.3324 15.1029C30.4223 15.1029 30.5035 15.1227 30.5759 15.1592C30.6491 15.1958 30.7039 15.2492 30.7405 15.3172C30.7763 15.383 30.7953 15.4525 30.7953 15.5249C30.7953 15.6303 30.7573 15.7305 30.6842 15.827C30.6381 15.8877 30.5028 16.0062 30.2775 16.1832C30.1824 16.2593 30.1115 16.3222 30.0625 16.3697C30.0109 16.4272 30.0546 16.5079 30.1318 16.5079H30.553C30.6099 16.5079 30.6523 16.5605 30.6402 16.6161C30.6313 16.6571 30.595 16.6864 30.553 16.6864H29.9376Z" fill="black"/>
                      <path d="M30.9172 16.3664C30.9048 16.3155 30.9438 16.2689 30.9959 16.2624C31.0495 16.2558 31.0972 16.2944 31.1118 16.3465C31.129 16.4081 31.1542 16.4551 31.1866 16.4875C31.2364 16.535 31.3007 16.5591 31.3812 16.5591C31.477 16.5591 31.5596 16.524 31.6313 16.4546C31.7001 16.3873 31.7352 16.3068 31.7352 16.219C31.7352 16.1422 31.7088 16.0771 31.6569 16.0274C31.6043 15.9777 31.534 15.9513 31.447 15.9513C31.4151 15.9513 31.3904 15.9246 31.3969 15.8933L31.407 15.8451C31.4131 15.8155 31.4403 15.797 31.4704 15.797C31.5816 15.797 31.6679 15.7707 31.7279 15.7166C31.7878 15.6624 31.8178 15.5959 31.8178 15.5176C31.8178 15.4445 31.7944 15.3838 31.744 15.3348C31.6942 15.285 31.6357 15.2594 31.5633 15.2594C31.4938 15.2594 31.4316 15.285 31.3753 15.3355C31.3407 15.3674 31.3133 15.408 31.294 15.4569C31.2744 15.5064 31.2254 15.542 31.1732 15.5316C31.1207 15.5212 31.0866 15.4687 31.1065 15.4189C31.1408 15.3333 31.1912 15.2642 31.2583 15.2119C31.3483 15.1387 31.455 15.1036 31.5772 15.1036C31.7067 15.1036 31.8098 15.1424 31.8917 15.2214C31.97 15.2982 32.0102 15.3955 32.0102 15.5088C32.0102 15.5915 31.989 15.6654 31.9466 15.7268C31.9353 15.7423 31.9228 15.7573 31.9088 15.7717C31.8516 15.8304 31.8471 15.9427 31.8895 16.0128C31.918 16.0647 31.9341 16.1232 31.9341 16.1905C31.9341 16.3309 31.8807 16.4538 31.7739 16.5577C31.6686 16.6615 31.5428 16.7127 31.3951 16.7127C31.2524 16.7127 31.1362 16.6725 31.0498 16.5935C30.9834 16.5326 30.9392 16.4574 30.9172 16.3664Z" fill="black"/>
                      <path d="M32.7833 16.6865C32.7226 16.6865 32.6773 16.6307 32.6898 16.5713L32.7079 16.4858C32.7298 16.3823 32.6509 16.285 32.5451 16.285H32.2706C32.1866 16.285 32.1241 16.2076 32.1417 16.1255C32.1466 16.103 32.1572 16.0822 32.1726 16.0651L33.0035 15.1412C33.0216 15.1211 33.0474 15.1096 33.0745 15.1096C33.1351 15.1096 33.1803 15.1654 33.1678 15.2247L33.0037 16.0032C32.9919 16.0595 33.0348 16.1124 33.0923 16.1124H33.0974C33.152 16.1124 33.1929 16.1624 33.182 16.2159C33.1738 16.2561 33.1385 16.285 33.0974 16.285H33.0564C32.9918 16.285 32.9361 16.3302 32.9227 16.3933L32.8768 16.6108C32.8675 16.6549 32.8285 16.6865 32.7833 16.6865ZM32.6659 16.1124C32.736 16.1124 32.7964 16.0632 32.8107 15.9947C32.8417 15.8464 32.6563 15.753 32.5555 15.8659C32.4705 15.9613 32.5381 16.1124 32.6659 16.1124Z" fill="black"/>
                      <path d="M35.2325 16.6865C35.1717 16.6865 35.1263 16.6306 35.1389 16.5711L35.1569 16.4858C35.1787 16.3823 35.0998 16.285 34.9941 16.285H34.7196C34.6356 16.285 34.5731 16.2076 34.5907 16.1255C34.5955 16.103 34.6062 16.0822 34.6216 16.0651L35.4525 15.1412C35.4706 15.1211 35.4964 15.1096 35.5234 15.1096C35.5841 15.1096 35.6293 15.1654 35.6168 15.2247L35.4527 16.0031C35.4409 16.0594 35.4838 16.1124 35.5414 16.1124H35.5467C35.6014 16.1124 35.6423 16.1627 35.6312 16.2162C35.6229 16.2563 35.5876 16.285 35.5467 16.285H35.5061C35.4419 16.285 35.3864 16.3298 35.3729 16.3926L35.326 16.611C35.3165 16.6551 35.2776 16.6865 35.2325 16.6865ZM35.1157 16.1124C35.1857 16.1124 35.2461 16.0633 35.2604 15.9948C35.2913 15.8467 35.1061 15.7533 35.0054 15.8663C34.9205 15.9615 34.9881 16.1124 35.1157 16.1124Z" fill="black"/>
                      <path d="M35.834 16.2681C35.834 16.2493 35.8489 16.2346 35.8675 16.2327L35.9827 16.2212C36.0093 16.2185 36.0307 16.2398 36.0307 16.2666C36.0307 16.3142 36.0432 16.3624 36.068 16.4107C36.0922 16.4575 36.1244 16.4941 36.166 16.5204C36.207 16.5453 36.2494 16.5585 36.2962 16.5585C36.3569 16.5585 36.4169 16.5365 36.4813 16.4956C36.5435 16.4539 36.5932 16.3932 36.6327 16.3142C36.6715 16.2344 36.6897 16.1554 36.6897 16.0779C36.6897 15.9894 36.6649 15.9192 36.6129 15.8658C36.5617 15.8124 36.4915 15.7861 36.4074 15.7861C36.3518 15.7861 36.2977 15.7992 36.2465 15.827C36.2099 15.8481 36.174 15.8758 36.141 15.9106C36.1184 15.9345 36.0871 15.9491 36.0543 15.9466C35.9925 15.9419 35.9507 15.8814 35.9682 15.8219L36.0894 15.4108C36.1383 15.2448 36.2908 15.1307 36.4639 15.1307H36.8323C36.889 15.1307 36.9315 15.1827 36.9201 15.2383C36.9116 15.28 36.8749 15.3099 36.8323 15.3099H36.3912C36.3405 15.3099 36.2958 15.3433 36.2814 15.3919L36.2311 15.5612C36.2165 15.6104 36.2753 15.6534 36.324 15.6376C36.3716 15.6222 36.4191 15.6142 36.4688 15.6142C36.5888 15.6142 36.6875 15.6537 36.7658 15.7334C36.8419 15.8124 36.8821 15.9214 36.8821 16.0596C36.8821 16.181 36.855 16.2937 36.8024 16.3953C36.749 16.497 36.6758 16.5753 36.5837 16.6309C36.4901 16.6857 36.3913 16.7128 36.2823 16.7128C36.1924 16.7128 36.1127 16.6923 36.0424 16.6521C35.9737 16.6111 35.9218 16.5555 35.8859 16.4831C35.8515 16.4122 35.834 16.3405 35.834 16.2681Z" fill="black"/>
                      <path d="M37.346 16.686C37.2829 16.6862 37.2347 16.6301 37.2502 16.5689C37.2703 16.4897 37.299 16.4015 37.335 16.3032C37.4023 16.124 37.49 15.9441 37.5983 15.7678C37.6085 15.7508 37.6189 15.7341 37.6294 15.7175C37.731 15.5572 37.6231 15.3099 37.4332 15.3099H37.2839C37.227 15.3099 37.1845 15.2575 37.1963 15.2017C37.2051 15.1603 37.2416 15.1307 37.2839 15.1307H38.0729C38.1472 15.1307 38.2028 15.1991 38.1877 15.2719C38.1825 15.2966 38.1695 15.3189 38.151 15.336C37.9932 15.4825 37.8536 15.6657 37.7336 15.8899C37.6005 16.1345 37.5062 16.3726 37.4475 16.6053C37.4357 16.6521 37.3943 16.6858 37.346 16.686Z" fill="black"/>
                      <path d="M44.1976 24.6765C44.2134 24.6765 44.2263 24.6637 44.2276 24.6479C44.2308 24.6087 44.2413 24.5699 44.2599 24.5351C44.2601 24.5347 44.2603 24.5343 44.2606 24.5338C44.2723 24.517 44.2854 24.5068 44.3059 24.5053C44.5256 24.5041 44.7031 24.3257 44.7031 24.106V22.8004C44.7031 22.7704 44.7126 22.7463 44.7309 22.7273C44.7506 22.7082 44.7857 22.698 44.8347 22.698H44.9313C44.9971 22.698 45.0571 22.698 45.1112 22.7009C45.1646 22.7046 45.2129 22.7112 45.2509 22.7229C45.2897 22.7346 45.3196 22.7543 45.3409 22.7814C45.3628 22.807 45.3745 22.845 45.3745 22.8918C45.3745 22.9225 45.3664 22.9489 45.3533 22.9701C45.3401 22.9891 45.3226 23.0067 45.2999 23.0198C45.2772 23.0323 45.2516 23.041 45.2216 23.0476C45.1722 23.0616 45.1317 23.1013 45.1318 23.1527L45.1333 24.1184C45.1336 24.3314 45.307 24.5036 45.52 24.5024C45.5427 24.5024 45.5654 24.5068 45.5888 24.5126C45.6115 24.5199 45.6334 24.5302 45.6502 24.5441C45.6671 24.5587 45.6832 24.5777 45.697 24.6004C45.7073 24.6223 45.7131 24.6479 45.7131 24.6794C45.7131 24.6831 45.713 24.6868 45.7129 24.6905C45.7105 24.739 45.6874 24.7861 45.6488 24.8154C45.629 24.8293 45.6085 24.8396 45.5866 24.8447C45.5632 24.8505 45.5405 24.8535 45.5171 24.8535L44.3132 24.852C44.2964 24.852 44.2766 24.8483 44.2554 24.841C44.2342 24.8359 44.2137 24.8249 44.1955 24.8103C44.1772 24.7979 44.1589 24.7781 44.1457 24.7555C44.1401 24.746 44.1358 24.7362 44.1327 24.7259C44.1246 24.6995 44.1484 24.6765 44.1761 24.6765H44.1976Z" fill="url(#paint1_linear_769_243)"/>
                      <path d="M43.0392 22.6892C43.1306 22.6972 43.2125 22.7126 43.2842 22.7316C43.3559 22.7528 43.4129 22.7806 43.4554 22.8143C43.4978 22.8479 43.519 22.8896 43.5219 22.9386V22.943C43.5219 22.9978 43.5066 23.041 43.4729 23.0761C43.4407 23.1098 43.399 23.1273 43.3478 23.128H43.3339C43.2879 23.128 43.2506 23.1215 43.2206 23.1076C43.192 23.0915 43.1562 23.0798 43.1152 23.0673C43.0758 23.0527 43.026 23.0432 42.9653 23.0366C42.9053 23.0286 42.8358 23.0264 42.762 23.0264C42.6676 23.0264 42.5908 23.0315 42.5323 23.0417C42.4731 23.052 42.4248 23.0681 42.3926 23.0907C42.3597 23.1127 42.3348 23.1427 42.3224 23.1807C42.3092 23.2165 42.3048 23.2633 42.3048 23.3219V23.3314C42.3048 23.3826 42.3085 23.4257 42.3202 23.4616C42.3304 23.4967 42.3473 23.5245 42.3685 23.5435C42.3926 23.5647 42.4233 23.58 42.4599 23.5888C42.4972 23.5991 42.5433 23.6035 42.6025 23.6035L42.9083 23.6093C43.0158 23.61 43.1109 23.6217 43.1935 23.643C43.2769 23.6656 43.3486 23.6985 43.4063 23.7468C43.4627 23.7951 43.5073 23.858 43.5365 23.9377C43.5665 24.016 43.5819 24.1133 43.5819 24.2317V24.6684C43.5819 24.7276 43.5643 24.7744 43.5322 24.8059C43.4992 24.8366 43.4378 24.8527 43.3456 24.8527H42.111C42.0825 24.8527 42.0562 24.8491 42.0276 24.8417C42.0013 24.8366 41.9764 24.8256 41.9545 24.811C41.934 24.7986 41.9172 24.7788 41.904 24.7562C41.8909 24.7328 41.885 24.7057 41.885 24.6742C41.8879 24.6435 41.8967 24.6157 41.9099 24.5945C41.9245 24.5726 41.9428 24.5543 41.9625 24.5411C41.9845 24.5265 42.0079 24.517 42.0342 24.5111C42.0598 24.5046 42.0847 24.5016 42.1117 24.5016H42.9668C43.0754 24.5016 43.1635 24.4135 43.1635 24.3049C43.1635 24.2178 43.1547 24.152 43.1372 24.1037C43.1196 24.0569 43.0896 24.024 43.0458 24.0021C43.0019 23.9787 42.9448 23.9662 42.8695 23.9626C42.7934 23.9589 42.6998 23.956 42.5886 23.956C42.4584 23.956 42.3495 23.9458 42.2588 23.9216C42.1688 23.8982 42.0957 23.8616 42.0408 23.8119C41.9859 23.7614 41.945 23.6942 41.9208 23.6122C41.8974 23.5281 41.8857 23.4272 41.8857 23.3065V23.2948C41.8872 23.1822 41.9033 23.0863 41.9347 23.0081C41.9647 22.9298 42.013 22.8655 42.0818 22.8172C42.1491 22.7675 42.2383 22.7323 42.3465 22.7111C42.4562 22.6877 42.5901 22.676 42.7503 22.676C42.849 22.676 42.9463 22.6811 43.0392 22.6892Z" fill="url(#paint2_linear_769_243)"/>
                      <path d="M39.6074 24.021C39.614 23.9683 39.6235 23.923 39.6352 23.8871C39.6476 23.852 39.6615 23.822 39.6762 23.8023C39.6984 23.7699 39.6995 23.7251 39.6785 23.6919C39.6756 23.6874 39.6729 23.6828 39.6703 23.6779C39.6549 23.6523 39.6403 23.6216 39.6301 23.5843C39.6184 23.5485 39.6118 23.5068 39.6052 23.4585C39.6001 23.4095 39.5972 23.3525 39.5972 23.2874C39.5972 23.1623 39.6118 23.0599 39.6425 22.9824C39.6725 22.9034 39.7186 22.8412 39.7859 22.7981C39.8524 22.7527 39.9417 22.722 40.0484 22.7044C40.1582 22.6876 40.2898 22.6803 40.4471 22.6803C40.5758 22.6803 40.6855 22.6854 40.7755 22.6993C40.8669 22.7125 40.9415 22.7344 41 22.76C41.0571 22.7864 41.1017 22.8193 41.1302 22.8566C41.1602 22.8946 41.1756 22.9399 41.1785 22.989V22.9941C41.1785 23.0365 41.1609 23.0753 41.1251 23.1089C41.09 23.1418 41.0454 23.1579 40.992 23.1579H40.9781C40.9547 23.1579 40.9349 23.1572 40.9166 23.1521C40.9013 23.1484 40.883 23.1425 40.8684 23.1352C40.8523 23.1272 40.8384 23.1199 40.823 23.1096C40.8091 23.1009 40.7916 23.0921 40.7733 23.0826C40.7367 23.065 40.6884 23.0511 40.6255 23.0431C40.5619 23.035 40.5034 23.0314 40.4434 23.0314H40.4251C40.3352 23.0314 40.2635 23.035 40.2101 23.0467C40.156 23.0577 40.1157 23.0745 40.0887 23.0979C40.0616 23.1228 40.0455 23.1543 40.036 23.1945C40.0287 23.2332 40.025 23.2815 40.025 23.3364C40.025 23.3861 40.0302 23.4293 40.0375 23.4614C40.0463 23.4944 40.0572 23.52 40.074 23.539C40.0923 23.5565 40.1121 23.5697 40.1391 23.5763C40.164 23.5821 40.1925 23.5858 40.2255 23.5858H40.6541C40.706 23.5858 40.7543 23.5997 40.796 23.626C40.8362 23.6523 40.8589 23.6984 40.8589 23.7621C40.8589 23.7972 40.8523 23.825 40.842 23.8469C40.8296 23.8674 40.815 23.8849 40.796 23.8974C40.7762 23.9098 40.7535 23.92 40.7301 23.9252C40.7053 23.9303 40.6804 23.931 40.6541 23.931L40.1991 23.9361C40.1326 23.9361 40.0843 23.9551 40.058 23.9946C40.0331 24.0356 40.0207 24.1044 40.0207 24.2046C40.0207 24.2601 40.0265 24.3084 40.0375 24.3494C40.0492 24.3896 40.0719 24.4218 40.104 24.4474C40.1355 24.473 40.1794 24.492 40.2342 24.5059C40.2891 24.5191 40.3593 24.5249 40.4441 24.5249H40.4727C40.5458 24.5249 40.6058 24.5235 40.6504 24.5191C40.6957 24.5139 40.7323 24.5081 40.7616 24.5037C40.7901 24.4971 40.812 24.4891 40.8303 24.481C40.8467 24.4725 40.8631 24.4639 40.8774 24.454C40.8867 24.446 40.8958 24.439 40.9049 24.432C40.9137 24.4262 40.9232 24.4203 40.9357 24.4137C40.9474 24.4079 40.962 24.402 40.9803 24.3984C40.9986 24.394 41.0227 24.3911 41.0519 24.3911H41.0563C41.1024 24.3911 41.1463 24.4086 41.1843 24.4415C41.2246 24.4759 41.2443 24.5191 41.2443 24.571V24.5783C41.2421 24.628 41.2282 24.6705 41.2041 24.7034C41.1792 24.7363 41.1463 24.7648 41.1053 24.786C41.0622 24.8087 41.0176 24.827 40.9664 24.8387C40.9159 24.8504 40.8618 24.8599 40.8091 24.8643C40.7557 24.8709 40.7023 24.8745 40.6489 24.8753C40.5941 24.8767 40.5473 24.8767 40.5041 24.8767H40.4807C40.3059 24.8767 40.1604 24.8658 40.0463 24.8445C39.9329 24.8211 39.8429 24.7853 39.7764 24.7356C39.7091 24.6844 39.6645 24.6171 39.6367 24.5322C39.6111 24.4474 39.5979 24.3406 39.5979 24.2155C39.5979 24.138 39.6008 24.0736 39.6074 24.021Z" fill="url(#paint3_linear_769_243)"/>
                      <path d="M37.416 23.6174C37.4457 23.6178 37.4701 23.5937 37.4701 23.564V22.856C37.4701 22.8062 37.4898 22.7653 37.5249 22.7301C37.5622 22.6943 37.6156 22.676 37.6851 22.676C37.7539 22.676 37.8058 22.6928 37.8424 22.7265C37.876 22.7594 37.8921 22.8018 37.8921 22.8552V23.35C37.8921 23.4977 38.0118 23.6174 38.1594 23.6174C38.3071 23.6174 38.4268 23.4977 38.4268 23.35V22.8669C38.4268 22.8069 38.4443 22.7601 38.4794 22.7272C38.5167 22.6936 38.5709 22.676 38.6455 22.676C38.682 22.676 38.7135 22.6826 38.7413 22.6958C38.7669 22.7082 38.7881 22.7236 38.8049 22.7426C38.821 22.7609 38.8334 22.7835 38.8415 22.8048C38.8488 22.8274 38.8524 22.8479 38.8524 22.8684L38.8517 23.8558C38.8517 23.896 38.8437 23.9245 38.829 23.9421C38.8137 23.9611 38.7808 23.9706 38.7259 23.9706H38.6242C38.2235 23.9706 37.8987 24.2955 37.8987 24.6962C37.8987 24.7145 37.8936 24.7342 37.8848 24.7547C37.8767 24.7744 37.865 24.7935 37.8468 24.8103C37.8299 24.8278 37.808 24.841 37.7809 24.8542C37.7546 24.8673 37.7231 24.8725 37.6844 24.8725C37.6463 24.8725 37.6149 24.8673 37.5864 24.8542C37.5593 24.8417 37.5381 24.8286 37.5205 24.8096C37.503 24.7913 37.4906 24.773 37.4825 24.7525C37.4737 24.7306 37.4686 24.7108 37.4686 24.6925V24.0417C37.4686 24.0014 37.4371 23.9683 37.3969 23.9662C37.3421 23.9655 37.2938 23.9494 37.2543 23.9224C37.2141 23.8938 37.1936 23.847 37.1936 23.7827C37.1958 23.7212 37.217 23.6781 37.2572 23.6517C37.2975 23.6276 37.3457 23.6166 37.4042 23.6166L37.416 23.6174Z" fill="url(#paint4_linear_769_243)"/>
                      <path d="M34.0289 23.5932H34.3193C34.4704 23.5932 34.5928 23.4708 34.5928 23.3197C34.5928 23.1686 34.4704 23.0461 34.3193 23.0461H33.7495C33.7166 23.0461 33.6866 23.0447 33.6566 23.0432C33.6281 23.0418 33.6032 23.0359 33.5791 23.0242C33.5579 23.0125 33.5403 22.9964 33.5279 22.9737C33.5155 22.9503 33.5082 22.9167 33.506 22.8757V22.8691C33.506 22.8318 33.5147 22.8019 33.5308 22.7792C33.5476 22.7572 33.5711 22.7397 33.5945 22.7272C33.6179 22.7134 33.6457 22.706 33.6742 22.7009C33.702 22.6965 33.7261 22.6943 33.7495 22.6943H33.8395H34.0106C34.0779 22.6943 34.1489 22.6958 34.2279 22.6965C34.3054 22.6965 34.3807 22.698 34.4524 22.698H34.647H34.775C34.8671 22.698 34.9271 22.7134 34.9615 22.7448C34.9929 22.7763 35.0097 22.8223 35.0097 22.8823V23.6883C35.0097 23.741 35.0046 23.7834 34.9995 23.8163C34.9907 23.8514 34.9783 23.8756 34.9593 23.8939C34.9381 23.9114 34.911 23.9231 34.8722 23.9312C34.8342 23.9355 34.7859 23.9399 34.7245 23.9399H34.0026C33.9331 23.9399 33.8848 23.9589 33.8614 23.9999C33.8366 24.0416 33.8249 24.1111 33.8249 24.2084C33.8249 24.2625 33.83 24.31 33.8402 24.3517C33.8534 24.3919 33.8731 24.4241 33.9038 24.4497C33.9353 24.4753 33.9777 24.4943 34.0333 24.5082C34.0874 24.5214 34.1569 24.5273 34.2418 24.5273C34.3273 24.5273 34.3968 24.5251 34.4487 24.5199C34.5014 24.5141 34.5431 24.5082 34.5738 24.498C34.6067 24.49 34.6301 24.4812 34.6477 24.4687C34.6652 24.457 34.6821 24.4475 34.6974 24.438C34.715 24.43 34.734 24.4197 34.7552 24.4124C34.7772 24.4044 34.8086 24.4 34.8503 24.3956H34.8591C34.9037 24.3956 34.9468 24.4124 34.9856 24.4461C35.0244 24.479 35.0441 24.5207 35.0441 24.5711V24.5741C35.0375 24.6457 35.0119 24.6999 34.9659 24.7394C34.9198 24.7781 34.8642 24.8074 34.7976 24.8286C34.7296 24.8476 34.6587 24.86 34.5826 24.8644C34.5043 24.8688 34.4348 24.8703 34.3683 24.8703H34.2739C34.1028 24.8703 33.9587 24.86 33.8461 24.8381C33.7342 24.8184 33.6457 24.7825 33.5791 24.732C33.5118 24.6823 33.4665 24.6158 33.4394 24.5324C33.4145 24.449 33.4006 24.3444 33.4006 24.2193C33.4006 24.0972 33.4109 23.9948 33.4306 23.9129C33.4526 23.8339 33.4862 23.7688 33.5345 23.7227C33.5828 23.6752 33.6493 23.643 33.7283 23.6218C33.8095 23.6028 33.9075 23.5932 34.0289 23.5932Z" fill="url(#paint5_linear_769_243)"/>
                      <path d="M31.9824 23.5347C32.126 23.5388 32.2507 23.4302 32.2498 23.2865L32.2471 22.856C32.2471 22.8062 32.2654 22.7653 32.2983 22.7301C32.3334 22.6943 32.3854 22.676 32.4585 22.676C32.4987 22.676 32.5317 22.6819 32.5573 22.6928C32.5858 22.7045 32.607 22.7184 32.6253 22.736C32.6421 22.7528 32.6553 22.7733 32.6626 22.7945C32.6706 22.8172 32.6743 22.8391 32.6743 22.8596V24.2668C32.6743 24.3795 32.656 24.4746 32.6158 24.5514C32.5763 24.6282 32.5221 24.6911 32.449 24.7386C32.3788 24.7861 32.2954 24.8205 32.1959 24.8439C32.0987 24.8637 31.9926 24.8754 31.8756 24.8754C31.722 24.8754 31.5918 24.8608 31.4857 24.833C31.3819 24.8052 31.297 24.762 31.2334 24.7064C31.1698 24.6494 31.1237 24.5799 31.0959 24.4965C31.0703 24.4146 31.0549 24.318 31.0549 24.2113C31.0549 24.0994 31.0674 24.0021 31.0922 23.9165C31.1171 23.8317 31.1588 23.7614 31.2136 23.7044C31.2714 23.6459 31.346 23.6027 31.4404 23.5742C31.5355 23.5442 31.6503 23.5303 31.7907 23.5303C31.8427 23.531 31.9063 23.531 31.9824 23.5347ZM31.4945 24.3678C31.5106 24.4095 31.5362 24.4431 31.5669 24.4665C31.5984 24.4892 31.6415 24.5046 31.6898 24.5126C31.7395 24.5206 31.798 24.5243 31.8661 24.5243C31.9399 24.5243 32.0014 24.5177 32.0511 24.5053C32.1009 24.4936 32.1396 24.4724 32.1711 24.4438C32.1981 24.4153 32.2193 24.3795 32.2332 24.3371C32.2449 24.2939 32.2523 24.2434 32.2523 24.1827V23.9813C32.2523 23.938 32.2221 23.8992 32.1791 23.8938C32.1594 23.8909 32.1352 23.8872 32.1104 23.885C32.084 23.8836 32.0526 23.8829 32.016 23.8829C31.9772 23.8829 31.9275 23.8829 31.8653 23.8829C31.79 23.8829 31.7256 23.8872 31.6752 23.8946C31.6254 23.9041 31.5852 23.9202 31.5538 23.9428C31.5238 23.9662 31.5026 23.9984 31.4901 24.0379C31.477 24.0803 31.4726 24.133 31.4726 24.1981C31.4726 24.2683 31.4777 24.3246 31.4945 24.3678Z" fill="url(#paint6_linear_769_243)"/>
                      <path d="M29.1709 24.6844V22.9941C29.1709 22.9363 29.176 22.8873 29.1848 22.8493C29.1965 22.812 29.2126 22.7813 29.2367 22.7579C29.2645 22.7344 29.2996 22.7184 29.3479 22.711C29.3962 22.7008 29.4591 22.6971 29.5359 22.6971H30.6242C30.6739 22.6971 30.7208 22.7125 30.7639 22.7425C30.8063 22.7739 30.8275 22.8164 30.8275 22.8705C30.8275 22.9341 30.8063 22.9802 30.7639 23.0073C30.72 23.0351 30.674 23.0475 30.6206 23.0475C30.0538 23.0475 29.5944 23.5069 29.5944 24.0737V24.6873C29.5944 24.7422 29.5768 24.7861 29.5432 24.8204C29.5081 24.8548 29.4562 24.8716 29.3823 24.8716C29.3165 24.8716 29.2645 24.8548 29.2265 24.819C29.1892 24.7846 29.1709 24.7392 29.1709 24.6844Z" fill="url(#paint7_linear_769_243)"/>
                      <path d="M26.7522 24.0774C26.7558 24.0277 26.7676 23.9867 26.7866 23.9523C26.8056 23.9187 26.8363 23.8894 26.8765 23.8646C26.8797 23.8627 26.883 23.8609 26.8863 23.859C26.9442 23.8266 26.9406 23.7369 26.8824 23.7051C26.8422 23.681 26.8122 23.6532 26.791 23.6203C26.7734 23.5852 26.761 23.542 26.758 23.4879C26.7544 23.4338 26.7522 23.3614 26.7522 23.2707C26.7522 23.1602 26.7676 23.0666 26.7983 22.9898C26.8268 22.9145 26.8743 22.8523 26.9394 22.8069C27.0045 22.7609 27.0894 22.728 27.1962 22.7082C27.3022 22.687 27.4309 22.676 27.5809 22.676C27.7308 22.676 27.8581 22.687 27.9619 22.706C28.0643 22.7265 28.1492 22.7594 28.2128 22.8048C28.2765 22.8516 28.3218 22.9115 28.3518 22.9891C28.3789 23.0666 28.3927 23.1624 28.3927 23.2787C28.3927 23.3709 28.392 23.4418 28.3862 23.4945C28.384 23.5479 28.3737 23.591 28.3525 23.6261C28.3342 23.659 28.3028 23.6883 28.2589 23.711C28.1933 23.7444 28.1873 23.8389 28.25 23.8776C28.2548 23.8806 28.2595 23.8836 28.264 23.8865C28.3079 23.915 28.3394 23.945 28.3606 23.9779C28.3789 24.0101 28.3906 24.0496 28.3927 24.0964C28.3964 24.1425 28.3993 24.2032 28.3993 24.2771C28.3993 24.3641 28.3891 24.446 28.3679 24.517C28.3496 24.5894 28.3094 24.6523 28.2523 24.7042C28.196 24.7554 28.1133 24.7979 28.008 24.8278C27.902 24.8571 27.7645 24.8717 27.5911 24.8717C27.4097 24.8717 27.2649 24.8593 27.153 24.8308C27.0433 24.8037 26.9577 24.7649 26.8963 24.7137C26.8363 24.6603 26.7953 24.5989 26.7763 24.525C26.7566 24.4519 26.7478 24.37 26.7478 24.2764C26.7478 24.193 26.7478 24.1279 26.7522 24.0774ZM27.1665 24.2807C27.1667 24.2807 27.1669 24.2809 27.1669 24.2811C27.167 24.3212 27.175 24.3562 27.1866 24.3861C27.1998 24.4161 27.221 24.4402 27.251 24.4577C27.281 24.4768 27.3212 24.4885 27.371 24.4965C27.4207 24.5067 27.4807 24.5097 27.556 24.5097C27.6409 24.5097 27.7111 24.5067 27.7645 24.4987C27.8179 24.4921 27.861 24.4782 27.8925 24.4607C27.9224 24.4424 27.9422 24.4168 27.9546 24.3875C27.9663 24.3561 27.9707 24.3202 27.9707 24.2742V24.2727C27.9707 24.2668 27.9663 24.2515 27.9605 24.2281C27.9539 24.2039 27.9363 24.1769 27.9107 24.1447C27.883 24.1125 27.8442 24.0789 27.7908 24.0408C27.79 24.0403 27.7891 24.0397 27.7883 24.0391C27.6592 23.9495 27.4798 23.9443 27.3505 24.0335C27.2964 24.0694 27.2561 24.103 27.2291 24.1337C27.2027 24.1652 27.1837 24.19 27.1779 24.2113C27.172 24.231 27.1662 24.242 27.1662 24.2376V24.2804C27.1662 24.2806 27.1663 24.2807 27.1665 24.2807ZM27.7981 23.5464C27.8522 23.531 27.8925 23.5135 27.9159 23.493C27.9407 23.4718 27.9546 23.4469 27.9598 23.4148C27.9634 23.3833 27.9663 23.3387 27.9663 23.2838C27.9663 23.2246 27.9583 23.1778 27.9451 23.1441C27.9298 23.1098 27.9071 23.0834 27.8749 23.0659C27.8435 23.0483 27.8032 23.0366 27.755 23.033C27.7067 23.0278 27.646 23.0264 27.5772 23.0264C27.5165 23.0264 27.4602 23.0278 27.4119 23.0315C27.3629 23.0337 27.322 23.0432 27.2854 23.0571C27.2503 23.0725 27.224 23.0937 27.2071 23.1222C27.1881 23.15 27.1793 23.1887 27.1793 23.2363C27.1793 23.3058 27.1808 23.3577 27.1859 23.3965C27.1896 23.4352 27.2042 23.4667 27.2298 23.4894C27.2547 23.512 27.2942 23.5318 27.3446 23.5486C27.4904 23.5945 27.6482 23.59 27.7949 23.5473C27.796 23.547 27.7971 23.5467 27.7981 23.5464Z" fill="url(#paint8_linear_769_243)"/>
                      <path d="M23.002 23.2838C23.002 23.1719 23.0217 23.0761 23.0619 23C23.1022 22.9232 23.1541 22.8611 23.2258 22.8128C23.296 22.7653 23.3794 22.7301 23.4766 22.7089C23.5746 22.6877 23.6807 22.676 23.7977 22.676C23.9528 22.676 24.083 22.6907 24.1876 22.7184C24.2929 22.747 24.3777 22.7894 24.4421 22.8457C24.5065 22.902 24.5518 22.9715 24.5796 23.0556C24.6059 23.1375 24.6213 23.2334 24.6213 23.3409C24.6213 23.4528 24.6096 23.5479 24.5847 23.6342C24.5613 23.7161 24.5226 23.7863 24.4684 23.8463C24.4128 23.9041 24.3382 23.948 24.2468 23.9779C24.1569 24.0065 24.0435 24.0211 23.9111 24.0211H23.8526C23.7729 24.0211 23.6983 24.0189 23.631 24.0152C23.5213 24.0105 23.4262 24.0955 23.4262 24.2053V24.6962C23.4262 24.7445 23.4086 24.7876 23.375 24.822C23.3435 24.8571 23.2901 24.8754 23.2185 24.8754C23.1812 24.8754 23.1482 24.8695 23.1197 24.8571C23.0934 24.8469 23.0714 24.833 23.0532 24.8161C23.0363 24.7986 23.0224 24.7781 23.0144 24.7569C23.0063 24.7357 23.002 24.7145 23.002 24.6925V23.2838ZM23.7977 23.6642H23.8109C23.887 23.6642 23.9521 23.659 24.0011 23.6503C24.053 23.6415 24.0925 23.6261 24.1247 23.6035C24.1547 23.5808 24.1744 23.5479 24.1868 23.5069C24.2 23.4659 24.2059 23.4133 24.2059 23.3489C24.2059 23.278 24.1963 23.2217 24.1825 23.1807C24.1671 23.1375 24.143 23.1032 24.1108 23.0798C24.0779 23.0571 24.0369 23.0417 23.9864 23.0344C23.9367 23.0271 23.8782 23.0234 23.8109 23.0234C23.7363 23.0234 23.6741 23.0278 23.6258 23.041C23.5768 23.0556 23.5366 23.0754 23.5081 23.1024C23.4781 23.1317 23.4584 23.1661 23.4445 23.2107C23.432 23.2524 23.4262 23.3043 23.4262 23.3628V23.5223C23.4262 23.5896 23.4761 23.6474 23.5432 23.6525C23.5849 23.6568 23.6193 23.659 23.6544 23.6605C23.688 23.6627 23.718 23.6634 23.7429 23.6634C23.7677 23.6634 23.786 23.6642 23.7977 23.6642Z" fill="url(#paint9_linear_769_243)"/>
                      <path d="M20.6296 23.2546C20.6296 23.158 20.6494 23.0746 20.6882 23.0022C20.7269 22.9298 20.781 22.8684 20.8513 22.8208C20.9229 22.7733 21.0063 22.736 21.1036 22.7126C21.2053 22.6885 21.315 22.676 21.4364 22.676C21.6968 22.676 21.9001 22.7228 22.0435 22.8194C22.1868 22.9145 22.2585 23.0556 22.2585 23.2429V24.2924C22.2585 24.3948 22.2417 24.4833 22.2051 24.5558C22.1663 24.6296 22.1137 24.6896 22.0435 24.7357C21.9732 24.7825 21.8899 24.8169 21.7897 24.8395C21.6909 24.8608 21.5768 24.8717 21.4496 24.8717C21.3281 24.8717 21.2148 24.8622 21.116 24.8432C21.0144 24.822 20.9266 24.7905 20.8549 24.743C20.7825 24.6969 20.7262 24.6355 20.6874 24.5587C20.6473 24.4835 20.629 24.3901 20.6289 24.2771C20.6289 24.2767 20.6292 24.2764 20.6296 24.2764C20.63 24.2764 20.6304 24.276 20.6304 24.2756L20.6296 23.2546ZM21.0561 24.2829C21.0561 24.367 21.0912 24.4263 21.1614 24.4629C21.2316 24.5002 21.3281 24.5185 21.4503 24.5185C21.5805 24.5185 21.6756 24.5009 21.737 24.4658C21.8014 24.4307 21.8335 24.3707 21.8335 24.2837V23.2538C21.8335 23.1844 21.8028 23.1288 21.7399 23.0863C21.677 23.0439 21.5797 23.0227 21.4474 23.0227C21.315 23.0227 21.2162 23.0432 21.1533 23.0863C21.0875 23.131 21.0568 23.1909 21.0568 23.2677L21.0561 24.2829Z" fill="url(#paint10_linear_769_243)"/>
                      <path d="M18.5492 24.6765C18.565 24.6765 18.5778 24.6637 18.5792 24.6479C18.5823 24.6088 18.5914 24.5699 18.6099 24.5353C18.6101 24.5348 18.6104 24.5343 18.6107 24.5338C18.6209 24.517 18.6363 24.5068 18.6567 24.5053C18.8756 24.5041 19.0524 24.3263 19.0524 24.1074V22.8004C19.0524 22.7704 19.0634 22.7463 19.0824 22.7273C19.1022 22.7082 19.1358 22.698 19.1863 22.698H19.2814C19.3486 22.698 19.4072 22.698 19.4628 22.7009C19.5161 22.7046 19.563 22.7112 19.601 22.7229C19.6412 22.7346 19.6712 22.7543 19.6924 22.7814C19.7129 22.807 19.7246 22.845 19.7246 22.8918C19.7246 22.9225 19.718 22.9489 19.7048 22.9701C19.6895 22.9891 19.6727 23.0067 19.6515 23.0198C19.6273 23.0323 19.6032 23.041 19.5732 23.0476C19.5228 23.0611 19.4818 23.1019 19.4819 23.1541L19.4834 24.1169C19.4837 24.3308 19.6578 24.5036 19.8716 24.5024C19.8936 24.5024 19.917 24.5068 19.9389 24.5126C19.963 24.5199 19.9821 24.5302 20.0018 24.5441C20.0186 24.5587 20.034 24.5777 20.0471 24.6004C20.0581 24.6223 20.064 24.6479 20.064 24.6794C20.064 24.7108 20.0574 24.7386 20.0471 24.7613C20.034 24.784 20.0194 24.8015 20.0003 24.8154C19.9806 24.8293 19.9601 24.8396 19.9374 24.8447C19.914 24.8505 19.8906 24.8535 19.8687 24.8535L18.6633 24.852C18.6472 24.852 18.6267 24.8483 18.6055 24.841C18.5624 24.8306 18.5252 24.7999 18.5015 24.7623C18.5 24.7601 18.4986 24.7578 18.4973 24.7555C18.4914 24.746 18.487 24.7363 18.484 24.726C18.476 24.6995 18.5 24.6765 18.5276 24.6765H18.5492Z" fill="url(#paint11_linear_769_243)"/>
                      <path d="M17.3907 22.6892C17.4829 22.6972 17.5641 22.7126 17.6343 22.7316C17.706 22.7528 17.7645 22.7806 17.8054 22.8143C17.8493 22.8479 17.8705 22.8896 17.8727 22.9386V22.943C17.8727 22.9978 17.8559 23.041 17.823 23.0761C17.7908 23.1098 17.7491 23.1273 17.6965 23.128H17.6855C17.6387 23.128 17.6021 23.1215 17.5721 23.1076C17.5429 23.0915 17.5078 23.0798 17.4675 23.0673C17.4273 23.0527 17.3761 23.0432 17.3161 23.0366C17.2554 23.0286 17.1874 23.0264 17.1128 23.0264C17.0192 23.0264 16.9424 23.0315 16.8831 23.0417C16.8232 23.052 16.7756 23.0681 16.7427 23.0907C16.7098 23.1127 16.6871 23.1427 16.6732 23.1807C16.6608 23.2165 16.6549 23.2633 16.6549 23.3219V23.3314C16.6549 23.3826 16.6615 23.4257 16.6688 23.4616C16.6805 23.4967 16.6966 23.5245 16.72 23.5435C16.7427 23.5647 16.7734 23.58 16.8129 23.5888C16.8488 23.5991 16.8948 23.6035 16.9526 23.6035L17.2598 23.6093C17.3666 23.61 17.461 23.6217 17.5436 23.643C17.6284 23.6656 17.6972 23.6985 17.7564 23.7468C17.8135 23.7951 17.8588 23.858 17.8874 23.9377C17.9166 24.016 17.9334 24.1133 17.9334 24.2317V24.6684C17.9334 24.7276 17.9159 24.7744 17.8822 24.8059C17.8493 24.8366 17.7879 24.8527 17.6972 24.8527H16.4611C16.4341 24.8527 16.4077 24.8491 16.3785 24.8417C16.3529 24.8366 16.3287 24.8256 16.3061 24.811C16.2848 24.7986 16.2673 24.7788 16.2541 24.7562C16.2424 24.7328 16.2351 24.7057 16.2351 24.6742C16.2388 24.6435 16.2483 24.6157 16.2614 24.5945C16.2739 24.5726 16.2929 24.5543 16.3141 24.5411C16.3338 24.5265 16.358 24.517 16.3843 24.5111C16.4114 24.5046 16.4348 24.5016 16.4611 24.5016H17.3161C17.4248 24.5016 17.5129 24.4135 17.5129 24.3049C17.5129 24.2178 17.5041 24.152 17.488 24.1037C17.4705 24.0569 17.4405 24.024 17.3966 24.0021C17.3542 23.9787 17.2942 23.9662 17.2189 23.9626C17.145 23.9589 17.0514 23.956 16.9387 23.956C16.8085 23.956 16.6981 23.9458 16.6081 23.9216C16.5189 23.8982 16.4479 23.8616 16.3916 23.8119C16.3346 23.7614 16.2951 23.6942 16.2702 23.6122C16.2483 23.5281 16.2351 23.4272 16.2351 23.3065V23.2948C16.238 23.1822 16.2527 23.0863 16.2841 23.0081C16.3148 22.9298 16.3638 22.8655 16.4311 22.8172C16.4999 22.7675 16.5876 22.7323 16.6974 22.7111C16.8063 22.6877 16.9395 22.676 17.0996 22.676C17.1998 22.676 17.2978 22.6811 17.3907 22.6892Z" fill="url(#paint12_linear_769_243)"/>
                      <path d="M12.7147 24.6765C12.7305 24.6765 12.7434 24.6637 12.7447 24.6479C12.7462 24.6297 12.7484 24.6106 12.7535 24.5894C12.7586 24.5711 12.7667 24.5514 12.7769 24.5338C12.7864 24.517 12.8032 24.5068 12.823 24.5053C13.0419 24.5041 13.2187 24.3263 13.2187 24.1074V22.8004C13.2187 22.7704 13.2275 22.7463 13.2465 22.7273C13.267 22.7082 13.3013 22.698 13.3518 22.698H13.4469C13.5142 22.698 13.5734 22.698 13.6268 22.7009C13.6817 22.7046 13.7277 22.7112 13.7672 22.7229C13.8067 22.7346 13.8367 22.7543 13.8565 22.7814C13.8799 22.807 13.8901 22.845 13.8901 22.8918C13.8901 22.9225 13.8835 22.9489 13.8689 22.9701C13.8557 22.9891 13.8375 23.0067 13.8155 23.0198C13.7943 23.0323 13.768 23.041 13.738 23.0476C13.6884 23.0609 13.6481 23.1013 13.6481 23.1527L13.6491 24.1169C13.6493 24.3307 13.8233 24.5036 14.0371 24.5024C14.0591 24.5024 14.0825 24.5068 14.1044 24.5126C14.1271 24.5199 14.1483 24.5302 14.1659 24.5441C14.1841 24.5587 14.198 24.5777 14.2112 24.6004C14.2244 24.6223 14.2295 24.6479 14.2295 24.6794C14.2295 24.7108 14.2236 24.7386 14.2112 24.7613C14.198 24.784 14.1841 24.8015 14.1659 24.8154C14.1461 24.8293 14.1256 24.8396 14.1037 24.8447C14.081 24.8505 14.0562 24.8535 14.0342 24.8535L12.8281 24.852C12.8128 24.852 12.7923 24.8483 12.7696 24.841C12.7513 24.8359 12.7294 24.8249 12.7111 24.8103C12.6913 24.7979 12.676 24.7781 12.6628 24.7555C12.6573 24.7462 12.6528 24.7366 12.6494 24.7265C12.6405 24.6999 12.6644 24.6765 12.6924 24.6765H12.7147Z" fill="url(#paint13_linear_769_243)"/>
                      <path d="M11.5563 22.6892C11.647 22.6972 11.7296 22.7126 11.7998 22.7316C11.873 22.7528 11.9286 22.7806 11.9695 22.8143C12.0141 22.8479 12.0361 22.8896 12.0368 22.9386V22.943C12.0368 22.9978 12.0229 23.041 11.99 23.0761C11.9563 23.1098 11.9161 23.1273 11.8627 23.128H11.8525C11.8035 23.128 11.7669 23.1215 11.7369 23.1076C11.7084 23.0915 11.6733 23.0798 11.6323 23.0673C11.5928 23.0527 11.5431 23.0432 11.4824 23.0366C11.4231 23.0286 11.3529 23.0264 11.2783 23.0264C11.1832 23.0264 11.1086 23.0315 11.0487 23.0417C10.9872 23.052 10.9419 23.0681 10.9075 23.0907C10.8753 23.1127 10.8519 23.1427 10.8388 23.1807C10.827 23.2165 10.8205 23.2633 10.8205 23.3219V23.3314C10.8205 23.3826 10.8241 23.4257 10.8358 23.4616C10.8461 23.4967 10.8636 23.5245 10.8856 23.5435C10.9075 23.5647 10.939 23.58 10.977 23.5888C11.0143 23.5991 11.0618 23.6035 11.1174 23.6035L11.4253 23.6093C11.5321 23.61 11.6265 23.6217 11.7106 23.643C11.794 23.6656 11.8657 23.6985 11.922 23.7468C11.979 23.7951 12.0236 23.858 12.0536 23.9377C12.0822 24.016 12.0975 24.1133 12.0975 24.2317V24.6684C12.0975 24.7276 12.0814 24.7744 12.0485 24.8059C12.0149 24.8366 11.9542 24.8527 11.8627 24.8527H10.6266C10.5981 24.8527 10.5732 24.8491 10.5433 24.8417C10.5169 24.8366 10.4935 24.8256 10.4701 24.811C10.4489 24.7986 10.4328 24.7788 10.4189 24.7562C10.395 24.7052 10.3973 24.6423 10.427 24.5945C10.4394 24.5726 10.4584 24.5543 10.4789 24.5411C10.5001 24.5265 10.525 24.517 10.5506 24.5111C10.5747 24.5046 10.6003 24.5016 10.6266 24.5016H11.4817C11.5903 24.5016 11.6784 24.4135 11.6784 24.3049C11.6784 24.2178 11.6704 24.152 11.6521 24.1037C11.636 24.0569 11.6053 24.024 11.5607 24.0021C11.519 23.9787 11.4583 23.9662 11.3858 23.9626C11.3105 23.9589 11.2169 23.956 11.105 23.956C10.9733 23.956 10.8651 23.9458 10.7751 23.9216C10.6852 23.8982 10.612 23.8616 10.5557 23.8119C10.5008 23.7614 10.4621 23.6942 10.4357 23.6122C10.4138 23.5281 10.4006 23.4272 10.4006 23.3065V23.2948C10.4021 23.1822 10.4182 23.0863 10.4489 23.0081C10.4804 22.9298 10.5286 22.8655 10.5967 22.8172C10.6647 22.7675 10.7532 22.7323 10.8629 22.7111C10.9711 22.6877 11.105 22.676 11.2652 22.676C11.3661 22.676 11.4626 22.6811 11.5563 22.6892Z" fill="url(#paint14_linear_769_243)"/>
                      <path d="M8.12303 24.021C8.12962 23.9683 8.13986 23.923 8.15229 23.8871C8.16473 23.852 8.17643 23.822 8.19252 23.8023C8.2133 23.7706 8.21491 23.7239 8.19487 23.6918C8.1921 23.6874 8.18937 23.6827 8.18667 23.6779C8.17131 23.6523 8.15668 23.6216 8.14644 23.5843C8.13547 23.5485 8.12669 23.5068 8.1223 23.4585C8.11572 23.4095 8.11426 23.3525 8.11426 23.2874C8.11426 23.1623 8.12669 23.0599 8.15668 22.9824C8.18813 22.9034 8.23567 22.8412 8.30296 22.7981C8.36952 22.7527 8.45656 22.722 8.56627 22.7044C8.67379 22.6876 8.80617 22.6803 8.96416 22.6803C9.09289 22.6803 9.20187 22.6854 9.29256 22.6993C9.38253 22.7125 9.4564 22.7344 9.51637 22.76C9.57416 22.7864 9.61658 22.8193 9.64657 22.8566C9.67582 22.8946 9.69264 22.9399 9.69557 22.989V22.9941C9.69557 23.0365 9.67802 23.0753 9.64218 23.1089C9.60561 23.1418 9.56245 23.1579 9.5076 23.1579H9.49516C9.47176 23.1579 9.45128 23.1572 9.43226 23.1521C9.41544 23.1484 9.40008 23.1425 9.38472 23.1352C9.37009 23.1272 9.35327 23.1199 9.33864 23.1096C9.32474 23.1009 9.30719 23.0921 9.29037 23.0826C9.2538 23.065 9.20552 23.0511 9.14262 23.0431C9.08045 23.035 9.01755 23.0314 8.95904 23.0314H8.94075C8.85079 23.0314 8.78057 23.035 8.72645 23.0467C8.67306 23.0577 8.63283 23.0745 8.60577 23.0979C8.57944 23.1228 8.56042 23.1543 8.55311 23.1945C8.54579 23.2332 8.54067 23.2815 8.54067 23.3364C8.54067 23.3861 8.54579 23.4293 8.55457 23.4614C8.56334 23.4944 8.57578 23.52 8.5926 23.539C8.60796 23.5565 8.6299 23.5697 8.65477 23.5763C8.67964 23.5821 8.70963 23.5858 8.74108 23.5858H9.16969C9.22235 23.5858 9.27135 23.5997 9.31231 23.626C9.35327 23.6523 9.37448 23.6984 9.37448 23.7621C9.37448 23.7972 9.36936 23.825 9.35766 23.8469C9.34596 23.8674 9.3306 23.8849 9.31158 23.8974C9.29183 23.9098 9.26989 23.92 9.24502 23.9252C9.22015 23.9303 9.19528 23.931 9.16822 23.931L8.71475 23.9361C8.64526 23.9361 8.59992 23.9551 8.57358 23.9946C8.54872 24.0356 8.53482 24.1044 8.53482 24.2046C8.53482 24.2601 8.5414 24.3084 8.55311 24.3494C8.56554 24.3896 8.58529 24.4218 8.61966 24.4474C8.64965 24.473 8.695 24.492 8.74839 24.5059C8.80325 24.5191 8.87346 24.5249 8.95831 24.5249H8.98537C9.06144 24.5249 9.11995 24.5235 9.16457 24.5191C9.20918 24.5139 9.24795 24.5081 9.27501 24.5037C9.305 24.4971 9.32767 24.4891 9.34522 24.481C9.36375 24.4725 9.37742 24.4639 9.39299 24.454C9.39335 24.4538 9.39319 24.4532 9.39276 24.4532C9.39233 24.4532 9.39217 24.4527 9.39253 24.4524C9.40206 24.4462 9.41094 24.4394 9.41854 24.4325C9.41891 24.4322 9.41931 24.4319 9.41973 24.4316C9.4284 24.4259 9.43914 24.4202 9.45128 24.4137C9.46298 24.4079 9.47615 24.402 9.49443 24.3984C9.51272 24.394 9.53832 24.3911 9.56538 24.3911H9.57123C9.61731 24.3911 9.66119 24.4086 9.70142 24.4415C9.74019 24.4759 9.75847 24.5191 9.75847 24.571V24.5783C9.75701 24.628 9.74238 24.6705 9.71824 24.7034C9.69484 24.7363 9.66193 24.7648 9.6195 24.786C9.57928 24.8087 9.5332 24.827 9.48127 24.8387C9.4308 24.8504 9.37741 24.8599 9.32401 24.8643C9.27062 24.8709 9.21576 24.8745 9.16237 24.8753C9.11044 24.8767 9.06217 24.8767 9.01901 24.8767H8.99634C8.82153 24.8767 8.67671 24.8658 8.56334 24.8445C8.44998 24.8211 8.36001 24.7853 8.29272 24.7356C8.2269 24.6844 8.18008 24.6171 8.15375 24.5322C8.12669 24.4474 8.11499 24.3406 8.11499 24.2155C8.11499 24.138 8.11645 24.0736 8.12303 24.021Z" fill="url(#paint15_linear_769_243)"/>
                      <path d="M5.93304 23.6174C5.96201 23.6178 5.98571 23.5944 5.98571 23.5654V22.856C5.98571 22.8062 6.00399 22.7653 6.04202 22.7301C6.07933 22.6943 6.13199 22.676 6.2022 22.676C6.27096 22.676 6.32216 22.6928 6.35653 22.7265C6.39237 22.7594 6.41066 22.8018 6.41066 22.8552V23.3511C6.41066 23.4982 6.52985 23.6174 6.67689 23.6174C6.82393 23.6174 6.94312 23.4982 6.94312 23.3511V22.8669C6.94312 22.8069 6.96068 22.7601 6.99652 22.7272C7.03309 22.6936 7.08794 22.676 7.16109 22.676C7.19839 22.676 7.2313 22.6826 7.2569 22.6958C7.28323 22.7082 7.3059 22.7236 7.32273 22.7426C7.33662 22.7609 7.34979 22.7835 7.35857 22.8048C7.36661 22.8274 7.37027 22.8479 7.37027 22.8684L7.36734 23.8558C7.36734 23.896 7.36149 23.9245 7.3454 23.9421C7.3315 23.9611 7.29713 23.9706 7.24373 23.9706H7.14207C6.74135 23.9706 6.41651 24.2955 6.41651 24.6962C6.41651 24.7145 6.41139 24.7342 6.40261 24.7547C6.3931 24.7744 6.3814 24.7935 6.36458 24.8103C6.34702 24.8278 6.32435 24.841 6.29802 24.8542C6.27096 24.8673 6.24097 24.8725 6.2022 24.8725C6.16417 24.8725 6.13199 24.8673 6.10419 24.8542C6.0764 24.8417 6.05592 24.8286 6.03764 24.8096C6.02081 24.7913 6.00765 24.773 5.99887 24.7525C5.99156 24.7306 5.98571 24.7108 5.98571 24.6925V24.0417C5.98571 24.0014 5.95419 23.9683 5.91403 23.9662C5.86064 23.9655 5.81163 23.9494 5.77213 23.9224C5.73264 23.8938 5.71216 23.847 5.71216 23.7827C5.71435 23.7212 5.7341 23.6781 5.77433 23.6517C5.81602 23.6276 5.86283 23.6166 5.9228 23.6166L5.93304 23.6174Z" fill="url(#paint16_linear_769_243)"/>
                      <path d="M0 7.60014C0 6.05383 1.25353 4.80029 2.79984 4.80029H48.399C49.9453 4.80029 51.1988 6.05383 51.1988 7.60014C51.1988 9.14645 49.9453 10.4 48.399 10.4H2.79984C1.25353 10.4 0 9.14645 0 7.60014Z" fill="black"/>
                      <defs>
                        <linearGradient id="paint0_linear_769_243" x1="25.5994" y1="31.9993" x2="25.5994" y2="0" gradientUnits="userSpaceOnUse"><stop stopColor="#C89600"/><stop offset="1" stopColor="#FFC800"/></linearGradient>
                        <linearGradient id="paint1_linear_769_243" x1="44.9181" y1="24.8542" x2="44.9181" y2="22.698" gradientUnits="userSpaceOnUse"><stop stopColor="#643C00"/><stop offset="1" stopColor="#825A00"/></linearGradient>
                        <linearGradient id="paint2_linear_769_243" x1="42.7313" y1="24.852" x2="42.7313" y2="22.676" gradientUnits="userSpaceOnUse"><stop stopColor="#643C00"/><stop offset="1" stopColor="#825A00"/></linearGradient>
                        <linearGradient id="paint3_linear_769_243" x1="40.4207" y1="24.8775" x2="40.4207" y2="22.6803" gradientUnits="userSpaceOnUse"><stop stopColor="#643C00"/><stop offset="1" stopColor="#825A00"/></linearGradient>
                        <linearGradient id="paint4_linear_769_243" x1="38.0238" y1="24.8717" x2="38.0238" y2="22.676" gradientUnits="userSpaceOnUse"><stop stopColor="#643C00"/><stop offset="1" stopColor="#825A00"/></linearGradient>
                        <linearGradient id="paint5_linear_769_243" x1="34.222" y1="24.8696" x2="34.222" y2="22.6943" gradientUnits="userSpaceOnUse"><stop stopColor="#643C00"/><stop offset="1" stopColor="#825A00"/></linearGradient>
                        <linearGradient id="paint6_linear_769_243" x1="31.8646" y1="24.8754" x2="31.8646" y2="22.676" gradientUnits="userSpaceOnUse"><stop stopColor="#643C00"/><stop offset="1" stopColor="#825A00"/></linearGradient>
                        <linearGradient id="paint7_linear_769_243" x1="29.9996" y1="24.8716" x2="29.9996" y2="22.6979" gradientUnits="userSpaceOnUse"><stop stopColor="#643C00"/><stop offset="1" stopColor="#825A00"/></linearGradient>
                        <linearGradient id="paint8_linear_769_243" x1="27.5736" y1="24.8717" x2="27.5736" y2="22.676" gradientUnits="userSpaceOnUse"><stop stopColor="#643C00"/><stop offset="1" stopColor="#825A00"/></linearGradient>
                        <linearGradient id="paint9_linear_769_243" x1="23.8116" y1="24.8754" x2="23.8116" y2="22.676" gradientUnits="userSpaceOnUse"><stop stopColor="#643C00"/><stop offset="1" stopColor="#825A00"/></linearGradient>
                        <linearGradient id="paint10_linear_769_243" x1="21.443" y1="24.8717" x2="21.443" y2="22.676" gradientUnits="userSpaceOnUse"><stop stopColor="#643C00"/><stop offset="1" stopColor="#825A00"/></linearGradient>
                        <linearGradient id="paint11_linear_769_243" x1="19.2697" y1="24.8542" x2="19.2697" y2="22.698" gradientUnits="userSpaceOnUse"><stop stopColor="#643C00"/><stop offset="1" stopColor="#825A00"/></linearGradient>
                        <linearGradient id="paint12_linear_769_243" x1="17.0828" y1="24.852" x2="17.0828" y2="22.676" gradientUnits="userSpaceOnUse"><stop stopColor="#643C00"/><stop offset="1" stopColor="#825A00"/></linearGradient>
                        <linearGradient id="paint13_linear_769_243" x1="13.4337" y1="24.8542" x2="13.4337" y2="22.698" gradientUnits="userSpaceOnUse"><stop stopColor="#643C00"/><stop offset="1" stopColor="#825A00"/></linearGradient>
                        <linearGradient id="paint14_linear_769_243" x1="11.2469" y1="24.852" x2="11.2469" y2="22.676" gradientUnits="userSpaceOnUse"><stop stopColor="#643C00"/><stop offset="1" stopColor="#825A00"/></linearGradient>
                        <linearGradient id="paint15_linear_769_243" x1="8.9371" y1="24.8775" x2="8.9371" y2="22.6803" gradientUnits="userSpaceOnUse"><stop stopColor="#643C00"/><stop offset="1" stopColor="#825A00"/></linearGradient>
                        <linearGradient id="paint16_linear_769_243" x1="6.54085" y1="24.8717" x2="6.54085" y2="22.676" gradientUnits="userSpaceOnUse"><stop stopColor="#643C00"/><stop offset="1" stopColor="#825A00"/></linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p style={{ color: "#fff", fontFamily: "var(--font-stack-sans-headline), sans-serif", fontSize: "15px", fontWeight: 500, lineHeight: "22px" }}>Stripe Payments</p>
                    <p style={{ color: "#8ab89a", fontFamily: "var(--font-stack-sans-headline), sans-serif", fontSize: "12px", fontWeight: 300, lineHeight: "18px" }}>Payment Gateway</p>
                    <p style={{ color: "#f87171", fontFamily: "var(--font-stack-sans-headline), sans-serif", fontSize: "12px", fontWeight: 400, lineHeight: "18px", marginTop: "2px" }}>
                      <span style={{ display: "inline-block", width: "7px", height: "7px", borderRadius: "50%", backgroundColor: "#f87171", marginRight: "5px", verticalAlign: "middle" }} />
                      PCI Compliant
                    </p>
                  </div>
                </div>
              </div>
              </div>

            </div>
          </div>
        </Container>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="bg-white py-10 sm:py-14 lg:py-16">
        <Container>
          <h2
            className="mb-8 sm:mb-12 text-center"
            style={{
              color: "#012d12",
              fontFamily: "var(--font-stack-sans-headline), sans-serif",
              fontSize: "clamp(16px, 4vw, 40px)",
              fontWeight: 400,
              lineHeight: "clamp(30px, 5vw, 48px)",
              letterSpacing: "-0.8px",
            }}
          >
            Frequently asked questions
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16">
            <div>
              {faqs.slice(0, 6).map((faq, i) => (
                <FaqItem key={i} question={faq.q} answer={faq.a} />
              ))}
            </div>
            <div>
              {faqs.slice(6).map((faq, i) => (
                <FaqItem key={i + 6} question={faq.q} answer={faq.a} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── Reused sections ──────────────────────────────────────────────── */}
      <TestimonialsSection />
      <TrustedBySection />
      <CtaSection />
    </div>
  );
}
