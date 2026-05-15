"use client";

import { Promotion } from "@/data/promotions";
import { useI18n } from "@/i18n";

export function PromotionCard({ promo }: Readonly<{ promo: Promotion }>) {
  const { locale } = useI18n();

  const title = locale === "en" ? promo.titleEn : promo.title;
  const desc = locale === "en" ? promo.descriptionEn : promo.description;
  const day = locale === "en" ? promo.dayEn : promo.day;
  const cta = locale === "en" ? promo.ctaEn : promo.cta;
  const badge = locale === "en" ? promo.badgeEn : promo.badge;

  return (
    <article className="relative min-w-[270px] w-[80vw] max-w-[320px] flex-shrink-0 snap-center rounded-2xl p-5 flex flex-col justify-between gap-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:shadow-black/5 bg-[#f0e9e0] border border-[#e2d9cf]">
      {/* Top row: day + badge */}
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-[#9a8e82]">
          {day}
        </span>
        <span className={`text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-md ${promo.badgeColor}`}>
          {badge}
        </span>
      </div>

      {/* Title + description */}
      <div>
        <h3 className="text-xl font-bold text-[#2c2926] leading-tight">{title}</h3>
        <p className="text-[13px] text-[#7a6f64] mt-2 leading-relaxed">{desc}</p>
      </div>

      {/* Price + CTA */}
      <div className="flex items-center justify-between pt-3 border-t border-[#ddd3c8]">
        <span className="text-2xl font-bold text-[#e9835a]">{promo.price}</span>
        <a
          href={`https://wa.me/529811695143?text=${encodeURIComponent(
            locale === "en"
              ? `Hi! I'd like to order the ${promo.titleEn} promo (${promo.dayEn}) — ${promo.price} 🍣`
              : `Hola! Me gustaría ordenar la promo ${promo.title} (${promo.day}) — ${promo.price} 🍣`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium text-[#e9835a] px-3 py-1.5 rounded-full border border-[#e9835a]/30 hover:bg-[#e9835a]/10 transition-all active:scale-95"
        >
          {cta}
        </a>
      </div>
    </article>
  );
}
