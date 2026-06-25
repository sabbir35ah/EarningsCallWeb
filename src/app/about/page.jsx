import LayoutWrapper from "@/components/shared/layout-wrapper";
import { StaticHero } from "@/components/shared/static-hero";
import { Container } from "@/components/layout/container";

export const metadata = {
  title: "About Us | EarningsCall",
  description: "Learn about EarningsCall — the earnings call transcripts API built for developers, analysts, and investors.",
};

export default function AboutPage() {
  return (
    <LayoutWrapper>
      <StaticHero
        title="About EarningsCall"
        subtitle="We make earnings call data accessible, structured, and scalable for every team."
      />
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container className="max-w-[860px]!">
          <div className="prose prose-lg max-w-none text-[#333] space-y-10">

            <div>
              <h2 className="font-headline text-2xl font-semibold text-brand mb-3">Our Mission</h2>
              <p className="font-headline font-light leading-relaxed text-[15px] text-[#444]">
                EarningsCall exists to give developers, financial analysts, and institutional investors clean, structured access to earnings call transcripts, audio recordings, slide decks, and event calendars — all through a single, reliable API.
              </p>
            </div>

            <div>
              <h2 className="font-headline text-2xl font-semibold text-brand mb-3">What We Provide</h2>
              <ul className="space-y-3 mt-4">
                {[
                  "Full earnings call transcripts for 9,000+ public companies",
                  "Audio files and slide decks for supported events",
                  "A real-time earnings call calendar with webhook notifications",
                  "Historical data going back 5+ years",
                  "SDKs for Python and JavaScript with clean JSON responses",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-accent" />
                    <span className="font-headline font-light text-[15px] text-[#444] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-headline text-2xl font-semibold text-brand mb-3">Who Uses EarningsCall</h2>
              <p className="font-headline font-light leading-relaxed text-[15px] text-[#444]">
                Our API is used by hedge funds, fintech startups, independent researchers, and enterprise data teams who need reliable, low-latency access to earnings intelligence. Whether you&apos;re building an AI research assistant, powering a financial dashboard, or automating your investment workflow — EarningsCall gives you the data layer you need.
              </p>
            </div>

            <div>
              <h2 className="font-headline text-2xl font-semibold text-brand mb-3">Get in Touch</h2>
              <p className="font-headline font-light leading-relaxed text-[15px] text-[#444]">
                Have questions or want to learn more about enterprise plans?{" "}
                <a href="/contact" className="text-brand font-medium underline underline-offset-2 hover:opacity-70 transition-opacity">
                  Contact our team
                </a>{" "}
                or email us directly at{" "}
                <a href="mailto:sales@earningscall.biz" className="text-brand font-medium underline underline-offset-2 hover:opacity-70 transition-opacity">
                  sales@earningscall.biz
                </a>.
              </p>
            </div>

          </div>
        </Container>
      </section>
    </LayoutWrapper>
  );
}
