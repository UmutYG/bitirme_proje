// Import the necessary modules
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ProductsProvider } from "./ProductContext";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";

// Define your router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/productDetail/:pId",
    element: <ProductDetail />,
  },
]);

function App() {
  return (
    // Wrap RouterProvider with ProductsProvider
    <ProductsProvider>
      <RouterProvider router={router} />
    </ProductsProvider>
  );
}

export default App;
