import { HeroSection } from "@/components/sections/hero-section";
import { LogoCloudSection } from "@/components/sections/logo-cloud-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { CalendarSection } from "@/components/sections/calendar-section";
import { BenefitsSection } from "@/components/sections/benefits-section";
import { UseCasesSection } from "@/components/sections/use-cases-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { TrustedBySection } from "@/components/sections/trusted-by-section";
import { CtaSection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <LogoCloudSection />
      <FeaturesSection />
      <CalendarSection />
      <BenefitsSection />
      <UseCasesSection />
      <TestimonialsSection />
      <TrustedBySection />
      <CtaSection />
    </>
  );
}
