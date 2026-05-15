import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { BottomNavigation } from "@/components/BottomNavigation";
import { CategoryNavigation } from "@/components/CategoryNavigation";
import { RestaurantInfo } from "@/components/RestaurantInfo";
import { SearchBar } from "@/components/SearchBar";

describe("Accessibility", () => {
  it("BottomNavigation uses nav landmark with aria-label", () => {
    const { container } = render(<BottomNavigation activeSection="home" onNavigate={vi.fn()} />);
    const nav = container.querySelector("nav");
    expect(nav).toBeInTheDocument();
    expect(nav).toHaveAttribute("aria-label", "Navegación principal");
  });

  it("CategoryNavigation uses nav landmark with aria-label", () => {
    const { container } = render(
      <CategoryNavigation categories={[{ id: "a", name: "A", displayOrder: 1, items: [] }]} activeCategory="a" onCategorySelect={vi.fn()} />
    );
    const nav = container.querySelector("nav");
    expect(nav).toBeInTheDocument();
    expect(nav).toHaveAttribute("aria-label", "Categorías del menú");
  });

  it("RestaurantInfo uses section with aria-label", () => {
    const { container } = render(
      <RestaurantInfo phone="123" address="test" addressUrl="http://x" instagram="@x" instagramUrl="http://x" hours="L-S" />
    );
    const section = container.querySelector("section");
    expect(section).toHaveAttribute("aria-label", "Información del restaurante");
  });

  it("SearchBar input has aria-label", () => {
    render(<SearchBar value="" onChange={vi.fn()} resultCount={0} isActive={false} />);
    expect(screen.getByLabelText("Buscar en el menú")).toBeInTheDocument();
  });

  it("SearchBar result count has aria-live", () => {
    const { container } = render(<SearchBar value="test" onChange={vi.fn()} resultCount={3} isActive={true} />);
    const live = container.querySelector("[aria-live]");
    expect(live).toHaveAttribute("aria-live", "polite");
  });

  it("All interactive elements in BottomNavigation have min 44px size", () => {
    const { container } = render(<BottomNavigation activeSection="home" onNavigate={vi.fn()} />);
    const buttons = container.querySelectorAll("button");
    buttons.forEach((btn) => {
      expect(btn.className).toContain("min-w-[44px]");
      expect(btn.className).toContain("min-h-[44px]");
    });
  });
});
