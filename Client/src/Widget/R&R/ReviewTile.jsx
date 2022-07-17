import React from 'react';
const moment = require('moment');
import ReviewImages from './ReviewImages.jsx';

// styles
const textRight = {
  textAlign: 'right',
};

const greyBG = {
  backgroundColor: 'grey',
};

const tileBottomBorder = {
  borderBottom: '2px solid',
  margin: '2px',
};

const ReviewTile = ({ eachReview }) => {
  // need to format the review title and split it if necessary

  // if image <========================================================>
  if (eachReview.photos.length > 0) {
    // recommended!
    if (eachReview.recommend === true) {
      // response given!
      if (eachReview.response) {
        return (
          <div className="review-tile-container" style={tileBottomBorder}>
            <h5 style={textRight}>{eachReview.reviewer_name + ', ' + moment(eachReview.date).format('MMMM Do YYYY')}</h5>
            <h3>Review Title</h3>
            <h5>{eachReview.summary}</h5>
            <p>{eachReview.body}</p>
            <ReviewImages images={eachReview.photos} />
            <p>✔︎ I recommend this product</p>
            <div style={greyBG}>{eachReview.response}</div>
          </div>
        );
      } else { // no response given!
        return (
          <div className="review-tile-container" style={tileBottomBorder}>
            <h5 style={textRight}>{eachReview.reviewer_name + ', ' + moment(eachReview.date).format('MMMM Do YYYY')}</h5>
            <h3>Review Title</h3>
            <h5>{eachReview.summary}</h5>
            <p>{eachReview.body}</p>
            <ReviewImages images={eachReview.photos} />
            <p>✔︎ I recommend this product</p>
          </div>
        );
      }
    } else { // not recommended!
      // response given!!!
      if (eachReview.response) {
        return (
          <div className="review-tile-container" style={tileBottomBorder}>
            <h5 style={textRight}>{eachReview.reviewer_name + ', ' + moment(eachReview.date).format('MMMM Do YYYY')}</h5>
            <h3>Review Title</h3>
            <h5>{eachReview.summary}</h5>
            <p>{eachReview.body}</p>
            <ReviewImages images={eachReview.photos} />
            <div style={greyBG}>{eachReview.response}</div>
          </div>
        );
      } else {
        // no response given!!!
        return (
          <div className="review-tile-container" style={tileBottomBorder}>
            <h5 style={textRight}>{eachReview.reviewer_name + ', ' + moment(eachReview.date).format('MMMM Do YYYY')}</h5>
            <h3>Review Title</h3>
            <h5>{eachReview.summary}</h5>
            <p>{eachReview.body}</p>
            <ReviewImages images={eachReview.photos} />
          </div>
        );
      }
    }
  } else {
    // if no image <========================================================>
    // recommended!
    if (eachReview.recommend === true) {
      // response given!
      if (eachReview.response) {
        return (
          <div className="review-tile-container" style={tileBottomBorder}>
            <h5 style={textRight}>{eachReview.reviewer_name + ', ' + moment(eachReview.date).format('MMMM Do YYYY')}</h5>
            <h3>Review Title</h3>
            <h5>{eachReview.summary}</h5>
            <p>{eachReview.body}</p>
            <p>✔︎ I recommend this product</p>
            <div style={greyBG}>{eachReview.response}</div>
          </div>
        );
      } else { // no response given!
        return (
          <div className="review-tile-container" style={tileBottomBorder}>
            <h5 style={textRight}>{eachReview.reviewer_name + ', ' + moment(eachReview.date).format('MMMM Do YYYY')}</h5>
            <h3>Review Title</h3>
            <h5>{eachReview.summary}</h5>
            <p>{eachReview.body}</p>
            <p>✔︎ I recommend this product</p>
          </div>
        );
      }
    } else { // not recommended!
      // response given!!!
      if (eachReview.response) {
        return (
          <div className="review-tile-container" style={tileBottomBorder}>
            <h5 style={textRight}>{eachReview.reviewer_name + ', ' + moment(eachReview.date).format('MMMM Do YYYY')}</h5>
            <h3>Review Title</h3>
            <h5>{eachReview.summary}</h5>
            <p>{eachReview.body}</p>
            <div style={greyBG}>{eachReview.response}</div>
          </div>
        );
      } else {
        // no response given!!!
        return (
          <div className="review-tile-container" style={tileBottomBorder}>
            <h5 style={textRight}>{eachReview.reviewer_name + ', ' + moment(eachReview.date).format('MMMM Do YYYY')}</h5>
            <h3>Review Title</h3>
            <h5>{eachReview.summary}</h5>
            <p>{eachReview.body}</p>
          </div>
        );
      }
    }
  }
};

export default ReviewTile;