import React from "react";
import SectionDiv from "../../../StyleComponents/Overview_Styles/SectionDiv.jsx";
import PI from "../../../StyleComponents/Overview_Styles/PI.jsx";

<<<<<<< HEAD
const ProductInfo = ({ product }) => {
  // console.log('product in productinfo page: ', product);
=======
const ProductInfo = ({ product, currStyle }) => (
  <SectionDiv.ProductInfoSection>
    <PI.Ratings>
      ☆☆☆☆☆
      <PI.AtoReview href="#main-rnr-header">Read all # reviews</PI.AtoReview>
    </PI.Ratings>
    <PI.Category>
      { product.category }
    </PI.Category>
    <PI.Name>
      { product.name }
    </PI.Name>
    {currStyle.sale_price === null && (
      <PI.Price>
        $
        {currStyle.original_price}
      </PI.Price>
    )}
    {currStyle.sale_price !== null && (
      <PI.SalePrice>
        { currStyle.sale_price }
      </PI.SalePrice>
    )}
>>>>>>> dev

  </SectionDiv.ProductInfoSection>
);

export default ProductInfo;