import LayoutWrapper from "@/components/shared/layout-wrapper";
import { GuideHero } from "@/components/api-guide/guide-hero";
import { GuideDocs } from "@/components/api-guide/guide-docs";
import { CtaSection } from "@/components/shared/cta-section";

export const metadata = {
  title: "API Guide",
  description:
    "Full API documentation. Programmatic access to earnings call transcripts, audio files, and calendars for 9,000+ public companies.",
};

export default function ApiGuidePage() {
  return (
    <LayoutWrapper>
      <div style={{ height: "var(--navbar-height)", background: "rgb(0, 43, 20)" }} />
      <GuideHero />
      <GuideDocs />
      <CtaSection />
    </LayoutWrapper>
  );
}
