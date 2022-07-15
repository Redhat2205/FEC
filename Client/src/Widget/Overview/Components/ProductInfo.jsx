import React from "react";
import SectionDiv from "../../../StyleComponents/Overview_Styles/SectionDiv.jsx";
import PI from "../../../StyleComponents/Overview_Styles/PI.jsx";

const ProductInfo = ({ product, currStyle, productReviews }) => {
  console.log('product reviews: ', productReviews);

  return (
    <SectionDiv.ProductInfoSection>
      <PI.Ratings>
        ☆☆☆☆☆
        {productReviews.product === undefined
          ? <PI.AtoReview> Read all # reviews</PI.AtoReview>
          : (
            <PI.AtoReview href="#main-rnr-header">
              Read all&nbsp;
              {productReviews.results.length}
              &nbsp;reviews
            </PI.AtoReview>
          )}

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
        <div>
          <PI.StruckthroughPrice>
            $
            {currStyle.original_price}
          </PI.StruckthroughPrice>
          <PI.SalePrice>
            $
            { currStyle.sale_price }
          </PI.SalePrice>
        </div>
      )}

    </SectionDiv.ProductInfoSection>
  );
};

export default ProductInfo;