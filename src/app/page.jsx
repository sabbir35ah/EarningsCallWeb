import { HeroSection } from "@/components/home/hero-section";
import { LogoCloudSection } from "@/components/home/logo-cloud-section";
import { FeaturesSection } from "@/components/home/features-section";
import { CalendarSection } from "@/components/home/calendar-section";
import { BenefitsSection } from "@/components/home/benefits-section";
import { UseCasesSection } from "@/components/home/use-cases-section";
import { TestimonialsSection } from "@/components/shared/testimonials-section";
import { TrustedBySection } from "@/components/shared/trusted-by-section";
import { CtaSection } from "@/components/shared/cta-section";
import LayoutWrapper from "@/components/shared/layout-wrapper";

export default function HomePage() {
  return (
    <>
      <LayoutWrapper>
        <HeroSection />
        <LogoCloudSection />
        <FeaturesSection />
        <CalendarSection />
        <BenefitsSection />
        <UseCasesSection />
        <TestimonialsSection />
        <TrustedBySection />
        <CtaSection />
      </LayoutWrapper>
    </>
  );
}
