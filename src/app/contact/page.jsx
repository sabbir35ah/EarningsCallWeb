import LayoutWrapper from "@/components/shared/layout-wrapper";
import { StaticHero } from "@/components/shared/static-hero";
import { Container } from "@/components/layout/container";
import { ContactSection } from "@/components/api-guide/contact-section";

export const metadata = {
  title: "Contact Us | EarningsCall",
  description: "Get in touch with the EarningsCall team for API access, enterprise plans, or support.",
};

const INFO_ITEMS = [
  { label: "Sales", value: "sales@earningscall.biz", href: "mailto:sales@earningscall.biz" },
  { label: "Support", value: "support@earningscall.biz", href: "mailto:support@earningscall.biz" },
  { label: "Privacy", value: "privacy@earningscall.biz", href: "mailto:privacy@earningscall.biz" },
];

export default function ContactPage() {
  return (
    <LayoutWrapper>
      <StaticHero
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out about API access, enterprise plans, or anything else."
      />
      <section className="bg-surface py-16 sm:py-20 lg:py-24">
        <Container className="max-w-[960px]!">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16">

            {/* Left: contact info */}
            <div className="flex flex-col gap-6">
              <div>
                <h2 className="font-headline text-xl font-semibold text-brand mb-1">Get in touch</h2>
                <p className="font-headline font-light text-[14px] text-muted leading-relaxed">
                  Our team typically responds within one business day.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                {INFO_ITEMS.map((item) => (
                  <div key={item.label}>
                    <p className="font-headline text-[11px] uppercase tracking-widest text-brand/40 mb-0.5">{item.label}</p>
                    <a
                      href={item.href}
                      className="font-headline font-light text-[14px] text-brand hover:opacity-70 transition-opacity"
                    >
                      {item.value}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: form */}
            <ContactSection />

          </div>
        </Container>
      </section>
    </LayoutWrapper>
  );
}
