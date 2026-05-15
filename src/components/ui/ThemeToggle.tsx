"use client";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try { localStorage.setItem("theme", next ? "dark" : "light"); } catch {}
  }

  // Render placeholder until mounted to avoid hydration mismatch
  if (!mounted) {
    return <span className="inline-block h-9 w-9" aria-hidden="true" />;
  }

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "라이트 모드로 전환" : "다크 모드로 전환"}
      className="rounded-lg border border-[var(--border)] p-2 text-sm text-[var(--fg-muted)] transition-colors hover:bg-[var(--hover)] hover:text-[var(--fg)]"
    >
      {dark ? "☀️" : "🌙"}
    </button>
  );
}
