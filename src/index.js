import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.scss"; 
import { HashRouter } from 'react-router-dom';
import DarkModeContextProvider from "./context/darkModeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <DarkModeContextProvider>
      <App />
    </DarkModeContextProvider>
  </HashRouter> 
);
