import React, { useState } from "react";
import AnswerList from "./AnswerList.jsx";
import Style from "../../../StyleComponents/QA_Styles/Style.jsx";
import AStyle from "../../../StyleComponents/QA_Styles/AStyle.jsx";

const QuestionsPanel = ({ questionid, qAObj, onClickHelpful }) => {
  const [answerStatus, setAnswerStatus] = useState(false);
  const [answerHelp, setAnswerHelp] = useState(false);
  const [questionHelp, setQuestionHelp] = useState(false);
  return (
    <Style.Questions>
      <Style.Questions
        onClick={() => (answerStatus !== true ? setAnswerStatus(true) : setAnswerStatus(false))}
      >
        {`Q: ${qAObj.question_body}`}
      </Style.Questions>
      <Style.Info>
        <AStyle.Helpful>Helpful?</AStyle.Helpful>
        {questionHelp ? <AStyle.Helpful>{`|  Yes (${qAObj.question_helpfulness})`}</AStyle.Helpful>
          : (
            <AStyle.Yes
              id={questionid}
              type="question"
              onClick={(e) => {
                onClickHelpful(e);
                setQuestionHelp(true);
              }}
            >
              {`|  Yes (${qAObj.question_helpfulness})`}
            </AStyle.Yes>
          )}
        <AStyle.Reported>|  Add Answer</AStyle.Reported>
      </Style.Info>
      {answerStatus && <AnswerList onClickHelpful={onClickHelpful} answerObj={qAObj.answers} />}
    </Style.Questions>
  );
};

export default QuestionsPanel;
