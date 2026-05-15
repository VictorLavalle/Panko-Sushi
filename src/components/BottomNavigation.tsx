"use client";

import { useI18n } from "@/i18n";

type Section = "home" | "menu" | "contact";

interface BottomNavigationProps {
  activeSection: Section;
  onNavigate: (section: Section) => void;
}

export function BottomNavigation({ activeSection, onNavigate }: Readonly<BottomNavigationProps>) {
  const { t } = useI18n();

  const navItems: { id: Section; label: string; icon: string }[] = [
    { id: "home", label: t("nav.home"), icon: "🏠" },
    { id: "menu", label: t("nav.menu"), icon: "🍣" },
    { id: "contact", label: t("nav.contact"), icon: "📞" },
  ];

  return (
    <nav
      aria-label={t("nav.main")}
      className="fixed bottom-0 left-1/2 -translate-x-1/2 z-40 w-full lg:w-3/4 max-w-2xl bg-[var(--color-bg)]/90 backdrop-blur-md border-t border-[var(--color-border)]/50 rounded-t-2xl"
    >
      <div className="flex justify-around items-center h-14">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`group flex flex-col items-center justify-center min-w-[44px] min-h-[44px] gap-0.5 text-[11px] transition-all duration-150 ${
              activeSection === item.id
                ? "text-[var(--color-accent)]"
                : "text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]"
            }`}
            aria-label={item.label}
            aria-current={activeSection === item.id ? "page" : undefined}
          >
            <span className={`text-base transition-transform duration-150 ${activeSection === item.id ? "scale-110" : "group-hover:scale-110"}`} aria-hidden="true">{item.icon}</span>
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
