"use client";

import { Container } from "@/components/layout/container";
import { GuideSidebar } from "./guide-sidebar";
import { AuthSdkSection } from "./auth-sdk-section";
import { GuideEndpoints } from "./guide-endpoints";
import { ContactSection } from "./contact-section";

export function GuideDocs() {
  return (
    <section className="bg-[#f2f2f3] border-t border-[#e8e8e8]">
      <Container>
        <div className="py-8">
          <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] lg:gap-10">
              <GuideSidebar />
              <main style={{ paddingBlock: "65px", minWidth: 0, overflow: "hidden" }}>
                <AuthSdkSection />
                <GuideEndpoints />
                <ContactSection />
              </main>
            </div>
        </div>
      </Container>
    </section>
  );
}
