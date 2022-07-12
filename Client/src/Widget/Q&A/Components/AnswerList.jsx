import React, { useState } from "react";
import AnswerPanel from "./AnswerPanel.jsx";

const AnswerList = ({ answerObj }) => {
  const [moreAnswer, setMoreAnwser] = useState(false);
  const sortedAnswer = Object.values(answerObj).sort((a, b) => (
    b.helpfulness - a.helpfulness
  ));
  return (
    <div>
      <div>
        {sortedAnswer.slice(0, 2).map((answer) => (
          <AnswerPanel answer={answer} />))}
      </div>
      {moreAnswer && sortedAnswer.slice(2).map((answer) => (
        <AnswerPanel answer={answer} />))}
      <span onClick={() => {moreAnswer !== true ? setMoreAnwser(true) : setMoreAnwser(false);}}>{moreAnswer ? "COLLAPSE ANSWERS" : "LOAD MORE ANSWERS"}</span>
    </div>
  );
};

export default AnswerList;
