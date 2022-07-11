// Bring React in to build a component.
import React from "react";
// Bring reactDOM in to mount component to the dom.
// import reactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import Overview from "./Widget/Overview/Overview.jsx";
import Q_A from "./Widget/Q&A/Q&A.jsx";
import R_R from "./Widget/R&R/R&R.jsx";
import Related from "./Widget/Related/Related.jsx";

const root = createRoot(document.getElementById("root"));

// Huzzah for JSX!
const App = () => (
  <div>
    <h1>Hello World!</h1>
    <Overview />
    <Related />
    <Q_A />
    <R_R />
  </div>
);

root.render(<App />);
