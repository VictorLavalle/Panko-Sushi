"use client";

import { useMemo, useState } from "react";
import { menuData } from "@/data/menu-data";
import { searchMenu, countSearchResults } from "@/lib/search";
import { useDebounce } from "@/hooks/useDebounce";
import { HeroBanner } from "@/components/HeroBanner";
import { SearchBar } from "@/components/SearchBar";
import { CategoryNavigation } from "@/components/CategoryNavigation";
import { CategorySection } from "@/components/CategorySection";
import { RestaurantInfo } from "@/components/RestaurantInfo";
import { BottomNavigation } from "@/components/BottomNavigation";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { I18nProvider, useI18n } from "@/i18n";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const { restaurant, categories } = menuData;

function NoResults({ query }: { query: string }) {
  const { t } = useI18n();
  return <p className="text-center text-[var(--color-text-muted)] py-16">{t("search.noResults", { query })}</p>;
}

function MenuContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const debouncedQuery = useDebounce(searchQuery, 300);

  const results = useMemo(() => searchMenu(categories, debouncedQuery), [debouncedQuery]);
  const resultCount = useMemo(() => countSearchResults(results), [results]);
  const isSearchActive = debouncedQuery.trim().length > 0;

  const handleCategorySelect = (id: string) => {
    setActiveCategory(id);
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 60;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <main id="main-content" className="min-h-screen pb-24 w-full lg:w-3/4 max-w-4xl mx-auto">
      <a href="#main-content" className="skip-nav">Skip to menu</a>
      <LanguageSwitcher />

      <HeroBanner
        logoSrc={restaurant.logoSrc}
        restaurantName={restaurant.name}
        tagline={restaurant.tagline}
        hours={restaurant.hours}
        phone={restaurant.phone}
        address={restaurant.address}
        addressUrl={restaurant.addressUrl}
      />

      <SearchBar
        value={searchQuery}
        onChange={setSearchQuery}
        resultCount={resultCount}
        isActive={isSearchActive}
      />

      <CategoryNavigation
        categories={categories}
        activeCategory={activeCategory}
        onCategorySelect={handleCategorySelect}
      />

      <div className="px-4 space-y-10 mt-6 pb-8">
        {isSearchActive ? (
          results.length > 0 ? (
            results.map(({ category, items }) => (
              <CategorySection key={category.id} category={{ ...category, items }} />
            ))
          ) : (
            <NoResults query={debouncedQuery} />
          )
        ) : (
          categories.map((category) => (
            <CategorySection key={category.id} category={category} />
          ))
        )}
      </div>

      <RestaurantInfo
        phone={restaurant.phone}
        address={restaurant.address}
        addressUrl={restaurant.addressUrl}
        instagram={restaurant.instagram}
        instagramUrl={restaurant.instagramUrl}
        hours={restaurant.hours}
      />

      <BottomNavigation
        activeSection="menu"
        onNavigate={(section) => {
          if (section === "home") window.scrollTo({ top: 0, behavior: "smooth" });
          else if (section === "menu") handleCategorySelect(categories[0].id);
          else {
            const el = document.getElementById("contact");
            if (el) {
              const top = el.getBoundingClientRect().top + window.scrollY - 60;
              window.scrollTo({ top, behavior: "smooth" });
            }
          }
        }}
      />

      <FloatingWhatsApp phone={restaurant.phone} />
    </main>
  );
}

export default function MenuPage() {
  return (
    <I18nProvider>
      <MenuContent />
    </I18nProvider>
  );
}
