"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { asset } from "@/lib/assets";

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  }

  return (
    <div
      className="w-full rounded-2xl bg-white px-8 py-10 sm:px-10"
      style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.18)" }}
    >
      {/* Logo */}
      <div className="flex justify-center mb-8">
        <Link href="/">
          <Image
            src={asset.logo("logo.svg")}
            alt="EarningsCall"
            width={190}
            height={56}
            priority
            unoptimized
            style={{ width: 190, height: "auto" }}
          />
        </Link>
      </div>

      {submitted ? (
        <div className="text-center py-4">
          <p className="font-headline font-medium text-brand text-[16px] mb-2">Check your email</p>
          <p className="font-headline font-light text-muted text-[13px] leading-relaxed">
            We sent a login link to <span className="font-medium text-brand">{email}</span>. Click it to sign in.
          </p>
        </div>
      ) : (
        <>
          <div className="text-center mb-7">
            <h1 className="font-headline font-semibold text-brand text-[22px] mb-1.5">Welcome back</h1>
            <p className="font-headline font-light text-muted text-[14px]">Please login to continue.</p>
          </div>

          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="login-email"
                className="font-headline text-[11px] uppercase tracking-widest text-brand/50"
              >
                Email address
              </label>
              <input
                id="login-email"
                type="email"
                required
                placeholder="Please provide a valid email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-lg border border-[#e4e4e4] bg-[#fafafa] px-3.5 py-3 text-brand text-[13px] outline-none transition-colors focus:border-[#4dec8c] focus:bg-white placeholder:text-muted/40"
                style={{ fontFamily: "var(--font-stack-sans-headline)", fontWeight: 300 }}
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg py-3 text-[14px] font-semibold text-brand transition-opacity hover:opacity-85"
              style={{ backgroundColor: "#4dec8c", fontFamily: "var(--font-stack-sans-headline)" }}
            >
              Login With Email
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-[#ebebeb]" />
            <span className="font-headline text-[12px] text-muted/60 font-light">or</span>
            <div className="flex-1 h-px bg-[#ebebeb]" />
          </div>

          {/* Google */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 rounded-lg border border-[#e4e4e4] bg-white py-3 text-[14px] text-brand transition-colors hover:bg-[#fafafa]"
            style={{ fontFamily: "var(--font-stack-sans-headline)", fontWeight: 400 }}
          >
            <GoogleIcon />
            Continue With Google
          </button>
        </>
      )}

      {/* Footer link */}
      <p className="mt-6 text-center font-headline font-light text-[12px] text-muted/70">
        Don&apos;t have an account?{" "}
        <Link href="/pricing" className="text-brand font-medium hover:opacity-70 transition-opacity">
          View pricing
        </Link>
      </p>
    </div>
  );
}
