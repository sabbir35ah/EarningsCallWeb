import LayoutWrapper from "@/components/shared/layout-wrapper";
import { StaticHero } from "@/components/shared/static-hero";
import { Container } from "@/components/layout/container";

export const metadata = {
  title: "Top 15 Employers | EarningsCall",
  description: "Discover the largest public companies by number of employees. Browse earnings calls for the world's biggest employers.",
};

const EMPLOYERS = [
  { rank: 1,  company: "Walmart",            ticker: "WMT",   employees: 2100000 },
  { rank: 2,  company: "Amazon",             ticker: "AMZN",  employees: 1540000 },
  { rank: 3,  company: "Accenture",          ticker: "ACN",   employees: 774000  },
  { rank: 4,  company: "Compass Group",      ticker: "CMPGY", employees: 580000  },
  { rank: 5,  company: "FedEx",              ticker: "FDX",   employees: 547000  },
  { rank: 6,  company: "The Home Depot",     ticker: "HD",    employees: 465000  },
  { rank: 7,  company: "Kroger",             ticker: "KR",    employees: 430000  },
  { rank: 8,  company: "Target",             ticker: "TGT",   employees: 415000  },
  { rank: 9,  company: "UnitedHealth Group", ticker: "UNH",   employees: 400000  },
  { rank: 10, company: "Berkshire Hathaway", ticker: "BRK.B", employees: 396000  },
  { rank: 11, company: "Starbucks",          ticker: "SBUX",  employees: 383000  },
  { rank: 12, company: "Cognizant",          ticker: "CTSH",  employees: 355000  },
  { rank: 13, company: "JPMorgan Chase",     ticker: "JPM",   employees: 310000  },
  { rank: 14, company: "IBM",               ticker: "IBM",   employees: 282000  },
  { rank: 15, company: "AT&T",              ticker: "T",     employees: 186000  },
];

// Scale max is rounded up to 2.5M so grid lines land on clean 500K intervals
const CHART_MAX = 2_500_000;

const X_AXIS = [
  { pct: 0,   label: "0"    },
  { pct: 20,  label: "500K" },
  { pct: 40,  label: "1M"   },
  { pct: 60,  label: "1.5M" },
  { pct: 80,  label: "2M"   },
  { pct: 100, label: "2.5M" },
];

const GRID_PCTS = [20, 40, 60, 80];

function fmtShort(n) {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  return Math.round(n / 1_000) + "K";
}

const Y_LABEL_W   = "w-[140px] sm:w-[210px]";
const COUNT_W     = "w-[44px] sm:w-[56px]";
const BAR_H       = 34;
const BAR_INSET   = 4;

export default function TopEmployersPage() {
  return (
    <LayoutWrapper>
      <StaticHero
        title="Top 15 Employers"
        subtitle="Who are the largest employers? How many employees do the largest public companies have?"
      />

      <section className="py-16 sm:py-20 lg:py-24" style={{ backgroundColor: "#f2f8f4" }}>
        <Container className="max-w-[1020px]!">

          {/* Chart card */}
          <div
            className="bg-white overflow-hidden"
            style={{
              borderRadius: "16px",
              border: "1px solid #dceee3",
              boxShadow: "0 4px 32px rgba(0,0,0,0.07)",
            }}
          >

            {/* ── Card header ── */}
            <div
              className="flex flex-wrap items-center justify-between gap-4 px-6 sm:px-8 py-5"
              style={{ borderBottom: "1px solid #eef5f0" }}
            >
              <div>
                <h2 className="font-headline font-semibold text-brand text-[17px] leading-tight">
                  Employees by Company
                </h2>
                <p className="font-headline font-light text-muted text-[12px] mt-0.5">
                  Top 15 public companies ranked by total headcount
                </p>
              </div>

              {/* Legend */}
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-1.5">
                  <div
                    className="w-4 h-3"
                    style={{
                      background: "linear-gradient(90deg, #6ef2a4, #2bbf6c)",
                      borderRadius: "2px",
                    }}
                  />
                  <span className="font-headline text-[11px] text-muted">Top 3</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div
                    className="w-4 h-3"
                    style={{ backgroundColor: "rgba(77,236,140,0.5)", borderRadius: "2px" }}
                  />
                  <span className="font-headline text-[11px] text-muted">Others</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div
                    className="w-px h-3"
                    style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
                  />
                  <span className="font-headline text-[11px] text-muted">500K interval</span>
                </div>
              </div>
            </div>

            {/* ── Chart body ── */}
            <div className="px-5 sm:px-8 pt-6 pb-2">

              {/* Rows */}
              {EMPLOYERS.map((emp) => {
                const barPct = (emp.employees / CHART_MAX) * 100;
                const isTop3 = emp.rank <= 3;

                return (
                  <div key={emp.rank} className="flex items-center gap-3 sm:gap-4 mb-2">

                    {/* Y-axis label */}
                    <div className={`flex items-center gap-2 ${Y_LABEL_W} shrink-0`}>
                      <div
                        className="flex items-center justify-center w-6 h-6 rounded-full text-[11px] font-bold shrink-0"
                        style={
                          isTop3
                            ? { backgroundColor: "rgba(77,236,140,0.25)", color: "#012d12" }
                            : { backgroundColor: "#f2f2f2", color: "#b0b0b0" }
                        }
                      >
                        {emp.rank}
                      </div>
                      <div className="min-w-0">
                        <div className="font-headline font-medium text-[12px] sm:text-[13px] text-brand truncate leading-tight">
                          {emp.company}
                        </div>
                        <div className="font-headline text-[10px] font-semibold" style={{ color: "#3a9960" }}>
                          {emp.ticker}
                        </div>
                      </div>
                    </div>

                    {/* Plot area */}
                    <div
                      className="flex-1 relative"
                      style={{
                        height: `${BAR_H}px`,
                        backgroundColor: "rgba(77,236,140,0.05)",
                        borderLeft: "2px solid rgba(1,45,18,0.15)",
                      }}
                    >
                      {/* Bar fill */}
                      <div
                        className="absolute"
                        style={{
                          top: BAR_INSET,
                          bottom: BAR_INSET,
                          left: 0,
                          width: `${barPct}%`,
                          minWidth: 4,
                          background: isTop3
                            ? "linear-gradient(90deg, #6ef2a4 0%, #4dec8c 60%, #2bbf6c 100%)"
                            : "rgba(77,236,140,0.50)",
                          zIndex: 0,
                        }}
                      />

                      {/* Grid lines — rendered on top of bar */}
                      {GRID_PCTS.map((p) => (
                        <div
                          key={p}
                          className="absolute top-0 bottom-0 pointer-events-none"
                          style={{
                            left: `${p}%`,
                            width: "1px",
                            backgroundColor: "rgba(0,0,0,0.10)",
                            zIndex: 1,
                          }}
                        />
                      ))}
                    </div>

                    {/* Count */}
                    <div className={`${COUNT_W} shrink-0 text-right`}>
                      <span className="font-headline font-semibold text-[11px] sm:text-[12px] text-brand tabular-nums">
                        {fmtShort(emp.employees)}
                      </span>
                    </div>

                  </div>
                );
              })}

              {/* ── X-axis ── */}
              <div className="flex items-start mt-1 mb-5">
                {/* spacer matching Y-label */}
                <div className={`${Y_LABEL_W} shrink-0`} />

                {/* Scale */}
                <div
                  className="flex-1 relative"
                  style={{ height: "24px", borderTop: "1px solid rgba(1,45,18,0.12)" }}
                >
                  {X_AXIS.map((tick) => (
                    <span
                      key={tick.label}
                      className="absolute top-1.5 font-headline text-[10px]"
                      style={{
                        left: `${tick.pct}%`,
                        color: "#8a9e90",
                        transform:
                          tick.pct === 0
                            ? "none"
                            : tick.pct === 100
                              ? "translateX(-100%)"
                              : "translateX(-50%)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {tick.label}
                    </span>
                  ))}
                </div>

                {/* spacer matching count */}
                <div className={`${COUNT_W} shrink-0`} />
              </div>

            </div>
          </div>

          {/* Footnote */}
          <p className="font-headline font-light text-[11px] mt-4 text-center" style={{ color: "#8fa894" }}>
            Showing public companies only · Employee counts approximate, based on latest available annual filings
          </p>

        </Container>
      </section>
    </LayoutWrapper>
  );
}
