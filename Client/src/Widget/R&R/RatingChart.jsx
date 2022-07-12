import React from 'react';

const RatingChart = (props) => (
  <div>
    <h1 style={{ textAlign: 'left' }}>{'Rating:' + ' ' + props.currentItem.rating}</h1>
  </div>
);

export default RatingChart;