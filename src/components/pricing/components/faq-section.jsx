"use client";

import { Container } from "@/components/layout/container";
import { FaqItem } from "./faq-item";

export function FaqSection({ faqs }) {
  return (
    <section className="bg-white py-10 sm:py-14 lg:py-16">
      <Container>
        <h2 className="mb-8 sm:mb-12 text-headline text-brand text-center">
          Frequently asked questions
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16">
          <div>
            {faqs.slice(0, 6).map((faq, i) => (
              <FaqItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
          <div>
            {faqs.slice(6).map((faq, i) => (
              <FaqItem key={i + 6} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
