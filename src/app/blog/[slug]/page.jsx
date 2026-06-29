import LayoutWrapper from "@/components/shared/layout-wrapper";
import { Container } from "@/components/layout/container";
import { BlogSidebar } from "@/components/blog/blog-sidebar";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

// ─── POST DATA ────────────────────────────────────────────────────────────────

const POSTS = {
  "which-earnings-call-api-is-best-for-fintech": {
    title: "How to Choose the Right Earnings Call API for Your Fintech Product",
    author: "EarningsCall Editor",
    date: "May 11, 2026",
    readTime: "6",
    views: "800",
    bg: "linear-gradient(160deg, #081818 0%, #013820 50%, #025c30 100%)",
    featured: true,
    content: [
      {
        type: "intro",
        text: "If you're building a fintech product that touches earnings data — whether it's an AI research tool, a trading signal engine, or an investor platform — your choice of earnings call API is one of the most consequential infrastructure decisions you'll make early on. The problem? Every provider claims to be the best. In this guide, we cut through the noise.",
      },
      { type: "list-title", text: "What you'll learn:" },
      {
        type: "list",
        items: [
          "What to look for in an earnings call API",
          "How different fintech use cases map to different API capabilities",
          "A comparison of the top options on the market",
          "Why EarningsCall stands out for developer-first teams",
        ],
      },
      { type: "divider" },
      { type: "h2", text: "What Makes a Good Earnings Call API?" },
      {
        type: "paragraph",
        text: "Not all earnings call APIs are created equal. Before you commit to a provider, there are a handful of dimensions that matter far more than price.",
      },
      { type: "h3", text: "1. Coverage and Completeness" },
      {
        type: "paragraph",
        text: "Does the API cover all publicly traded companies on major exchanges, or only the S&P 500? Does it include transcripts, audio, or both? Does it go back years, or only a few quarters? If you're building research tooling, historical depth is non-negotiable.",
      },
      { type: "h3", text: "2. Latency and Availability" },
      {
        type: "paragraph",
        text: "For trading signal engines, minutes matter. A transcript that arrives 4 hours after the call ends is useless for momentum strategies. Look for providers that publish data within 30 minutes of the call ending — ideally with a webhook or streaming option.",
      },
      { type: "h3", text: "3. Structured vs. Raw Data" },
      {
        type: "paragraph",
        text: "Raw transcript text is fine for NLP pipelines, but if you need speaker-labeled turns, timestamps, or Q&A separation, you'll want structured data. The difference between a clean JSON response and a blob of text can save your team weeks of parsing work.",
      },
      { type: "h3", text: "4. Developer Experience" },
      {
        type: "paragraph",
        text: "The best API in the world is useless if the documentation is unclear, the SDKs are broken, or the rate limits are unpredictable. Prioritize providers with official SDKs in your stack's language, clean reference docs, and a free tier that lets you actually test before you buy.",
      },
      { type: "divider" },
      { type: "h2", text: "Matching Your Use Case to the Right API" },
      {
        type: "paragraph",
        text: "Different fintech products need different things. Here's a quick reference:",
      },
      {
        type: "table",
        rows: [
          { scenario: "AI research assistant",    need: "Full transcripts, speaker labels, historical depth" },
          { scenario: "Trading signal engine",     need: "Low-latency delivery, webhooks, structured Q&A" },
          { scenario: "Investor platform",         need: "Audio + transcript combo, reliable uptime" },
          { scenario: "Portfolio monitoring tool", need: "Earnings calendar API + transcript access" },
          { scenario: "Compliance tooling",        need: "Long retention, exact timestamps, raw text" },
        ],
      },
      { type: "divider" },
      { type: "h2", text: "Why EarningsCall?" },
      {
        type: "paragraph",
        text: "EarningsCall was built specifically for developers who are tired of wrestling with legacy financial data providers. The API returns clean JSON with speaker-labeled transcript turns, supports TypeScript out of the box with an official client library, and delivers transcripts within minutes of the call ending.",
      },
      {
        type: "paragraph",
        text: "The free tier gives you real access — not a sandbox — so you can validate your integration before spending a dollar. And when you're ready to scale, pricing is transparent and usage-based.",
      },
      { type: "cta", label: "Start Free Trial →", sub: "No credit card required", href: "/pricing" },
    ],
  },
  "e2e-testing-with-jest-puppeteer": {
    title: "E2E testing with jest-puppeteer",
    author: "Zahid Hasan",
    date: "Jan 26, 2025",
    readTime: "20",
    views: "11.3K",
    bg: "linear-gradient(135deg, #e8e8e8 0%, #d0d0d0 100%)",
    featured: false,
    content: [
      {
        type: "intro",
        text: "End-to-end testing is one of the most valuable — and most underused — layers in a modern web application's test suite. In this guide we walk through setting up jest-puppeteer to write reliable, fast E2E tests for your Next.js or Node.js project.",
      },
      { type: "divider" },
      { type: "h2", text: "What is jest-puppeteer?" },
      {
        type: "paragraph",
        text: "jest-puppeteer is a Jest preset that gives you a global browser and page object powered by Puppeteer. It handles browser lifecycle management so you can focus on writing tests, not plumbing.",
      },
      { type: "h2", text: "Installation" },
      {
        type: "paragraph",
        text: "Install jest-puppeteer and puppeteer as dev dependencies, then add the preset to your jest.config.js. The setup gives you access to browser, page, and context globals inside every test file.",
      },
      { type: "h2", text: "Writing Your First Test" },
      {
        type: "paragraph",
        text: "With the preset in place, each test file automatically gets a pre-launched Chromium instance. You navigate to a URL, interact with the DOM using Puppeteer selectors, and assert outcomes using standard Jest matchers.",
      },
    ],
  },
  "earnings-call-typescript-announcement": {
    title: "🚀 Announcing the Official EarningsCall JavaScript Client with TypeScript Support!",
    author: "EarningsCall Editor",
    date: "Dec 16, 2024",
    readTime: "1",
    views: "12.1K",
    bg: "linear-gradient(135deg, #2450a0 0%, #3878c8 100%)",
    featured: false,
    content: [
      {
        type: "intro",
        text: "We're excited to announce the official EarningsCall JavaScript client library — fully typed with TypeScript, available on npm, and ready to use in any Node.js or browser environment.",
      },
      { type: "divider" },
      { type: "h2", text: "Getting Started" },
      {
        type: "paragraph",
        text: "Install the package from npm and import the client. Full TypeScript definitions ship out of the box — no separate @types package needed. The client supports both CommonJS and ESM imports.",
      },
      { type: "h2", text: "What's Included" },
      {
        type: "paragraph",
        text: "The client wraps every public endpoint — earnings calendar, transcripts, and company search — with strongly typed request and response shapes. Autocomplete works in VS Code and JetBrains IDEs without any extra configuration.",
      },
    ],
  },
  "language-test": {
    title: "Language Test",
    author: "Language Test",
    date: "Jul 7, 2024",
    readTime: "2",
    views: "8.6K",
    bg: "linear-gradient(135deg, #c8f0f0 0%, #9de0e0 100%)",
    featured: false,
    content: [
      { type: "intro", text: "A short test post to verify multilingual rendering across the platform." },
      {
        type: "paragraph",
        text: "This post is used internally to confirm that character encoding, right-to-left support, and font rendering all behave correctly across different locale settings.",
      },
    ],
  },
  "ai-blog": {
    title: "This is a ai blog",
    author: "Moon",
    date: "Jun 23, 2024",
    readTime: "1",
    views: "12.2K",
    bg: "linear-gradient(135deg, #282828 0%, #404040 100%)",
    featured: false,
    content: [
      {
        type: "intro",
        text: "An exploration of AI-generated content and what it means for the future of publishing.",
      },
      {
        type: "paragraph",
        text: "As large language models become more capable, the line between human-written and AI-assisted content continues to blur. This post explores what that means for readers, writers, and the platforms that host content.",
      },
    ],
  },
};

// ─── METADATA ─────────────────────────────────────────────────────────────────

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = POSTS[slug];
  if (!post) return { title: "Post Not Found | EarningsCall" };
  return {
    title: `${post.title} | EarningsCall Blog`,
    description: post.content[0]?.text ?? "",
  };
}

export function generateStaticParams() {
  return Object.keys(POSTS).map((slug) => ({ slug }));
}

// ─── HELPERS ──────────────────────────────────────────────────────────────────

function toId(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function getTOC(blocks) {
  return blocks
    .filter((b) => b.type === "h2" || b.type === "h3")
    .map((b) => ({ text: b.text, id: toId(b.text), level: b.type }));
}

// ─── CONTENT RENDERER ─────────────────────────────────────────────────────────

function RenderContent({ blocks }) {
  return (
    <div className="font-headline">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "intro":
            return (
              <p key={i} className="text-[16px] leading-relaxed text-[#1a1a1a] font-light mb-6">
                {block.text}
              </p>
            );
          case "paragraph":
            return (
              <p key={i} className="text-[15px] leading-relaxed text-[#444] font-light mb-5">
                {block.text}
              </p>
            );
          case "h2":
            return (
              <h2 key={i} id={toId(block.text)} className="text-[20px] font-semibold text-brand mt-10 mb-3 leading-snug scroll-mt-24">
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} id={toId(block.text)} className="text-[16px] font-semibold text-brand mt-7 mb-2 leading-snug scroll-mt-24">
                {block.text}
              </h3>
            );
          case "list-title":
            return (
              <p key={i} className="text-[14px] font-medium text-[#333] mb-2">
                {block.text}
              </p>
            );
          case "list":
            return (
              <ul key={i} className="mb-6 pl-5 space-y-1.5">
                {block.items.map((item, j) => (
                  <li key={j} className="text-[14px] leading-relaxed text-[#444] font-light list-disc">
                    {item}
                  </li>
                ))}
              </ul>
            );
          case "divider":
            return <hr key={i} className="my-8" style={{ borderColor: "#e8e8e8" }} />;
          case "table":
            return (
              <div key={i} className="overflow-x-auto mb-8 rounded-xl" style={{ border: "1px solid #e4e4e4" }}>
                <table className="w-full text-[13px] border-collapse">
                  <thead>
                    <tr style={{ backgroundColor: "rgba(77,236,140,0.1)", borderBottom: "1px solid #dceee3" }}>
                      <th className="text-left px-4 py-3 font-semibold text-brand">If you&apos;re building…</th>
                      <th className="text-left px-4 py-3 font-semibold text-brand">You need…</th>
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, j) => (
                      <tr key={j} style={{ borderBottom: j < block.rows.length - 1 ? "1px solid #f2f2f2" : "none" }} className="hover:bg-[#f7fdf9]">
                        <td className="px-4 py-3 font-medium text-[#222]">{row.scenario}</td>
                        <td className="px-4 py-3 text-muted font-light">{row.need}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "cta":
            return null;
          default:
            return null;
        }
      })}
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = POSTS[slug];
  if (!post) notFound();

  const heroTextColor = post.featured ? "#fff" : "#012d12";
  const heroMetaColor = post.featured ? "rgba(255,255,255,0.65)" : "rgba(1,45,18,0.6)";
  const dotColor = post.featured ? "rgba(255,255,255,0.3)" : "rgba(1,45,18,0.25)";

  return (
    <LayoutWrapper>

      {/* ── Hero ── */}
      <div
        className="w-full relative overflow-hidden"
        style={{
          paddingTop: "var(--navbar-height)",
          minHeight: "300px",
        }}
      >
        {/* Background image */}
        <Image
          src="/images/blog.webp"
          alt={post.title}
          fill
          style={{ objectFit: "cover" }}
          priority
        />

        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.72) 100%)", zIndex: 1 }}
        />

        <Container className="max-w-[860px]!">
        <div className="relative py-12 sm:py-16" style={{ zIndex: 10, position: "relative" }}>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 font-headline text-[12px] font-medium mb-6 transition-opacity hover:opacity-70"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            ← Back to Blog
          </Link>

          <h1
            className="font-headline font-extrabold text-[22px] sm:text-[28px] lg:text-[32px] leading-snug mb-5 max-w-[700px]"
            style={{ color: "#fff", textShadow: "none", fontWeight: 800 }}
          >
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5" style={{ color: "rgba(255,255,255,0.75)" }}>
            <span className="font-headline text-[13px] font-medium">{post.author}</span>
            <span style={{ color: "rgba(255,255,255,0.4)" }}>·</span>
            <span className="font-headline text-[12px] font-light">{post.date}</span>
            <span style={{ color: "rgba(255,255,255,0.4)" }}>·</span>
            <span className="font-headline text-[12px] font-light">{post.readTime} min read</span>
            <span style={{ color: "rgba(255,255,255,0.4)" }}>·</span>
            <span className="font-headline text-[12px] font-light">👁 {post.views} views</span>
          </div>
        </div>
        </Container>
      </div>

      {/* ── Article body ── */}
      <section className="bg-white pt-10 pb-16 sm:pb-20">
        <Container className="max-w-[1120px]!">
          <div className="flex gap-8 xl:gap-12 items-start">

            {/* Sidebar */}
            <BlogSidebar toc={getTOC(post.content)} />

            {/* Content */}
            <div className="flex-1 min-w-0">
              <RenderContent blocks={post.content} />
            </div>

          </div>
        </Container>
      </section>

    </LayoutWrapper>
  );
}
