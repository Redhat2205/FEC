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
const Sorting = ({ reviews, reviewCount, setRenderedReviews }) => {
  if (reviews) {
    const newest = reviews.slice(0).sort((a, b) => (
      a.review_id < b.review_id ? 1 : -1
    ));

    const oldest = reviews.slice(0).sort((a, b) => (
      // a.review_id > b.review_id ? 1 : -1
      a.review_id - b.review_id
    ));

    const helpfulness = reviews.slice(0).sort((a, b) => (
      // a.helpful > b.helpful ? -1 : 1
      a.helpfulness - b.helpfulness
    ));

    const relevance = newest.slice(0).sort((a, b) => (
      a.helpfulness > b.helpfulness ? -1 : 1
    ));

    // console.log('reviews fresh from API', reviews);

    // console.log('newest sorted');
    // newest.forEach((rev) => {
    //   console.log(rev.review_id);
    // });

    // console.log('oldest sorted');
    // oldest.forEach((rev) => {
    //   console.log(rev.review_id);
    // });

    // console.log('helpfulness sorted');
    // helpfulness.forEach((rev) => {
    //   console.log(rev.helpfulness);
    // });

    // console.log('relevance sorted');
    // relevance.forEach((rev) => {
    //   console.log(rev.review_id, rev.helpfulness, rev.date.slice(0, 10));
    //   // console.log(rev);
    // });

    return (
      <div>
        <label>
          {`${reviewCount} reviews, sorted by `}
        </label>
        <select style={underlineStyle} name="sorting-dropdown-menu">
          <option value="helpfulness">helpfulness</option>
          <option value="newest">newest</option>
          <option value="oldest">oldest</option>
          <option value="relevance">relevance</option>
        </select>
      </div>
    );
  }
};

export default Sorting;