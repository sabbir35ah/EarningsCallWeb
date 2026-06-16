import LayoutWrapper from "@/components/shared/layout-wrapper";
import { ApiHeroSection } from "@/components/api-details/api-hero-section";
import { WhyChooseSection } from "@/components/api-details/why-choose-section";
import { EndpointsSection } from "@/components/api-details/endpoints-section";
import { ComingNextSection } from "@/components/api-details/coming-next-section";
import { TestimonialsSection } from "@/components/shared/testimonials-section";
import { TrustedBySection } from "@/components/shared/trusted-by-section";
import { CtaSection } from "@/components/shared/cta-section";

export const metadata = {
  title: "API Details",
  description:
    "REST API with JSON responses. Transcripts, audio, and calendars for 9,000+ public companies.",
};

export default function ApiDetailsPage() {
  return (
    <LayoutWrapper>
      <div style={{ height: "var(--navbar-height)" }} />
      <ApiHeroSection />
      <WhyChooseSection />
      <EndpointsSection />
      <ComingNextSection />
      <TestimonialsSection />
      <TrustedBySection />
      <CtaSection />
    </LayoutWrapper>
  );
}
