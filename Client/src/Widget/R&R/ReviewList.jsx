/* eslint-disable import/no-named-as-default */
import React, { useState } from 'react';
import ReviewTile from './ReviewTile.jsx';
import AddReview from './AddReview.jsx';
import MoreReviews from './MoreReviews.jsx';
import AddReviewModal from './AddReviewModal.jsx';
import Sorting from './Sorting.jsx';

const sortingStyle = {
  marginLeft: '10%',
};

const ReviewList = ({
  currentItem, reviews, reviewCount, sort, setSort, metaData,
}) => {
  const [show, setShow] = useState(false);
  const [initialView, setInitialView] = useState(true);
  const [numberTiles, setNumberTiles] = useState(2);
  const [renderedReviews, setRenderedReviews] = useState(reviews);
  const [currentSort, setCurrentSort] = useState();
  // const
  // put the state for the sort

  // useEffect(() => {
  // setRenderedReviews()
  // }, [currentSort]);

  if (reviews && metaData) {
    // set the sorting here

    // const newest = reviews.slice(0).sort((a, b) => (
    //   a.review_id < b.review_id ? 1 : -1
    // ));

    // const oldest = reviews.slice(0).sort((a, b) => (
    //   // a.review_id > b.review_id ? 1 : -1
    //   a.review_id - b.review_id
    // ));

    // const helpfulness = reviews.slice(0).sort((a, b) => (
    //   // a.helpful > b.helpful ? -1 : 1
    //   a.helpfulness - b.helpfulnessd
    // ));

    // const relevance = newest.slice(0).sort((a, b) => (
    //   a.helpfulness > b.helpfulness ? -1 : 1
    // ));

    // const sorts = [newest, oldest, helpfulness, relevance];

    // console.log('array of sorts in ReviewList', sorts);
    // console.log('newest', newest);
    // console.log('oldest', oldest);
    // console.log('helpfulness', helpfulness);
    // console.log('relevance', relevance);

    // console.log('reviews', reviews);
    // () => {setRenderedReviews(() => {reviews})};
  }
  if (renderedReviews && metaData) {
    // console.log('handle async!');
    // console.log(renderedReviews);
    if (initialView) {
      return (
        <div style={sortingStyle}>
          <Sorting reviewCount={reviewCount} reviews={reviews} setRenderedReviews={setRenderedReviews} sort={sort} setSort={setSort} />
          {/* {renderedReviews ? <Sorting reviewCount={reviewCount} reviews={renderedReviews} setRenderedReviews={setRenderedReviews} /> : null} */}
          <ul>
            {reviews.slice(0, numberTiles).map((review) => (
              <ReviewTile key={review.review_id} eachReview={review} />
            ))}
          </ul>
          {numberTiles < reviewCount && <MoreReviews initialView={initialView} setInitialView={setInitialView} numberTiles={numberTiles} setNumberTiles={setNumberTiles} reviewCount={reviewCount} />}
          <AddReview show={show} setShow={setShow} />
          <AddReviewModal show={show} setShow={setShow} currentItem={currentItem} characteristics={metaData.characteristics} />
        </div>
      );
    } return (
      <div style={sortingStyle}>
        <Sorting reviewCount={reviewCount} reviews={reviews} setRenderedReviews={setRenderedReviews} sort={sort} setSort={setSort} />
        {/* {renderedReviews ? <Sorting reviewCount={reviewCount} reviews={renderedReviews} setRenderedReviews={setRenderedReviews} /> : null} */}
        <ul>
          {reviews.map((review) => (
            <ReviewTile key={review.review_id} eachReview={review} />
          ))}
        </ul>
        {/* <MoreReviews onClick={() => (setInitialView(!initialView))} /> */}
        {numberTiles < reviewCount && <MoreReviews view={initialView} setInitialView={setInitialView} numberTiles={numberTiles} setNumberTiles={setNumberTiles} reviewCount={reviewCount} />}
        <AddReview show={show} setShow={setShow} />
        <AddReviewModal show={show} setShow={setShow} currentItem={currentItem} characteristics={metaData.characteristics} />
      </div>
    );
  }
};

export default ReviewList;