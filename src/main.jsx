import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/Dancel/">
      <App />
      <Analytics />
    </BrowserRouter>
  </React.StrictMode>
); 
