import React, { useState } from "react";
import AnswerList from "./AnswerList.jsx";
import AddAnswerModal from "./AddAnswerModal.jsx";
import Style from "../../../StyleComponents/QA_Styles/Style.jsx";
import AStyle from "../../../StyleComponents/QA_Styles/AStyle.jsx";

const QuestionsPanel = ({
  questionid, qAObj, onClickHelpful, productName, onReport, onQReport, productID, onSubmitAnswerHandle,
}) => {
  const [showAnswerStatus, setShowAnswerStatus] = useState(false);
  const [answerHelp, setAnswerHelp] = useState(false);
  const [questionHelp, setQuestionHelp] = useState(false);
  const [addModalStatus, setAddModalStatus] = useState(false);
  const [qReport, setQReport] = useState(false);
  return (
    <Style.Questions>
      <Style.QBody
        onClick={() => (showAnswerStatus !== true ? setShowAnswerStatus(true) : setShowAnswerStatus(false))}
      >
        {`Q: ${qAObj.question_body}`}
      </Style.QBody>
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
        <AddAnswerModal
          productName={productName}
          productID={productID}
          questionBody={qAObj.question_body}
          addModalStatus={addModalStatus}
          questionID={questionid}
          onSubmitAnswerHandle={onSubmitAnswerHandle}
          onClose={() => (setAddModalStatus(false))}
        />
        <AStyle.Reported
          id={questionid}
          onClick={(e) => {
            setQReport(true);
            onQReport(e);
          }}
        >
          {qReport ? "Reported" : "Report"}
        </AStyle.Reported>
      </Style.Info>
      {showAnswerStatus && <AnswerList onClickHelpful={onClickHelpful} answerObj={qAObj.answers} onReport={onReport} />}
    </Style.Questions>
  );
};

export default QuestionsPanel;
