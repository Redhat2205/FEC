import React from 'react';
import BasicFn from './BasicFn.jsx';
import BarChartDemo from './BarChartDemo.jsx';
import Recommended from './Recommended.jsx';
import Factors from './Factors.jsx';

// eslint-disable-next-line consistent-return
const RatingChart = ({ currentItem, averageRating, productReviews, metaData }) => (
  <div>
    <h5 style={{ display: 'inline-block' }}>{averageRating}</h5>
    <BasicFn averageRating={averageRating} style={{ display: 'inline-block' }} />
    <Recommended productReviews={productReviews} />
    <div>
      <BarChartDemo productReviews={productReviews} />
    </div>
    <div>
      <Factors productReviews={productReviews} metaData={metaData} />
    </div>
  </div>
);

export default RatingChart;