import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { SearchBar } from "@/components/SearchBar";

describe("SearchBar", () => {
  it("renders search input", () => {
    render(<SearchBar value="" onChange={vi.fn()} resultCount={0} isActive={false} />);
    expect(screen.getByLabelText("Buscar en el menú")).toBeInTheDocument();
  });

  it("calls onChange when typing", () => {
    const onChange = vi.fn();
    render(<SearchBar value="" onChange={onChange} resultCount={0} isActive={false} />);
    fireEvent.change(screen.getByLabelText("Buscar en el menú"), { target: { value: "pollo" } });
    expect(onChange).toHaveBeenCalledWith("pollo");
  });

  it("shows result count when active", () => {
    render(<SearchBar value="test" onChange={vi.fn()} resultCount={5} isActive={true} />);
    expect(screen.getByText("5 resultados")).toBeInTheDocument();
  });

  it("does not show result count when inactive", () => {
    render(<SearchBar value="" onChange={vi.fn()} resultCount={0} isActive={false} />);
    expect(screen.queryByText(/resultado/)).not.toBeInTheDocument();
  });

  it("shows clear button when value is not empty", () => {
    render(<SearchBar value="test" onChange={vi.fn()} resultCount={3} isActive={true} />);
    expect(screen.getByLabelText("Limpiar búsqueda")).toBeInTheDocument();
  });

  it("clears input when clear button is clicked", () => {
    const onChange = vi.fn();
    render(<SearchBar value="test" onChange={onChange} resultCount={3} isActive={true} />);
    fireEvent.click(screen.getByLabelText("Limpiar búsqueda"));
    expect(onChange).toHaveBeenCalledWith("");
  });
});
