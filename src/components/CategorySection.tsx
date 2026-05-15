"use client";

import { Category } from "@/data/types";
import { ItemCard } from "./ItemCard";
import { localize } from "@/lib/localize";
import { useI18n } from "@/i18n";

interface CategorySectionProps {
  category: Category;
}

export function CategorySection({ category }: Readonly<CategorySectionProps>) {
  const { locale, t } = useI18n();
  const desc = localize(category, "description", locale);
  const translationKey = t(`category.${category.id}`);
  const name = translationKey === `category.${category.id}` ? category.name : translationKey;

  return (
    <section id={category.id} className="scroll-mt-24">
      <div className="flex items-center gap-3 mb-3">
        <h2 className="text-2xl font-bold text-[var(--color-text)]">
          {name}
        </h2>
        <div className="flex-1 h-px bg-[var(--color-border)]" />
      </div>
      {desc && (
        <p className="text-sm text-[var(--color-text-muted)] mb-4 italic">
          {desc}
        </p>
      )}
      <div className="bg-[var(--color-bg-card)] rounded-2xl p-4 border border-[var(--color-border)]">
        {category.items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
