import React, { useState } from 'react';

const addReviewStyle = {
  width: '200px',
  height: '25px',
  textAlign: 'center',
  float: 'left',
  border: '1px solid',
  padding: '25px 0 25px',
  margin: '4px'
};

const AddReview = (props) => {
  return (
    <div style={addReviewStyle} onClick={() => props.setShow(!props.show)}>ADD A REVIEW ┼</div>
  );
};

export default AddReview;