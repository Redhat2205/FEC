import React from 'react';

const starStyle = {
  width: '31px',
  display: 'inline-block',
};
const starOutlineStyle = {
  width: '31px',
  display: 'inline-block',
};

const BasicFn = () => {
  const totalStars = 5;
  const activeStars = 3;

  // return (
  //   <div>
  //     {[...new Array(totalStars)].map((arr, index) => (index < activeStars ? <div style={starStyle}>★</div> : <div style={starOutlineStyle}>☆</div>))}
  //   </div>
  // );

  {[...new Array(totalStars)].map((arr, index) => {
    return (
      <div position="relative">
        <div style={{ width: '0%', overflow: 'hidden', position: 'absolute' }}>★</div>
        <div>☆</div>
      </div>
    );
  })}
};

export default BasicFn;