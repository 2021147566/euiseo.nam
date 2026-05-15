"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useLanguage, Lang } from "@/hooks/useLanguage";

export function LanguageToggle() {
  const { lang, toggle } = useLanguage();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  if (!mounted) return <span className="inline-block h-7 w-[58px]" aria-hidden />;

  const seg = (target: Lang, label: string) => (
    <button
      key={target}
      onClick={() => lang !== target && toggle()}
      aria-pressed={lang === target}
      aria-label={target === "ko" ? "한국어로 전환" : "Switch to English"}
      className={cn(
        "px-2.5 py-1 text-xs font-semibold transition-colors",
        lang === target
          ? "bg-[var(--brand)] text-white"
          : "bg-[var(--card)] text-[var(--fg)] hover:bg-[var(--hover)]",
      )}
    >
      {label}
    </button>
  );

  return (
    <div
      role="group"
      aria-label="언어 선택"
      className="flex items-center overflow-hidden rounded-full border border-[var(--border)]"
    >
      {seg("ko", "KO")}
      {seg("en", "EN")}
    </div>
  );
}
