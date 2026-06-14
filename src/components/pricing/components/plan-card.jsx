export function PlanCard({ plan, billing }) {
  const price = billing === "annual" ? plan.annualPrice : plan.monthlyPrice;

  return (
    <div className="flex flex-col rounded-md overflow-hidden w-full lg:h-134.75 bg-surface border-[0.5px] border-[#d7d7d7]">
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        <p
          className="font-headline font-normal text-brand-alt leading-8 mb-1.5"
          style={{
            fontSize: "clamp(16px, 2.5vw, 24px)",
            letterSpacing: "-0.3px",
          }}
        >
          {plan.name}
        </p>

        <p
          className="font-headline font-normal text-[#4d7a5e] leading-8 mb-4"
          style={{
            fontSize: "clamp(13px, 1.8vw, 16px)",
            letterSpacing: "-0.3px",
          }}
        >
          Starting at {price}
          {plan.priceSuffix}
        </p>

        <div className="h-px mb-4 bg-gray-200" />

        <ul className="flex flex-col gap-3 flex-1 justify-center">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 sm:gap-3">
              <svg
                width="13"
                height="9"
                viewBox="0 0 13 9"
                fill="none"
                style={{ flexShrink: 0, marginTop: "5px" }}
              >
                <path
                  d="M1 4L4.5 7.5L11.5 1"
                  stroke="#013214"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-body-sm font-light text-brand-alt">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <button
          className="mt-6 w-full rounded-sm transition-opacity hover:opacity-90 font-headline font-light leading-7"
          style={{
            height: "clamp(42px, 5vw, 50px)",
            fontSize: "clamp(14px, 2vw, 18px)",
            ...(plan.featured
              ? { backgroundColor: "#013214", color: "#fff" }
              : {
                  border: "1px solid #013214",
                  backgroundColor: "transparent",
                  color: "#013214",
                }),
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
