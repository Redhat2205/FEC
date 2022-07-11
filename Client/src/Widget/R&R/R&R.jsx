import React from "react";
import axios from 'axios';

import ReviewList from './ReviewList.jsx';

const API_BASE = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe';

// const R_R = () => (
//   <div className="rnr-container">
//     <h1>Ratings and Reviews</h1>
//     <div className="rating-chart-container" style={{border: 'solid 2px', float: 'left', width: '49%'}}>
//       <h3>Current Rating Chart</h3>
//     </div>
//     <div className="review-list-container" style={{border: 'solid 2px', float: 'right', width: '49%'}}>
//       <h3>Review List</h3>
//       <ReviewList />
//     </div>
//   </div>
// );

class R_R extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
    // bind handlers in constructor
    this.fetchReviewsTest = this.fetchReviewsTest.bind(this);
  }

  componentDidMount() {
    this.fetchReviewsTest();
  }

  fetchReviewsTest() {
    axios
      .get(API_BASE)
      .then((results) => {
        this.setState({ products: results });
      })
      .catch((err) => {
        console.log('🟥there was an error fetching product info!', err);
      });
  }

  render() {
    return (
      <div className="rnr-container">
        <h1>Ratings and Reviews</h1>
        <h5>{API_BASE}</h5>
        <div className="rating-chart-container" style={{ border: 'solid 2px', float: 'left', width: '49%' }}>
          <h3>Current Rating Chart</h3>
        </div>
        <div className="review-list-container" style={{ border: 'solid 2px', float: 'right', width: '49%' }}>
          <h3>Review List</h3>
          <ReviewList />
        </div>
      </div>
    );
  }
}

export default R_R;