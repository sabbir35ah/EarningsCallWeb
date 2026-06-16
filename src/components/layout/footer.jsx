import Link from "next/link";
import Image from "next/image";
import { asset } from "@/lib/assets";
import {
  footerCompanyLinks as company,
  footerQuickLinks as quickLinks,
  footerResources as resources,
  footerSocials as socials,
} from "@/data/content";

function FooterCol({ title, links }) {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-headline text-sm font-normal leading-5 text-[#0E4525]">
        {title}
      </p>
      <ul className="flex flex-col gap-4">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="transition-opacity hover:opacity-80 font-headline text-sm font-normal leading-5 text-[#0E4525]"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden w-full min-h-185">
      {/* Background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/footer-background.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* White card — vertically centered */}
      <div className="relative flex h-full min-h-185 items-center mx-auto w-full max-w-360 px-4 sm:px-6 lg:px-8 py-8 lg:py-0">
        <div className="w-full rounded-xl px-6 sm:px-8 lg:px-14 pt-8 sm:pt-10 lg:pt-12 pb-6 bg-white">
          {/* Top grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr] mb-8 lg:mb-12">
            {/* Brand column */}
            <div className="flex flex-col gap-5 sm:col-span-2 lg:col-span-1">
              <Link href="/" className="inline-flex items-center gap-2">
                <Image
                  src={asset.logo("logo.svg")}
                  alt="EarningsCall"
                  width={199}
                  height={45}
                  unoptimized
                  priority
                  style={{ width: "clamp(130px, 20vw, 199px)", height: "auto" }}
                />
              </Link>
              <p className="font-headline font-light text-[#A4A4A4] text-xs leading-4.75 max-w-86.75">
                Unlock insights with full earnings call transcripts and
                analysis, helping investors make faster, data-driven decisions
                for smarter investments.
              </p>
            </div>

            <FooterCol title="Company" links={company} />
            <FooterCol title="Quick Links" links={quickLinks} />
            <FooterCol title="Resources" links={resources} />

            {/* Download App column */}
            <div className="flex flex-col gap-4">
              <p className="font-headline text-sm font-normal leading-5 text-[#0E4525]">
                Download App
              </p>
              <div className="flex flex-col gap-2">
                <a href="https://play.google.com/store/apps/details?id=biz.earningscall.app" aria-label="Get it on Google Play">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/Play_Store.png"
                    alt="Get it on Google Play"
                    width={135}
                    height={40}
                  />
                </a>
                <a href="https://apps.apple.com/app/id1626859464" aria-label="Download on the App Store">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/App_Store.png"
                    alt="Download on the App Store"
                    width={135}
                    height={40}
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px mb-5 -mx-6 sm:-mx-8 lg:-mx-14 bg-gray-200" />

          {/* Bottom bar */}
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p className="text-caption text-brand">Connect with us</p>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              {socials.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 transition-opacity hover:opacity-70 text-caption text-brand"
                >
                  {s.label}
                  <svg className="h-2.5 w-2.5" viewBox="0 0 8 8" fill="none">
                    <path
                      d="M1 7L7 1M7 1H2M7 1V6"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
