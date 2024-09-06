import "./reset.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Router from "./shared/Router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router />
  </StrictMode>
);
