"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { authInfo, sdks } from "./constants";

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

function DarkBlock({ label, code }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="rounded-lg bg-[#fafafa] border border-[#e8e8e8] p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          {label && (
            <p className="mb-1.5 text-[10px] uppercase tracking-widest text-brand/40"
              style={{ fontFamily: "var(--font-stack-sans-headline)", fontWeight: 300 }}>
              {label}
            </p>
          )}
          <code className="text-brand-alt text-[12px] break-all"
            style={{ fontFamily: "var(--font-geist-mono), monospace", fontWeight: 400, letterSpacing: "0.2px" }}>
            {code}
          </code>
        </div>
        <button
          onClick={handleCopy}
          className="shrink-0 mt-0.5 text-brand/30 hover:text-brand-alt transition-colors"
          title="Copy to clipboard"
        >
          {copied ? <Check size={14} className="text-[#2ed674]" /> : <Copy size={14} />}
        </button>
      </div>
    </div>
  );
}

function SectionTitle({ children }) {
  return (
    <h2 className="mb-3 text-brand text-[18px] 991:text-[22px]"
      style={{ fontFamily: "var(--font-stack-sans-headline)", fontWeight: 400, letterSpacing: "-0.4px" }}>
      {children}
    </h2>
  );
}

export function AuthSdkSection() {
  return (
    <>
      {/* Authentication */}
      <section id="authentication" className="scroll-mt-36 mb-14">
        <SectionTitle>Authentication</SectionTitle>
        <div className="rounded-xl border border-[#d7d7d7] bg-[#fafafa] p-6">
          <p className="mb-6 text-muted text-[13px] 991:text-[14px]"
            style={{ fontFamily: "var(--font-stack-sans-headline)", fontWeight: 300, lineHeight: "22px" }}>
            All API requests require an API key passed as the <InlineCode>apikey</InlineCode> query
            parameter. Keep your key secret and never share it publicly.
          </p>
          <div className="flex flex-col gap-3">
            <DarkBlock label="Base URL" code={authInfo.baseUrl} />
            <DarkBlock label="Authentication" code="?apikey=YOUR_API_KEY" />
          </div>
          <p className="mt-4 text-muted text-[13px]"
            style={{ fontFamily: "var(--font-stack-sans-headline)", fontWeight: 300, lineHeight: "20px" }}>
            Use <InlineCode>demo</InlineCode> as your API key to try endpoints with limited access (AAPL only).
          </p>
        </div>
      </section>

      {/* SDKs */}
      <section id="sdks" className="scroll-mt-36 mb-14">
        <SectionTitle>SDKs</SectionTitle>
        <div className="rounded-xl border border-[#d7d7d7] bg-[#fafafa] p-6">
          <p className="mb-6 text-muted text-[13px] 991:text-[14px]"
            style={{ fontFamily: "var(--font-stack-sans-headline)", fontWeight: 300, lineHeight: "22px" }}>
            Official client libraries are available for quick integration:
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            {sdks.map((sdk) => (
              <a
                key={sdk.lang}
                href={sdk.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center gap-4 rounded-xl border border-[#d7d7d7] bg-white p-4 transition-shadow hover:shadow-sm"
              >
                <div className="flex flex-col gap-1 min-w-0">
                  <span className="text-brand text-[14px] font-normal"
                    style={{ fontFamily: "var(--font-stack-sans-headline)" }}>
                    {sdk.lang} SDK
                  </span>
                  <code className="text-muted text-[12px]"
                    style={{ fontFamily: "var(--font-geist-mono), monospace", fontWeight: 400 }}>
                    {sdk.install}
                  </code>
                </div>
                <span className="ml-auto text-muted text-[12px] shrink-0"
                  style={{ fontFamily: "var(--font-stack-sans-headline)" }}>
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
