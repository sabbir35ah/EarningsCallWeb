"use client";

import { Button } from "@/components/ui/button";
import { navLinks } from "@/data/navigation";
import { asset } from "@/lib/assets";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Container } from "../layout/container";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileExpandedItem, setMobileExpandedItem] = useState(null);
  const pathname = usePathname();
  const isPricing = pathname === "/pricing";
  const isLogin = pathname === "/login";
  const isSolidPage = isPricing || isLogin;
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <header
      ref={navRef}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "border-b border-white/10 bg-[#070d08]/90 backdrop-blur-xl"
          : isSolidPage
            ? ""
            : "bg-transparent",
      )}
      style={
        isSolidPage && !isScrolled
          ? {
              background:
                "linear-gradient(180deg, #023914 0%, #013214 58%, rgba(1,50,20,0.92) 100%)",
            }
          : {}
      }
    >
      <Container>
        <nav
          className="flex items-center justify-between"
          style={{ height: "var(--navbar-height)" }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={asset.logo("logo.svg")}
              alt="EarningsCall"
              width={230}
              height={70}
              priority
              unoptimized
              style={{ width: "clamp(150px, 49vw, 250px)", height: "auto" }}
            />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.label} className="relative">
                {link.hasDropdown ? (
                  <>
                    <button
                      onClick={() =>
                        setOpenDropdown(openDropdown === link.label ? null : link.label)
                      }
                      className="flex items-center gap-1 rounded-md px-3 py-2 text-body-sm text-white hover:bg-white/5 transition-colors"
                    >
                      {link.label}
                      <ChevronDown
                        className={cn(
                          "h-3.5 w-3.5 opacity-60 transition-transform duration-200",
                          openDropdown === link.label && "rotate-180",
                        )}
                      />
                    </button>

                    {/* Dropdown panel */}
                    <AnimatePresence>
                      {openDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: -6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full right-0 mt-2 w-56 rounded-xl border border-white/10 bg-[#070d08]/95 backdrop-blur-xl py-1.5 shadow-xl"
                        >
                          {link.dropdownItems.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              onClick={() => setOpenDropdown(null)}
                              className="block px-4 py-2.5 hover:bg-white/5 transition-colors"
                            >
                              <span className="block text-sm font-medium text-white">
                                {item.label}
                              </span>
                              {item.description && (
                                <span className="block text-[11px] text-white/45 mt-0.5 leading-snug">
                                  {item.description}
                                </span>
                              )}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 rounded-md px-3 py-2 text-body-sm text-white hover:bg-white/5 transition-colors"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* CTA Buttons */}
          <div className="hidden items-center gap-2 md:flex">
            <Link href="/login">
              <Button variant="ghost" className="hover:bg-white/5 text-body-sm text-white">
                Login
              </Button>
            </Link>
            <Button variant="accent" size="nav">
              Get API Key
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="flex h-9 w-9 items-center justify-center rounded-md text-gray-300 hover:bg-white/5 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
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
                    {link.hasDropdown ? (
                      <>
                        <button
                          onClick={() =>
                            setMobileExpandedItem(
                              mobileExpandedItem === link.label ? null : link.label,
                            )
                          }
                          className="flex w-full items-center justify-between gap-1 rounded-md px-3 py-2.5 text-sm text-gray-300 hover:bg-white/5 hover:text-white"
                        >
                          {link.label}
                          <ChevronDown
                            className={cn(
                              "h-3.5 w-3.5 opacity-60 transition-transform duration-200",
                              mobileExpandedItem === link.label && "rotate-180",
                            )}
                          />
                        </button>
                        <AnimatePresence>
                          {mobileExpandedItem === link.label && (
                            <motion.ul
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.18 }}
                              className="overflow-hidden pl-4"
                            >
                              {link.dropdownItems.map((item) => (
                                <li key={item.label}>
                                  <Link
                                    href={item.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="block rounded-md px-3 py-2 text-sm text-gray-400 hover:bg-white/5 hover:text-white transition-colors"
                                  >
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-1 rounded-md px-3 py-2.5 text-sm text-gray-300 hover:bg-white/5 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-col gap-2 border-t border-white/10 pt-4">
                <Link href="/login" onClick={() => setMobileOpen(false)}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-gray-300 hover:bg-white/5 hover:text-white"
                  >
                    Login
                  </Button>
                </Link>
                <Button variant="accent" size="nav" className="w-full font-semibold">
                  Get API Key
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
