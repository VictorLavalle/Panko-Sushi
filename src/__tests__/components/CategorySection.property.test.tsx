// Feature: sushi-menu-spa, Property 4: Menu rendering preserves data ordering
import { describe, it, expect } from "vitest";
import * as fc from "fast-check";
import { render, cleanup } from "@testing-library/react";
import { CategorySection } from "@/components/CategorySection";
import { Category, MenuItem } from "@/data/types";

describe("CategorySection - property tests", () => {
  it("Property 4: items render in the same order as the data array", () => {
    fc.assert(
      fc.property(
        fc.array(
          fc.record({
            id: fc.string({ minLength: 1, maxLength: 10 }),
            name: fc.string({ minLength: 1, maxLength: 20 }),
            price: fc.integer({ min: 1, max: 500 }),
          }),
          { minLength: 1, maxLength: 6 }
        ),
        (itemsData) => {
          const items: MenuItem[] = itemsData.map((d) => ({ id: d.id, name: d.name, price: d.price }));
          const category: Category = {
            id: "test-cat",
            name: "Test",
            displayOrder: 1,
            items,
          };

          const { getAllByRole } = render(<CategorySection category={category} />);
          const articles = getAllByRole("article");
          expect(articles.length).toBe(items.length);

          articles.forEach((article, i) => {
            const heading = article.querySelector("h4");
            expect(heading?.textContent).toBe(items[i].name);
          });

          cleanup();
        }
      ),
      { numRuns: 50 }
    );
  });
});
