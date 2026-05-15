"use client";
import { education, skills } from "@/data/portfolio";
import { useLanguage } from "@/hooks/useLanguage";

export function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-24" aria-label="학력 및 자격증">
      <div className="mx-auto max-w-5xl px-8">
        <h2 className="mb-10 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--fg-muted)]">
          {t.education.heading}
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Education */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-[var(--fg-muted)]">
              {t.education.educationLabel}
            </h3>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm"
                >
                  <div className="mb-1 flex items-start justify-between gap-2">
                    <p className="text-sm font-semibold text-[var(--fg)]">{edu.school}</p>
                    <span className="shrink-0 text-xs text-[var(--fg-muted)]">{edu.period}</span>
                  </div>
                  <p className="text-sm font-medium text-[var(--brand)]">{edu.degree}</p>
                  {edu.note && (
                    <p className="mt-1.5 text-xs text-[var(--fg-muted)]">{edu.note}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-[var(--fg-muted)]">
              {t.education.certifications}
            </h3>
            <div className="space-y-3">
              {skills.certs.map((cert) => (
                <div
                  key={cert}
                  className="rounded-xl border border-[var(--border)] bg-[var(--card)] px-5 py-4 shadow-sm"
                >
                  <p className="text-sm font-medium text-[var(--fg)]">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
