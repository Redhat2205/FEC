// Bring React in to build a component.
import React from "react";
// Bring reactDOM in to mount component to the dom.
import reactDOM from "react-dom";
import Overview from "./Widget/Overview/Overview.jsx";
import Q_A from "./Widget/Q&A/Q&A.jsx";
import R_R from "./Widget/R&R/R&R.jsx";
import Related from "./Widget/Related/Related.jsx";

// // Here is out base App component.
// // Notice we are NOT using jsx here. This is because we have not set up babel yet.
// const App = React.createElement("h1",null,"Hello World");

// // Render our app to the dom mounted to the element with id of root inside our public/index.html file.
// reactDOM.render(App, document.getElementById("root"));



import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));

// Huzzah for jsx!
const App = () => {
  return (
  <div>
    <h1>Hello World!</h1>
    <Overview/>
    <Related/>
    <Q_A/>
    <R_R/>
  </div>
  )
}

root.render(<App />);