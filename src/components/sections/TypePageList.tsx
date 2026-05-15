"use client";

import { useState } from "react";
import { allCards } from "@/data/portfolio";
import { Card } from "@/components/ui/Card";
import { CardType } from "@/tokens/design-tokens";

interface TypePageListProps {
  type: CardType;
}

export function TypePageList({ type }: TypePageListProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const cards = allCards.filter((card) => card.type === type);

  return (
    <div className="space-y-4">
      {cards.map((card) => (
        <Card
          key={card.id}
          {...card}
          expanded={expandedId === card.id}
          onExpand={(id) => setExpandedId((prev) => (prev === id ? null : id))}
        />
      ))}
    </div>
  );
}
