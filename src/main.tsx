import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "./context/QueryClientProvider";
import { FavoritesProvider } from "./context/FavoritesContext.tsx";

import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider>
        <FavoritesProvider>
          <App />
        </FavoritesProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
