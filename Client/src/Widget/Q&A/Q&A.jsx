import React, { useState, useEffect } from "react";
import axios from 'axios';
import QuestionList from './Components/QuestionList.jsx';
import SearchBar from './Components/SearchBar.jsx';
import config from '../../../../config.js';

const Q_A = ({ productID }) => {
  const [qA, setQa] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: `${config.URL}/qa/questions?product_id=${productID}`,
      headers: { Authorization: config.KEY },
    })
      .then((product) => {
        const sortedQuestions = Object.values(product.data.results).sort((a, b) => (
          b.helpfulness - a.helpfulness
        ));
        setQa(sortedQuestions);
      })
      .catch((err) => {
        console.log(config.URL);
        console.log('err when get', err);
      });
  }, []);
  return (
    <div data-testid="qna">
      <h1> Questions and Answers</h1>
      <SearchBar
        setQa={setQa}
        qA={qA}
      />
      <QuestionList
        qA={qA}
      />
    </div>
  );
};

export default Q_A;