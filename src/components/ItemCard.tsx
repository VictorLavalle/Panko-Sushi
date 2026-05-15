"use client";

import { MenuItem } from "@/data/types";
import { formatPrice } from "@/lib/format";
import { useI18n } from "@/i18n";

const tagConfig: Record<string, { label: string; labelEn: string; color: string }> = {
  popular: { label: "Más pedido", labelEn: "Popular", color: "bg-amber-500/15 text-amber-500 dark:text-amber-400" },
  new: { label: "Nuevo", labelEn: "New", color: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400" },
  spicy: { label: "Picante", labelEn: "Spicy", color: "bg-red-500/15 text-red-600 dark:text-red-400" },
  chef: { label: "Del Chef", labelEn: "Chef's Choice", color: "bg-purple-500/15 text-purple-600 dark:text-purple-400" },
  shareable: { label: "Para compartir", labelEn: "Shareable", color: "bg-pink-500/15 text-pink-600 dark:text-pink-400" },
  house: { label: "De la casa", labelEn: "House Favorite", color: "bg-amber-500/15 text-amber-600 dark:text-amber-400" },
};

export function ItemCard({ item }: Readonly<{ item: MenuItem }>) {
  const { locale } = useI18n();
  const desc = locale === "en" ? (item.descriptionEn ?? item.description) : item.description;
  const tag = item.tag ? tagConfig[item.tag] : null;

  return (
    <article className="group flex justify-between items-start gap-4 py-4 border-b border-[var(--color-border)] last:border-b-0 transition-colors hover:bg-[var(--color-surface)]/30 -mx-2 px-2 rounded-lg">
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <h4 className="text-[15px] font-medium text-[var(--color-text)] group-hover:text-[var(--color-accent-gold)] transition-colors">
            {item.name}
          </h4>
          {tag && (
            <span className={`text-[10px] font-semibold uppercase tracking-wide px-1.5 py-0.5 rounded ${tag.color}`}>
              {locale === "en" ? tag.labelEn : tag.label}
            </span>
          )}
        </div>
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
