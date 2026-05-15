"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { CardType, TagLabel, tokens } from "@/tokens/design-tokens";
import { DetailItem } from "@/data/portfolio";
import { TagChip } from "./TagChip";
import { useLanguage } from "@/hooks/useLanguage";

const isHiddenDetailLabel = (label: string) => {
  const normalized = label.trim().toLowerCase();
  return normalized === "배경/문제" || normalized === "background/problem";
};

interface CardProps {
  id: string;
  type: CardType;
  compactTitle: string;
  formalTitle?: string;
  subtitle: string;
  period: string;
  achievement: string;
  details: DetailItem[];
  tags: TagLabel[];
  link?: string;
  linkLabel?: string;
  onTagClick?: (tag: TagLabel) => void;
  activeTags?: TagLabel[];
  expanded?: boolean;
  onExpand?: (id: string) => void;
}

export function Card({
  id, type, compactTitle, formalTitle, subtitle, period, achievement, details, tags,
  link, linkLabel, onTagClick, activeTags = [], expanded = false, onExpand,
}: CardProps) {
  const { t } = useLanguage();
  const detailsId = `card-details-${id}`;
  const typeBadge = tokens.color.cardType[type];
  const typeLabel = t.cardType[type];

  return (
    <article
      className={cn(
        "flex flex-col rounded-xl border bg-[var(--card)] transition-all duration-200",
        expanded
          ? "border-[var(--brand-3)]/60"
          : "border-[var(--border)] hover:-translate-y-0.5 hover:border-[var(--brand-3)]/40",
      )}
    >
      {/* ── Compact header ─────────────────────────── */}
      <div className="p-4">
        <div className="mb-2.5 flex items-center justify-between gap-2">
          <span className={cn("inline-flex items-center rounded border px-1.5 py-0.5 text-[11px] font-semibold", typeBadge)}>
            {typeLabel}
          </span>
          {period && (
            <span className="shrink-0 text-[11px] text-[var(--fg-muted)]">{period}</span>
          )}
        </div>

        <h3 className="text-[15px] font-semibold leading-snug text-[var(--fg)]">
          {compactTitle}
        </h3>
        <p className="mt-0.5 truncate text-sm font-medium text-[var(--brand)]">{subtitle}</p>

        <p className="mt-2 line-clamp-1 text-sm text-[var(--fg-muted)]">{achievement}</p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {tags.slice(0, 5).map((tag) => (
            <TagChip key={tag} tag={tag} active={activeTags.includes(tag)} onClick={onTagClick} />
          ))}
        </div>

      </div>

      {/* ── Accordion detail ─────────────────────────── */}
      {expanded && (
        <div
          id={detailsId}
          role="region"
          aria-label={`${compactTitle} 상세`}
          className="border-t border-[var(--border)] px-4 pb-4 pt-3"
        >
          {formalTitle && formalTitle !== compactTitle && (
            <p className="mb-3 text-sm font-semibold text-[var(--fg)]">{formalTitle}</p>
          )}

          <dl className="space-y-3">
            {details.filter((item) => !isHiddenDetailLabel(item.label)).map((item) => (
              <div key={item.label}>
                <dt className="mb-0.5 text-[11px] font-semibold uppercase tracking-wider text-[var(--fg-muted)]">
                  {item.label}
                </dt>
                <dd className="text-sm leading-relaxed text-[var(--fg)]">{item.content}</dd>
              </div>
            ))}
          </dl>

        </div>
      )}

      {/* ── Bottom bar ─────────────────────────────────── */}
      {type === "Project" ? (
        <div className="mt-auto flex items-center justify-between gap-2 border-t border-[var(--border)] px-5 py-2">
          <span className="min-w-0">
            {link ? (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-[var(--brand)] underline-offset-2 hover:underline"
              >
                {linkLabel ?? link} ↗
              </a>
            ) : (
              <span />
            )}
          </span>
          <Link
            href={`/projects/${id}`}
            className="inline-flex items-center gap-1 text-xs font-medium text-[var(--fg-muted)] transition-colors hover:text-[var(--brand)]"
          >
            자세히 보기 →
          </Link>
        </div>
      ) : (
        <button
          onClick={() => onExpand?.(id)}
          aria-expanded={expanded}
          aria-controls={expanded ? detailsId : undefined}
          className={cn(
            "mt-auto flex items-center justify-between gap-2 border-t border-[var(--border)] px-5 py-2",
            "text-xs font-medium text-[var(--fg-muted)] transition-colors hover:text-[var(--brand)]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-3)] focus-visible:ring-offset-1",
          )}
        >
          <span className="min-w-0">
            {link ? (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-xs font-medium text-[var(--brand)] underline-offset-2 hover:underline"
              >
                {linkLabel ?? link} ↗
              </a>
            ) : (
              <span />
            )}
          </span>
          <span className="inline-flex items-center gap-1">
            {expanded ? t.experience.hideDetails : t.experience.viewDetails}
            <span className="text-[9px]" aria-hidden>{expanded ? "▲" : "▼"}</span>
          </span>
        </button>
      )}
    </article>
  );
}
