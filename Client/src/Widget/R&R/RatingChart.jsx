import React from 'react';

const RatingChart = ({ currentItem, averageRating }) => {

  // console.log(currentItem);
  const dummedDown = Math.ceil(averageRating);
  if (dummedDown === 1) {
    return (
      <div>
      <h1 style={{ textAlign: 'center', fontFamily: 'tahoma' }}>{'Rating:' + ' ' + averageRating}</h1>
      <p style={{ textAlign: 'center' }}>⭐️</p>
    </div>
    );
  }
  if (dummedDown === 2) {
    return (
      <div>
      <h1 style={{ textAlign: 'center', fontFamily: 'tahoma' }}>{'Rating:' + ' ' + averageRating}</h1>
      <p style={{ textAlign: 'center' }}>⭐️⭐️</p>
    </div>
    )
  }
  if (dummedDown === 3) {
    return (
      <div>
      <h1 style={{ textAlign: 'center', fontFamily: 'tahoma' }}>{'Rating:' + ' ' + averageRating}</h1>
      <p style={{ textAlign: 'center' }}>⭐️⭐️⭐️</p>
    </div>
    )
  }
  if (dummedDown === 4) {
    return (
      <div>
      <h1 style={{ textAlign: 'center', fontFamily: 'tahoma' }}>{'Rating:' + ' ' + averageRating}</h1>
      <p style={{ textAlign: 'center' }}>⭐️⭐️⭐️⭐️</p>
    </div>
    )
  }
  if (dummedDown === 5) {
    return (
      <div>
      <h1 style={{ textAlign: 'center', fontFamily: 'tahoma' }}>{'Rating:' + ' ' + averageRating}</h1>
      <p style={{ textAlign: 'center' }}>⭐️⭐️⭐️⭐️⭐️</p>
    </div>
    )
  } else if (typeof dummedDown !== 'number') {
    return (
      <div>
      <h1 style={{ textAlign: 'center', fontFamily: 'tahoma' }}>{'Rating: -'}</h1>
    </div>
    )
  }
};

export default RatingChart;