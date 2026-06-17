"use client";

import { Container } from "@/components/layout/container";
import { SlideIn } from "@/lib/motion";
import { authInfo, sdks } from "./constants";

function CodeBlock({ label, code, pre = false }) {
  return (
    <div className="rounded-lg bg-brand-alt p-4">
      {label && (
        <p
          className="mb-2 text-[10px] uppercase tracking-widest text-white/40"
          style={{ fontFamily: "var(--font-stack-sans-headline)", fontWeight: 300 }}
        >
          {label}
        </p>
      )}
      {pre ? (
        <pre
          className="text-[#8AB89A] text-[11px] 991:text-[12px] whitespace-pre-wrap"
          style={{ fontFamily: "var(--font-geist-mono), monospace", fontWeight: 400, lineHeight: "1.7" }}
        >
          {code}
        </pre>
      ) : (
        <code
          className="text-[#8AB89A] text-[12px] 991:text-[13px] break-all"
          style={{ fontFamily: "var(--font-geist-mono), monospace", fontWeight: 400, letterSpacing: "0.2px" }}
        >
          {code}
        </code>
      )}
    </div>
  );
}

function InlineCode({ children }) {
  return (
    <code
      className="rounded bg-[#e8f5ee] px-1.5 py-0.5 text-brand-alt text-[12px]"
      style={{ fontFamily: "var(--font-geist-mono), monospace" }}
    >
      {children}
    </code>
  );
}

export function AuthSection() {
  return (
    <section className="py-12 991:py-20 bg-surface">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">

          {/* ── Authentication ── */}
          <SlideIn direction="left">
            <h2
              className="mb-2 text-brand text-[20px] 991:text-[clamp(22px,3vw,32px)]"
              style={{ fontFamily: "var(--font-stack-sans-headline)", fontWeight: 400, letterSpacing: "-0.5px" }}
            >
              Authentication
            </h2>
            <p
              className="mb-8 text-muted text-[13px] 991:text-[14px]"
              style={{ fontFamily: "var(--font-stack-sans-headline)", fontWeight: 300, lineHeight: "22px" }}
            >
              All requests require an API key passed as the{" "}
              <InlineCode>apikey</InlineCode> query parameter. Keep your key
              secret and never expose it in client-side code.
            </p>

            <div className="flex flex-col gap-4">
              <div>
                <p
                  className="mb-1.5 text-[11px] uppercase tracking-widest text-brand/50"
                  style={{ fontFamily: "var(--font-stack-sans-headline)", fontWeight: 300 }}
                >
                  Base URL
                </p>
                <CodeBlock code={authInfo.baseUrl} />
              </div>

              <div>
                <p
                  className="mb-1.5 text-[11px] uppercase tracking-widest text-brand/50"
                  style={{ fontFamily: "var(--font-stack-sans-headline)", fontWeight: 300 }}
                >
                  Authentication
                </p>
                <CodeBlock code="?apikey=YOUR_API_KEY" />
              </div>

              <div>
                <p
                  className="mb-1.5 text-[11px] uppercase tracking-widest text-brand/50"
                  style={{ fontFamily: "var(--font-stack-sans-headline)", fontWeight: 300 }}
                >
                  Demo Key — AAPL only
                </p>
                <CodeBlock code="?apikey=demo" />
                <p
                  className="mt-2 text-muted text-[12px]"
                  style={{ fontFamily: "var(--font-stack-sans-headline)", fontWeight: 300, lineHeight: "18px" }}
                >
                  Use <InlineCode>demo</InlineCode> to explore endpoints
                  without an account — limited to Apple Inc. (AAPL) data only.
                </p>
              </div>
            </div>
          </SlideIn>

          {/* ── SDKs ── */}
          <SlideIn direction="right">
            <h2
              className="mb-2 text-brand text-[20px] 991:text-[clamp(22px,3vw,32px)]"
              style={{ fontFamily: "var(--font-stack-sans-headline)", fontWeight: 400, letterSpacing: "-0.5px" }}
            >
              Official SDKs
            </h2>
            <p
              className="mb-8 text-muted text-[13px] 991:text-[14px]"
              style={{ fontFamily: "var(--font-stack-sans-headline)", fontWeight: 300, lineHeight: "22px" }}
            >
              Client libraries for Python and JavaScript let you skip the raw
              HTTP calls and get started in minutes.
            </p>

            <div className="flex flex-col gap-4">
              {sdks.map((sdk) => (
                <div key={sdk.lang} className="rounded-xl border border-[#d7d7d7] bg-white p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <span
                      className="text-brand text-[15px] font-normal"
                      style={{ fontFamily: "var(--font-stack-sans-headline)" }}
                    >
                      {sdk.lang} SDK
                    </span>
                    <a
                      href={sdk.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[12px] text-brand/50 transition-opacity hover:opacity-70"
                      style={{ fontFamily: "var(--font-stack-sans-headline)", fontWeight: 300 }}
                    >
                      GitHub ↗
                    </a>
                  </div>
                  <CodeBlock label="Install" code={sdk.install} />
                  <div className="mt-3">
                    <CodeBlock label="Example" code={sdk.example} pre />
                  </div>
                </div>
              ))}
            </div>
          </SlideIn>

        </div>
      </Container>
    </section>
  );
}
