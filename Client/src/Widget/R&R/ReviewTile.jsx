import React from 'react';

const ReviewTile = (props) => (
  <div className="review-tile-container" style={{ borderBottom: '2px solid', margin: '2px' }}>
    <h5 style={{textAlign: 'right'}}>{props.eachReview.reviewer_name + ' ' + props.eachReview.date}</h5>
    <h3>Review Title</h3>
    <h5>{props.eachReview.summary}</h5>
    <p>{props.eachReview.body}</p>
    {/* <img src={props.eachReview.photos[0].url}></img> */}
  </div>
);

export default ReviewTile;