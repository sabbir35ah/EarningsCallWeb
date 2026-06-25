import LayoutWrapper from "@/components/shared/layout-wrapper";
import { StaticHero } from "@/components/shared/static-hero";
import { Container } from "@/components/layout/container";

export const metadata = {
  title: "Terms of Use | EarningsCall",
  description: "Read the EarningsCall Terms of Use governing your access to the API and platform.",
};

const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    body: "By accessing or using the EarningsCall API, website, or any related services (collectively, the \"Service\"), you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use the Service.",
  },
  {
    title: "2. Description of Service",
    body: "EarningsCall provides programmatic access to earnings call transcripts, audio recordings, slide decks, and event calendar data for publicly traded companies. The Service is intended for lawful business, research, and personal use.",
  },
  {
    title: "3. Account Responsibilities",
    body: "You are responsible for maintaining the confidentiality of your API key and account credentials. You agree to notify us immediately of any unauthorized use of your account. EarningsCall, LLC is not liable for any loss resulting from unauthorized use of your credentials.",
  },
  {
    title: "4. Permitted Use",
    body: "You may use the Service only for lawful purposes and in accordance with these Terms. You agree not to use the Service to: (a) violate any applicable law or regulation; (b) infringe any intellectual property rights; (c) transmit any harmful, offensive, or disruptive content; or (d) interfere with or disrupt the integrity of the Service.",
  },
  {
    title: "5. Data Redistribution",
    body: "Redistribution of raw transcript data to third parties requires a separate redistribution license. Please contact sales@earningscall.biz for redistribution terms. Derived works, aggregates, and outputs from AI models trained on the data may be subject to separate conditions.",
  },
  {
    title: "6. Intellectual Property",
    body: "All content, trademarks, and data provided through the Service are the property of EarningsCall, LLC or its licensors. You are granted a limited, non-exclusive, non-transferable license to access and use the data solely as permitted by your subscription plan.",
  },
  {
    title: "7. Limitation of Liability",
    body: "To the maximum extent permitted by law, EarningsCall, LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising from your use of or inability to use the Service.",
  },
  {
    title: "8. Modifications",
    body: "We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated effective date. Continued use of the Service after changes constitutes acceptance of the revised Terms.",
  },
  {
    title: "9. Governing Law",
    body: "These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to conflict of law provisions.",
  },
  {
    title: "10. Contact",
    body: "If you have any questions about these Terms, please contact us at legal@earningscall.biz.",
  },
];

export default function TermsPage() {
  return (
    <LayoutWrapper>
      <StaticHero
        title="Terms of Use"
        subtitle="Please read these terms carefully before using the EarningsCall API or platform."
      />
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container className="max-w-[860px]!">
          <p className="font-headline font-light text-[13px] text-muted mb-10">
            Effective date: January 1, 2025
          </p>
          <div className="space-y-8">
            {SECTIONS.map((s) => (
              <div key={s.title}>
                <h2 className="font-headline text-lg font-semibold text-brand mb-2">{s.title}</h2>
                <p className="font-headline font-light leading-relaxed text-[15px] text-[#444]">{s.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </LayoutWrapper>
  );
}
