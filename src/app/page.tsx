"use client";

import { useMemo, useState, useEffect } from "react";
import { menuData } from "@/data/menu-data";
import { searchMenu, countSearchResults } from "@/lib/search";
import { useDebounce } from "@/hooks/useDebounce";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { HeroBanner } from "@/components/HeroBanner";
import { SearchBar } from "@/components/SearchBar";
import { CategoryNavigation } from "@/components/CategoryNavigation";
import { CategorySection } from "@/components/CategorySection";
import { RestaurantInfo } from "@/components/RestaurantInfo";
import { BottomNavigation } from "@/components/BottomNavigation";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { PromotionsSection } from "@/components/PromotionsSection";
import { I18nProvider, useI18n } from "@/i18n";
import { SitePreferences } from "@/components/SitePreferences";

const { restaurant, categories } = menuData;

function NoResults({ query }: Readonly<{ query: string }>) {
  const { t } = useI18n();
  return <p className="text-center text-[var(--color-text-muted)] py-16">{t("search.noResults", { query })}</p>;
}

function MenuContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedQuery = useDebounce(searchQuery, 300);
  const activeCategory = useScrollSpy(categories.map(c => c.id), 80);

  const [bottomSection, setBottomSection] = useState<"home" | "menu" | "contact">("home");

  useEffect(() => {
    const handleScroll = () => {
      const contactEl = document.getElementById("contact");
      const firstCat = document.getElementById(categories[0].id);
      if (contactEl && contactEl.getBoundingClientRect().top < window.innerHeight * 0.5) {
        setBottomSection("contact");
      } else if (firstCat && firstCat.getBoundingClientRect().top < 100) {
        setBottomSection("menu");
      } else {
        setBottomSection("home");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const results = useMemo(() => searchMenu(categories, debouncedQuery), [debouncedQuery]);
  const resultCount = useMemo(() => countSearchResults(results), [results]);
  const isSearchActive = debouncedQuery.trim().length > 0;

  const handleCategorySelect = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 60;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const handleNavigate = (section: "home" | "menu" | "contact") => {
    if (section === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (section === "menu") {
      handleCategorySelect(categories[0].id);
    } else {
      handleCategorySelect("contact");
    }
  };

  return (
    <main id="main-content" className="min-h-screen pb-24 w-full lg:w-3/4 max-w-4xl mx-auto">
      <a href="#main-content" className="skip-nav">Skip to menu</a>
      <SitePreferences />

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

      <PromotionsSection />

      <CategoryNavigation
        categories={categories}
        activeCategory={activeCategory}
        onCategorySelect={handleCategorySelect}
      />

      <div className="px-4 space-y-10 mt-6 pb-8">
        {isSearchActive && results.length > 0 &&
          results.map(({ category, items }) => (
            <CategorySection key={category.id} category={{ ...category, items }} />
          ))
        }
        {isSearchActive && results.length === 0 &&
          <NoResults query={debouncedQuery} />
        }
        {!isSearchActive &&
          categories.map((category) => (
            <CategorySection key={category.id} category={category} />
          ))
        }
      </div>

      <RestaurantInfo
        phone={restaurant.phone}
        address={restaurant.address}
        addressUrl={restaurant.addressUrl}
        instagram={restaurant.instagram}
        instagramUrl={restaurant.instagramUrl}
        facebook={restaurant.facebook}
        facebookUrl={restaurant.facebookUrl}
        hours={restaurant.hours}
      />

      <BottomNavigation
        activeSection={bottomSection}
        onNavigate={handleNavigate}
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
