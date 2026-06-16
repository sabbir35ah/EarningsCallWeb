import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function PlanCard({ plan, billing }) {
  const price = billing === "annual" ? plan.annualPrice : plan.monthlyPrice;

  return (
    <div className="flex flex-col rounded-md overflow-hidden w-full lg:h-134.75 bg-surface border-[0.5px] border-[#d7d7d7] max-h-130">
      <div className="flex flex-col flex-1 p-5 sm:p-6 ">
        <p
          className="font-headline font-normal text-brand-alt mb-1.5 leading-tight tracking-[-0.3px]"
          style={{
            fontSize: "clamp(16px, 2.5vw, 24px)",
          }}
        >
          {plan.name}
        </p>

        <p
          className="font-headline font-normal text-[#4d7a5e] leading-tight mb-4 tracking-[-0.3px]"
          style={{
            fontSize: "clamp(13px, 1.8vw, 16px)",
          }}
        >
          Starting at {price}
          {plan.priceSuffix}
        </p>

        <div className="h-px mb-4 bg-gray-200" />

        <ul className="flex flex-col gap-3 flex-1 justify-center">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-center gap-1.5 sm:gap-2">
              <span className="inline-flex items-center justify-center">
                <Check size={15} className="text-brand-alt" />
              </span>
              <span className="text-body-sm font-light text-brand-alt ">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <Button
          variant={plan.featured ? "brand" : "brand-outline"}
          size="cta"
          className={cn("mt-6 w-full rounded-sm", plan.featured && "text-white")}
          style={{
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: 300,
            lineHeight: "28px",
          }}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}
