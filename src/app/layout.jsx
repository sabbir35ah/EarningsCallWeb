import { Inter, Stack_Sans_Headline } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const stackSansHeadline = Stack_Sans_Headline({
  subsets: ["latin"],
  variable: "--font-stack-sans-headline",
  display: "swap",
  weight: ["400"],
});

export const metadata = {
  title: {
    default: "EarningsCall — Earnings Call Transcripts API",
    template: "%s | EarningsCall",
  },
  description:
    "Real-time earnings call transcripts, audio, and data for 9,000+ public companies. Structured, clean JSON. One ready-to-use API.",
  keywords: [
    "earnings call",
    "transcripts API",
    "financial data",
    "earnings calendar",
    "investor data",
    "public companies",
  ],
  authors: [{ name: "EarningsCall" }],
  creator: "EarningsCall",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://earningscall.biz",
    siteName: "EarningsCall",
    title: "EarningsCall — Earnings Call Transcripts API",
    description:
      "Real-time earnings call transcripts, audio, and data for 9,000+ public companies.",
  },
  twitter: {
    card: "summary_large_image",
    title: "EarningsCall — Earnings Call Transcripts API",
    description:
      "Real-time earnings call transcripts, audio, and data for 9,000+ public companies.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${stackSansHeadline.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
