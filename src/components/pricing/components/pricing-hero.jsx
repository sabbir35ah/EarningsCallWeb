"use client";

import { useState } from "react";

export function PricingHero() {
  const [audience, setAudience] = useState("individual");

  return (
    <section
      className="bg-white pb-10 sm:pb-14 lg:pb-16 px-4"
      style={{ paddingTop: "calc(var(--navbar-height) + 40px + 24px)" }}
    >
      <div className="max-w-226.7 mx-auto flex flex-col items-center gap-4 text-center">
        {/* Individual / Commercial toggle */}
        <div className="inline-flex">
          {["individual", "commercial"].map((val) => (
            <button
              key={val}
              type="button"
              onClick={() => setAudience(val)}
              className="inline-flex items-center justify-center font-headline font-light leading-7 transition-all duration-200 border border-brand-alt"
              style={{
                height: "clamp(30px, 5vw, 52px)",
                padding: "0 clamp(10px, 3vw, 32px)",
                fontSize: "clamp(11px, 2vw, 18px)",
                backgroundColor: audience === val ? "#013214" : "transparent",
                color: audience === val ? "#fff" : "#013214",
                borderRadius:
                  val === "individual" ? "6px 0 0 6px" : "0 6px 6px 0",
                borderLeft: val === "commercial" ? "none" : "1px solid #013214",
              }}
            >
              {val.charAt(0).toUpperCase() + val.slice(1)}
            </button>
          ))}
        </div>

        <h1
          className="font-headline font-normal leading-[1.2] max-w-147"
          style={{
            color: "#023f1a",
            fontSize: "clamp(16px, 5vw, 60px)",
            letterSpacing: "-0.8px",
          }}
        >
          The earnings call API. Plug in. Start building.
        </h1>

        <p
          className="font-headline font-light text-brand leading-6"
          style={{ fontSize: "clamp(13px, 1.8vw, 16px)" }}
        >
          9,000+ companies. One API key. Zero infrastructure.
        </p>

        <div className="flex flex-wrap justify-center mt-1 gap-[clamp(14px,3vw,28px)]">
          {[
            {
              label: "Instant access",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 15 15"
                  fill="none"
                >
                  <g clipPath="url(#clip0_654_386)">
                    <path
                      d="M6.04492 15L7.18051 8.60255H3.27686L8.95492 0L7.81932 6.04017H11.723L6.04492 15Z"
                      fill="#012D12"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_654_386">
                      <rect width="15" height="15" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              ),
            },
            {
              label: "No hidden fees",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 15 15"
                  fill="none"
                >
                  <path
                    d="M7.18014 12.5043C7.14579 12.5043 7.11181 12.4972 7.08033 12.4834C7.04886 12.4697 7.02057 12.4495 6.99726 12.4243L2.06617 7.09028C2.0333 7.05472 2.01151 7.01035 2.00346 6.9626C1.99542 6.91484 2.00147 6.86578 2.02087 6.82141C2.04028 6.77705 2.0722 6.7393 2.11273 6.71279C2.15325 6.68628 2.20063 6.67216 2.24906 6.67216H4.62261C4.65825 6.67217 4.69347 6.67981 4.7259 6.69459C4.75833 6.70936 4.78721 6.73092 4.8106 6.75781L6.45859 8.65377C6.63669 8.27305 6.98147 7.63914 7.58649 6.8667C8.48091 5.72476 10.1446 4.04531 12.991 2.52923C13.046 2.49993 13.11 2.49233 13.1703 2.50792C13.2307 2.52351 13.283 2.56116 13.3169 2.61344C13.3509 2.66572 13.364 2.72882 13.3537 2.79029C13.3433 2.85176 13.3103 2.90713 13.2612 2.94546C13.2503 2.95395 12.1529 3.81819 10.8898 5.4012C9.72742 6.85796 8.18219 9.23998 7.42183 12.3151C7.40847 12.3692 7.37741 12.4172 7.33359 12.4515C7.28977 12.4858 7.23572 12.5044 7.18007 12.5044L7.18014 12.5043Z"
                    fill="#012D12"
                  />
                </svg>
              ),
            },
            {
              label: "Cancel anytime",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="9"
                  viewBox="0 0 10 10"
                  fill="none"
                >
                  <path
                    d="M6.17837 4.99999L9.75584 1.42252C10.0814 1.097 10.0814 0.56966 9.75584 0.24414C9.43032 -0.08138 8.90298 -0.08138 8.57746 0.24414L4.99999 3.82161L1.42252 0.24414C1.097 -0.08138 0.56966 -0.08138 0.24414 0.24414C-0.08138 0.56966 -0.08138 1.097 0.24414 1.42252L3.82161 4.99999L0.24414 8.57746C-0.08138 8.90298 -0.08138 9.43032 0.24414 9.75584C0.4069 9.9186 0.620116 9.99998 0.833332 9.99998C1.04655 9.99998 1.25976 9.9186 1.42252 9.75584L4.99999 6.17837L8.57746 9.75584C8.74022 9.9186 8.95343 9.99998 9.16665 9.99998C9.37986 9.99998 9.59308 9.9186 9.75584 9.75584C10.0814 9.43032 10.0814 8.90298 9.75584 8.57746L6.17837 4.99999Z"
                    fill="#012D12"
                  />
                </svg>
              ),
            },
          ].map(({ label, icon }) => (
            <span
              key={label}
              className="flex items-center gap-1.5 font-headline font-light text-brand leading-5"
              style={{ fontSize: "clamp(12px, 1.5vw, 14px)" }}
            >
              {icon}
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
