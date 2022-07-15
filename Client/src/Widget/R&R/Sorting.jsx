import React from 'react';

const underlineStyle = {
  textDecoration: 'underline',
}

const Sorting = ({ reviewCount }) => {
  // console.log(reviews);
  // const reviewCount = reviews.length;
  // console.log(reviewCount);
  // because this is async, need to get the data then render the text

  return (
    <h3>{reviewCount} reviews, sorted by <span style={underlineStyle} onClick={(e) => {
      console.log('sorting this out')
    }}>...</span></h3>
  );
};

export default Sorting;