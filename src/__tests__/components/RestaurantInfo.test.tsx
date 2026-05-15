import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { RestaurantInfo } from "@/components/RestaurantInfo";

const props = {
  phone: "9811695143",
  address: "Calle 14a #18, Colonia Prado",
  addressUrl: "https://maps.google.com/?q=test",
  instagram: "@pankosushi24",
  instagramUrl: "https://instagram.com/pankosushi24",
  hours: "Lunes a Sábado de 6:30-11:00pm",
};

describe("RestaurantInfo", () => {
  it("renders phone as tel: link", () => {
    render(<RestaurantInfo {...props} />);
    const link = screen.getByRole("link", { name: "9811695143" });
    expect(link).toHaveAttribute("href", "tel:9811695143");
  });

  it("renders address with maps link", () => {
    render(<RestaurantInfo {...props} />);
    const link = screen.getByRole("link", { name: props.address });
    expect(link).toHaveAttribute("href", props.addressUrl);
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders instagram link in new tab", () => {
    render(<RestaurantInfo {...props} />);
    const link = screen.getByRole("link", { name: "@pankosushi24" });
    expect(link).toHaveAttribute("href", "https://instagram.com/pankosushi24");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders business hours", () => {
    render(<RestaurantInfo {...props} />);
    expect(screen.getByText(props.hours)).toBeInTheDocument();
  });
});
