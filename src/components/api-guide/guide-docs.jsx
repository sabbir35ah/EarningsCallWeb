"use client";

import { Container } from "@/components/layout/container";
import { GuideSidebar } from "./guide-sidebar";
import { AuthSdkSection } from "./auth-sdk-section";
import { GuideEndpoints } from "./guide-endpoints";

export function GuideDocs() {
  return (
    <section className="bg-white border-t border-[#e8e8e8]">
      <Container>
        <div className="py-8">
          <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr]">
              <GuideSidebar />
              <main style={{ paddingBlock: "65px" }}>
                <AuthSdkSection />
                <GuideEndpoints />
                <div id="contact" className="scroll-mt-36 mt-10 rounded-xl border border-[#d7d7d7] bg-[#fafafa] p-6">
                  <h2 className="mb-2 text-brand text-[18px]"
                    style={{ fontFamily: "var(--font-stack-sans-headline)", fontWeight: 400 }}>
                    Contact Us
                  </h2>
                  <p className="text-muted text-[13px]"
                    style={{ fontFamily: "var(--font-stack-sans-headline)", fontWeight: 300, lineHeight: "22px" }}>
                    Interested in full API access? Email us at{" "}
                    <a href="mailto:sales@earningscall.biz" className="text-brand-alt hover:opacity-70 transition-opacity">
                      sales@earningscall.biz
                    </a>
                    {" "}or visit our{" "}
                    <a href="/pricing" className="text-brand-alt hover:opacity-70 transition-opacity">
                      pricing page
                    </a>
                    {" "}to get started.
                  </p>
                </div>
              </main>
            </div>
        </div>
      </Container>
    </section>
  );
}
