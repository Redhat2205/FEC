import React, { useState, useEffect } from "react";
import axios from 'axios';
import QuestionList from './Components/QuestionList.jsx';
import config from '../../../../config.js';
import SearchBar from './Components/SearchBar.jsx';

const Q_A = () => {
  const [qA, setqA] = useState([]);
  const productId = 37311;
  // qa/questions?product_id=${productId}`
  useEffect(() => {
    axios({
      method: 'GET',
      url: `${config.URL}/qa/questions?product_id=${productId}`,
      headers: { Authorization: config.KEY },
    })
      .then((product) => {
        setqA(product);
        console.log("what is this", product.data.results);
        // console.log(qA);
      })
      .catch((err) => {
        console.log('err when get', err);
      });
  }, []);
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