import { Container } from "@/components/layout/container";
import Link from "next/link";
import { SslTlsIcon } from "../icons/ssl-tls-icon";
import { StripeBadgeIcon } from "../icons/stripe-badge-icon";

export function RefundSection({ refundConditions }) {
  return (
    <section className="bg-white pb-10 sm:pb-14 lg:pb-16">
      <Container>
        <div className="rounded-xl px-6 sm:px-8 py-10 sm:py-14 lg:py-20 bg-brand-alt">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* LEFT — refund text */}
            <div>
              <p
                className="font-headline font-light text-white leading-6 max-w-162.5 mb-8"
                style={{ fontSize: "clamp(12px, 1.8vw, 16px)" }}
              >
                We stand behind our data. If it&apos;s not right for you,{" "}
                <Link
                  href="mailto:support@earningscall.biz"
                  className="text-white underline"
                >
                  Contact us
                </Link>{" "}
                within 7 days of your first payment for a full refund — no
                forms, no friction.
              </p>

              <p
                className="font-headline font-normal text-accent leading-7 mb-5"
                style={{ fontSize: "clamp(16px, 2.5vw, 20px)" }}
              >
                Fair-use conditions
              </p>

              <div className="flex flex-col">
                {refundConditions.map(({ label, desc }) => (
                  <div key={label} className="flex flex-col gap-0.5 py-3">
                    <span
                      className="font-headline font-normal text-white leading-7"
                      style={{ fontSize: "clamp(14px, 1.8vw, 16px)" }}
                    >
                      {label}
                    </span>
                    <span
                      className="font-headline font-light text-[#8ab89a] leading-6"
                      style={{ fontSize: "clamp(12px, 1.5vw, 14px)" }}
                    >
                      {desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — security cards */}
            <div className="flex items-center justify-center">
              <div className="flex flex-col items-center justify-center gap-6 p-6 w-full max-w-116.75 rounded-2xl border-[0.5px] border-[rgba(164,164,164,0.40)] bg-[#0B3C1E]">
                {/* SSL/TLS card */}
                <div className="flex items-center self-stretch gap-3 p-4 rounded-xl border-[0.5px] border-[rgba(164,164,164,0.60)] bg-[#154628]">
                  <div className="flex flex-col shrink-0 items-center justify-center gap-2.5 w-20 h-16 py-4 pl-3.5 pr-3.75 rounded-lg bg-[#287347]">
                    <SslTlsIcon />
                  </div>
                  <div className="flex-1">
                    <p className="font-headline font-medium text-white text-[15px] leading-5.5">
                      SSL/TLS
                    </p>
                    <p className="font-headline font-light text-[#8ab89a] text-xs leading-4.5">
                      Certificate Status
                    </p>
                    <p className="font-headline font-normal text-accent text-xs leading-4.5 mt-0.5">
                      <span className="inline-block w-1.75 h-1.75 rounded-full bg-accent mr-1.25 align-middle" />
                      Active
                    </p>
                  </div>
                </div>

                {/* Stripe Payments card */}
                <div className="flex items-center self-stretch gap-3 p-4 rounded-xl border-[0.5px] border-[rgba(164,164,164,0.60)] bg-[#154628]">
                  <div className="flex flex-col shrink-0 items-center justify-center w-20 h-16 rounded-lg bg-[#FFE3EE]">
                    <StripeBadgeIcon />
                  </div>
                  <div className="flex-1">
                    <p className="font-headline font-medium text-white text-[15px] leading-5.5">
                      Stripe Payments
                    </p>
                    <p className="font-headline font-light text-[#8ab89a] text-xs leading-4.5">
                      Payment Gateway
                    </p>
                    <p className="font-headline font-normal text-[#f87171] text-xs leading-4.5 mt-0.5">
                      <span className="inline-block w-1.75 h-1.75 rounded-full bg-[#f87171] mr-1.25 align-middle" />
                      PCI Compliant
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
