import React from "react";
import ImageGallery from "./Components/ImageGallery.jsx";
import ProductInfo from "./Components/ProductInfo.jsx";
import StyleSelector from "./Components/StyleSelector.jsx";
import AddToCart from "./Components/AddToCart.jsx";
// import GeneralStyles from "../../StyleComponents/GeneralStyles.jsx";

const Overview = () => (
  <div>
    <div> Hello Overview</div>
    <ImageGallery />
    <ProductInfo />
    <StyleSelector />
    <AddToCart />
  </div>
);

export default Overview;
