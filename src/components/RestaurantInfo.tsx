"use client";

import { useI18n } from "@/i18n";

interface RestaurantInfoProps {
  phone: string;
  address: string;
  addressUrl: string;
  instagram: string;
  instagramUrl: string;
  hours: string;
}

export function RestaurantInfo({ phone, address, addressUrl, instagram, instagramUrl, hours }: RestaurantInfoProps) {
  const { t } = useI18n();

  return (
    <section id="contact" className="px-4 py-8 scroll-mt-36" aria-label={t("contact.section")}>
      <h2 className="font-heading text-2xl font-bold mb-4">{t("contact.title")}</h2>
      <div className="bg-[var(--color-surface)] rounded-xl p-5 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <div className="flex items-start gap-3">
          <span aria-hidden="true">💬</span>
          <a href={`https://wa.me/52${phone}?text=${encodeURIComponent(t("whatsapp.message"))}`} target="_blank" rel="noopener noreferrer" className="text-[#25D366] font-medium hover:underline">
            {phone} · {t("contact.whatsapp")}
          </a>
        </div>
        <div className="flex items-start gap-3">
          <span aria-hidden="true">📍</span>
          <a href={addressUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
            {address}
          </a>
        </div>
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
          </svg>
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent-olive)] font-medium hover:underline">
            {instagram}
          </a>
        </div>
        <div className="flex items-start gap-3">
          <span aria-hidden="true">🕐</span>
          <span>{hours}</span>
        </div>
      </div>
    </section>
  );
}
