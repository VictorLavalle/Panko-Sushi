"use client";

import { useEffect, useRef } from "react";
import { Category } from "@/data/types";
import { calculatePillScrollOffset } from "@/lib/pill-scroll";
import { useI18n } from "@/i18n";

interface CategoryNavigationProps {
  categories: Category[];
  activeCategory: string;
  onCategorySelect: (categoryId: string) => void;
}

export function CategoryNavigation({ categories, activeCategory, onCategorySelect }: Readonly<CategoryNavigationProps>) {
  const { t } = useI18n();
  const containerRef = useRef<HTMLDivElement>(null);
  const pillRefs = useRef<Map<string, HTMLAnchorElement>>(new Map());

  useEffect(() => {
    const container = containerRef.current;
    const pill = pillRefs.current.get(activeCategory);
    if (!container || !pill) return;

    const offset = calculatePillScrollOffset(pill.offsetLeft, pill.offsetWidth, container.offsetWidth);
    container.scrollTo({ left: offset, behavior: "smooth" });
  }, [activeCategory]);

  return (
    <nav
      aria-label={t("nav.categories")}
      className="sticky top-0 z-20 glass border-b border-[var(--color-border)]"
    >
      <div
        ref={containerRef}
        className="flex gap-2 px-4 py-3 overflow-x-auto scrollbar-hide md:justify-center"
      >
        {categories.map((cat) => (
          <a
            key={cat.id}
            ref={(el) => { if (el) pillRefs.current.set(cat.id, el); }}
            href={`#${cat.id}`}
            onClick={(e) => { e.preventDefault(); onCategorySelect(cat.id); }}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 min-h-[44px] flex items-center touch-manipulation select-none ${
              activeCategory === cat.id
                ? "bg-[var(--color-accent)] text-white shadow-md shadow-[var(--color-accent)]/20"
                : "bg-[var(--color-surface)] text-[var(--color-text-secondary)] border border-[var(--color-border)] hover:text-[var(--color-text)] hover:border-[var(--color-text-muted)]"
            }`}
            aria-current={activeCategory === cat.id ? "page" : undefined}
          >
            {t(`category.${cat.id}`) !== `category.${cat.id}` ? t(`category.${cat.id}`) : cat.name}
          </a>
        ))}
      </div>
    </nav>
  );
}
