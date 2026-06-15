"use client";

import { SlideIn } from "@/lib/motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
              <Button variant="brand" size="cta" className="[&_svg]:size-5">
                Test Drive Our API <ArrowRight />
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
