"use client";
import { personal } from "@/data/portfolio";
import { useLanguage } from "@/hooks/useLanguage";

export function Contact() {
  const { t } = useLanguage();
  return (
    <section id="contact" className="py-24" aria-label="연락처">
      <div className="mx-auto max-w-5xl px-8">
        <h2 className="mb-10 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--fg-muted)]">
          {t.contact.heading}
        </h2>
        <div className="max-w-md space-y-4">
          <p className="text-base text-[var(--fg)]">{t.contact.description}</p>
          <div className="flex flex-col gap-3 pt-1">
            {[
              { href: `mailto:${personal.email}`, icon: "✉", label: personal.email },
              { href: personal.linkedin,           icon: "💼", label: "linkedin.com/in/euiseo", blank: true },
              { href: personal.github,             icon: "⌥", label: "github.com/2021147566",  blank: true },
            ].map(({ href, icon, label, blank }) => (
              <a
                key={href}
                href={href}
                {...(blank ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="inline-flex items-center gap-3 text-sm text-[var(--fg)] underline-offset-2 transition-colors hover:text-[var(--brand)] hover:underline"
              >
                <span className="text-base" aria-hidden>{icon}</span>
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-24 max-w-5xl border-t border-[var(--border)] px-8 pt-8">
        <p className="text-xs text-[var(--fg-muted)]">© 2026 Nam Euiseo.</p>
      </div>
    </section>
  );
}
