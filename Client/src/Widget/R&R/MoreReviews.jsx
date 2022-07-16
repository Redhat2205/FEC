import React, { useState } from 'react';

const MoreReviews = ({ initialView, setInitialView }) => {
  return (
    <div style={{width: '180px', height: '25px', textAlign: 'center', float: 'left', border: 'solid 1px', padding: '25px 0 25px', margin: '4px'}} onClick={() => (setInitialView(!initialView))}>MORE REVIEWS</div>
  );
};

export default MoreReviews;