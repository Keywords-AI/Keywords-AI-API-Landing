import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";
import App from "./app/app";
import "./app/components/styles/index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);
