"use client";

import { useI18n } from "@/i18n";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  resultCount: number;
  isActive: boolean;
}

export function SearchBar({ value, onChange, resultCount, isActive }: SearchBarProps) {
  const { t } = useI18n();

  return (
    <div className="px-4 pb-4">
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={t("search.placeholder")}
          aria-label={t("search.label")}
          className="w-full h-12 pl-11 pr-10 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/50 focus:border-[var(--color-accent)]/50 transition-all"
        />
        <svg
          className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-text-muted)]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        {value && (
          <button
            onClick={() => onChange("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center rounded-full bg-[var(--color-border)] text-[var(--color-text-secondary)] text-xs hover:bg-[var(--color-text-muted)] transition-colors"
            aria-label={t("search.clear")}
          >
            ✕
          </button>
        )}
      </div>
      {isActive && (
        <p className="text-xs text-[var(--color-text-muted)] mt-2 ml-1" aria-live="polite">
          {t("search.results", { count: resultCount, plural: resultCount !== 1 ? "s" : "" })}
        </p>
      )}
    </div>
  );
}
