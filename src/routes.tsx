import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import App from "./App";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <Products /> },
      { path: "/cart", element: <Cart /> }
    ]
  }
]);
