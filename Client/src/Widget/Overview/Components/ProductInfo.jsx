import React from "react";
import SectionDiv from "../../../StyleComponents/Overview_Styles/SectionDiv.jsx";
import PI from "../../../StyleComponents/Overview_Styles/PI.jsx";

const ProductInfo = ({ product }) => {
  console.log('');

  return (
    <SectionDiv.ProductInfoSection>
      <PI.Ratings>
        ☆☆☆☆☆
        <PI.AtoReview href="#reviewss">Read all # reviews</PI.AtoReview>
      </PI.Ratings>
      <PI.Category>
        { product.category }
      </PI.Category>
      <PI.Name>
        { product.name }
      </PI.Name>
    </SectionDiv.ProductInfoSection>
  );
};

export default ProductInfo;