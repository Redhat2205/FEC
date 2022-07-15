import React, { useState, useEffect } from "react";
import QuestionPanel from "./QuestionPanel.jsx";
import SubmitNewQuestion from "./SubmitNewQuestion.jsx";

const QuestionList = ({ qA, onClickHelpful }) => {
  const [moreQuestion, setMoreQuestion] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState([]);
  const [end, setEnd] = useState(4);

  const handleMoreQuestion = () => {
    let counter = end;
    setEnd(counter += 2);
    setCurrentQuestion(qA);
    console.log(end);
  };

  if (qA.length === 0) return <SubmitNewQuestion />;
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
      {currentQuestion.length === 0
        ? qA.slice(0, 4).map((qAObj) => (
          <QuestionPanel
            key={qAObj.question_id}
            questionid={qAObj.question_id}
            qAObj={qAObj}
            onClickHelpful={onClickHelpful}
          />
        ))
        : currentQuestion.slice(0, end).map((qAObj) => (
          <QuestionPanel
            key={qAObj.question_id}
            questionid={qAObj.question_id}
            qAObj={qAObj}
            onClickHelpful={onClickHelpful}
          />
        ))}
      {(qA.length >= end) && <button type="button" onClick={handleMoreQuestion}>More Answered Questions</button>}
    </div>
  );
};
// if end is greater than 38
// if qA[start] || qA[end] is undefined
export default QuestionList;
