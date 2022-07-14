import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageGallery from "./Components/ImageGallery.jsx";
import ProductInfo from "./Components/ProductInfo.jsx";
import StyleSelector from "./Components/StyleSelector.jsx";
import AddToCart from "./Components/AddToCart.jsx";
import ProductAdditionalInfo from "./Components/ProductAdditionalInfo.jsx";
// import GeneralStyles from "../../StyleComponents/GeneralStyles.jsx";

const Overview = ({ productID, setProductID }) => {
  const [product, setProduct] = useState({});
  const [styles, setStyles] = useState([]);
  const [currStyle, setCurrStyle] = useState({});

  const [size, setSize] = useState(null);

  const getProduct = () => (
    axios({
      method: 'GET',
      url: `${process.env.API_Base}/products/${productID}`,
      headers: { Authorization: process.env.API_Key },
    })
      .then((productData) => {
        // console.log('product data: ', productData.data[0]);
        setProduct(productData.data);
      })
      .catch((err) => console.log('error when getting product: ', err))
  );

  const getStyles = () => {
    axios({
      method: 'GET',
      url: `${process.env.API_Base}/products/${productID}/styles`,
      headers: { Authorization: process.env.API_Key },
    })
      .then((stylesData) => {
        // console.log('styles Data: ', stylesData.data);
        setStyles(stylesData.data.results);
        setCurrStyle(stylesData.data.results[0]);
      })
      .catch((err) => console.log('error when getting styles: ', err));
  };

  useEffect(() => {
    getProduct()
      .then(() => getStyles())
      .catch((err) => console.log('error in useEffect: ', err));
  }, []);

  return (
    <div>
      <div data-testid="overview"> Hello Overview</div>
      <ImageGallery currStyle={currStyle} />
      <ProductInfo product={product} currStyle={currStyle} />
      <StyleSelector
        styles={styles}
        currStyle={currStyle}
        setCurrStyle={setCurrStyle}
      />
      <AddToCart
        currStyle={currStyle}
        size={size}
        setSize={setSize}
      />
      <ProductAdditionalInfo product={product} currStyle={currStyle} />
    </div>
  );
};

export default Overview;