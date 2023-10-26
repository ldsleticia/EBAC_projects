import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import Calculadora from "../src/components/Calculadora";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Calculadora />
  </React.StrictMode>
);

reportWebVitals();
