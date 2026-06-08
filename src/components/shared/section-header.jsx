import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = true,
  light = false,
  className,
}) {
  return (
    <div
      className={cn(
        "mb-12 space-y-4",
        centered && "text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-widest text-[#22c55e]">
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl",
          light ? "text-white" : "text-gray-900"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mx-auto max-w-2xl text-base leading-relaxed",
            light ? "text-gray-300" : "text-gray-500",
            !centered && "mx-0"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
