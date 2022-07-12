import React, { useState, useEffect } from "react";
import axios from "axios";
import config from '../../../../config.js';
import ImageGallery from "./Components/ImageGallery.jsx";
import ProductInfo from "./Components/ProductInfo.jsx";
import StyleSelector from "./Components/StyleSelector.jsx";
import AddToCart from "./Components/AddToCart.jsx";
// import GeneralStyles from "../../StyleComponents/GeneralStyles.jsx";

const Overview = () => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios({
      method: 'GET',
      url: config.URL,
      headers: config.KEY,
    })
      .then((productData) => {
        // console.log('product data: ', productData.data[0]);
        setProduct(productData[0]);
      })
      // .then(() => console.log('product!!!', product))
      .catch((err) => console.log('error in client when GET: ', err));
  }, []);

  return (
    <div>
      <div data-testid="overview"> Hello Overview</div>
      <ImageGallery />
      <ProductInfo product={product} />
      <StyleSelector />
      <AddToCart />
    </div>
  );
};

export default Overview;