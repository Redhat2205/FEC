import React from "react";

const AnswerPanel = ({answer}) => (
  <div>
    <span>{`A: ${answer.body}`}</span>
    <span>
      {answer.answerer_name}
    </span>
    <span>{answer.date}</span>
    <span>{`Helpful? Yes(${answer.helpfulness})`}</span>
  </div>
);

export default AnswerPanel;