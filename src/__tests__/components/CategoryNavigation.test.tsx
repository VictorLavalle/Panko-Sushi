import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { CategoryNavigation } from "@/components/CategoryNavigation";
import { Category } from "@/data/types";

const categories: Category[] = [
  { id: "entradas", name: "Entradas", displayOrder: 1, items: [] },
  { id: "rollos", name: "Rollos", displayOrder: 2, items: [] },
  { id: "bebidas", name: "Bebidas", displayOrder: 3, items: [] },
];

describe("CategoryNavigation", () => {
  it("renders all category pills", () => {
    render(<CategoryNavigation categories={categories} activeCategory="entradas" onCategorySelect={vi.fn()} />);
    expect(screen.getByText("Entradas")).toBeInTheDocument();
    expect(screen.getByText("Rollos")).toBeInTheDocument();
    expect(screen.getByText("Bebidas")).toBeInTheDocument();
  });

  it("highlights the active pill", () => {
    render(<CategoryNavigation categories={categories} activeCategory="rollos" onCategorySelect={vi.fn()} />);
    const activeButton = screen.getByText("Rollos");
    expect(activeButton).toHaveAttribute("aria-pressed", "true");
  });

  it("calls onCategorySelect when a pill is clicked", () => {
    const onSelect = vi.fn();
    render(<CategoryNavigation categories={categories} activeCategory="entradas" onCategorySelect={onSelect} />);
    fireEvent.click(screen.getByText("Bebidas"));
    expect(onSelect).toHaveBeenCalledWith("bebidas");
  });
});
