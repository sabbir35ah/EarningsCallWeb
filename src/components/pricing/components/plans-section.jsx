"use client";
import { Container } from "@/components/layout/container";
import { useState } from "react";
import { plans } from "../constants/constants";
import { PlanCard } from "./plan-card";
import { BillingToggle } from "./billing-toggle";

export function PlansSection() {
  const [billing, setBilling] = useState("monthly");

  return (
    <section className="bg-white pb-10 sm:pb-14 lg:pb-16">
      <Container>
        <div className="flex flex-col items-center sm:items-end gap-3 mb-8 sm:mb-10 w-full">
          <BillingToggle billing={billing} setBilling={setBilling} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5.25">
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} billing={billing} />
          ))}
        </div>
      </Container>
    </section>
  );
}
