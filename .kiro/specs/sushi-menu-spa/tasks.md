# Implementation Plan: Sushi Menu SPA

## Overview

Build the Panko Sushi digital menu SPA using Next.js (App Router), TypeScript, and Tailwind CSS. The implementation follows an incremental approach: set up project foundations (styling, data, utilities), then build components bottom-up (leaf components first, then composition), wire everything together with hooks and state, and finally add animations and polish. Testing is integrated at each step.

## Tasks

- [ ] 1. Set up project foundations and global styles
  - [ ] 1.1 Configure Tailwind CSS with brand design tokens and global styles
    - Update `src/app/globals.css` with CSS custom properties for brand colors (`--color-background: #F7F4F1`, `--color-text-primary: #000002`, `--color-accent-pink: #ECAFB6`, `--color-accent-sage: #B8C59A`, `--color-accent-olive: #546942`, `--color-accent-warm: #DB9C66`, `--color-surface: #FFFFFF`)
    - Configure Catamaran font import (Google Fonts) for headings
    - Set up Avenir Next with system-ui sans-serif fallback for body text
    - Set base background color, font sizes (min 16px body, 20px headings), and smooth scroll behavior
    - _Requirements: 8.3, 8.4_

  - [ ] 1.2 Update root layout with fonts, metadata, and semantic structure
    - Replace Geist fonts with Catamaran + system sans-serif stack in `src/app/layout.tsx`
    - Set `lang="es"` for Spanish content
    - Add metadata (title: "Panko Sushi | Menú Digital", description)
    - Apply warm off-white background to html/body
    - _Requirements: 1.1, 10.3_

  - [ ] 1.3 Create TypeScript data models and static menu data file
    - Create `src/data/types.ts` with interfaces: `ProteinOption`, `MenuItem`, `Category`, `MenuData`, `RestaurantData`
    - Create `src/data/menu-data.ts` exporting the complete `menuData` object with all 10 categories (Entradas, Rollos, Panko, Karui, Gohan, Yakimeshi, Bebidas, No Sushi, Postres, Extras) and restaurant metadata
    - Ensure all items have valid types matching interfaces
    - _Requirements: 9.1, 9.3, 9.5_

- [ ] 2. Implement pure utility functions and hooks
  - [ ] 2.1 Create price formatting utility
    - Create `src/lib/format.ts` with `formatPrice(price: number): string` that returns `$N` (rounded integer, no decimals)
    - _Requirements: 3.1_

  - [ ]* 2.2 Write property test for price formatting
    - **Property 3: Price formatting produces integer peso string**
    - **Validates: Requirements 3.1**
    - Create `src/__tests__/lib/format.property.test.ts`
    - For any non-negative number, verify output matches `$N` pattern with N = Math.round(input)

  - [ ] 2.3 Create search logic utilities
    - Create `src/lib/search.ts` with `searchMenu(categories, query)` and `countSearchResults(results)` functions
    - Implement case-insensitive partial matching on item name, description, and protein option names
    - Return all categories with all items when query is empty/whitespace
    - _Requirements: 4.2, 4.4, 4.5_

  - [ ]* 2.4 Write property tests for search logic
    - **Property 7: Search filter returns only matching items**
    - **Property 8: Empty search returns complete menu**
    - **Property 9: Search result count equals sum of matched items**
    - **Validates: Requirements 4.2, 4.4, 4.5**
    - Create `src/__tests__/lib/search.property.test.ts`

  - [ ] 2.5 Create scroll-spy utility
    - Create `src/lib/scroll-spy.ts` with `determineActiveSection(sectionOffsets, scrollPosition, headerOffset)` function
    - Return the id of the last section whose top ≤ scrollPosition + headerOffset, or first section if none crossed
    - _Requirements: 2.3, 6.5_

  - [ ]* 2.6 Write property test for scroll-spy
    - **Property 1: Scroll-spy determines active category**
    - **Validates: Requirements 2.3, 6.5**
    - Create `src/__tests__/lib/scroll-spy.property.test.ts`

  - [ ] 2.7 Create pill auto-scroll utility
    - Create `src/lib/pill-scroll.ts` with `calculatePillScrollOffset(pillLeft, pillWidth, containerWidth)` function
    - Return non-negative offset that centers the pill within the container
    - _Requirements: 2.5_

  - [ ]* 2.8 Write property test for pill auto-scroll
    - **Property 2: Pill auto-scroll places active pill in view**
    - **Validates: Requirements 2.5**
    - Create `src/__tests__/lib/pill-scroll.property.test.ts`

  - [ ] 2.9 Create custom hooks
    - Create `src/hooks/useDebounce.ts` — debounces a value by a configurable delay (default 300ms)
    - Create `src/hooks/useScrollSpy.ts` — uses IntersectionObserver to track which section is in view, returns active section id
    - _Requirements: 2.3, 4.2_

- [ ] 3. Checkpoint - Ensure all utility tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 4. Implement leaf UI components
  - [ ] 4.1 Create ItemCard component
    - Create `src/components/ItemCard.tsx`
    - Render item name, optional description, and price for simple items
    - Render protein options as separate line items (protein name + price) for items with `proteinOptions`
    - Omit description element entirely when description is undefined/empty
    - Use Tailwind for styling with brand tokens
    - _Requirements: 3.1, 3.3, 3.5, 3.6_

  - [ ]* 4.2 Write property tests for ItemCard
    - **Property 5: Protein options render as separate line items**
    - **Property 6: Items without description render no description element**
    - **Validates: Requirements 3.3, 3.5**
    - Create `src/__tests__/components/ItemCard.property.test.tsx`

  - [ ] 4.3 Create CategorySection component
    - Create `src/components/CategorySection.tsx`
    - Render category heading, optional category description, and list of ItemCards
    - Filter items based on searchQuery prop (use searchMenu logic)
    - Add `id` attribute to section for scroll targeting
    - Wrap in semantic `<section>` element
    - _Requirements: 2.1, 3.2, 3.4, 10.3_

  - [ ]* 4.4 Write property test for CategorySection rendering order
    - **Property 4: Menu rendering preserves data ordering**
    - **Validates: Requirements 2.1, 3.2, 9.4**
    - Create `src/__tests__/components/CategorySection.property.test.tsx`

  - [ ] 4.5 Create HeroBanner component
    - Create `src/components/HeroBanner.tsx`
    - Display logo (Next/Image), restaurant name, tagline, hours, phone (tel: link), address
    - Ensure fully visible without scroll on 375px+ screens
    - Use semantic markup and aria-labels for links
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 10.3, 10.4_

  - [ ] 4.6 Create SearchBar component
    - Create `src/components/SearchBar.tsx`
    - Render text input with search icon and clear button
    - Display result count when active
    - Provide aria-label and aria-live region for result count announcements
    - Minimum 44x44px tap targets
    - _Requirements: 4.1, 4.3, 4.5, 5.3, 10.4_

  - [ ] 4.7 Create CategoryNavigation component
    - Create `src/components/CategoryNavigation.tsx`
    - Render horizontally scrollable pill buttons for each category
    - Highlight active pill with accent-pink/sage background
    - Auto-scroll pill strip when active pill changes (using `calculatePillScrollOffset`)
    - Sticky positioning below hero
    - _Requirements: 2.1, 2.2, 2.4, 2.5, 5.3_

  - [ ] 4.8 Create RestaurantInfo component
    - Create `src/components/RestaurantInfo.tsx`
    - Display phone (tel: link), address (Google Maps link), Instagram (external link, new tab), hours
    - All links have correct href, target="_blank" where appropriate, and rel="noopener noreferrer"
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 10.4_

  - [ ] 4.9 Create BottomNavigation component
    - Create `src/components/BottomNavigation.tsx`
    - Fixed at bottom of viewport with Home, Menu, Contact options
    - Visually distinguish active section
    - Minimum 44x44px tap targets
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 5.3_

  - [ ] 4.10 Create AnimatedSection wrapper component
    - Create `src/components/AnimatedSection.tsx`
    - Use `motion` library for scroll-triggered fade-in/slide-up animations
    - Trigger when element is 20% visible
    - Respect `prefers-reduced-motion` by disabling animations
    - _Requirements: 8.2, 8.5_

- [ ] 5. Checkpoint - Ensure component tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 6. Wire everything together in the main page
  - [ ] 6.1 Implement the main MenuPage component
    - Rewrite `src/app/page.tsx` as a Client Component (`"use client"`)
    - Import `menuData` from data file
    - Integrate all components: HeroBanner, SearchBar, CategoryNavigation, CategorySection (loop), RestaurantInfo, BottomNavigation
    - Manage state: searchQuery, activeCategory (from useScrollSpy), debouncedQuery (from useDebounce)
    - Wire scroll-to-section logic for category pill taps and bottom nav taps
    - Add bottom padding to content to prevent BottomNavigation from obscuring content
    - Wrap category sections in AnimatedSection
    - Use semantic HTML structure (`<main>`, `<nav>`, `<section>`)
    - _Requirements: 1.1, 2.2, 2.3, 4.2, 4.4, 6.1, 6.3, 6.5, 8.1, 8.2, 9.4, 10.3_

  - [ ] 6.2 Implement responsive layout styles
    - Single-column layout for 320-480px viewports
    - 2-column grid for tablet (481-1024px)
    - 3+ column grid for desktop (1025-1920px)
    - Ensure no horizontal scroll on any viewport
    - _Requirements: 5.1, 5.2, 5.5_

- [ ] 7. Set up testing infrastructure and write unit tests
  - [ ] 7.1 Configure Vitest, Testing Library, and fast-check
    - Install `vitest`, `@testing-library/react`, `@testing-library/jest-dom`, `jsdom`, `fast-check` as dev dependencies
    - Create `vitest.config.ts` with jsdom environment, path aliases, and setup file
    - Create test setup file with Testing Library matchers
    - Add `"test": "vitest --run"` and `"test:watch": "vitest"` scripts to package.json
    - _Requirements: (testing infrastructure)_

  - [ ]* 7.2 Write unit tests for HeroBanner
    - Create `src/__tests__/components/HeroBanner.test.tsx`
    - Verify logo, name, tagline, hours, phone link (tel:), and address render correctly
    - _Requirements: 1.1, 1.2, 1.3, 1.4_

  - [ ]* 7.3 Write unit tests for SearchBar
    - Create `src/__tests__/components/SearchBar.test.tsx`
    - Test input rendering, result count display, clear button functionality
    - _Requirements: 4.1, 4.3, 4.5_

  - [ ]* 7.4 Write unit tests for CategoryNavigation
    - Create `src/__tests__/components/CategoryNavigation.test.tsx`
    - Test pill rendering, active state highlighting, click handler invocation
    - _Requirements: 2.1, 2.2_

  - [ ]* 7.5 Write unit tests for RestaurantInfo
    - Create `src/__tests__/components/RestaurantInfo.test.tsx`
    - Verify all links have correct href, target, and rel attributes
    - _Requirements: 7.1, 7.2, 7.3, 7.4_

  - [ ]* 7.6 Write unit tests for BottomNavigation
    - Create `src/__tests__/components/BottomNavigation.test.tsx`
    - Test three options render, active state styling, click handlers
    - _Requirements: 6.1, 6.2, 6.4_

  - [ ]* 7.7 Write unit tests for search utility (example-based)
    - Create `src/__tests__/lib/search.test.ts`
    - Test specific scenarios: exact match, partial match, no results, special characters, whitespace query
    - _Requirements: 4.2, 4.3, 4.4_

  - [ ]* 7.8 Write accessibility unit tests
    - Verify semantic landmarks (nav, main, section) are present
    - Verify interactive elements have aria-labels
    - Verify keyboard focus indicators are applied
    - _Requirements: 10.3, 10.4, 10.6, 10.7_

- [ ] 8. Final checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties from the design document
- Unit tests validate specific examples and edge cases
- The `motion` library (motion/react) must be installed as a dependency for animations
- All data is static — no API routes or backend needed
- The project uses pnpm as its package manager

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1", "1.2", "1.3"] },
    { "id": 1, "tasks": ["2.1", "2.3", "2.5", "2.7", "2.9"] },
    { "id": 2, "tasks": ["2.2", "2.4", "2.6", "2.8"] },
    { "id": 3, "tasks": ["4.1", "4.5", "4.6", "4.8", "4.9", "4.10", "7.1"] },
    { "id": 4, "tasks": ["4.2", "4.3", "4.7"] },
    { "id": 5, "tasks": ["4.4", "6.1", "6.2"] },
    { "id": 6, "tasks": ["7.2", "7.3", "7.4", "7.5", "7.6", "7.7", "7.8"] }
  ]
}
```
