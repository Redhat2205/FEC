import React, { useState } from 'react';


const AddStarRating = ({ form, setForm }) => {
  const [userStarRating, setUserStarRating] = useState(0);

  if (userStarRating === 1) {
    return (
    <>
      <p style={{marginLeft: '15px'}}>
        <span onClick={() => {setUserStarRating(1); setForm(old => ({...old, rating: 1}))}}>★</span>
        <span onClick={() => {setUserStarRating(2); setForm(old => ({...old, rating: 2}))}}>☆</span>
        <span onClick={() => {setUserStarRating(3); setForm(old => ({...old, rating: 3}))}}>☆</span>
        <span onClick={() => {setUserStarRating(4); setForm(old => ({...old, rating: 4}))}}>☆</span>
        <span onClick={() => {setUserStarRating(5); setForm(old => ({...old, rating: 5}))}}>☆</span>
      </p>
    </>
    );
  }
  else if (userStarRating === 2) {
    return (
    <>
      <p style={{marginLeft: '15px'}}>
        <span onClick={() => {setUserStarRating(1); setForm(old => ({...old, rating: 1}))}}>★</span>
        <span onClick={() => {setUserStarRating(2); setForm(old => ({...old, rating: 2}))}}>★</span>
        <span onClick={() => {setUserStarRating(3); setForm(old => ({...old, rating: 3}))}}>☆</span>
        <span onClick={() => {setUserStarRating(4); setForm(old => ({...old, rating: 4}))}}>☆</span>
        <span onClick={() => {setUserStarRating(5); setForm(old => ({...old, rating: 5}))}}>☆</span>
      </p>
    </>
    );
  } else if (userStarRating === 3) {
    return (
    <>
      <p style={{marginLeft: '15px'}}>
        <span onClick={() => {setUserStarRating(1); setForm(old => ({...old, rating: 1}))}}>★</span>
        <span onClick={() => {setUserStarRating(2); setForm(old => ({...old, rating: 2}))}}>★</span>
        <span onClick={() => {setUserStarRating(3); setForm(old => ({...old, rating: 3}))}}>★</span>
        <span onClick={() => {setUserStarRating(4); setForm(old => ({...old, rating: 4}))}}>☆</span>
        <span onClick={() => {setUserStarRating(5); setForm(old => ({...old, rating: 5}))}}>☆</span>
      </p>
    </>
    );
  } else if (userStarRating === 4) {
    return (
    <>
      <p style={{marginLeft: '15px'}}>
        <span onClick={() => {setUserStarRating(1); setForm(old => ({...old, rating: 1}))}}>★</span>
        <span onClick={() => {setUserStarRating(2); setForm(old => ({...old, rating: 2}))}}>★</span>
        <span onClick={() => {setUserStarRating(3); setForm(old => ({...old, rating: 3}))}}>★</span>
        <span onClick={() => {setUserStarRating(4); setForm(old => ({...old, rating: 4}))}}>★</span>
        <span onClick={() => {setUserStarRating(5); setForm(old => ({...old, rating: 5}))}}>☆</span>
      </p>
    </>
    )
  } else if (userStarRating === 5) {
    return (
    <>
      <p style={{marginLeft: '15px'}}>
        <span onClick={() => {setUserStarRating(1); setForm(old => ({...old, rating: 1}))}}>★</span>
        <span onClick={() => {setUserStarRating(2); setForm(old => ({...old, rating: 2}))}}>★</span>
        <span onClick={() => {setUserStarRating(3); setForm(old => ({...old, rating: 3}))}}>★</span>
        <span onClick={() => {setUserStarRating(4); setForm(old => ({...old, rating: 4}))}}>★</span>
        <span onClick={() => {setUserStarRating(5); setForm(old => ({...old, rating: 5}))}}>★</span>
      </p>
    </>
    );
  } else if (userStarRating === 0) {
    return (
      <>
        <p style={{marginLeft: '15px'}}>
          <span onClick={() => {setUserStarRating(1); setForm(old => ({...old, rating: 1}))}}>☆</span>
          <span onClick={() => {setUserStarRating(2); setForm(old => ({...old, rating: 2}))}}>☆</span>
          <span onClick={() => {setUserStarRating(3); setForm(old => ({...old, rating: 3}))}}>☆</span>
          <span onClick={() => {setUserStarRating(4); setForm(old => ({...old, rating: 4}))}}>☆</span>
          <span onClick={() => {setUserStarRating(5); setForm(old => ({...old, rating: 5}))}}>☆</span>
        </p>
      </>
    );
  }
};

export default AddStarRating;