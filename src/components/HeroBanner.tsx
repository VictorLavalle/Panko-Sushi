"use client";

import Image from "next/image";
import { useI18n } from "@/i18n";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";

interface HeroBannerProps {
  logoSrc: string;
  restaurantName: string;
  tagline: string;
  hours: string;
  phone: string;
  address: string;
  addressUrl: string;
}

export function HeroBanner({ logoSrc, restaurantName, tagline, hours, phone, address, addressUrl }: Readonly<HeroBannerProps>) {
  const { t } = useI18n();

  return (
    <header className="relative text-center px-6 pt-12 pb-10 grain">
      <h1 className="sr-only">{restaurantName} - {tagline}</h1>

      <div className="mx-auto mb-6">
        <Image
          src={logoSrc}
          alt={`${restaurantName} logo`}
          width={120}
          height={120}
          className="w-auto h-auto mx-auto drop-shadow-sm"
          priority
        />
      </div>

      <p className="text-[var(--color-text-secondary)] text-base leading-relaxed tracking-wide">
        {t("hero.tagline")}
      </p>

      <div className="mt-5 flex flex-wrap justify-center gap-3 text-sm">
        <span className="text-[var(--color-text-muted)] text-xs">
          {t("hero.hours")}
        </span>
        <span className="text-[var(--color-border)]">·</span>
        <a
          href={buildWhatsAppUrl(phone, t("whatsapp.message"))}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[#25D366] text-xs font-medium transition-all hover:opacity-80"
          aria-label={t("hero.callToAction", { name: restaurantName })}
        >
          <WhatsAppIcon className="w-3.5 h-3.5" />
          WhatsApp
        </a>
      </div>

      <a href={addressUrl} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-[11px] text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors">
        {address}
      </a>
    </header>
  );
}
