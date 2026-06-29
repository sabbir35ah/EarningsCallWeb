import LayoutWrapper from "@/components/shared/layout-wrapper";
import { StaticHero } from "@/components/shared/static-hero";
import { Container } from "@/components/layout/container";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Blog & Insights | EarningsCall",
  description: "Developer guides, API announcements, and market insights from the EarningsCall team.",
};

// ─── DATA ─────────────────────────────────────────────────────────────────────

const FEATURED = {
  slug: "which-earnings-call-api-is-best-for-fintech",
  title: "How to Choose the Right Earnings Call API for Your Fintech Product",
  excerpt:
    "If you're building a fintech product that touches earnings data — whether it's an AI research tool, a trading signal engine, or an investor platform — your choice of earnings call API is one of the most consequential infrastructure decisions you'll make early on. The problem? Every…",
  author: "EarningsCall Editor",
  date: "May 11, 2026",
  readTime: "6",
};

const POSTS = [
  {
    slug: "e2e-testing-with-jest-puppeteer",
    title: "E2E testing with jest-puppeteer",
    author: "Zahid Hasan",
    date: "Jan 26, 2025",
    readTime: "20",
    views: "11.3K",
  },
  {
    slug: "earnings-call-typescript-announcement",
    title: "🚀 Announcing the Official EarningsCall JavaScript Client with TypeScript Support!",
    author: "EarningsCall Editor",
    date: "Dec 16, 2024",
    readTime: "1",
    views: "12.1K",
  },
  {
    slug: "language-test",
    title: "Language Test",
    author: "Language Test",
    date: "Jul 7, 2024",
    readTime: "2",
    views: "8.6K",
  },
  {
    slug: "ai-blog",
    title: "This is a ai blog",
    author: "Moon",
    date: "Jun 23, 2024",
    readTime: "1",
    views: "12.2K",
  },
];

const TOTAL = 1 + POSTS.length;

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function BlogPage() {
  return (
    <LayoutWrapper>
      <StaticHero
        title="Blog & Insights"
        subtitle="Developer guides, API announcements, and market insights from the EarningsCall team."
      />

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container>

          {/* ── Section header ── */}
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <h2 className="font-headline font-semibold text-brand text-[18px] sm:text-[22px]">All Articles</h2>
            <span
              className="font-headline text-[11px] sm:text-[12px] font-medium px-2.5 py-0.5 rounded-full"
              style={{ backgroundColor: "rgba(77,236,140,0.2)", color: "#014a1e" }}
            >
              {TOTAL} posts
            </span>
          </div>

          {/* ── Featured card ── */}
          <Link
            href={`/blog/${FEATURED.slug}`}
            className="block group mb-6 sm:mb-8 transition-transform duration-300 hover:-translate-y-1.5"
          >
            <div
              className="relative w-full overflow-hidden rounded-xl sm:rounded-2xl min-h-[360px] sm:min-h-[480px] lg:min-h-[580px]"
              style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.12)" }}
            >
              {/* Background image */}
              <Image
                src="/images/blog.webp"
                alt="Featured post"
                fill
                className="transition-transform duration-700 ease-in-out group-hover:scale-105"
                style={{ objectFit: "cover" }}
                priority
              />

              {/* Overlay gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.55) 45%, transparent 100%)",
                  zIndex: 1,
                }}
              />

              {/* Content overlay */}
              <div
                className="absolute inset-x-0 bottom-0 px-5 sm:px-10 lg:px-20 pb-8 sm:pb-14 lg:pb-20 pt-6"
                style={{ zIndex: 2 }}
              >
                <span
                  className="inline-block font-headline text-[10px] sm:text-[11px] font-semibold px-2.5 py-0.5 rounded mb-2 sm:mb-3"
                  style={{ backgroundColor: "#4dec8c", color: "#012d12" }}
                >
                  ✦ Featured
                </span>
                <h2
                  className="font-headline font-semibold text-[18px] sm:text-[22px] lg:text-[26px] mb-2 sm:mb-3 max-w-[680px]"
                  style={{ color: "#fff", lineHeight: 1.5 }}
                >
                  {FEATURED.title}
                </h2>
                <p
                  className="font-headline font-light text-[12px] sm:text-[13px] mb-3 sm:mb-4 max-w-[580px] hidden sm:block"
                  style={{ color: "#fff", lineHeight: 1.8 }}
                >
                  {FEATURED.excerpt}
                </p>
                <div
                  className="flex flex-wrap items-center gap-1.5 sm:gap-2 font-headline font-light text-[11px] sm:text-[12px] mb-3 sm:mb-4"
                  style={{ color: "#fff" }}
                >
                  <span>{FEATURED.author}</span>
                  <span style={{ color: "rgba(255,255,255,0.5)" }}>·</span>
                  <span>{FEATURED.date}</span>
                  <span style={{ color: "rgba(255,255,255,0.5)" }}>·</span>
                  <span>{FEATURED.readTime} min read</span>
                </div>
                <span
                  className="inline-flex items-center gap-2 font-headline font-semibold text-[12px] sm:text-[13px] px-4 sm:px-5 py-1.5 sm:py-2 rounded-lg transition-opacity hover:opacity-85"
                  style={{ backgroundColor: "#fff", color: "#000" }}
                >
                  Read more
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 7h12M8 2l5 5-5 5" stroke="#000" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>

          {/* ── Regular posts grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-10">
            {POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="flex flex-col group overflow-hidden rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_32px_rgba(0,0,0,0.13)]"
                style={{
                  backgroundColor: "#fff",
                  border: "1px solid #e8e8e8",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                }}
              >
                {/* Image */}
                <div className="relative w-full shrink-0 overflow-hidden h-[220px] sm:h-[260px] lg:h-[320px]">
                  <Image
                    src="/images/blog.webp"
                    alt={post.title}
                    fill
                    className="transition-transform duration-700 ease-in-out group-hover:scale-110"
                    style={{ objectFit: "cover" }}
                  />
                </div>

                {/* Detail content */}
                <div className="px-4 sm:px-5 pt-4 pb-2 flex flex-col gap-1.5 flex-1">
                  <span
                    className="font-headline text-[11px] sm:text-[12px] font-medium"
                    style={{ color: "#4dec8c", filter: "brightness(0.75)" }}
                  >
                    {post.author}
                  </span>
                  <h4
                    className="font-headline"
                    style={{ color: "#000", fontSize: "15px", fontWeight: 700, lineHeight: 1.4, marginBottom: "8px" }}
                  >
                    {post.title}
                  </h4>
                </div>

                {/* Bottom block */}
                <div
                  className="flex items-center justify-between px-4 sm:px-5 py-3 mt-auto"
                  style={{ borderTop: "1px solid #f2f2f2" }}
                >
                  <div className="flex items-center gap-2 sm:gap-3 font-headline font-light text-muted text-[11px]">
                    <span>{post.date}</span>
                    <span className="text-[#ddd]">·</span>
                    <span style={{ background: "#1dbf73", borderRadius: "100px", color: "#fff", fontSize: "11px", fontWeight: 400, padding: "2px 8px", whiteSpace: "nowrap" }}>
                      {post.readTime} min read
                    </span>
                    <span className="text-[#ddd] hidden sm:inline">·</span>
                    <span className="hidden sm:inline">👁 {post.views}</span>
                  </div>
                  <span style={{ color: "#1dbf73", fontSize: "12.5px", fontWeight: 700, textDecoration: "none", transition: "color .2s ease", whiteSpace: "nowrap" }}>
                    Read more →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* ── Load More ── */}
          <div className="flex justify-center">
            <button
              type="button"
              className="font-headline font-medium text-[13px] sm:text-[14px] text-brand rounded-lg px-6 sm:px-8 py-2.5 transition-colors hover:bg-[#f0faf4]"
              style={{ border: "1.5px solid #4dec8c" }}
            >
              Load More
            </button>
          </div>

        </Container>
      </section>
    </LayoutWrapper>
  );
}
