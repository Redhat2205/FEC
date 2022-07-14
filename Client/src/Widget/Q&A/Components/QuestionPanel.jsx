import React, { useState } from "react";
import AnswerList from "./AnswerList.jsx";
import AddAnswerModal from "./AddAnswerModal.jsx";
import Style from "../../../StyleComponents/QA_Styles/Style.jsx";
import AStyle from "../../../StyleComponents/QA_Styles/AStyle.jsx";

const QuestionsPanel = ({ questionid, qAObj, onClickHelpful }) => {
  const [showAnswerStatus, setShowAnswerStatus] = useState(false);
  const [answerHelp, setAnswerHelp] = useState(false);
  const [questionHelp, setQuestionHelp] = useState(false);
  const [addModalStatus, setAddModalStatus] = useState(false);
  return (
    <Style.Questions>
      <Style.Questions
        onClick={() => (showAnswerStatus !== true ? setShowAnswerStatus(true) : setShowAnswerStatus(false))}
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
        <AStyle.Reported onClick={() => (setAddModalStatus(true))}>|  Add Answer</AStyle.Reported>
        <AddAnswerModal questionBody={qAObj.question_body} addModalStatus={addModalStatus} onClose={() => (setAddModalStatus(false))} />
      </Style.Info>
      {showAnswerStatus && <AnswerList onClickHelpful={onClickHelpful} answerObj={qAObj.answers} />}
    </Style.Questions>
  );
};

export default QuestionsPanel;
