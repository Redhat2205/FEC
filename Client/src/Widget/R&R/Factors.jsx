import React from 'react';

// eslint-disable-next-line consistent-return
const Factors = ({ productReviews }) => {
  if (productReviews) {
    // const size = productReviews.map((review) => );
    const sizeCount = 0;
    // const wide = productReviews.map();
    const wideCount = 0;
    // const comfort = productReviews.map();
    const comfortCount = 0;
    // const quality = productReviews.map();
    const qualityCount = 0;
    // const length = productReviews.map();
    const lengthCount = 0;
    // const fit = productReviews.map();
    const fitCount = 0;
    // MAKE A CALL TO META TO REFACTOR SOME OF THE RATING CHART STUFF
    // NOT ALL PRODUCTS HAVE ALL QUALITIES IT SEEMS
    // productReviews.forEach((review) => {
    //   sizeCount += review.
    // })
    return (
      <ul>
        <li>Size</li>
        <li>Width</li>
        <li>Comfort</li>
        <li>Quality</li>
        <li>Length</li>
        <li>Fit</li>
      </ul>
    );
  }
};

export default Factors;