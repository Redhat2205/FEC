import React, { useState } from "react";

const AnswerPanel = ({ answer, onClickHelpful }) => {
  const [answerHelp, setAnswerHelp] = useState(false);
  return (
    <div>
      <span>{`A: ${answer.body}`}</span>
      <span>
        {answer.answerer_name}
      </span>
      <span>{answer.date}</span>
      <span>Helpful?</span>
      {answerHelp ? <span>{`Yes (${answer.helpfulness})`}</span>
        : (
          <span
            id={answer.id}
            type="answer"
            onClick={(e) => {
              onClickHelpful(e)
              setAnswerHelp(true);
            }}
          >
            {`Yes (${answer.helpfulness})`}
          </span>
        )}
    </div>
  );
};

export default AnswerPanel;