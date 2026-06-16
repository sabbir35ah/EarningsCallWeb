"use client";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { SlideIn } from "@/lib/motion";
import { apiEndpoints, techTags } from "./constants/constants";

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
    >
      <rect width="22" height="22" rx="2" fill="#1DBF73" />
      <path d="M18.5296 10.5293V11.4703H9.58972V10.5293H18.5296Z" fill="#013214" />
      <path d="M18.8622 10.6671C19.046 10.8509 19.046 11.1487 18.8622 11.3325L14.157 16.0377L13.4917 15.3723L17.8642 10.9998L13.4917 6.62726L14.157 5.96191L18.8622 10.6671Z" fill="#013214" />
      <path d="M4.8844 10.5293V11.4703H3.94336V10.5293H4.8844Z" fill="#013214" />
      <path d="M6.7666 10.5293V11.4703H5.82556V10.5293H6.7666Z" fill="#013214" />
      <path d="M8.64868 10.5293V11.4703H7.70764V10.5293H8.64868Z" fill="#013214" />
    </svg>
  );
}

export function EndpointsSection() {
  return (
    <section className="py-8 991:py-20">
      <Container>
        <div className="overflow-hidden rounded-xl bg-brand-alt">
          <div
            className="grid grid-cols-1 lg:grid-cols-2 p-4 991:p-[37px] 991:h-[608px]"
          >
            {/* LEFT — copy + tags + button */}
            <SlideIn
              direction="left"
              className="flex flex-col justify-start p-3 991:px-8 991:py-8 w-full 991:w-[540px]"
            >
              <h2
                className="mb-3 991:mb-6 text-white text-[14px] leading-[20px] 991:text-[clamp(22px,3vw,32px)] 991:leading-[clamp(30px,4vw,40px)]"
                style={{
                  fontFamily: "var(--font-stack-sans-headline)",
                  fontWeight: 400,
                  letterSpacing: "-0.5px",
                }}
              >
                Clean endpoints. Predictable responses.
              </h2>

              <p
                className="mb-4 991:mb-8 text-white/80 text-[12px] leading-[18px] 991:text-[clamp(14px,1.8vw,16px)] 991:leading-[24px]"
                style={{
                  fontFamily: "var(--font-stack-sans-headline)",
                  fontWeight: 300,
                }}
              >
                Every endpoint returns structured JSON with a consistent schema.
                Bearer token auth with no OAuth or SDK required to start. Pick
                up and build in minutes.
              </p>

              {/* Tech tags */}
              <div className="mb-4 991:mb-10 flex flex-wrap gap-1.5 991:gap-2">
                {techTags.map((tag) => (
                  <span
                    key={tag}
                    className="text-white text-[11px] leading-[16px] h-[28px] px-3 991:text-[clamp(12px,1.5vw,16px)] 991:leading-[24px] 991:h-[36px] 991:px-5"
                    style={{
                      display: "inline-flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "6px",
                      borderRadius: "33px",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      background: "rgba(255, 255, 255, 0.17)",
                      fontFamily: "var(--font-stack-sans-headline)",
                      fontWeight: 300,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Button */}
              <div>
                <Button
                  variant="white"
                  size="cta"
                  className="text-brand-alt h-[32px] px-3 text-[11px] 991:h-[clamp(40px,5vw,50px)] 991:px-[clamp(14px,2vw,20px)] 991:text-[18px] [&_svg]:size-[14px] 991:[&_svg]:size-[22px]"
                  style={{
                    fontFamily: "var(--font-stack-sans-headline)",
                    fontWeight: 300,
                    lineHeight: "28px",
                  }}
                >
                  Full Documentation
                  <ArrowIcon />
                </Button>
              </div>
            </SlideIn>

            {/* RIGHT — endpoint list */}
            <SlideIn
              direction="right"
              className="flex flex-col justify-start p-3 991:px-8 991:py-8"
            >
              <div className="flex flex-col">
                {apiEndpoints.map((endpoint) => (
                  <div key={endpoint.path} className="flex flex-col py-2 991:py-3 first:pt-0 last:pb-0">
                    <div className="flex items-center gap-2 991:gap-3 mb-1.5 991:mb-5">
                      <span
                        className="shrink-0 rounded-sm bg-[#2ed674] text-brand-alt px-1.5 py-0.5 991:px-2.5 text-[10px] leading-[16px] 991:text-[13px] 991:leading-[20px]"
                        style={{
                          fontFamily: "var(--font-stack-sans-headline)",
                          fontWeight: 300,
                        }}
                      >
                        GET
                      </span>
                      <code
                        className="truncate text-[11px] leading-[16px] 991:text-[14px]"
                        style={{
                          color: "#8AB89A",
                          fontFamily: '"Geist Mono", var(--font-geist-mono), monospace',
                          fontStyle: "normal",
                          fontWeight: 400,
                          letterSpacing: "0.2px",
                        }}
                      >
                        {endpoint.path}
                      </code>
                    </div>
                    <p
                      className="text-[11px] leading-[16px] mb-1 991:text-[14px] 991:leading-[20px] 991:mb-2"
                      style={{
                        color: "#FFF",
                        fontFamily: "var(--font-stack-sans-headline)",
                        fontStyle: "normal",
                        fontWeight: 300,
                      }}
                    >
                      {endpoint.description}
                    </p>
                  </div>
                ))}
              </div>
            </SlideIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
