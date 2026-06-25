import LayoutWrapper from "@/components/shared/layout-wrapper";
import { StaticHero } from "@/components/shared/static-hero";
import { Container } from "@/components/layout/container";

export const metadata = {
  title: "Privacy Policy | EarningsCall",
  description: "Learn how EarningsCall collects, uses, and protects your personal information.",
};

const SECTIONS = [
  {
    title: "1. Information We Collect",
    body: "We collect information you provide directly, such as your name, email address, company name, and payment details when you register for an account. We also automatically collect usage data including API request logs, IP addresses, browser type, and pages visited on our website.",
  },
  {
    title: "2. How We Use Your Information",
    body: "We use your information to: (a) provide and maintain the Service; (b) process payments and manage your subscription; (c) send transactional emails and service updates; (d) monitor and improve API performance; and (e) comply with legal obligations.",
  },
  {
    title: "3. Cookies and Tracking",
    body: "We use cookies and similar tracking technologies to enhance your experience on our website. You may disable cookies through your browser settings, though this may affect certain functionality. We do not sell your personal data to third parties.",
  },
  {
    title: "4. Data Sharing",
    body: "We do not sell, trade, or rent your personal information. We may share your data with trusted third-party service providers (such as payment processors and cloud hosting providers) solely to operate the Service. All third parties are bound by confidentiality obligations.",
  },
  {
    title: "5. Data Retention",
    body: "We retain your personal information for as long as your account is active or as needed to provide the Service. API request logs are retained for up to 90 days. You may request deletion of your account and associated data at any time by contacting privacy@earningscall.biz.",
  },
  {
    title: "6. Security",
    body: "We implement industry-standard security measures including TLS encryption, access controls, and regular security audits to protect your data. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.",
  },
  {
    title: "7. Your Rights",
    body: "Depending on your location, you may have rights to access, correct, delete, or restrict processing of your personal data. To exercise these rights, please contact us at privacy@earningscall.biz. We will respond to all requests within 30 days.",
  },
  {
    title: "8. Children's Privacy",
    body: "The Service is not directed to children under 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us immediately.",
  },
  {
    title: "9. Changes to This Policy",
    body: "We may update this Privacy Policy from time to time. We will notify you of material changes by email or by posting a notice on our website. Continued use of the Service after changes take effect constitutes acceptance of the revised policy.",
  },
  {
    title: "10. Contact Us",
    body: "If you have questions about this Privacy Policy or how we handle your data, please contact us at privacy@earningscall.biz or through our Contact page.",
  },
];

export default function PrivacyPage() {
  return (
    <LayoutWrapper>
      <StaticHero
        title="Privacy Policy"
        subtitle="Your privacy matters to us. Here's how we collect, use, and protect your information."
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
