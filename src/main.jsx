import * as React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import {App} from "./App";
import { CookiesProvider } from "react-cookie";



const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <CookiesProvider>
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  </CookiesProvider>,
);
