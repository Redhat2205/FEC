/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

// eslint-disable-next-line consistent-return
const MoreReviews = ({
  initialView, setInitialView, numberTiles, setNumberTiles, reviewCount,
  // eslint-disable-next-line consistent-return
}) => (
  // eslint-disable-next-line jsx-a11y/no-static-element-interactions
  <div
    style={{
      width: '180px',
      height: '25px',
      textAlign: 'center',
      float: 'left',
      border: 'solid 1px',
      padding: '25px 0 25px',
      margin: '4px',
    }}
    onClick={() => (setNumberTiles((old) => old + 2))}
  >
    MORE REVIEWS
  </div>
);

export default MoreReviews;