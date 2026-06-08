import { cn } from "@/lib/utils";

export function StatCard({ value, label, className, valueClassName }) {
  return (
    <div className={cn("flex flex-col", className)}>
      <span className={cn("text-2xl font-bold text-white sm:text-3xl", valueClassName)}>
        {value}
      </span>
      <span className="text-sm text-gray-400">{label}</span>
    </div>
  );
}
