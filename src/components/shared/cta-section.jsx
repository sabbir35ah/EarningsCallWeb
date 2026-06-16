"use client";

import { SlideIn } from "@/lib/motion";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT — dark green half */}
        <SlideIn
          direction="left"
          amount={30}
          className="flex flex-col items-end justify-center py-12 sm:py-16 lg:py-20 bg-brand"
        >
          <div className="w-full max-w-180 px-4 sm:px-6 lg:px-8">
            <h2 className="mb-4 text-headline text-white">
              Curious about our API solutions?
            </h2>
            <p className="mb-10 text-body text-white max-w-145.25">
              Built for developers and founders who turn earnings data into
              products, signals, and decisions.
            </p>
            <div>
              <Button variant="white" size="cta">
                Get in touch
              </Button>
            </div>
          </div>
        </SlideIn>

        {/* RIGHT — bright green half */}
        <SlideIn
          direction="right"
          amount={30}
          className="flex flex-col items-start justify-center py-12 sm:py-16 lg:py-20 bg-accent"
        >
          <div className="w-full max-w-180 pl-8 sm:pl-10 lg:pl-12 pr-4 sm:pr-6 lg:pr-8">
            <h2 className="mb-4 text-headline text-brand">
              Get API key and start building today.
            </h2>
            <p className="mb-10 text-body text-brand max-w-162">
              Get your API key and start building today. It&apos;s quick and
              simple to get going, so you can begin creating in no time.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                variant="brand"
                size="cta"
                className="w-auto h-[42px] px-4 text-[16px] 991:w-[213px] 991:h-[50px] 991:px-5 991:text-[18px] text-white [&_svg]:size-[18px] 991:[&_svg]:size-[22px]"
                style={{
                  fontFamily: "var(--font-stack-sans-headline)",
                  fontStyle: "normal",
                  fontWeight: 300,
                  lineHeight: "28px",
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
                  <path d="M18.5296 10.5293V11.4703H9.58972V10.5293H18.5296Z" fill="#013214" />
                  <path d="M18.8622 10.6671C19.046 10.8509 19.046 11.1487 18.8622 11.3325L14.157 16.0377L13.4917 15.3723L17.8642 10.9998L13.4917 6.62726L14.157 5.96191L18.8622 10.6671Z" fill="#013214" />
                  <path d="M4.8844 10.5293V11.4703H3.94336V10.5293H4.8844Z" fill="#013214" />
                  <path d="M6.7666 10.5293V11.4703H5.82556V10.5293H6.7666Z" fill="#013214" />
                  <path d="M8.64868 10.5293V11.4703H7.70764V10.5293H8.64868Z" fill="#013214" />
                </svg>
              </Button>
              <Button variant="brand-outline" size="cta">
                View API Doc
              </Button>
            </div>
          </div>
        </SlideIn>
      </div>
    </section>
  );
}
