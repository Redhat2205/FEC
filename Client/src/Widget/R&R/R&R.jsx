import React from "react";
import axios from 'axios';
import config from '../../../../config.js';

import ReviewList from './ReviewList.jsx';
import RatingChart from './RatingChart.jsx';

const API_BASE = config.URL;
const Magic = config.KEY;

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

// const rando = Math.floor(Math.random() * dummyData.length);

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
    // this.setState({productReviews: dummyData});
    // this.setState({currentItem: this.state.productReviews[0]});
  }

  render() {
    return (
      <div className="rnr-container">
        <h1 id="main-rnr-header" data-testid="rnr" style={{textAlign: 'center', fontFamily: 'tahoma'}}>Ratings and Reviews</h1>
        <div className="rating-chart-container" style={{ border: 'solid 1px', borderRadius: '5px', boxShadow: '5px 10px #888888', float: 'left', width: '33%' }}>
          <RatingChart currentItem={this.state.currentItem} />
        </div>
        <div className="review-list-container" style={{ border: 'solid 1px', borderRadius: '5px', boxShadow: '5px 10px #888888', float: 'right', width: '66%', marginBottom: '20px' }}>
          <h1 style={{textAlign: 'center', fontFamily: 'Tahoma'}}>Review List</h1>
          <ReviewList reviews={this.state.productReviews} />
        </div>
      </div>
    );
  }
}

export default R_R;