// Feature: sushi-menu-spa, Property 3: Price formatting produces integer peso string
import { describe, it, expect } from "vitest";
import * as fc from "fast-check";
import { formatPrice } from "@/lib/format";

describe("formatPrice - property tests", () => {
  it("returns a string matching $N where N is the rounded integer", () => {
    fc.assert(
      fc.property(fc.float({ min: 0, max: 100000, noNaN: true }), (price) => {
        const result = formatPrice(price);
        expect(result).toMatch(/^\$\d+$/);
        expect(result).toBe(`$${Math.round(price)}`);
      }),
      { numRuns: 100 }
    );
  });

  it("never contains decimal places", () => {
    fc.assert(
      fc.property(fc.float({ min: 0, max: 99999, noNaN: true }), (price) => {
        expect(formatPrice(price)).not.toContain(".");
      }),
      { numRuns: 100 }
    );
  });
});
