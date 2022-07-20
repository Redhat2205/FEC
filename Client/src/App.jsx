// Bring React in to build a component.
import React, { useState, useEffect } from "react";
import axios from "axios";

import Overview from "./Widget/Overview/Overview.jsx";
import Q_A from "./Widget/Q&A/Q&A.jsx";
import R_R from "./Widget/R&R/R&R.jsx";
import Related from "./Widget/Related/Related.jsx";
import GeneralStyles from "./StyleComponents/GeneralStyles.jsx";

// Huzzah for JSX!!
const App = () => {
  const [productID, setProductID] = useState(37316);
  const [product, setProduct] = useState([]);
  const [productReviews, setProductReviews] = useState([]);

  const getProduct = () => (
    axios.get(`products/${productID}`)
      .then((productData) => {
        // console.log('productData: ', productData.data);
        setProduct(productData.data);
      })
      .catch((err) => console.log('error when getting product: ', err))
  );

  const getReviews = () => {
    axios.get(`reviews/${productID}`)
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
    <GeneralStyles.Div data-testid="app">
      <h1>Hello World!</h1>
      {product.name === undefined
        ? <div>Loading...</div>
        : (
          <div data-testid="appAfterRendering">
            <Overview
              productID={productID}
              setProductID={setProductID}
              product={product}
              productReviews={productReviews}
            />
            <Related productID={productID} />
            <Q_A productID={productID} productName={product.name} />
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

export default App;