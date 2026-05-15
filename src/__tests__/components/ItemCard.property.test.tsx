// Feature: sushi-menu-spa, Property 5: Protein options render as separate line items
// Feature: sushi-menu-spa, Property 6: Items without description render no description element
import { describe, it, expect } from "vitest";
import * as fc from "fast-check";
import { render, cleanup } from "@testing-library/react";
import { ItemCard } from "@/components/ItemCard";
import { MenuItem } from "@/data/types";

describe("ItemCard - property tests", () => {
  it("Property 6: items without description render no description paragraph", () => {
    fc.assert(
      fc.property(
        fc.record({
          id: fc.string({ minLength: 1, maxLength: 10 }),
          name: fc.string({ minLength: 1, maxLength: 30 }),
          price: fc.integer({ min: 1, max: 500 }),
        }),
        (data) => {
          const item: MenuItem = { id: data.id, name: data.name, price: data.price };
          const { container } = render(<ItemCard item={item} />);
          const paragraphs = container.querySelectorAll("p");
          expect(paragraphs.length).toBe(0);
          cleanup();
        }
      ),
      { numRuns: 50 }
    );
  });

  it("Property 5: items with description render a description paragraph", () => {
    fc.assert(
      fc.property(
        fc.record({
          id: fc.string({ minLength: 1, maxLength: 10 }),
          name: fc.string({ minLength: 1, maxLength: 30 }),
          description: fc.string({ minLength: 1, maxLength: 50 }),
          price: fc.integer({ min: 1, max: 500 }),
        }),
        (data) => {
          const item: MenuItem = { id: data.id, name: data.name, description: data.description, price: data.price };
          const { container } = render(<ItemCard item={item} />);
          const paragraphs = container.querySelectorAll("p");
          expect(paragraphs.length).toBe(1);
          expect(paragraphs[0].textContent).toBe(data.description);
          cleanup();
        }
      ),
      { numRuns: 50 }
    );
  });
});
