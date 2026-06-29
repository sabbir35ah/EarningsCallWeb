"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function BlogSidebar({ toc }) {
  const [activeId, setActiveId] = useState(toc[0]?.id ?? "");

  useEffect(() => {
    const handleScroll = () => {
      const headingEls = toc
        .map(({ id }) => document.getElementById(id))
        .filter(Boolean);

      let current = headingEls[0]?.id ?? "";
      for (const el of headingEls) {
        if (el.getBoundingClientRect().top <= 130) {
          current = el.id;
        }
      }
      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [toc]);

  return (
    <aside className="hidden lg:block w-[220px] shrink-0 sticky top-40 self-start">
      <div className="rounded-xl overflow-hidden">
        {/* Label */}
        <div className="px-4 pt-4 pb-2">
          <p
            className="font-headline font-semibold text-[11px] uppercase tracking-widest"
            style={{ color: "#012d12" }}
          >
            On this page
          </p>
        </div>

        {/* TOC nav */}
        <nav className="px-3 pb-3">
          {toc.map((item) => {
            const isActive = item.id === activeId;
            return (
              <div key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="flex items-center gap-2 rounded-lg px-2 py-1.5 font-headline text-[14px] font-medium transition-all duration-200 hover:bg-[#f2fdf6]"
                  style={{
                    color: isActive ? "#5eee97" : "#444",
                    paddingLeft: item.level === "h3" ? "20px" : "8px",
                    fontWeight: 400,
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0 transition-colors duration-200"
                    style={{
                      backgroundColor: isActive
                        ? "#5eee97"
                        : item.level === "h3"
                        ? "#ddd"
                        : "#4dec8c",
                    }}
                  />
                  {item.text}
                </a>
              </div>
            );
          })}
        </nav>

        {/* Divider */}
        <div className="mx-3 mb-1" style={{ borderTop: "1px solid #e8e8e8" }} />

        {/* CTA */}
        <div className="p-3">
          <Link
            href="/pricing"
            className="flex flex-col items-start gap-0.5 w-full rounded-lg px-4 py-3 font-headline font-semibold text-[13px] transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#4dec8c", color: "#012d12" }}
          >
            Start Free Trial →
            <span
              className="font-light text-[11px]"
              style={{ color: "rgba(1,45,18,0.65)" }}
            >
              No credit card required
            </span>
          </Link>
        </div>
      </div>
    </aside>
  );
}
