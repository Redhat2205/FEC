import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const UserStars = ({ eachReview }) => {
  if (eachReview.rating === 1) {
    return (
      <div>★☆☆☆☆</div>
    );
  }
  if (eachReview.rating === 2) {
    return (
      <div>★★☆☆☆</div>
    );
  }
  if (eachReview.rating === 3) {
    return (
      <div>★★★☆☆</div>
    );
  }
  if (eachReview.rating === 4) {
    return (
      <div>★★★★☆</div>
    );
  }
  if (eachReview.rating === 5) {
    return (
      <div>★★★★★</div>
    );
  }
  return (
    <div>☆☆☆☆☆</div>
  );
};

export default UserStars;