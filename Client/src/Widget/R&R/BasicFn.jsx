import React, { useState, useEffect } from 'react';
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
  let converted = (Math.round(averageRating * 4) / 4).toFixed(2);

  const totalStars = 5;
  // const activeStars = 3;
  const counter1 = 0;
  const counter2 = converted;
  const activeStars = [];

  while (converted > 0) {
    if (converted > 1) {
      activeStars.push('100%');
      converted -= 1;
    }
    if (converted === 0.75) {
      activeStars.push('57%');
      converted -= 0.75;
    }
    if (converted === 0.5) {
      activeStars.push('50%');
      converted -= 0.5;
    }
    if (converted === 0.25) {
      activeStars.push('39%');
      converted -= 0.25;
    }
  }

  while (activeStars.length < 5) {
    activeStars.push('0%');
  }

  // const generateStars = () => {
  //   while (counter1 < 5) {
  //     if (counter2 > 1) {
  //       counter1++;
  //       counter2--;
  //       activeStars.push('100%');
  //       console.log(counter1);
  //     }
  //     if (counter2 === 0.75) {
  //       counter1++;
  //       counter2 - 0.75;
  //       activeStars.push('59%');
  //       console.log(counter1);
  //     }
  //     if (counter2 === 0.5) {
  //       counter1++;
  //       counter2 - 0.5;
  //       activeStars.push('50%');
  //       console.log(counter1);
  //     }
  //     if (counter2 === 0.25) {
  //       counter1++;
  //       counter2 - 0.25;
  //       activeStars.push('40%');
  //       console.log(counter1);
  //     }
  //     if (counter2 === 0) {
  //       counter1++;
  //       activeStars.push('0%');
  //       console.log(counter1);
  //     }
  //   }
  // };

  // useEffect(() => {
  //   if (converted > 0.00) {
  //     console.log('before conversion:', activeStars);
  //     generateStars();
  //     console.log('after conversion:', activeStars);
  //     console.log(converted);
  //   }
  // }, [converted]);

  console.log(activeStars);

  // return (
  //   <div>
  //     {[...new Array(totalStars)].map((arr, index) => (index < activeStars ? <div style={starStyle}>★</div> : <div style={starOutlineStyle}>☆</div>))}
  //   </div>
  // );

  if (activeStars.length > 0) {
    return (
      <div style={{ width: '200px', height: '75px' }}>
        <p>test</p>
        <Box
          sx={{
            display: 'inline-flex',
            position: 'relative',
            textAlign: 'left',
            fontSize: '5px',
          }}
        >
          {activeStars.map((starWidth, index) => (
            <Box position="relative" key={index}>
              <Box
                sx={{
                  width: starWidth,
                  overflow: "hidden",
                  position: "absolute",
                }}
              >
                <StarIcon style={{ fontSize: "17px" }} />
              </Box>
              <Box>
                <StarBorderIcon style={{ fontSize: "17px" }} />
              </Box>
            </Box>
          ))}
        </Box>
      </div>
    );
  } return (
    <div>☆☆☆☆☆</div>
  );
};

export default BasicFn;