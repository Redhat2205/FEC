import React from "react";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

import SectionDiv from "../../../StyleComponents/Overview_Styles/SectionDiv.jsx";
import PI from "../../../StyleComponents/Overview_Styles/PI.jsx";

const ProductInfo = ({
  product, currStyle, productReviews, currView,
}) => {
  const totalStars = 5;
  // const activeStars = ["100%", "100%", "100%", "40%", "0%"];
  const activeStars = [];

  if (productReviews.product !== undefined) {
    let ratingsTotal = 0;
    productReviews.results.forEach((review) => {
      ratingsTotal += review.rating;
    });
    let averageRating = ratingsTotal / productReviews.results.length;

    console.log('average rating: ', averageRating);

    while (averageRating > 0) {
      if (averageRating < 1) {
        if (averageRating < 0.25) {
          activeStars.push('0%');
        } else if (averageRating > 0.25 && averageRating < 0.5) {
          activeStars.push('39%');
        } else if (averageRating >= 0.5 && averageRating < 0.75) {
          activeStars.push('50%');
        } else if (averageRating > 0.75) {
          activeStars.push('57%');
        }
      } else {
        activeStars.push('100%');
      }
      averageRating -= 1;
    }
    while (activeStars.length < 5) {
      activeStars.push('0%');
    }
  }

  if (currView === 'default') {
    return (
      <SectionDiv.ProductInfoSection>
        <PI.Ratings>
          {productReviews.product === undefined
            ? (
              <PI.Div>
                <PI.Stars> ☆☆☆☆☆ </PI.Stars>
                <PI.AtoReview> Read all # reviews</PI.AtoReview>
              </PI.Div>
            )
            : (
              <PI.Div>
                <Box
                  sx={{
                    display: "inline-flex",
                    position: "relative",
                    textAlign: "left",
                    fontSize: "5px",
                  }}
                >
                  {activeStars.map((starWidth, index) => (
                    <Box position="relative" key={index}>
                      <Box
                        sx={{
                          width: starWidth,
                          overflow: "hidden",
                          position: "absolute",
                        }}
                      >
                        <StarIcon style={{ fontSize: "17px" }} />
                      </Box>
                      <Box>
                        <StarBorderIcon style={{ fontSize: "17px" }} />
                      </Box>
                    </Box>
                  ))}
                </Box>
                <PI.AtoReview href="#main-rnr-header">
                  Read all&nbsp;
                  {productReviews.results.length}
                  &nbsp;reviews
                </PI.AtoReview>
              </PI.Div>
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
  }
  return null;
};

export default ProductInfo;