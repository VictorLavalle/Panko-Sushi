"use client";

import { useI18n, useTheme } from "@/i18n";

export function SitePreferences() {
  const { locale, setLocale } = useI18n();
  const { theme, setTheme } = useTheme();

  return (
    <nav className="flex justify-between items-center px-4 pt-4" aria-label="Site preferences">
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="w-8 h-8 flex items-center justify-center rounded-lg text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
        aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </button>
      <fieldset className="flex gap-1 border-0 p-0 m-0" aria-label="Language selection">
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
      </fieldset>
    </nav>
  );
}
