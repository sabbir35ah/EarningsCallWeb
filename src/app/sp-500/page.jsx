import LayoutWrapper from "@/components/shared/layout-wrapper";
import { StaticHero } from "@/components/shared/static-hero";
import { Container } from "@/components/layout/container";
import Link from "next/link";

export const metadata = {
  title: "S&P 500 Holdings | EarningsCall",
  description: "Browse the S&P 500 index — 500 large-cap companies listed in descending weighted order with stock price, sector, and employee data.",
};

const SP500 = [
  { rank: 1,  company: "NVIDIA Corporation",                    ticker: "NVDA",  sector: "Technology",             price: "$192.53",   employees: "36,000"    },
  { rank: 2,  company: "Apple Inc.",                            ticker: "AAPL",  sector: "Technology",             price: "$283.78",   employees: "150,000"   },
  { rank: 3,  company: "Microsoft Corporation",                 ticker: "MSFT",  sector: "Technology",             price: "$372.97",   employees: "228,000"   },
  { rank: 4,  company: "Amazon.com, Inc.",                      ticker: "AMZN",  sector: "Consumer Cyclical",      price: "$232.69",   employees: "1,546,000" },
  { rank: 5,  company: "Alphabet Inc.",                         ticker: "GOOG",  sector: "Communication Services", price: "$334.69",   employees: "187,103"   },
  { rank: 6,  company: "Broadcom Inc.",                         ticker: "AVGO",  sector: "Technology",             price: "$365.02",   employees: "37,000"    },
  { rank: 7,  company: "Tesla, Inc.",                           ticker: "TSLA",  sector: "Consumer Cyclical",      price: "$379.71",   employees: "125,665"   },
  { rank: 8,  company: "Meta Platforms, Inc.",                  ticker: "META",  sector: "Communication Services", price: "$550.25",   employees: "75,945"    },
  { rank: 9,  company: "Micron Technology, Inc.",               ticker: "MU",    sector: "Technology",             price: "$1,132.33", employees: "48,000"    },
  { rank: 10, company: "Eli Lilly and Company",                 ticker: "LLY",   sector: "Healthcare",             price: "$1,208.12", employees: "47,000"    },
  { rank: 11, company: "Berkshire Hathaway Inc.",               ticker: "BRK.B", sector: "Financial Services",     price: "$498.66",   employees: "392,400"   },
  { rank: 12, company: "Walmart Inc.",                          ticker: "WMT",   sector: "Consumer Defensive",     price: "$115.69",   employees: "2,100,000" },
  { rank: 13, company: "JP Morgan Chase & Co.",                 ticker: "JPM",   sector: "Financial Services",     price: "$329.05",   employees: "317,160"   },
  { rank: 14, company: "Advanced Micro Devices, Inc.",          ticker: "AMD",   sector: "Technology",             price: "$521.58",   employees: "28,000"    },
  { rank: 15, company: "Intel Corporation",                     ticker: "INTC",  sector: "Technology",             price: "$128.32",   employees: "108,900"   },
  { rank: 16, company: "Visa Inc.",                             ticker: "V",     sector: "Financial Services",     price: "$336.23",   employees: "28,800"    },
  { rank: 17, company: "Johnson & Johnson",                     ticker: "JNJ",   sector: "Healthcare",             price: "$254.66",   employees: "138,100"   },
  { rank: 18, company: "Exxon Mobil Corporation",               ticker: "XOM",   sector: "Energy",                 price: "$136.54",   employees: "61,000"    },
  { rank: 19, company: "Applied Materials, Inc.",               ticker: "AMAT",  sector: "Technology",             price: "$626.84",   employees: "36,000"    },
  { rank: 20, company: "Lam Research Corporation",              ticker: "LRCX",  sector: "Technology",             price: "$379.09",   employees: "19,000"    },
  { rank: 21, company: "Caterpillar, Inc.",                     ticker: "CAT",   sector: "Industrials",            price: "$997.47",   employees: "112,900"   },
  { rank: 22, company: "Cisco Systems, Inc.",                   ticker: "CSCO",  sector: "Technology",             price: "$113.77",   employees: "90,400"    },
  { rank: 23, company: "AbbVie Inc.",                           ticker: "ABBV",  sector: "Healthcare",             price: "$253.35",   employees: "57,000"    },
  { rank: 24, company: "Mastercard Incorporated",               ticker: "MA",    sector: "Financial Services",     price: "$499.02",   employees: "35,300"    },
  { rank: 25, company: "Oracle Corporation",                    ticker: "ORCL",  sector: "Technology",             price: "$148.53",   employees: "162,000"   },
  { rank: 26, company: "Costco Wholesale Corporation",          ticker: "COST",  sector: "Consumer Defensive",     price: "$952.54",   employees: "333,000"   },
  { rank: 27, company: "Bank of America Corporation",           ticker: "BAC",   sector: "Financial Services",     price: "$57.88",    employees: "213,388"   },
  { rank: 28, company: "UnitedHealth Group Incorporated",       ticker: "UNH",   sector: "Healthcare",             price: "$427.89",   employees: "400,000"   },
  { rank: 29, company: "GE Aerospace",                          ticker: "GE",    sector: "Industrials",            price: "$369.00",   employees: "53,000"    },
  { rank: 30, company: "Coca-Cola Company",                     ticker: "KO",    sector: "Consumer Defensive",     price: "$82.63",    employees: "69,700"    },
  { rank: 31, company: "The Home Depot, Inc.",                  ticker: "HD",    sector: "Consumer Cyclical",      price: "$348.86",   employees: "470,000"   },
  { rank: 32, company: "Procter & Gamble Company",              ticker: "PG",    sector: "Consumer Defensive",     price: "$149.02",   employees: "109,000"   },
  { rank: 33, company: "Chevron Corporation",                   ticker: "CVX",   sector: "Energy",                 price: "$171.06",   employees: "45,298"    },
  { rank: 34, company: "Morgan Stanley",                        ticker: "MS",    sector: "Financial Services",     price: "$212.03",   employees: "80,000"    },
  { rank: 35, company: "KLA Corporation",                       ticker: "KLAC",  sector: "Technology",             price: "$248.64",   employees: "15,000"    },
  { rank: 36, company: "Merck & Co., Inc.",                     ticker: "MRK",   sector: "Healthcare",             price: "$128.66",   employees: "73,000"    },
  { rank: 37, company: "Netflix, Inc.",                         ticker: "NFLX",  sector: "Communication Services", price: "$73.81",    employees: "14,000"    },
  { rank: 38, company: "Sandisk Corporation",                   ticker: "SNDK",  sector: "Technology",             price: "$2,090.71", employees: "11,000"    },
  { rank: 39, company: "Goldman Sachs Group, Inc.",             ticker: "GS",    sector: "Financial Services",     price: "$1,019.61", employees: "45,900"    },
  { rank: 40, company: "Philip Morris International Inc.",      ticker: "PM",    sector: "Consumer Defensive",     price: "$180.77",   employees: "83,100"    },
  { rank: 41, company: "GE Vernova Inc.",                       ticker: "GEV",   sector: "Industrials",            price: "$1,045.17", employees: "76,800"    },
  { rank: 42, company: "Palantir Technologies Inc.",            ticker: "PLTR",  sector: "Technology",             price: "$112.93",   employees: "4,001"     },
  { rank: 43, company: "Texas Instruments Incorporated",        ticker: "TXN",   sector: "Technology",             price: "$285.43",   employees: "34,000"    },
  { rank: 44, company: "Dell Technologies Inc.",                ticker: "DELL",  sector: "Technology",             price: "$399.49",   employees: "108,000"   },
  { rank: 45, company: "Wells Fargo & Company",                 ticker: "WFC",   sector: "Financial Services",     price: "$83.86",    employees: "212,804"   },
  { rank: 46, company: "IBM",                                   ticker: "IBM",   sector: "Technology",             price: "$271.63",   employees: "270,300"   },
  { rank: 47, company: "RTX Corporation",                       ticker: "RTX",   sector: "Industrials",            price: "$187.99",   employees: "186,000"   },
  { rank: 48, company: "Palo Alto Networks, Inc.",              ticker: "PANW",  sector: "Technology",             price: "$304.20",   employees: "15,866"    },
  { rank: 49, company: "Citigroup, Inc.",                       ticker: "C",     sector: "Financial Services",     price: "$141.76",   employees: "230,000"   },
  { rank: 50, company: "Linde plc",                             ticker: "LIN",   sector: "Basic Materials",        price: "$519.62",   employees: "66,195"    },
];

const SECTOR_STYLE = {
  "Technology":             { bg: "rgba(77,236,140,0.15)",  color: "#014a1e" },
  "Healthcare":             { bg: "rgba(56,189,248,0.18)",  color: "#0c4a6e" },
  "Financial Services":     { bg: "rgba(167,139,250,0.18)", color: "#3b0764" },
  "Consumer Cyclical":      { bg: "rgba(251,146,60,0.18)",  color: "#7c2d12" },
  "Consumer Defensive":     { bg: "rgba(52,211,153,0.18)",  color: "#064e3b" },
  "Communication Services": { bg: "rgba(99,102,241,0.18)",  color: "#3730a3" },
  "Industrials":            { bg: "rgba(251,191,36,0.18)",  color: "#78350f" },
  "Energy":                 { bg: "rgba(239,68,68,0.18)",   color: "#7f1d1d" },
  "Basic Materials":        { bg: "rgba(180,83,9,0.18)",    color: "#431407" },
};

const TH_STYLE = {
  backgroundColor: "rgba(77,236,140,0.2)",
  color: "#014a1e",
};

export default function SP500Page() {
  return (
    <LayoutWrapper>
      <StaticHero
        title="S&P 500 Holdings"
        subtitle="The Standard & Poor's 500 tracks the performance of 500 large companies, listed in descending weighted order."
      />

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container className="max-w-[1120px]!">

          {/* Stats bar */}
          <div className="mb-8">
            <p className="font-headline font-light text-[13px] text-muted">
              Showing top 50 of 500 companies by market weight · Stock prices as of latest available data
            </p>
          </div>

          {/* Table card */}
          <div
            className="overflow-hidden"
            style={{
              borderRadius: "12px",
              border: "1px solid #e4e4e4",
              boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
            }}
          >
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] border-collapse">

                {/* Header */}
                <thead>
                  <tr style={{ borderBottom: "1px solid #dceee3" }}>
                    {[
                      { label: "#",           align: "left",  w: "w-12"   },
                      { label: "Company",     align: "left",  w: ""       },
                      { label: "Symbol",      align: "left",  w: "w-24"   },
                      { label: "Sector",      align: "left",  w: "w-48"   },
                      { label: "Stock Price", align: "right", w: "w-32"   },
                      { label: "Employees",   align: "right", w: "w-32"   },
                    ].map((col) => (
                      <th
                        key={col.label}
                        className={`py-3 px-4 font-headline text-[11px] uppercase tracking-widest font-semibold ${col.w}`}
                        style={{ textAlign: col.align, backgroundColor: "rgba(77,236,140,0.08)" }}
                      >
                        <span
                          className="inline-block px-2 py-0.5 rounded"
                          style={TH_STYLE}
                        >
                          {col.label}
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>

                {/* Body */}
                <tbody>
                  {SP500.map((row) => {
                    const sectorStyle = SECTOR_STYLE[row.sector] ?? { bg: "#f4f4f4", color: "#666" };
                    const isTop10 = row.rank <= 10;

                    return (
                      <tr
                        key={row.ticker}
                        className="transition-colors hover:bg-[#f7fdf9]"
                        style={{ borderBottom: "1px solid #f2f2f2" }}
                      >
                        {/* Rank */}
                        <td className="py-3 px-4">
                          <div
                            className="flex items-center justify-center w-6 h-6 rounded-full text-[11px] font-bold"
                            style={
                              isTop10
                                ? { backgroundColor: "rgba(77,236,140,0.22)", color: "#012d12" }
                                : { backgroundColor: "#f4f4f4", color: "#aaa" }
                            }
                          >
                            {row.rank}
                          </div>
                        </td>

                        {/* Company */}
                        <td className="py-3 px-4">
                          <Link
                            href="#"
                            className="font-headline font-medium text-[13px] text-brand hover:opacity-70 transition-opacity"
                          >
                            {row.company}
                          </Link>
                        </td>

                        {/* Ticker */}
                        <td className="py-3 px-4">
                          <span
                            className="font-headline text-[11px] font-semibold px-2 py-0.5 rounded"
                            style={{ backgroundColor: "rgba(77,236,140,0.18)", color: "#014a1e" }}
                          >
                            {row.ticker}
                          </span>
                        </td>

                        {/* Sector */}
                        <td className="py-3 px-4">
                          <span
                            className="font-headline text-[11px] font-medium px-2 py-0.5 rounded"
                            style={{ backgroundColor: sectorStyle.bg, color: sectorStyle.color }}
                          >
                            {row.sector}
                          </span>
                        </td>

                        {/* Price */}
                        <td className="py-3 px-4 text-right">
                          <span className="font-headline font-semibold text-[13px] text-brand tabular-nums">
                            {row.price}
                          </span>
                        </td>

                        {/* Employees */}
                        <td className="py-3 px-4 text-right">
                          <span className="font-headline font-light text-[12px] text-muted tabular-nums">
                            {row.employees}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Table footer */}
            <div
              className="flex items-center justify-between px-5 py-3"
              style={{ borderTop: "1px solid #f0f0f0", backgroundColor: "rgba(77,236,140,0.04)" }}
            >
              <p className="font-headline font-light text-[11px] text-muted">
                Showing 50 of 500 holdings · Public companies only
              </p>
              <p className="font-headline font-light text-[11px] text-muted">
                Data for informational purposes only
              </p>
            </div>
          </div>

        </Container>
      </section>
    </LayoutWrapper>
  );
}
