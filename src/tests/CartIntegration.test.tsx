import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { type RouteObject, createMemoryRouter, RouterProvider } from "react-router-dom";
import { CartProvider } from "../context/CartContext";
import App from "../App";
import Products from "../pages/Products";
import Home from "../pages/Home";
import Cart from "../pages/Cart";

const routes: RouteObject[] = [
  { element: <App />, children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <Products /> },
      { path: "/cart", element: <Cart /> }
  ] }
];

test("adding a product updates the cart badge", async () => {
  const user = userEvent.setup();
  const router = createMemoryRouter(routes, { initialEntries: ["/products"] });

  render(
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );

  // click first Add to Cart button
  const addButtons = await screen.findAllByRole("button", { name: /add-/i });
  await user.click(addButtons[0]);

  const badge = await screen.findByTestId("cart-badge");
  expect(badge).toHaveTextContent("(1)");
});
