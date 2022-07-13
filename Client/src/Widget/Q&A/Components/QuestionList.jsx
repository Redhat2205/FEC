import React, { useState } from "react";
import QuestionPanel from "./QuestionPanel.jsx";

const QuestionList = ({ qA }) => {
  const [moreQuestion, setMoreQuestion] = useState(false);
  const handleMoreQuestion = () => (
    moreQuestion !== true ? setMoreQuestion(true) : setMoreQuestion(false)
  );
  return (
    <div>
      {qA.map((qAObj) => (
        <QuestionPanel
          key={qAObj.question_id}
          qAObj={qAObj}
        />
      ))}
    </div>
  );
};

export default QuestionList;