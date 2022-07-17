import React from 'react';
import BasicFn from './BasicFn.jsx';

// eslint-disable-next-line consistent-return
const RatingChart = ({ currentItem, averageRating }) => (
  <div>
    <h5 style={{ display: 'inline-block' }}>{averageRating}</h5>
    <BasicFn averageRating={averageRating} style={{ display: 'inline-block' }} />
    <div>
      <p>
        rating breakdown, characteristics
      </p>
    </div>
  </div>
);

export default RatingChart;