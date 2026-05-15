"use client";

import { promotions } from "@/data/promotions";
import { PromotionCard } from "./PromotionCard";
import { useI18n } from "@/i18n";

export function PromotionsSection() {
  const { t } = useI18n();

  return (
    <section className="py-6" aria-label={t("promotions.section")}>
      <div className="px-4 mb-4 flex items-center gap-3">
        <h2 className="text-xl font-bold text-[var(--color-text)]">
          {t("promotions.title")}
        </h2>
        <div className="flex-1 h-px bg-[var(--color-border)]" />
      </div>

      <div className="flex gap-4 px-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2">
        {promotions.map((promo) => (
          <PromotionCard key={promo.id} promo={promo} />
        ))}
      </div>
    </section>
  );
}
