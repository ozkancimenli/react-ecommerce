import { render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { CartProvider, useCart } from "../context/CartContext";
import { MemoryRouter } from "react-router-dom";
import React from "react";

function SeedCart() {
  const { addToCart } = useCart();
  React.useEffect(() => {
    addToCart({ id: 1, title: "Seed", price: 1, image: "" });
    addToCart({ id: 1, title: "Seed", price: 1, image: "" });
  }, [addToCart]);
  return null;
}

test("cart badge shows item count", async () => {
  render(
    <MemoryRouter>
      <CartProvider>
        <SeedCart />
        <Header />
      </CartProvider>
    </MemoryRouter>
  );

  expect(await screen.findByTestId("cart-badge")).toHaveTextContent("(2)");
});
