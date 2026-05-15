"use client";

import { useI18n } from "@/i18n";

export function LanguageSwitcher() {
  const { locale, setLocale, theme, setTheme } = useI18n();

  return (
    <div className="flex justify-between items-center px-4 pt-4" role="toolbar" aria-label="Site preferences">
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="w-8 h-8 flex items-center justify-center rounded-lg text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
        aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </button>
      <div className="flex gap-1" role="group" aria-label="Language selection">
        <button
          onClick={() => setLocale("es")}
          aria-label="Español"
          aria-pressed={locale === "es"}
          className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
            locale === "es" ? "bg-[var(--color-accent)] text-white" : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
          }`}
        >
          ES
        </button>
        <button
          onClick={() => setLocale("en")}
          aria-label="English"
          aria-pressed={locale === "en"}
          className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
            locale === "en" ? "bg-[var(--color-accent)] text-white" : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
          }`}
        >
          EN
        </button>
      </div>
    </div>
  );
}
