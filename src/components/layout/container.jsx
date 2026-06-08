import { cn } from "@/lib/utils";

export function Container({ children, className, as: Tag = "div" }) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        "max-w-[1440px]",
        className
      )}
    >
      {children}
    </Tag>
  );
}
