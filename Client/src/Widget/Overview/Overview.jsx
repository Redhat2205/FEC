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

  const getProduct = async () => (
    axios({
      method: 'GET',
      url: `${config.URL}/products`,
      headers: { Authorization: config.KEY },
    })
      .then((productData) => {
        console.log('product data: ', productData.data[0]);
        setProduct(productData.data[0]);
      })
      .catch((err) => console.log('error in client when GET: ', err))
  );

  useEffect(() => {
    getProduct();
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