import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import './index.css'
import { UserContextProvider } from "./context/userContext";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </BrowserRouter>
);
