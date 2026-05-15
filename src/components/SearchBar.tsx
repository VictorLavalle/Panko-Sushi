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
    <div className="px-4 pb-3">
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={t("search.placeholder")}
          aria-label={t("search.label")}
          className="w-full h-11 pl-10 pr-10 rounded-full bg-[var(--color-surface)] border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-sage)]"
        />
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
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
            className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 text-xs"
            aria-label={t("search.clear")}
          >
            ✕
          </button>
        )}
      </div>
      {isActive && (
        <p className="text-xs text-gray-500 mt-1 ml-3" aria-live="polite">
          {t("search.results", { count: resultCount, plural: resultCount !== 1 ? "s" : "" })}
        </p>
      )}
    </div>
  );
}
