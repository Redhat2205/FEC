import React from 'react';
import BasicFn from './BasicFn.jsx';
import BarChartDemo from './BarChartDemo.jsx';
import Recommended from './Recommended.jsx';
import Factors from './Factors.jsx';

// eslint-disable-next-line consistent-return
const RatingChart = ({
  currentItem, averageRating, productReviews, metaData,
}) => {
  if (metaData && productReviews && averageRating) {
    return (
      <div>
        <div style={{marginLeft: '15px'}}>
          <h5 style={{ display: 'inline-block', fontWeight: '700', fontSize: '30px' }}>{averageRating}</h5>
          <BasicFn averageRating={averageRating} style={{ display: 'inline-block' }} />
        </div>
        <Recommended productReviews={productReviews} />
        <div>
          <BarChartDemo productReviews={productReviews} />
        </div>
        <div>
          <Factors productReviews={productReviews} characteristics={metaData.characteristics} />
        </div>
      </div>
    );
  }
};

export default RatingChart;