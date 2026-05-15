"use client";

import Image from "next/image";
import { useI18n } from "@/i18n";

interface HeroBannerProps {
  logoSrc: string;
  restaurantName: string;
  tagline: string;
  hours: string;
  phone: string;
  address: string;
}

export function HeroBanner({ logoSrc, restaurantName, tagline, hours, phone, address }: HeroBannerProps) {
  const { t } = useI18n();

  return (
    <header className="text-center px-4 pt-6 pb-4">
      <Image
        src={logoSrc}
        alt={`${restaurantName} logo`}
        width={100}
        height={100}
        className="mx-auto w-auto h-auto"
        priority
      />
      <h1 className="font-heading text-2xl font-extrabold mt-2 text-[var(--color-text-primary)]">
        {restaurantName}
      </h1>
      <p className="text-sm text-gray-600 mt-1 px-2">{tagline}</p>
      <div className="mt-3 flex flex-col gap-1 text-sm text-gray-500">
        <span>🕐 {hours}</span>
        <a
          href={`https://wa.me/52${phone}?text=${encodeURIComponent(t("whatsapp.message"))}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-accent-olive)] font-medium hover:underline"
          aria-label={t("hero.callToAction", { name: restaurantName })}
        >
          💬 {phone}
        </a>
        <span className="text-xs px-4 leading-relaxed">{address}</span>
      </div>
    </header>
  );
}
