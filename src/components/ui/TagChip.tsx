"use client";
import { cn } from "@/lib/utils";
import { TagLabel, tokens } from "@/tokens/design-tokens";

interface TagChipProps {
  tag: TagLabel;
  active?: boolean;
  onClick?: (tag: TagLabel) => void;
  size?: "sm" | "md";
}

export function TagChip({ tag, active = false, onClick, size = "sm" }: TagChipProps) {
  const isClickable = !!onClick;
  return (
    <span
      role={isClickable ? "button" : undefined}
      tabIndex={isClickable ? 0 : undefined}
      onClick={() => onClick?.(tag)}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onClick?.(tag)}
      className={cn(
        "inline-flex items-center rounded-full font-medium select-none transition-all",
        size === "sm" ? "px-2 py-0.5 text-xs" : "px-3 py-1 text-sm",
        tokens.color.tag[tag],
        isClickable && "cursor-pointer",
        active && "ring-2 ring-offset-1 ring-slate-500/70 dark:ring-slate-300/60",
      )}
    >
      {tag}
    </span>
  );
}
