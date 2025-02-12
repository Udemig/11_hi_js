import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "../../node_modules/@tanstack/react-query-devtools/src/production";

// query client kurulum
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  // query client sağlaycısı
  <QueryClientProvider client={queryClient}>
    <App />

    <ReactQueryDevtools />
  </QueryClientProvider>
);
