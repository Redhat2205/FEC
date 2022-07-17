/* eslint-disable camelcase */
import React, { useState, useEffect } from "react";
import axios from 'axios';

import ReviewList from './ReviewList.jsx';
import RatingChart from './RatingChart.jsx';
import StarTest from './StarTest.jsx';
import MaskTest from './MaskTest.jsx';
import BasicFn from './BasicFn.jsx';

const moment = require('moment');

// eslint-disable-next-line camelcase
const { API_Base } = process.env;
const secret = process.env.API_Key;

// const dummyData = [
//   {rating: 2,
//    summary: 'blah blah blaze blahblah',
//    date: '07-11-2022',
//    reviewer_name: 'shy guy',
//    body: 'dslajfdisfjidajfldsajflijlijflkdsjafldksjoigjasdoijgdisajfdigjisajgilsgjlidsajgil'
//   },
//   {rating: 3,
//    summary: 'pizza pizza pizza pizza',
//    date: '07-11-2022',
//    reviewer_name: 'pizza maniac',
//    body: 'adsfljkdsojgoiidsjgoidhfdhgljkfalfhdgfijiohweoirhgofshdihfighrowihgiohgioehgoi'
//   },
//   {rating: 5,
//    summary: '5 tacos plus rice and beans',
//    date: '07-11-2022',
//    reviewer_name: 'zeiram',
//    body: 'jaldfskjioewghaskhgjfdioshgiowrugroieuthdsaoghwrioiwohgiowahgoiefjo;gihrasagdhoi'
//   },
//   {rating: 1,
//    summary: 'behari beef kebab with rice, salad, chickpeas and bread',
//    date: '07-11-2022',
//    reviewer_name: 'Porsche Owner',
//    body: 'alksdjflahgoiewhgoiawhgiohgoijfaidoghriowhgoihwagiohfoghi'
//   },
//   {rating: 4,
//    summary: 'grilled chicken greek salad',
//    date: '07-11-2022',
//    reviewer_name: 'Giant Rabbit',
//    body: 'yuwihfgirosfhaeiodigosdjgjaghsflagsihiehegi'
//   },
// ];

const R_R = ({ productID }) => {
  const [productReviews, setProductReviews] = useState([]);
  const [currentItem, setCurrentItem] = useState({});
  const [reviewCount, setReviewCount] = useState(null);
  const [averageRating, setAverageRating] = useState(null);
  const [metaData, setMetaData] = useState(null);

  // useEffects will initialize widget state based on API response data

  // set the currentItem
  useEffect(() => {
    // get info for a specific product
    axios({
      method: 'get',
      url: `${API_Base}/products/${productID}`,
      headers: { Authorization: secret },
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

  useEffect(() => {
    // get all reviews for a specific product
    axios({
      method: 'get',
      url: `${API_Base}/reviews/`,
      // url: API_Base + '/reviews/' + productID,
      headers: { Authorization: secret },
      params: {
        product_id: productID,
        count: '9999',
      },
    })
      .then((res) => {
        // console.log('all reviews specific product', res.data.results);
        setProductReviews(res.data.results);

        // set the average rating
        let total = 0;
        res.data.results.forEach((result) => { total += result.rating; });
        // console.log('total rating:', total);
        // console.log('average rating:', total / res.data.results.length);
        // setAverageRating(total * 1.00);
        setAverageRating(Math.round((total / res.data.results.length) * 10) / 10);
        // console.log('response data results', res.data.results.length);
        setReviewCount(res.data.results.length);
      })
      .catch((err) => {
        console.log('🟥there was an error fetching product info!', err);
      });
  }, []);

  useEffect(() => {
    // get all metadata for a specific product
    axios({
      method: 'get',
      url: `${API_Base}/reviews/meta`,
      headers: { Authorization: secret },
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
        {/* <h1 style={{textAlign: 'center', fontFamily: 'Tahoma'}}>Review List</h1> */}
        <ReviewList reviews={productReviews} currentItem={currentItem} />
      </div>
    </div>
  );
};

export default R_R;