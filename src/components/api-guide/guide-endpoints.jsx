"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { FadeUp } from "@/lib/motion";
import { endpoints } from "./constants";

const CopySvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 23.735 23.734" fill="currentColor">
    <path d="M23.092,2.16H8.623a2.8,2.8,0,0,0-2.793,2.8V5.83H4.953a2.8,2.8,0,0,0-2.793,2.8v14.46a2.8,2.8,0,0,0,2.793,2.8H19.422a2.805,2.805,0,0,0,2.8-2.8v-.867h.867a2.806,2.806,0,0,0,2.8-2.8V4.962a2.806,2.806,0,0,0-2.8-2.8ZM20.51,23.093a1.088,1.088,0,0,1-1.087,1.087H4.953a1.084,1.084,0,0,1-1.079-1.087V8.632A1.085,1.085,0,0,1,4.953,7.544H19.422A1.089,1.089,0,0,1,20.51,8.632v14.46Zm3.67-3.67a1.089,1.089,0,0,1-1.088,1.088h-.867V8.632a2.805,2.805,0,0,0-2.8-2.8H7.545V4.962A1.084,1.084,0,0,1,8.623,3.875H23.092A1.088,1.088,0,0,1,24.18,4.962Z" transform="translate(-2.16 -2.16)" />
  </svg>
);

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

function ExampleBlock({ ex }) {
  const [curlCopied, setCurlCopied] = useState(false);
  const [resCopied, setResCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);

  function copyCurl() {
    navigator.clipboard.writeText(ex.curl);
    setCurlCopied(true);
    setTimeout(() => setCurlCopied(false), 2000);
  }

  function copyRes() {
    navigator.clipboard.writeText(ex.response);
    setResCopied(true);
    setTimeout(() => setResCopied(false), 2000);
  }

  return (
    <div className="agd-example">
      <h4 className="agd-example-title">{ex.title}</h4>
      {ex.note && <p className="agd-example-note">{ex.note}</p>}

      <div className="agd-code-block">
        <div className="agd-code-header">
          <span className="agd-code-lang">cURL</span>
          <button className="agd-code-copy" onClick={copyCurl} title="Copy">
            {curlCopied ? <Check size={14} color="#2ed674" /> : <CopySvg />}
          </button>
        </div>
        <pre className="agd-code-pre">{ex.curl}</pre>
      </div>

      <h4 className="agd-example-title">Example Response</h4>
      <div className="agd-code-block agd-output-block">
        <div className="agd-code-header">
          <span className="agd-code-lang">JSON Response</span>
          <div className="agd-code-actions">
            <button className="agd-expand-btn" onClick={() => setExpanded(!expanded)}>
              {expanded ? "Collapse" : "Expand"}
            </button>
            <button className="agd-code-copy" onClick={copyRes} title="Copy">
              {resCopied ? <Check size={14} color="#2ed674" /> : <CopySvg />}
            </button>
          </div>
        </div>
        <pre className="agd-code-pre" style={{ maxHeight: expanded ? "none" : "320px", overflow: "auto" }}>
          {ex.response}
        </pre>
      </div>
    </div>
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
      <div className="rounded-xl border border-[#d7d7d7] bg-white p-6">
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

      {/* Returns + Status Codes */}
      <div className="mb-6 flex flex-col gap-4">
        <div>
          <SectionLabel>Returns</SectionLabel>
          <span className="inline-flex items-center rounded bg-[#e8f5ee] px-3 py-1 text-brand-alt text-[12px]"
            style={{ fontFamily: "var(--font-geist-mono), monospace", fontWeight: 400 }}>
            {endpoint.returns}
          </span>
        </div>
        <div className="agd-status-codes">
          <h4 className="agd-status-title">HTTP Response Status Codes</h4>
          <div className="agd-status-list">
            {endpoint.statusCodes.map((s) => (
              <div key={s.code} className={`agd-status-row ${s.ok ? "agd-status-ok" : "agd-status-err"}`}>
                <span className="agd-status-code">{s.code}</span>
                <span className="agd-status-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Examples */}
      <div className="flex flex-col gap-6">
        {endpoint.examples.map((ex, i) => (
          <ExampleBlock key={i} ex={ex} />
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
