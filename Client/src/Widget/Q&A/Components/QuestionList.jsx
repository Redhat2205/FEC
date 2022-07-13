import React, { useState } from "react";
import QuestionPanel from "./QuestionPanel.jsx";
import SubmitNewQuestion from "./SubmitNewQuestion.jsx";

const QuestionList = ({ qA, onClickHelpful }) => {
  const [moreQuestion, setMoreQuestion] = useState(false);
  const handleMoreQuestion = () => (
    moreQuestion !== true ? setMoreQuestion(true) : setMoreQuestion(false)
  );
  return (
    <div>
      <div>
        {qA.length > 0 ? qA.slice(0, 4).map((qAObj) => (
          <QuestionPanel
            key={qAObj.question_id}
            question_id={qAObj.question_id}
            qAObj={qAObj}
            onClickHelpful={onClickHelpful}
          />
        )) : <SubmitNewQuestion />}
      </div>
      {moreQuestion && qA.slice(4, 6).map((qAObj) => (
        <QuestionPanel
          key={qAObj.question_id}
          question_id={qAObj.question_id}
          qAObj={qAObj}
          onClickHelpful={onClickHelpful}
        />
      ))}
      {!(qA.length > 0) && <button type="button" onClick={handleMoreQuestion}>{!moreQuestion && "More Answered Questions"}</button>}
    </div>
  );
};

export default QuestionList;