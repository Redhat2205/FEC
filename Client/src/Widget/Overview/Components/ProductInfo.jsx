import React from "react";
import SectionDiv from "../../../StyleComponents/Overview_Styles/SectionDiv.jsx";
import ProductInfoStyles from "../../../StyleComponents/Overview_Styles/ProductInfoStyles.jsx";

const ProductInfo = ({ product }) => {
  // console.log('product in productinfo page: ', product);

  return (
    <SectionDiv.ProductInfoSection>
      <ProductInfoStyles.General>☆☆☆☆☆  Read all # reviews</ProductInfoStyles.General>
      {/* <ProductInfoStyles.General>
        { product.category }
      </ProductInfoStyles.General>
      <ProductInfoStyles.General>
        { product.name }
      </ProductInfoStyles.General> */}
    </SectionDiv.ProductInfoSection>
  );
};

export default ProductInfo;