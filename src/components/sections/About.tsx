
"use client";
import { useLanguage } from "@/hooks/useLanguage";

export function About() {
  const { t } = useLanguage();
  return (
    <section id="about" className="pt-8 pb-20" aria-label="소개">
      <div className="mx-auto max-w-5xl px-8">
        <h2 className="mb-10 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--fg-muted)]">
          {t.about.heading}
        </h2>
        <div className="max-w-2xl space-y-4">
          {t.about.paragraphs.map((para, i) => (
            <p key={i} className="text-base leading-relaxed text-[var(--fg)]">
              {para}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
