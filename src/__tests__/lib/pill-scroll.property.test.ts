// Feature: sushi-menu-spa, Property 2: Pill auto-scroll places active pill in view
import { describe, it, expect } from "vitest";
import * as fc from "fast-check";
import { calculatePillScrollOffset } from "@/lib/pill-scroll";

describe("calculatePillScrollOffset - property tests", () => {
  it("always returns a non-negative offset", () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 0, max: 2000 }),
        fc.integer({ min: 1, max: 200 }),
        fc.integer({ min: 1, max: 500 }),
        (pillLeft, pillWidth, containerWidth) => {
          const result = calculatePillScrollOffset(pillLeft, pillWidth, containerWidth);
          expect(result).toBeGreaterThanOrEqual(0);
        }
      ),
      { numRuns: 100 }
    );
  });

  it("places the pill center within the visible area", () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 0, max: 2000 }),
        fc.integer({ min: 1, max: 200 }),
        fc.integer({ min: 1, max: 500 }),
        (pillLeft, pillWidth, containerWidth) => {
          const offset = calculatePillScrollOffset(pillLeft, pillWidth, containerWidth);
          const pillCenter = pillLeft + pillWidth / 2;
          const visibleStart = offset;
          const visibleEnd = offset + containerWidth;
          expect(pillCenter).toBeGreaterThanOrEqual(visibleStart);
          expect(pillCenter).toBeLessThanOrEqual(visibleEnd);
        }
      ),
      { numRuns: 100 }
    );
  });
});
