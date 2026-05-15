// Feature: sushi-menu-spa, Property 7: Search filter returns only matching items
// Feature: sushi-menu-spa, Property 8: Empty search returns complete menu
// Feature: sushi-menu-spa, Property 9: Search result count equals sum of matched items
import { describe, it, expect } from "vitest";
import * as fc from "fast-check";
import { searchMenu, countSearchResults } from "@/lib/search";
import { Category, MenuItem } from "@/data/types";

const arbMenuItem = fc.record({
  id: fc.string({ minLength: 1, maxLength: 10 }),
  name: fc.string({ minLength: 1, maxLength: 30 }),
  description: fc.option(fc.string({ minLength: 1, maxLength: 50 }), { nil: undefined }),
  price: fc.option(fc.integer({ min: 1, max: 500 }), { nil: undefined }),
}) as fc.Arbitrary<MenuItem>;

const arbCategory = fc.record({
  id: fc.string({ minLength: 1, maxLength: 10 }),
  name: fc.string({ minLength: 1, maxLength: 20 }),
  displayOrder: fc.integer({ min: 1, max: 20 }),
  description: fc.option(fc.string({ minLength: 1, maxLength: 50 }), { nil: undefined }),
  items: fc.array(arbMenuItem, { minLength: 1, maxLength: 5 }),
}) as fc.Arbitrary<Category>;

const arbCategories = fc.array(arbCategory, { minLength: 1, maxLength: 5 });

describe("searchMenu - property tests", () => {
  it("Property 7: every returned item matches the query", () => {
    fc.assert(
      fc.property(arbCategories, fc.string({ minLength: 1, maxLength: 10 }), (cats, query) => {
        const results = searchMenu(cats, query);
        const normalized = query.toLowerCase().trim();
        if (!normalized) return true;

        for (const { items } of results) {
          for (const item of items) {
            const matches =
              item.name.toLowerCase().includes(normalized) ||
              (item.description?.toLowerCase().includes(normalized) ?? false) ||
              (item.proteinOptions?.some((p) => p.name.toLowerCase().includes(normalized)) ?? false);
            expect(matches).toBe(true);
          }
        }
      }),
      { numRuns: 100 }
    );
  });

  it("Property 8: empty/whitespace query returns all items", () => {
    fc.assert(
      fc.property(
        arbCategories,
        fc.constantFrom("", " ", "  ", "\t", "\n"),
        (cats, query) => {
          const results = searchMenu(cats, query);
          const totalItems = cats.reduce((sum, c) => sum + c.items.length, 0);
          const resultItems = countSearchResults(results);
          expect(resultItems).toBe(totalItems);
        }
      ),
      { numRuns: 100 }
    );
  });

  it("Property 9: countSearchResults equals sum of items.length", () => {
    fc.assert(
      fc.property(arbCategories, fc.string({ maxLength: 10 }), (cats, query) => {
        const results = searchMenu(cats, query);
        const expected = results.reduce((sum, r) => sum + r.items.length, 0);
        expect(countSearchResults(results)).toBe(expected);
      }),
      { numRuns: 100 }
    );
  });
});
