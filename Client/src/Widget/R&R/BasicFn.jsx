import React from 'react';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const starStyle = {
  width: '31px',
  display: 'inline-block',
};
const starOutlineStyle = {
  width: '31px',
  display: 'inline-block',
};

const BasicFn = ({ averageRating }) => {
  // convert average rating to closet .25 value
  const converted = (Math.round(averageRating * 4) / 4).toFixed(2);
  console.log('converted average rating', converted);
  const totalStars = 5;
  // const activeStars = 3;
  let counter1 = 0;
  let counter2 = converted;
  let activeStars = [];
  // while (counter1 <= 5) {
  //   if (counter2 > 1) {
  //     counter1++;
  //     counter2--;
  //     activeStars.push(1);
  //   }
  //   if (counter2 === 0.75) {
  //     counter1++;
  //     counter2 - 0.75;
  //     activeStars.push(0.75);
  //   }
  //   if (counter2 === 0.5) {
  //     counter1++;
  //     counter2 - 0.5;
  //     activeStars.push(0.5);
  //   }
  //   if (counter2 === 0.25) {
  //     counter1++;
  //     counter2 - 0.25;
  //     activeStars.push(0.25);
  //   }
  //   if (counter2 === 0) {
  //     counter1++;
  //     activeStars.push(0);
  //   }
  // }

  console.log(activeStars);

  // return (
  //   <div>
  //     {[...new Array(totalStars)].map((arr, index) => (index < activeStars ? <div style={starStyle}>★</div> : <div style={starOutlineStyle}>☆</div>))}
  //   </div>
  // );

  <Box sx={{ display: 'inline-flex',
             position: 'relative',
             textAlign: 'left',
             fontSize: '5px',
       }}
  >
    {[]}
  </Box>
};

export default BasicFn;