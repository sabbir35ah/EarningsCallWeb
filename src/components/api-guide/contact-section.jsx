"use client";

import { useState } from "react";

export function ContactSection() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div id="contact" className="scroll-mt-36 mt-6 rounded-xl border border-[#d7d7d7] bg-white p-6">
      <h2
        className="mb-2 text-brand text-[18px]"
        style={{ fontFamily: "var(--font-stack-sans-headline)", fontWeight: 400 }}
      >
        Contact Us
      </h2>
      <p
        className="mb-6 text-muted text-[13px]"
        style={{ fontFamily: "var(--font-stack-sans-headline)", fontWeight: 300, lineHeight: "22px" }}
      >
        Interested in full API access? Email us at{" "}
        <a href="mailto:sales@earningscall.biz" className="text-brand-alt hover:opacity-70 transition-opacity">
          sales@earningscall.biz
        </a>
        {" "}or fill out the form below.
      </p>

      {submitted ? (
        <div className="rounded-lg bg-[#e8f5ee] border border-[#c0e8d0] px-5 py-4">
          <p
            className="text-brand-alt text-[13px]"
            style={{ fontFamily: "var(--font-stack-sans-headline)", fontWeight: 300, lineHeight: "22px" }}
          >
            Thanks! We&apos;ll be in touch soon.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* First Name */}
            <div className="flex flex-col gap-1.5">
              <label
                className="text-[10px] uppercase tracking-widest text-brand/40"
                style={{ fontFamily: "var(--font-stack-sans-headline)", fontWeight: 400 }}
              >
                First Name
              </label>
              <input
                name="firstName"
                type="text"
                required
                placeholder="First name"
                value={form.firstName}
                onChange={handleChange}
                className="rounded-lg border border-[#e8e8e8] bg-[#fafafa] px-3 py-2.5 text-brand text-[13px] outline-none transition-colors focus:border-[#2ed674] focus:bg-white placeholder:text-muted/50"
                style={{ fontFamily: "var(--font-stack-sans-headline)", fontWeight: 300 }}
              />
            </div>

            {/* Last Name */}
            <div className="flex flex-col gap-1.5">
              <label
                className="text-[10px] uppercase tracking-widest text-brand/40"
                style={{ fontFamily: "var(--font-stack-sans-headline)", fontWeight: 400 }}
              >
                Last Name
              </label>
              <input
                name="lastName"
                type="text"
                required
                placeholder="Last name"
                value={form.lastName}
                onChange={handleChange}
                className="rounded-lg border border-[#e8e8e8] bg-[#fafafa] px-3 py-2.5 text-brand text-[13px] outline-none transition-colors focus:border-[#2ed674] focus:bg-white placeholder:text-muted/50"
                style={{ fontFamily: "var(--font-stack-sans-headline)", fontWeight: 300 }}
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label
                className="text-[10px] uppercase tracking-widest text-brand/40"
                style={{ fontFamily: "var(--font-stack-sans-headline)", fontWeight: 400 }}
              >
                Email
              </label>
              <input
                name="email"
                type="email"
                required
                placeholder="you@company.com"
                value={form.email}
                onChange={handleChange}
                className="rounded-lg border border-[#e8e8e8] bg-[#fafafa] px-3 py-2.5 text-brand text-[13px] outline-none transition-colors focus:border-[#2ed674] focus:bg-white placeholder:text-muted/50"
                style={{ fontFamily: "var(--font-stack-sans-headline)", fontWeight: 300 }}
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1.5">
              <label
                className="text-[10px] uppercase tracking-widest text-brand/40"
                style={{ fontFamily: "var(--font-stack-sans-headline)", fontWeight: 400 }}
              >
                Phone
              </label>
              <input
                name="phone"
                type="text"
                placeholder="Phone number"
                value={form.phone}
                onChange={handleChange}
                className="rounded-lg border border-[#e8e8e8] bg-[#fafafa] px-3 py-2.5 text-brand text-[13px] outline-none transition-colors focus:border-[#2ed674] focus:bg-white placeholder:text-muted/50"
                style={{ fontFamily: "var(--font-stack-sans-headline)", fontWeight: 300 }}
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <label
                className="text-[10px] uppercase tracking-widest text-brand/40"
                style={{ fontFamily: "var(--font-stack-sans-headline)", fontWeight: 400 }}
              >
                Message (Optional)
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us about your use case..."
                value={form.message}
                onChange={handleChange}
                className="rounded-lg border border-[#e8e8e8] bg-[#fafafa] px-3 py-2.5 text-brand text-[13px] outline-none transition-colors focus:border-[#2ed674] focus:bg-white placeholder:text-muted/50 resize-none"
                style={{ fontFamily: "var(--font-stack-sans-headline)", fontWeight: 300 }}
              />
            </div>

            {/* Submit */}
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="rounded-lg bg-[#2ed674] px-6 py-2.5 text-brand-alt text-[13px] transition-opacity hover:opacity-80"
                style={{ fontFamily: "var(--font-stack-sans-headline)", fontWeight: 400 }}
              >
                Send Request
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
