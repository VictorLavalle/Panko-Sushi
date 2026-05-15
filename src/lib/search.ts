import { Category, MenuItem } from "@/data/types";

export interface SearchResult {
  category: Category;
  items: MenuItem[];
}

export function searchMenu(categories: Category[], query: string): SearchResult[] {
  const normalized = query.toLowerCase().trim();
  if (!normalized) return categories.map((c) => ({ category: c, items: c.items }));

  return categories
    .map((category) => {
      // If category name matches, return all its items
      if (category.name.toLowerCase().includes(normalized)) {
        return { category, items: category.items };
      }
      // Otherwise filter items
      return {
        category,
        items: category.items.filter(
          (item) =>
            item.name.toLowerCase().includes(normalized) ||
            (item.description?.toLowerCase().includes(normalized) ?? false) ||
            (item.descriptionEn?.toLowerCase().includes(normalized) ?? false) ||
            (item.proteinOptions?.some((p) => p.name.toLowerCase().includes(normalized)) ?? false)
        ),
      };
    })
    .filter((r) => r.items.length > 0);
}

export function countSearchResults(results: SearchResult[]): number {
  return results.reduce((sum, r) => sum + r.items.length, 0);
}
