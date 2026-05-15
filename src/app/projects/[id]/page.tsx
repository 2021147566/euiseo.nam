import { notFound } from "next/navigation";
import { allCards } from "@/data/portfolio";
import { TagChip } from "@/components/ui/TagChip";
import { DetailHeader } from "@/components/nav/DetailHeader";
import { tokens } from "@/tokens/design-tokens";
import { cn } from "@/lib/utils";
import type { ProjectContent } from "@/content/projects/types";

const contentMap: Record<string, () => Promise<{ default: ProjectContent }>> = {
  "ysal-dashboard": () => import("@/content/projects/ysal-dashboard"),
  "unimade":        () => import("@/content/projects/unimade"),
  "umc-msmg":       () => import("@/content/projects/umc-msmg"),
  "workstation":    () => import("@/content/projects/workstation"),
  "lgaimers":       () => import("@/content/projects/lgaimers"),
};

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return Object.keys(contentMap).map((id) => ({ id }));
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const card = allCards.find((c) => c.id === id && c.type === "Project");
  if (!card || !contentMap[id]) notFound();

  const { default: projectContent } = await contentMap[id]();
  const typeBadge = tokens.color.cardType["Project"];
  const hasContent = projectContent.blocks.length > 0;

  return (
    <>
      <DetailHeader />
    <main className="min-h-screen pt-20 pb-16">
      <article className="mx-auto max-w-2xl px-6">

        {/* ── Header ─────────────────────────────── */}
        <header className="mb-10">
          <div className="mb-3 flex items-center gap-2">
            <span className={cn("inline-flex items-center rounded border px-1.5 py-0.5 text-[11px] font-semibold", typeBadge)}>
              프로젝트
            </span>
            {card.period && (
              <span className="text-xs text-[var(--fg-muted)]">{card.period}</span>
            )}
          </div>

          <h1 className="mb-1 text-2xl font-bold leading-tight text-[var(--fg)]">
            {card.formalTitle ?? card.compactTitle}
          </h1>
          <p className="text-base font-medium text-[var(--brand)]">{card.subtitle}</p>

          <p className="mt-4 text-sm leading-relaxed text-[var(--fg-muted)]">{card.achievement}</p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {card.tags.map((tag) => (
              <TagChip key={tag} tag={tag} />
            ))}
          </div>

          {card.link && (
            <a
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--brand)] underline-offset-2 hover:underline"
            >
              {card.linkLabel ?? card.link} ↗
            </a>
          )}
        </header>

        {/* ── Details (항상 표시) ─────────────────── */}
        <section className="mb-12 rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
          <dl className="space-y-5">
            {card.details.map((item) => (
              <div key={item.label}>
                <dt className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-[var(--fg-muted)]">
                  {item.label}
                </dt>
                <dd className="text-sm leading-relaxed text-[var(--fg)]">{item.content}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ── Content blocks ──────────────────────── */}
        <section>
          <h2 className="mb-6 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--fg-muted)]">
            상세 내용
          </h2>

          {hasContent ? (
            <div className="space-y-6">
              {projectContent.blocks.map((block, i) => {
                if (block.type === "heading") {
                  return (
                    <h3 key={i} className="text-lg font-semibold text-[var(--fg)]">
                      {block.content}
                    </h3>
                  );
                }
                if (block.type === "text") {
                  return (
                    <p key={i} className="text-sm leading-relaxed text-[var(--fg)]">
                      {block.content}
                    </p>
                  );
                }
                if (block.type === "image" && block.src) {
                  return (
                    <figure key={i} className="space-y-2">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={block.src}
                        alt={block.alt ?? ""}
                        className="w-full rounded-lg border border-[var(--border)]"
                      />
                      {block.caption && (
                        <figcaption className="text-center text-xs text-[var(--fg-muted)]">
                          {block.caption}
                        </figcaption>
                      )}
                    </figure>
                  );
                }
                if (block.type === "pdf" && block.pdfSrc) {
                  return (
                    <a
                      key={i}
                      href={block.pdfSrc}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-sm font-medium text-[var(--brand)] transition-colors hover:bg-[var(--hover)]"
                    >
                      <span>📄</span>
                      {block.pdfLabel ?? "PDF 보기"} ↗
                    </a>
                  );
                }
                if (block.type === "divider") {
                  return <hr key={i} className="border-[var(--border)]" />;
                }
                return null;
              })}
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-[var(--border)] bg-[var(--muted)] px-6 py-12 text-center">
              <p className="text-sm text-[var(--fg-muted)]">내용을 정리 중입니다. 곧 업데이트될 예정입니다.</p>
            </div>
          )}
        </section>
      </article>
    </main>
    </>
  );
}
