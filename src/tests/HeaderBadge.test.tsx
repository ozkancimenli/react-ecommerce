import { render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { CartProvider, useCart } from "../context/CartContext";
import { MemoryRouter } from "react-router-dom";

function SeedCart() {
  const { addToCart } = useCart();
  addToCart({ id: 1, title: "Seed", price: 1, image: "" });
  addToCart({ id: 1, title: "Seed", price: 1, image: "" });
  return null;
}

test("cart badge shows item count", () => {
  render(
    <MemoryRouter>
      <CartProvider>
        <SeedCart />
        <Header />
      </CartProvider>
    </MemoryRouter>
  );

  expect(screen.getByTestId("cart-badge")).toHaveTextContent("(2)");
});
