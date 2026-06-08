import { cn } from "@/lib/utils";

export function GradientBadge({ children, className }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400",
        className
      )}
    >
      {children}
    </span>
  );
}
