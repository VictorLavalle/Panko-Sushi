"use client";

import { MenuItem } from "@/data/types";
import { formatPrice } from "@/lib/format";

interface ItemCardProps {
  item: MenuItem;
}

export function ItemCard({ item }: ItemCardProps) {
  return (
    <article className="flex justify-between items-start gap-4 py-3 border-b border-gray-100 last:border-b-0">
      <div className="flex-1 min-w-0">
        <h4 className="text-base font-medium text-[var(--color-text-primary)]">
          {item.name}
        </h4>
        {item.description && (
          <p className="text-sm text-gray-600 mt-0.5 leading-snug">
            {item.description}
          </p>
        )}
      </div>
      {item.price != null && (
        <span className="text-base font-semibold text-[var(--color-accent-olive)] whitespace-nowrap">
          {formatPrice(item.price)}
        </span>
      )}
    </article>
  );
}
