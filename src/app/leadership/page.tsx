import { TypePageList } from "@/components/sections/TypePageList";
import { DetailHeader } from "@/components/nav/DetailHeader";

export default function LeadershipPage() {
  return (
    <>
      <DetailHeader />
      <main className="min-h-screen pt-20 pb-16">
        <section className="mx-auto max-w-5xl px-8">
          <h1 className="mb-8 text-2xl font-semibold text-[var(--fg)]">Leadership</h1>
          <TypePageList type="Leadership" />
        </section>
      </main>
    </>
  );
}
