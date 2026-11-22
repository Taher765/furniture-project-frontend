import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider dir="rtl">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
