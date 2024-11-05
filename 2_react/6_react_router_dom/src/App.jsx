import Home from "./pages/Home";
import Products from "./pages/Products";
import Category from "./pages/Category";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Detail from "./pages/Detail";
import Undefined from "./pages/Undefined";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/ürünler",
        element: <Products />,
      },
      {
        path: "/detay/:id",
        element: <Detail />,
      },

      {
        path: "/kategori",
        element: <Category />,
        children: [
          { path: "hikaye", element: <h1>Hikaye</h1> },
          { path: "roman", element: <h1>Roman</h1> },
        ],
      },
      { path: "*", element: <Undefined /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
