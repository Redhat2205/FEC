import React, { useState } from 'react';
import ReviewTile from './ReviewTile.jsx';
import AddReview from './AddReview.jsx';
import MoreReviews from './MoreReviews.jsx';
import AddReviewModal from './AddReviewModal.jsx';

const ReviewList = (props) => {
  const [show, setShow] = useState(false);
  return (
  <>
    <ul>
      {/* <ReviewTile currentItem={props.currentItem} /> */}
      {props.reviews.map((review) => (
        <ReviewTile key={review.review_id} eachReview={review}/>
      ))}
    </ul>
    <MoreReviews />
    <AddReview show={show} setShow={setShow} />
    <AddReviewModal show={show} setShow={setShow}/>
  </>
  );
};

export default ReviewList;