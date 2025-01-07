import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Detail from "./pages/detail/index";
import Home from "./pages/home/index";
import Layout from "./components/layout";
import Header from "./components/header";

// Route'ları tanımladık
export const router = createBrowserRouter([
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

// const App = () => {
//   return (
//     <BrowserRouter>
//       <div className="flex flex-col min-h-screen">
//         <Header />

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/detail/:code" element={<Detail />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// };

export default App;
