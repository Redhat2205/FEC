import React from 'react';
import ReviewTile from './ReviewTile.jsx';

const ReviewList = (props) => (
  <ul>
    {/* <ReviewTile currentItem={props.currentItem} /> */}
    {props.reviews.map((review) => (
      <ReviewTile eachReview={review}/>
    ))}
  </ul>
);

export default ReviewList;