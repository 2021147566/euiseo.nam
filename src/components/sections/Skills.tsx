"use client";
import { skills } from "@/data/portfolio";
import { useLanguage } from "@/hooks/useLanguage";

function SkillGroup({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-[var(--fg-muted)]">
        {label}
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-lg border border-[var(--border)] bg-[var(--card)] px-3 py-1 text-sm text-[var(--fg)] shadow-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  const { t } = useLanguage();
  return (
    <section id="skills" className="py-24" aria-label="기술 스택">
      <div className="mx-auto max-w-5xl px-8">
        <h2 className="mb-10 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--fg-muted)]">
          {t.skills.heading}
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          <SkillGroup label={t.skills.languages} items={skills.languages} />
          <SkillGroup label={t.skills.mlData}    items={skills.mlData}    />
          <SkillGroup label={t.skills.llmAi}     items={skills.llmAi}     />
          <SkillGroup label={t.skills.frontend}  items={skills.frontend}  />
          <SkillGroup label={t.skills.infra}     items={skills.infra}     />
          <SkillGroup label={t.skills.tools}     items={skills.tools}     />
        </div>
      </div>
    </section>
  );
}
