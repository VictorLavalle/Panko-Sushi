"use client";

import { Promotion } from "@/data/promotions";
import { useI18n } from "@/i18n";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { localize } from "@/lib/localize";
import { menuData } from "@/data/menu-data";

export function PromotionCard({ promo }: Readonly<{ promo: Promotion }>) {
  const { locale } = useI18n();

  const title = localize(promo, "title", locale);
  const desc = localize(promo, "description", locale);
  const day = localize(promo, "day", locale);
  const cta = localize(promo, "cta", locale);

  const message = locale === "en"
    ? `Hi! I'd like to order the ${promo.titleEn} promo (${promo.dayEn}) — ${promo.price} 🍣`
    : `Hola! Me gustaría ordenar la promo ${promo.title} (${promo.day}) — ${promo.price} 🍣`;

  return (
    <article className="relative min-w-[270px] w-[80vw] max-w-[320px] flex-shrink-0 snap-center rounded-2xl p-5 flex flex-col justify-between gap-4 transition-all duration-200 hover:border-[var(--color-text-muted)] bg-[var(--color-bg-card)] border border-[var(--color-border)]">
      <div className="text-right">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">
          {day}
        </span>
      </div>

      <div>
        <h3 className="text-xl font-bold text-[var(--color-text)] leading-tight">{title}</h3>
        <p className="text-[13px] text-[var(--color-text-muted)] mt-2 leading-relaxed">{desc}</p>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-[var(--color-border)]">
        <span className="text-2xl font-bold text-[var(--color-accent)]">{promo.price}</span>
        <a
          href={buildWhatsAppUrl(menuData.restaurant.phone, message)}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium text-[var(--color-accent)] px-3 py-1.5 rounded-full border border-[var(--color-accent)]/25 hover:bg-[var(--color-accent)]/10 transition-all active:scale-95"
        >
          {cta}
        </a>
      </div>
    </article>
  );
}
