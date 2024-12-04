import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/style.scss";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer autoClose={2000} theme="dark" />
    </Provider>
  </StrictMode>
);
