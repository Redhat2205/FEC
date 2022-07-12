import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageGallery from "./Components/ImageGallery.jsx";
import ProductInfo from "./Components/ProductInfo.jsx";
import StyleSelector from "./Components/StyleSelector.jsx";
import AddToCart from "./Components/AddToCart.jsx";
// import GeneralStyles from "../../StyleComponents/GeneralStyles.jsx";

const Overview = () => {
  const [product, setProduct] = useState({});

  const options = {
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products',
    headers: {
      Authorization: process.env.REACT_APP_API_KEY,
      // 'Access-Control-Allow-Origin': 'http://localhost:3000',
      // "Cache-Control": "no-cache",
      // withCredentials: true,
      // crossdomain: true,
    },
  };

  useEffect(() => {
    axios({
      method: 'GET',
      url: options.url,
      headers: options.headers,
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
      <div> Hello Overview</div>
      <ImageGallery />
      <ProductInfo product={product} />
      <StyleSelector />
      <AddToCart />
    </div>
  );
};

export default Overview;
