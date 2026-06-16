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
    <section style={{ paddingTop: "80px", paddingBottom: "80px" }}>
      <Container>
        <div className="overflow-hidden rounded-xl bg-brand-alt">
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{ height: "608px", padding: "37px" }}>
            {/* LEFT — copy + tags + button */}
            <SlideIn
              direction="left"
              className="flex flex-col justify-start px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8"
              style={{ width: "540px" }}
            >
              <h2
                className="mb-6 text-white"
                style={{
                  fontFamily: "var(--font-stack-sans-headline)",
                  fontSize: "clamp(22px, 3vw, 32px)",
                  fontWeight: 400,
                  lineHeight: "clamp(30px, 4vw, 40px)",
                  letterSpacing: "-0.5px",
                }}
              >
                Clean endpoints. Predictable responses.
              </h2>

              <p
                className="mb-8 text-white/80"
                style={{
                  fontFamily: "var(--font-stack-sans-headline)",
                  fontSize: "clamp(14px, 1.8vw, 16px)",
                  fontWeight: 300,
                  lineHeight: "24px",
                }}
              >
                Every endpoint returns structured JSON with a consistent schema.
                Bearer token auth with no OAuth or SDK required to start. Pick
                up and build in minutes.
              </p>

              {/* Tech tags */}
              <div className="mb-10 flex flex-wrap gap-2">
                {techTags.map((tag) => (
                  <span
                    key={tag}
                    className="text-white"
                    style={{
                      display: "inline-flex",
                      height: "36px",
                      padding: "10px 20px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                      borderRadius: "33px",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      background: "rgba(255, 255, 255, 0.17)",
                      fontFamily: "var(--font-stack-sans-headline)",
                      fontSize: "clamp(12px, 1.5vw, 16px)",
                      fontWeight: 300,
                      lineHeight: "24px",
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
                  className="text-brand-alt [&_svg]:size-[22px]"
                  style={{
                    fontFamily: "var(--font-stack-sans-headline)",
                    fontSize: "18px",
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
              className="flex flex-col justify-start px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8"
            >
              <div className="flex flex-col">
                {apiEndpoints.map((endpoint) => (
                  <div key={endpoint.path} className="flex flex-col gap-1.5 py-3 first:pt-0 last:pb-0">
                    <div className="flex items-center gap-3" style={{ marginBottom: "20px" }}>
                      <span
                        className="shrink-0 rounded-sm bg-[#2ed674] px-2.5 py-0.5 text-brand-alt"
                        style={{
                          fontFamily: "var(--font-stack-sans-headline)",
                          fontSize: "13px",
                          fontWeight: 300,
                          lineHeight: "20px",
                        }}
                      >
                        GET
                      </span>
                      <code
                        className="truncate"
                        style={{
                          color: "#8AB89A",
                          fontFamily: '"Geist Mono", var(--font-geist-mono), monospace',
                          fontSize: "14px",
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "16px",
                          letterSpacing: "0.2px",
                        }}
                      >
                        {endpoint.path}
                      </code>
                    </div>
                    <p
                      style={{
                        color: "#FFF",
                        fontFamily: "var(--font-stack-sans-headline)",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: 300,
                        lineHeight: "20px",
                        marginBottom: "8px",
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
