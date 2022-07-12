import React from 'react';
import ReviewTile from './ReviewTile.jsx';

const ReviewList = (props) => (
  <ul>
    {/* <ReviewTile currentItem={props.currentItem} /> */}
    {props.reviews.map((review) => (
      <ReviewTile key={review.review_id} eachReview={review}/>
    ))}
  </ul>
);

export default ReviewList;