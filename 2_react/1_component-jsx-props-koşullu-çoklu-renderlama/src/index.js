import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// proje kodlarının html dosyası içerisinde ekrana basılcağı divi belirlitoruz
const root = ReactDOM.createRoot(document.getElementById("root"));

// app.js içerisinde yazılan kodları root divinin içerisinde ekrana basıyor
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
