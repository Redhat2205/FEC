import React from "react";
import QuestionPanel from "./QuestionPanel.jsx";

const QuestionList = ({ qA }) => (
  <div>
    {qA.map((qAObj) => (
      <QuestionPanel
        key={qAObj.question_id}
        qAObj={qAObj}
      />
    ))}
  </div>
);

export default QuestionList;