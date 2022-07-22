import React from 'react';

// eslint-disable-next-line consistent-return
const Factors = ({ productReviews, characteristics }) => {
  if (productReviews && characteristics) {
    const chara = Object.entries(characteristics);

    const mappers = [];

    chara.forEach((key, value) => {
      mappers.push([key[0], Number(key[1].value).toFixed(2)]);
    });

    // console.log(mappers);
    return (
      <ul>
        {mappers.map((arr, index) => (
          <li key={index}>{`${arr[0]} : ${arr[1]}`}</li>
        ))}
      </ul>
    );
  }
};

export default Factors;