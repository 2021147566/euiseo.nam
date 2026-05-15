"use client";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageToggle } from "@/components/ui/LanguageToggle";

export function DetailHeader() {
  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-[var(--border)]/60 bg-[var(--bg)]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-2xl items-center justify-between px-6 py-3">
        <Link
          href="/#experience"
          className="text-sm text-[var(--fg-muted)] transition-colors hover:text-[var(--fg)]"
        >
          ← 돌아가기
        </Link>
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
