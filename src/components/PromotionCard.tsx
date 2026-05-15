"use client";

import { Promotion } from "@/data/promotions";
import { useI18n } from "@/i18n";

export function PromotionCard({ promo }: Readonly<{ promo: Promotion }>) {
  const { locale, t } = useI18n();

  const title = locale === "en" ? promo.titleEn : promo.title;
  const desc = locale === "en" ? promo.descriptionEn : promo.description;
  const day = locale === "en" ? promo.dayEn : promo.day;
  const cta = locale === "en" ? promo.ctaEn : promo.cta;

  return (
    <article className="relative min-w-[280px] w-[85vw] max-w-[340px] flex-shrink-0 rounded-3xl overflow-hidden snap-center">
      {/* Background gradient (placeholder for photo) */}
      <div className={`absolute inset-0 bg-gradient-to-br ${promo.gradient}`} />

      {/* Content */}
      <div className="relative p-6 flex flex-col justify-between min-h-[220px]">
        {/* Top: badge + day */}
        <div className="flex items-center justify-between">
          <span className={`badge ${promo.badgeColor} backdrop-blur-sm`}>
            {locale === "en" ? promo.badgeEn : promo.badge}
          </span>
          <span className="text-xs font-medium text-white/60 uppercase tracking-wider">
            {day}
          </span>
        </div>

        {/* Bottom: info */}
        <div className="mt-auto">
          <h3 className="text-2xl font-bold text-white leading-tight">{title}</h3>
          <p className="text-sm text-white/70 mt-1 leading-relaxed">{desc}</p>

          <div className="flex items-center justify-between mt-4">
            <span className="text-2xl font-bold text-white">{promo.price}</span>
            <a
              href={`https://wa.me/529811695143?text=${encodeURIComponent(
                locale === "en"
                  ? `Hi! I'd like to order the ${promo.titleEn} promo (${promo.dayEn}) — ${promo.price} 🍣`
                  : `Hola! Me gustaría ordenar la promo ${promo.title} (${promo.day}) — ${promo.price} 🍣`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm text-white text-sm font-medium border border-white/20 hover:bg-white/25 transition-all active:scale-95"
            >
              {cta}
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
