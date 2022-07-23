/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

const AddStarRating = ({ form, setForm }) => {
  const [userStarRating, setUserStarRating] = useState(0);

  if (userStarRating === 1) {
    return (
    // <div style={{marginLeft: '15px', display: 'inline-block'}}>
      <div style={{ display: 'inline-block', width: '15%' }}>
        <p>
          <span onClick={() => { setUserStarRating(1); setForm((old) => ({ ...old, rating: 1 })); }}>★</span>
          <span onClick={() => { setUserStarRating(2); setForm((old) => ({ ...old, rating: 2 })); }}>☆</span>
          <span onClick={() => { setUserStarRating(3); setForm((old) => ({ ...old, rating: 3 })); }}>☆</span>
          <span onClick={() => { setUserStarRating(4); setForm((old) => ({ ...old, rating: 4 })); }}>☆</span>
          <span onClick={() => { setUserStarRating(5); setForm((old) => ({ ...old, rating: 5 })); }}>☆</span>
        </p>
      </div>
    );
  }
  if (userStarRating === 2) {
    return (
    // <div style={{marginLeft: '15px', display: 'inline-block'}}>
      <div style={{ display: 'inline-block', width: '15%' }}>
        <p>
          <span onClick={() => { setUserStarRating(1); setForm((old) => ({ ...old, rating: 1 })); }}>★</span>
          <span onClick={() => { setUserStarRating(2); setForm((old) => ({ ...old, rating: 2 })); }}>★</span>
          <span onClick={() => { setUserStarRating(3); setForm((old) => ({ ...old, rating: 3 })); }}>☆</span>
          <span onClick={() => { setUserStarRating(4); setForm((old) => ({ ...old, rating: 4 })); }}>☆</span>
          <span onClick={() => { setUserStarRating(5); setForm((old) => ({ ...old, rating: 5 })); }}>☆</span>
        </p>
      </div>
    );
  } if (userStarRating === 3) {
    return (
    // <div style={{marginLeft: '15px', display: 'inline-block'}}>
      <div style={{ display: 'inline-block', width: '15%' }}>
        <p>
          <span onClick={() => { setUserStarRating(1); setForm((old) => ({ ...old, rating: 1 })); }}>★</span>
          <span onClick={() => { setUserStarRating(2); setForm((old) => ({ ...old, rating: 2 })); }}>★</span>
          <span onClick={() => { setUserStarRating(3); setForm((old) => ({ ...old, rating: 3 })); }}>★</span>
          <span onClick={() => { setUserStarRating(4); setForm((old) => ({ ...old, rating: 4 })); }}>☆</span>
          <span onClick={() => { setUserStarRating(5); setForm((old) => ({ ...old, rating: 5 })); }}>☆</span>
        </p>
      </div>
    );
  } if (userStarRating === 4) {
    return (
    // <div style={{marginLeft: '15px', display: 'inline-block'}}>
      <div style={{ display: 'inline-block', width: '15%' }}>
        <p>
          <span onClick={() => { setUserStarRating(1); setForm((old) => ({ ...old, rating: 1 })); }}>★</span>
          <span onClick={() => { setUserStarRating(2); setForm((old) => ({ ...old, rating: 2 })); }}>★</span>
          <span onClick={() => { setUserStarRating(3); setForm((old) => ({ ...old, rating: 3 })); }}>★</span>
          <span onClick={() => { setUserStarRating(4); setForm((old) => ({ ...old, rating: 4 })); }}>★</span>
          <span onClick={() => { setUserStarRating(5); setForm((old) => ({ ...old, rating: 5 })); }}>☆</span>
        </p>
      </div>
    );
  } if (userStarRating === 5) {
    return (
    // <div style={{marginLeft: '15px', display: 'inline-block'}}>
      <div style={{ display: 'inline-block', width: '15%' }}>
        <p>
          <span onClick={() => { setUserStarRating(1); setForm((old) => ({ ...old, rating: 1 })); }}>★</span>
          <span onClick={() => { setUserStarRating(2); setForm((old) => ({ ...old, rating: 2 })); }}>★</span>
          <span onClick={() => { setUserStarRating(3); setForm((old) => ({ ...old, rating: 3 })); }}>★</span>
          <span onClick={() => { setUserStarRating(4); setForm((old) => ({ ...old, rating: 4 })); }}>★</span>
          <span onClick={() => { setUserStarRating(5); setForm((old) => ({ ...old, rating: 5 })); }}>★</span>
        </p>
      </div>
    );
  } if (userStarRating === 0) {
    return (
    // <div style={{marginLeft: '15px', display: 'inline-block'}}>
      <div style={{ display: 'inline-block', width: '15%' }}>
        <p>
          <span onClick={() => { setUserStarRating(1); setForm((old) => ({ ...old, rating: 1 })); }}>☆</span>
          <span onClick={() => { setUserStarRating(2); setForm((old) => ({ ...old, rating: 2 })); }}>☆</span>
          <span onClick={() => { setUserStarRating(3); setForm((old) => ({ ...old, rating: 3 })); }}>☆</span>
          <span onClick={() => { setUserStarRating(4); setForm((old) => ({ ...old, rating: 4 })); }}>☆</span>
          <span onClick={() => { setUserStarRating(5); setForm((old) => ({ ...old, rating: 5 })); }}>☆</span>
        </p>
      </div>
    );
  }
};

export default AddStarRating;