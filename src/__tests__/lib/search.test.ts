import { describe, it, expect } from "vitest";
import { searchMenu, countSearchResults } from "@/lib/search";
import { Category } from "@/data/types";

const testCategories: Category[] = [
  {
    id: "entradas",
    name: "Entradas",
    displayOrder: 1,
    items: [
      { id: "gyozas", name: "Gyozas Pork", description: "Empanadillas de cerdo", price: 95 },
      { id: "papas", name: "Papas Deluxe", description: "Con tocino y queso", price: 100 },
    ],
  },
  {
    id: "rollos",
    name: "Rollos",
    displayOrder: 2,
    items: [
      { id: "pollo", name: "Pollo", price: 115 },
      { id: "arrachera", name: "Arrachera", price: 120 },
    ],
  },
];

describe("searchMenu", () => {
  it("returns all items when query is empty", () => {
    const results = searchMenu(testCategories, "");
    expect(countSearchResults(results)).toBe(4);
  });

  it("filters by item name (case-insensitive)", () => {
    const results = searchMenu(testCategories, "GYOZAS");
    expect(countSearchResults(results)).toBe(1);
    expect(results[0].items[0].name).toBe("Gyozas Pork");
  });

  it("filters by description", () => {
    const results = searchMenu(testCategories, "tocino");
    expect(countSearchResults(results)).toBe(1);
    expect(results[0].items[0].name).toBe("Papas Deluxe");
  });

  it("returns empty array when no matches", () => {
    const results = searchMenu(testCategories, "sashimi");
    expect(results).toHaveLength(0);
    expect(countSearchResults(results)).toBe(0);
  });

  it("treats whitespace-only query as empty", () => {
    const results = searchMenu(testCategories, "   ");
    expect(countSearchResults(results)).toBe(4);
  });

  it("handles partial matches", () => {
    const results = searchMenu(testCategories, "pap");
    expect(countSearchResults(results)).toBe(1);
  });
});
