import React, { useState, useEffect } from "react";
import axios from 'axios';
import QuestionList from './Components/QuestionList.jsx';
import SearchBar from './Components/SearchBar.jsx';
import AddAQuestionModal from "./Components/AddAQuestionModal.jsx";
import Style from "../../StyleComponents/QA_Styles/Style.jsx";
import Modal from "../../StyleComponents/QA_Styles/Modal.jsx";

const Q_A = ({ productID, productName }) => {
  const [qA, setQa] = useState([]);
  const [moreQuestion, setMoreQuestion] = useState(false);
  const [isShowAddQuestion, setShowAddQuestion] = useState(false);
  const [end, setEnd] = useState(4);

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
  }, [productID]);

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
    const elementId = e.target.getAttribute('id');
    const QorA = current === 'question' ? "questions" : "answers";
    const currentUrl = `${process.env.API_Base}/qa/${QorA}/${elementId}/helpful`;
    axios({
      method: 'put',
      url: currentUrl,
      headers: { Authorization: process.env.API_Key },
    })
      .then(() => { getQa(); })
      .catch((err) => console.log(err));
  };

  const onReport = (e) => {
    const current = e.target.getAttribute("type");
    const elementId = e.target.getAttribute('id');
    const QorA = current === 'question' ? "questions" : "answers";
    const currentUrl = `${process.env.API_Base}/qa/${QorA}/${elementId}/report`;
    axios({
      method: 'put',
      url: currentUrl,
      headers: { Authorization: process.env.API_Key },
    })
      .then(() => { console.log('shit'); })
      .catch((err) => console.log(err));
  };
  const handleMoreQuestion = () => {
    let counter = end;
    setEnd(counter += 2);
  };

  return (
    <Style.Body data-testid="qna">
      <Style.Title> Questions and Answers</Style.Title>
      <SearchBar
        searchHandler={searchHandler}
      />
      <QuestionList
        qA={qA}
        getQa={getQa}
        productName={productName}
        productID={productID}
        onClickHelpful={onClickHelpful}
        onReport={onReport}
        end={end}
        isShowAddQuestion={isShowAddQuestion}
        setShowAddQuestion={setShowAddQuestion}
      />
      {qA.length >= end && (
        <Style.MoreAnsweredQuestion
          type="button"
          onClick={handleMoreQuestion}
        >
          More Answered Questions
        </Style.MoreAnsweredQuestion>
      )}
      {qA.length > 0 && (
        <Modal.AddQuestion
          type="button"
          onClick={() => { setShowAddQuestion(true); }}
        >
          ADD A QUESTION +
        </Modal.AddQuestion>
      )}
      <AddAQuestionModal
        qA={qA}
        productName={productName}
        productID={productID}
        getQa={getQa}
        isOpen={isShowAddQuestion}
        onClose={() => (setShowAddQuestion(false))}
      />
    </Style.Body>
  );
};

export default Q_A;