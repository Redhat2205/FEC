import React, { useState } from "react";
import AnswerList from "./AnswerList.jsx";
import AddAnswerModal from "./AddAnswerModal.jsx";
import Style from "../../../StyleComponents/QA_Styles/Style.jsx";
import QStyle from "../../../StyleComponents/QA_Styles/QStyle.jsx";

const QuestionsPanel = ({
  questionID, qAObj, onClickHelpful, productName, onReport, productID, getQa,
}) => {
  const [showAnswerStatus, setShowAnswerStatus] = useState(false);
  const [answerHelp, setAnswerHelp] = useState(false);
  const [questionHelp, setQuestionHelp] = useState(false);
  const [addModalStatus, setAddModalStatus] = useState(false);
  const [qReport, setQReport] = useState(false);
  return (
    <QStyle.Panel>
      <QStyle.Question
        onClick={() => (showAnswerStatus !== true ? setShowAnswerStatus(true) : setShowAnswerStatus(false))}
      >
        {`Q: ${qAObj.question_body}`}
      </QStyle.Question>
      <QStyle.Info>
        <QStyle.Helpful>Helpful?</QStyle.Helpful>
        {questionHelp ? <QStyle.Helpful>{`|  Yes (${qAObj.question_helpfulness})`}</QStyle.Helpful>
          : (
            <QStyle.Yes
              id={questionID}
              type="question"
              onClick={(e) => {
                onClickHelpful(e);
                setQuestionHelp(true);
              }}
            >
              {`|  Yes (${qAObj.question_helpfulness})`}
            </QStyle.Yes>
          )}
        <QStyle.AddAnswer onClick={() => (setAddModalStatus(true))}>|  Add Answer</QStyle.AddAnswer>
        <AddAnswerModal
          productName={productName}
          productID={productID}
          getQa={getQa}
          questionBody={qAObj.question_body}
          addModalStatus={addModalStatus}
          questionID={questionID}
          onClose={() => (setAddModalStatus(false))}
        />
        {qReport ? <QStyle.Reported>| Reported</QStyle.Reported>
          : (
            <QStyle.Report
              id={questionID}
              type="question"
              onClick={(e) => {
                setQReport(true);
                onReport(e);
              }}
            >
              | Report
            </QStyle.Report>
          )}
      </QStyle.Info>
      {showAnswerStatus && <AnswerList onClickHelpful={onClickHelpful} answerObj={qAObj.answers} onReport={onReport} />}
    </QStyle.Panel>
  );
};

export default QuestionsPanel;
