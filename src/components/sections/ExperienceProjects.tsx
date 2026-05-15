"use client";
import { useState } from "react";
import { allCards } from "@/data/portfolio";
import { Card } from "@/components/ui/Card";
import { TagChip } from "@/components/ui/TagChip";
import { ALL_TAGS, CardType, TagLabel } from "@/tokens/design-tokens";
import { useLanguage } from "@/hooks/useLanguage";
import { cn } from "@/lib/utils";

const TYPES: Array<CardType | "All"> = ["All", "Experience", "Project", "Leadership", "Award"];
const isHiddenDetailLabel = (label: string) => {
  const normalized = label.trim().toLowerCase();
  return normalized === "배경/문제" || normalized === "background/problem";
};

export function ExperienceProjects() {
  const { t } = useLanguage();
  const [selectedTags, setSelectedTags] = useState<TagLabel[]>([]);
  const [typeFilter, setTypeFilter]     = useState<CardType | "All">("All");
  const [expandedId, setExpandedId]     = useState<string | null>(null);

  function toggleTag(tag: TagLabel) {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((x) => x !== tag) : [...prev, tag],
    );
  }

  function handleExpand(id: string) {
    setExpandedId((prev) => (prev === id ? null : id));
  }

  function reset() {
    setSelectedTags([]);
    setTypeFilter("All");
    setExpandedId(null);
  }

  const filtered = allCards.filter((card) => {
    const typeMatch = typeFilter === "All" || card.type === typeFilter;
    const tagMatch  = selectedTags.length === 0 || selectedTags.every((tag) => card.tags.includes(tag));
    return typeMatch && tagMatch;
  });

  const primaryCards = filtered.filter(
    (card) => card.type === "Experience" || card.type === "Project",
  );
  const secondaryItems = filtered.filter(
    (card) => card.type === "Leadership" || card.type === "Award",
  );

  const typeLabel = (v: CardType | "All") =>
    v === "All" ? t.filter.all : t.cardType[v];

  return (
    <section id="experience" className="py-24" aria-label="경험 및 프로젝트">
      <div className="mx-auto max-w-5xl px-8">
        <h2 className="mb-8 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--fg-muted)]">
          {t.experience.heading}
        </h2>

        {/* ── Type filter pills ───────────────────────── */}
        <div className="mb-5 flex flex-wrap gap-2" role="group" aria-label="카드 유형 필터">
          {TYPES.map((v) => (
            <button
              key={v}
              onClick={() => { setTypeFilter(v); setExpandedId(null); }}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                typeFilter === v
                  ? "bg-[var(--brand)] text-white"
                  : "border border-[var(--border)] bg-[var(--card)] text-[var(--fg)] hover:bg-[var(--hover)]",
              )}
            >
              {typeLabel(v)}
            </button>
          ))}
        </div>

        {/* ── Tag chip filter ─────────────────────────── */}
        <div className="mb-3 flex flex-wrap gap-2" role="group" aria-label="태그 필터">
          {ALL_TAGS.map((tag) => (
            <TagChip
              key={tag}
              tag={tag}
              size="md"
              active={selectedTags.includes(tag)}
              onClick={toggleTag}
            />
          ))}
          {(selectedTags.length > 0 || typeFilter !== "All") && (
            <button
              onClick={reset}
              className="rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1 text-sm text-[var(--fg)] transition-colors hover:bg-[var(--hover)]"
            >
              {t.filter.reset}
            </button>
          )}
        </div>

        {selectedTags.length > 0 && (
          <p className="mb-5 text-xs text-[var(--fg-muted)]">{t.experience.andFilter}</p>
        )}

        {/* ── Primary cards (Experience/Project) ─────── */}
        {filtered.length > 0 ? (
          <div className="space-y-10">
            {primaryCards.length > 0 && (
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--fg-muted)]">
                  {t.cardType.Experience} / {t.cardType.Project}
                </p>
                <div className="grid items-start gap-4 md:grid-cols-2">
                  {primaryCards.map((card) => (
                    <Card
                      key={card.id}
                      {...card}
                      onTagClick={toggleTag}
                      activeTags={selectedTags}
                      expanded={expandedId === card.id}
                      onExpand={handleExpand}
                    />
                  ))}
                </div>
              </div>
            )}

            {secondaryItems.length > 0 && (
              <div id="rewards-leadership" className="scroll-mt-24 space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--fg-muted)]">
                  {t.cardType.Leadership} / {t.cardType.Award}
                </p>
                <div className="divide-y divide-[var(--border)] rounded-xl border border-[var(--border)] bg-[var(--card)]">
                  {secondaryItems.map((item) => {
                    const isExpanded = expandedId === item.id;
                    return (
                      <div key={item.id} className="px-4 py-3">
                        <button
                          onClick={() => handleExpand(item.id)}
                          className="w-full text-left"
                          aria-expanded={isExpanded}
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="space-y-1">
                              <p className="text-sm font-semibold text-[var(--fg)]">{item.compactTitle}</p>
                              <p className="text-xs text-[var(--fg-muted)]">{item.subtitle}</p>
                            </div>
                            <div className="flex shrink-0 flex-col items-end gap-1">
                              <span className="text-xs text-[var(--fg-muted)]">{item.period}</span>
                              {item.link && (
                                <a
                                  href={item.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={(e) => e.stopPropagation()}
                                  className="text-xs font-medium text-[var(--brand)] hover:underline"
                                >
                                  {item.linkLabel ?? item.link} ↗
                                </a>
                              )}
                            </div>
                          </div>
                          <p className="mt-1.5 line-clamp-1 text-sm text-[var(--fg-muted)]">{item.achievement}</p>
                        </button>

                        {isExpanded && (
                          <div className="mt-3 border-t border-[var(--border)] pt-3">
                            <dl className="space-y-2">
                              {item.details.filter((d) => !isHiddenDetailLabel(d.label)).map((d) => (
                                <div key={d.label}>
                                  <dt className="text-[11px] font-semibold uppercase tracking-wide text-[var(--fg-muted)]">
                                    {d.label}
                                  </dt>
                                  <dd className="text-sm leading-relaxed text-[var(--fg)]">{d.content}</dd>
                                </div>
                              ))}
                            </dl>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--muted)] py-16 text-center">
            <p className="text-sm text-[var(--fg-muted)]">{t.experience.noResults}</p>
            <button
              onClick={reset}
              className="rounded-lg bg-[var(--brand)] px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              {t.experience.resetAll}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
