import React from "react";
import axios from 'axios';

import ReviewList from './ReviewList.jsx';
import RatingChart from './RatingChart.jsx';

const API_BASE = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe';
const Magic = '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';

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
      productReviews: [],
      currentItem: {},
    };
    // bind handlers in constructor
    this.fetchReviewsTest = this.fetchReviewsTest.bind(this);
  }

  componentDidMount() {
    this.fetchReviewsTest();
  }

  fetchReviewsTest() {
    axios({
      method: 'get',
      url: API_BASE + '/reviews',
      headers: { Authorization: Magic },
      params: { product_id: '37320' },
    })
      .then((res) => {
        this.setState({ productReviews: res.data.results });
        this.setState({ currentItem: res.data.results[0] });
      })
      .catch((err) => {
        console.log('🟥there was an error fetching product info!', err);
      });
  }

  render() {
    return (
      <div className="rnr-container">
        <h1 style={{textAlign: 'center'}}>Ratings and Reviews</h1>
        <div className="rating-chart-container" style={{ border: 'solid 2px', float: 'left', width: '49%' }}>
          <RatingChart currentItem={this.state.currentItem} />
        </div>
        <div className="review-list-container" style={{ border: 'solid 2px', float: 'right', width: '49%' }}>
          <h3 style={{textAlign: 'center'}}>Review List</h3>
          <ReviewList reviews={this.state.productReviews} />
        </div>
      </div>
    );
  }
}

export default R_R;