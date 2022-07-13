import React, { useState } from 'react';


const AddStarRating = () => {
  const [userStarRating, setUserStarRating] = useState(0);

  if (userStarRating === 1) {
    return (
    <>
      <p style={{float: 'left'}}>
        <span onClick={() => setUserStarRating(1)}>★</span>
        <span onClick={() => setUserStarRating(2)}>☆</span>
        <span onClick={() => setUserStarRating(3)}>☆</span>
        <span onClick={() => setUserStarRating(4)}>☆</span>
        <span onClick={() => setUserStarRating(5)}>☆</span>
      </p>
    </>
    );
  }
  else if (userStarRating === 2) {
    return (
    <>
      <p>
        <span onClick={() => setUserStarRating(1)}>★</span>
        <span onClick={() => setUserStarRating(2)}>★</span>
        <span onClick={() => setUserStarRating(3)}>☆</span>
        <span onClick={() => setUserStarRating(4)}>☆</span>
        <span onClick={() => setUserStarRating(5)}>☆</span>
      </p>
    </>
    );
  } else if (userStarRating === 3) {
    return (
    <>
      <p>
        <span onClick={() => setUserStarRating(1)}>★</span>
        <span onClick={() => setUserStarRating(2)}>★</span>
        <span onClick={() => setUserStarRating(3)}>★</span>
        <span onClick={() => setUserStarRating(4)}>☆</span>
        <span onClick={() => setUserStarRating(5)}>☆</span>
      </p>
    </>
    );
  } else if (userStarRating === 4) {
    return (
    <>
      <p>
        <span onClick={() => setUserStarRating(1)}>★</span>
        <span onClick={() => setUserStarRating(2)}>★</span>
        <span onClick={() => setUserStarRating(3)}>★</span>
        <span onClick={() => setUserStarRating(4)}>★</span>
        <span onClick={() => setUserStarRating(5)}>☆</span>
      </p>
    </>
    )
  } else if (userStarRating === 5) {
    return (
    <>
      <p>
        <span onClick={() => setUserStarRating(1)}>★</span>
        <span onClick={() => setUserStarRating(2)}>★</span>
        <span onClick={() => setUserStarRating(3)}>★</span>
        <span onClick={() => setUserStarRating(4)}>★</span>
        <span onClick={() => setUserStarRating(5)}>★</span>
      </p>
    </>
    );
  } else if (userStarRating === 0) {
    return (
      <>
        <p>
          <span onClick={() => setUserStarRating(1)}>☆</span>
          <span onClick={() => setUserStarRating(2)}>☆</span>
          <span onClick={() => setUserStarRating(3)}>☆</span>
          <span onClick={() => setUserStarRating(4)}>☆</span>
          <span onClick={() => setUserStarRating(5)}>☆</span>
        </p>
      </>
    );
  }
};

export default AddStarRating;