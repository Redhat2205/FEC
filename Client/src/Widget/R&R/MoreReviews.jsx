/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

const MoreReviews = ({ initialView, setInitialView, numberTiles, setNumberTiles, reviewCount }) => {
  // eslint-disable-next-line jsx-a11y/no-static-element-interactions
  if (numberTiles !== reviewCount) {
    return (
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
  }
  if (numberTiles === reviewCount) {
    return (
      null
    );
  }
};

export default MoreReviews;