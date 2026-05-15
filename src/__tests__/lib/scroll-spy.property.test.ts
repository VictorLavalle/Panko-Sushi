// Feature: sushi-menu-spa, Property 1: Scroll-spy determines active category
import { describe, it, expect } from "vitest";
import * as fc from "fast-check";
import { determineActiveSection } from "@/lib/scroll-spy";

describe("determineActiveSection - property tests", () => {
  it("returns the last section whose top <= scrollPosition + headerOffset", () => {
    fc.assert(
      fc.property(
        fc.array(
          fc.record({ id: fc.string({ minLength: 1, maxLength: 8 }), top: fc.integer({ min: 0, max: 10000 }) }),
          { minLength: 1, maxLength: 10 }
        ),
        fc.integer({ min: 0, max: 10000 }),
        fc.integer({ min: 0, max: 200 }),
        (sections, scroll, offset) => {
          const sorted = [...sections].sort((a, b) => a.top - b.top);
          const result = determineActiveSection(sorted, scroll, offset);
          const adjusted = scroll + offset;

          const passed = sorted.filter((s) => s.top <= adjusted);
          if (passed.length > 0) {
            expect(result).toBe(passed[passed.length - 1].id);
          } else {
            expect(result).toBe(sorted[0].id);
          }
        }
      ),
      { numRuns: 100 }
    );
  });

  it("returns null for empty array", () => {
    expect(determineActiveSection([], 100)).toBeNull();
  });
});
