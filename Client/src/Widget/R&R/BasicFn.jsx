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
  // converted rating will be state so we can watch value to trigger rerender
  // const [converted, setConverted] = useState(0);
  // convert average rating to closet .25 value
  const converted = (Math.round(averageRating * 4) / 4).toFixed(2);
  // setConverted(() => {(Math.round(averageRating * 4) / 4).toFixed(2)});
  // console.log('converted average rating', converted);
  const totalStars = 5;
  // const activeStars = 3;
  let counter1 = 0;
  let counter2 = converted;
  let activeStars = [];

  const generateStars = () => {
    while (counter1 < 5) {
      if (counter2 > 1) {
        counter1++;
        counter2--;
        activeStars.push(1);
        console.log(counter1);
      }
      if (counter2 === 0.75) {
        counter1++;
        counter2 - 0.75;
        activeStars.push(0.75);
        console.log(counter1);
      }
      if (counter2 === 0.5) {
        counter1++;
        counter2 - 0.5;
        activeStars.push(0.5);
        console.log(counter1);
      }
      if (counter2 === 0.25) {
        counter1++;
        counter2 - 0.25;
        activeStars.push(0.25);
        console.log(counter1);
      }
      if (counter2 === 0) {
        counter1++;
        activeStars.push(0);
        console.log(counter1);
      }
    }
  };

  useEffect(() => {
    if (converted > 0.00) {
      console.log('before conversion:', activeStars);
      generateStars();
      console.log('after conversion:', activeStars);
      console.log(converted);
    }
  }, [converted]);

  // console.log(activeStars);

  // return (
  //   <div>
  //     {[...new Array(totalStars)].map((arr, index) => (index < activeStars ? <div style={starStyle}>★</div> : <div style={starOutlineStyle}>☆</div>))}
  //   </div>
  // );

  if (converted > 0) {
    return (
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
                overflow: 'hidden',
                position: 'absolute',
              }}
            >
              <StarIcon style={{ fonstSize: "17px" }} />
            </Box>
            <Box>
              <StarBorderIcon style={{fontSize: '17px'}} />
            </Box>
          </Box>
        ))}
      </Box>
    );
  } else {
    return (
      <div>Loading</div>
    );
  }

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