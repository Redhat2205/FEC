import React from "react";
import ImageGallery from "./Components/ImageGallery.jsx";
import ProductInfo from "./Components/ProductInfo.jsx";
import StyleSelector from "./Components/StyleSelector.jsx";
import AddToCart from "./Components/AddToCart.jsx";

import GeneralStyles from "../../StyleComponents/GeneralStyles.jsx";
import Button from "../../StyleComponents/Overview_Styles/Button.jsx";

const Overview = () => (
  <div>
    <div> Hello Overview</div>
    <ImageGallery />
    <ProductInfo />
    <StyleSelector />
    <AddToCart />
    <button type="button"> World </button>
    <GeneralStyles.Button>hello</GeneralStyles.Button>
    <Button>button from overview styles</Button>
  </div>
);

export default Overview;
