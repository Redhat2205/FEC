import React from 'react';

// eslint-disable-next-line consistent-return
const RatingChart = ({ currentItem, averageRating }) => {
  // console.log(currentItem);
  const dummedDown = Math.floor(averageRating);
  if (dummedDown === 1) {
    return (
      // eslint-disable-next-line react/jsx-no-comment-textnodes
      <div>
        // eslint-disable-next-line no-useless-concat, no-useless-concat
        <h1 style={{ textAlign: 'center', fontFamily: 'tahoma' }}>{`Rating:` + ` ${ averageRating}`}</h1>
      <p style={{ textAlign: 'center' }}>⭐️</p>
      </div>
    );
  }
  if (dummedDown === 2) {
    return (
      <div>
      <h1 style={{ textAlign: 'center', fontFamily: 'tahoma' }}>{`Rating:` + ` ${  averageRating}`}</h1>
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