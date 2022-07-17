import React from 'react';

// eslint-disable-next-line consistent-return
const BarChartDemo = ({ productReviews }) => {
  // console.log(productReviews);
  // console.log(sample);
  if (!productReviews) {
    return (
      <p>loading</p>
    );
  }
  if (productReviews) {
    const sample = productReviews.map((review) => review.rating);

    if (sample) {
      const ones = productReviews.filter((review) => review.rating === 1);
      const onesPct = ((ones.length / productReviews.length) * 100).toFixed(2);
      // console.log(`${ones.length} 1-star reviews is ${onesPct} percent of total`);
      const twos = productReviews.filter((review) => review.rating === 2);
      const twosPct = ((twos.length / productReviews.length) * 100).toFixed(2);
      // console.log(`${twos.length} 2-star reviews is ${twosPct} percent of total`);
      const threes = productReviews.filter((review) => review.rating === 3);
      const threesPct = ((threes.length / productReviews.length) * 100).toFixed(2);
      // console.log(`${threes.length} 3-star reviews is ${threesPct} percent of total`);
      const fours = productReviews.filter((review) => review.rating === 4);
      const foursPct = ((fours.length / productReviews.length) * 100).toFixed(2);
      // console.log(`${fours.length} 4-star reviews is ${foursPct} percent of total`);
      const fives = productReviews.filter((review) => review.rating === 5);
      const fivesPct = ((fives.length / productReviews.length) * 100).toFixed(2);
      // console.log(`${fives.length} 5-star reviews is ${fivesPct} percent of total`);
      return (
        // <g></g>
        <ul>
          {/* {sample.map((rating, index) => <p key={index}>{rating}</p>)} */}
          <li>{`${ones.length} 1-star reviews is ${onesPct} percent of total`}</li>
          <li>{`${twos.length} 2-star reviews is ${twosPct} percent of total`}</li>
          <li>{`${threes.length} 3-star reviews is ${threesPct} percent of total`}</li>
          <li>{`${fours.length} 4-star reviews is ${foursPct} percent of total`}</li>
          <li>{`${fives.length} 5-star reviews is ${fivesPct} percent of total`}</li>
        </ul>
        // <p>ratings array</p>
      );
    }
  }
};

export default BarChartDemo;