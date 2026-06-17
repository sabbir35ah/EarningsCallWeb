"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { FadeUp } from "@/lib/motion";
import { endpoints } from "./constants";

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  function handleCopy() {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }
  return (
    <button
      onClick={handleCopy}
      className="shrink-0 text-brand/30 hover:text-brand-alt transition-colors"
      title="Copy to clipboard"
    >
      {copied ? <Check size={14} className="text-[#2ed674]" /> : <Copy size={14} />}
    </button>
  );
}

function InlineCode({ children }) {
  return (
    <code className="rounded bg-[#e8f5ee] px-1.5 py-0.5 text-brand-alt text-[11px]"
      style={{ fontFamily: "var(--font-geist-mono), monospace" }}>
      {children}
    </code>
  );
}

function SectionLabel({ children }) {
  return (
    <p className="mb-2.5 text-[10px] uppercase tracking-widest text-brand/40"
      style={{ fontFamily: "var(--font-stack-sans-headline)", fontWeight: 400 }}>
      {children}
    </p>
  );
}

function EndpointCard({ endpoint }) {
  return (
    <FadeUp id={endpoint.id} margin="-40px" className="scroll-mt-36 mb-6 last:mb-0">
      <div className="rounded-xl border border-[#d7d7d7] bg-[#fafafa] p-6">
      {/* Title row */}
      <div className="mb-4 flex flex-wrap items-center gap-2.5">
        <span className="rounded bg-[#2ed674] px-2.5 py-0.5 text-brand-alt text-[11px] shrink-0"
          style={{ fontFamily: "var(--font-stack-sans-headline)", fontWeight: 300 }}>
          GET
        </span>
        <h3 className="text-brand text-[16px] 991:text-[18px] font-normal"
          style={{ fontFamily: "var(--font-stack-sans-headline)", letterSpacing: "-0.3px" }}>
          {endpoint.title}
        </h3>
        {endpoint.isNew && (
          <span className="rounded-full bg-accent px-2.5 py-0.5 text-brand text-[10px]"
            style={{ fontFamily: "var(--font-stack-sans-headline)", fontWeight: 400 }}>
            New
          </span>
        )}
      </div>

      {/* Endpoint URL */}
      <div className="mb-5 rounded-lg bg-[#fafafa] border border-[#e8e8e8] px-4 py-3 overflow-x-auto">
        <div className="flex items-center gap-3">
          <span className="shrink-0 text-brand/40 text-[10px] uppercase tracking-widest"
            style={{ fontFamily: "var(--font-stack-sans-headline)", fontWeight: 300 }}>
            URL
          </span>
          <code className="text-brand-alt text-[12px] 991:text-[13px] flex-1"
            style={{ fontFamily: "var(--font-geist-mono), monospace", fontWeight: 400, letterSpacing: "0.2px" }}>
            {endpoint.endpoint}
          </code>
          <CopyButton text={endpoint.endpoint} />
        </div>
      </div>

      {/* Parameters */}
      <div className="mb-6">
        <SectionLabel>Parameters</SectionLabel>
        <div className="overflow-x-auto rounded-lg border border-[#e8e8e8]">
          <table className="w-full min-w-[480px]">
            <thead>
              <tr className="border-b border-[#e8e8e8] bg-[#fafafa]">
                {["Name", "Required", "Description"].map((h) => (
                  <th key={h} className="px-4 py-2.5 text-left text-[10px] uppercase tracking-widest text-brand/40"
                    style={{ fontFamily: "var(--font-stack-sans-headline)", fontWeight: 400 }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {endpoint.params.map((p) => (
                <tr key={p.name} className="border-b border-[#f0f0f0] last:border-0">
                  <td className="px-4 py-3 align-top">
                    <code className="text-brand-alt text-[12px]"
                      style={{ fontFamily: "var(--font-geist-mono), monospace", fontWeight: 400 }}>
                      {p.name}
                    </code>
                  </td>
                  <td className="px-4 py-3 align-top">
                    {p.required ? (
                      <span className="inline-flex rounded bg-[#fef2f2] px-2 py-0.5 text-red-500 text-[11px]"
                        style={{ fontFamily: "var(--font-stack-sans-headline)", fontWeight: 300 }}>
                        required
                      </span>
                    ) : (
                      <span className="inline-flex rounded bg-[#f0f0f0] px-2 py-0.5 text-muted text-[11px]"
                        style={{ fontFamily: "var(--font-stack-sans-headline)", fontWeight: 300 }}>
                        optional
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 align-top">
                    <p className="text-muted text-[12px] 991:text-[13px]"
                      style={{ fontFamily: "var(--font-stack-sans-headline)", fontWeight: 300, lineHeight: "1.5" }}>
                      {p.description}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Returns + Status Codes row */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <SectionLabel>Returns</SectionLabel>
          <span className="inline-flex items-center rounded bg-[#e8f5ee] px-3 py-1 text-brand-alt text-[12px]"
            style={{ fontFamily: "var(--font-geist-mono), monospace", fontWeight: 400 }}>
            {endpoint.returns}
          </span>
        </div>
        <div>
          <SectionLabel>HTTP Status Codes</SectionLabel>
          <div className="flex flex-wrap gap-2">
            {endpoint.statusCodes.map((s) => (
              <span key={s.code}
                className={`inline-flex items-center gap-1.5 rounded px-2.5 py-1 text-[11px] ${s.ok ? "bg-[#e8f5ee] text-brand-alt" : "bg-[#fef2f2] text-red-500"}`}
                style={{ fontFamily: "var(--font-stack-sans-headline)", fontWeight: 300 }}>
                <span className="font-mono text-[11px]">{s.code}</span>
                <span>{s.label}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Examples */}
      <div className="flex flex-col gap-5">
        {endpoint.examples.map((ex, i) => (
          <div key={i}>
            <h4 className="mb-2 text-brand text-[13px] font-normal"
              style={{ fontFamily: "var(--font-stack-sans-headline)", letterSpacing: "-0.2px" }}>
              {ex.title}
            </h4>
            {ex.note && (
              <p className="mb-3 text-muted text-[12px] italic"
                style={{ fontFamily: "var(--font-stack-sans-headline)", fontWeight: 300, lineHeight: "18px" }}>
                {ex.note}
              </p>
            )}
            <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
              <div>
                <SectionLabel>Request — cURL</SectionLabel>
                <div className="rounded-lg bg-brand-alt p-4 overflow-x-auto">
                  <pre className="text-[#8AB89A] text-[11px] 991:text-[12px] whitespace-pre-wrap break-all"
                    style={{ fontFamily: "var(--font-geist-mono), monospace", fontWeight: 400, lineHeight: "1.65" }}>
                    {ex.curl}
                  </pre>
                </div>
              </div>
              <div>
                <SectionLabel>Response</SectionLabel>
                <div className="rounded-lg bg-brand-alt p-4 overflow-x-auto" style={{ maxHeight: "280px" }}>
                  <pre className="text-[#8AB89A] text-[11px] 991:text-[12px] whitespace-pre-wrap"
                    style={{ fontFamily: "var(--font-geist-mono), monospace", fontWeight: 400, lineHeight: "1.65" }}>
                    {ex.response}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </FadeUp>
  );
}

export function GuideEndpoints() {
  return (
    <section>
      <h2 className="mb-8 text-brand text-[18px] 991:text-[22px]"
        style={{ fontFamily: "var(--font-stack-sans-headline)", fontWeight: 400, letterSpacing: "-0.4px" }}>
        Endpoints
      </h2>
      {endpoints.map((ep) => (
        <EndpointCard key={ep.id} endpoint={ep} />
      ))}
    </section>
  );
}
