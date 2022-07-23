import React from 'react';

// eslint-disable-next-line consistent-return
const Recommended = ({ productReviews }) => {
  if (productReviews) {
    const recs = productReviews.filter((review) => review.recommend === true);
    const recommendedPct = (recs.length / productReviews.length) * 100;
    return (
      <div style={{ marginLeft: '15px' }}>
        <h3>{`${Math.ceil(recommendedPct.toFixed(2))}% of reviews recommend this product`}</h3>
      </div>
    );
  }
};

export default Recommended;