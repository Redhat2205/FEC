// Bring React in to build a component.
import React, { useState, useEffect } from "react";
import axios from "axios";
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
  const [productID, setProductID] = useState(37316);
  const [product, setProduct] = useState([]);
  const [productReviews, setProductReviews] = useState([]);

  const getProduct = () => (
    axios({
      method: 'GET',
      url: `${process.env.API_Base}/products/${productID}`,
      headers: { Authorization: process.env.API_Key },
    })
      .then((productData) => {
        // console.log('productData: ', productData.data);
        setProduct(productData.data);
      })
      .catch((err) => console.log('error when getting product: ', err))
  );

  const getReviews = () => {
    axios({
      method: 'GET',
      url: `${process.env.API_Base}/reviews`,
      headers: { Authorization: process.env.API_Key },
      params: {
        count: '9999',
        product_id: productID,
      },
    })
      .then((reviewsData) => {
        // console.log('reviews: ', reviewsData.data);
        setProductReviews(reviewsData.data);
      })
      .catch((err) => console.log('error when getting reviews: ', err));
  };

  useEffect(() => {
    getProduct()
      .then(() => {
        getReviews();
      })
      .catch((err) => console.log('error in useEffect: ', err));
  }, []);

  return (
    <GeneralStyles.Div>
      <h1>Hello World!</h1>
      {product.name === undefined
        ? <div>Loading...</div>
        : (
          <div>
            <Overview
              productID={productID}
              setProductID={setProductID}
              product={product}
              productReviews={productReviews}
            />
            <Related productID={productID} />
            <Q_A productID={productID} product={product.name} />
            <R_R
              productID={productID}
              product={product}
              productReviews={productReviews}
            />
          </div>
        )}
    </GeneralStyles.Div>
  );
};

root.render(<App />);
