"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { navLinks } from "@/data/navigation";
import { cn } from "@/lib/utils";
import { asset } from "@/lib/assets";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isPricing = pathname === "/pricing";

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "border-b border-white/10 bg-[#070d08]/90 backdrop-blur-xl"
          : isPricing
          ? ""
          : "bg-transparent"
      )}
      style={
        isPricing && !isScrolled
          ? {
              background:
                "linear-gradient(180deg, #023914 0%, #013214 58%, rgba(1,50,20,0.92) 100%)",
            }
          : {}
      }
    >
      <Container>
        <nav className="flex items-center justify-between" style={{ height: "68.25px" }}>
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={asset.logo("logo.svg")}
              alt="EarningsCall"
              width={199}
              height={45}
              priority
              unoptimized
              style={{ width: "clamp(130px, 20vw, 199px)", height: "auto" }}
            />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="flex items-center gap-1 rounded-md px-3 py-2"
                  style={{ color: "#FFF", fontFamily: "var(--font-stack-sans-headline), sans-serif", fontSize: "14px", fontStyle: "normal", fontWeight: 300, lineHeight: "20px" }}
                >
                  {link.label}
                  {link.hasDropdown && (
                    <ChevronDown className="h-3.5 w-3.5 opacity-60" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Buttons */}
          <div className="hidden items-center gap-2 md:flex">
            <Button
              variant="ghost"
              style={{ color: "#FFF", fontFamily: "var(--font-stack-sans-headline), sans-serif", fontSize: "14px", fontStyle: "normal", fontWeight: 300, lineHeight: "20px" }}
              className="hover:bg-white/5"
            >
              Login
            </Button>
            <Button
              className="bg-[#68ef9d] hover:bg-[#68ef9d]"
              style={{ display: "inline-flex", height: "clamp(36px, 4vw, 45px)", padding: "0 clamp(12px, 2vw, 20px)", alignItems: "center", gap: "6px", color: "#012D12", fontFamily: "var(--font-stack-sans-headline), sans-serif", fontSize: "clamp(14px, 1.5vw, 18px)", fontStyle: "normal", fontWeight: 300, lineHeight: "28px", textAlign: "center" }}
            >
              Get API Key
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="flex h-9 w-9 items-center justify-center rounded-md text-gray-300 hover:bg-white/5 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/10 bg-[#070d08]/95 backdrop-blur-xl md:hidden"
          >
            <Container className="py-4">
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-1 rounded-md px-3 py-2.5 text-sm text-gray-300 hover:bg-white/5 hover:text-white"
                    >
                      {link.label}
                      {link.hasDropdown && (
                        <ChevronDown className="h-3.5 w-3.5 opacity-60" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-col gap-2 border-t border-white/10 pt-4">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-gray-300 hover:bg-white/5 hover:text-white"
                >
                  Login
                </Button>
                <Button className="w-full bg-[#68ef9d] font-semibold text-black hover:bg-[#68ef9d]">
                  Get API Key
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
