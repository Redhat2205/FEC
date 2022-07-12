import React from 'react';
const moment = require('moment');

const ReviewTile = (props) => {
  if (props.eachReview.recommend === true) {
    return (
      <div className="review-tile-container" style={{ borderBottom: '2px solid', margin: '2px' }}>
        <h5 style={{textAlign: 'right'}}>{props.eachReview.reviewer_name + ', ' + moment(props.eachReview.date).format('MMMM Do YYYY')}</h5>
        <h3>Review Title</h3>
        <h5>{props.eachReview.summary}</h5>
        <p>{props.eachReview.body}</p>
        <p>✔︎ I recommend this product</p>
        {/* <img src={props.eachReview.photos[0].url}></img> */}
      </div>
    );
  } else {
    return (
      <div className="review-tile-container" style={{ borderBottom: '2px solid', margin: '2px' }}>
      <h5 style={{textAlign: 'right'}}>{props.eachReview.reviewer_name + ', ' + moment(props.eachReview.date).format('MMMM Do YYYY')}</h5>
      <h3>Review Title</h3>
      <h5>{props.eachReview.summary}</h5>
      <p>{props.eachReview.body}</p>
      {/* <img src={props.eachReview.photos[0].url}></img> */}
    </div>
    );
  }
};

export default ReviewTile;