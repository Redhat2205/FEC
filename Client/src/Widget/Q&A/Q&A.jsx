import React, { useState, useEffect } from "react";
import axios from 'axios';
import QuestionList from './Components/QuestionList.jsx';
import SearchBar from './Components/SearchBar.jsx';

const Q_A = ({ productID }) => {
  const [qA, setQa] = useState([]);
  const [currentState, setCurrentState] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: `${process.env.API_Base}/qa/questions?product_id=${productID}`,
      headers: { Authorization: process.env.API_Key },
    })
      .then((product) => {
        const sortedQuestions = Object.values(product.data.results).sort((a, b) => (
          b.helpfulness - a.helpfulness
        ));
        setQa(sortedQuestions);
        setCurrentState(sortedQuestions);
      })
      .catch((err) => {
        console.log('err when get', err);
      });
  }, []);

  const searchHandler = (searchTerm) => {
    if (searchTerm.length > 2) {
      const result = qA.filter((questions) => (questions.question_body.toLowerCase().includes(searchTerm.toLowerCase())));
      setCurrentState(result);
      // console.log("this is state", currentState);
    } else {
      setCurrentState(qA);
    }
  };

  return (
    <div data-testid="qna">
      <h1> Questions and Answers</h1>
      <SearchBar
        searchHandler={searchHandler}
      />
      <QuestionList
        qA={currentState}
      />
    </div>
  );
};

export default Q_A;