"use client";

import { MenuItem } from "@/data/types";
import { formatPrice } from "@/lib/format";
import { useI18n } from "@/i18n";

interface ItemCardProps {
  item: MenuItem;
}

export function ItemCard({ item }: Readonly<ItemCardProps>) {
  const { locale } = useI18n();
  const desc = locale === "en" ? (item.descriptionEn ?? item.description) : item.description;

  return (
    <article className="group flex justify-between items-start gap-4 py-4 border-b border-[var(--color-border)] last:border-b-0 transition-colors hover:bg-[var(--color-surface)]/30 -mx-2 px-2 rounded-lg">
      <div className="flex-1 min-w-0">
        <h4 className="text-[15px] font-medium text-[var(--color-text)] group-hover:text-[var(--color-accent-gold)] transition-colors">
          {item.name}
        </h4>
        {desc && (
          <p className="text-sm text-[var(--color-text-muted)] mt-1 leading-relaxed line-clamp-2">
            {desc}
          </p>
        )}
      </div>
      {item.price != null && (
        <span className="text-base font-semibold text-[var(--color-accent-gold)] whitespace-nowrap tabular-nums">
          {formatPrice(item.price)}
        </span>
      )}
    </article>
  );
}
