import React from 'react';

import UserStars from './UserStars.jsx';

import ReviewImages from './ReviewImages.jsx';

import HelpfulReport from './HelpfulReport.jsx';

const moment = require('moment');

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
            <h5 style={textRight}>{`${eachReview.reviewer_name}, ${moment(eachReview.date).format('MMMM Do YYYY')}`}</h5>
            <UserStars eachReview={eachReview} />
            <h3>{eachReview.summary}</h3>
            <p>{eachReview.body}</p>
            <ReviewImages images={eachReview.photos} />
            <p>✔︎ I recommend this product</p>
            <div style={greyBG}>{eachReview.response}</div>
            <HelpfulReport helpfulness={eachReview.helpfulness} reviewID={eachReview.review_id} />
          </div>
        );
      } // no response given!
      return (
        <div className="review-tile-container" style={tileBottomBorder}>
          <h5 style={textRight}>{`${eachReview.reviewer_name}, ${moment(eachReview.date).format('MMMM Do YYYY')}`}</h5>
          <UserStars eachReview={eachReview} />
          <h3>{eachReview.summary}</h3>
          <p>{eachReview.body}</p>
          <ReviewImages images={eachReview.photos} />
          <p>✔︎ I recommend this product</p>
          <HelpfulReport helpfulness={eachReview.helpfulness} reviewID={eachReview.review_id} />
        </div>
      );
    } // not recommended!
    // response given!!!
    if (eachReview.response) {
      return (
        <div className="review-tile-container" style={tileBottomBorder}>
          <h5 style={textRight}>{`${eachReview.reviewer_name}, ${moment(eachReview.date).format('MMMM Do YYYY')}`}</h5>
          <UserStars eachReview={eachReview} />
          <h3>{eachReview.summary}</h3>
          <p>{eachReview.body}</p>
          <ReviewImages images={eachReview.photos} />
          <div style={greyBG}>{eachReview.response}</div>
          <HelpfulReport helpfulness={eachReview.helpfulness} reviewID={eachReview.review_id} />
        </div>
      );
    }
    // no response given!!!
    return (
      <div className="review-tile-container" style={tileBottomBorder}>
        <h5 style={textRight}>{`${eachReview.reviewer_name}, ${moment(eachReview.date).format('MMMM Do YYYY')}`}</h5>
        <UserStars eachReview={eachReview} />
        <h3>{eachReview.summary}</h3>
        <p>{eachReview.body}</p>
        <ReviewImages images={eachReview.photos} />
        <HelpfulReport helpfulness={eachReview.helpfulness} reviewID={eachReview.review_id} />
      </div>
    );
  }
  // if no image <========================================================>
  // recommended!
  if (eachReview.recommend === true) {
    // response given!
    if (eachReview.response) {
      return (
        <div className="review-tile-container" style={tileBottomBorder}>
          <h5 style={textRight}>{`${eachReview.reviewer_name}, ${moment(eachReview.date).format('MMMM Do YYYY')}`}</h5>
          <UserStars eachReview={eachReview} />
          <h3>{eachReview.summary}</h3>
          <p>{eachReview.body}</p>
          <p>✔︎ I recommend this product</p>
          <div style={greyBG}>{eachReview.response}</div>
          <HelpfulReport helpfulness={eachReview.helpfulness} reviewID={eachReview.review_id} />
        </div>
      );
    } // no response given!
    return (
      <div className="review-tile-container" style={tileBottomBorder}>
        <h5 style={textRight}>
          {`${eachReview.reviewer_name}, ${moment(eachReview.date).format('MMMM Do YYYY')}`}
        </h5>
        <UserStars eachReview={eachReview} />
        <h3>{eachReview.summary}</h3>
        <p>{eachReview.body}</p>
        <p>✔︎ I recommend this product</p>
        <HelpfulReport helpfulness={eachReview.helpfulness} reviewID={eachReview.review_id} />
      </div>
    );
  } // not recommended!
  // response given!!!
  if (eachReview.response) {
    return (
      <div className="review-tile-container" style={tileBottomBorder}>
        <h5 style={textRight}>{`${eachReview.reviewer_name}, ${moment(eachReview.date).format('MMMM Do YYYY')}`}</h5>
        <UserStars eachReview={eachReview} />
        <h3>{eachReview.summary}</h3>
        <p>{eachReview.body}</p>
        <div style={greyBG}>{eachReview.response}</div>
        <HelpfulReport helpfulness={eachReview.helpfulness} reviewID={eachReview.review_id} />
      </div>
    );
  }
  // no response given!!!
  return (
    <div className="review-tile-container" style={tileBottomBorder}>
      <h5 style={textRight}>{`${eachReview.reviewer_name}, ${moment(eachReview.date).format('MMMM Do YYYY')}`}</h5>
      <UserStars eachReview={eachReview} />
      <h3>{eachReview.summary}</h3>
      <p>{eachReview.body}</p>
      <HelpfulReport helpfulness={eachReview.helpfulness} reviewID={eachReview.review_id} />
    </div>
  );
};

export default ReviewTile;