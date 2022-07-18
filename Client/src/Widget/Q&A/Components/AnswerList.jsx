import React, { useState } from "react";
import AnswerPanel from "./AnswerPanel.jsx";
import AStyle from "../../../StyleComponents/QA_Styles/AStyle.jsx";

const AnswerList = ({ answerObj, onClickHelpful, onReport }) => {
  const [moreAnswer, setMoreAnwser] = useState(false);
  const sortedAnswer = Object.values(answerObj).sort((a, b) => (
    b.helpfulness - a.helpfulness
  ));
  sortedAnswer.sort((a, b) => (a.answerer_name.toLowerCase() === 'seller' ? -1 : 0));
  const handleMoreAnswers = () => (
    moreAnswer !== true ? setMoreAnwser(true) : setMoreAnwser(false)
  );
  return (
    <AStyle.Body>
      {sortedAnswer.slice(0, 2).map((answer) => (
        <AnswerPanel
          key={answer.id}
          answer={answer}
          onClickHelpful={onClickHelpful}
          onReport={onReport}
        />
      ))}
      {moreAnswer && sortedAnswer.slice(2).map((answer) => (
        <AnswerPanel
          key={answer.id}
          answer={answer}
          onClickHelpful={onClickHelpful}
          onReport={onReport}
        />
      ))}
      {sortedAnswer.length > 2 && <AStyle.More onClick={handleMoreAnswers}>{moreAnswer ? "COLLAPSE ANSWERS" : "LOAD MORE ANSWERS"}</AStyle.More>}
    </AStyle.Body>
  );
};

export default AnswerList;
