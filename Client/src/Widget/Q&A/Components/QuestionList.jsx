import React, { useState, useEffect } from "react";
import axios from 'axios';
import QuestionPanel from "./QuestionPanel.jsx";
import SubmitNewQuestion from "./SubmitNewQuestion.jsx";
import Style from "../../../StyleComponents/QA_Styles/Style.jsx";
import AddAQuestionModal from "./AddAQuestionModal.jsx";

const QuestionList = ({
  qA, getQa, onClickHelpful, productName, onReport, productID, end, setEnd, isShowAddQuestion, setShowAddQuestion,
}) => {
  if (qA.length === 0) return <SubmitNewQuestion productID={productID} productName={productName} getQa={getQa} />;
  return (
    <Style.QuestionBody>
      {qA.slice(0, end).map((qAObj) => (
        <QuestionPanel
          key={qAObj.question_id}
          productName={productName}
          questionid={qAObj.question_id}
          qAObj={qAObj}
          onClickHelpful={onClickHelpful}
          onReport={onReport}
          getQa={getQa}
        />
      ))}
    </Style.QuestionBody>
  );
};
export default QuestionList;
