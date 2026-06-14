"use client";
import { Container } from "@/components/layout/container";
import { useState } from "react";
import { plans } from "../constants/constants";
import { PlanCard } from "./plan-card";

export function PlansSection() {
  const [billing, setBilling] = useState("monthly");

  return (
    <section className="bg-white pb-10 sm:pb-14 lg:pb-16">
      <Container>
        {/* Billing toggle — right-aligned */}
        <div className="flex flex-col items-center sm:items-end gap-3 mb-8 sm:mb-10 w-full">
          <div className="flex items-center gap-3 sm:gap-4">
            <span
              className="font-headline leading-6 transition-colors duration-200"
              style={{
                fontSize: "clamp(10px, 1.8vw, 16px)",
                fontWeight: billing === "monthly" ? 400 : 300,
                color: billing === "monthly" ? "#013214" : "#828282",
              }}
            >
              Monthly
            </span>

            <button
              role="switch"
              aria-checked={billing === "annual"}
              onClick={() =>
                setBilling(billing === "monthly" ? "annual" : "monthly")
              }
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

            <div className="flex items-center gap-2">
              <span
                className="font-headline leading-6 transition-colors duration-200"
                style={{
                  fontSize: "clamp(10px, 1.8vw, 16px)",
                  fontWeight: billing === "annual" ? 400 : 300,
                  color: billing === "annual" ? "#013214" : "#828282",
                }}
              >
                Annual
              </span>
              <div
                className="flex items-center gap-1.5 px-2 sm:px-3 py-1 rounded-full font-headline font-normal leading-5 text-brand-alt bg-[rgba(46,214,116,0.12)]"
                style={{ fontSize: "clamp(9px, 1.3vw, 13px)" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="6"
                  viewBox="0 0 6 6"
                  fill="none"
                >
                  <path
                    d="M3.00312 0C1.3445 0 0 1.3431 0 3C0 4.6569 1.3445 6 3.00312 6C4.66175 6 6.00625 4.6569 6.00625 3C6.00625 1.3431 4.66175 0 3.00312 0Z"
                    fill="#2ED674"
                  />
                </svg>
                Save 20% Off
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5.25">
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} billing={billing} />
          ))}
        </div>
      </Container>
    </section>
  );
}
