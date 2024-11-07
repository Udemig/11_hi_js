import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "react-toastify/dist/ReactToastify.css";
import { ProductProvider } from "./context/productContext.jsx";
import { BasketProvider } from "./context/basketContext.jsx";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BasketProvider>
      <ProductProvider>
        <App />
        <ToastContainer autoClose={2000} />
      </ProductProvider>
    </BasketProvider>
  </React.StrictMode>
);
