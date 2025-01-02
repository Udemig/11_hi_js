import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Detail from "./pages/detail/index";
import Home from "./pages/home/index";
import Layout from "./components/layout";

// Route'ları tanımladık
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/detail/:code", element: <Detail /> },
    ],
  },
]);

// RouterProvider ile router'ı uygulamaya dahil ettik
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
