// Bring React in to build a component.
import React, { useState } from "react";
// Bring reactDOM in to mount component to the dom.
// import reactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import Overview from "./Widget/Overview/Overview.jsx";
import Q_A from "./Widget/Q&A/Q&A.jsx";
import R_R from "./Widget/R&R/R&R.jsx";
import Related from "./Widget/Related/Related.jsx";
import GeneralStyles from "./StyleComponents/GeneralStyles.jsx";

const root = createRoot(document.getElementById("root"));

// Huzzah for JSX!!
const App = () => {
  // ****** default product id: 37316
  // const [productID, setProductID] = useState('37320');
  const [productID, setProductID] = useState('37316');

  return (
    <GeneralStyles.Div>
      <h1>Hello World!</h1>
      <Overview productID={productID} setProductID={setProductID} />
      <Related productID={productID} />
      <Q_A productID={productID} />
      <R_R productID={productID} />
    </GeneralStyles.Div>
  );
};

root.render(<App />);
