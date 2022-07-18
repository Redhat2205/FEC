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
const Sorting = ({ reviews, reviewCount }) => {
  if (reviews) {
    const newest = reviews.slice(0).sort((a, b) => (
      a.review_id < b.review_id ? 1 : -1
    ));

    // const oldest = reviews.sort((a, b) => (a.date < b.date ? -1 : 1));
    const oldest = reviews.slice(0).sort((a, b) => (
      a.review_id > b.review_id ? 1 : -1
    ));
    // console.log('regular');
    // console.log('reviews:', reviews.forEach((review) => console.log(review.date)));
    // console.log('new new');
    // console.log('newest:', newest.forEach((review) => console.log(review.date)));
    // console.log('oldies');
    // console.log('oldest:', oldest.forEach((review) => console.log(review.date)));
    return (
      <div>
        <label>
          {reviewCount}
          reviews, sorted by
        </label>
        <select style={underlineStyle} name="sorting-dropdown-menu">
          <option value="helpfulness">helpfulness</option>
          <option value="newest">newest</option>
          <option value="relevance">relevance</option>
        </select>
      </div>
    );
  }
};

export default Sorting;