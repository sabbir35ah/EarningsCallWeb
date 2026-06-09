"use client";

import { motion } from "framer-motion";

export function CtaSection() {
  return (
    <section className="overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT — dark green half */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-end justify-center py-12 sm:py-16 lg:py-20"
          style={{ backgroundColor: "#012d12" }}
        >
          <div className="w-full max-w-[720px] px-4 sm:px-6 lg:px-8">
            <h2
              className="mb-4"
              style={{
                color: "#FFF",
                fontFamily: "var(--font-stack-sans-headline), sans-serif",
                fontSize: "clamp(16px, 4vw, 40px)",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "clamp(30px, 5vw, 48px)",
                letterSpacing: "-0.8px",
              }}
            >
              Curious about our API solutions?
            </h2>
            <p
              className="mb-10"
              style={{
                color: "#FFF",
                fontFamily: "var(--font-stack-sans-headline), sans-serif",
                fontSize: "clamp(12px, 2vw, 16px)",
                fontStyle: "normal",
                fontWeight: 300,
                lineHeight: "24px",
                maxWidth: "581px",
              }}
            >
              Built for developers and founders who turn earnings data into
              products, signals, and decisions.
            </p>
            <div>
              <button
                className="rounded-md transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: "#ffffff",
                  display: "inline-flex",
                  height: "clamp(40px, 5vw, 50px)",
                  padding: "0 clamp(14px, 2vw, 20px)",
                  alignItems: "center",
                  gap: "6px",
                  color: "#012D12",
                  fontFamily: "var(--font-stack-sans-headline), sans-serif",
                  fontSize: "clamp(14px, 2vw, 18px)",
                  fontStyle: "normal",
                  fontWeight: 300,
                  lineHeight: "28px",
                  textAlign: "center",
                }}
              >
                Get in touch
              </button>
            </div>
          </div>
        </motion.div>

        {/* RIGHT — bright green half */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-start justify-center py-12 sm:py-16 lg:py-20"
          style={{ backgroundColor: "#4dec8c" }}
        >
          <div className="w-full max-w-[720px] pl-8 sm:pl-10 lg:pl-12 pr-4 sm:pr-6 lg:pr-8">
            <h2
              className="mb-4"
              style={{
                color: "#012d12",
                fontFamily: "var(--font-stack-sans-headline), sans-serif",
                fontSize: "clamp(16px, 4vw, 40px)",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "clamp(30px, 5vw, 48px)",
                letterSpacing: "-0.8px",
              }}
            >
              Get API key and start building today.
            </h2>
            <p
              className="mb-10"
              style={{
                color: "#012D12",
                fontFamily: "var(--font-stack-sans-headline), sans-serif",
                fontSize: "clamp(12px, 2vw, 16px)",
                fontStyle: "normal",
                fontWeight: 300,
                lineHeight: "24px",
                maxWidth: "648px",
              }}
            >
              Get your API key and start building today. It&apos;s quick and
              simple to get going, so you can begin creating in no time.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                className="transition-opacity hover:opacity-90 text-white"
                style={{
                  display: "inline-flex",
                  height: "clamp(40px, 5vw, 50px)",
                  padding: "0 clamp(14px, 2vw, 20px)",
                  alignItems: "center",
                  gap: "6px",
                  borderRadius: "4px",
                  backgroundColor: "#0E4525",
                  fontFamily: "var(--font-stack-sans-headline), sans-serif",
                  fontSize: "clamp(13px, 2vw, 18px)",
                  fontWeight: 300,
                }}
              >
                Test Drive Our API
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <rect width="22" height="22" rx="2" fill="#1DBF73" />
                  <path
                    d="M18.5296 10.5293V11.4703H9.58972V10.5293H18.5296Z"
                    fill="#013214"
                  />
                  <path
                    d="M18.8622 10.6671C19.046 10.8509 19.046 11.1487 18.8622 11.3325L14.157 16.0377L13.4917 15.3723L17.8642 10.9998L13.4917 6.62726L14.157 5.96191L18.8622 10.6671Z"
                    fill="#013214"
                  />
                  <path
                    d="M4.8844 10.5293V11.4703H3.94336V10.5293H4.8844Z"
                    fill="#013214"
                  />
                  <path
                    d="M6.7666 10.5293V11.4703H5.82556V10.5293H6.7666Z"
                    fill="#013214"
                  />
                  <path
                    d="M8.64868 10.5293V11.4703H7.70764V10.5293H8.64868Z"
                    fill="#013214"
                  />
                </svg>
              </button>
              <button
                className="rounded-md transition-opacity hover:opacity-80"
                style={{
                  border: "1px solid #012d12",
                  backgroundColor: "transparent",
                  display: "inline-flex",
                  height: "clamp(40px, 5vw, 50px)",
                  padding: "0 clamp(14px, 2vw, 20px)",
                  alignItems: "center",
                  gap: "6px",
                  color: "#012D12",
                  fontFamily: "var(--font-stack-sans-headline), sans-serif",
                  fontSize: "clamp(14px, 2vw, 18px)",
                  fontStyle: "normal",
                  fontWeight: 300,
                  lineHeight: "28px",
                  textAlign: "center",
                }}
              >
                View API Doc
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
