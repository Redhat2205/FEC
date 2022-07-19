import React, { useState, useEffect } from "react";
import axios from 'axios';
import QuestionList from './Components/QuestionList.jsx';
import SearchBar from './Components/SearchBar.jsx';
import Style from "../../StyleComponents/QA_Styles/Style.jsx";

const Q_A = ({ productID }) => {
  const [qA, setQa] = useState([]);
  const productName = "Pumped Up Kicks";

  const getQa = () => {
    axios({
      method: 'get',
      url: `${process.env.API_Base}/qa/questions?product_id=${productID}&count=1000`,
      headers: { Authorization: process.env.API_Key },
    })
      .then((product) => {
        const sortedQuestions = Object.values(product.data.results).sort((a, b) => (
          b.helpfulness + a.helpfulness
        ));
        setQa(sortedQuestions);
      })
      .catch((err) => {
        console.log('err when get', err);
      });
  };

  useEffect(() => {
    getQa();
  }, []);
  const searchHandler = (searchTerm) => {
    if (searchTerm.length > 2) {
      const result = qA.filter((questions) => (questions.question_body.toLowerCase().includes(searchTerm.toLowerCase())));
      setQa(result);
      // console.log("this is state", currentState);
    } else {
      getQa();
    }
  };
  const onClickHelpful = (e) => {
    const current = (e.target.getAttribute('type'));
    let currentUrl;
    if (current === 'question') {
      const questionID = e.target.getAttribute('id');
      currentUrl = `${process.env.API_Base}/qa/questions/${questionID}/helpful`;
    } else if (current === 'answer') {
      const answerID = e.target.getAttribute('id');
      currentUrl = `${process.env.API_Base}/qa/answers/${answerID}/helpful`;
    }
    axios({
      method: 'put',
      url: currentUrl,
      headers: { Authorization: process.env.API_Key },
    })
      .then(() => { getQa(); })
      .catch((err) => console.log(err));
  };

  const onReport = (e) => {
    const answerID = e.target.getAttribute('id');
    axios({
      method: 'put',
      url: `${process.env.API_Base}/qa/answers/${answerID}/report`,
      headers: { Authorization: process.env.API_Key },
    })
      .then(() => { getQa(); })
      .catch((err) => console.log(err));
  };

  return (
    <Style.Body data-testid="qna">
      <Style.Title> Questions and Answers</Style.Title>
      <SearchBar
        searchHandler={searchHandler}
      />
      <QuestionList
        qA={qA}
        onClickHelpful={onClickHelpful}
        productName={productName}
        onReport={onReport}
        productID={productID}
        getQa={getQa}
      />
    </Style.Body>
  );
};

export default Q_A;