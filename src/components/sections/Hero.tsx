"use client";
import Image from "next/image";
import { personal } from "@/data/portfolio";
import { useLanguage } from "@/hooks/useLanguage";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      aria-label="소개"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Subtle background accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full bg-[var(--brand)]/5 animate-float-slow"
      />

      <div className="relative mx-auto max-w-5xl px-8">
        <div className="flex min-h-screen items-center gap-12 py-12">
        {/* ── Text ──────────────────────────────────── */}
          <div className="flex-1 space-y-6">
          {/* Name */}
          <div>
            <h1 className="text-[3.5rem] font-bold leading-none tracking-tight text-[var(--fg)]">
              {personal.nameEn}
            </h1>
            <p className="mt-1.5 text-lg font-medium text-[var(--fg-muted)]">
              {personal.nameKo}
            </p>
          </div>

          {/* Tagline */}
          <div className="space-y-1">
            <p className="text-[1.4rem] font-semibold text-[var(--fg)]">
              {personal.tagline}
            </p>
            <p className="whitespace-pre-line text-base leading-relaxed text-[var(--fg-muted)]">
              {personal.taglineSub}
            </p>
          </div>

          {/* Education + Contact (2 rows) */}
          <div className="space-y-2.5">
            <div className="flex flex-wrap items-center gap-2.5">
              {[t.hero.educationBs, t.hero.educationMs].map((label) => (
                <div
                  key={label}
                  className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-3.5 py-1.5 text-sm text-[var(--fg)]"
                >
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[var(--brand-3)]" />
                  {label}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-3.5 py-1.5 text-sm font-medium text-[var(--fg)] transition-colors hover:border-[var(--brand-3)] hover:bg-[var(--hover)]"
              >
                ✉ {t.hero.email}
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-3.5 py-1.5 text-sm font-medium text-[var(--fg)] transition-colors hover:border-[var(--brand-3)] hover:bg-[var(--hover)]"
              >
                in {t.hero.linkedin}
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-3.5 py-1.5 text-sm font-medium text-[var(--fg)] transition-colors hover:border-[var(--brand-3)] hover:bg-[var(--hover)]"
              >
                ⌥ {t.hero.github}
              </a>
            </div>
          </div>

          </div>

          {/* ── Profile photo ─────────────────────────── */}
          <div className="shrink-0">
            <div className="relative h-64 w-48 overflow-hidden rounded-2xl border border-[var(--border)] shadow-[0_8px_32px_rgb(0_0_0/.12)] dark:shadow-[0_8px_32px_rgb(0_0_0/.4)]">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-10 rounded-2xl ring-1 ring-[var(--brand-3)]/30"
              />
              <Image
                src="/profile-original.jpeg"
                alt="Nam Euiseo 프로필 사진"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
