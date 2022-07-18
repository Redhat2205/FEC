/* eslint-disable camelcase */
import React, { useState, useEffect } from "react";
import axios from 'axios';

import ReviewList from './ReviewList.jsx';
import RatingChart from './RatingChart.jsx';
import StarTest from './StarTest.jsx';
import MaskTest from './MaskTest.jsx';
import BasicFn from './BasicFn.jsx';

const moment = require('moment');

const R_R = ({ productID }) => {
  const [productReviews, setProductReviews] = useState([]);
  const [currentItem, setCurrentItem] = useState({});
  const [averageRating, setAverageRating] = useState(null);
  const [metaData, setMetaData] = useState(null);
  const [reviewCount, setReviewCount] = useState(null);

  // set the currentItem
  useEffect(() => {
    axios({
      method: 'get',
      url: `${process.env.API_Base}/products/${productID}`,
      headers: { Authorization: process.env.API_Key },
      // params: { product_id: productID },
    })
      .then((res) => {
        // console.log('specific product:', res.data);
        setCurrentItem(res.data);
      })
      .catch((err) => {
        console.log('🟥there was an error fetching product info!', err);
      });
  }, []);

  // get all reviews for a specific product
  useEffect(() => {
    axios({
      method: 'get',
      url: `${process.env.API_Base}/reviews/`,
      // url: API_Base + '/reviews/' + productID,
      headers: { Authorization: process.env.API_Key },
      params: {
        product_id: productID,
        count: '9999',
      },
    })
      .then((res) => {
        // console.log('all reviews specific product', res.data.results);
        setProductReviews(res.data.results);
        setReviewCount(res.data.results.length);
        // set the average rating
        let total = 0;
        res.data.results.forEach((result) => { total += result.rating; });
        // console.log('total rating:', total);
        // console.log('average rating:', total / res.data.results.length);
        // setAverageRating(total * 1.00);
        setAverageRating(Math.round((total / res.data.results.length) * 10) / 10);
        // console.log('response data results', res.data.results.length);
      })
      .catch((err) => {
        console.log('🟥there was an error fetching product info!', err);
      });
  }, []);

  // get all metadata for a specific product
  useEffect(() => {
    axios({
      method: 'get',
      url: `${process.env.API_Base}/reviews/meta`,
      headers: { Authorization: process.env.API_Key },
      params: { product_id: productID },
    })
      .then((res) => {
        setMetaData(() => res.data);
      })
      .catch((err) => {
        console.log('🟥There was an error fetching product metadata!', err);
      });
  }, []);

  return (
    <div className="rnr-container">
      <div>
        <h1 id="main-rnr-header" data-testid="rnr" style={{ textAlign: 'left', fontFamily: 'tahoma' }}>Ratings and Reviews</h1>
      </div>
      {/* <MaskTest /> */}
      {/* <StarTest style={{backgroundColor: 'gold', height: '10px'}} className="StarTest"/> */}
      {/* <StarTest className="StarTest" /> */}
      {/* <BasicFn averageRating={averageRating} /> */}
      <div
        className="rating-chart-container"
        style={{
          border: 'solid 1px', borderRadius: '5px', boxShadow: '5px 10px #888888', float: 'left', width: '33%',
        }}
      >
        <RatingChart currentItem={currentItem} averageRating={averageRating} productReviews={productReviews} metaData={metaData} />
      </div>
      <div
        className="review-list-container"
        style={{
          border: 'solid 1px', borderRadius: '5px', boxShadow: '5px 10px #888888', float: 'right', width: '66%', marginBottom: '20px',
        }}
      >
        <ReviewList reviews={productReviews} currentItem={currentItem} reviewCount={reviewCount} />
      </div>
    </div>
  );
};

export default R_R;