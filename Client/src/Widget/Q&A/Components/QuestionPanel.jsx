import React, { useState } from "react";
import AnswerList from "./AnswerList.jsx";

const QuestionsPanel = ({ question_id, qAObj, onClickHelpful }) => {
  const [answerStatus, setAnswerStatus] = useState(false);
  const [answerHelp, setAnswerHelp] = useState(false);
  const [questionHelp, setQuestionHelp] = useState(false);
  return (
    <div>
      <span
        onClick={() => { answerStatus !== true ? setAnswerStatus(true) : setAnswerStatus(false); }}
      >
        {`Q: ${qAObj.question_body}`}
      </span>
      <span>Helpful?</span>
      {questionHelp ? <span>{`Yes (${qAObj.question_helpfulness})`}</span>
        : (
          <span
            id={question_id}
            type='question'
            onClick={(e) => {
              onClickHelpful(e)
              setQuestionHelp(true);
            }}
          >
            {`Yes (${qAObj.question_helpfulness})`}
          </span>
        )}
      <span>Add Answer</span>
      {answerStatus && <AnswerList onClickHelpful={onClickHelpful} answerObj={qAObj.answers} />}
    </div>
  );
};

export default QuestionsPanel;
