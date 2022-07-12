import React from 'react';

const RatingChart = (props) => {
  if (props.currentItem.rating === 1) {
    return (
      <div>
      <h1 style={{ textAlign: 'center', fontFamily: 'tahoma' }}>{'Rating:' + ' ' + props.currentItem.rating}</h1>
      <p style={{ textAlign: 'center' }}>⭐️</p>
    </div>
    );
  }
  if (props.currentItem.rating === 2) {
    return (
      <div>
      <h1 style={{ textAlign: 'center', fontFamily: 'tahoma' }}>{'Rating:' + ' ' + props.currentItem.rating}</h1>
      <p style={{ textAlign: 'center' }}>⭐️⭐️</p>
    </div>
    )
  }
  if (props.currentItem.rating === 3) {
    return (
      <div>
      <h1 style={{ textAlign: 'center', fontFamily: 'tahoma' }}>{'Rating:' + ' ' + props.currentItem.rating}</h1>
      <p style={{ textAlign: 'center' }}>⭐️⭐️⭐️</p>
    </div>
    )
  }
  if (props.currentItem.rating === 4) {
    return (
      <div>
      <h1 style={{ textAlign: 'center', fontFamily: 'tahoma' }}>{'Rating:' + ' ' + props.currentItem.rating}</h1>
      <p style={{ textAlign: 'center' }}>⭐️⭐️⭐️⭐️</p>
    </div>
    )
  }
  if (props.currentItem.rating === 5) {
    return (
      <div>
      <h1 style={{ textAlign: 'center', fontFamily: 'tahoma' }}>{'Rating:' + ' ' + props.currentItem.rating}</h1>
      <p style={{ textAlign: 'center' }}>⭐️⭐️⭐️⭐️⭐️</p>
    </div>
    )
  } else if (typeof props.currentItem.rating !== 'number') {
    return (
      <div>
      <h1 style={{ textAlign: 'center', fontFamily: 'tahoma' }}>{'Rating: -'}</h1>
    </div>
    )
  }
};

export default RatingChart;