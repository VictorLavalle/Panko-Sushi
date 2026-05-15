"use client";

import { useI18n } from "@/i18n";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./WhatsAppIcon";

interface FloatingWhatsAppProps {
  phone: string;
}

export function FloatingWhatsApp({ phone }: Readonly<FloatingWhatsAppProps>) {
  const { t } = useI18n();

  return (
    <a
      href={buildWhatsAppUrl(phone, t("whatsapp.message"))}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order via WhatsApp"
      className="fixed bottom-24 lg:bottom-6 right-4 lg:right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full bg-[var(--color-bg-card)] border border-[var(--color-border)] text-[var(--color-text)] font-medium text-sm shadow-lg shadow-black/10 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/15 active:scale-95"
    >
      <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
      {t("whatsapp.order")}
    </a>
  );
}
