"use client";

import { Promotion } from "@/data/promotions";
import { useI18n } from "@/i18n";

export function PromotionCard({ promo }: Readonly<{ promo: Promotion }>) {
  const { locale, t } = useI18n();

  const title = locale === "en" ? promo.titleEn : promo.title;
  const desc = locale === "en" ? promo.descriptionEn : promo.description;
  const day = locale === "en" ? promo.dayEn : promo.day;
  const cta = locale === "en" ? promo.ctaEn : promo.cta;
  const badge = locale === "en" ? promo.badgeEn : promo.badge;

  return (
    <article className="relative min-w-[270px] w-[80vw] max-w-[320px] flex-shrink-0 snap-center bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl p-5 flex flex-col justify-between gap-4 transition-all duration-200 hover:border-[var(--color-text-muted)] hover:-translate-y-0.5">
      {/* Top row: day + badge */}
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">
          {day}
        </span>
        <span className={`text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-md ${promo.badgeColor}`}>
          {badge}
        </span>
      </div>

      {/* Title + description */}
      <div>
        <h3 className="text-xl font-bold text-[var(--color-text)] leading-tight">{title}</h3>
        <p className="text-sm text-[var(--color-text-muted)] mt-2 leading-relaxed">{desc}</p>
      </div>

      {/* Price + CTA */}
      <div className="flex items-center justify-between pt-2 border-t border-[var(--color-border)]">
        <span className="text-2xl font-bold text-[var(--color-accent-gold)]">{promo.price}</span>
        <a
          href={`https://wa.me/529811695143?text=${encodeURIComponent(
            locale === "en"
              ? `Hi! I'd like to order the ${promo.titleEn} promo (${promo.dayEn}) — ${promo.price} 🍣`
              : `Hola! Me gustaría ordenar la promo ${promo.title} (${promo.day}) — ${promo.price} 🍣`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium text-[var(--color-text-secondary)] px-3 py-1.5 rounded-lg border border-[var(--color-border)] hover:text-[var(--color-text)] hover:border-[var(--color-text-muted)] transition-all active:scale-95"
        >
          {cta}
        </a>
      </div>
    </article>
  );
}
