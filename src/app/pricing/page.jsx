import { FaqSection } from "@/components/pricing/components/faq-section";
import { PlansSection } from "@/components/pricing/components/plans-section";
import { PricingHero } from "@/components/pricing/components/pricing-hero";
import {
  faqs,
  refundConditions,
} from "@/components/pricing/constants/constants";
import { RefundSection } from "@/components/pricing/components/refund-section";
import { CtaSection } from "@/components/shared/cta-section";
import LayoutWrapper from "@/components/shared/layout-wrapper";
import { TestimonialsSection } from "@/components/shared/testimonials-section";
import { TrustedBySection } from "@/components/shared/trusted-by-section";

export default function PricingPage() {
  return (
    <LayoutWrapper>
      <div>
        <PricingHero />
        <PlansSection />
        <RefundSection refundConditions={refundConditions} />
        <FaqSection faqs={faqs} />
        <TestimonialsSection />
        <TrustedBySection />
        <CtaSection />
      </div>
    </LayoutWrapper>
  );
}
