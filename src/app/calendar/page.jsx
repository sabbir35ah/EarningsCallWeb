import LayoutWrapper from "@/components/shared/layout-wrapper";
import { CalendarHero } from "@/components/calendar/calendar-hero";
import { CalendarEvents } from "@/components/calendar/calendar-events";

export const metadata = {
  title: "Earnings Call Calendar | EarningsCall",
  description: "Browse scheduled earnings calls by date for 9,000+ public companies.",
};

export default function CalendarPage() {
  return (
    <LayoutWrapper>
      <CalendarHero />
      <CalendarEvents />
    </LayoutWrapper>
  );
}
