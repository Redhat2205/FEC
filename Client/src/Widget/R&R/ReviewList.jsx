import React, { useState } from 'react';
import ReviewTile from './ReviewTile.jsx';
import AddReview from './AddReview.jsx';
import MoreReviews from './MoreReviews.jsx';
import AddReviewModal from './AddReviewModal.jsx';
import Sorting from './Sorting.jsx';

const sortingStyle = {
  marginLeft: '10%',
};

const ReviewList = ({ currentItem, reviews, reviewCount }) => {
  // console.log('reviewCount:', reviewCount);
  const [show, setShow] = useState(false);
  return (
    <div style={sortingStyle}>
      <Sorting reviewCount={reviewCount} />
      <ul>
        {reviews.map((review) => (
          <ReviewTile key={review.review_id} eachReview={review} />
        ))}
      </ul>
      <MoreReviews />
      <AddReview show={show} setShow={setShow} />
      <AddReviewModal show={show} setShow={setShow} currentItem={currentItem} />
    </div>
  );
};

export default ReviewList;