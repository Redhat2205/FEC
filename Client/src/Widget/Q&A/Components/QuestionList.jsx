import React, { useState, useEffect } from "react";
import axios from 'axios';
import QuestionPanel from "./QuestionPanel.jsx";
import SubmitNewQuestion from "./SubmitNewQuestion.jsx";
import Style from "../../../StyleComponents/QA_Styles/Style.jsx";
import AddAQuestion from './AddAQuestion.jsx';

const QuestionList = ({
  qA, onClickHelpful, productName, onReport, productID, onSubmitHandle, onSubmitAnswerHandle,
}) => {
  const [moreQuestion, setMoreQuestion] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState([]);
  const [end, setEnd] = useState(4);

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

  if (qA.length === 0) return <SubmitNewQuestion productID={productID} productName={productName} onSubmitHandle={onSubmitHandle} />;
  if (qA.length < 5) {
    return (
      <div>
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
  return (
    <div>
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
            onSubmitAnswerHandle={onSubmitAnswerHandle}
          />
        ))
        : qA.slice(0, end).map((qAObj) => (
          <QuestionPanel
            key={qAObj.question_id}
            questionid={qAObj.question_id}
            qAObj={qAObj}
            onClickHelpful={onClickHelpful}
            productName={productName}
            onReport={onReport}
            onQReport={onQReport}
            onSubmitAnswerHandle={onSubmitAnswerHandle}
          />
        ))}
      {(qA.length >= end) && <Style.MoreAnsweredQuestion type="button" onClick={handleMoreQuestion}>More Answered Questions</Style.MoreAnsweredQuestion>}
      <AddAQuestion
        qA={qA}
        productName={productName}
        onSubmitHandle={onSubmitHandle}
        productID={productID}
      />
    </div>
  );
};
export default QuestionList;
