import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import ReactEArrays from "./components/ReactEArrays";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ReactEArrays />
  </React.StrictMode>
);

reportWebVitals();
