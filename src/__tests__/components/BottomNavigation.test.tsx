import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { BottomNavigation } from "@/components/BottomNavigation";

describe("BottomNavigation", () => {
  it("renders three navigation options", () => {
    render(<BottomNavigation activeSection="home" onNavigate={vi.fn()} />);
    expect(screen.getByLabelText("Inicio")).toBeInTheDocument();
    expect(screen.getByLabelText("Menú")).toBeInTheDocument();
    expect(screen.getByLabelText("Contacto")).toBeInTheDocument();
  });

  it("marks active section with aria-current", () => {
    render(<BottomNavigation activeSection="menu" onNavigate={vi.fn()} />);
    expect(screen.getByLabelText("Menú")).toHaveAttribute("aria-current", "page");
    expect(screen.getByLabelText("Inicio")).not.toHaveAttribute("aria-current");
  });

  it("calls onNavigate with correct section", () => {
    const onNavigate = vi.fn();
    render(<BottomNavigation activeSection="home" onNavigate={onNavigate} />);
    fireEvent.click(screen.getByLabelText("Contacto"));
    expect(onNavigate).toHaveBeenCalledWith("contact");
  });
});
