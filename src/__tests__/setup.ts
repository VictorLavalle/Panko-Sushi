import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

afterEach(() => {
  cleanup();
});

// Mock scrollTo for jsdom
Element.prototype.scrollTo = () => {};
Element.prototype.scrollIntoView = () => {};
