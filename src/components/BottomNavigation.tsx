"use client";

import { useI18n } from "@/i18n";

type Section = "home" | "menu" | "contact";

interface BottomNavigationProps {
  activeSection: Section;
  onNavigate: (section: Section) => void;
}

export function BottomNavigation({ activeSection, onNavigate }: BottomNavigationProps) {
  const { t } = useI18n();

  const navItems: { id: Section; label: string; icon: string }[] = [
    { id: "home", label: t("nav.home"), icon: "🏠" },
    { id: "menu", label: t("nav.menu"), icon: "🍣" },
    { id: "contact", label: t("nav.contact"), icon: "📞" },
  ];

  return (
    <nav
      aria-label={t("nav.main")}
      className="fixed bottom-0 left-1/2 -translate-x-1/2 z-30 w-full lg:w-3/4 bg-[var(--color-surface)] border-t border-gray-200 rounded-t-xl shadow-lg"
    >
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`flex flex-col items-center justify-center min-w-[44px] min-h-[44px] gap-0.5 text-xs transition-colors ${
              activeSection === item.id
                ? "text-[var(--color-accent-olive)] font-semibold"
                : "text-gray-500"
            }`}
            aria-label={item.label}
            aria-current={activeSection === item.id ? "page" : undefined}
          >
            <span className="text-lg" aria-hidden="true">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
