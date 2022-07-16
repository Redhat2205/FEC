import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageGallery from "./Components/ImageGallery.jsx";
import ProductInfo from "./Components/ProductInfo.jsx";
import StyleSelector from "./Components/StyleSelector.jsx";
import AddToCart from "./Components/AddToCart.jsx";
import ProductAdditionalInfo from "./Components/ProductAdditionalInfo.jsx";
// import GeneralStyles from "../../StyleComponents/GeneralStyles.jsx";

const Overview = ({
  productID, setProductID, product, productReviews,
}) => {
  // const [product, setProduct] = useState({});
  const [styles, setStyles] = useState([]);
  const [currStyle, setCurrStyle] = useState({});
  const [currView, setCurrView] = useState('default');

  const getStyles = () => {
    axios({
      method: 'GET',
      url: `${process.env.API_Base}/products/${productID}/styles`,
      headers: { Authorization: process.env.API_Key },
    })
      .then((stylesData) => {
        setStyles(stylesData.data.results);
        setCurrStyle(stylesData.data.results[0]);
      })
      .catch((err) => console.log('error when getting styles: ', err));
  };

  useEffect(() => {
    getStyles();
    // console.log('product in overview: ', product)
  }, []);
  return (
    <div>
      <div data-testid="overview"> Hello Overview</div>
      <ImageGallery
        currStyle={currStyle}
        currView={currView}
        setCurrView={setCurrView}
      />
      <ProductInfo
        product={product}
        currStyle={currStyle}
        productReviews={productReviews}
        currView={currView}
      />
      <StyleSelector
        styles={styles}
        currStyle={currStyle}
        setCurrStyle={setCurrStyle}
        currView={currView}
      />
      <AddToCart
        product={product}
        currStyle={currStyle}
        currView={currView}
      />
      <ProductAdditionalInfo product={product} currStyle={currStyle} />
    </div>
  );
};

export default Overview;