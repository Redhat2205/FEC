import React from 'react';

const underlineStyle = {
  textDecoration: 'underline',
  border: 'none',
  outline: 'none',
  scrollBehavior: 'smooth',
  fontSize: '16px',
}

const Sorting = ({ reviewCount }) => {
  // console.log(reviews);
  // const reviewCount = reviews.length;
  // console.log(reviewCount);
  // because this is async, need to get the data then render the text

  return (
    <>
    <label>{reviewCount} reviews, sorted by</label>
    <select style={underlineStyle} name="sorting-dropdown-menu">
      <option value="helpfulness">helpfulness</option>
      <option value="newest">newest</option>
      <option vaklue="relevance">relevance</option>
    </select>
    </>
  );
};

export default Sorting;