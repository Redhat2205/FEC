import React, { useState } from "react";
import AnswerList from "./AnswerList.jsx";

const QuestionsPanel = ({ qAObj }) => {
  const [answerStatus, setAnswerStatus] = useState(false);
  const [answerHelp, setAnswerHelp] = useState(false);
  return (
    <div>
      <span
        onClick={ () => { answerStatus !== true ? setAnswerStatus(true) : setAnswerStatus(false);} }
      >
        {`Q: ${qAObj.question_body}`}
      </span>
      <span onClick={() => {}}>Helpful?</span>
      <span>
        {`Yes (${qAObj.question_helpfulness})`}
      </span>
      <span>Add Answer</span>
      {answerStatus && <AnswerList answerObj={qAObj.answers} />}
    </div>
  );
};

export default QuestionsPanel;
