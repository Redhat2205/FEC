import React, { useState, useEffect } from "react";
import axios from 'axios';
import QuestionPanel from "./QuestionPanel.jsx";
import SubmitNewQuestion from "./SubmitNewQuestion.jsx";
import Style from "../../../StyleComponents/QA_Styles/Style.jsx";
import AddAQuestionModal from "./AddAQuestionModal.jsx";
import Modal from "../../../StyleComponents/QA_Styles/Modal.jsx";

const QuestionList = ({
  qA, getQa, onClickHelpful, productName, onReport, productID, onSubmitAnswerHandle,
}) => {
  const [moreQuestion, setMoreQuestion] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState([]);
  const [end, setEnd] = useState(4);
  const [isShowAddQuestion, setShowAddQuestion] = useState(false);

  const onQReport = (e) => {
    const questionID = e.target.getAttribute('id');
    axios({
      method: 'put',
      url: `${process.env.API_Base}/qa/questions/${questionID}/report`,
      headers: { Authorization: process.env.API_Key },
    })
      .then(() => { console.log('shit'); })
      .catch((err) => console.log(err));
  };
  const handleMoreQuestion = () => {
    let counter = end;
    // if (currentQuestion[counter] === undefined) {
    //   counter += 1;
    // }
    setEnd(counter += 2);
    setCurrentQuestion(qA);
  };

  if (qA.length === 0) return <SubmitNewQuestion productID={productID} productName={productName} getQa={getQa} />;
  if (qA.length < 5) {
    return (
      <div overflow="auto">
        {qA.map((qAObj) => (
          <QuestionPanel
            key={qAObj.question_id}
            questionid={qAObj.question_id}
            qAObj={qAObj}
            onClickHelpful={onClickHelpful}
          />
        ))}
      </div>
    );
  }
  // try later const thingy = {
  //   productName,
  //   onClickHelpful,
  // };
  return (
    <Style.QuestionBody>
      {end === 4
        ? qA.slice(0, 4).map((qAObj) => (
          <QuestionPanel
            key={qAObj.question_id}
            productName={productName}
            questionid={qAObj.question_id}
            qAObj={qAObj}
            onClickHelpful={onClickHelpful}
            onReport={onReport}
            onQReport={onQReport}
            getQa={getQa}
            onSubmitAnswerHandle={onSubmitAnswerHandle}
          // try later {...thingy}
          />
        ))
        : qA.slice(0, end).map((qAObj) => (
          <QuestionPanel
            key={qAObj.question_id}
            questionid={qAObj.question_id}
            qAObj={qAObj}
            getQa={getQa}
            onClickHelpful={onClickHelpful}
            productName={productName}
            onReport={onReport}
            onQReport={onQReport}
            onSubmitAnswerHandle={onSubmitAnswerHandle}
          />
        ))}
      {(qA.length >= end) && <Style.MoreAnsweredQuestion type="button" onClick={handleMoreQuestion}>More Questions</Style.MoreAnsweredQuestion>}
      <Modal.AddQuestion
        type="button"
        onClick={() => {
          setShowAddQuestion(true);
        }}
      >
        ADD A QUESTION +
      </Modal.AddQuestion>
      {isShowAddQuestion && (
        <AddAQuestionModal
          qA={qA}
          productName={productName}
          productID={productID}
          getQa={getQa}
          isOpen={isShowAddQuestion}
          onClose={() => (setShowAddQuestion(false))}
        />
      )}
    </Style.QuestionBody>
  );
};
export default QuestionList;
