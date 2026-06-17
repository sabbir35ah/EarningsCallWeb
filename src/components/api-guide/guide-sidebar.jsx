"use client";

import { useEffect, useState } from "react";
import { sidebarNav } from "./constants";

export function GuideSidebar() {
  const [active, setActive] = useState("authentication");

  useEffect(() => {
    const ids = sidebarNav.flatMap((g) => g.links.map((l) => l.href.slice(1)));
    const observers = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <aside className="hidden lg:block">
      <div
        className="sticky py-14 pr-8"
        style={{ top: "var(--navbar-height)", maxHeight: "calc(100vh - var(--navbar-height))", overflowY: "auto" }}
      >
        <nav>
          {sidebarNav.map((group) => (
            <div key={group.group} className="mb-6">
              <p
                className="mb-2 text-[10px] uppercase tracking-widest text-brand/40"
                style={{ fontFamily: "var(--font-stack-sans-headline)", fontWeight: 400 }}
              >
                {group.group}
              </p>
              <ul className="flex flex-col gap-0.5">
                {group.links.map((link) => {
                  const id = link.href.slice(1);
                  const isActive = active === id;
                  return (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className={`flex items-center gap-2 rounded-md px-3 py-1.5 text-[13px] transition-colors ${
                          isActive
                            ? "bg-[#e8f5ee] text-brand-alt font-normal"
                            : "text-muted hover:text-brand hover:bg-[#f5f5f5]"
                        }`}
                        style={{ fontFamily: "var(--font-stack-sans-headline)", fontWeight: isActive ? 400 : 300 }}
                      >
                        {link.label}
                        {link.isNew && (
                          <span
                            className="rounded-full bg-accent px-1.5 py-0.5 text-brand text-[9px] leading-none"
                            style={{ fontFamily: "var(--font-stack-sans-headline)", fontWeight: 400 }}
                          >
                            New
                          </span>
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}
