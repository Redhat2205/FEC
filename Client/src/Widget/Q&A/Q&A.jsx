import React, { useState, useEffect } from "react";
import axios from 'axios';
import QuestionList from './Components/QuestionList.jsx';
import config from '../config.js';
import SearchBar from './Components/SearchBar.jsx';

const Q_A = () => {
  const [qA, setqA] = useState([]);
  let productId;
  // qa/questions?product_id=${productId}`
  useEffect(() => {
    axios({
      method: 'get',
      url: `${config.url}products`,
      headers: { Authorization: config.TOKEN },
    })
      .then((product) => {
        setqA(product.data);
        console.log(qA);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div>
      <h1> Questions and Answers</h1>
      <SearchBar
      />
      <QuestionList
        qA={qA}
      />
    </div>
  );
};

export default Q_A;