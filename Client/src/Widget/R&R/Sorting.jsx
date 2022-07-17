import React from 'react';

const underlineStyle = {
  textDecoration: 'underline',
  border: 'none',
  outline: 'none',
  scrollBehavior: 'smooth',
  fontSize: '16px',
};

// Helpful
// descending (eachreview => allYes - allNo)

// Newest
// a stack

// Relevant
// stack order and helpfulness rating
// use stack but helpfulness trumps review date

const Sorting = ({ reviewCount }) => (
  <div>
    <label>
      {reviewCount}
      {' '}
      reviews, sorted by
    </label>
    <select style={underlineStyle} name="sorting-dropdown-menu">
      <option value="helpfulness">helpfulness</option>
      <option value="newest">newest</option>
      <option value="relevance">relevance</option>
    </select>
  </div>
);

export default Sorting;