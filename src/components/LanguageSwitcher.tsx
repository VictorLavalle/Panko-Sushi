"use client";

import { useI18n } from "@/i18n";

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();

  return (
    <div className="flex justify-center gap-2 py-2">
      <button
        onClick={() => setLocale("es")}
        className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
          locale === "es" ? "bg-[var(--color-accent-olive)] text-white" : "bg-gray-200 text-gray-600"
        }`}
      >
        ES
      </button>
      <button
        onClick={() => setLocale("en")}
        className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
          locale === "en" ? "bg-[var(--color-accent-olive)] text-white" : "bg-gray-200 text-gray-600"
        }`}
      >
        EN
      </button>
    </div>
  );
}
