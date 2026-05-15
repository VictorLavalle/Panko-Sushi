import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { HeroBanner } from "@/components/HeroBanner";

const props = {
  logoSrc: "/logo.png",
  restaurantName: "Panko Sushi",
  tagline: "Sushi artesanal",
  hours: "Lunes a Sábado de 6:30-11:00pm",
  phone: "9811695143",
  address: "Calle 14a #18, Colonia Prado",
};

describe("HeroBanner", () => {
  it("renders restaurant name", () => {
    render(<HeroBanner {...props} />);
    expect(screen.getByText("Panko Sushi")).toBeInTheDocument();
  });

  it("renders tagline", () => {
    render(<HeroBanner {...props} />);
    expect(screen.getByText("Sushi artesanal")).toBeInTheDocument();
  });

  it("renders hours", () => {
    render(<HeroBanner {...props} />);
    expect(screen.getByText(/Lunes a Sábado/)).toBeInTheDocument();
  });

  it("renders phone as tel: link", () => {
    render(<HeroBanner {...props} />);
    const link = screen.getByRole("link", { name: /9811695143/ });
    expect(link).toHaveAttribute("href", "tel:9811695143");
  });

  it("renders address", () => {
    render(<HeroBanner {...props} />);
    expect(screen.getByText("Calle 14a #18, Colonia Prado")).toBeInTheDocument();
  });

  it("renders logo image", () => {
    render(<HeroBanner {...props} />);
    const img = screen.getByRole("img", { name: /Panko Sushi logo/ });
    expect(img).toBeInTheDocument();
  });
});
