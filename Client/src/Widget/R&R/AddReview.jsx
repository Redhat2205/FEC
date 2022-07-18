import React, { useState } from 'react';

const addReviewStyle = {
  width: '200px',
  height: '25px',
  textAlign: 'center',
  float: 'left',
  border: '1px solid',
  padding: '25px 0 25px',
  margin: '4px',
};

const AddReview = ({ setShow, show }) => (
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
  <div style={addReviewStyle} onClick={() => setShow(!show)}>ADD A REVIEW +</div>
);

export default AddReview;