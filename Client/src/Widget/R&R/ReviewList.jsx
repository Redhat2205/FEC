import React, { useState } from 'react';
import ReviewTile from './ReviewTile.jsx';
import AddReview from './AddReview.jsx';
import MoreReviews from './MoreReviews.jsx';
import AddReviewModal from './AddReviewModal.jsx';
import Sorting from './Sorting.jsx';

const sortingStyle = {
  marginLeft: '10%',
};

const ReviewList = ({ currentItem, reviews }) => {
  const [show, setShow] = useState(false);
  const [initialView, setInitialView] = useState(true);
  const [numberTiles, setNumberTiles] = useState(2);

  if (initialView) {
    return (
      <div style={sortingStyle}>
        <Sorting reviews={reviews} />
        <ul>
          {reviews.slice(0, numberTiles).map((review) => (
            <ReviewTile key={review.review_id} eachReview={review} />
          ))}
        </ul>
        <MoreReviews initialView={initialView} setInitialView={setInitialView} numberTiles={numberTiles} setNumberTiles={setNumberTiles} reviewCount={reviews.length} />
        <AddReview show={show} setShow={setShow} />
        <AddReviewModal show={show} setShow={setShow} currentItem={currentItem} />
      </div>
    );
  } return (
    <div style={sortingStyle}>
      <Sorting reviews={reviews} />
      <ul>
        {reviews.map((review) => (
          <ReviewTile key={review.review_id} eachReview={review} />
        ))}
      </ul>
      {/* <MoreReviews onClick={() => (setInitialView(!initialView))} /> */}
      <MoreReviews view={initialView} setInitialView={setInitialView} numberTiles={numberTiles} setNumberTiles={setNumberTiles} reviewCount={reviews.length} />
      <AddReview show={show} setShow={setShow} />
      <AddReviewModal show={show} setShow={setShow} currentItem={currentItem} />
    </div>
  );
};

export default ReviewList;