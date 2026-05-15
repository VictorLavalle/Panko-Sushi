"use client";

import { useI18n } from "@/i18n";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";

interface RestaurantInfoProps {
  phone: string;
  address: string;
  addressUrl: string;
  instagram: string;
  instagramUrl: string;
  facebook: string;
  facebookUrl: string;
  hours: string;
}

export function RestaurantInfo({ phone, address, addressUrl, instagram, instagramUrl, facebook, facebookUrl, hours }: Readonly<RestaurantInfoProps>) {
  const { t } = useI18n();

  return (
    <section id="contact" className="px-4 py-10 scroll-mt-24" aria-label={t("contact.section")}>
      <h2 className="text-2xl font-bold mb-5 text-[var(--color-text)]">{t("contact.title")}</h2>
      <div className="bg-[var(--color-bg-card)] rounded-2xl p-5 border border-[var(--color-border)] grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <div className="flex items-center gap-3">
          <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
          <a href={buildWhatsAppUrl(phone, t("whatsapp.message"))} target="_blank" rel="noopener noreferrer" className="text-[#25D366] font-medium hover:underline">
            {phone}
          </a>
        </div>
        <div className="flex items-center gap-3">
          <svg className="w-5 h-5 text-[var(--color-text-muted)] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          <a href={addressUrl} target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">
            {address}
          </a>
        </div>
        <div className="flex items-center gap-3">
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[var(--color-text-secondary)] font-medium hover:text-[var(--color-text)] transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            {instagram}
          </a>
        </div>
        <div className="flex items-center gap-3">
          <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[var(--color-text-secondary)] font-medium hover:text-[var(--color-text)] transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            {facebook}
          </a>
        </div>
        <div className="flex items-center gap-3">
          <svg className="w-5 h-5 text-[var(--color-text-muted)] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-[var(--color-text-secondary)]">{t("hero.hours")}</span>
        </div>
      </div>
    </section>
  );
}
