import { testimonials } from "@/data/content";
import { Container } from "../layout/container";
import { TestimonialCard } from "./testimonial-card";

export function TestimonialsSection() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-24">
      <Container>
        {/* Header */}
        <div className="mb-14 text-center">
          <h2 className="mb-4 text-headline text-brand text-center">
            What our beloved users say
          </h2>
          <p className="text-body text-brand text-center">
            Real workflows from real users — developers, analysts, and founders
            building with the API every day.
          </p>
        </div>

        {/* Mobile: horizontal snap slider | Desktop: 3-col grid */}
        <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-3 scrollbar-hide">
          {testimonials.map((t, i) => (
            <div key={t.id} className="shrink-0 w-[85vw] sm:w-auto snap-start">
              <TestimonialCard testimonial={t} index={i} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
