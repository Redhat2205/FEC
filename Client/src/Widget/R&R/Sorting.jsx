/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import moment from 'moment';

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

// eslint-disable-next-line consistent-return
const Sorting = ({ reviews, reviewCount, setSort }) => {
  if (reviews) {
    // const newest = reviews.slice(0).sort((a, b) => (
    //   a.review_id < b.review_id ? 1 : -1
    // ));

    // const oldest = reviews.slice(0).sort((a, b) => (
    //   // a.review_id > b.review_id ? 1 : -1
    //   a.review_id - b.review_id
    // ));

    // const helpfulness = reviews.slice(0).sort((a, b) => (
    //   // a.helpful > b.helpful ? -1 : 1
    //   a.helpfulness - b.helpfulnessd
    // ));

    // const relevance = newest.slice(0).sort((a, b) => (
    //   a.helpfulness > b.helpfulness ? -1 : 1
    // ));

    const selectHandler = (e) => {
      console.log('select handler value sort:', e.target.value);
      // setResourceType(e.target.value);
      // console.log('e.target.value@sort:', sorts[e.target.value])
      setSort(e.target.value);
    };

    return (
      <div>
        <label>
          {`${reviewCount} reviews, sorted by `}
        </label>
        <select style={underlineStyle} name="sorting-dropdown-menu" onChange={(e) => { selectHandler(e); }}>
          <option value="helpfulness">helpfulness</option>
          <option value="newest">newest</option>
          <option value="relevance">relevance</option>
        </select>
      </div>
    );
  }
};

export default Sorting;