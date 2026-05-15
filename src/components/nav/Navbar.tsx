"use client";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { useLanguage } from "@/hooks/useLanguage";

export function Navbar() {
  const { t } = useLanguage();

  const links = [
    { href: "#hero", label: t.nav.about },
    { href: "#experience", label: t.nav.experienceProjects },
    { href: "#rewards-leadership", label: t.nav.rewardsLeadership },
    { href: "#education", label: t.nav.education },
    { href: "#skills", label: t.nav.skills },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 xl:block">
      <nav
        className="animate-soft-pop flex flex-col items-center gap-3 rounded-2xl border border-[var(--border)]/80 bg-[var(--bg)]/85 p-3 shadow-[0_10px_30px_rgb(0_0_0/.12)] backdrop-blur-md dark:shadow-[0_10px_30px_rgb(0_0_0/.45)]"
        aria-label="메인 내비게이션"
      >
        {links.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className="group flex items-center gap-2 rounded-full px-2.5 py-1.5 text-[13px] font-medium text-[var(--fg-muted)] transition-colors hover:bg-[var(--hover)] hover:text-[var(--fg)]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-3)] opacity-70 transition-opacity group-hover:opacity-100" />
            <span>{label}</span>
          </a>
        ))}
        <div className="mt-1 flex flex-col items-center gap-2 border-t border-[var(--border)]/70 pt-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
