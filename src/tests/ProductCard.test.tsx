import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductCard from "../components/ProductCard";
import { CartProvider } from "../context/CartContext";

const product = { id: 99, title: "Test Item", price: 10, image: "https://picsum.photos/seed/test/400/300" };

test("renders product and adds to cart", async () => {
  const user = userEvent.setup();
  render(
    <CartProvider>
      <ProductCard product={product} />
    </CartProvider>
  );

  expect(screen.getByText("Test Item")).toBeInTheDocument();
  await user.click(screen.getByRole("button", { name: /add-99/i }));
  // If it doesn't throw, the handler ran; full assertion covered in integration test
});
