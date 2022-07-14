import React, { useState } from "react";
import AnswerPanel from "./AnswerPanel.jsx";
import AStyle from "../../../StyleComponents/QA_Styles/AStyle.jsx";

const AnswerList = ({ answerObj, onClickHelpful }) => {
  const [moreAnswer, setMoreAnwser] = useState(false);
  const sortedAnswer = Object.values(answerObj).sort((a, b) => (
    b.helpfulness - a.helpfulness
  ));
  const handleMoreAnswers = () => (
    moreAnswer !== true ? setMoreAnwser(true) : setMoreAnwser(false)
  );
  return (
    <div>
      {sortedAnswer.slice(0, 2).map((answer) => (
        <AnswerPanel
          key={answer.id}
          answer={answer}
          onClickHelpful={onClickHelpful}
        />
      ))}
      {moreAnswer && sortedAnswer.slice(2).map((answer) => (
        <AnswerPanel
          key={answer.id}
          answer={answer}
          onClickHelpful={onClickHelpful}
        />
      ))}
      {sortedAnswer.length > 2 && <AStyle.More onClick={handleMoreAnswers}>{moreAnswer ? "COLLAPSE ANSWERS" : "LOAD MORE ANSWERS"}</AStyle.More>}
    </div>
  );
};

export default AnswerList;
