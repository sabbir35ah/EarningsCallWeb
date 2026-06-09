import { Container } from "@/components/layout/container";
import { TestimonialCard } from "./testimonial-card";
import { testimonials } from "@/data/content";

export function TestimonialsSection() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-24">
      <Container>
        {/* Header */}
        <div className="mb-14 text-center">
          <h2
            className="mb-4"
            style={{
              color: "#012D12",
              textAlign: "center",
              fontFamily: "var(--font-stack-sans-headline), sans-serif",
              fontSize: "clamp(16px, 4vw, 40px)",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "clamp(30px, 5vw, 48px)",
              letterSpacing: "-0.8px",
            }}
          >
            What our beloved users say
          </h2>
          <p
            style={{
              color: "#012D12",
              textAlign: "center",
              fontFamily: "var(--font-stack-sans-headline), sans-serif",
              fontSize: "clamp(12px, 2vw, 16px)",
              fontStyle: "normal",
              fontWeight: 300,
              lineHeight: "24px",
            }}
          >
            Real workflows from real users — developers, analysts, and founders
            building with the API every day.
          </p>
        </div>

        {/* Mobile: horizontal snap slider | Desktop: 3-col grid */}
        <div
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-3"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
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
